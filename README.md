# Mandla Market — website starter

A mobile-first English/Hindi-ready local classified marketplace starter for Mandla, Madhya Pradesh.

## Included
- Responsive premium navy + gold homepage
- Category browsing and sample listing cards
- Seller application form (pending approval)
- Safety information and policy placeholders
- Admin route placeholder
- Supabase starter schema

## Requirements
- Node.js 18.17+ (Node 20 LTS recommended)
- npm
- Supabase project (optional for visual demo; required for live applications/listings)

## Run locally
```bash
npm install
cp .env.example .env.local
npm run dev
```
Open http://localhost:3000

The homepage works as a visual starter without Supabase credentials. Seller applications intentionally show a setup message until Supabase is configured.

## Connect Supabase
1. Create a Supabase project.
2. Copy Project URL and anon/public key into `.env.local`.
3. In Supabase SQL Editor, review and run `supabase/schema.sql`.
4. Configure Supabase Auth (phone OTP provider and SMS provider) before collecting real users.
5. Add secure server-side admin authorization and Row Level Security policies before enabling seller approval or listing management.
6. Configure a private admin workflow. Never expose the service-role key to the browser.
7. Create a storage bucket and add strict upload policies (file size/type and authenticated seller ownership).

## Before production
This is a functional UI starter, not a complete production marketplace. The admin approval dashboard, live listing CRUD, OTP sign-in flow, image upload, payment processing, and transactional commission system still need implementation and testing. The legal policy pages are placeholders and must be reviewed before launch.

## Domain
After buying `mandlamarket.in`, add it in your hosting provider's domain settings and configure the DNS records shown there. Domain availability and price must be checked with a registrar before purchase.
