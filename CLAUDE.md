# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

HelioSent — brand hub website (브랜드 허브 웹사이트) for showcasing engineering work, apps, and content. Built with TanStack Start (SSR/SSG via Nitro), React 19, TypeScript 5.7, Tailwind CSS v4, and Vite 7. All content is in Korean. Deployed on Vercel.

## Commands

- **Dev server**: `pnpm dev` (port 3000)
- **Build**: `pnpm build` (vite build + tsc --noEmit)
- **Preview**: `pnpm preview`
- **Start (prod)**: `pnpm start` (node .output/server/index.mjs)
- **Lint**: `pnpm lint`
- **Format**: `pnpm format`

Package manager is **pnpm** (specified in `package.json` `packageManager` field). Use `pnpm` instead of `npm`.

No test framework is configured.

## Architecture

### Routing

TanStack Router with file-based routing. Routes live in `src/routes/`. Adding a new `.tsx` file there auto-registers a route. The route tree is auto-generated in `src/routeTree.gen.ts` — never edit this file manually.

Current routes: `/` (index), `/about`, `/work`, `/apps`, `/links`.

Root layout (`src/routes/__root.tsx`) wraps all pages with Header, Footer, and main content area. It also includes:
- Router devtools (dev only, lazy-loaded)
- Analytics component (currently disabled)
- Default error boundary and 404 component

Router config (`src/router.tsx`): scroll restoration enabled, preload on intent.

### Content/Data Layer

All site content is managed as typed TypeScript exports in `src/data/`. There is no external API or database — components import data directly. To update content, edit the relevant file in `src/data/`.

Key data files: `navigation.ts`, `featured.ts`, `about.ts`, `work.ts`, `apps.ts`, `links.ts`, `now.ts`. Shared interfaces are in `src/data/types.ts`.

Data types use Korean status strings (e.g. `'진행 중' | '계획 중' | '완료'` for NowItem, `'운영 중' | '개발 중' | '준비 중'` for AppItem).

### Components

Shared components in `src/components/`: `Header`, `Footer`, `Analytics`, `PreviewCard`, `DefaultCatchBoundary`, `NotFound`.

### SEO

`src/utils/seo.ts` exports a `seo()` helper that generates meta tags (Open Graph, Twitter cards). Every route uses this in its `head()` export. Site URL: `https://heliosent.com`.

### Styling

Tailwind CSS v4 with the `@theme` directive in `src/styles/app.css`. Custom theme tokens: `--color-brand` (#111827), `--color-muted` (#6b7280), `--color-subtle` (#f3f4f6), `--color-border` (#e5e7eb). Font stack uses Pretendard for Korean support.

Base layer includes antialiasing, smooth scrolling, and custom selection/focus styles.

### Build & Deploy

- Vite 7 with plugins: `@tailwindcss/vite`, `vite-tsconfig-paths`, `@tanstack/react-start`, `nitro`, `@vitejs/plugin-react`
- Nitro server for SSR (output to `.output/`)
- Deployed on Vercel (`vercel.json` with `tanstack-start` framework preset)

## Project Structure

```
src/
├── components/    # Shared UI components
├── data/          # Static content (TypeScript exports)
├── routes/        # File-based routes (TanStack Router)
├── styles/        # Tailwind CSS (app.css)
├── utils/         # Utility functions (seo.ts)
├── router.tsx     # Router configuration
└── routeTree.gen.ts  # Auto-generated (do not edit)
public/            # Static assets (robots.txt, sitemap.xml)
docs/              # Architecture documentation
```

## Path Alias

`~/*` maps to `./src/*` (configured in tsconfig.json, resolved via `vite-tsconfig-paths`).

## Code Style

- Prettier config (in `package.json`): no semicolons, single quotes, trailing commas, 2-space indent, 100 char width
- ESLint flat config (`eslint.config.js`) with TypeScript and React Hooks rules; ignores `dist`, `.output`, `routeTree.gen.ts`
- Unused vars rule is `warn` with `^_` args pattern ignored
- HTML lang is set to `ko`

## Git

- Main branch: `master`
- Development branch: `develop`
- `.gitignore` excludes: `node_modules`, `dist`, `.output`, `.vinxi`, `.vercel`, `*.local`, `src/routeTree.gen.ts`, `.DS_Store`
