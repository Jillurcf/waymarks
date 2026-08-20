---
description: Scaffold a new page or section following repo conventions.
agent: build
---

Scaffold a new page/section for the Waymark site.

## Decide the route

- Marketing pages: `src/app/<slug>/page.tsx` (e.g. `src/app/services/page.tsx`).
- Nested detail pages (case studies, blog posts, services): `src/app/<slug>/<slug>/page.tsx`
  with `generateStaticParams()` and `generateMetadata()` if static but data-driven.
- Sections/components live in `src/components/`; shared UI primitives in
  `src/components/ui/` (shadcn-style).

## Steps

1. Read the closest existing sibling page to match structure and conventions.
2. Read `.skill/waymark-ui-ux/SKILL.md` and apply the design system (tokens,
   spacing, typography) — this is the brand skill and is mandatory.
3. Create the page file with:
   - `export const metadata` (or `generateMetadata`) — title, description, OG tags.
   - A semantic `<main>`/`<section>` hierarchy with visible focus states.
   - Responsive layout (mobile-first) and alt text on every image.
4. Add the route to navigation if it should appear in the nav (see
   `src/components/navbar.tsx`).
5. Wire content through a typed data module in `src/lib/` (no inline copy unless
   the copy is final) so `/content` can update it later.

Route requested (from $ARGUMENTS) must be confirmed against the sitemap in
`docs/content-guide.md` before building.

## Definition of done

- Page renders in `npm run dev`.
- `npx tsc --noEmit` and `npm run lint` pass.
- Matches the design system and passes the quality gates in
  `.skill/waymark-ui-ux/quality-gates.md`.
- If static export requires it, the page builds inside `npm run build`.