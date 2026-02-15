---
description: Add or update site content
---

All site content is managed in `src/data/`.

1. Identify the relevant file in `src/data/` (e.g., `featured.ts`, `work.ts`, `apps.ts`).
2. Update the TypeScript exports in that file.
3. Ensure the changes adhere to the interfaces defined in `src/data/types.ts`.
4. Verify the changes by checking the development server at `http://localhost:3000`.
5. Run `pnpm run lint` and `pnpm run format` after making changes to ensure consistency.

