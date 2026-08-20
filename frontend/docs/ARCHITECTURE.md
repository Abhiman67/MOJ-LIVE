# Architecture

This document explains how the current application is assembled and where a future engineer should make changes. It describes the deployed implementation, not the older proposals in `backend.md` or `tony.md`.

## 1. System overview

MyOnlineJet is a single Next.js application. The public website, authenticated user workspace, admin dashboard, API handlers, MongoDB access, authentication, and email notifications are deployed from the same `frontend/` package.

```text
Public browser / authenticated browser
                │
                ▼
        Next.js App Router
        ┌───────────────────────────────┐
        │ app/layout.tsx                │  global metadata, providers, scripts
        │ app/**/page.tsx               │  public and protected pages
        │ app/api/**/route.ts           │  server-side API handlers
        │ middleware.ts                 │  page navigation redirects
        └───────────────┬───────────────┘
                        │
          ┌─────────────┼─────────────┐
          ▼             ▼             ▼
       Auth.js       Mongoose       Nodemailer
     (`auth.ts`)   (`models/`)     (`lib/email.ts`)
          │             │             │
          └─────────────┼─────────────┘
                        ▼
                    MongoDB
```

The production process is a Node.js `next start` process managed by PM2. A reverse proxy terminates HTTPS and forwards requests to port 3000.

## 2. Runtime boundaries

### Browser/client code

Client components use React state, browser events, `useSession`, and `fetch`. They may read public configuration such as `NEXT_PUBLIC_AUTH_CREDENTIALS_ENABLED`, but they must not import:

- `mongoose` or model files;
- `connectDB()`;
- SMTP credentials or `lib/email.ts`;
- `AUTH_SECRET`, OAuth client secrets, or other private environment variables.

Client code is responsible for user experience only. It can hide a button or disable a form, but it cannot authorize an operation.

### Server code

Server components and route handlers can access sessions, MongoDB, models, secrets, and email services. Every API handler is an independent security boundary. A page being protected by middleware does not make its API endpoint safe.

### Middleware

`middleware.ts` performs lightweight navigation redirects:

- signed-out `/dashboard` → `/auth?callbackUrl=/dashboard`;
- signed-out `/profile` → `/auth?callbackUrl=/profile`;
- signed-in `/auth` → `/dashboard`.

Middleware does not replace `auth()` checks inside route handlers or server components.

## 3. Directory map

| Path | Source of truth for | Change it when |
| --- | --- | --- |
| `app/layout.tsx` | Root HTML, fonts, providers, analytics, Crisp, AdSense, global metadata | A global script, provider, font, or metadata policy changes |
| `app/**/page.tsx` | Route entry points and page-specific server rendering | A route's structure or page behavior changes |
| `app/api/**/route.ts` | API methods, validation, authorization, and response contracts | An API behavior or backend workflow changes |
| `components/layout/` | Shared header, footer, and shell | Navigation or site-wide layout changes |
| `components/page/ContentPage.tsx` | Shared content-page presentation | A common content-page layout changes |
| `lib/page-data.ts` | Text and structured content for shared pages | Shared page copy/sections/CTAs change |
| `lib/site.ts` | Site identity, nav arrays, footer groups, structured data | Global navigation, SEO identity, or analytics IDs change |
| `lib/db.ts` | Mongoose connection reuse and failure behavior | Database connection strategy changes |
| `lib/rate-limit.ts` | Distributed rate-limit behavior | Quotas, keys, or storage strategy changes |
| `lib/email.ts` | SMTP transport, escaping, email labels, branded templates | Email recipients, templates, or delivery behavior changes |
| `models/` | MongoDB schema, indexes, roles, and enums | Stored data shape or indexes change |
| `public/` | Static files served without application code | Favicon, robots, ads, human-readable policy files, or local images change |
| `scripts/` | Manual operational tasks | Seed, admin maintenance, or SMTP diagnostics change |
| `next.config.mjs` | Image remote allowlist and response headers | Image origins or security headers change |

## 4. Page and rendering architecture

### Global shell

`app/layout.tsx` wraps the entire application with:

1. Next font variables for Inter and Space Grotesk.
2. `SessionProvider` for client session state.
3. `ErrorBoundary` for client-rendering failures.
4. `SiteShell`, which selects the shared header/footer behavior.
5. Global structured data, analytics, Crisp, and AdSense scripts.

Because these scripts load globally, a change to `layout.tsx` can affect every route and every browser console. Treat it as a high-impact file.

### Shared content pages

Many informational routes use `components/page/ContentPage.tsx` with a data entry in `lib/page-data.ts`. This keeps typography, section spacing, CTA layout, and metadata consistent. Add content there when the page fits the shared structure; do not create a bespoke page just to change copy.

