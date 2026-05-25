# Changelog

All notable changes to this project are documented in this file.

## [0.1.1] - 2026-05-25
### Changed
- Expanded `README.md` with explicit S2M one-iteration sections for research engine, executed suggestions, assets inventory, artifacts inventory, and full website completion status.
- Added GO_TO_MARKET traceability section linking research engine outputs to shipped assets/artifacts and route-level website implementation.
- Updated `scripts/revvel-standards-automation.js` to enforce the new S2M research/assets/artifacts/full-website README sections.

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
