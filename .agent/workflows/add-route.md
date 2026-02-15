---
description: Add a new page/route
---

TanStack Router uses file-based routing in `src/routes/`.

1. Create a new `.tsx` file in `src/routes/`.
2. The filename determines the route path (e.g., `src/routes/new-page.tsx` becomes `/new-page`).
3. Use the following template for the new route:

```tsx
import { createFileRoute } from '@tanstack/react-router'
import { seo } from '~/utils/seo'

export const Route = createFileRoute('/your-route-path')({
  head: () => ({
    meta: [
      ...seo({
        title: 'Page Title',
        description: 'Page Description',
        url: 'https://heliosent.com/your-route-path',
      }),
    ],
  }),
  component: YourPage,
})

function YourPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="text-2xl font-bold">New Page</h1>
      {/* Content here */}
    </div>
  )
}
```

4. The `src/routeTree.gen.ts` file will be auto-generated when the dev server is running—do not edit it manually.
5. If the route doesn't appear, ensure `pnpm run dev` is active.

