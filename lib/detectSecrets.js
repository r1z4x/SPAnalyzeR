export function detectSecrets(content) {
  const secrets = [];
  
  // API Keys patterns
  const apiKeyPatterns = [
    /['"`]?api[_-]?key['"`]?\s*[:=]\s*['"`]([a-zA-Z0-9]{32,})['"`]/gi,
    /['"`]?api[_-]?token['"`]?\s*[:=]\s*['"`]([a-zA-Z0-9]{32,})['"`]/gi,
    /['"`]?access[_-]?token['"`]?\s*[:=]\s*['"`]([a-zA-Z0-9]{32,})['"`]/gi,
    /['"`]?secret[_-]?key['"`]?\s*[:=]\s*['"`]([a-zA-Z0-9]{32,})['"`]/gi,
    /['"`]?private[_-]?key['"`]?\s*[:=]\s*['"`]([a-zA-Z0-9]{32,})['"`]/gi,
    /['"`]?client[_-]?secret['"`]?\s*[:=]\s*['"`]([a-zA-Z0-9]{32,})['"`]/gi,
    /['"`]?app[_-]?secret['"`]?\s*[:=]\s*['"`]([a-zA-Z0-9]{32,})['"`]/gi
  ];
  
  // JWT tokens
  const jwtPatterns = [
    /['"`]?jwt['"`]?\s*[:=]\s*['"`](eyJ[a-zA-Z0-9_-]+\.[a-zA-Z0-9_-]+\.[a-zA-Z0-9_-]+)['"`]/gi,
    /['"`]?token['"`]?\s*[:=]\s*['"`](eyJ[a-zA-Z0-9_-]+\.[a-zA-Z0-9_-]+\.[a-zA-Z0-9_-]+)['"`]/gi,
    /['"`]?bearer['"`]?\s*[:=]\s*['"`](eyJ[a-zA-Z0-9_-]+\.[a-zA-Z0-9_-]+\.[a-zA-Z0-9_-]+)['"`]/gi
  ];
  
  // OAuth tokens
  const oauthPatterns = [
    /['"`]?oauth[_-]?token['"`]?\s*[:=]\s*['"`]([a-zA-Z0-9]{32,})['"`]/gi,
    /['"`]?oauth[_-]?secret['"`]?\s*[:=]\s*['"`]([a-zA-Z0-9]{32,})['"`]/gi,
    /['"`]?consumer[_-]?key['"`]?\s*[:=]\s*['"`]([a-zA-Z0-9]{32,})['"`]/gi,
    /['"`]?consumer[_-]?secret['"`]?\s*[:=]\s*['"`]([a-zA-Z0-9]{32,})['"`]/gi
  ];
  
  // Database credentials
  const dbPatterns = [
    /['"`]?db[_-]?password['"`]?\s*[:=]\s*['"`]([^'"`]+)['"`]/gi,
    /['"`]?database[_-]?password['"`]?\s*[:=]\s*['"`]([^'"`]+)['"`]/gi,
    /['"`]?mysql[_-]?password['"`]?\s*[:=]\s*['"`]([^'"`]+)['"`]/gi,
    /['"`]?postgres[_-]?password['"`]?\s*[:=]\s*['"`]([^'"`]+)['"`]/gi,
    /['"`]?mongo[_-]?password['"`]?\s*[:=]\s*['"`]([^'"`]+)['"`]/gi,
    /['"`]?redis[_-]?password['"`]?\s*[:=]\s*['"`]([^'"`]+)['"`]/gi
  ];
  
  // AWS credentials
  const awsPatterns = [
    /['"`]?aws[_-]?access[_-]?key[_-]?id['"`]?\s*[:=]\s*['"`](AKIA[a-zA-Z0-9]{16})['"`]/gi,
    /['"`]?aws[_-]?secret[_-]?access[_-]?key['"`]?\s*[:=]\s*['"`]([a-zA-Z0-9/+=]{40})['"`]/gi,
    /['"`]?aws[_-]?session[_-]?token['"`]?\s*[:=]\s*['"`]([a-zA-Z0-9/+=]{20,})['"`]/gi
  ];
  
  // Google API keys
  const googlePatterns = [
    /['"`]?google[_-]?api[_-]?key['"`]?\s*[:=]\s*['"`](AIza[a-zA-Z0-9]{35})['"`]/gi,
    /['"`]?firebase[_-]?api[_-]?key['"`]?\s*[:=]\s*['"`](AIza[a-zA-Z0-9]{35})['"`]/gi
  ];
  
  // Stripe keys
  const stripePatterns = [
    /['"`]?stripe[_-]?publishable[_-]?key['"`]?\s*[:=]\s*['"`](pk_[a-zA-Z0-9]{24})['"`]/gi,
    /['"`]?stripe[_-]?secret[_-]?key['"`]?\s*[:=]\s*['"`](sk_[a-zA-Z0-9]{24})['"`]/gi,
    /['"`]?stripe[_-]?webhook[_-]?secret['"`]?\s*[:=]\s*['"`](whsec_[a-zA-Z0-9]{24})['"`]/gi
  ];
  
  // GitHub tokens
  const githubPatterns = [
    /['"`]?github[_-]?token['"`]?\s*[:=]\s*['"`](ghp_[a-zA-Z0-9]{36})['"`]/gi,
    /['"`]?github[_-]?secret['"`]?\s*[:=]\s*['"`]([a-zA-Z0-9]{40})['"`]/gi
  ];
  
  // Slack tokens
  const slackPatterns = [
    /['"`]?slack[_-]?token['"`]?\s*[:=]\s*['"`](xox[p|b|o|a]-[0-9]{12}-[0-9]{12}-[a-zA-Z0-9]{24})['"`]/gi,
    /['"`]?slack[_-]?webhook['"`]?\s*[:=]\s*['"`](https:\/\/hooks\.slack\.com\/[a-zA-Z0-9\/]+)['"`]/gi
  ];
  
  // Discord tokens
  const discordPatterns = [
    /['"`]?discord[_-]?token['"`]?\s*[:=]\s*['"`]([a-zA-Z0-9]{24}\.[a-zA-Z0-9]{6}\.[a-zA-Z0-9]{27})['"`]/gi,
    /['"`]?discord[_-]?webhook['"`]?\s*[:=]\s*['"`](https:\/\/discord\.com\/api\/webhooks\/[0-9]+\/[a-zA-Z0-9_-]+)['"`]/gi
  ];
  
  // Generic password patterns
  const passwordPatterns = [
    /['"`]?password['"`]?\s*[:=]\s*['"`]([^'"`]{8,})['"`]/gi,
    /['"`]?passwd['"`]?\s*[:=]\s*['"`]([^'"`]{8,})['"`]/gi,
    /['"`]?pwd['"`]?\s*[:=]\s*['"`]([^'"`]{8,})['"`]/gi
  ];
  
  // Email patterns (might contain sensitive info)
  const emailPatterns = [
    /['"`]?email['"`]?\s*[:=]\s*['"`]([a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})['"`]/gi,
    /['"`]?mail['"`]?\s*[:=]\s*['"`]([a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})['"`]/gi
  ];
  
  // Phone number patterns
  const phonePatterns = [
    /['"`]?phone['"`]?\s*[:=]\s*['"`](\+?[1-9]\d{1,14})['"`]/gi,
    /['"`]?mobile['"`]?\s*[:=]\s*['"`](\+?[1-9]\d{1,14})['"`]/gi,
    /['"`]?tel['"`]?\s*[:=]\s*['"`](\+?[1-9]\d{1,14})['"`]/gi
  ];
  
  // Credit card patterns (basic)
  const ccPatterns = [
    /['"`]?card[_-]?number['"`]?\s*[:=]\s*['"`](\d{4}[-\s]?\d{4}[-\s]?\d{4}[-\s]?\d{4})['"`]/gi,
    /['"`]?cc[_-]?number['"`]?\s*[:=]\s*['"`](\d{4}[-\s]?\d{4}[-\s]?\d{4}[-\s]?\d{4})['"`]/gi
  ];
  
  // SSH keys
  const sshPatterns = [
    /['"`]?ssh[_-]?key['"`]?\s*[:=]\s*['"`](-----BEGIN [A-Z ]+ PRIVATE KEY-----[a-zA-Z0-9\/\s=]+-----END [A-Z ]+ PRIVATE KEY-----)['"`]/gi,
    /['"`]?private[_-]?key['"`]?\s*[:=]\s*['"`](-----BEGIN [A-Z ]+ PRIVATE KEY-----[a-zA-Z0-9\/\s=]+-----END [A-Z ]+ PRIVATE KEY-----)['"`]/gi
  ];
  
  // All patterns combined
  const allPatterns = [
    ...apiKeyPatterns,
    ...jwtPatterns,
    ...oauthPatterns,
    ...dbPatterns,
    ...awsPatterns,
    ...googlePatterns,
    ...stripePatterns,
    ...githubPatterns,
    ...slackPatterns,
    ...discordPatterns,
    ...passwordPatterns,
    ...emailPatterns,
    ...phonePatterns,
    ...ccPatterns,
    ...sshPatterns
  ];
  
  allPatterns.forEach(pattern => {
    let match;
    while ((match = pattern.exec(content)) !== null) {
      const secret = match[1];
      if (secret && !isCommonValue(secret)) {
        secrets.push({
          type: getSecretType(pattern),
          value: secret.substring(0, 20) + (secret.length > 20 ? '...' : ''),
          fullValue: secret
        });
      }
    }
  });
  
  return secrets.map(s => `${s.type}: ${s.value}`);
}

