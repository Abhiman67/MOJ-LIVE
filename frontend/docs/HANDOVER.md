# MyOnlineJet Project Handover

## Purpose

This document is the handover index for the MyOnlineJet website and supporting application work. It explains what is included, where the project is hosted, how to run and deploy it, which services require access transfer, how to verify the system, and what remains for future development.

## Project summary

MyOnlineJet is a Next.js full-stack web platform for an advanced air mobility and smart vertiport company. The project includes a public marketing website, authenticated users, profiles, business enquiry forms, MongoDB persistence, email notifications, rate limiting, and an administrator dashboard.

The repository is organized as follows:

- `app/` — routes, pages, API handlers, authentication, dashboard, and profile pages.
- `components/` — reusable layout, content, form, and UI components.
- `lib/` — database, email, rate-limit, site configuration, and page data utilities.
- `models/` — Mongoose models for users, profiles, submissions, notifications, and rate limits.
- `public/` — images, robots.txt, sitemap assets, security.txt, and other public files.
- `scripts/` — seed, admin, and email test utilities.
- `docs/` — technical and operational documentation.

## Important URLs

- Test website: `https://test.myonlinejet.com/`
- Current company website: `https://myonlinejet.com/`
- Repository: `https://github.com/Abhiman67/MOJ-LIVE`
- Local development: `http://localhost:3000`

Confirm ownership and deployment details with the company before treating these URLs as production records.

## Technology stack

- Next.js 15 App Router
- React 19
- TypeScript
- Tailwind CSS and custom CSS
- Node.js and Next.js route handlers
- MongoDB with Mongoose
- Auth.js / NextAuth
- bcryptjs
- Nodemailer SMTP notifications
- PM2 and reverse proxy deployment support
- Git and npm

## Run locally

```bash
cd frontend
npm ci
cp .env.example .env
# Fill local values in .env using a local database and test credentials.
npm run dev
```

For a production-like verification:

```bash
npm run lint
npx tsc --noEmit
npm run build
npm run start
```

Never use production credentials for local development.

## Deployment

The documented deployment model is a Node.js server using PM2 and a reverse proxy. Read [`DEPLOYMENT.md`](./DEPLOYMENT.md) before deploying. The main commands are:

```bash
npm ci
npm run build
pm2 reload ecosystem.config.js --update-env
pm2 save
```

The environment must be configured before `npm run build`, because `NEXT_PUBLIC_*` values are compiled into the browser bundle.

## Handover sequence

1. Create or confirm the company-owned Git repository and deployment account.
2. Transfer access using the company password manager or secret manager.
3. Configure the receiving person's local environment from `.env.example`.
4. Verify MongoDB, authentication, SMTP, and deployment access.
5. Perform the acceptance checklist in [`HANDOVER-TESTING.md`](./HANDOVER-TESTING.md).
6. Demonstrate the dashboard, admin actions, deployment, rollback, and backup process.
7. Transfer or remove personal account access.
8. Complete [`HANDOVER-SIGNOFF.md`](./HANDOVER-SIGNOFF.md).

## Security rules

- Do not commit `.env` or any real secret to Git.
- Do not put secrets in `NEXT_PUBLIC_*` variables.
- Transfer secrets through an approved password manager or secret manager.
- Use least-privilege database and cloud accounts.
- Rotate shared secrets after ownership transfer where appropriate.
- Disable seed mode after any deliberate seed operation.
- Remove personal access after the receiving owner confirms access.

## Remaining work

- Verify every public form against the deployed environment.
- Confirm SMTP delivery and notification recipients.
- Confirm OAuth callback URLs for every enabled provider.
- Confirm MongoDB backups, restore procedure, and Atlas IP allowlisting.
- Review upload configuration before enabling file uploads.
- Add or expand automated end-to-end tests.
- Replace any remaining placeholder content or assets.
- Review build and lint warnings.
- Confirm monitoring, logs, billing ownership, and incident contacts.
- Confirm whether the current MongoDB implementation or the longer-term backend plan in `backend.md` is the accepted direction.

## Related documents

- [`DEVELOPMENT.md`](./DEVELOPMENT.md) — local setup and development workflow.
- [`ENVIRONMENT.md`](./ENVIRONMENT.md) — environment variables and secret rules.
- [`DEPLOYMENT.md`](./DEPLOYMENT.md) — PM2, reverse proxy, release, and rollback.
- [`API.md`](./API.md) — API route details.
- [`ARCHITECTURE.md`](./ARCHITECTURE.md) — application architecture.
- [`OPERATIONS.md`](./OPERATIONS.md) — operational troubleshooting.
- [`security-and-testing.md`](./security-and-testing.md) — security and testing notes.
- [`CREDENTIALS-INVENTORY.md`](./CREDENTIALS-INVENTORY.md) — access transfer checklist.
- [`HANDOVER-TESTING.md`](./HANDOVER-TESTING.md) — acceptance tests.
- [`KNOWN-ISSUES.md`](./KNOWN-ISSUES.md) — known limitations and follow-up work.
- [`HANDOVER-SIGNOFF.md`](./HANDOVER-SIGNOFF.md) — transfer confirmation.
