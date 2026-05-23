import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();

const buildCriticalFiles = ['index.html', 'src/main.tsx', 'vite.config.ts'];
const missing = buildCriticalFiles.filter((file) => !fs.existsSync(path.join(root, file)));

if (missing.length > 0) {
  console.error('Build baseline validation failed. Missing build-critical files:');
  missing.forEach((file) => console.error(`- ${file}`));
  process.exit(1);
}

console.log('Build baseline validation passed.');
