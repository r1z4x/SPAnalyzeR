export function extractAuth(content) {
  const auth = [];
  
  // JWT token patterns
  const jwtPatterns = [
    /jwt\s*[:=]/gi,
    /token\s*[:=]/gi,
    /bearer\s*[:=]/gi,
    /authorization\s*[:=]/gi,
    /auth\s*[:=]/gi,
    /eyJ[a-zA-Z0-9_-]+\.[a-zA-Z0-9_-]+\.[a-zA-Z0-9_-]+/g
  ];
  
  // OAuth patterns
  const oauthPatterns = [
    /oauth\s*[:=]/gi,
    /client_id\s*[:=]/gi,
    /client_secret\s*[:=]/gi,
    /redirect_uri\s*[:=]/gi,
    /scope\s*[:=]/gi,
    /grant_type\s*[:=]/gi
  ];
  
  // Authentication function patterns
  const authFunctionPatterns = [
    /login\s*[:=]/gi,
    /logout\s*[:=]/gi,
    /signin\s*[:=]/gi,
    /signout\s*[:=]/gi,
    /authenticate\s*[:=]/gi,
    /authorize\s*[:=]/gi,
    /isAuthenticated\s*[:=]/gi,
    /isAuthorized\s*[:=]/gi,
    /checkAuth\s*[:=]/gi,
    /validateToken\s*[:=]/gi,
    /refreshToken\s*[:=]/gi
  ];
  
  // Session patterns
  const sessionPatterns = [
    /session\s*[:=]/gi,
    /sessionId\s*[:=]/gi,
    /sessionToken\s*[:=]/gi,
    /userSession\s*[:=]/gi
  ];
  
  // User patterns
  const userPatterns = [
    /user\s*[:=]/gi,
    /userId\s*[:=]/gi,
    /username\s*[:=]/gi,
    /email\s*[:=]/gi,
    /password\s*[:=]/gi,
    /currentUser\s*[:=]/gi,
    /loggedInUser\s*[:=]/gi
  ];
  
  // Role and permission patterns
  const rolePatterns = [
    /role\s*[:=]/gi,
    /roles\s*[:=]/gi,
    /permission\s*[:=]/gi,
    /permissions\s*[:=]/gi,
    /admin\s*[:=]/gi,
    /isAdmin\s*[:=]/gi,
    /hasRole\s*[:=]/gi,
    /hasPermission\s*[:=]/gi
  ];
  
  // Security header patterns
  const securityHeaderPatterns = [
    /x-auth-token\s*[:=]/gi,
    /x-api-key\s*[:=]/gi,
    /x-access-token\s*[:=]/gi,
    /x-csrf-token\s*[:=]/gi,
    /x-requested-with\s*[:=]/gi
  ];
  
  // Authentication library patterns
  const authLibraryPatterns = [
    /passport\s*[:=]/gi,
    /auth0\s*[:=]/gi,
    /firebase\.auth/gi,
    /supabase\.auth/gi,
    /next-auth/gi,
    /@auth0/gi,
    /@supabase/gi
  ];
  
  // Check for JWT usage
  if (jwtPatterns.some(pattern => pattern.test(content))) {
    auth.push('JWT Authentication');
  }
  
  // Check for OAuth usage
  if (oauthPatterns.some(pattern => pattern.test(content))) {
    auth.push('OAuth');
  }
  
  // Check for authentication functions
  if (authFunctionPatterns.some(pattern => pattern.test(content))) {
    auth.push('Authentication Functions');
  }
  
  // Check for session management
  if (sessionPatterns.some(pattern => pattern.test(content))) {
    auth.push('Session Management');
  }
  
  // Check for user management
  if (userPatterns.some(pattern => pattern.test(content))) {
    auth.push('User Management');
  }
  
  // Check for role-based access control
  if (rolePatterns.some(pattern => pattern.test(content))) {
    auth.push('Role-Based Access Control');
  }
  
  // Check for security headers
  if (securityHeaderPatterns.some(pattern => pattern.test(content))) {
    auth.push('Security Headers');
  }
  
  // Check for authentication libraries
  if (authLibraryPatterns.some(pattern => pattern.test(content))) {
    auth.push('Authentication Libraries');
  }
  
  // Extract specific authentication endpoints
  const authEndpoints = [];
  
  // Login/logout endpoints
  const authEndpointPatterns = [
    /['"`]\/api\/auth\/login['"`]/gi,
    /['"`]\/api\/auth\/logout['"`]/gi,
    /['"`]\/api\/auth\/signin['"`]/gi,
    /['"`]\/api\/auth\/signout['"`]/gi,
    /['"`]\/api\/auth\/token['"`]/gi,
    /['"`]\/api\/auth\/refresh['"`]/gi,
    /['"`]\/api\/auth\/validate['"`]/gi,
    /['"`]\/api\/user['"`]/gi,
    /['"`]\/api\/me['"`]/gi,
    /['"`]\/api\/profile['"`]/gi
  ];
  
  authEndpointPatterns.forEach(pattern => {
    let match;
    while ((match = pattern.exec(content)) !== null) {
      authEndpoints.push(match[0].replace(/['"`]/g, ''));
    }
  });
  
  // Extract authentication configuration
  const authConfig = [];
  
  // Auth configuration patterns
  const configPatterns = [
    /authConfig\s*[:=]/gi,
    /auth\.config/gi,
    /authentication\s*[:=]/gi,
    /authorization\s*[:=]/gi
  ];
  
  configPatterns.forEach(pattern => {
    if (pattern.test(content)) {
      authConfig.push('Authentication Configuration');
    }
  });
  
  // Combine all findings
  const allAuth = [...new Set([...auth, ...authEndpoints, ...authConfig])];
  
  return allAuth.slice(0, 20); // Limit to first 20 findings
} 