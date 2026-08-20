# Development workflow

## Requirements

- Node.js 20 or newer
- npm
- A MongoDB database for auth and protected features
- SMTP credentials are optional locally; without them, emails are logged instead of sent

## First setup

```bash
cd frontend
npm ci
cp .env.example .env
```

Set at minimum:

```dotenv
MONGODB_URI=mongodb://127.0.0.1:27017/myonlinejet
AUTH_SECRET=replace-with-a-long-random-value
AUTH_URL=http://localhost:3000
AUTH_CREDENTIALS_ENABLED=true
NEXT_PUBLIC_AUTH_CREDENTIALS_ENABLED=true
```

Generate a local secret with:

```bash
openssl rand -base64 33
```

Start development mode:

```bash
npm run dev
```

## Useful commands

```bash
npm run dev          # Next.js development server
npm run lint         # ESLint through Next.js
npm run build        # Production compilation and static generation
npm run start        # Serve the last production build
npx tsc --noEmit     # TypeScript check
node scripts/seed.mjs
node scripts/set-admin.mjs user@example.com
node scripts/test-email.mjs recipient@example.com
```

The seed script requires `ALLOW_SEED=true`, `MONGODB_URI`, `ADMIN_EMAIL`, and an admin password of at least 12 characters. Do not enable seeding in a normal production environment.

## Development checks

After changing a page, check:

1. The route renders at desktop and mobile widths.
2. Forms show client validation and server errors clearly.
3. Protected routes still redirect when signed out.
4. API handlers reject unauthenticated and unauthorized requests.
5. `npm run lint`, `npx tsc --noEmit`, and `npm run build` pass.

When changing environment variables used by client components (`NEXT_PUBLIC_*`), restart the dev server. A production deployment must be rebuilt.

## Local email behavior

`lib/email.ts` creates an SMTP transporter only when both `SMTP_USER` and `SMTP_PASS` are present. Otherwise it logs the recipient, subject, and text content. This is useful for local testing but is not proof that production delivery works; use `scripts/test-email.mjs` with real staging SMTP credentials.

## Common local problems

### MongoDB connection errors

Check `MONGODB_URI`, network access, and Atlas IP allowlisting. A page can render while auth/session requests fail because those requests need MongoDB.

### Auth callback errors

Check `AUTH_SECRET`, `AUTH_URL`, the actual browser origin, and OAuth callback URLs. For local credentials-only testing, disable unused OAuth flags and leave their provider credentials empty.

### `next/font` build failures

The build downloads configured Google Fonts during compilation. If the build environment has no DNS/network access, the build can fail before TypeScript compilation. Use a network-enabled build environment or self-host the fonts before making deployment depend on an offline build.
