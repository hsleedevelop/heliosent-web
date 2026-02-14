# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Brand hub website (브랜드 허브 웹사이트) built with TanStack Start, React 19, TypeScript 5.7, and Tailwind CSS v4. Content is in Korean.

## Commands

- **Dev server**: `npm run dev` (port 3000)
- **Build**: `npm run build` (vite build + tsc --noEmit)
- **Preview**: `npm run preview`
- **Lint**: `npm run lint`
- **Format**: `npm run format`

No test framework is configured.

## Architecture

### Routing

TanStack Router with file-based routing. Routes live in `src/routes/`. Adding a new `.tsx` file there auto-registers a route. The route tree is auto-generated in `src/routeTree.gen.ts` — never edit this file manually.

Root layout (`src/routes/__root.tsx`) wraps all pages with Header, Footer, and main content area.

### Content/Data Layer

All site content is managed as typed TypeScript exports in `src/data/`. There is no external API or database — components import data directly. To update content, edit the relevant file in `src/data/`.

Key data files: `navigation.ts`, `featured.ts`, `about.ts`, `work.ts`, `apps.ts`, `links.ts`, `now.ts`. Shared interfaces are in `data/types.ts`.

### SEO

`src/utils/seo.ts` exports a `seo()` helper that generates meta tags (Open Graph, Twitter cards). Every route uses this in its `head()` export.

### Styling

Tailwind CSS v4 with the new `@theme` directive in `src/styles/app.css`. Custom theme tokens: `--color-brand`, `--color-muted`, `--color-subtle`, `--color-border`. Font stack uses Pretendard for Korean support.

## Path Alias

`~/*` maps to `./src/*` (configured in tsconfig.json).

## Code Style

- Prettier: no semicolons, single quotes, trailing commas, 2-space indent, 100 char width
- ESLint flat config with TypeScript and React Hooks rules
- HTML lang is set to `ko`
