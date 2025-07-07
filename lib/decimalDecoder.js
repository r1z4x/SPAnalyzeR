import fs from 'fs-extra';
import path from 'path';

export function decodeDecimalSequences(text) {
  if (typeof text !== 'string') {
    return text;
  }
  
  return text
    // Convert comma-separated decimal arrays to ASCII (only for long sequences)
    .replace(/(\d{1,3}(?:\s*,\s*\d{1,3}){10,})/g, (match) => {
      try {
        const numbers = match.split(',').map(n => n.trim()).filter(n => n);
        if (numbers.length > 10 && numbers.every(n => /^\d{1,3}$/.test(n))) {
          const decoded = numbers.map(n => String.fromCharCode(parseInt(n, 10))).join('');
          // Only replace if it produces readable text
          if (/[a-zA-Z0-9\s\(\)\[\]\{\}\.\,\;\:\"\']/.test(decoded)) {
            return decoded;
          }
        }
        return match;
      } catch (e) {
        return match;
      }
    })
    // Convert decimal escape sequences (\123)
    .replace(/\\([0-9]{1,3})/g, (match, decimal) => {
      try {
        const num = parseInt(decimal, 10);
        if (num >= 0 && num <= 255) {
          return String.fromCharCode(num);
        }
        return match;
      } catch (e) {
        return match;
      }
    })
    // Convert hex escape sequences (\x12)
    .replace(/\\x([0-9A-Fa-f]{2})/g, (match, hex) => {
      try {
        return String.fromCharCode(parseInt(hex, 16));
      } catch (e) {
        return match;
      }
    })
    // Convert unicode escape sequences (\u1234)
    .replace(/\\u([0-9A-Fa-f]{4})/g, (match, hex) => {
      try {
        return String.fromCharCode(parseInt(hex, 16));
      } catch (e) {
        return match;
      }
    })
    // Convert unicode code point sequences (\u{12345})
    .replace(/\\u\{([0-9A-Fa-f]+)\}/g, (match, hex) => {
      try {
        return String.fromCodePoint(parseInt(hex, 16));
      } catch (e) {
        return match;
      }
    })
    // Convert octal escape sequences (\123)
    .replace(/\\([0-7]{3})/g, (match, octal) => {
      try {
        return String.fromCharCode(parseInt(octal, 8));
      } catch (e) {
        return match;
      }
    })
    // Convert common HTML entities
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&nbsp;/g, ' ')
    // Convert numeric HTML entities (&#123;)
    .replace(/&#(\d+);/g, (match, decimal) => {
      try {
        return String.fromCharCode(parseInt(decimal, 10));
      } catch (e) {
        return match;
      }
    })
    // Convert hex HTML entities (&#x12;)
    .replace(/&#x([0-9A-Fa-f]+);/gi, (match, hex) => {
      try {
        return String.fromCharCode(parseInt(hex, 16));
      } catch (e) {
        return match;
      }
    });
}

export function processExtractedFiles(directory = 'beautified-code') {
  if (!fs.existsSync(directory)) {
    console.log(`📁 Directory ${directory} not found`);
    return;
  }
  
  console.log(`🔍 Processing files in ${directory} for decimal decoding...`);
  
  const files = fs.readdirSync(directory);
  let processedCount = 0;
  
  files.forEach(filename => {
    if (filename.endsWith('.js') || filename.endsWith('.ts') || filename.endsWith('.html')) {
      const filePath = path.join(directory, filename);
      
      try {
        // Read file content
        const content = fs.readFileSync(filePath, 'utf8');
        
        // Decode decimal sequences
        const decodedContent = decodeDecimalSequences(content);
        
        // Write back to file
        fs.writeFileSync(filePath, decodedContent, 'utf8');
        
        processedCount++;
        console.log(`   ✅ Decoded: ${filename}`);
        
      } catch (error) {
        console.warn(`   ⚠️  Failed to process: ${filename} - ${error.message}`);
      }
    }
  });
  
  console.log(`\n🎯 Decimal decoding completed: ${processedCount} files processed`);
  
  // Create a summary of what was decoded
  createDecodingSummary(directory);
}

function createDecodingSummary(directory) {
  const summaryPath = path.join(directory, 'DECODING_SUMMARY.md');
  
  let summary = `# Decimal Decoding Summary\n\n`;
  summary += `**Processed Date:** ${new Date().toLocaleString()}\n\n`;
  summary += `## What was decoded:\n\n`;
  summary += `- **Decimal escape sequences:** \\123 → corresponding ASCII character\n`;
  summary += `- **Hex escape sequences:** \\x12 → corresponding ASCII character\n`;
  summary += `- **Unicode escape sequences:** \\u1234 → corresponding Unicode character\n`;
  summary += `- **Unicode code points:** \\u{12345} → corresponding Unicode character\n`;
  summary += `- **Octal escape sequences:** \\123 → corresponding ASCII character\n`;
  summary += `- **HTML entities:** &amp;, &lt;, &gt;, &quot;, &#39;, &nbsp;\n`;
  summary += `- **Numeric HTML entities:** &#123; → corresponding character\n`;
  summary += `- **Hex HTML entities:** &#x12; → corresponding character\n\n`;
  summary += `## Files processed:\n\n`;
  
  const files = fs.readdirSync(directory);
  files.forEach(filename => {
    if (filename.endsWith('.js') || filename.endsWith('.ts') || filename.endsWith('.html')) {
      const filePath = path.join(directory, filename);
      const stats = fs.statSync(filePath);
      summary += `- **${filename}** (${(stats.size / 1024).toFixed(1)} KB)\n`;
    }
  });
  
  fs.writeFileSync(summaryPath, summary);
  console.log(`📋 Decoding summary created: ${summaryPath}`);
}

// CLI usage
if (import.meta.url === `file://${process.argv[1]}`) {
  const directory = process.argv[2] || 'beautified-code';
  processExtractedFiles(directory);
} 