### Bespoke pages

The homepage, auth, contact, services, company profile, reports, FAQ, and form-heavy pages contain custom presentation or interaction logic. Before editing one, identify:

- whether it is a server or client component;
- whether it has its own navigation or modal state;
- which API endpoint its forms call;
- whether it uses a shared component or duplicates a pattern.

### Static versus dynamic routes

Informational pages and the sitemap are statically generated where possible. Dashboard/profile pages and API handlers are dynamic because they depend on sessions and database state. Do not force a database-dependent page into static generation.

## 5. Route taxonomy

### Public page routes

Public pages include `/`, `/about-us`, `/advanced-air-mobility`, `/advisory`, `/careers`, `/company-profile`, `/contact`, `/early-access`, `/ecosystem-integration`, `/evtol-infrastructure`, `/faq`, `/founder`, `/investors`, `/legal-disclaimer`, `/partner-with-us`, `/privacy-policy`, `/reports`, `/services`, `/subscribe`, `/technology`, `/terms-conditions`, `/vertiports`, `/vision-mission`, and `/whitepapers`.

### Protected page routes

- `/dashboard`: authenticated user area with admin-only management capabilities.
- `/profile`: authenticated profile view and edit flow.
- `/auth`: sign-in/register entry point; signed-in users are redirected away.

### Redirect and metadata routes

- `/partners` is a legacy alias redirecting to `/partner-with-us`.
- `/sitemap.xml` is generated by `app/sitemap.ts`.
- `/robots.txt`, `/ads.txt`, `/humans.txt`, and `/favicon.svg` are static files in `public/`.

### API routes

| Route family | Responsibility |
| --- | --- |
| `/api/auth/[...nextauth]` | Auth.js provider, callback, session, and sign-out handlers |
| `/api/user/register` | Credentials registration with validation and IP rate limiting |
| `/api/profile` | Authenticated profile read/update |
| `/api/user/notifications` | Authenticated notification read/update |
| `/api/forms/[type]` | Authenticated form create; admin form listing |
| `/api/admin/users*` | Admin user search and role management |
| `/api/admin/submissions` | Admin submission listing and status/notes updates |
| `/api/reports/contribute` | Public, validated, rate-limited report contribution email |

## 6. Authentication flow

### Credentials sign-in

```text
/auth
  │
  ├── signIn('credentials')
  │       │
  │       ├── auth.ts authorize()
  │       │       ├── connectDB()
  │       │       ├── find credentials user
  │       │       └── bcrypt.compare()
  │       │
  │       └── Auth.js issues JWT session cookie
  │
  └── router.push(safeCallback(callbackUrl))
```

The auth page normalizes callback navigation through `safeCallback()`. Only same-origin paths beginning with `/` are allowed; external URLs fall back to `/dashboard`.

### OAuth sign-in

An OAuth provider exists only if both its server credentials are configured. The UI button also requires the corresponding public enable flag. Provider callback URLs must use the public deployment origin and `/api/auth/callback/<provider>`.

### Session and role refresh

The JWT callback refreshes `role`, `id`, `name`, `email`, and `image` from MongoDB. A short in-memory cache reduces database reads while allowing profile and role changes to become effective quickly. Admin API authorization must still query/use the current session role; never trust a client-provided role.

## 7. Data model and relationships

```text
User ──────── 1:1 ──────── Profile
  │
  ├────────── 1:N ──────── FormSubmission
  │                              │
  └────────── 1:N ──────── Notification ─── optional submission reference

RateLimit is independent and keyed by account/IP + window.
```

### `User`

Stores identity and authorization: `name`, normalized unique `email`, `role`, `authProvider`, optional `hashedPassword`, profile-completion state, and timestamps. Roles currently include `admin`, `general`, `partner`, `investor`, and `career`.

### `Profile`

Stores optional extended fields such as phone, organization, role, LinkedIn, portfolio, location, and bio. `userId` is unique, so updates should use an upsert or update-by-user pattern rather than creating arbitrary records.

### `FormSubmission`

Stores `userId`, allowlisted `formType`, flexible validated `data`, workflow `status`, admin notes, and timestamps. The flexible data object supports different form shapes, but it increases the importance of route-level validation and length limits.

### `Notification`

Stores user-visible status messages. Status updates may create notifications; notification failure should not silently undo a successful submission update.

### `RateLimit`

Stores a counter, key, window, and `expiresAt`. The TTL index removes expired counters. Because this is MongoDB-backed, limits are shared between PM2 instances, unlike an in-memory-only limiter.

## 8. Request lifecycles

### Protected form submission

