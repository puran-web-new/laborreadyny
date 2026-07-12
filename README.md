# Labor Ready NY Inc Website (Next.js + Vercel)

This project has been migrated to a Vercel-aligned Next.js (App Router) setup while preserving existing page content and `.html` routes.

## Local setup

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Scripts

- `npm run dev` - run local Next.js dev server
- `npm run lint` - run ESLint
- `npm run build` - production build
- `npm run start` - run production server

## Route compatibility

- Existing static pages are preserved under `public/*.html`.
- Root (`/`) redirects to `/index.html`.
- Clean rewrites are enabled for:
  - `/about`
  - `/apply`
  - `/clients`
  - `/contact`
  - `/dispatch`
  - `/industries`
  - `/onboarding`
  - `/payroll`
  - `/portal`
  - `/services`

## Neon Postgres (serverless) setup

The demo API route uses Neon at:

- `GET /api/demo` (read)
- `POST /api/demo` (write; body: `{ "message": "..." }`)

Required environment variable:

- `DATABASE_URL` - Neon connection string

If `DATABASE_URL` is not configured, the route gracefully returns a feature-disabled response and the site remains fully functional.

Create `.env.local`:

```bash
DATABASE_URL=postgresql://<user>:<password>@<host>/<db>?sslmode=require
```

## Vercel deployment notes

- No custom server is required.
- Use Vercel default Next.js build settings.
- Set `DATABASE_URL` in Vercel Project Settings → Environment Variables if Neon API functionality is needed.

## Migration checklist

- [x] Bootstrap Next.js App Router project
- [x] Preserve existing HTML/CSS/JS content and route intent
- [x] Keep legacy `.html` routes working and add clean rewrites
- [x] Add Neon serverless demo read/write route with env-based fallback
- [x] Keep deployment compatible with Vercel defaults

## Rollback notes

If rollback is required:
1. Re-deploy the previous static-site commit.
2. Restore static hosting workflow/domain settings.
3. Keep DNS unchanged; only switch deployment target back to prior known-good revision.
