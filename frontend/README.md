# MyOnlineJet web application

MyOnlineJet is a Next.js 15 App Router application for the public company site, authenticated user workspace, form submissions, and administrator dashboard.

This README is the entry point for engineers. Detailed operational guidance lives in [`docs/`](./docs/).

## Start here

| Need | Read |
| --- | --- |
| Understand the codebase | [`docs/ARCHITECTURE.md`](./docs/ARCHITECTURE.md) |
| Set up a local environment | [`docs/DEVELOPMENT.md`](./docs/DEVELOPMENT.md) |
| Configure environment variables | [`docs/ENVIRONMENT.md`](./docs/ENVIRONMENT.md) |
| Deploy or roll back | [`docs/DEPLOYMENT.md`](./docs/DEPLOYMENT.md) |
| Work safely with auth, forms, and admin APIs | [`docs/API.md`](./docs/API.md) |
| Test and troubleshoot production | [`docs/OPERATIONS.md`](./docs/OPERATIONS.md) |
| Contribute changes | [`docs/CONTRIBUTING.md`](./docs/CONTRIBUTING.md) |
| Review the security checklist | [`docs/security-and-testing.md`](./docs/security-and-testing.md) |

## Technology

- Next.js 15 App Router and React 19
- TypeScript with strict checking
- Tailwind CSS 3 plus `app/globals.css`
- Auth.js / NextAuth v5 with JWT sessions
- MongoDB with Mongoose
- Nodemailer for notifications and confirmations
- PM2 for the Hostinger/VPS deployment path

## Repository structure

```text
frontend/
├── app/                         # App Router pages, layouts, metadata, and API routes
│   ├── api/                     # Server-side route handlers
│   ├── dashboard/               # Authenticated workspace and admin UI
│   ├── profile/                 # Authenticated profile page and form
│   ├── auth/                    # Sign-in and registration UI
│   ├── layout.tsx               # Root providers, scripts, metadata, and shell
│   ├── page.tsx                 # Homepage route
│   └── */page.tsx               # Public content routes
├── components/                  # Reusable layouts, page sections, forms, and UI
│   ├── layout/                  # Header, footer, and site shell
│   ├── page/                    # Shared content-page renderer
│   └── ui/                      # Small reusable UI primitives
├── lib/                         # Shared configuration and server utilities
│   ├── db.ts                    # Cached MongoDB connection
│   ├── email.ts                 # SMTP and email templates
│   ├── page-data.ts              # Shared page content
│   ├── rate-limit.ts             # MongoDB-backed rate limits
│   └── site.ts                  # Navigation, SEO, and site configuration
├── models/                      # Mongoose schemas and data types
├── public/                      # Static files served from the site root
├── scripts/                     # Manual seed, admin, and email utilities
├── docs/                        # Architecture, development, API, and operations docs
├── auth.ts                      # Auth.js configuration and callbacks
├── middleware.ts                # Protected-page redirects
├── next.config.mjs             # Next.js images and response headers
├── package.json                # Scripts and dependencies
├── .env.example                 # Environment variable template
└── deploy.sh                    # PM2/VPS deployment helper
```

Generated or local-only directories such as `.next/`, `node_modules/`, and `.env` are intentionally not shown; they must not be committed.

## Quick start

Requirements: Node.js 20+ and npm. MongoDB is required for authentication, protected forms, the dashboard, and registration.

```bash
cd frontend
npm ci
cp .env.example .env
# Edit .env with local values; see docs/ENVIRONMENT.md.
npm run dev
```

Open <http://localhost:3000>.

## Quality gates

Run these commands from `frontend/` before opening a pull request:

```bash
npm run lint
npm run build
npx tsc --noEmit
```

Run the production build locally with:

```bash
npm run build
npm run start
```

## Important conventions

- Keep secrets in `.env`; never commit `.env` or real credentials.
- Public `NEXT_PUBLIC_*` values are embedded at build time, so changing them requires a new build.
- Keep public page content in `lib/page-data.ts` when the route uses `ContentPage`; do not duplicate the template.
- Protected writes must enforce authorization in the route handler, even when middleware protects the page.
- Validate and length-limit all request data before database writes or email rendering.
- Use `next/image` for local or configured remote images.
- Treat `backend.md` and `tony.md` as historical planning notes unless a section is explicitly marked as current. The source of truth is the implementation and the current docs in `docs/`.

## Current route groups

- Public pages: `/`, company pages, infrastructure pages, resources, legal pages, and `/auth`.
- Protected pages: `/dashboard` and `/profile`.
- Legacy redirect: `/partners` redirects to `/partner-with-us`.
- API routes: `/api/auth/*`, `/api/user/*`, `/api/profile`, `/api/forms/*`, `/api/admin/*`, and `/api/reports/contribute`.

## Production status

The application is deployable through the PM2 path documented in [`docs/DEPLOYMENT.md`](./docs/DEPLOYMENT.md). Before a real release, complete the production smoke checklist in [`docs/OPERATIONS.md`](./docs/OPERATIONS.md), including MongoDB connectivity, SMTP delivery, OAuth callbacks if enabled, and internal-link checks.
