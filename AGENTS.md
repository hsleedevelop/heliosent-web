# AGENTS.md

Guidelines for agentic coding agents working in this repository.

## Project Overview

Brand hub website (브랜드 허브 웹사이트) built with TanStack Start, React 19, TypeScript 5.7, and Tailwind CSS v4. Content is in Korean.

## Build/Lint Commands

```bash
# Development server (port 3000)
pnpm run dev

# Production build (vite build + tsc --noEmit)
pnpm run build

# Preview production build
pnpm run preview

# Lint TypeScript/React files
pnpm run lint

# Format code with Prettier
pnpm run format
```

**Note:** No test framework is configured. There is no command to run a single test.

## Code Style Guidelines

### Formatting (Prettier)

- No semicolons
- Single quotes
- Trailing commas (all)
- 2-space indentation
- 100 character print width

### TypeScript

- Strict mode enabled
- ES2022 target
- Use `import type` for type-only imports
- No `any` types (strict mode enforced)

### Imports

- React: `import * as React from 'react'`
- Third-party imports first
- Internal imports using path alias `~/`
- Type imports: `import type { Foo } from '~/data/types'`

### Naming Conventions

- **Components**: PascalCase (e.g., `Header.tsx`, `PreviewCard`)
- **Functions/Variables**: camelCase
- **Types/Interfaces**: PascalCase with descriptive names
- **Files**: PascalCase for components, camelCase for utilities

### Component Patterns

- Use function declarations for components
- Props interface defined inline or in types file
- Tailwind classes for styling (no CSS modules)
- Accessibility attributes required (aria-label, role)

## Architecture

### Routing

- File-based routing in `src/routes/`
- New `.tsx` files auto-register as routes
- `src/routeTree.gen.ts` is auto-generated — **never edit manually**
- Root layout: `src/routes/__root.tsx` wraps all pages

### Data Layer

- All content in `src/data/` as typed TypeScript exports
- No external API or database
- Shared types in `src/data/types.ts`
- Import data directly in components

### Styling

- Tailwind CSS v4 with `@theme` directive
- Custom tokens: `--color-brand`, `--color-muted`, `--color-subtle`, `--color-border`
- Font: Pretendard for Korean support
- Global styles in `src/styles/app.css`

### SEO

- Use `seo()` helper from `~/utils/seo.ts`
- Export `head()` from route components
- Generates Open Graph and Twitter card meta tags

### Path Alias

- `~/*` maps to `./src/*` (configured in tsconfig.json)

## Error Handling

- Use React error boundaries via TanStack Router
- Default error components in `~/components/DefaultCatchBoundary.tsx`
- 404 handling in `~/components/NotFound.tsx`

## Cursor Rules Reference

This project follows the Cursor rules in `.cursor/rules/`:

1. **karpathy-guidelines.mdc**: Think Before Coding, Simplicity First, Surgical Changes, Goal-Driven Execution
2. **heliosent-project.mdc**: Korean content, TanStack Start patterns, file-based routing conventions

## Constraints

- HTML `lang` attribute must be `"ko"`
- No test framework — manual verification required
- Content updates only in `src/data/` files
- ESLint ignores: `dist`, `.output`, `src/routeTree.gen.ts`
