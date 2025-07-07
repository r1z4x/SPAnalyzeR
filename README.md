# SPAnalyzeR - SPA JavaScript Reverse Engineering Tool

A comprehensive static analysis tool for reverse engineering Single Page Applications (SPAs) without relying on source maps.

## Features

### 🔍 **Comprehensive Asset Discovery**
- Automatically crawls and collects all JavaScript assets from a target URL
- Detects dynamic imports, lazy-loaded modules, and webpack chunks
- Supports `.js`, `.ts`, `.jsx`, `.tsx`, `.map`, `.json`, `.wasm`, `.html`, `.css`, `.scss`, `.sass`, `.less` files

### 🧹 **Code Analysis & Beautification**
- Detects minified, obfuscated, and bundled code
- **Auto-formats code based on file type** (JavaScript, TypeScript, HTML, CSS, JSON)
- **Uses Prettier for superior formatting** with fallback to js-beautify
- **Decodes decimal escape sequences** for better readability
- Identifies bundlers (Webpack, Vite, Rollup, Parcel, esbuild, etc.)

### 📦 **Module & Function Extraction**
- Extracts webpack module boundaries and module paths
- Identifies function declarations, arrow functions, and class definitions
- Detects exported symbols and React components
- Maps module dependencies and imports

### 🌐 **API & Endpoint Discovery**
- Finds API calls using fetch, axios, XMLHttpRequest, jQuery AJAX
- Detects GraphQL queries and WebSocket connections
- Identifies API base URLs and configuration
- Extracts hardcoded endpoints and service URLs

### 🔐 **Security Analysis**
- Detects potential secrets, API keys, and credentials
- Identifies JWT tokens, OAuth configurations, and authentication patterns
- Finds hardcoded passwords, database credentials, and access tokens
- Highlights security-sensitive code patterns

### 💾 **Storage & State Analysis**
- Detects localStorage, sessionStorage, and cookie usage
- Identifies IndexedDB, WebSQL, and Cache API usage
- Finds Service Worker registrations and custom storage patterns
- Maps storage keys and data persistence strategies

### 🔐 **Authentication & Authorization**
- Identifies authentication libraries (Auth0, Firebase Auth, etc.)
- Detects JWT, OAuth, and session-based authentication
- Finds role-based access control patterns
- Maps authentication endpoints and user management

### ⚛️ **Framework Detection**
- Identifies React, Angular, Vue, Svelte, Next.js, Nuxt.js
- Detects SAPUI5, Ember, Preact, Solid, Alpine.js
- Finds state management libraries (Redux, MobX, RxJS)
- Identifies utility libraries (Lodash, Moment.js, D3.js)

### 🛣️ **Routing Analysis**
- Detects React Router, Vue Router, Angular Router patterns
- Identifies Next.js dynamic routes and Nuxt.js routing
- Maps application routes and navigation patterns
- Finds lazy-loaded route components

## Installation

```bash
# Clone the repository
git clone <repository-url>
cd SPAnalyzeR

# Install dependencies
npm install
```

## Usage

### Basic Usage
```bash
node spanalyzer.js https://example.com
```

### Example Output
```
🔍 Starting comprehensive SPA analysis of: https://example.com
📋 Analysis mode: Static pattern-based (no source maps)

📄 Fetching main page...
🔗 Collecting asset URLs...
📦 Found 15 assets to analyze
⬇️  Downloading assets...
🔬 Performing comprehensive static analysis...

====================================================================================================
🔍 COMPREHENSIVE SPA REVERSE ENGINEERING REPORT
====================================================================================================

🎯 Target URL: https://example.com
📦 Total Assets Analyzed: 15

📈 ANALYSIS SUMMARY:
   JavaScript files: 12
   TypeScript files: 2
   Source maps: 1
   Minified files: 8
   Bundled files: 10

⚛️  DETECTED FRAMEWORKS & LIBRARIES:
   - React
   - Redux
   - Lodash
   - Axios

📦 DETECTED BUNDLERS:
   - Webpack

🌐 API ENDPOINTS DETECTED:
   - https://api.example.com/users
   - https://api.example.com/auth/login
   - https://api.example.com/data

💾 STORAGE USAGE:
   - localStorage
   - sessionStorage
   - Cookies

🔐 AUTHENTICATION INDICATORS:
   - JWT Authentication
   - Authentication Functions
   - User Management

🚨 POTENTIAL SECRETS & CREDENTIALS:
   - API Key: sk_live_1234567890abcdef...
   - JWT Token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...

🛣️  DETECTED ROUTES:
   - /dashboard
   - /profile
   - /settings

🔧 DETECTED FUNCTIONS (45):
   - handleLogin
   - fetchUserData
   - updateProfile
   - validateToken
   ...

🏗️  DETECTED CLASSES (12):
   - UserService
   - AuthManager
   - DataStore
   - Router
   ...
```

## Output Files

The tool generates two output files:

### 1. Console Report
Detailed analysis printed to the console with:
- Asset summaries and statistics
- Detected frameworks and libraries
- API endpoints and security findings
- Function and class listings
- Beautified code samples

### 2. JSON Report (`spanalyzer-detailed-report.json`)
Comprehensive structured data including:
- Complete asset analysis
- Extracted functions, classes, and exports
- Webpack module mappings
- Storage usage patterns
- Authentication indicators
- Beautified code samples

## Advanced Features

### Webpack Module Extraction
When Webpack is detected, the tool extracts individual module boundaries:
```
   Webpack Modules: 156 modules detected
     - ./src/components/Button.js (2.3 KB)
     - ./src/services/api.js (1.8 KB)
     - ./src/utils/auth.js (3.1 KB)
     ...
```

### Static Analysis Without Source Maps
The tool performs comprehensive analysis even when `.js.map` files are:
- Missing (404 errors)
- Not available
- Intentionally removed for production

### Pattern-Based Detection
Uses advanced regex patterns to identify:
- Function declarations and expressions
- Class definitions and inheritance
- Export/import statements
- API call patterns
- Security-sensitive code

## Use Cases

### Security Research
- Identify exposed API endpoints
- Detect hardcoded secrets and credentials
- Analyze authentication mechanisms
- Map application attack surface

### Competitive Analysis
- Understand competitor application architecture
- Identify technology stacks and frameworks
- Map feature implementations
- Analyze performance optimizations

### Development & Debugging
- Reverse engineer third-party integrations
- Understand legacy codebases
- Debug production issues without source maps
- Analyze bundle composition

### Compliance & Auditing
- Audit data storage practices
- Verify security implementations
- Check for exposed sensitive information
- Validate authentication flows

## Limitations

- **Static Analysis Only**: Cannot analyze runtime behavior
- **Pattern-Based**: Relies on regex patterns, may miss complex obfuscation
- **No Execution**: Cannot execute or simulate JavaScript code
- **Limited Context**: May produce false positives without full application context

## Contributing

Contributions are welcome! Please feel free to submit pull requests or open issues for:
- New framework detection patterns
- Additional API call detection methods
- Enhanced security analysis features
- Performance improvements

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Disclaimer

This tool is intended for legitimate security research, competitive analysis, and development purposes only. Always ensure you have proper authorization before analyzing any application. The authors are not responsible for any misuse of this tool. 