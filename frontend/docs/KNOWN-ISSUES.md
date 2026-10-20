# Known Issues and Follow-Up Work

This list should be reviewed and updated during handover.

- [ ] Verify all public-facing forms in the deployed environment, including success and error states.
- [ ] Confirm all production OAuth callback URLs and enabled-provider flags.
- [ ] Confirm SMTP credentials and real email delivery; local fallback behavior must not be mistaken for production delivery.
- [ ] Confirm MongoDB Atlas IP allowlisting, least-privilege users, backups, and restore testing.
- [ ] Review upload-related environment variables and implementation before accepting files in production.
- [ ] Add automated API and end-to-end coverage for authentication, forms, dashboard, and admin actions.
- [ ] Review any remaining ESLint, image optimization, font loading, and Edge Runtime warnings.
- [ ] Replace placeholder address or business content before formal production release.
- [ ] Confirm ownership of domain, hosting, SMTP, analytics, AdSense, Crisp, and news services.
- [ ] Decide whether future backend expansion follows the current MongoDB implementation or the longer-term plan in `backend.md`.
