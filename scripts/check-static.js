const fs = require('fs');
const path = require('path');

const root = process.cwd();
const requiredFiles = ['index.html', 'styles.css', 'script.js', '.nojekyll'];
const missingFiles = requiredFiles.filter((file) => !fs.existsSync(path.join(root, file)));

if (missingFiles.length > 0) {
  console.error(`Missing required files: ${missingFiles.join(', ')}`);
  process.exit(1);
}

const html = fs.readFileSync(path.join(root, 'index.html'), 'utf8');
const linkedAssets = [...html.matchAll(/(?:href|src)="([^"]+)"/g)]
  .map((match) => match[1])
  .filter((asset) => asset && !asset.startsWith('#'))
  .filter((asset) => !asset.startsWith('http'))
  .filter((asset) => !asset.startsWith('mailto:'))
  .filter((asset) => !asset.startsWith('data:'))
  .filter((asset) => !asset.startsWith('application/'));

const missingAssets = linkedAssets.filter((asset) => !fs.existsSync(path.join(root, asset)));

if (missingAssets.length > 0) {
  console.error(`Missing linked assets: ${missingAssets.join(', ')}`);
  process.exit(1);
}

if (!fs.existsSync(path.join(root, 'assets/social/linkedin-preview.png'))) {
  console.error('Missing LinkedIn preview image: assets/social/linkedin-preview.png');
  process.exit(1);
}

if (/correo@ejemplo|github\.com\/ejemplo|placeholder|pendiente|TODO|FIXME/i.test(html)) {
  console.error('index.html still contains placeholders or pending text.');
  process.exit(1);
}

console.log('Static site check OK for GitHub Pages.');
