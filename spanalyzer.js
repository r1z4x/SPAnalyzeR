import axios from 'axios';
import * as cheerio from 'cheerio';
import { URL } from 'url';
import path from 'path';
import fs from 'fs-extra';
import beautify from 'js-beautify';
import { SourceMapConsumer } from 'source-map';
import { Worker } from 'worker_threads';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { detectBundler } from './lib/detectBundler.js';
import { extractAPIs } from './lib/extractAPIs.js';
import { detectSecrets } from './lib/detectSecrets.js';
import { detectFrameworks } from './lib/detectFrameworks.js';
import { extractRoutes } from './lib/extractRoutes.js';
import { extractModules } from './lib/extractModules.js';
import { extractFunctions } from './lib/extractFunctions.js';
import { extractStorage } from './lib/extractStorage.js';
import { extractAuth } from './lib/extractAuth.js';
import { decodeDecimalSequences, processExtractedFiles } from './lib/decimalDecoder.js';
import { parse as babelParse } from '@babel/parser';
import generate from '@babel/generator';

class SPAnalyzeR {
  constructor(targetUrl) {
    this.targetUrl = targetUrl;
    this.baseUrl = new URL(targetUrl);
    this.assets = {};
    this.results = [];
    this.sourceMaps = [];
    this.extractedFunctions = [];
    this.extractedClasses = [];
    this.extractedExports = [];
    this.workerPath = fileURLToPath(import.meta.url).replace('spanalyzer.js', 'lib/worker.js');
  }

  async analyze() {
    console.log(`🔍 Starting comprehensive SPA analysis of: ${this.targetUrl}`);
    console.log(`📋 Analysis mode: Static pattern-based (no source maps)`);
    
    try {
      // Step 1: Fetch main page
      await this.fetchMainPage();
      
      // Step 2: Collect all asset URLs
      await this.collectAssets();
      
      // Step 3: Download all assets
      await this.downloadAssets();
      
      // Step 4: Perform comprehensive analysis
      await this.analyzeAssets();
      
      // Step 5: Generate detailed report
      this.generateReport();
      
    } catch (error) {
      console.error('❌ Analysis failed:', error.message);
      process.exit(1);
    }
  }

  async fetchMainPage() {
    console.log('📄 Fetching main page...');
    const response = await axios.get(this.targetUrl, {
      timeout: 15000,
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
      }
    });
    
