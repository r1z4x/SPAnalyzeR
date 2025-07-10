import re
import json
import yaml
import logging
from pathlib import Path
from typing import Dict, List, Set, Optional, Tuple
from dataclasses import dataclass, asdict
from datetime import datetime
import hashlib
import base64
from urllib.parse import urlparse
import ipaddress
import secrets
from concurrent.futures import ThreadPoolExecutor, as_completed
from tqdm import tqdm

@dataclass
class SecretDetectionResult:
    """Result of a secret detection using secrets-patterns-db."""
    file_path: str
    line_number: int
    pattern_name: str
    confidence: str
    value: str
    context: str
    severity: str
    category: str
    regex_pattern: str
    timestamp: str

class SecretsPatternDetector:
    """Advanced secrets detection using secrets-patterns-db database."""
    
    def __init__(self, logger, patterns_db_path: str = "secrets-patterns-db/db/rules-stable.yml"):
        self.logger = logger
        self.patterns_db_path = Path(patterns_db_path)
        self.patterns = self._load_patterns()
        self.compiled_patterns = self._compile_patterns()
        self.results: List[SecretDetectionResult] = []
        
    def _load_patterns(self) -> List[Dict]:
        """Load patterns from secrets-patterns-db."""
        try:
            if not self.patterns_db_path.exists():
                self.logger.warning(f"Patterns database not found at {self.patterns_db_path}")
                return []
            
            with open(self.patterns_db_path, 'r', encoding='utf-8') as f:
                data = yaml.safe_load(f)
            
            patterns = data.get('patterns', [])
            self.logger.info(f"Loaded {len(patterns)} patterns from secrets-patterns-db")
            return patterns
            
        except Exception as e:
            self.logger.error(f"Error loading patterns: {e}")
            return []
    
    def _compile_patterns(self) -> List[Dict]:
        """Compile regex patterns for faster matching."""
        compiled_patterns = []
        
        for pattern_data in self.patterns:
            pattern = pattern_data.get('pattern', {})
            pattern_name = pattern.get('name', 'Unknown')
            regex_pattern = pattern.get('regex', '')
            confidence = pattern.get('confidence', 'medium')
            
            if not regex_pattern:
                continue
            
            try:
                compiled_regex = re.compile(regex_pattern, re.IGNORECASE)
                compiled_patterns.append({
                    'name': pattern_name,
                    'regex': compiled_regex,
                    'confidence': confidence,
                    'original_pattern': pattern_data
                })
            except re.error as e:
                self.logger.warning(f"Invalid regex pattern '{regex_pattern}' for {pattern_name}: {e}")
                continue
        
        self.logger.info(f"Compiled {len(compiled_patterns)} valid patterns")
        return compiled_patterns
    
    def _get_severity_from_confidence(self, confidence: str) -> str:
        """Convert confidence level to severity."""
        confidence_map = {
            'high': 'CRITICAL',
            'medium': 'HIGH',
            'low': 'MEDIUM'
        }
        return confidence_map.get(confidence.lower(), 'MEDIUM')
    
    def _get_category_from_pattern_name(self, pattern_name: str) -> str:
        """Categorize pattern based on name."""
        name_lower = pattern_name.lower()
        
        # Cloud Services
        if any(cloud in name_lower for cloud in ['aws', 'azure', 'google', 'gcp', 'cloud']):
            return 'Cloud Services'
        
        # Authentication
        if any(auth in name_lower for auth in ['api', 'key', 'token', 'secret', 'password', 'auth']):
            return 'Authentication'
        
        # Database
        if any(db in name_lower for db in ['database', 'db', 'mysql', 'postgres', 'mongodb', 'redis']):
            return 'Database'
        
        # Payment
        if any(payment in name_lower for payment in ['stripe', 'paypal', 'payment', 'card']):
            return 'Payment'
        
        # Social Media
        if any(social in name_lower for social in ['facebook', 'twitter', 'instagram', 'linkedin', 'github']):
            return 'Social Media'
        
        # Communication
        if any(comm in name_lower for comm in ['slack', 'discord', 'telegram', 'whatsapp', 'email']):
            return 'Communication'
        
        # Development
        if any(dev in name_lower for dev in ['github', 'gitlab', 'bitbucket', 'npm', 'docker']):
            return 'Development'
        
        return 'Other'
    
    def _mask_sensitive_value(self, value: str) -> str:
        """Return the original value without masking."""
        return value
    
    def _validate_detection(self, pattern_name: str, value: str, confidence: str) -> bool:
        """Validate if the detected value is actually sensitive."""
        if not value or len(value) < 3:
            return False
        
        # Skip common false positives
        false_positives = [
            'example', 'test', 'demo', 'sample', 'placeholder', 'dummy',
            'localhost', '127.0.0.1', 'example.com', 'test.com',
            'admin@example.com', 'user@test.com', 'your-', 'my-', 'our-',
            'api_key', 'secret_key', 'access_key', 'private_key',
            'sk_', 'pk_', 'ak_', 'rk_', 'tk_', 'ck_',
            '000000', '111111', '123456', 'abcdef', 'aaaaaa', 'bbbbbb'
        ]
        
        value_lower = value.lower()
        for fp in false_positives:
            if fp in value_lower:
                return False
        
        # Enhanced validation for specific patterns
        if 'ip' in pattern_name.lower():
            try:
                ipaddress.ip_address(value.split(':')[0])  # Handle port numbers
                return True
            except ValueError:
                return False
        
        if 'email' in pattern_name.lower() or '@' in value:
            # Basic email validation
            if not re.match(r'^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$', value):
                return False
        
        # API Key validation - check for proper format
        if 'api' in pattern_name.lower() or 'key' in pattern_name.lower():
            # Skip if too short or too long
            if len(value) < 10 or len(value) > 200:
                return False
            # Skip if contains obvious test patterns
            if re.search(r'(test|demo|example|fake|dummy)', value.lower()):
                return False
        
        # Token validation
        if 'token' in pattern_name.lower():
            # Skip if too short
            if len(value) < 10:
                return False
            # Skip if contains obvious test patterns
            if re.search(r'(test|demo|example|fake|dummy)', value.lower()):
                return False
        
        # URL validation
        if 'url' in pattern_name.lower():
            try:
                from urllib.parse import urlparse
                parsed = urlparse(value)
                if not parsed.scheme or not parsed.netloc:
                    return False
            except:
                return False
        
        # Password validation
        if 'password' in pattern_name.lower():
            # Skip if too short or obvious
            if len(value) < 6:
                return False
            if re.search(r'(password|pass|pwd)', value.lower()):
                return False
        
        # Database connection string validation
        if 'database' in pattern_name.lower() or 'connection' in pattern_name.lower():
            if not re.search(r'(mongodb|postgresql|mysql|redis|sqlite)', value.lower()):
                return False
        
        # AWS validation
        if 'aws' in pattern_name.lower():
            if not re.search(r'(AKIA|aws|amazon)', value.lower()):
                return False
        
        # Google validation
        if 'google' in pattern_name.lower():
            if not re.search(r'(google|gcp|firebase)', value.lower()):
                return False
        
        # Azure validation
        if 'azure' in pattern_name.lower():
            if not re.search(r'(azure|microsoft)', value.lower()):
                return False
        
        return True
    
    def detect_in_file(self, file_path: Path) -> List[SecretDetectionResult]:
        """Detect secrets in a single file using compiled patterns database."""
        try:
            content = file_path.read_text(encoding='utf-8', errors='ignore')
            lines = content.split('\n')
            file_results = []
            
            for line_num, line in enumerate(lines, 1):
                for compiled_pattern in self.compiled_patterns:
                    pattern_name = compiled_pattern['name']
                    regex = compiled_pattern['regex']
                    confidence = compiled_pattern['confidence']
                    
                    try:
                        matches = regex.finditer(line)
                        
                        for match in matches:
                            # Extract the captured group or full match
                            value = match.group(1) if match.groups() else match.group(0)
                            
                            # Validate the detected value
                            if self._validate_detection(pattern_name, value, confidence):
                                result = SecretDetectionResult(
                                    file_path=str(file_path),
                                    line_number=line_num,
                                    pattern_name=pattern_name,
                                    confidence=confidence,
                                    value=self._mask_sensitive_value(value),
                                    context=line.strip()[:100] + '...' if len(line) > 100 else line.strip(),
                                    severity=self._get_severity_from_confidence(confidence),
                                    category=self._get_category_from_pattern_name(pattern_name),
                                    regex_pattern=str(regex.pattern),
                                    timestamp=datetime.now().isoformat()
                                )
                                file_results.append(result)
                    
                    except Exception as e:
                        self.logger.warning(f"Error processing pattern '{pattern_name}' in {file_path}: {e}")
                        continue
            
            return file_results
            
        except Exception as e:
            self.logger.error(f"Error detecting secrets in {file_path}: {e}")
            return []
    
    def detect_in_directory(self, directory: Path) -> List[SecretDetectionResult]:
        """Detect secrets in all JavaScript files in a directory using multithreading."""
        js_files = list(directory.rglob("*.js")) + list(directory.rglob("*.ts")) + \
                   list(directory.rglob("*.jsx")) + list(directory.rglob("*.tsx"))
        
        if not js_files:
            self.logger.info("No JavaScript files found for secrets detection")
            self.results = []
            return []
        
        self.logger.info(f"Starting secrets detection on {len(js_files)} files using multithreading...")
        
        all_results = []
        # Use ThreadPoolExecutor for parallel processing
        max_workers = min(8, len(js_files))  # Limit to 8 threads or number of files
        
        with ThreadPoolExecutor(max_workers=max_workers) as executor:
            # Submit all files for processing
            future_to_file = {executor.submit(self.detect_in_file, file_path): file_path 
                            for file_path in js_files}
            
            # Process results as they complete with progress bar
            for future in tqdm(as_completed(future_to_file), 
                             total=len(js_files), 
                             desc="Secrets Detection", 
                             unit="file"):
                file_path = future_to_file[future]
                try:
                    file_results = future.result()
                    all_results.extend(file_results)
                    if file_results:
                        self.logger.info(f"Detected {len(file_results)} secrets in {file_path.name}")
                except Exception as e:
                    self.logger.error(f"Error processing {file_path}: {e}")
        
        self.results = all_results
        return all_results
    
    def get_summary(self) -> Dict:
        """Get a summary of all detections."""
        if not self.results:
            return {"total_detections": 0}
        
        summary = {
            "total_detections": len(self.results),
            "files_analyzed": len(set(r.file_path for r in self.results)),
            "by_severity": {},
            "by_category": {},
            "by_pattern": {},
            "by_confidence": {},
            "critical_findings": []
        }
        
        # Group by various criteria
        for result in self.results:
            severity = result.severity
            summary["by_severity"][severity] = summary["by_severity"].get(severity, 0) + 1
            
            category = result.category
            summary["by_category"][category] = summary["by_category"].get(category, 0) + 1
            
            pattern_name = result.pattern_name
            summary["by_pattern"][pattern_name] = summary["by_pattern"].get(pattern_name, 0) + 1
            
            confidence = result.confidence
            summary["by_confidence"][confidence] = summary["by_confidence"].get(confidence, 0) + 1
            
            if result.severity in ['CRITICAL', 'HIGH']:
                summary["critical_findings"].append({
                    "file": result.file_path,
                    "line": result.line_number,
                    "pattern": result.pattern_name,
                    "category": result.category,
                    "confidence": result.confidence
                })
        
        return summary
    
    def export_results(self, output_file: Path, format: str = 'json'):
        """Export detection results to file."""
        try:
            if format == 'json':
                data = {
                    "summary": self.get_summary(),
                    "detections": [asdict(result) for result in self.results],
                    "exported_at": datetime.now().isoformat(),
                    "patterns_loaded": len(self.patterns)
                }
                output_file.write_text(json.dumps(data, indent=2, default=str))
            
            elif format == 'csv':
                import csv
                with open(output_file, 'w', newline='') as csvfile:
                    fieldnames = ['file_path', 'line_number', 'pattern_name', 'confidence', 
                                'value', 'context', 'severity', 'category', 'regex_pattern', 'timestamp']
                    writer = csv.DictWriter(csvfile, fieldnames=fieldnames)
                    writer.writeheader()
                    for result in self.results:
                        writer.writerow(asdict(result))
            
            self.logger.info(f"Secrets detection results exported to {output_file}")
            
        except Exception as e:
            self.logger.error(f"Error exporting results: {e}")
    
    def print_cli_summary(self):
        """Print a formatted summary for CLI display."""
        summary = self.get_summary()
        
        print("\n" + "="*60)
        print("🔐 SECRETS DETECTION SUMMARY (secrets-patterns-db)")
        print("="*60)
        
        print(f"📊 Total Detections: {summary['total_detections']}")
        print(f"📁 Files Analyzed: {summary['files_analyzed']}")
        print(f"🔍 Patterns Loaded: {len(self.patterns)}")
        
        if summary['total_detections'] == 0:
            print("✅ No secrets detected!")
            return
        
        print("\n🚨 SEVERITY BREAKDOWN:")
        for severity, count in summary['by_severity'].items():
            icon = "🔴" if severity == "CRITICAL" else "🟠" if severity == "HIGH" else "🟡" if severity == "MEDIUM" else "🟢"
            print(f"  {icon} {severity}: {count}")
        
        print("\n📂 CATEGORY BREAKDOWN:")
        for category, count in summary['by_category'].items():
            print(f"  📁 {category}: {count}")
        
        print("\n🎯 CONFIDENCE BREAKDOWN:")
        for confidence, count in summary['by_confidence'].items():
            icon = "🔴" if confidence == "high" else "🟠" if confidence == "medium" else "🟡"
            print(f"  {icon} {confidence.upper()}: {count}")
        
        print("\n🔍 TOP PATTERNS:")
        sorted_patterns = sorted(summary['by_pattern'].items(), key=lambda x: x[1], reverse=True)[:10]
        for pattern_name, count in sorted_patterns:
            print(f"  🔍 {pattern_name}: {count}")
        
        if summary['critical_findings']:
            print("\n⚠️  CRITICAL FINDINGS:")
            for finding in summary['critical_findings'][:10]:  # Show top 10
                print(f"  🔴 {finding['file']}:{finding['line']} - {finding['pattern']} ({finding['category']}) [{finding['confidence']}]")
        
        print("="*60)

def detect_secrets_with_patterns_db(project_dir: Path, logger) -> Dict:
    """Main function to detect secrets using secrets-patterns-db."""
    detector = SecretsPatternDetector(logger)
    
    # Detect in assets directory
    assets_dir = project_dir / "assets"
    if assets_dir.exists():
        logger.info("Starting secrets detection using secrets-patterns-db...")
        results = detector.detect_in_directory(assets_dir)
        logger.info(f"Secrets detection completed. Found {len(results)} potential secrets.")
        
        # Export results
        report_dir = project_dir / "report"
        report_dir.mkdir(exist_ok=True)
        
        detector.export_results(report_dir / "secrets_detection.json", 'json')
        detector.export_results(report_dir / "secrets_detection.csv", 'csv')
        
        # Print CLI summary
        detector.print_cli_summary()
        
        return detector.get_summary()
    
    return {"total_detections": 0, "error": "Assets directory not found"} 