# MyOnlineJet Frontend

Next.js 15 App Router project for the MyOnlineJet platform.

This document is meant to help review the project foundation, folder structure, and route organization before final UI polish.

## Architecture Overview

The frontend is organized as a layered Next.js app:

- `app/` contains routes, metadata, and global app shell files.
- `components/` contains reusable UI, layout, page templates, and homepage sections.
- `lib/` contains site configuration and page content data.
- `public/` contains static assets and site files.
- `docs/` contains supporting design guidance.
- `types/` contains custom TypeScript declarations.
    
The project currently separates pages into three patterns:

1. Custom pages for high-priority routes like home, about, contact, and services.
2. Shared content pages powered by a reusable `ContentPage` template.
3. Redirect routes for legacy or alias paths.

## Folder Structure

```txt
frontend/
├── app/
│   ├── globals.css               # Global styles, tokens, responsive rules
│   ├── layout.tsx                # Root layout, metadata, scripts, shell wrapper
│   ├── page.tsx                  # Home page entry point
│   ├── not-found.tsx             # 404 page
│   ├── sitemap.ts                # Sitemap route
│   ├── about-us/page.tsx         # Custom About Us page
│   ├── contact/page.tsx          # Custom Contact page
│   ├── services/page.tsx         # Custom Services page
│   ├── advanced-air-mobility/page.tsx
│   ├── careers/page.tsx
│   ├── company-profile/page.tsx
│   ├── early-access/page.tsx
│   ├── ecosystem-integration/page.tsx
│   ├── evtol-infrastructure/page.tsx
│   ├── faq/page.tsx
│   ├── founder/page.tsx
│   ├── investors/page.tsx
│   ├── legal-disclaimer/page.tsx
│   ├── partner-with-us/page.tsx
│   ├── partners/page.tsx         # Redirect to /partner-with-us
│   ├── privacy-policy/page.tsx
│   ├── reports/page.tsx
│   ├── subscribe/page.tsx
│   ├── technology/page.tsx
│   ├── terms-conditions/page.tsx
│   ├── vertiports/page.tsx
│   ├── vision-mission/page.tsx
│   └── whitepapers/page.tsx
│
├── components/
│   ├── home/
│   │   └── HomeLanding.tsx       # Custom homepage composition
│   ├── layout/
│   │   ├── SiteShell.tsx         # Conditionally renders shared header/footer
│   │   ├── Header.tsx            # Shared header and mobile menu
│   │   └── Footer.tsx            # Shared footer
│   ├── page/
│   │   └── ContentPage.tsx       # Reusable content-page template
│   └── ui/
│       └── Button.tsx            # Shared button primitive
│
├── lib/
│   ├── site.ts                   # Site config, nav links, footer groups, stats, metadata helpers
│   └── page-data.ts              # Route content for shared content pages
│
├── public/
│   ├── ads.txt
│   ├── favicon.svg
│   ├── humans.txt
│   ├── moj-news-widget.js
│   └── robots.txt
│
├── docs/
│   └── homepage-ui-ux-design.md  # Design guidance / reference notes
│
├── types/
│   └── custom-elements.d.ts
│
├── tailwind.config.ts
├── postcss.config.js
├── next.config.mjs
├── tsconfig.json
├── eslint.config.mjs
├── package.json
└── package-lock.json
```

## Route Strategy

### Custom pages
These are built as bespoke pages because they have richer layouts or custom interactions:

- `/`
- `/about-us`
- `/contact`
- `/services`

### Shared content pages
These pages use `components/page/ContentPage.tsx` and are driven by data in `lib/page-data.ts`:

- `/advanced-air-mobility`
- `/careers`
- `/company-profile`
- `/early-access`
- `/ecosystem-integration`
- `/evtol-infrastructure`
- `/faq`
- `/founder`
- `/investors`
- `/legal-disclaimer`
- `/partner-with-us`
- `/privacy-policy`
- `/reports`
- `/subscribe`
- `/technology`
- `/terms-conditions`
- `/vertiports`
- `/vision-mission`
- `/whitepapers`

### Redirect route
- `/partners` redirects to `/partner-with-us`

## Source of Truth

The main files that control the app structure are:

- [`app/layout.tsx`](./app/layout.tsx) for the root HTML shell, scripts, and global metadata
- [`components/layout/SiteShell.tsx`](./components/layout/SiteShell.tsx) for shared header/footer behavior
- [`components/layout/Header.tsx`](./components/layout/Header.tsx) for the shared navigation and mobile menu
- [`components/layout/Footer.tsx`](./components/layout/Footer.tsx) for footer links and legal navigation
- [`components/home/HomeLanding.tsx`](./components/home/HomeLanding.tsx) for the homepage composition
- [`components/page/ContentPage.tsx`](./components/page/ContentPage.tsx) for reusable content-page layout
- [`lib/site.ts`](./lib/site.ts) for site config, nav, footer groups, and shared metadata values
- [`lib/page-data.ts`](./lib/page-data.ts) for the route content used by shared content pages

## Design And Styling

The app uses:

- Tailwind CSS v3
- Custom CSS in `app/globals.css`
- Dark-mode brand styling based on the MyOnlineJet design system
- Shared button and card styles
- Responsive rules for mobile, tablet, and desktop

## Static Assets

Static files live in `public/` and are served directly by Next.js. These include:

- `robots.txt`
- `ads.txt`
- `humans.txt`
- `favicon.svg`
- `moj-news-widget.js`

## How To Run

From the `frontend/` folder:

```bash
npm install
npm run dev
```

Then open:

- `http://localhost:3000`

## Build

```bash
npm run build
npm run start
```

## Security and testing

See [`docs/security-and-testing.md`](./docs/security-and-testing.md) for credential
authentication configuration, form-submission rate limiting, seed safeguards, and the
verification checklist.

## Tech Stack

- **Framework:** Next.js 15 App Router
- **Language:** TypeScript
- **Styling:** Tailwind CSS v3 + custom CSS
- **Routing:** File-based routes
- **Icons:** Font Awesome 6.4.0 via CDN
- **Fonts:** Inter, Space Grotesk, Playfair Display, Noto Sans Devanagari

## Notes For Review

- `frontend/.next/` is generated build output and should not be treated as source structure.
- The project is currently focused on architecture and route organization first.
- UI refinements can continue after the foundation is approved.
