# Changelog

All notable changes to this project are documented in this file.

## [0.1.0] - 2026-05-23
### Added
- Revvel-standards baseline documentation set:
  - README refresh with product positioning, usage, and projection model
  - DEPLOYMENT_GUIDE.md
  - GO_TO_MARKET.md
  - BRAND_GUIDELINES.md
  - SECURITY.md
- Baseline validation scripts:
  - scripts/test-baseline.js
  - scripts/build-baseline.js
- npm `test` script for baseline repository validation.

### Changed
- Added `scripts/revvel-standards-automation.js` as a revvel automation entrypoint.
- Wired `npm test` and `npm run revvel:standards` to the revvel automation script.
- Updated README baseline check command to `npm run revvel:standards`.
