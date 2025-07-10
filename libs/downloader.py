import asyncio
import aiohttp
import aiofiles
import logging
from pathlib import Path
from tqdm.asyncio import tqdm
import re
import json
import os
from urllib.parse import urljoin, urlparse, unquote
from playwright.async_api import async_playwright
from typing import Set, Dict, List, Optional
from datetime import datetime

TARGET_EXTENSIONS = {'.js', '.ts', '.jsx', '.tsx', '.wasm', '.map', '.json', '.html'}

class SPAAssetCollector:
    """Collects assets from a Single Page Application using Playwright."""
    
    def __init__(self, target_url: str, asset_dir: Path, logger):
        self.target_url = target_url
        self.asset_dir = asset_dir
        self.logger = logger
        self.downloaded_files: Set[str] = set()
        self.failed_downloads: Dict[str, str] = {}
        self.network_requests: List[Dict] = []
        
        # File extensions to collect
        self.target_extensions = TARGET_EXTENSIONS
        
        # Patterns for dynamic imports and webpack chunks
        self.dynamic_patterns = [
            r'webpackChunk\w+',
            r'import\([\'"][^\'"]+[\'"]\)',
            r'lazy\([\'"][^\'"]+[\'"]\)',
            r'React\.lazy\([\'"][^\'"]+[\'"]\)',
            r'Vue\.component\([\'"][^\'"]+[\'"]\)',
            r'chunk-[a-zA-Z0-9]+',
            r'[a-zA-Z0-9]+\.chunk\.js',
            r'[a-zA-Z0-9]+\.bundle\.js'
        ]
    
    async def start_browser(self):
        """Start Playwright browser in headless mode."""
        self.playwright = await async_playwright().start()
        self.browser = await self.playwright.chromium.launch(
            headless=True,
            args=[
                '--disable-web-security',
                '--disable-features=VizDisplayCompositor',
                '--no-sandbox',
                '--disable-setuid-sandbox',
                '--disable-dev-shm-usage',
                '--disable-gpu',
                '--disable-background-timer-throttling',
                '--disable-backgrounding-occluded-windows',
                '--disable-renderer-backgrounding'
            ]
        )
        self.context = await self.browser.new_context(
            ignore_https_errors=True,
            viewport={'width': 1920, 'height': 1080},
            user_agent='Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
        )
        self.page = await self.context.new_page()
        
        # Set up request interception
        await self.page.route("**/*", self.handle_request)
        
        # Set longer timeouts
        self.page.set_default_timeout(60000)  # 60 seconds
        self.page.set_default_navigation_timeout(60000)  # 60 seconds
        
        self.logger.info(f"Browser started for URL: {self.target_url}")
    
    async def handle_request(self, route):
        """Handle intercepted network requests."""
        request = route.request
        url = request.url
        
        # Log the request
        request_info = {
            'url': url,
            'method': request.method,
            'resource_type': request.resource_type,
            'headers': dict(request.headers),
            'timestamp': datetime.now().isoformat()
        }
        self.network_requests.append(request_info)
        
        # Check if this is a file we want to download
        if self.should_download_file(url):
            asyncio.create_task(self.download_file(url))
        
        # Continue the request
        await route.continue_()
    
    def should_download_file(self, url: str) -> bool:
        """Determine if a URL should be downloaded based on extension and patterns."""
        try:
            parsed_url = urlparse(url)
            path = parsed_url.path.lower()
            
            # Check for target file extensions
            if any(path.endswith(ext) for ext in self.target_extensions):
                return True
            
            # Check for dynamic import patterns
            for pattern in self.dynamic_patterns:
                if re.search(pattern, url, re.IGNORECASE):
                    return True
            
            # Check for common asset patterns
            asset_patterns = [
                r'\.js$', r'\.ts$', r'\.jsx$', r'\.tsx$', r'\.wasm$',
                r'\.map$', r'\.json$', r'\.html$', r'chunk', r'bundle'
            ]
            
            for pattern in asset_patterns:
                if re.search(pattern, path, re.IGNORECASE):
                    return True
            
            return False
            
        except Exception as e:
            self.logger.warning(f"Error parsing URL {url}: {e}")
            return False
    
    async def download_file(self, url: str):
        """Download a file asynchronously."""
        if url in self.downloaded_files:
            return
        
        try:
            parsed_url = urlparse(url)
            filename = self.generate_filename(url, parsed_url)
            file_path = self.asset_dir / filename
            
            # Create subdirectories if needed
            file_path.parent.mkdir(parents=True, exist_ok=True)
            
            async with aiohttp.ClientSession() as session:
                async with session.get(url, ssl=False) as response:
                    if response.status == 200:
                        content = await response.read()
                        
                        async with aiofiles.open(file_path, 'wb') as f:
                            await f.write(content)
                        
                        self.downloaded_files.add(url)
                        self.logger.info(f"Downloaded: {filename} ({len(content)} bytes)")
                        
                        # Save metadata
                        await self.save_file_metadata(url, filename, dict(response.headers))
                    else:
                        self.failed_downloads[url] = f"HTTP {response.status}"
                        self.logger.warning(f"Failed to download {url}: HTTP {response.status}")
        
        except Exception as e:
            self.failed_downloads[url] = str(e)
            self.logger.error(f"Error downloading {url}: {e}")
    
    def generate_filename(self, url: str, parsed_url) -> str:
        """Generate a filename for the downloaded file."""
        path = parsed_url.path
        if not path or path == '/':
            path = '/index.html'
        
        # Clean the path
        filename = unquote(path.lstrip('/'))
        
        # Handle query parameters for dynamic files
        if parsed_url.query:
            # Create a hash from query params for unique filenames
            query_hash = str(hash(parsed_url.query))[-8:]
            name, ext = os.path.splitext(filename)
            if not ext:
                ext = '.js'  # Default to .js for dynamic files
            filename = f"{name}_{query_hash}{ext}"
        
        # Ensure unique filenames
        counter = 1
        original_filename = filename
        while (self.asset_dir / filename).exists():
            name, ext = os.path.splitext(original_filename)
            filename = f"{name}_{counter}{ext}"
            counter += 1
        
        return filename
    
    async def save_file_metadata(self, url: str, filename: str, headers: Dict):
        """Save metadata about downloaded files."""
        metadata_file = self.asset_dir / "download_metadata.json"
        
        metadata = {
            'url': url,
            'filename': filename,
            'headers': dict(headers),
            'downloaded_at': datetime.now().isoformat()
        }
        
        try:
            # Use a lock to prevent concurrent access to the metadata file
            if not hasattr(self, '_metadata_lock'):
                self._metadata_lock = asyncio.Lock()
            
            async with self._metadata_lock:
                data = []
                if metadata_file.exists():
                    try:
                        async with aiofiles.open(metadata_file, 'r') as f:
                            content = await f.read()
                            if content.strip():  # Only parse if content is not empty
                                data = json.loads(content)
                            else:
                                data = []
                    except (json.JSONDecodeError, UnicodeDecodeError) as e:
                        # If JSON is corrupted, start fresh
                        self.logger.warning(f"Corrupted metadata file, starting fresh: {e}")
                        data = []
                
                data.append(metadata)
                
                # Write atomically using a temporary file
                temp_file = metadata_file.with_suffix('.tmp')
                async with aiofiles.open(temp_file, 'w') as f:
                    await f.write(json.dumps(data, indent=2))
                
                # Atomic move
                temp_file.replace(metadata_file)
        
        except Exception as e:
            self.logger.error(f"Error saving metadata: {e}")
    
    async def navigate_and_wait(self):
        """Navigate to the target URL and wait for the page to load."""
        try:
            self.logger.info(f"Navigating to: {self.target_url}")
            
            # Navigate to the page with more lenient timeout and conditions
            await self.page.goto(
                self.target_url, 
                wait_until='domcontentloaded',  # Less strict than 'networkidle'
                timeout=60000  # Increase timeout to 60 seconds
            )
            
            # Wait for dynamic content to load
            await asyncio.sleep(3)
            
            # Try to scroll to trigger lazy loading (with error handling)
            try:
                await self.page.evaluate("window.scrollTo(0, document.body.scrollHeight)")
                await asyncio.sleep(2)
            except Exception as e:
                self.logger.warning(f"Scroll failed: {e}")
            
            # Trigger more interactions to load dynamic content (with error handling)
            try:
                await self.page.evaluate("""
                    // Trigger common SPA interactions
                    const buttons = document.querySelectorAll('button, a, [role="button"]');
                    buttons.forEach(btn => {
                        if (btn.offsetParent !== null) {  // If visible
                            btn.dispatchEvent(new MouseEvent('mouseover'));
                        }
                    });
                """)
                await asyncio.sleep(2)
            except Exception as e:
                self.logger.warning(f"Interaction triggering failed: {e}")
            
            self.logger.info("Page navigation and waiting completed")
            
        except Exception as e:
            self.logger.error(f"Error during navigation: {e}")
            # Don't raise the exception, just log it and continue
            # This allows the tool to still collect assets even if navigation has issues
    
    async def collect_assets(self):
        """Main method to collect assets from the SPA."""
        try:
            await self.start_browser()
            
            # Try to navigate, but don't fail if it times out
            try:
                await self.navigate_and_wait()
            except Exception as e:
                self.logger.warning(f"Navigation failed, but continuing with asset collection: {e}")
            
            # Wait for any remaining downloads to complete
            self.logger.info("Waiting for downloads to complete...")
            await asyncio.sleep(5)
            
            # Save network requests summary
            await self.save_network_summary()
            
        finally:
            await self.cleanup()
    
    async def save_network_summary(self):
        """Save a summary of all network requests."""
        summary_file = self.asset_dir / "network_summary.json"
        
        summary = {
            'total_requests': len(self.network_requests),
            'downloaded_files': len(self.downloaded_files),
            'failed_downloads': len(self.failed_downloads),
            'requests_by_type': {},
            'requests': self.network_requests,
            'failed_downloads': self.failed_downloads
        }
        
        # Group requests by resource type
        for request in self.network_requests:
            resource_type = request['resource_type']
            summary['requests_by_type'][resource_type] = summary['requests_by_type'].get(resource_type, 0) + 1
        
        async with aiofiles.open(summary_file, 'w') as f:
            await f.write(json.dumps(summary, indent=2))
        
        self.logger.info(f"Network summary saved to: {summary_file}")
    
    async def cleanup(self):
        """Clean up browser resources."""
        try:
            if hasattr(self, 'context'):
                await self.context.close()
            if hasattr(self, 'browser'):
                await self.browser.close()
            if hasattr(self, 'playwright'):
                await self.playwright.stop()
            
            self.logger.info("Browser cleanup completed")
        except Exception as e:
            self.logger.error(f"Error during cleanup: {e}")

async def download_assets(url: str, asset_dir: Path, logger) -> dict:
    """Download assets from SPA using Playwright."""
    collector = SPAAssetCollector(url, asset_dir, logger)
    await collector.collect_assets()
    
    return {
        'downloaded': len(collector.downloaded_files),
        'failed': len(collector.failed_downloads),
        'total_requests': len(collector.network_requests)
    } 