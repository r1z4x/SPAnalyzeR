export function detectBundler(content) {
  const patterns = [
    { name: 'Webpack', patterns: [
      /webpackJsonp/,
      /webpackChunk/,
      /__webpack_require__/,
      /webpack_require/,
      /webpack_modules/,
      /webpack\.bootstrap/,
      /webpack\.runtime/
    ]},
    { name: 'Vite', patterns: [
      /__vite_ssr_import__/,
      /import\.meta\.env/,
      /vite\/dist/,
      /@vite\/client/,
      /vite:preload/
    ]},
    { name: 'Rollup', patterns: [
      /rollup/,
      /__ROLLUP__/,
      /rollup-plugin/
    ]},
    { name: 'Parcel', patterns: [
      /parcelRequire/,
      /parcelRequire\.register/,
      /__parcel__/
    ]},
    { name: 'esbuild', patterns: [
      /esbuild/,
      /__ESBUILD__/
    ]},
    { name: 'Browserify', patterns: [
      /require\(/,
      /module\.exports/,
      /__dirname/,
      /__filename/
    ]},
    { name: 'RequireJS', patterns: [
      /define\(/,
      /require\(/,
      /requirejs/
    ]},
    { name: 'SystemJS', patterns: [
      /System\.import/,
      /System\.register/,
      /SystemJS/
    ]},
    { name: 'UglifyJS', patterns: [
      /uglify/,
      /UglifyJS/
    ]},
    { name: 'Terser', patterns: [
      /terser/,
      /Terser/
    ]}
  ];

  for (const bundler of patterns) {
    if (bundler.patterns.some(pattern => pattern.test(content))) {
      return bundler.name;
    }
  }

  return null;
} 