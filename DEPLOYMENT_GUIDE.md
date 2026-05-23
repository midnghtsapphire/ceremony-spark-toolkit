# Deployment Guide

## 1) Prerequisites

- Node.js 20+
- npm 10+
- Supabase project
- Stripe account and active products/prices
- Vercel project connected to this GitHub repository

## 2) Local verification before deployment

```bash
npm ci
npm test
npm run build
```

## 3) Supabase setup

1. Create or select a Supabase project.
2. Run database migrations from `supabase/migrations`.
3. Deploy edge functions:
   - `create-checkout`
   - `check-subscription`
   - `customer-portal`
4. Set function secrets in Supabase:
   - `SUPABASE_URL`
   - `SUPABASE_ANON_KEY`
   - `SUPABASE_SERVICE_ROLE_KEY`
   - `STRIPE_SECRET_KEY`

## 4) Vercel setup

1. Import `midnghtsapphire/ceremony-spark-toolkit` into Vercel.
2. Configure framework preset: **Vite**.
3. Add Vercel environment variables:
   - `VITE_SUPABASE_URL`
   - `VITE_SUPABASE_ANON_KEY`
4. Enable automatic deployments:
   - Production deploys on `main`
   - Preview deploys on pull requests

## 5) Post-deploy checks

- Homepage renders and pricing/cards load
- Auth modal supports sign-up and sign-in
- Stripe checkout redirects successfully from pricing
- Customer portal route returns a valid Stripe portal URL
- Admin route gating works for non-admin accounts

## 6) Rollback

- Use Vercel “Promote previous deployment” to rollback instantly.
- If schema issues were introduced, rollback via Supabase migration repair and redeploy functions.
