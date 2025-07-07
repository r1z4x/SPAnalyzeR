export function extractModules(content) {
  const modules = new Set();
  // Webpack style: "./src/components/Button.js": function(...)
  const webpackPattern = /['"`]((?:\.?\/?[\w\-@\/\.]+)+)['"`]:\s*function\s*\(/g;
  // Rollup style: define(["moduleA", "moduleB"], ...)
  const rollupPattern = /define\(\[([\s\S]*?)\]/g;
  // ES6 import style: import ... from 'module'
  const es6ImportPattern = /import\s+[^'"`]+['"`]([^'"`]+)['"`]/g;
  // CommonJS require style: require('module')
  const requirePattern = /require\(['"`]([^'"`]+)['"`]\)/g;

  let match;
  while ((match = webpackPattern.exec(content)) !== null) {
    modules.add(match[1]);
  }
  while ((match = rollupPattern.exec(content)) !== null) {
    const arr = match[1].split(',').map(s => s.replace(/['"`\[\]\s]/g, '').trim());
    arr.forEach(m => { if (m) modules.add(m); });
  }
  while ((match = es6ImportPattern.exec(content)) !== null) {
    modules.add(match[1]);
  }
  while ((match = requirePattern.exec(content)) !== null) {
    modules.add(match[1]);
  }
  return Array.from(modules);
} 