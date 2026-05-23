# Security Policy

## Supported scope

This repository includes a Vite frontend and Supabase Edge Functions for checkout/subscription operations.

## Reporting a vulnerability

Please open a private security advisory in GitHub Security Advisories for this repository. Include:

- Affected file/flow
- Reproduction steps
- Potential impact
- Suggested remediation (if available)

## Security controls baseline

- Supabase Auth for identity
- Route-level admin access checks
- Stripe hosted checkout and billing portal for payment handling
- Environment-variable based secret management
- No secrets committed to source control

## Operational recommendations

- Rotate Stripe and Supabase keys on schedule
- Restrict service-role key usage to server-side/edge-function contexts only
- Enable audit logging for auth and billing events
- Re-run `npm test` and `npm run build` before every deployment
