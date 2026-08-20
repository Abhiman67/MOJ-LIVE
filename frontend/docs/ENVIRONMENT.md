# Environment variables

Create `frontend/.env` locally or configure the same variables in the deployment provider. `.env.example` is a template only and contains placeholders.

## Required in production

| Variable | Purpose |
| --- | --- |
| `MONGODB_URI` | MongoDB connection string; restrict the database user and Atlas network access |
| `AUTH_SECRET` | Auth.js signing/encryption secret; generate a unique random value |
| `AUTH_URL` | Canonical application URL used for auth callbacks |
| `AUTH_CREDENTIALS_ENABLED` | Server-side switch for email/password auth |
| `NEXT_PUBLIC_AUTH_CREDENTIALS_ENABLED` | Shows the credentials form in the browser; keep aligned with the server switch |
| `SMTP_HOST` | SMTP server hostname |
| `SMTP_PORT` | SMTP server port, usually 465 or 587 |
| `SMTP_USER` | SMTP username |
| `SMTP_PASS` | SMTP password or provider app password |
| `FROM_EMAIL` | Sender address |
| `NOTIFICATION_EMAIL` | Internal recipient for submission notifications |

## Optional OAuth variables

Each provider is enabled only when both values are present. The public button also requires its matching `NEXT_PUBLIC_AUTH_*_ENABLED=true` flag.

| Provider | Server variables | Public flag |
| --- | --- | --- |
| Google | `AUTH_GOOGLE_ID`, `AUTH_GOOGLE_SECRET` | `NEXT_PUBLIC_AUTH_GOOGLE_ENABLED` |
| Apple | `AUTH_APPLE_ID`, `AUTH_APPLE_SECRET` | `NEXT_PUBLIC_AUTH_APPLE_ENABLED` |
| LinkedIn | `AUTH_LINKEDIN_ID`, `AUTH_LINKEDIN_SECRET` | `NEXT_PUBLIC_AUTH_LINKEDIN_ENABLED` |

Configure each provider callback against the deployed origin and `/api/auth/callback/<provider>`.

## Operational variables

| Variable | Purpose |
| --- | --- |
| `ALLOW_SEED` | Must be exactly `true` for `scripts/seed.mjs`; keep false/unset normally |
| `ADMIN_EMAIL` | Initial seed admin email |
| `ADMIN_PASSWORD` | Initial seed password; minimum 12 characters |
| `JWT_SECRET`, `JWT_EXPIRES_IN` | Legacy variables retained for compatibility; current Auth.js uses `AUTH_SECRET` |
| `UPLOAD_DIR`, `MAX_FILE_SIZE` | Reserved upload configuration; verify implementation before relying on them |

## Secret handling rules

- Never commit `.env`, production logs containing secrets, database URIs, OAuth secrets, or SMTP passwords.
- Use a secret manager or the hosting provider's encrypted environment settings.
- Rotate `AUTH_SECRET` only with a planned session invalidation; it invalidates existing JWT sessions.
- Do not use sample credentials from `.env.example` in any shared environment.
- Because `NEXT_PUBLIC_*` values are public, never put secrets in them.
