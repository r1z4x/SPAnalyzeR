export function extractStorage(content) {
  const storage = [];
  
  // localStorage patterns
  const localStoragePatterns = [
    /localStorage\.(getItem|setItem|removeItem|clear|key)\s*\(/g,
    /localStorage\[['"`]([^'"`]+)['"`]\]/g,
    /localStorage\.([a-zA-Z_$][a-zA-Z0-9_$]*)\s*=/g
  ];
  
  // sessionStorage patterns
  const sessionStoragePatterns = [
    /sessionStorage\.(getItem|setItem|removeItem|clear|key)\s*\(/g,
    /sessionStorage\[['"`]([^'"`]+)['"`]\]/g,
    /sessionStorage\.([a-zA-Z_$][a-zA-Z0-9_$]*)\s*=/g
  ];
  
  // Cookie patterns
  const cookiePatterns = [
    /document\.cookie\s*=/g,
    /\.cookie\s*=/g,
    /cookie\s*[:=]/g,
    /setCookie\s*\(/g,
    /getCookie\s*\(/g,
    /deleteCookie\s*\(/g
  ];
  
  // IndexedDB patterns
  const indexedDBPatterns = [
    /indexedDB\.(open|deleteDatabase)\s*\(/g,
    /\.transaction\s*\(/g,
    /\.objectStore\s*\(/g,
    /\.get\s*\(/g,
    /\.put\s*\(/g,
    /\.add\s*\(/g,
    /\.delete\s*\(/g,
    /\.clear\s*\(/g
  ];
  
  // WebSQL patterns (deprecated but still found)
  const webSQLPatterns = [
    /openDatabase\s*\(/g,
    /\.executeSql\s*\(/g,
    /\.transaction\s*\(/g
  ];
  
  // Cache API patterns
  const cachePatterns = [
    /caches\.(open|delete|keys|match|matchAll)\s*\(/g,
    /\.add\s*\(/g,
    /\.addAll\s*\(/g,
    /\.put\s*\(/g,
    /\.delete\s*\(/g,
    /\.keys\s*\(/g
  ];
  
  // Service Worker patterns
  const serviceWorkerPatterns = [
    /navigator\.serviceWorker\.(register|getRegistration|getRegistrations)\s*\(/g,
    /serviceWorker\.(postMessage|skipWaiting|update)\s*\(/g
  ];
  
  // Custom storage patterns
  const customStoragePatterns = [
    /storage\s*[:=]/g,
    /cache\s*[:=]/g,
    /persist\s*[:=]/g,
    /save\s*[:=]/g,
    /load\s*[:=]/g,
    /store\s*[:=]/g
  ];
  
  // Check for localStorage usage
  if (localStoragePatterns.some(pattern => pattern.test(content))) {
    storage.push('localStorage');
  }
  
  // Check for sessionStorage usage
  if (sessionStoragePatterns.some(pattern => pattern.test(content))) {
    storage.push('sessionStorage');
  }
  
  // Check for cookie usage
  if (cookiePatterns.some(pattern => pattern.test(content))) {
    storage.push('Cookies');
  }
  
  // Check for IndexedDB usage
  if (indexedDBPatterns.some(pattern => pattern.test(content))) {
    storage.push('IndexedDB');
  }
  
  // Check for WebSQL usage
  if (webSQLPatterns.some(pattern => pattern.test(content))) {
    storage.push('WebSQL');
  }
  
  // Check for Cache API usage
  if (cachePatterns.some(pattern => pattern.test(content))) {
    storage.push('Cache API');
  }
  
  // Check for Service Worker usage
  if (serviceWorkerPatterns.some(pattern => pattern.test(content))) {
    storage.push('Service Worker');
  }
  
  // Check for custom storage patterns
  if (customStoragePatterns.some(pattern => pattern.test(content))) {
    storage.push('Custom Storage');
  }
  
  // Extract specific storage keys being used
  const storageKeys = [];
  
  // Extract localStorage keys
  const localStorageKeyPattern = /localStorage\[['"`]([^'"`]+)['"`]\]/g;
  let match;
  while ((match = localStorageKeyPattern.exec(content)) !== null) {
    storageKeys.push(`localStorage:${match[1]}`);
  }
  
  // Extract sessionStorage keys
  const sessionStorageKeyPattern = /sessionStorage\[['"`]([^'"`]+)['"`]\]/g;
  while ((match = sessionStorageKeyPattern.exec(content)) !== null) {
    storageKeys.push(`sessionStorage:${match[1]}`);
  }
  
  // Extract cookie names
  const cookieNamePattern = /(?:cookie|cookies?)\s*[:=]\s*['"`]([^'"`]+)['"`]/gi;
  while ((match = cookieNamePattern.exec(content)) !== null) {
    storageKeys.push(`cookie:${match[1]}`);
  }
  
  // Add storage keys to the result
  if (storageKeys.length > 0) {
    storage.push(...storageKeys.slice(0, 10)); // Limit to first 10 keys
  }
  
  return [...new Set(storage)]; // Remove duplicates
} 