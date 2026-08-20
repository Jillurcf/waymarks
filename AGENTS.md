<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Repo conventions

- **Stack:** Next.js 16 (App Router) · React 19 · TypeScript 5 · Tailwind CSS v4 · shadcn/ui · lucide-react · `ogl`.
- **Static export:** `next.config.ts` sets `output: "export"` + `trailingSlash`. No server runtime, no API routes, no server actions. Builds emit to `out/`.
- **Verification:** before finishing any change run `npx tsc --noEmit`, `npm run lint`, `npm run build` (or `npm run verify` for all three).
- **Content as data:** copy lives in typed modules under `src/lib/content/*.ts`; components consume types, never inline copy. Mark seed/placeholder values `SEED` in comments.
- **Route map:** every URL is registered in `src/lib/routes.ts` — nav, footer, sitemap, and breadcrumbs read from it. Add routes there first.
- **Design tokens:** use only tokens from `src/app/globals.css` `@theme` (per `.skill/waymark-ui-ux/design-system.md`). Zero raw hex values in components.
- **Components:** page sections in `src/components/site/`, shared primitives in `src/components/ui/`. Server Components by default; add `"use client"` only for interactivity.
- **Agents:** `.command/*.md` defines the `/build`, `/ship`, `/deploy` workflows — follow them for verification and release steps.
