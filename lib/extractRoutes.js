export function extractRoutes(content) {
  const routes = new Set();
  // React Router (v4+)
  const reactRoutePattern = /path\s*:\s*['"`]([^'"`]+)['"`]/g;
  // Angular
  const angularRoutePattern = /path\s*:\s*['"`]([^'"`]+)['"`]/g;
  // Vue Router
  const vueRoutePattern = /path\s*:\s*['"`]([^'"`]+)['"`]/g;
  // Next.js
  const nextRoutePattern = /getStaticPaths\s*\(.*?return\s*\[([^\]]+)\]/gs;
  // Nuxt.js
  const nuxtRoutePattern = /route\s*:\s*['"`]([^'"`]+)['"`]/g;
  // SAPUI5
  const sapui5RoutePattern = /pattern\s*:\s*['"`]([^'"`]+)['"`]/g;
  // General (hash or history)
  const generalPattern = /['"`]\/([a-zA-Z0-9_\-\/]+)['"`]/g;

  [reactRoutePattern, angularRoutePattern, vueRoutePattern, nuxtRoutePattern, sapui5RoutePattern, generalPattern].forEach(pattern => {
    let match;
    while ((match = pattern.exec(content)) !== null) {
      if (match[1] && match[1].length < 128) {
        routes.add(match[1]);
      }
    }
  });

  // Next.js getStaticPaths
  let match;
  while ((match = nextRoutePattern.exec(content)) !== null) {
    const arr = match[1].split(',').map(s => s.replace(/['"`]/g, '').trim());
    arr.forEach(route => {
      if (route && route.length < 128) routes.add(route);
    });
  }

  return Array.from(routes);
} 