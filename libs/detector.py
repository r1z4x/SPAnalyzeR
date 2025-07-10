import re
import json
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

@dataclass
class DetectionResult:
    """Result of a sensitive data detection."""
    file_path: str
    line_number: int
    detection_type: str
    confidence: float
    value: str
    context: str
    severity: str
    category: str
    pattern_name: str
    timestamp: str

class SensitiveDataDetector:
    """Advanced sensitive data detection system for JavaScript files."""
    
    def __init__(self, logger):
        self.logger = logger
        self.detection_patterns = self._initialize_patterns()
        self.results: List[DetectionResult] = []
        
    def _initialize_patterns(self) -> Dict[str, Dict]:
        """Initialize comprehensive detection patterns."""
        return {
            # API Keys & Tokens
            'api_keys': {
                'patterns': [
                    r'["\']([a-zA-Z0-9]{32,})["\']',  # 32+ char strings
                    r'["\']([a-zA-Z0-9]{20,})["\']',  # 20+ char strings
                    r'api[_-]?key["\']?\s*[:=]\s*["\']([^"\']+)["\']',
                    r'token["\']?\s*[:=]\s*["\']([^"\']+)["\']',
                    r'bearer["\']?\s*[:=]\s*["\']([^"\']+)["\']',
                    r'authorization["\']?\s*[:=]\s*["\']([^"\']+)["\']',
                    r'x-api-key["\']?\s*[:=]\s*["\']([^"\']+)["\']',
                    r'x-auth-token["\']?\s*[:=]\s*["\']([^"\']+)["\']',
                ],
                'confidence': 0.8,
                'severity': 'HIGH',
                'category': 'Authentication'
            },
            
            # URLs & Endpoints
            'urls_endpoints': {
                'patterns': [
                    r'["\'](https?://[^"\']+)["\']',
                    r'["\'](wss?://[^"\']+)["\']',
                    r'["\'](ftp://[^"\']+)["\']',
                    r'["\'](api/[^"\']+)["\']',
                    r'["\'](/[a-zA-Z0-9/_-]+)["\']',
                    r'fetch\(["\']([^"\']+)["\']',
                    r'axios\.(get|post|put|delete)\(["\']([^"\']+)["\']',
                    r'\.ajax\([^)]*url\s*:\s*["\']([^"\']+)["\']',
                ],
                'confidence': 0.7,
                'severity': 'MEDIUM',
                'category': 'Network'
            },
            
            # IP Addresses
            'ip_addresses': {
                'patterns': [
                    r'["\'](\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3})["\']',
                    r'["\'](\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}:\d+)["\']',
                    r'localhost["\']?\s*[:=]\s*["\']([^"\']+)["\']',
                    r'127\.0\.0\.1["\']?\s*[:=]\s*["\']([^"\']+)["\']',
                ],
                'confidence': 0.9,
                'severity': 'HIGH',
                'category': 'Network'
            },
            
            # Database Connections
            'database_connections': {
                'patterns': [
                    r'["\'](mongodb://[^"\']+)["\']',
                    r'["\'](postgresql://[^"\']+)["\']',
                    r'["\'](mysql://[^"\']+)["\']',
                    r'["\'](redis://[^"\']+)["\']',
                    r'["\'](sqlite://[^"\']+)["\']',
                    r'connectionString["\']?\s*[:=]\s*["\']([^"\']+)["\']',
                    r'database["\']?\s*[:=]\s*["\']([^"\']+)["\']',
                ],
                'confidence': 0.9,
                'severity': 'CRITICAL',
                'category': 'Database'
            },
            
            # Personal Information
            'personal_info': {
                'patterns': [
                    r'["\']([a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})["\']',  # Email
                    r'["\'](\d{3}-\d{2}-\d{4})["\']',  # SSN
                    r'["\'](\d{4}-\d{4}-\d{4}-\d{4})["\']',  # Credit Card
                    r'["\'](\d{10,11})["\']',  # Phone numbers
                    r'["\']([A-Z]{2}\d{2}[A-Z0-9]{10,30})["\']',  # IBAN
                    r'password["\']?\s*[:=]\s*["\']([^"\']+)["\']',
                    r'passwd["\']?\s*[:=]\s*["\']([^"\']+)["\']',
                    r'secret["\']?\s*[:=]\s*["\']([^"\']+)["\']',
                ],
                'confidence': 0.8,
                'severity': 'CRITICAL',
                'category': 'Personal'
            },
            
            # AWS & Cloud Services
            'cloud_services': {
                'patterns': [
                    r'["\'](AKIA[0-9A-Z]{16})["\']',  # AWS Access Key
                    r'["\']([0-9A-Z]{20})["\']',  # AWS Secret Key
                    r'["\'](arn:aws:[^"\']+)["\']',  # AWS ARN
                    r'["\'](gs://[^"\']+)["\']',  # Google Cloud Storage
                    r'["\'](https://[^"\']+\.amazonaws\.com[^"\']*)["\']',
                    r'["\'](https://[^"\']+\.googleapis\.com[^"\']*)["\']',
                    r'["\'](https://[^"\']+\.azure\.com[^"\']*)["\']',
                ],
                'confidence': 0.9,
                'severity': 'HIGH',
                'category': 'Cloud'
            },
            
            # OAuth & Social Media
            'oauth_tokens': {
                'patterns': [
                    r'["\']([0-9]{10,}-[0-9a-zA-Z]{20,})["\']',  # OAuth tokens
                    r'["\'](ghp_[a-zA-Z0-9]{36})["\']',  # GitHub Personal Access Token
                    r'["\'](gho_[a-zA-Z0-9]{36})["\']',  # GitHub OAuth Token
                    r'["\'](ghu_[a-zA-Z0-9]{36})["\']',  # GitHub User-to-Server Token
                    r'["\'](ghs_[a-zA-Z0-9]{36})["\']',  # GitHub Server-to-Server Token
                    r'["\'](ghr_[a-zA-Z0-9]{36})["\']',  # GitHub Refresh Token
                ],
                'confidence': 0.9,
                'severity': 'HIGH',
                'category': 'Authentication'
            },
            
            # JWT Tokens
            'jwt_tokens': {
                'patterns': [
                    r'["\'](eyJ[A-Za-z0-9-_=]+\.[A-Za-z0-9-_=]+\.?[A-Za-z0-9-_.+/=]*)["\']',
                ],
                'confidence': 0.9,
                'severity': 'HIGH',
                'category': 'Authentication'
            },
            
            # Environment Variables
            'env_variables': {
                'patterns': [
                    r'process\.env\.([A-Z_][A-Z0-9_]*)',
                    r'process\.env\[["\']([A-Z_][A-Z0-9_]*)["\']\]',
                    r'import\.meta\.env\.([A-Z_][A-Z0-9_]*)',
                    r'window\.__env__\.([A-Z_][A-Z0-9_]*)',
                ],
                'confidence': 0.6,
                'severity': 'MEDIUM',
                'category': 'Configuration'
            },
            
            # Hardcoded Credentials
            'hardcoded_creds': {
                'patterns': [
                    r'username["\']?\s*[:=]\s*["\']([^"\']+)["\']',
                    r'user["\']?\s*[:=]\s*["\']([^"\']+)["\']',
                    r'login["\']?\s*[:=]\s*["\']([^"\']+)["\']',
                    r'email["\']?\s*[:=]\s*["\']([^"\']+)["\']',
                    r'phone["\']?\s*[:=]\s*["\']([^"\']+)["\']',
                    r'address["\']?\s*[:=]\s*["\']([^"\']+)["\']',
                ],
                'confidence': 0.7,
                'severity': 'MEDIUM',
                'category': 'Credentials'
            },
            
            # Debug & Development
            'debug_info': {
                'patterns': [
                    r'console\.log\([^)]*\)',
                    r'debugger;',
                    r'alert\([^)]*\)',
                    r'debug["\']?\s*[:=]\s*true',
                    r'development["\']?\s*[:=]\s*true',
                    r'test["\']?\s*[:=]\s*true',
                ],
                'confidence': 0.5,
                'severity': 'LOW',
                'category': 'Development'
            },
            
            # File Paths
            'file_paths': {
                'patterns': [
                    r'["\'](/[^"\']*\.(js|ts|jsx|tsx|json|xml|html|css))["\']',
                    r'["\'](\./[^"\']*\.(js|ts|jsx|tsx|json|xml|html|css))["\']',
                    r'["\'](\.\./[^"\']*\.(js|ts|jsx|tsx|json|xml|html|css))["\']',
                ],
                'confidence': 0.4,
                'severity': 'LOW',
                'category': 'FileSystem'
            }
        }
    
    def detect_in_file(self, file_path: Path) -> List[DetectionResult]:
        """Detect sensitive data in a single file."""
        try:
            content = file_path.read_text(encoding='utf-8', errors='ignore')
            lines = content.split('\n')
            file_results = []
            
            for line_num, line in enumerate(lines, 1):
                for pattern_name, pattern_config in self.detection_patterns.items():
                    for pattern in pattern_config['patterns']:
                        matches = re.finditer(pattern, line, re.IGNORECASE)
                        
                        for match in matches:
                            # Extract the captured group (usually group 1)
                            value = match.group(1) if match.groups() else match.group(0)
                            
                            # Validate the detected value
                            if self._validate_detection(pattern_name, value):
                                result = DetectionResult(
                                    file_path=str(file_path),
                                    line_number=line_num,
                                    detection_type=pattern_name,
                                    confidence=pattern_config['confidence'],
                                    value=self._mask_sensitive_value(value),
                                    context=line.strip()[:100] + '...' if len(line) > 100 else line.strip(),
                                    severity=pattern_config['severity'],
                                    category=pattern_config['category'],
                                    pattern_name=pattern_name,
                                    timestamp=datetime.now().isoformat()
                                )
                                file_results.append(result)
            
            return file_results
            
        except Exception as e:
            self.logger.error(f"Error detecting in {file_path}: {e}")
            return []
    
    def _validate_detection(self, pattern_name: str, value: str) -> bool:
        """Validate if the detected value is actually sensitive."""
        if not value or len(value) < 3:
            return False
        
        # Skip common false positives
        false_positives = {
            'api_keys': ['example', 'test', 'demo', 'sample', 'placeholder'],
            'urls_endpoints': ['localhost', '127.0.0.1', 'example.com', 'test.com'],
            'personal_info': ['test@example.com', 'user@test.com'],
            'jwt_tokens': ['example', 'test', 'demo'],
        }
        
        if pattern_name in false_positives:
            for fp in false_positives[pattern_name]:
                if fp.lower() in value.lower():
                    return False
        
        # Additional validation for specific patterns
        if pattern_name == 'ip_addresses':
            try:
                ipaddress.ip_address(value.split(':')[0])  # Handle port numbers
                return True
            except ValueError:
                return False
        
        if pattern_name == 'personal_info' and '@' in value:
            # Basic email validation
            if not re.match(r'^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$', value):
                return False
        
        return True
    
    def _mask_sensitive_value(self, value: str) -> str:
        """Mask sensitive values for display."""
        if len(value) <= 8:
            return '*' * len(value)
        
        # Show first 4 and last 4 characters
        return value[:4] + '*' * (len(value) - 8) + value[-4:]
    
    def detect_in_directory(self, directory: Path) -> List[DetectionResult]:
        """Detect sensitive data in all JavaScript files in a directory."""
        js_files = list(directory.rglob("*.js")) + list(directory.rglob("*.ts")) + \
                   list(directory.rglob("*.jsx")) + list(directory.rglob("*.tsx"))
        
        all_results = []
        for file_path in js_files:
            file_results = self.detect_in_file(file_path)
            all_results.extend(file_results)
            self.logger.info(f"Detected {len(file_results)} issues in {file_path.name}")
        
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
            "by_type": {},
            "most_common_patterns": {},
            "critical_findings": []
        }
        
        # Group by severity
        for result in self.results:
            severity = result.severity
            summary["by_severity"][severity] = summary["by_severity"].get(severity, 0) + 1
            
            category = result.category
            summary["by_category"][category] = summary["by_category"].get(category, 0) + 1
            
            detection_type = result.detection_type
            summary["by_type"][detection_type] = summary["by_type"].get(detection_type, 0) + 1
            
            pattern_name = result.pattern_name
            summary["most_common_patterns"][pattern_name] = summary["most_common_patterns"].get(pattern_name, 0) + 1
            
            if result.severity in ['CRITICAL', 'HIGH']:
                summary["critical_findings"].append({
                    "file": result.file_path,
                    "line": result.line_number,
                    "type": result.detection_type,
                    "category": result.category
                })
        
        return summary
    
    def export_results(self, output_file: Path, format: str = 'json'):
        """Export detection results to file."""
        try:
            if format == 'json':
                data = {
                    "summary": self.get_summary(),
                    "detections": [asdict(result) for result in self.results],
                    "exported_at": datetime.now().isoformat()
                }
                output_file.write_text(json.dumps(data, indent=2, default=str))
            
            elif format == 'csv':
                import csv
                with open(output_file, 'w', newline='') as csvfile:
                    fieldnames = ['file_path', 'line_number', 'detection_type', 'confidence', 
                                'value', 'context', 'severity', 'category', 'pattern_name', 'timestamp']
                    writer = csv.DictWriter(csvfile, fieldnames=fieldnames)
                    writer.writeheader()
                    for result in self.results:
                        writer.writerow(asdict(result))
            
            self.logger.info(f"Results exported to {output_file}")
            
        except Exception as e:
            self.logger.error(f"Error exporting results: {e}")
    
    def print_cli_summary(self):
        """Print a formatted summary for CLI display."""
        summary = self.get_summary()
        
        print("\n" + "="*60)
        print("🔍 SENSITIVE DATA DETECTION SUMMARY")
        print("="*60)
        
        print(f"📊 Total Detections: {summary['total_detections']}")
        print(f"📁 Files Analyzed: {summary['files_analyzed']}")
        
        if summary['total_detections'] == 0:
            print("✅ No sensitive data detected!")
            return
        
        print("\n🚨 SEVERITY BREAKDOWN:")
        for severity, count in summary['by_severity'].items():
            icon = "🔴" if severity == "CRITICAL" else "🟠" if severity == "HIGH" else "🟡" if severity == "MEDIUM" else "🟢"
            print(f"  {icon} {severity}: {count}")
        
        print("\n📂 CATEGORY BREAKDOWN:")
        for category, count in summary['by_category'].items():
            print(f"  📁 {category}: {count}")
        
        print("\n🔍 TOP DETECTION TYPES:")
        sorted_types = sorted(summary['by_type'].items(), key=lambda x: x[1], reverse=True)[:5]
        for detection_type, count in sorted_types:
            print(f"  🔍 {detection_type}: {count}")
        
        if summary['critical_findings']:
            print("\n⚠️  CRITICAL FINDINGS:")
            for finding in summary['critical_findings'][:5]:  # Show top 5
                print(f"  🔴 {finding['file']}:{finding['line']} - {finding['type']} ({finding['category']})")
        
        print("="*60)

def detect_sensitive_data(project_dir: Path, logger) -> Dict:
    """Main function to detect sensitive data in project."""
    detector = SensitiveDataDetector(logger)
    
    # Detect in assets directory
    assets_dir = project_dir / "assets"
    if assets_dir.exists():
        logger.info("Starting sensitive data detection...")
        results = detector.detect_in_directory(assets_dir)
        logger.info(f"Detection completed. Found {len(results)} potential issues.")
        
        # Export results
        report_dir = project_dir / "report"
        report_dir.mkdir(exist_ok=True)
        
        detector.export_results(report_dir / "sensitive_data.json", 'json')
        detector.export_results(report_dir / "sensitive_data.csv", 'csv')
        
        # Print CLI summary
        detector.print_cli_summary()
        
        return detector.get_summary()
    
    return {"total_detections": 0, "error": "Assets directory not found"} 