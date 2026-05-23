import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();

const requiredFiles = [
  'README.md',
  'CHANGELOG.md',
  'DEPLOYMENT_GUIDE.md',
  'GO_TO_MARKET.md',
  'BRAND_GUIDELINES.md',
  'SECURITY.md',
  'scripts/test-baseline.js',
  'scripts/build-baseline.js',
];

const missing = requiredFiles.filter((file) => !fs.existsSync(path.join(root, file)));

if (missing.length > 0) {
  console.error('Baseline validation failed. Missing files:');
  missing.forEach((file) => console.error(`- ${file}`));
  process.exit(1);
}

const packageJsonPath = path.join(root, 'package.json');
const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));

if (!packageJson.scripts?.test) {
  console.error('Baseline validation failed. package.json is missing a test script.');
  process.exit(1);
}

if (!packageJson.scripts?.build) {
  console.error('Baseline validation failed. package.json is missing a build script.');
  process.exit(1);
}

console.log('Baseline validation passed.');
