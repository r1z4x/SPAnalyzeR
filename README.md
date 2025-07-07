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

```bash
node spanalyzer.js https://example.com
```

## Output

The tool generates detailed analysis printed to the console with:
- Asset summaries and statistics
- Detected frameworks and libraries
- API endpoints and security findings
- Function and class listings
- Beautified code samples 