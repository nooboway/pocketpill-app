# PocketPill — Antigravity handoff

This folder is the complete uploadable source for the current PocketPill site.

## Preserve exactly

- PocketPill green and white visual system.
- Homepage structure and copy in `src/routes/index.tsx`.
- Human-first Lineage page in `src/routes/lineage.tsx`.
- Existing routes, navigation, footer, images, PDF, and responsive styling.
- TanStack Start routing; do not replace it with React Router or a single `App.tsx` switcher.
- `src/styles.css` as the source of truth for the visual layout.

## Run it

```bash
npm install
npm run dev
```

The app uses Vite/TanStack Start and serves locally on the port selected by the host.

## Build and check

```bash
npm run build
npm run lint
```

## Optional payments

Copy `.env.example` to `.env` and add the private Paystack key only when enabling payment routes. Never commit `.env` or expose `PAYSTACK_SECRET_KEY` in browser code.

## Included content

- `src/` — routes, components, styles, server routes, and app logic.
- `public/` — logos, favicons, certificate PDF, and public assets.
- `src/assets/` — original PocketPill photography and visual assets.
- Configuration and lockfiles needed to install and build the app.

Generated folders and private editor metadata are intentionally excluded: `node_modules`, build output, `.git`, `.lovable`, `.workspace`, screenshots, and temporary artifacts.
