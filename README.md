# Ceremony Spark Toolkit

Ceremony Spark Toolkit is a production-ready React + Supabase platform for officiants and ceremony businesses to create ceremony scripts, sell digital products, and manage subscription access.

## Website in Test (Vercel)

- **Test URL:** https://ceremony-spark-toolkit.vercel.app
- **Deployment automation:** Vercel GitHub integration auto-deploys pushes to the main branch and creates preview deployments for pull requests.

## What this repository does

This repository ships a full front-to-back web product that includes:

- Public marketing surface (home, feature sections, pricing, reviews)
- User login/signup and authenticated subscription state
- Stripe-backed checkout and customer portal via Supabase Edge Functions
- Product catalog with cart CTAs and featured filtering/search
- Admin route and dashboard gatekeeping
- Ceremony generation utilities (script generator, legal guide, checklists, templates)

## How to use it now

1. Install dependencies:
   ```bash
   npm ci
   ```
2. Run baseline checks:
   ```bash
   npm test
   ```
   `npm test` runs revvel-standards automation plus baseline test validation.
   Use `npm run revvel:standards` when you want only the revvel standards automation checks.
3. Start local development:
   ```bash
   npm run dev
   ```
4. Build for production:
   ```bash
   npm run build
   ```

## Required environment variables

For Supabase + Stripe flows, configure:

- `VITE_SUPABASE_URL`
- `VITE_SUPABASE_ANON_KEY`
- `SUPABASE_URL` (edge functions)
- `SUPABASE_ANON_KEY` (edge functions)
- `SUPABASE_SERVICE_ROLE_KEY` (edge functions)
- `STRIPE_SECRET_KEY` (edge functions)

See `/DEPLOYMENT_GUIDE.md` for step-by-step production setup.

## Value analysis and 3-year outcome framing

### Why this project matters

Ceremony Spark Toolkit compresses planning/admin workload for officiants while creating recurring subscription + digital-product revenue. It is valuable because it combines workflow tooling and monetization in one system instead of separate disconnected tools.

### Priority within portfolio goals

- **Primary value:** recurring SaaS subscriptions + add-on product sales
- **Secondary value:** reusable infrastructure (auth, Stripe, admin, catalog) for additional niche service products
- **Strategic value:** improves time-to-market for future verticalized creator/service platforms

### Revenue projection (assumption-based)

Assumptions:
- 3,000 active subscribers by year 3
- $29 blended monthly ARPU
- 20% of subscribers purchase an average of $12/month in product add-ons

Projection:
- Subscription ARR: `3,000 x $29 x 12 = $1,044,000`
- Add-on ARR: `3,000 x 20% x $12 x 12 = $86,400`
- **Total year-3 run-rate:** **$1.13M ARR**

## S2M research engine (one iteration)

- **Demand signals engine:** ceremony demand + planning behavior research from CDC and The Knot.
- **Monetization engine:** Stripe subscription and billing workflow implementation references.
- **Infrastructure engine:** Vercel + Supabase deployment architecture and release checks.
- **Execution model:** all core website surfaces and implementation artifacts shipped in one iteration for this release.

## S2M suggestions executed

- Keep checkout and billing flows on Stripe-hosted surfaces for security and speed.
- Use Vercel preview/production automation for rapid validation and deployment traceability.
- Bundle workflow utility (scripts, legal guide, checklist) with subscription and product sales surfaces.

## Assets inventory

- Brand, positioning, and voice system: `/BRAND_GUIDELINES.md`
- Launch and market research plan: `/GO_TO_MARKET.md`
- Deployment and ops runbook: `/DEPLOYMENT_GUIDE.md`
- Security controls baseline: `/SECURITY.md`
- Application UI + logic assets: `/src/components`, `/src/pages`, `/src/hooks`, `/src/utils`

## Artifacts inventory

- Revvel standards automation: `/scripts/revvel-standards-automation.js`
- Baseline test validation artifact: `/scripts/test-baseline.js`
- Baseline build validation artifact: `/scripts/build-baseline.js`
- Commerce backend artifacts: `/supabase/functions/*`, `/supabase/migrations/*`
- Website routes and shipped surfaces:
  - `/` home + generator + subscription + reviews
  - `/products` product catalog + cart CTAs
  - `/admin` role-gated admin dashboard
  - auth modal + subscription state + Stripe checkout/portal flows

## Full website completion status

The front-to-back website surface for this repository is implemented and deployable through Vercel with Supabase + Stripe integration points wired in code and deployment documentation.

## Documentation map (revvel-standards)

- `README.md` — product overview + quickstart + value framing
- `CHANGELOG.md` — release history
- `DEPLOYMENT_GUIDE.md` — production deployment instructions
- `GO_TO_MARKET.md` — market research and launch plan
- `BRAND_GUIDELINES.md` — brand system and messaging
- `SECURITY.md` — security policy and controls
- `scripts/test-baseline.js` + `scripts/build-baseline.js` — baseline validation scripts
- `scripts/revvel-standards-automation.js` — revvel-standards automation entrypoint used by `npm test` and `npm run revvel:standards`
