import logging
from pathlib import Path
import jsbeautifier
import re
import subprocess
import json
import asyncio
import aiofiles
from typing import Dict, List, Set, Tuple, Optional
from datetime import datetime
import tempfile
import shutil

class SPADeobfuscator:
    """Deobfuscates and beautifies JavaScript/TypeScript files."""
    
    def __init__(self, processed_dir: Path, logger):
        self.processed_dir = processed_dir
        self.logger = logger
        
        # Ensure processed directory exists
        self.processed_dir.mkdir(exist_ok=True)
        
        # Obfuscation detection patterns
        self.obfuscation_patterns = {
            'obfuscator_io': [
                r'_0x[a-f0-9]{4,6}',  # _0x variables
                r'function\s+_0x[a-f0-9]{4,6}\s*\([^)]*\)\s*\{[^}]*return\s+_0x[a-f0-9]{4,6}\s*\([^)]*\)[^}]*\}',  # Obfuscator.io function patterns
                r'var\s+_0x[a-f0-9]{4,6}\s*=\s*\[[^\]]+\];',  # String arrays
                r'String\.fromCharCode',  # String decoding
                r'parseInt\([^,]+,\s*16\)',  # Hex decoding
            ],
            'control_flow_flattening': [
                r'while\s*\(\s*true\s*\)\s*\{[^}]*switch\s*\([^)]+\)\s*\{[^}]*case\s+\d+:[^}]*break;[^}]*\}',  # Control flow flattening
                r'for\s*\(\s*var\s+\w+\s*=\s*\d+;\s*\w+\s*<\s*\d+;\s*\w+\+\+\)\s*\{[^}]*switch\s*\([^)]+\)',  # Loop-based control flow
            ],
            'string_encoding': [
                r'\\x[a-f0-9]{2}',  # Hex encoded strings
                r'\\u[a-f0-9]{4}',  # Unicode encoded strings
                r'\\[0-7]{3}',  # Octal encoded strings
            ],
            'eval_patterns': [
                r'eval\s*\([^)]+\)',  # eval() calls
                r'Function\s*\([^)]*\)\s*\([^)]*\)',  # Function constructor
                r'setTimeout\s*\([^,]+,\s*\d+\)',  # setTimeout with code
                r'setInterval\s*\([^,]+,\s*\d+\)',  # setInterval with code
            ],
            'minification': [
                r'function\s*\w*\s*\([^)]*\)\s*\{[^}]*\}',  # Minified functions
                r'var\s+\w+=[^;]+;',  # Minified variable declarations
                r'[a-zA-Z_$][a-zA-Z0-9_$]*\.[a-zA-Z_$][a-zA-Z0-9_$]*\s*\([^)]*\)',  # Minified method calls
            ]
        }
        
        # File extensions to process
        self.target_extensions = {'.js', '.ts', '.jsx', '.tsx'}
    
    def detect_obfuscation(self, content: str) -> Dict[str, List[str]]:
        """Detect obfuscation patterns in the code."""
        results = {}
        
        for obfuscation_type, patterns in self.obfuscation_patterns.items():
            matches = []
            for pattern in patterns:
                found = re.findall(pattern, content, re.MULTILINE | re.DOTALL)
                if found:
                    matches.extend(found)
            
            if matches:
                results[obfuscation_type] = matches
        
        return results
    
    async def deobfuscate_with_de4js(self, input_file: Path, output_file: Path) -> bool:
        """Deobfuscate using de4js-core."""
        try:
            # Create de4js script
            de4js_script = f"""
const de4js = require('de4js-core');
const fs = require('fs');

const inputCode = fs.readFileSync('{input_file}', 'utf8');
const result = de4js.deobfuscate(inputCode);

fs.writeFileSync('{output_file}', result.code, 'utf8');
console.log('Deobfuscation completed');
"""
            
            # Write script to temporary file in a safe location
            with tempfile.NamedTemporaryFile(mode='w', suffix='.js', delete=False) as temp_script:
                temp_script.write(de4js_script)
                script_file = Path(temp_script.name)
            
            try:
                # Run de4js
                result = subprocess.run(
                    ['node', str(script_file)],
                    cwd=self.processed_dir,
                    capture_output=True,
                    text=True
                )
                
                if result.returncode == 0:
                    self.logger.info(f"De4js deobfuscation completed for {input_file.name}")
                    return True
                else:
                    self.logger.warning(f"De4js failed for {input_file.name}: {result.stderr}")
                    return False
                    
            finally:
                # Clean up
                script_file.unlink(missing_ok=True)
                
        except Exception as e:
            self.logger.error(f"Error in de4js deobfuscation: {e}")
            return False
    
    async def deobfuscate_with_ast(self, input_file: Path, output_file: Path) -> bool:
        """Deobfuscate using AST traversal with esprima and escodegen."""
        try:
            # Create AST script
            ast_script = f"""
const esprima = require('esprima');
const escodegen = require('escodegen');
const fs = require('fs');

const inputCode = fs.readFileSync('{input_file}', 'utf8');
const ast = esprima.parse(inputCode);
const result = escodegen.generate(ast);

fs.writeFileSync('{output_file}', result, 'utf8');
console.log('AST processing completed');
"""
            
            # Write script to temporary file in a safe location
            with tempfile.NamedTemporaryFile(mode='w', suffix='.js', delete=False) as temp_script:
                temp_script.write(ast_script)
                script_file = Path(temp_script.name)
            
            try:
                # Run AST processing
                result = subprocess.run(
                    ['node', str(script_file)],
                    cwd=self.processed_dir,
                    capture_output=True,
                    text=True
                )
                
                if result.returncode == 0:
                    self.logger.info(f"AST processing completed for {input_file.name}")
                    return True
                else:
                    self.logger.warning(f"AST processing failed for {input_file.name}: {result.stderr}")
                    return False
                    
            finally:
                # Clean up
                script_file.unlink(missing_ok=True)
                
        except Exception as e:
            self.logger.error(f"Error in AST processing: {e}")
            return False
    
    async def beautify_code(self, input_file: Path, output_file: Path) -> bool:
        """Beautify code using js-beautify."""
        try:
            # Create beautify script
            beautify_script = f"""
const beautify = require('js-beautify').js;
const fs = require('fs');

const inputCode = fs.readFileSync('{input_file}', 'utf8');
const beautified = beautify(inputCode, {{
    indent_size: 2,
    space_in_empty_paren: true,
    preserve_newlines: true,
    max_preserve_newlines: 2
}});

fs.writeFileSync('{output_file}', beautified, 'utf8');
console.log('Beautification completed');
"""
            
            # Write script to temporary file in a safe location
            with tempfile.NamedTemporaryFile(mode='w', suffix='.js', delete=False) as temp_script:
                temp_script.write(beautify_script)
                script_file = Path(temp_script.name)
            
            try:
                # Run beautification
                result = subprocess.run(
                    ['node', str(script_file)],
                    cwd=self.processed_dir,
                    capture_output=True,
                    text=True
                )
                
                if result.returncode == 0:
                    self.logger.info(f"Beautification completed for {input_file.name}")
                    return True
                else:
                    # If Node.js beautification fails, fall back to Python jsbeautifier
                    self.logger.warning(f"Node.js beautification failed for {input_file.name}, trying Python fallback")
                    return False
                    
            finally:
                # Clean up
                script_file.unlink(missing_ok=True)
                
        except Exception as e:
            self.logger.error(f"Error in Node.js beautification: {e}")
            return False
    
    async def process_file(self, file_path: Path) -> Dict:
        """Process a single JavaScript/TypeScript file."""
        result = {
            'file': str(file_path),
            'deobfuscated': False,
            'obfuscation_detected': False,
            'obfuscation_types': [],
            'error': None,
            'output_file': None
        }
        
        try:
            # Read file content
            content = file_path.read_text(encoding='utf-8', errors='ignore')
            
            # Detect obfuscation
            obfuscation_results = self.detect_obfuscation(content)
            if obfuscation_results:
                result['obfuscation_detected'] = True
                result['obfuscation_types'] = list(obfuscation_results.keys())
                self.logger.info(f"Obfuscation detected in {file_path.name}: {list(obfuscation_results.keys())}")
            
            # Generate output filename
            output_filename = f"{file_path.stem}.deob{file_path.suffix}"
            output_file = self.processed_dir / output_filename
            
            # Try deobfuscation methods
            success = False
            
            # Start with Python jsbeautifier (most reliable)
            try:
                beautified = jsbeautifier.beautify(content)
                output_file.write_text(beautified, encoding='utf-8')
                success = True
                self.logger.info(f"Beautified with jsbeautifier: {file_path.name}")
            except Exception as e:
                self.logger.warning(f"Python beautification failed for {file_path.name}: {e}")
            
            # Try Node.js methods only if Python method failed and obfuscation detected
            if not success and result['obfuscation_detected']:
                # Try de4js for obfuscated files
                success = await self.deobfuscate_with_de4js(file_path, output_file)
                
                # Try AST processing if de4js failed
                if not success:
                    success = await self.deobfuscate_with_ast(file_path, output_file)
                
                # Try Node.js beautification as last resort
                if not success:
                    success = await self.beautify_code(file_path, output_file)
            
            if success:
                result['deobfuscated'] = True
                result['output_file'] = str(output_file)
                self.logger.info(f"Processed: {file_path.name} -> {output_file.name}")
            else:
                result['error'] = "All processing methods failed"
                
        except Exception as e:
            result['error'] = str(e)
            self.logger.error(f"Error processing {file_path.name}: {e}")
        
        return result

def process_js_assets(js_file: Path, processed_dir: Path, logger) -> dict:
    """Process a single JS/TS file with deobfuscation and beautification."""
    deobfuscator = SPADeobfuscator(processed_dir, logger)
    return asyncio.run(deobfuscator.process_file(js_file)) 