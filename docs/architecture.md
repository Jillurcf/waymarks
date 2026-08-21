# Waymark — Technical Architecture

- **Stack:** Next.js 16 (App Router) · React 19 · TypeScript 5 · Tailwind CSS v4 ·
  shadcn/ui primitives (`radix-ui`) · `lucide-react` · `ogl` (WebGL hero).
- **Build:** static export via `next.config.ts` (`output: "export"`,
  `trailingSlash: true`, `images.unoptimized`).
- **Design source:** `html_version/` (Artistic template) supplies structure and
  interaction patterns only. All styling resolves to the brand skill
  (`.skill/waymark-ui-ux/design-system.md`) and `@theme` tokens.

> Next.js 16 has breaking changes. Read the bundled guides under
> `node_modules/next/dist/docs/` before writing app code (see `AGENTS.md`).
> Key constraint doc: `01-app/02-guides/static-exports.md`.

## Layer model

```
┌───────────────────────────────────────────────┐
│ app/  (routes, layouts, dynamic render)       │
│   ├── layout.tsx / page.tsx / not-found.tsx   │
│   └── [slug]/ routes with generateStaticParams│
├───────────────────────────────────────────────┤
│ components/                                   │
│   ├── ui/         shadcn primitives           │
│   │               (+ accordion, carousel)     │
│   ├── site/       marketing sections/blocks   │
│   │               incl. shared PageHeader,    │
│   │               Reveal, CountUp, SidebarCta │
│   ├── navbar.tsx  header + contact offcanvas  │
│   └── molten-metal.tsx  signature WebGL hero  │
├───────────────────────────────────────────────┤
│ lib/                                          │
│   ├── content/    typed data (services, work, │
│   │                posts, testimonials…)      │
│   ├── routes.ts   single route + nav map      │
│   └── utils.ts    cn()                        │
├───────────────────────────────────────────────┤
│ public/   images, og assets, favicon, logo    │
└───────────────────────────────────────────────┘

html_version/   read-only design reference — never imported, linked, or shipped
```

## Conversion architecture (template → app)

The HTML template's jQuery/Bootstrap stack maps onto the app as follows
(full table in `docs/implementation-plan.md` §3):

- **Layout bands** (header, ticker, page banner, footer CTA band) are shared
  components rendered by `layout.tsx` / page files — never copied per page.
- **Interactivity** is isolated in small client components (`Reveal`,
  `CountUp`, work filter, lead form, accordions/carousels via shadcn).
  Everything else stays a Server Component.
- **Motion** = CSS transitions (150–300 ms) + IntersectionObserver class
  toggles; all gated on `prefers-reduced-motion`. No animation libraries.
- **Hero** = MoltenMetal WebGL with static fallback; the template's background
  video is not ported.

## Conventions

- **Routes** — folder-per-route under `src/app`. Static pages export
  `metadata` (or `generateMetadata`). Dynamic collections (services, work,
  blog) use `generateStaticParams` + local content modules — all resolved at
  build time.
- **Route registration** — every URL is added to `src/lib/routes.ts` first;
  nav, footer, sitemap, and breadcrumbs read from it.
- **Components** — page-specific blocks in `src/components/site/`; generic
  primitives in `src/components/ui/` (add with `npx shadcn@latest add`).
  Server Components by default; add `"use client"` only for interactivity.
- **Content** — copy/data in `src/lib/content/*.ts`; components consume types,
  never inline real copy. Blog posts may use MDX/local markdown files imported
  at build time.
- **Styling** — Tailwind utility classes + `@theme` tokens. No raw hex inside
  JSX (only in token definitions). `cn()` for composition.
- **Images** — `next/image` with explicit dimensions and `alt`; `unoptimized`
  is on (static host), so serve optimized-size files directly. Template stock
  photos are never copied into `public/`.

## Static export rules that shape everything

1. No API routes, cookies for auth, dynamic server functions, or request-time
   data — anything server-side must run at build.
2. Contact form: client-side POST to a **static-compatible form endpoint**
   (Formspree/Web3Forms) or `mailto:` fallback. See `FR-12`, `NFR-4`.
3. Analytics must be a client beacon/script with no server dependency.
4. Fonts/images self-hosted (vendored `woff2` / local files) so builds are
   reproducible offline (`FR-21`).
5. Sitemap/robots generated as static files from the route map (`FR-19`).

## State & data flow

- No global state library. Local React state for menus/filters; uncontrolled
  forms with client validation; content flows one-way from `lib/content` →
  props → view.
- A single `src/lib/routes.ts` is the source for nav, footer, sitemap,
  breadcrumbs — add routes there first.

## Performance budget

- ≤ 200 KB JS (gzip) per route; hero WebGL deferred/lazy until in view
  (`IntersectionObserver`), DPR capped, disabled on `prefers-reduced-motion`.
- Route-level code splitting by default; shared chunks kept minimal.
- The conversion must not regress the budget: no preloader, no jQuery-era
  libraries, galleries/lightboxes dropped.

## Environments & deployment

| Stage     | Target                    | Refresh      |
| --------- | ------------------------- | ------------ |
| Local     | `npm run dev`             | hot reload   |
| Preview   | CI PR preview (Netlify/Vercel) | per PR |
| Production | Static host serving `out/` | CI build → upload → promote |

Deploy flow: `npm run build` → upload `out/` (or platform git push) →
smoke check (`/`, a nested route, an image, a 404). Rollback = redeploy
previous artifact (`NFR-8`). See `.command/deploy.md`.

## Security posture

- Zero secrets in the client bundle; `.env*` gitignored; form endpoint key
  server-side or hosted elsewhere.
- Honeypot + rate limiting on the form endpoint (provider-side).
- CSP headers at host: `default-src 'self'`; allow `https:` for form/analytics/
  booking origins only; `frame-src` for the map embed (if kept) and Calendly.
- Regular `npm audit`; keep lockfile current.

## TBD decision log

1. Form-service provider → owner: engineering/ops (blocks C4.4).
2. Analytics provider → owner: marketing/ops (blocks C5.6).
3. Carousel approach (Radix vs scroll-snap) → owner: engineering (blocks C0.3).
4. Map embed vs static map → owner: marketing/eng (blocks C4.3).
5. Content hosting for imagery (local vs CDN) → owner: marketing (blocks M2/M3 polish).
