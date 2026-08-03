# Security and Testing

## Authentication configuration

Credential sign-in is disabled unless `AUTH_CREDENTIALS_ENABLED=true` is set. Set
`NEXT_PUBLIC_AUTH_CREDENTIALS_ENABLED=true` as well to show the email/password UI.
Both values are included in `.env.example`.

Roles are refreshed from MongoDB whenever Auth.js reads a JWT. An administrator who
is demoted therefore loses API and dashboard administrator access on their next request.

## Form abuse protection

Form submissions require an authenticated account and are limited to 20 submissions
per account per minute. The counter is stored in MongoDB and uses a TTL index, so it
is shared by all application instances and expires automatically.

## Seed data

`node scripts/seed.mjs` requires all of the following environment variables:

- `ALLOW_SEED=true`
- `MONGODB_URI`
- `ADMIN_EMAIL`
- `ADMIN_PASSWORD` (at least 12 characters)

Never use sample or shared credentials in a deployed environment.

## Verification checklist

From `frontend/`:

```bash
npm run lint
npm run build
npm run start
```

Check that public pages load, protected dashboard/profile URLs redirect to `/auth`,
invalid registration addresses return HTTP 400, and `/ecosystem-integration` links
to `/company-profile`.
