# Fake Store — Products

A small Next.js (App Router) + TypeScript + Tailwind demo that fetches products from `https://fakestoreapi.com/products` and shows a responsive product grid with search, category filter, product modal, and raw JSON viewer.

Key features

- Server-side fetch (Next fetch with revalidation) to serve fast pages on Vercel
- Responsive product grid (1 column on small screens, 2–3 medium, 4 on large)
- Product modal (accessible) with large image, description, price and rating
- Search by title and category filter (categories are derived from the API)
- Collapsible raw JSON view for quick debugging
- Minimal ESLint + Prettier setup

Quick start (local)

1. Install dependencies

```bash
npm install
```

2. Run development server

```bash
npm run dev
# then open http://localhost:3000
```

3. Build & run production locally

```bash
npm run build
npm run start
```

Lint & format

```bash
npm run lint
npm run format
```

Deploy to Vercel

1. Push this repository to GitHub.
2. Go to https://vercel.com and click "Import Project" → pick the GitHub repo.
3. No environment variables are required. Vercel will run `npm install` and `npm run build` by default.
4. `vercel.json` is included to ensure Next.js app router deployment compatibility.

Notes & assumptions

- Public API: no secrets or env vars are required.
- The app uses simple revalidation hints in `lib/api.ts` (tweak `revalidate` values there if you want different caching).
- Modal is keyboard accessible (Escape to close and backdrop click). For stricter focus trapping, consider adding a small focus-trap library.

File map (important files)

- `app/page.tsx` — Home (server component) that fetches products and passes them to the client grid
- `components/ProductGridClient.tsx` — Client grid that renders search, filter, JSON viewer, and modal
- `components/*` — small components (Card, Modal, SearchBar, CategoryFilter, JsonViewer)
- `lib/api.ts` — fetch helpers for fakestoreapi
- `vercel.json` — Vercel build config

If you want, I can:

- Add unit tests for components (Jest/Testing Library)
- Wire up a small CI step (GitHub Actions) to run lint/build on PRs
- Improve visual polish (hover states, skeleton loaders, animations)

If you'd like, I can also run `npm install` and then run a build in this environment to validate—tell me to proceed and I'll run the commands.

Enjoy — tell me what you'd like improved next.
# WEB-TEST
