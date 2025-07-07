import { parentPort, workerData } from 'worker_threads';
import { detectBundler } from './detectBundler.js';
import { extractAPIs } from './extractAPIs.js';
import { detectSecrets } from './detectSecrets.js';
import { detectFrameworks } from './detectFrameworks.js';
import { extractRoutes } from './extractRoutes.js';
import { extractModules } from './extractModules.js';
import { extractFunctions } from './extractFunctions.js';
import { extractStorage } from './extractStorage.js';
import { extractAuth } from './extractAuth.js';
import { decodeDecimalSequences } from './decimalDecoder.js';
import beautify from 'js-beautify';
// Prettier will be loaded dynamically if available
import path from 'path';
import { minify } from 'terser';

async function analyzeAsset(assetUrl, content) {
  const ext = path.extname(assetUrl);
  const text = content.toString();
  
  // Skip very large files for detailed analysis
  const isLargeFile = content.length > 500 * 1024; // 500KB
  const isHugeFile = content.length > 2 * 1024 * 1024; // 2MB
  
  // For huge files, only do basic analysis
  if (isHugeFile) {
    return {
      url: assetUrl,
      extension: ext,
      size: content.length,
      isMinified: isMinified(text.substring(0, 10000)),
      isObfuscated: isObfuscated(text.substring(0, 10000)),
      isBundle: isBundle(text.substring(0, 10000), assetUrl),
      beautified: null,
      bundler: detectBundler(text.substring(0, 10000)),
      apis: extractAPIs(text.substring(0, 50000)),
      secrets: detectSecrets(text.substring(0, 50000)),
      frameworks: detectFrameworks(text.substring(0, 10000)),
      routes: extractRoutes(text.substring(0, 10000)),
      modules: extractModules(text.substring(0, 10000)),
      functions: [],
      classes: [],
      exports: [],
      storage: extractStorage(text.substring(0, 10000)),
      auth: extractAuth(text.substring(0, 10000)),
      sourceMap: null
    };
  }
  
  const functionAnalysis = isLargeFile ? { functions: [], classes: [], exports: [] } : extractFunctions(text);
  
  return {
    url: assetUrl,
    extension: ext,
    size: content.length,
    isMinified: isMinified(text),
    isObfuscated: isObfuscated(text),
    isBundle: isBundle(text, assetUrl),
    beautified: isLargeFile ? null : await beautifyCode(text, ext),
    bundler: detectBundler(text),
    apis: extractAPIs(text),
    secrets: detectSecrets(text),
    frameworks: detectFrameworks(text),
    routes: extractRoutes(text),
    modules: extractModules(text),
    functions: functionAnalysis.functions,
    classes: functionAnalysis.classes,
    exports: functionAnalysis.exports,
    storage: extractStorage(text),
    auth: extractAuth(text),
    sourceMap: null
  };
}

function isMinified(text) {
  const lines = text.split('\n');
  const avgLineLength = text.length / lines.length;
  return lines.length < 10 || avgLineLength > 100 || /^\s*[a-zA-Z$_][a-zA-Z0-9$_]*\s*=\s*[a-zA-Z$_][a-zA-Z0-9$_]*\s*;/.test(text);
}

function isObfuscated(text) {
  return /[a-zA-Z]{1,2}=[a-zA-Z]{1,2};/.test(text) || 
         /eval\(/.test(text) || 
         /Function\(/.test(text) ||
         /[a-zA-Z]{20,}/.test(text);
}

function isBundle(text, url) {
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

async function beautifyCode(text, ext) {
  try {
    // Limit beautification to first 50KB for performance
    const textToBeautify = text.length > 50000 ? text.substring(0, 50000) + '...' : text;
    
    // First, decode decimal sequences
    const decodedText = decodeDecimalSequences(textToBeautify);
    
    // Clean the text before beautification
    const cleanedText = decodedText
      .replace(/[\u0000-\u001F\u007F-\u009F]/g, '') // Remove control characters
      .replace(/\r\n/g, '\n') // Normalize line endings
      .replace(/\r/g, '\n')
      // Convert decimal escape sequences to UTF-8 characters
      .replace(/\\x([0-9A-Fa-f]{2})/g, (match, hex) => {
        try {
          return String.fromCharCode(parseInt(hex, 16));
        } catch (e) {
          return match;
        }
      })
      .replace(/\\u([0-9A-Fa-f]{4})/g, (match, hex) => {
        try {
          return String.fromCharCode(parseInt(hex, 16));
        } catch (e) {
          return match;
        }
      })
      .replace(/\\u\{([0-9A-Fa-f]+)\}/g, (match, hex) => {
        try {
          return String.fromCodePoint(parseInt(hex, 16));
        } catch (e) {
          return match;
        }
      })
      // Convert octal escape sequences
      .replace(/\\([0-7]{3})/g, (match, octal) => {
        try {
          return String.fromCharCode(parseInt(octal, 8));
        } catch (e) {
          return match;
        }
      });
    
    // 1. Terser beautify dene
    if (ext === '.js' || ext === '.ts' || ext === '.jsx' || ext === '.tsx') {
      try {
        const terserResult = await minify(cleanedText, {
          compress: false,
          mangle: false,
          format: {
            beautify: true,
            indent_level: 2,
            max_line_len: 80,
            braces: true
          }
        });
        if (terserResult.code && terserResult.code.length > 0) {
          return terserResult.code;
        }
      } catch (terserError) {
        // Terser beautify başarısız olursa js-beautify ile devam et
      }
    }
    
    // Try Prettier first for better formatting (only for simple cases)
    try {
      if (ext === '.json') {
        const parsed = JSON.parse(cleanedText);
        return JSON.stringify(parsed, null, 2);
      }
    } catch (prettierError) {
      // JSON parsing failed, continue with js-beautify
    }
    
    // Fallback to js-beautify if prettier fails
    let beautified;
    
    if (ext === '.js' || ext === '.ts' || ext === '.jsx' || ext === '.tsx') {
      beautified = beautify.js(cleanedText, { 
        indent_size: 2, 
        space_in_empty_paren: true,
        preserve_newlines: true,
        max_preserve_newlines: 4,
        unescape_strings: false,
        wrap_line_length: 80,
        keep_array_indentation: false,
        break_chained_methods: true,
        indent_scripts: "normal",
        brace_style: "expand",
        space_before_conditional: true,
        jslint_happy: false,
        end_with_newline: true,
        indent_inner_html: false,
        comma_first: false,
        e4x: false,
        indent_empty_lines: false
      });
    } else if (ext === '.html' || ext === '.htm') {
      beautified = beautify.html(cleanedText, {
        indent_size: 2,
        indent_char: ' ',
        max_preserve_newlines: 4,
        preserve_newlines: true
      });
    } else if (ext === '.css' || ext === '.scss' || ext === '.sass' || ext === '.less') {
      beautified = beautify.css(cleanedText, {
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
      beautified = beautify.js(cleanedText, { 
        indent_size: 2, 
        space_in_empty_paren: true,
        preserve_newlines: true,
        max_preserve_newlines: 4,
        unescape_strings: false,
        wrap_line_length: 0
      });
    }
    
    return typeof beautified === 'string' ? beautified : cleanedText.substring(0, 1000) + '...';
  } catch (error) {
    console.error('Beautification error:', error.message);
    return text.substring(0, 1000) + '...';
  }
}

// Worker thread entry point
if (parentPort) {
  const { assetUrl, content } = workerData;
  
  try {
    const result = await analyzeAsset(assetUrl, content);
    parentPort.postMessage({ success: true, result });
  } catch (error) {
    parentPort.postMessage({ success: false, error: error.message });
  }
} 