# Security and testing

This page documents the current implementation. Historical audit notes are kept in [`CHANGES.md`](../CHANGES.md) and should not be treated as a live test report unless the commands are run again.

## Authentication configuration

Credentials sign-in is available only when `AUTH_CREDENTIALS_ENABLED=true`. Set `NEXT_PUBLIC_AUTH_CREDENTIALS_ENABLED=true` as well to display the email/password form in the browser. OAuth providers are registered only when both provider credentials are configured; their public buttons also require the corresponding `NEXT_PUBLIC_AUTH_*_ENABLED=true` flag.

Auth.js uses JWT sessions. The JWT callback refreshes user identity and role fields from MongoDB with a short in-memory cache. This means role changes normally become effective within the cache window; it does not replace server-side authorization checks.

## Authorization boundaries

- Middleware protects page navigation for `/dashboard`, `/profile`, and `/auth`.
- API route handlers independently enforce user or admin permissions.
- Admin role changes cannot demote the current admin or the last remaining admin.
- Never trust client-side role state, hidden buttons, or a page redirect as authorization.

## Input and abuse protection

- Form types are allowlisted.
- Form payloads have field-count, key-length, value-length, and total-size limits.
- Profile fields and admin notes have explicit maximum lengths.
- HTML email rendering uses `escapeHtml()` for user-controlled values.
- Form submissions are limited to 20 per account per minute.
- Registration and public report contributions use MongoDB-backed IP rate limits.
- The `RateLimit` collection uses a TTL index and a compound unique key/window index, allowing counters to be shared across application instances.
- CSV exports must protect against spreadsheet formula injection.

## Seed safeguards

`node scripts/seed.mjs` requires all of the following:

- `ALLOW_SEED=true`
- `MONGODB_URI`
- `ADMIN_EMAIL`
- `ADMIN_PASSWORD` with at least 12 characters

Never use sample or shared credentials in a deployed environment. Disable `ALLOW_SEED` after a one-time initialization.

## Local verification

From `frontend/`:

```bash
npm ci
npm run lint
npx tsc --noEmit
npm run build
npm run start
```

Then verify:

1. Public routes return 200.
2. `/dashboard` and `/profile` redirect to `/auth` while signed out.
3. `/partners` redirects to `/partner-with-us`.
4. `/api/profile` and `/api/user/notifications` return 401 while signed out.
5. Admin APIs return 403 while signed out.
6. Invalid registration data returns 400 and duplicate email returns 409.
7. Invalid form types, malformed payloads, oversized values, and rate limits behave as documented.
8. `/ecosystem-integration` resolves and all internal links point to existing canonical routes.
9. SMTP delivery works with a controlled test recipient when production email is enabled.

## Current hardening gaps

- No Content Security Policy header is currently configured. Adding one requires an inventory of inline scripts and third-party sources in `app/layout.tsx`.
- Google Fonts are fetched during build through `next/font`; offline build environments need network access or self-hosted fonts.
- The application has no dedicated health endpoint; operational checks are documented in [`OPERATIONS.md`](./OPERATIONS.md).
