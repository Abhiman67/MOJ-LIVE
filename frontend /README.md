# MyOnlineJet Frontend

This folder contains the new Next.js app scaffold for the MyOnlineJet migration.

## What is here

- `app/` Next.js App Router shell
- `components/` shared layout and UI pieces
- `lib/` site constants and route data
- `public/` SEO and compliance files
- `next.config.mjs`, `tailwind.config.ts`, `tsconfig.json`, `eslint.config.mjs`

## How to run

From this folder:

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

## Migration notes

- The legacy static site remains at the repository root.
- The Next.js app lives only in `frontend/`.
- Phase 2 should migrate the first real content pages into `frontend/app/`.
- Route and footer links are already centralized in `frontend/lib/site.ts`.

## Next steps

1. Migrate `/about-us`
2. Migrate `/contact`
3. Add Node API routes for the forms
4. Replace remaining root HTML pages with Next pages over time
