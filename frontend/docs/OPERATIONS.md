# Operations and troubleshooting

## Health checks

The app does not currently expose a dedicated `/health` endpoint. Use these checks:

```bash
curl -I https://myonlinejet.com/
curl -i https://myonlinejet.com/auth
curl -i https://myonlinejet.com/dashboard
curl -i https://myonlinejet.com/api/profile
```

Expected unauthenticated results:

- Public pages: `200`
- `/dashboard` and `/profile`: redirect to `/auth`
- `/api/profile` and user APIs: `401`
- Admin APIs: `403`

## Logs

```bash
pm2 logs moj-frontend
pm2 monit
```

Useful log markers include `[EMAIL SENT]`, `[EMAIL ERROR]`, `[EMAIL DEV LOG]`, and `[AUDIT]`. Never paste logs containing database URIs, tokens, passwords, or personal submission data into public issue trackers.

## Incident triage

### Site returns 502/503

1. Check `pm2 status` and `pm2 logs`.
2. Confirm port 3000 is listening and the reverse proxy target is correct.
3. Restart only after capturing the first error and current release commit.
4. If the new release caused it, roll back to the last known-good commit.

### Public pages work but sign-in fails

Check `AUTH_SECRET`, `AUTH_URL`, MongoDB connectivity, Atlas IP allowlisting, and the browser's callback origin. If the error is a `JWTSessionError`, inspect the underlying MongoDB connection error first.

### Forms return 500

Check MongoDB connectivity first, then SMTP logs. A notification email failure should not be treated as proof that persistence failed; verify the submission in the admin dashboard/database before retrying to avoid duplicates.

### Email is not delivered

Run the email script with a controlled recipient:

```bash
node scripts/test-email.mjs test-recipient@example.com
```

Confirm SMTP host, port/security mode, credentials/app password, sender policy, and spam/quarantine handling.

### Users cannot access the dashboard after role changes

Roles are refreshed from MongoDB with a short cache. Wait for the cache window, sign out/in if needed, and verify the user's `role` in the database. Never manually edit JWTs.

## Release checklist

- [ ] Release commit reviewed and recorded
- [ ] `.env` is present on the server and not in Git
- [ ] MongoDB IP allowlist and database user are valid
- [ ] `npm ci`, lint, typecheck, and build pass
- [ ] PM2 process is healthy after reload
- [ ] Public route and static asset smoke checks pass
- [ ] Protected redirect and API authorization checks pass
- [ ] SMTP test succeeds
- [ ] OAuth callbacks tested when a provider is enabled
- [ ] Monitoring/log review completed
- [ ] Rollback commit identified