function getSecretType(pattern) {
  const patternStr = pattern.toString();
  if (patternStr.includes('api[_-]?key')) return 'API Key';
  if (patternStr.includes('jwt') || patternStr.includes('eyJ')) return 'JWT Token';
  if (patternStr.includes('oauth')) return 'OAuth Token';
  if (patternStr.includes('password') || patternStr.includes('passwd') || patternStr.includes('pwd')) return 'Password';
  if (patternStr.includes('aws')) return 'AWS Credential';
  if (patternStr.includes('google') || patternStr.includes('firebase')) return 'Google API Key';
  if (patternStr.includes('stripe')) return 'Stripe Key';
  if (patternStr.includes('github')) return 'GitHub Token';
  if (patternStr.includes('slack')) return 'Slack Token';
  if (patternStr.includes('discord')) return 'Discord Token';
  if (patternStr.includes('email') || patternStr.includes('mail')) return 'Email';
  if (patternStr.includes('phone') || patternStr.includes('mobile') || patternStr.includes('tel')) return 'Phone Number';
  if (patternStr.includes('card[_-]?number') || patternStr.includes('cc[_-]?number')) return 'Credit Card';
  if (patternStr.includes('ssh[_-]?key') || patternStr.includes('private[_-]?key')) return 'SSH Key';
  return 'Secret';
}

function isCommonValue(value) {
  const commonValues = [
    'password',
    'secret',
    'key',
    'token',
    'api_key',
    'api_key_placeholder',
    'your_api_key_here',
    'your_secret_here',
    'your_token_here',
    'placeholder',
    'example',
    'test',
    'demo',
    'sample',
    'dummy',
    'fake',
    'mock'
  ];
  
  return commonValues.some(common => 
    value.toLowerCase().includes(common.toLowerCase())
  );
} 