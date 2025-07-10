# 🔍 SPAnalyzeR v2.0

**Advanced JavaScript Security Scanner & SPA Analyzer**

SPAnalyzeR is a comprehensive tool for analyzing Single Page Applications (SPAs) and detecting sensitive data in JavaScript files. It combines asset collection, code analysis, and security scanning in one powerful CLI tool.

## ✨ Features

### 🔍 **Sensitive Data Detection**
- **API Keys & Tokens**: Detects hardcoded API keys, OAuth tokens, JWT tokens
- **Credentials**: Finds usernames, passwords, and authentication data
- **Personal Information**: Identifies emails, phone numbers, SSNs, credit cards
- **Network Data**: Discovers IP addresses, URLs, and endpoints
- **Database Connections**: Finds connection strings and database credentials
- **Cloud Services**: Detects AWS, Google Cloud, Azure credentials
- **Environment Variables**: Identifies environment variable usage

### 🛠️ **SPA Analysis**
- **Asset Collection**: Downloads all JavaScript, CSS, and HTML assets
- **Code Processing**: Deobfuscates and beautifies minified JavaScript
- **Source Map Extraction**: Extracts original source code from source maps
- **Framework Detection**: Identifies React, Vue, Angular, and other frameworks
- **Comprehensive Reporting**: Generates detailed analysis reports

### 📊 **CLI Management**
- **Project Scanning**: Scan entire projects for sensitive data
- **File Analysis**: Analyze specific JavaScript files
- **Pattern Listing**: View all available detection patterns
- **Statistics**: Get detailed project statistics
- **Export Results**: Export findings in JSON and CSV formats

## 🚀 Quick Start

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/SPAnalyzeR.git
cd SPAnalyzeR

# Install dependencies
pip install -r requirements.txt

# Install Playwright browsers (optional, for asset collection)
playwright install
```

### Basic Usage

#### 1. Analyze a SPA Website
```bash
python main.py https://example.com
```

#### 2. Scan Project for Sensitive Data
```bash
python detect.py scan /path/to/project
```

#### 3. Analyze Specific File
```bash
python detect.py file /path/to/file.js
```

#### 4. View Detection Patterns
```bash
python detect.py patterns
```

#### 5. Get Project Statistics
```bash
python detect.py stats /path/to/project
```

## 📋 Detection Categories

### 🔐 Authentication
- **API Keys**: 32+ character strings, API key patterns
- **OAuth Tokens**: GitHub, social media, OAuth tokens
- **JWT Tokens**: JSON Web Token patterns
- **Hardcoded Credentials**: Usernames, passwords, secrets

### 🌐 Network
- **URLs & Endpoints**: API endpoints, fetch calls, axios requests
- **IP Addresses**: Hardcoded IP addresses and localhost references

### 🗄️ Database
- **Connection Strings**: MongoDB, PostgreSQL, MySQL, Redis connections
- **Database Credentials**: Database usernames and passwords

### 👤 Personal Data
- **Emails**: Email address patterns
- **Phone Numbers**: Phone number formats
- **SSNs**: Social Security Number patterns
- **Credit Cards**: Credit card number patterns
- **IBAN**: International Bank Account Numbers

### ☁️ Cloud Services
- **AWS Credentials**: Access keys, secret keys, ARNs
- **Google Cloud**: Storage URLs, API endpoints
- **Azure**: Azure service URLs and credentials

### ⚙️ Configuration
- **Environment Variables**: process.env, import.meta.env usage
- **Debug Information**: Console logs, debugger statements

## 📊 Output Formats

### CLI Summary
```
🔍 SENSITIVE DATA DETECTION SUMMARY
============================================================
📊 Total Detections: 15
📁 Files Analyzed: 8

🚨 SEVERITY BREAKDOWN:
  🔴 CRITICAL: 3
  🟠 HIGH: 8
  🟡 MEDIUM: 4

📂 CATEGORY BREAKDOWN:
  📁 Authentication: 8
  📁 Network: 4
  📁 Personal: 3

🔍 TOP DETECTION TYPES:
  🔍 api_keys: 5
  🔍 urls_endpoints: 4
  🔍 personal_info: 3
```

### Export Formats
- **JSON**: Complete detection results with metadata
- **CSV**: Tabular format for spreadsheet analysis
- **Detailed Report**: Human-readable text report

## 🛡️ Security Features

### False Positive Reduction
- **Pattern Validation**: Advanced regex patterns with validation
- **Context Analysis**: Analyzes surrounding code context
- **False Positive Filtering**: Filters out common test/example data
- **Confidence Scoring**: Each detection has a confidence score

### Data Protection
- **Value Masking**: Sensitive values are masked in output
- **Secure Logging**: No sensitive data in log files
- **Temporary File Cleanup**: Automatic cleanup of temporary files

## 📁 Project Structure

```
SPAnalyzeR/
├── main.py                 # Main SPA analysis tool
├── detect.py              # Sensitive data detection CLI
├── libs/
│   ├── detector.py        # Sensitive data detection engine
│   ├── downloader.py      # Asset collection system
│   ├── processor.py       # JavaScript processing
│   ├── framework.py       # Framework detection
│   ├── sourcemap.py       # Source map extraction
│   ├── reporter.py        # Report generation
│   └── utils.py          # Utility functions
├── projects/              # Analysis results
├── requirements.txt       # Python dependencies
└── README.md             # This file
```

## 🔧 Configuration

### Detection Patterns
The detection system uses configurable patterns in `libs/detector.py`:

```python
self.detection_patterns = {
    'api_keys': {
        'patterns': [
            r'["\']([a-zA-Z0-9]{32,})["\']',
            r'api[_-]?key["\']?\s*[:=]\s*["\']([^"\']+)["\']',
        ],
        'confidence': 0.8,
        'severity': 'HIGH',
        'category': 'Authentication'
    }
}
```

### Custom Patterns
You can add custom detection patterns by modifying the `_initialize_patterns()` method in `SensitiveDataDetector`.

## 📈 Performance

- **Fast Scanning**: Processes thousands of files quickly
- **Memory Efficient**: Streams large files without loading entirely
- **Parallel Processing**: Uses async/await for concurrent operations
- **Incremental Analysis**: Can analyze specific files or directories

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Add your detection patterns or improvements
4. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## ⚠️ Disclaimer

This tool is for security research and educational purposes only. Always ensure you have permission to scan the target systems. The authors are not responsible for any misuse of this tool.

## 🆘 Support

- **Issues**: Report bugs and feature requests on GitHub
- **Documentation**: Check the inline code documentation
- **Examples**: See the `examples/` directory for usage examples

---

**🔍 SPAnalyzeR v2.0** - Advanced JavaScript Security Scanner 