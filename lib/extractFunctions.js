export function extractFunctions(content) {
  const functions = [];
  const classes = [];
  const exports = [];
  
  // Limit content size for performance
  const maxContentSize = 200000; // 200KB
  const textToAnalyze = content.length > maxContentSize ? content.substring(0, maxContentSize) : content;
  
  // Function declarations: function name() or function name(params)
  const functionDeclPattern = /function\s+([a-zA-Z_$][a-zA-Z0-9_$]*)\s*\(/g;
  
  // Arrow functions assigned to variables: const name = () => or let name = () =>
  const arrowFunctionPattern = /(?:const|let|var)\s+([a-zA-Z_$][a-zA-Z0-9_$]*)\s*=\s*(?:\([^)]*\)|[a-zA-Z_$][a-zA-Z0-9_$]*)\s*=>/g;
  
  // Method definitions in objects: name: function() or name() { }
  const methodPattern = /([a-zA-Z_$][a-zA-Z0-9_$]*)\s*:\s*function\s*\(/g;
  const methodShorthandPattern = /([a-zA-Z_$][a-zA-Z0-9_$]*)\s*\([^)]*\)\s*\{/g;
  
  // Class declarations: class Name
  const classPattern = /class\s+([a-zA-Z_$][a-zA-Z0-9_$]*)/g;
  
  // Export statements: export function, export const, export class, export default
  const exportPattern = /export\s+(?:function|const|let|var|class|default)\s+([a-zA-Z_$][a-zA-Z0-9_$]*)/g;
  const exportDefaultPattern = /export\s+default\s+([a-zA-Z_$][a-zA-Z0-9_$]*)/g;
  
  // Module.exports patterns
  const moduleExportsPattern = /module\.exports\s*=\s*([a-zA-Z_$][a-zA-Z0-9_$]*)/g;
  const moduleExportsObjectPattern = /module\.exports\s*=\s*\{[^}]*([a-zA-Z_$][a-zA-Z0-9_$]*)\s*:/g;
  
  // React components: function ComponentName or const ComponentName = () =>
  const reactComponentPattern = /(?:function|const)\s+([A-Z][a-zA-Z0-9_$]*)\s*(?:\(|=\s*\([^)]*\)\s*=>)/g;
  
  // Webpack module exports
  const webpackExportPattern = /__webpack_exports__\[['"`]([^'"`]+)['"`]\]\s*=/g;
  
  // Extract functions with limits
  let match;
  let count = 0;
  const maxFunctions = 100;
  
  while ((match = functionDeclPattern.exec(textToAnalyze)) !== null && count < maxFunctions) {
    functions.push(match[1]);
    count++;
  }
  
  count = 0;
  while ((match = arrowFunctionPattern.exec(textToAnalyze)) !== null && count < maxFunctions) {
    functions.push(match[1]);
    count++;
  }
  
  count = 0;
  while ((match = methodPattern.exec(textToAnalyze)) !== null && count < maxFunctions) {
    functions.push(match[1]);
    count++;
  }
  
  count = 0;
  while ((match = methodShorthandPattern.exec(textToAnalyze)) !== null && count < maxFunctions) {
    functions.push(match[1]);
    count++;
  }
  
  // Extract classes
  count = 0;
  while ((match = classPattern.exec(textToAnalyze)) !== null && count < maxFunctions) {
    classes.push(match[1]);
    count++;
  }
  
  // Extract exports
  count = 0;
  while ((match = exportPattern.exec(textToAnalyze)) !== null && count < maxFunctions) {
    exports.push(match[1]);
    count++;
  }
  
  count = 0;
  while ((match = exportDefaultPattern.exec(textToAnalyze)) !== null && count < maxFunctions) {
    exports.push(match[1]);
    count++;
  }
  
  count = 0;
  while ((match = moduleExportsPattern.exec(textToAnalyze)) !== null && count < maxFunctions) {
    exports.push(match[1]);
    count++;
  }
  
  count = 0;
  while ((match = moduleExportsObjectPattern.exec(textToAnalyze)) !== null && count < maxFunctions) {
    exports.push(match[1]);
    count++;
  }
  
  count = 0;
  while ((match = reactComponentPattern.exec(textToAnalyze)) !== null && count < maxFunctions) {
    functions.push(match[1]);
    count++;
  }
  
  count = 0;
  while ((match = webpackExportPattern.exec(textToAnalyze)) !== null && count < maxFunctions) {
    exports.push(match[1]);
    count++;
  }
  
  // Remove duplicates and filter out common false positives
  const uniqueFunctions = [...new Set(functions)].filter(name => 
    !isCommonFalsePositive(name)
  ).slice(0, 50); // Limit to 50 functions
  
  const uniqueClasses = [...new Set(classes)].filter(name => 
    !isCommonFalsePositive(name)
  ).slice(0, 20); // Limit to 20 classes
  
  const uniqueExports = [...new Set(exports)].filter(name => 
    !isCommonFalsePositive(name)
  ).slice(0, 30); // Limit to 30 exports
  
  return {
    functions: uniqueFunctions,
    classes: uniqueClasses,
    exports: uniqueExports
  };
}

function isCommonFalsePositive(name) {
  const falsePositives = [
    'undefined', 'null', 'true', 'false', 'NaN', 'Infinity',
    'console', 'window', 'document', 'global', 'process',
    'require', 'module', 'exports', 'import', 'export',
    'arguments', 'this', 'super', 'new', 'delete', 'typeof',
    'instanceof', 'void', 'return', 'throw', 'try', 'catch',
    'finally', 'if', 'else', 'switch', 'case', 'default',
    'for', 'while', 'do', 'break', 'continue', 'debugger',
    'function', 'var', 'let', 'const', 'class', 'extends',
    'static', 'get', 'set', 'async', 'await', 'yield',
    'of', 'in', 'with', 'eval', 'parseInt', 'parseFloat',
    'isNaN', 'isFinite', 'decodeURI', 'decodeURIComponent',
    'encodeURI', 'encodeURIComponent', 'escape', 'unescape',
    'Object', 'Array', 'String', 'Number', 'Boolean', 'Symbol',
    'Date', 'RegExp', 'Error', 'EvalError', 'RangeError',
    'ReferenceError', 'SyntaxError', 'TypeError', 'URIError',
    'JSON', 'Math', 'Promise', 'Proxy', 'Reflect', 'Map',
    'Set', 'WeakMap', 'WeakSet', 'Int8Array', 'Uint8Array',
    'Uint8ClampedArray', 'Int16Array', 'Uint16Array',
    'Int32Array', 'Uint32Array', 'Float32Array', 'Float64Array',
    'DataView', 'ArrayBuffer', 'SharedArrayBuffer', 'Atomics',
    'WebAssembly', 'Generator', 'GeneratorFunction', 'AsyncFunction'
  ];
  
  return falsePositives.includes(name) || 
         name.length < 2 || 
         /^[0-9]/.test(name) ||
         /^[a-z]$/.test(name); // Single letter variables
} 