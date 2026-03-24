import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

if (!process.argv[2]) {
  console.error('Usage: node scripts/update-domain.mjs YOUR_DOMAIN');
  console.error('Example: node scripts/update-domain.mjs https://www.yourdomain.com');
  process.exit(1);
}

const newDomain = process.argv[2];

if (!newDomain.startsWith('https://') && !newDomain.startsWith('http://')) {
  console.error('Domain must start with http:// or https://');
  process.exit(1);
}

console.log(`Updating domain to: ${newDomain}`);

const files = [
  { path: '../src/constants/business.ts', pattern: /export const DOMAIN = "[^"]*"/, replacement: `export const DOMAIN = "${newDomain}"` },
  { path: '../public/robots.txt', pattern: /Sitemap: [^\n]+/, replacement: `Sitemap: ${newDomain}/sitemap.xml` },
];

files.forEach(file => {
  const filePath = path.join(__dirname, file.path);
  try {
    let content = fs.readFileSync(filePath, 'utf-8');
    content = content.replace(file.pattern, file.replacement);
    fs.writeFileSync(filePath, content, 'utf-8');
    console.log(`✓ Updated ${file.path}`);
  } catch (error) {
    console.error(`✗ Failed to update ${file.path}:`, error.message);
  }
});

console.log('\nDone! Now run: node scripts/generate-sitemap.mjs');
console.log(`Set DOMAIN env var: DOMAIN=${newDomain} node scripts/generate-sitemap.mjs`);
