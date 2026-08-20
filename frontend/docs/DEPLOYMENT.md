# Deployment runbook

This project currently supports a Node.js server behind PM2 on a VPS/Hostinger-style deployment. The deployment script is [`deploy.sh`](../deploy.sh), and the PM2 process definition is [`ecosystem.config.js`](../ecosystem.config.js).

## Production prerequisites

- Node.js 20+ and npm installed on the server
- Repository checkout with a clean, known branch
- MongoDB Atlas database and server IP allowlisted
- Production `.env` present outside version control
- SMTP provider credentials and verified sender address
- DNS and TLS configured for the public domain
- PM2 installed and available to the deploy user
- Reverse proxy forwarding the public HTTPS origin to port 3000

## First deployment

```bash
cd /path/to/MOJ-LIVE/frontend
npm ci
npm run build
pm2 start ecosystem.config.js
pm2 save
```

Set the environment before the build. `NEXT_PUBLIC_*` flags are compiled into the client bundle.

If an initial admin is required, run the seed only as a deliberate one-time operation:

```bash
ALLOW_SEED=true node scripts/seed.mjs
```

Immediately remove or disable `ALLOW_SEED` afterward.

## Routine deployment

The existing script performs pull, dependency install, build, and PM2 reload:

```bash
cd /path/to/MOJ-LIVE/frontend
./deploy.sh
```

Before using it in a sensitive production environment, verify the checked-out commit and review the diff. The script falls back from `git pull origin main` to `git pull`, so branch/upstream configuration must be explicit on the server.

Manual, more controlled release:

```bash
git fetch origin
git checkout <release-commit-or-tag>
npm ci
npm run lint
npx tsc --noEmit
npm run build
pm2 reload ecosystem.config.js --update-env
pm2 save
```

## Reverse proxy notes

The application listens on port 3000. The proxy should terminate TLS, forward the original host/protocol headers, and proxy WebSocket/upgrade headers if the hosting setup requires them. Auth callback URLs must use the public HTTPS origin, not the internal port.

## Release verification

After reload:

```bash
pm2 status
pm2 logs moj-frontend --lines 100
```

Check the public home page, `/auth`, `/sitemap.xml`, `/robots.txt`, `/dashboard` redirect, and one API authorization response. Then verify MongoDB-backed sign-in and an email delivery path with a controlled test account.

## Rollback

1. Identify the previous known-good commit or release artifact.
2. Check it out without changing `.env`.
3. Run `npm ci` and `npm run build`.
4. Reload PM2 with `pm2 reload ecosystem.config.js --update-env`.
5. Verify the same smoke checks and record the reason for rollback.

Do not delete the previous `.next` or release directory until the new process is healthy and rollback is no longer needed.

## Database and email operational notes

- MongoDB Atlas must allow the production server IP and use a least-privilege application user.
- `mongoose.connect` uses `bufferCommands: false`; database outages surface quickly in auth/API requests.
- Without SMTP credentials, email calls are simulated/logged. Production acceptance requires a real SMTP delivery test.
- Do not use production seed credentials for QA or local development.
