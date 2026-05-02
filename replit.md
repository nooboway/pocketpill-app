# Workspace

## Overview

pnpm workspace monorepo using TypeScript. Each package manages its own dependencies.

## Stack

- **Monorepo tool**: pnpm workspaces
- **Node.js version**: 24
- **Package manager**: pnpm
- **TypeScript version**: 5.9
- **API framework**: Express 5
- **Database**: PostgreSQL + Drizzle ORM
- **Validation**: Zod (`zod/v4`), `drizzle-zod`
- **API codegen**: Orval (from OpenAPI spec)
- **Build**: esbuild (CJS bundle)

## Key Commands

- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages
- `pnpm --filter @workspace/api-spec run codegen` — regenerate API hooks and Zod schemas from OpenAPI spec
- `pnpm --filter @workspace/db run push` — push DB schema changes (dev only)
- `pnpm --filter @workspace/api-server run dev` — run API server locally

See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details.

## Artifacts

### Pocketpill (`artifacts/pocketpill`)
- **Kind**: React + Vite SPA
- **Preview path**: `/`
- **Pages**: `/` (landing), `/book` (multi-step booking), `/admin` (admin panel), `/newsletter` (email capture)

### API Server (`artifacts/api-server`)
- **Kind**: Express 5 API
- **Preview path**: `/api`
- **Routes**: `/api/healthz`, `/api/settings`, `/api/bookings`, `/api/newsletter/subscribe`, `/api/newsletter/subscribers`
- **Security**: Helmet, express-rate-limit, Bearer token admin auth (`ADMIN_SECRET` env var, defaults to `pocketpill2025`)

## Database

Tables (via Drizzle ORM, PostgreSQL):
- `settings` — singleton JSONB row (id=1), stores all site settings
- `newsletter_subscribers` — id, email (unique), name, created_at
- `bookings` — id, reference (unique), plan details, client details, appointment info, status, created_at

## Architecture Notes

- **Settings**: GET `/api/settings` is public (no auth). PUT `/api/settings` requires `Authorization: Bearer <ADMIN_SECRET>`.
- **Admin panel** (`/admin`): Password `pocketpill2025` (hardcoded client-side). On login, password stored in `sessionStorage` and used as Bearer token for admin API calls. Has three tabs: Settings, Bookings, Subscribers.
- **Booking flow** (`/book`): 4 steps — Plan → Details → Payment (PayPal) → Schedule → Confirmed. Booking saved to DB on final step confirmation.
- **Newsletter**: Both home page inline form and `/newsletter` page POST to `/api/newsletter/subscribe`.
- **Error handling**: React ErrorBoundary wraps the entire app. All API routes return structured JSON errors with appropriate HTTP status codes.
- **Rate limiting**: 30 req/min on `/api/newsletter` and `/api/bookings` (public endpoints).
- **i18n**: 5 languages on landing page (EN/PCM/YO/IG/FR) via `LanguageProvider`.

## Email Notifications (Resend)

Triggered automatically after each successful API response (fire-and-forget, non-blocking):

| Event | Recipients | Subject |
|---|---|---|
| New booking | Client + Admin | `Booking confirmed · <ref>` / `New booking · <ref>` |
| Newsletter subscribe | Subscriber + Admin | `Welcome to Pocketpill` / `New subscriber · <email>` |

- **Provider**: Resend (`resend` npm package)
- **Secret**: `RESEND_API_KEY` (Replit secret)
- **From address**: `Pocketpill <notifications@pocketpill.health>` — requires domain verification in Resend dashboard
- **Admin address**: `ADMIN_EMAIL` env var, defaults to `hello@pocketpill.health`
- **Email service**: `artifacts/api-server/src/lib/email.ts` — dark-mode HTML templates, 4 functions
- **Graceful degradation**: If `RESEND_API_KEY` is missing, emails are skipped silently (logged as WARN); API responses are never blocked
- **Trust proxy**: `app.set("trust proxy", 1)` set so rate-limiter correctly reads real IPs behind Replit's proxy

## Production Audit Completed

- Security: Helmet headers, CORS, rate limiting, admin auth, input size limits (64kb), Zod validation
- Accessibility: ARIA labels, roles, form `id`/`htmlFor`, `aria-invalid`, `aria-live`, `role="alert"`
- SEO: OG/Twitter meta, canonical URL, JSON-LD structured data (MedicalBusiness schema)
- Error handling: React ErrorBoundary, graceful API degradation on booking save
- Performance: Code-split bundles (vendor-react, vendor-motion, vendor-ui), preloaded hero image
- No `console.log` in server code (Pino logger throughout)
