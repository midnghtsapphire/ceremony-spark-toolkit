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

const missingFiles = requiredFiles.filter((file) => !fs.existsSync(path.join(root, file)));

if (missingFiles.length > 0) {
  console.error('Revvel-standards automation failed. Missing files:');
  missingFiles.forEach((file) => console.error(`- ${file}`));
  process.exit(1);
}

const packageJsonPath = path.join(root, 'package.json');
const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));

if (!packageJson.scripts?.build) {
  console.error('Revvel-standards automation failed. package.json is missing a build script.');
  process.exit(1);
}

if (!packageJson.scripts?.test) {
  console.error('Revvel-standards automation failed. package.json is missing a test script.');
  process.exit(1);
}

const readme = fs.readFileSync(path.join(root, 'README.md'), 'utf8');
const requiredReadmeMarkers = [
  '## Website in Test (Vercel)',
  'Deployment automation',
  '## What this repository does',
  '## Value analysis and 3-year outcome framing',
];

const missingMarkers = requiredReadmeMarkers.filter((marker) => !readme.includes(marker));
if (missingMarkers.length > 0) {
  console.error('Revvel-standards automation failed. README.md is missing required sections:');
  missingMarkers.forEach((marker) => console.error(`- ${marker}`));
  process.exit(1);
}

console.log('Revvel-standards automation passed.');