1. Client component sends JSON to `/api/forms/[type]`.
2. Handler calls `auth()` and rejects missing sessions with `401`.
3. Handler validates the form type and JSON shape.
4. Handler enforces field count, key/value lengths, and total payload size.
5. Handler applies the per-account limit of 20 submissions per minute.
6. Handler connects through `connectDB()` and creates `FormSubmission`.
7. Confirmation and admin notification emails are sent or logged.
8. Handler returns `201` with the created ID.

Keep this order when adding a form: authenticate, validate, rate-limit, persist, notify.

### Admin status update

1. Dashboard sends a `PATCH` to `/api/admin/submissions`.
2. Handler verifies an authenticated admin session.
3. Submission ID, target status, and note length are validated.
4. Submission is updated in MongoDB.
5. A notification is attempted for the owning user.
6. The updated record is returned.

The notification is a follow-up side effect; it must not make a successful database update appear to have failed.

### Registration

1. Auth page sends name, email, and password to `/api/user/register`.
2. Handler validates and normalizes name/email/password before consuming quota.
3. IP rate limit is checked.
4. Duplicate email is checked and also protected by the database unique index.
5. Password is hashed with bcrypt and the user is created with role `general`.
6. The client signs in through Auth.js.

## 9. Failure behavior and dependency assumptions

### MongoDB

`lib/db.ts` caches the Mongoose connection across warm Node.js instances and uses `bufferCommands: false`. This makes database outages fail quickly instead of silently queueing writes. A page can still render while session/API operations fail, so database health must be checked separately during incidents.

### Email

`lib/email.ts` creates a transporter only when SMTP credentials are available. Without credentials it logs simulated messages. Email is a notification side effect; inspect persisted data before retrying a request after an email error.

### Third-party scripts

Analytics, Crisp, AdSense, Font Awesome, remote images, and Google Fonts are external dependencies. They can create browser warnings or build/runtime failures without breaking the core page. Keep third-party changes isolated and verify console output in a production browser pass.

## 10. How to add a new page

1. Decide whether the page fits `ContentPage`.
2. Add a route under `app/<slug>/page.tsx`.
3. Add content to `lib/page-data.ts` if using the shared template.
4. Add the canonical URL to navigation/footer only through the appropriate arrays in `lib/site.ts`.
5. Confirm the route appears in `app/sitemap.ts` when appropriate.
6. Use existing layout tokens and components before adding new CSS.
7. Check desktop, 390px mobile width, keyboard focus, loading, and 404 behavior.
8. Run lint, typecheck, build, and a link crawl.

## 11. How to add a new API or form

1. Define the request and response contract in `docs/API.md`.
2. Add the route handler under `app/api/`.
3. Define or update the model enum/types if data is persisted.
4. Enforce authentication and authorization in the handler.
5. Normalize and length-limit all input before persistence/email rendering.
6. Add rate limiting where the endpoint is public or expensive.
7. Use `connectDB()` and existing models; do not create ad hoc connections.
8. Add loading/error/success behavior in the client.
9. Verify `400`, `401`, `403`, duplicate, rate-limit, and success cases.

## 12. How to change the database model

Mongoose schemas are the source of truth for application-level shape and indexes. Before changing one:

- search all route handlers and components that read/write the field;
- decide whether existing documents need a backfill;
- preserve compatibility with old records where possible;
- test unique and TTL index behavior against a non-production database;
- document any manual migration or rollback steps in the PR and deployment notes.

There is currently no migration framework in the repository. Schema changes that require backfills must therefore be planned as explicit scripts or controlled database operations, not assumed to happen automatically at application startup.

## 13. Deployment topology

```text
Internet
  │ HTTPS
  ▼
Reverse proxy / TLS
  │ HTTP localhost:3000
  ▼
PM2 → `next start`
  │
  ├── MongoDB Atlas
  ├── SMTP provider
  └── external analytics/chat/ad services
```

The deployment process is documented in [`DEPLOYMENT.md`](./DEPLOYMENT.md). Environment values must be loaded before `npm run build`, especially all `NEXT_PUBLIC_*` flags.

## 14. Architectural trade-offs

- **Single app:** simpler deployment and shared types, but page/API changes share one release and one runtime.
- **MongoDB mixed submission data:** easy to support varied business forms, but validation must remain explicit because MongoDB cannot enforce each form's fields.
- **JWT sessions:** low session-store overhead, but role refresh and secret rotation need operational care.
- **MongoDB rate limits:** shared across instances and durable through a process restart, but rate-limit availability depends on MongoDB.
- **Global third-party scripts:** convenient analytics/chat/ads integration, but they add privacy, performance, and browser-console considerations.

When proposing a structural change, explain which trade-off it improves and what operational complexity it adds.
