export function extractAPIs(content) {
  const apis = new Set();
  
  // Limit content size for performance
  const maxContentSize = 100000; // 100KB
  const textToAnalyze = content.length > maxContentSize ? content.substring(0, maxContentSize) : content;
  
  // Fetch API patterns
  const fetchPatterns = [
    /fetch\s*\(\s*['"`]([^'"`]+)['"`]/g,
    /fetch\s*\(\s*`([^`]+)`/g,
    /fetch\s*\(\s*([a-zA-Z_$][a-zA-Z0-9_$]*)/g
  ];
  
  // Axios patterns
  const axiosPatterns = [
    /axios\.(get|post|put|delete|patch)\s*\(\s*['"`]([^'"`]+)['"`]/g,
    /axios\.(get|post|put|delete|patch)\s*\(\s*`([^`]+)`/g,
    /axios\s*\(\s*['"`]([^'"`]+)['"`]/g,
    /axios\s*\(\s*`([^`]+)`/g
  ];
  
  // XMLHttpRequest patterns
  const xhrPatterns = [
    /\.open\s*\(\s*['"`]?(GET|POST|PUT|DELETE|PATCH)['"`]?\s*,\s*['"`]([^'"`]+)['"`]/g,
    /\.open\s*\(\s*['"`]?(GET|POST|PUT|DELETE|PATCH)['"`]?\s*,\s*`([^`]+)`/g
  ];
  
  // jQuery AJAX patterns
  const jqueryPatterns = [
    /\$\.(get|post|put|delete|ajax)\s*\(\s*['"`]([^'"`]+)['"`]/g,
    /\$\.(get|post|put|delete|ajax)\s*\(\s*`([^`]+)`/g,
    /\$\.ajax\s*\(\s*\{[^}]*url\s*:\s*['"`]([^'"`]+)['"`]/g,
    /\$\.ajax\s*\(\s*\{[^}]*url\s*:\s*`([^`]+)`/g
  ];
  
  // Superagent patterns
  const superagentPatterns = [
    /request\s*\.(get|post|put|delete|patch)\s*\(\s*['"`]([^'"`]+)['"`]/g,
    /request\s*\.(get|post|put|delete|patch)\s*\(\s*`([^`]+)`/g
  ];
  
  // Got patterns
  const gotPatterns = [
    /got\s*\(\s*['"`]([^'"`]+)['"`]/g,
    /got\s*\(\s*`([^`]+)`/g
  ];
  
  // Node-fetch patterns
  const nodeFetchPatterns = [
    /nodeFetch\s*\(\s*['"`]([^'"`]+)['"`]/g,
    /nodeFetch\s*\(\s*`([^`]+)`/g
  ];
  
  // GraphQL patterns
  const graphqlPatterns = [
    /graphql\s*\(\s*['"`]([^'"`]+)['"`]/g,
    /graphql\s*\(\s*`([^`]+)`/g,
    /gql\s*`([^`]+)`/g
  ];
  
  // WebSocket patterns
  const websocketPatterns = [
    /new\s+WebSocket\s*\(\s*['"`]([^'"`]+)['"`]/g,
    /new\s+WebSocket\s*\(\s*`([^`]+)`/g,
    /ws:\/\/[^\s'"]+/g,
    /wss:\/\/[^\s'"]+/g
  ];
  
  // Extract URLs from all patterns with limits
  const allPatterns = [
    ...fetchPatterns,
    ...axiosPatterns,
    ...xhrPatterns,
    ...jqueryPatterns,
    ...superagentPatterns,
    ...gotPatterns,
    ...nodeFetchPatterns,
    ...graphqlPatterns,
    ...websocketPatterns
  ];
  
  allPatterns.forEach(pattern => {
    let match;
    let count = 0;
    const maxMatches = 20;
    while ((match = pattern.exec(textToAnalyze)) !== null && count < maxMatches) {
      const url = match[1] || match[2];
      if (url && isValidUrl(url)) {
        apis.add(url);
      }
      count++;
    }
  });
  
  // Look for API base URLs in configuration
  const configPatterns = [
    /baseURL\s*:\s*['"`]([^'"`]+)['"`]/g,
    /base_url\s*:\s*['"`]([^'"`]+)['"`]/g,
    /apiUrl\s*:\s*['"`]([^'"`]+)['"`]/g,
    /api_url\s*:\s*['"`]([^'"`]+)['"`]/g,
    /endpoint\s*:\s*['"`]([^'"`]+)['"`]/g,
    /url\s*:\s*['"`]([^'"`]+)['"`]/g
  ];
  
  configPatterns.forEach(pattern => {
    let match;
    let count = 0;
    const maxMatches = 10;
    while ((match = pattern.exec(textToAnalyze)) !== null && count < maxMatches) {
      const url = match[1];
      if (url && isValidUrl(url)) {
        apis.add(url);
      }
      count++;
    }
  });
  
  return Array.from(apis).slice(0, 30); // Limit to 30 APIs
}

function isValidUrl(string) {
  try {
    const url = new URL(string);
    return url.protocol === 'http:' || url.protocol === 'https:' || url.protocol === 'ws:' || url.protocol === 'wss:';
  } catch (_) {
    return false;
  }
} 