    this.mainPageContent = response.data;
    this.$ = cheerio.load(this.mainPageContent);
  }

  async collectAssets() {
    console.log('🔗 Collecting asset URLs...');
    const assetUrls = new Set();

    // Collect from script tags
    this.$('script[src]').each((i, el) => {
      const src = this.$(el).attr('src');
      if (src && this.isValidAsset(src)) {
        assetUrls.add(this.resolveUrl(src));
      }
    });

    // Collect from link tags (CSS might contain JS references)
    this.$('link[href]').each((i, el) => {
      const href = this.$(el).attr('href');
      if (href && this.isValidAsset(href)) {
        assetUrls.add(this.resolveUrl(href));
      }
    });

    // Look for inline scripts that might reference external files
    this.$('script:not([src])').each((i, el) => {
      const scriptContent = this.$(el).html();
      if (scriptContent) {
        const matches = scriptContent.match(/['"`]([^'"`]*\.(js|ts|map|json|wasm))['"`]/g);
        if (matches) {
          matches.forEach(match => {
            const url = match.replace(/['"`]/g, '');
            if (this.isValidAsset(url)) {
              assetUrls.add(this.resolveUrl(url));
            }
          });
        }
      }
    });

    // Look for dynamic imports and lazy loading
    this.$('script:not([src])').each((i, el) => {
      const scriptContent = this.$(el).html();
      if (scriptContent) {
        // Dynamic imports
        const dynamicImports = scriptContent.match(/import\s*\(\s*['"`]([^'"`]+)['"`]/g);
        if (dynamicImports) {
          dynamicImports.forEach(imp => {
            const url = imp.match(/['"`]([^'"`]+)['"`]/)[1];
            if (this.isValidAsset(url)) {
              assetUrls.add(this.resolveUrl(url));
            }
          });
        }
        
        // Webpack chunk loading
        const webpackChunks = scriptContent.match(/webpackChunk[^'"]*['"`]([^'"`]+)['"`]/g);
        if (webpackChunks) {
          webpackChunks.forEach(chunk => {
            const url = chunk.match(/['"`]([^'"`]+)['"`]/)[1];
            if (this.isValidAsset(url)) {
              assetUrls.add(this.resolveUrl(url));
            }
          });
        }
      }
    });

    this.assetUrls = Array.from(assetUrls);
    console.log(`📦 Found ${this.assetUrls.length} assets to analyze`);
  }

  async downloadAssets() {
    console.log('⬇️  Downloading assets...');
    
    // Download assets in parallel with concurrency limit
    const concurrency = 5;
    const chunks = [];
    for (let i = 0; i < this.assetUrls.length; i += concurrency) {
      chunks.push(this.assetUrls.slice(i, i + concurrency));
    }
    
    for (let i = 0; i < chunks.length; i++) {
      const chunk = chunks[i];
      const promises = chunk.map(async (assetUrl) => {
        try {
          const response = await axios.get(assetUrl, {
            responseType: 'arraybuffer',
            timeout: 10000,
            headers: {
              'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
            }
          });
          
          this.assets[assetUrl] = response.data;
          console.log(`✅ Downloaded: ${assetUrl}`);
          
          // Check for source map reference
          if (assetUrl.endsWith('.js') || assetUrl.endsWith('.ts')) {
            const sourceMapUrl = this.findSourceMapUrl(response.data.toString());
            if (sourceMapUrl) {
              this.assetUrls.push(sourceMapUrl);
            }
          }
          
        } catch (error) {
          console.warn(`⚠️  Failed to download: ${assetUrl} - ${error.message}`);
        }
      });
      
      await Promise.all(promises);
      console.log(`📦 Downloaded chunk ${i + 1}/${chunks.length}`);
    }
  }

  async analyzeAssets() {
    console.log('🔬 Performing comprehensive static analysis with worker threads...');
    
    const assetEntries = Object.entries(this.assets);
    const total = assetEntries.length;
    const maxWorkers = Math.min(4, total); // Use up to 4 workers
    
    console.log(`🚀 Using ${maxWorkers} worker threads for parallel analysis`);
    
    // Process assets in batches
    const batchSize = Math.ceil(total / maxWorkers);
    const batches = [];
    
    for (let i = 0; i < total; i += batchSize) {
      batches.push(assetEntries.slice(i, i + batchSize));
    }
    
    const allResults = [];
    
    for (let batchIndex = 0; batchIndex < batches.length; batchIndex++) {
      const batch = batches[batchIndex];
      console.log(`📦 Processing batch ${batchIndex + 1}/${batches.length} (${batch.length} assets)`);
      
      const batchPromises = batch.map(async ([assetUrl, content]) => {
        return new Promise((resolve, reject) => {
          const worker = new Worker(this.workerPath, {
            workerData: { assetUrl, content }
          });
          
          worker.on('message', (message) => {
            if (message.success) {
              resolve(message.result);
            } else {
              reject(new Error(message.error));
            }
            worker.terminate();
          });
          
          worker.on('error', (error) => {
            reject(error);
            worker.terminate();
          });
          
          // Timeout after 30 seconds
          setTimeout(() => {
            worker.terminate();
            reject(new Error('Worker timeout'));
          }, 30000);
        });
      });
      
      try {
        const batchResults = await Promise.allSettled(batchPromises);
        
        batchResults.forEach((result, index) => {
          if (result.status === 'fulfilled') {
            allResults.push(result.value);
            console.log(`✅ Analyzed: ${batch[index][0]}`);
          } else {
            console.warn(`⚠️  Failed to analyze: ${batch[index][0]} - ${result.reason}`);
            // Add a basic result for failed analysis
            allResults.push({
              url: batch[index][0],
              extension: path.extname(batch[index][0]),
              size: batch[index][1].length,
              isMinified: false,
              isObfuscated: false,
              isBundle: false,
              beautified: null,
              bundler: null,
              apis: [],
              secrets: [],
              frameworks: [],
              routes: [],
              modules: [],
              functions: [],
              classes: [],
              exports: [],
              storage: [],
              auth: [],
              sourceMap: null
            });
          }
        });
      } catch (error) {
        console.error(`❌ Batch ${batchIndex + 1} failed:`, error.message);
      }
    }
    
    this.results = allResults;
    console.log(`✅ Analysis completed: ${this.results.length} assets processed`);
  }

  extractWebpackModules(content) {
    const modules = [];
    
    // Webpack module pattern: "./path/to/module": function(exports, require, module) { ... }
    const webpackModulePattern = /['"`]((?:\.?\/?[\w\-@\/\.]+)+)['"`]:\s*function\s*\([^)]*\)\s*\{/g;
    
    let match;
    let count = 0;
    const maxModules = 50; // Limit to first 50 modules for performance
    
    while ((match = webpackModulePattern.exec(content)) !== null && count < maxModules) {
      const modulePath = match[1];
      const startPos = match.index;
      
      // Try to find the end of this module (limit search to next 10KB)
      let braceCount = 0;
      let inString = false;
      let stringChar = '';
      let endPos = startPos;
      const searchLimit = Math.min(startPos + 10000, content.length);
      
      for (let i = startPos; i < searchLimit; i++) {
        const char = content[i];
        
        if (!inString && char === '{') {
          braceCount++;
        } else if (!inString && char === '}') {
          braceCount--;
          if (braceCount === 0) {
            endPos = i;
            break;
          }
        } else if (!inString && (char === '"' || char === "'" || char === '`')) {
          inString = true;
          stringChar = char;
        } else if (inString && char === stringChar) {
          inString = false;
        }
      }
      
      if (endPos > startPos) {
        const moduleContent = content.substring(startPos, endPos + 1);
        modules.push({
          path: modulePath,
          content: moduleContent,
          size: moduleContent.length
        });
        count++;
      }
    }
    
    if (count >= maxModules) {
      modules.push({
        path: '... (truncated)',
        content: '',
        size: 0
      });
    }
    
    return modules;
  }

  generateReport() {
    console.log('\n' + '='.repeat(100));
    console.log('🔍 COMPREHENSIVE SPA REVERSE ENGINEERING REPORT');
    console.log('='.repeat(100));
    
    console.log(`\n🎯 Target URL: ${this.targetUrl}`);
    console.log(`📦 Total Assets Analyzed: ${this.results.length}`);
    
    // Summary statistics
    const jsFiles = this.results.filter(r => r.extension === '.js');
    const tsFiles = this.results.filter(r => r.extension === '.ts');
    const mapFiles = this.results.filter(r => r.extension === '.map');
    const minifiedFiles = this.results.filter(r => r.isMinified);
    const bundledFiles = this.results.filter(r => r.isBundle);
    
    console.log(`\n📈 ANALYSIS SUMMARY:`);
    console.log(`   JavaScript files: ${jsFiles.length}`);
    console.log(`   TypeScript files: ${tsFiles.length}`);
    console.log(`   Source maps: ${mapFiles.length}`);
    console.log(`   Minified files: ${minifiedFiles.length}`);
    console.log(`   Bundled files: ${bundledFiles.length}`);
    
    // Detected frameworks
    const allFrameworks = new Set();
    this.results.forEach(r => r.frameworks.forEach(f => allFrameworks.add(f)));
    if (allFrameworks.size > 0) {
      console.log(`\n⚛️  DETECTED FRAMEWORKS & LIBRARIES:`);
      Array.from(allFrameworks).forEach(framework => console.log(`   - ${framework}`));
    }
    
    // Detected bundlers
    const bundlers = new Set();
    this.results.forEach(r => { if (r.bundler) bundlers.add(r.bundler); });
    if (bundlers.size > 0) {
      console.log(`\n📦 DETECTED BUNDLERS:`);
      Array.from(bundlers).forEach(bundler => console.log(`   - ${bundler}`));
    }
    
    // API endpoints
    const allAPIs = new Set();
    this.results.forEach(r => r.apis.forEach(api => allAPIs.add(api)));
    if (allAPIs.size > 0) {
      console.log(`\n🌐 API ENDPOINTS DETECTED:`);
      Array.from(allAPIs).forEach(api => console.log(`   - ${api}`));
    }
    
    // Storage usage
    const allStorage = new Set();
    this.results.forEach(r => r.storage.forEach(storage => allStorage.add(storage)));
    if (allStorage.size > 0) {
      console.log(`\n💾 STORAGE USAGE:`);
      Array.from(allStorage).forEach(storage => console.log(`   - ${storage}`));
    }
    
    // Authentication indicators
    const allAuth = new Set();
    this.results.forEach(r => r.auth.forEach(auth => allAuth.add(auth)));
    if (allAuth.size > 0) {
      console.log(`\n🔐 AUTHENTICATION INDICATORS:`);
      Array.from(allAuth).forEach(auth => console.log(`   - ${auth}`));
    }
    
    // Secrets found
    const allSecrets = [];
    this.results.forEach(r => allSecrets.push(...r.secrets));
    if (allSecrets.length > 0) {
      console.log(`\n🚨 POTENTIAL SECRETS & CREDENTIALS:`);
      allSecrets.forEach(secret => console.log(`   - ${secret}`));
    }
    
    // Routes found
    const allRoutes = new Set();
    this.results.forEach(r => r.routes.forEach(route => allRoutes.add(route)));
    if (allRoutes.size > 0) {
      console.log(`\n🛣️  DETECTED ROUTES:`);
      Array.from(allRoutes).forEach(route => console.log(`   - ${route}`));
    }
    
    // Functions and classes
    const allFunctions = [];
    const allClasses = [];
    this.results.forEach(r => {
      allFunctions.push(...r.functions);
      allClasses.push(...r.classes);
    });
    
    if (allFunctions.length > 0) {
      console.log(`\n🔧 DETECTED FUNCTIONS (${allFunctions.length}):`);
      allFunctions.slice(0, 20).forEach(func => console.log(`   - ${func}`));
      if (allFunctions.length > 20) console.log(`   ... and ${allFunctions.length - 20} more`);
    }
    
    if (allClasses.length > 0) {
      console.log(`\n🏗️  DETECTED CLASSES (${allClasses.length}):`);
      allClasses.slice(0, 20).forEach(cls => console.log(`   - ${cls}`));
      if (allClasses.length > 20) console.log(`   ... and ${allClasses.length - 20} more`);
    }
    
    // Detailed asset analysis
    console.log(`\n📋 DETAILED ASSET ANALYSIS:`);
    this.results.forEach(result => {
      console.log(`\n🔗 ${result.url}`);
      console.log(`   Size: ${this.formatBytes(result.size)}`);
      console.log(`   Minified: ${result.isMinified ? 'Yes' : 'No'}`);
      console.log(`   Obfuscated: ${result.isObfuscated ? 'Yes' : 'No'}`);
      console.log(`   Bundle: ${result.isBundle ? 'Yes' : 'No'}`);
      
      if (result.bundler) console.log(`   Bundler: ${result.bundler}`);
      if (result.frameworks.length > 0) console.log(`   Frameworks: ${result.frameworks.join(', ')}`);
      if (result.apis.length > 0) console.log(`   APIs: ${result.apis.join(', ')}`);
      if (result.routes.length > 0) console.log(`   Routes: ${result.routes.join(', ')}`);
      if (result.storage.length > 0) console.log(`   Storage: ${result.storage.join(', ')}`);
      if (result.auth.length > 0) console.log(`   Auth: ${result.auth.join(', ')}`);
      if (result.secrets.length > 0) console.log(`   Secrets: ${result.secrets.join(', ')}`);
      
      if (result.webpackModules && result.webpackModules.length > 0) {
        console.log(`   Webpack Modules: ${result.webpackModules.length} modules detected`);
        result.webpackModules.slice(0, 5).forEach(module => {
          console.log(`     - ${module.path} (${this.formatBytes(module.size)})`);
        });
        if (result.webpackModules.length > 5) {
          console.log(`     ... and ${result.webpackModules.length - 5} more modules`);
        }
      }
      
      if (result.beautified && result.beautified.length > 0) {
        console.log(`   Beautified Sample (first 800 chars):`);
        console.log(`   ${'─'.repeat(60)}`);
        console.log(`   ${result.beautified.substring(0, 800)}...`);
        console.log(`   ${'─'.repeat(60)}`);
      }
    });
    
    // Save detailed report to file
    this.saveDetailedReport();
  }

  saveDetailedReport() {
    const report = {
      targetUrl: this.targetUrl,
      timestamp: new Date().toISOString(),
      analysisMode: 'Static pattern-based (no source maps)',
      summary: {
        totalAssets: this.results.length,
        jsFiles: this.results.filter(r => r.extension === '.js').length,
        tsFiles: this.results.filter(r => r.extension === '.ts').length,
        mapFiles: this.results.filter(r => r.extension === '.map').length,
        minifiedFiles: this.results.filter(r => r.isMinified).length,
        bundledFiles: this.results.filter(r => r.isBundle).length
      },
      assets: this.results.map(r => ({
        url: r.url,
        extension: r.extension,
        size: r.size,
        isMinified: r.isMinified,
        isObfuscated: r.isObfuscated,
        isBundle: r.isBundle,
        bundler: r.bundler,
        frameworks: r.frameworks,
        apis: r.apis,
        secrets: r.secrets,
        routes: r.routes,
        modules: r.modules,
        functions: r.functions,
        storage: r.storage,
        auth: r.auth,
        webpackModules: r.webpackModules ? r.webpackModules.map(m => ({
          path: m.path,
          size: m.size
        })) : null,
        beautifiedCode: r.beautified ? r.beautified.substring(0, 2000) : null
      }))
    };
    
    fs.writeJsonSync('spanalyzer-detailed-report.json', report, { spaces: 2 });
    console.log(`\n💾 Detailed report saved to: spanalyzer-detailed-report.json`);
    
    // Export beautified code to separate files
    this.exportBeautifiedCode();
  }

  async exportBeautifiedCode() {
    // Klasörleri temizle ve oluştur
    const originalDir = 'original';
    const formattedDir = 'decoded';
    if (fs.existsSync(originalDir)) fs.rmSync(originalDir, { recursive: true, force: true });
    if (fs.existsSync(formattedDir)) fs.rmSync(formattedDir, { recursive: true, force: true });
    fs.mkdirSync(originalDir);
    fs.mkdirSync(formattedDir);
    let exportedCount = 0;
    for (const result of this.results) {
      if (result.beautified && result.beautified.length > 0) {
        try {
          const url = new URL(result.url);
          const pathParts = url.pathname.split('/').filter(part => part.length > 0);
          const filename = pathParts.length > 0 ? pathParts[pathParts.length - 1] : 'index';
          const safeFilename = filename.replace(/[^a-zA-Z0-9.-]/g, '_');
          const extension = result.extension || '.js';
          const timestamp = Date.now();
          const origFilename = `${safeFilename}_${timestamp}${extension}`;
          const origFilePath = `${originalDir}/${origFilename}`;
          // Orijinal (decode edilmiş) kodu kaydet
          let originalCode = result.rawContent || result.beautified;
          if (typeof originalCode === 'string') {
            originalCode = decodeDecimalSequences(originalCode);
          }
          fs.writeFileSync(origFilePath, originalCode, 'utf8');
          // Beautified kodu kaydet
          let cleanBeautifiedCode = result.beautified;
          if (typeof cleanBeautifiedCode === 'string') {
            cleanBeautifiedCode = decodeDecimalSequences(cleanBeautifiedCode)
              .replace(/[\u0000-\u001F\u007F-\u009F]/g, '')
              .replace(/\r\n/g, '\n')
              .replace(/\r/g, '\n')
              .replace(/\\x([0-9A-Fa-f]{2})/g, (match, hex) => {
                try { return String.fromCharCode(parseInt(hex, 16)); } catch (e) { return match; }
              })
              .replace(/\\u([0-9A-Fa-f]{4})/g, (match, hex) => {
                try { return String.fromCharCode(parseInt(hex, 16)); } catch (e) { return match; }
              })
              .replace(/\\u\{([0-9A-Fa-f]+)\}/g, (match, hex) => {
                try { return String.fromCodePoint(parseInt(hex, 16)); } catch (e) { return match; }
              })
              .replace(/\\([0-7]{3})/g, (match, octal) => {
                try { return String.fromCharCode(parseInt(octal, 8)); } catch (e) { return match; }
              });
          } else {
            cleanBeautifiedCode = '// Beautification failed - original content truncated\n' + (result.beautified ? result.beautified.toString().substring(0, 1000) : '');
          }
          const beautifiedFilename = `${safeFilename}_${timestamp}${extension}`;
          const beautifiedFilePath = `${formattedDir}/${beautifiedFilename}`;
          fs.writeFileSync(beautifiedFilePath, cleanBeautifiedCode, 'utf8');
          exportedCount++;
          console.log(`   ✅ ${beautifiedFilename} (${this.formatBytes(result.beautified.length)})`);
          // AST beautifier ile tekrar işle (daha akıllı kontrol)
          const extCheck = /\.js$|\.ts$|\.jsx$|\.tsx$|\.js_|\.ts_|\.jsx_|\.tsx_/i;
          if (extCheck.test(beautifiedFilename)) {
            try {
              const ast = babelParse(cleanBeautifiedCode, {
                sourceType: 'unambiguous',
                plugins: [
                  'jsx',
                  'typescript',
                  'classProperties',
                  'objectRestSpread',
                  'dynamicImport',
                  'optionalChaining',
                  'nullishCoalescingOperator',
                  'decorators-legacy',
                  'exportDefaultFrom',
                  'exportNamespaceFrom',
                  'numericSeparator',
                  'topLevelAwait',
                  'logicalAssignment',
                ],
                errorRecovery: true
              });
              const astBeautified = generate.default(ast, {
                retainLines: false,
                compact: false,
                concise: false,
                comments: true,
                minified: false,
                jsescOption: { minimal: true },
                decoratorsBeforeExport: true,
                shouldPrintComment: () => true,
              }).code;
              const astFilePath = `${formattedDir}/${safeFilename}_${timestamp}.ast${extension}`;
              fs.writeFileSync(astFilePath, astBeautified, 'utf8');
              console.log(`   🧠 AST beautified: ${astFilePath}`);
            } catch (err) {
              console.warn(`   ⚠️  AST beautify failed for ${beautifiedFilename}: ${err.message}`);
            }
          }
        } catch (error) {
          console.warn(`   ⚠️  Failed to export: ${result.url} - ${error.message}`);
        }
      }
    }
    if (exportedCount > 0) {
      console.log(`\n📁 Decoded code exported to: ${formattedDir}/ (${exportedCount} files)`);
      const indexContent = this.generateBeautifiedIndex();
      fs.writeFileSync(`${formattedDir}/README.md`, indexContent);
      console.log(`📋 Index file created: ${formattedDir}/README.md`);
      console.log('\n🔍 Processing files for decimal decoding...');
      processExtractedFiles(formattedDir);
    } else {
      console.log('📝 No beautified code to export');
    }
  }

  generateBeautifiedIndex() {
    const beautifiedFiles = this.results
      .filter(r => r.beautified && r.beautified.length > 0)
      .map(r => {
        const url = new URL(r.url);
        const pathParts = url.pathname.split('/').filter(part => part.length > 0);
        const filename = pathParts.length > 0 ? pathParts[pathParts.length - 1] : 'index';
        const safeFilename = filename.replace(/[^a-zA-Z0-9.-]/g, '_');
        const extension = r.extension || '.js';
        const timestamp = Date.now();
        const finalFilename = `${safeFilename}_${timestamp}${extension}`;
        
        return {
          originalUrl: r.url,
          filename: finalFilename,
          size: r.beautified.length,
          extension: r.extension,
          isMinified: r.isMinified,
          isObfuscated: r.isObfuscated,
          isBundle: r.isBundle,
          bundler: r.bundler,
          frameworks: r.frameworks
        };
      });
    
    let indexContent = `# Decoded Code Export\n\n`;
    indexContent += `**Target URL:** ${this.targetUrl}\n`;
    indexContent += `**Export Date:** ${new Date().toLocaleString()}\n`;
    indexContent += `**Total Files:** ${beautifiedFiles.length}\n\n`;
    
    indexContent += `## Files\n\n`;
    indexContent += `| Filename | Original URL | Size | Type | Bundler | Frameworks |\n`;
    indexContent += `|----------|--------------|------|------|---------|------------|\n`;
    
    beautifiedFiles.forEach(file => {
      const sizeKB = (file.size / 1024).toFixed(1);
      const frameworks = file.frameworks.length > 0 ? file.frameworks.join(', ') : '-';
      const bundler = file.bundler || '-';
      
      indexContent += `| [${file.filename}](./${file.filename}) | ${file.originalUrl} | ${sizeKB} KB | ${file.extension} | ${bundler} | ${frameworks} |\n`;
    });
    
    indexContent += `\n## Analysis Summary\n\n`;
    indexContent += `- **Minified Files:** ${beautifiedFiles.filter(f => f.isMinified).length}\n`;
    indexContent += `- **Obfuscated Files:** ${beautifiedFiles.filter(f => f.isObfuscated).length}\n`;
    indexContent += `- **Bundled Files:** ${beautifiedFiles.filter(f => f.isBundle).length}\n`;
    
    const bundlers = [...new Set(beautifiedFiles.map(f => f.bundler).filter(b => b))];
    if (bundlers.length > 0) {
      indexContent += `- **Bundlers:** ${bundlers.join(', ')}\n`;
    }
    
    const allFrameworks = [...new Set(beautifiedFiles.flatMap(f => f.frameworks))];
    if (allFrameworks.length > 0) {
      indexContent += `- **Frameworks:** ${allFrameworks.join(', ')}\n`;
    }
    
    return indexContent;
  }

  // Helper methods
  isValidAsset(url) {
    return /\.(js|ts|jsx|tsx|map|json|wasm|html|htm|css|scss|sass|less)$/i.test(url);
  }

  resolveUrl(relativeUrl) {
    return new URL(relativeUrl, this.baseUrl).href;
  }

  isMinified(text) {
    const lines = text.split('\n');
    const avgLineLength = text.length / lines.length;
    return lines.length < 10 || avgLineLength > 100 || /^\s*[a-zA-Z$_][a-zA-Z0-9$_]*\s*=\s*[a-zA-Z$_][a-zA-Z0-9$_]*\s*;/.test(text);
  }

  isObfuscated(text) {
    return /[a-zA-Z]{1,2}=[a-zA-Z]{1,2};/.test(text) || 
           /eval\(/.test(text) || 
           /Function\(/.test(text) ||
           /[a-zA-Z]{20,}/.test(text);
  }

  isBundle(text, url) {
    const bundlePatterns = [
      /webpackJsonp/,
      /webpackChunk/,
      /__webpack_require__/,
      /define\(/,
      /require\.ensure/,
      /import\(/,
      /chunk\./,
      /bundle\./,
      /vendor\./,
      /main\./,
      /app\./
    ];
    
    return bundlePatterns.some(pattern => pattern.test(text) || pattern.test(url));
  }

  async beautifyCode(text, ext) {
    try {
      // Limit beautification to first 50KB for performance
      const textToBeautify = text.length > 50000 ? text.substring(0, 50000) + '...' : text;
      
      // First, decode decimal sequences
      const decodedText = decodeDecimalSequences(textToBeautify);
      
      // Try Prettier first for better formatting
      try {
        const prettier = (await import('prettier/standalone.js')).default;
        const parserBabel = (await import('prettier/parser-babel.js')).default;
        const parserHtml = (await import('prettier/parser-html.js')).default;
        const parserCss = (await import('prettier/parser-css.js')).default;
        
        if (ext === '.js' || ext === '.ts' || ext === '.jsx' || ext === '.tsx') {
          return prettier.format(decodedText, {
            parser: 'babel',
            plugins: [parserBabel],
            semi: true,
            singleQuote: true,
            tabWidth: 2,
            useTabs: false,
            printWidth: 80,
            trailingComma: 'es5',
            bracketSpacing: true,
            arrowParens: 'avoid'
          });
        } else if (ext === '.html' || ext === '.htm') {
          return prettier.format(decodedText, {
            parser: 'html',
            plugins: [parserHtml],
            tabWidth: 2,
            useTabs: false,
            printWidth: 80,
            bracketSameLine: false
          });
        } else if (ext === '.css' || ext === '.scss' || ext === '.sass' || ext === '.less') {
          return prettier.format(decodedText, {
            parser: 'css',
            plugins: [parserCss],
            tabWidth: 2,
            useTabs: false,
            printWidth: 80,
            singleQuote: false
          });
        } else if (ext === '.json') {
          try {
            const parsed = JSON.parse(decodedText);
            return JSON.stringify(parsed, null, 2);
          } catch (e) {
            // If JSON parsing fails, try prettier
            return prettier.format(decodedText, {
              parser: 'json',
              tabWidth: 2,
              useTabs: false,
              printWidth: 80
            });
          }
        }
      } catch (prettierError) {
        console.warn('Prettier not available, using js-beautify:', prettierError.message);
      }
      
      // Fallback to js-beautify if prettier fails
      let beautified;
      
      if (ext === '.js' || ext === '.ts' || ext === '.jsx' || ext === '.tsx') {
        beautified = beautify.js(decodedText, { 
          indent_size: 2, 
          space_in_empty_paren: true,
          preserve_newlines: true,
          max_preserve_newlines: 4,
          unescape_strings: false,
          wrap_line_length: 0
        });
      } else if (ext === '.html' || ext === '.htm') {
        beautified = beautify.html(decodedText, {
          indent_size: 2,
          indent_char: ' ',
          max_preserve_newlines: 4,
          preserve_newlines: true
        });
      } else if (ext === '.css' || ext === '.scss' || ext === '.sass' || ext === '.less') {
        beautified = beautify.css(decodedText, {
          indent_size: 2,
          indent_char: ' ',
          selector_separator_newline: true,
          newline_between_rules: true,
          preserve_newlines: true,
          max_preserve_newlines: 4,
          end_with_newline: true,
          wrap_line_length: 0
        });
      } else {
        beautified = beautify.js(decodedText, { 
          indent_size: 2, 
          space_in_empty_paren: true,
          preserve_newlines: true,
          max_preserve_newlines: 4,
          unescape_strings: false,
          wrap_line_length: 0
        });
      }
      
      return beautified;
    } catch (error) {
      return text.substring(0, 1000) + '...'; // Return truncated original if beautification fails
    }
  }

  findSourceMapUrl(content) {
    const sourceMapMatch = content.match(/\/\/#\s*sourceMappingURL=([^\s]+)/);
    if (sourceMapMatch) {
      return this.resolveUrl(sourceMapMatch[1]);
    }
    return null;
  }

  async processSourceMap(content) {
    try {
      const map = JSON.parse(content);
      return {
        sources: map.sources || [],
        sourcesContent: map.sourcesContent || [],
        names: map.names || []
      };
    } catch (error) {
      return null;
    }
  }

  formatBytes(bytes) {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  }
}

// CLI entry point
async function main() {
  const targetUrl = process.argv[2];
  
  if (!targetUrl) {
    console.error('Usage: node spanalyzer.js <url>');
    console.error('Example: node spanalyzer.js https://example.com');
    process.exit(1);
  }

      const analyzer = new SPAnalyzeR(targetUrl);
  await analyzer.analyze();
}

// Run if called directly
if (import.meta.url === `file://${process.argv[1]}`) {
  main().catch(console.error);
}

export { SPAnalyzeR }; 