import asyncio
import aiohttp
import aiofiles
import logging
import re
import json
import base64
import subprocess
from pathlib import Path
from urllib.parse import urljoin, urlparse
from typing import Dict, List, Set, Optional, Tuple
from datetime import datetime
import os

class SPASourcemapExtractor:
    """Extracts and processes source maps from JavaScript files."""
    
    def __init__(self, project_dir: Path, logger):
        self.project_dir = project_dir
        self.assets_dir = project_dir / "assets"
        self.sourcemaps_dir = project_dir / "sourcemaps"
        self.logger = logger
        
        # Ensure sourcemaps directory exists
        self.sourcemaps_dir.mkdir(exist_ok=True)
        
        # Source map patterns
        self.sourcemap_patterns = [
            r'//#\s*sourceMappingURL\s*=\s*([^\s]+)',
            r'//@\s*sourceMappingURL\s*=\s*([^\s]+)',
            r'/\*\s*#\s*sourceMappingURL\s*=\s*([^\s]+)\s*\*/',
            r'/\*\s*@\s*sourceMappingURL\s*=\s*([^\s]+)\s*\*/'
        ]
        
        # Inline source map patterns
        self.inline_patterns = [
            r'//#\s*sourceMappingURL\s*=\s*data:application/json;base64,([A-Za-z0-9+/=]+)',
            r'//@\s*sourceMappingURL\s*=\s*data:application/json;base64,([A-Za-z0-9+/=]+)',
            r'/\*\s*#\s*sourceMappingURL\s*=\s*data:application/json;base64,([A-Za-z0-9+/=]+)\s*\*/',
            r'/\*\s*@\s*sourceMappingURL\s*=\s*data:application/json;base64,([A-Za-z0-9+/=]+)\s*\*/'
        ]
    
    def find_sourcemap_references(self, content: str) -> List[Tuple[str, str]]:
        """Find source map references in file content."""
        references = []
        
        # Check for inline source maps
        for pattern in self.inline_patterns:
            matches = re.findall(pattern, content)
            for match in matches:
                references.append(('inline', match))
        
        # Check for external source maps
        for pattern in self.sourcemap_patterns:
            matches = re.findall(pattern, content)
            for match in matches:
                if not match.startswith('data:'):
                    references.append(('external', match))
        
        return references
    
    async def download_sourcemap(self, url: str, base_url: str = None) -> Optional[Dict]:
        """Download a source map from URL."""
        try:
            full_url = urljoin(str(base_url) if base_url else '', str(url))
            
            async with aiohttp.ClientSession() as session:
                async with session.get(full_url, ssl=False) as response:
                    if response.status == 200:
                        content = await response.text()
                        return json.loads(content)
                    else:
                        self.logger.warning(f"Failed to download sourcemap {full_url}: HTTP {response.status}")
                        return None
        except Exception as e:
            self.logger.error(f"Error downloading sourcemap {url}: {e}")
            return None
    
    def decode_inline_sourcemap(self, base64_data: str) -> Optional[Dict]:
        """Decode inline base64 source map."""
        try:
            decoded = base64.b64decode(base64_data).decode('utf-8')
            return json.loads(decoded)
        except Exception as e:
            self.logger.error(f"Error decoding inline sourcemap: {e}")
            return None
    
    async def extract_sources_from_sourcemap(self, sourcemap: Dict, source_file: str) -> List[Dict]:
        """Extract source files from source map using source-map library."""
        try:
            # Create source-map script
            script = f"""
const sourceMap = require('source-map');
const fs = require('fs');

const consumer = new sourceMap.SourceMapConsumer({json.dumps(sourcemap)});

const sources = [];
consumer.sources.forEach((source, index) => {{
    const content = consumer.sourceContentFor(source);
    if (content) {{
        sources.push({{
            filename: source,
            content: content,
            index: index
        }});
    }}
}});

consumer.destroy();

fs.writeFileSync('sources.json', JSON.stringify(sources, null, 2));
console.log('Sources extracted:', sources.length);
"""
            
            # Write script to temporary file
            script_file = self.sourcemaps_dir / "extract_sources.js"
            async with aiofiles.open(script_file, 'w') as f:
                await f.write(script)
            
            # Run source-map extraction
            result = subprocess.run(
                ['node', str(script_file)],
                cwd=self.sourcemaps_dir,
                capture_output=True,
                text=True
            )
            
            # Clean up
            script_file.unlink(missing_ok=True)
            
            if result.returncode == 0:
                # Read extracted sources
                sources_file = self.sourcemaps_dir / "sources.json"
                if sources_file.exists():
                    async with aiofiles.open(sources_file, 'r') as f:
                        content = await f.read()
                        sources = json.loads(content)
                    sources_file.unlink(missing_ok=True)
                    return sources
                else:
                    self.logger.warning(f"No sources extracted from {source_file}")
                    return []
            else:
                self.logger.warning(f"Source-map extraction failed for {source_file}: {result.stderr}")
                return []
                
        except Exception as e:
            self.logger.error(f"Error extracting sources from {source_file}: {e}")
            return []
    
    async def save_source_files(self, sources: List[Dict], sourcemap_name: str):
        """Save extracted source files to sourcemaps directory."""
        sourcemap_dir = self.sourcemaps_dir / sourcemap_name
        sourcemap_dir.mkdir(exist_ok=True)
        
        saved_files = []
        
        for source in sources:
            try:
                filename = source['filename']
                content = source['content']
                
                # Clean filename
                filename = re.sub(r'[<>:"/\\|?*]', '_', filename)
                if not filename.endswith(('.js', '.ts', '.jsx', '.tsx')):
                    filename += '.js'
                
                file_path = sourcemap_dir / filename
                
                # Ensure unique filename
                counter = 1
                original_filename = filename
                while file_path.exists():
                    name, ext = os.path.splitext(original_filename)
                    filename = f"{name}_{counter}{ext}"
                    file_path = sourcemap_dir / filename
                    counter += 1
                
                async with aiofiles.open(file_path, 'w', encoding='utf-8') as f:
                    await f.write(content)
                
                saved_files.append({
                    'original_filename': source['filename'],
                    'saved_filename': filename,
                    'size': len(content)
                })
                
                self.logger.info(f"Saved source file: {filename} ({len(content)} bytes)")
                
            except Exception as e:
                self.logger.error(f"Error saving source file {source.get('filename', 'unknown')}: {e}")
        
        return saved_files
    
    async def process_file(self, file_path: Path) -> Dict:
        """Process a single file for source maps."""
        result = {
            'file': str(file_path),
            'sourcemaps_found': 0,
            'sources_extracted': 0,
            'error': None,
            'sourcemaps': []
        }
        
        try:
            # Read file content
            content = file_path.read_text(encoding='utf-8', errors='ignore')
            
            # Find source map references
            references = self.find_sourcemap_references(content)
            
            if not references:
                return result
            
            self.logger.info(f"Found {len(references)} source map references in {file_path.name}")
            
            for ref_type, ref_url in references:
                sourcemap_info = {
                    'type': ref_type,
                    'url': ref_url,
                    'sources_extracted': 0,
                    'saved_files': []
                }
                
                try:
                    # Get source map content
                    if ref_type == 'inline':
                        sourcemap_data = self.decode_inline_sourcemap(ref_url)
                    else:
                        sourcemap_data = await self.download_sourcemap(ref_url, str(file_path.parent))
                    
                    if sourcemap_data:
                        # Extract sources
                        sources = await self.extract_sources_from_sourcemap(sourcemap_data, file_path.name)
                        
                        if sources:
                            # Save source files
                            sourcemap_name = f"{file_path.stem}_{ref_type}_{len(result['sourcemaps'])}"
                            saved_files = await self.save_source_files(sources, sourcemap_name)
                            
                            sourcemap_info['sources_extracted'] = len(sources)
                            sourcemap_info['saved_files'] = saved_files
                            result['sources_extracted'] += len(sources)
                            
                            self.logger.info(f"Extracted {len(sources)} sources from {file_path.name}")
                        
                        result['sourcemaps'].append(sourcemap_info)
                        result['sourcemaps_found'] += 1
                    
                except Exception as e:
                    self.logger.error(f"Error processing sourcemap in {file_path.name}: {e}")
                    sourcemap_info['error'] = str(e)
                    result['sourcemaps'].append(sourcemap_info)
            
        except Exception as e:
            result['error'] = str(e)
            self.logger.error(f"Error processing {file_path.name}: {e}")
        
        return result
    
    async def process_all_files(self) -> List[Dict]:
        """Process all JavaScript files for source maps."""
        js_files = list(self.assets_dir.rglob("*.js")) + list(self.assets_dir.rglob("*.ts"))
        
        results = []
        for file_path in js_files:
            result = await self.process_file(file_path)
            results.append(result)
        
        return results
    
    async def save_mapping_summary(self, results: List[Dict]):
        """Save a summary of source map processing."""
        summary = {
            'total_files_processed': len(results),
            'files_with_sourcemaps': sum(1 for r in results if r['sourcemaps_found'] > 0),
            'total_sourcemaps_found': sum(r['sourcemaps_found'] for r in results),
            'total_sources_extracted': sum(r['sources_extracted'] for r in results),
            'processing_date': datetime.now().isoformat(),
            'results': results
        }
        
        mapping_file = self.sourcemaps_dir / "mapping.json"
        async with aiofiles.open(mapping_file, 'w') as f:
            await f.write(json.dumps(summary, indent=2))
        
        self.logger.info(f"Source map summary saved to: {mapping_file}")

async def extract_sourcemaps(project_dir: Path, logger) -> Dict:
    """Extract source maps from project assets."""
    extractor = SPASourcemapExtractor(project_dir, logger)
    results = await extractor.process_all_files()
    await extractor.save_mapping_summary(results)
    
    return {
        'files_processed': len(results),
        'files_with_sourcemaps': sum(1 for r in results if r['sourcemaps_found'] > 0),
        'total_sourcemaps': sum(r['sourcemaps_found'] for r in results),
        'total_sources': sum(r['sources_extracted'] for r in results)
    } 