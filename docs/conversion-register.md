# Waymark — Conversion Register (M0 decisions)

Freeze-the-decisions record for **M0 — Conversion foundations**
(`docs/implementation-plan.md` §4). Later milestones must not re-litigate
anything settled here; changes require a spec/plan update first.

---

## C0.1 — Next.js 16 conventions confirmed

Read from `node_modules/next/dist/docs/`: `01-app/02-guides/static-exports.md`,
`01-app/01-getting-started/03-layouts-and-pages.md`, file-conventions index.
Findings that bind later milestones:

- Static export via `output: "export"` + `trailingSlash: true` (already set in
  `next.config.ts`); dynamic routes are illegal without `generateStaticParams()`.
- `params`/`searchParams` are **Promises** — always `await` them; typed
  `PageProps<'/route/[slug]'>` global helpers are available after typegen.
- No server actions, no Request-dependent route handlers, no ISR, no default
  image loader (`images.unoptimized: true` is required and set).
- Browser APIs only inside client components/effects (prerender happens at
  build time).
- `not-found.tsx`, `sitemap.ts`, `robots.ts` conventions as planned.

## C0.2 — Template asset audit

Audited `html_version/Waymarks Website/html.awaikenthemes.com/artistic/design-agency/images/`.
**Nothing was copied into `public/` during M0** — no scraped asset is cleared
to ship. Register:

| Template asset class | Files | Decision | Replacement + alt-text plan |
| -------------------- | ----- | -------- | --------------------------- |
| Client logos | `client-logo-1..6.svg`, `our-client-1..5.svg` | **Replace** | Third-party brand marks scraped from the Awaiken demo — license risk plus a fake roster. Ticker renders text wordmarks from `home.ts` `clientLogos`; real wordmarks only with written permission (C1.4). |
| Generic icon SVGs | `icon-*.svg`, `arrow-*.svg`, `header-btn-dot.svg` | **Replace** | lucide-react icons only (quality gate F), mapped via the `icon` field in content modules. |
| All photography | `hero-*`, `about-us-image`, `team-*`, `project-*`, `post-*`, `gallery-*`, `satisfy-client-*`, `service-image-*`, `service-process-step-*`, `what-we-do-img-*`, `fact-image`, `our-faqs-image`, `our-goal-img`, `our-benefit-image-*`, `page-header-bg` | **Replace** | Never ship scraped photos (plan §5). Brand-approved imagery or token-based graphics per milestone; every adopted image gets explicit `width`/`height` and descriptive alt (gate B/C); decorative graphics get `alt=""`. |
| Hero background video | template `<video>` sources | **Drop** | MoltenMetal WebGL signature with static gradient fallback (brand rule). |
| Preloader | `loader.svg` | **Drop** | No preloader (performance principle). |
| Template logo/favicon | `logo.svg`, `footer-logo.svg`, `favicon.png` | **Replace** | `public/Waymarks_Logo-01.png` lockup (sacred, as-is) + existing `favicon.ico`. |
| Decorative shapes/backgrounds | `*-bg*.svg/png`, `section-bg-shape-*`, `section-bg-circle-shape`, `why-choose-circle`, `explore-more-circle.svg`, `work-together-bg*`, `contact-info-box-bg.svg`, etc. | **Replace** | Token-based CSS treatments (hairlines, brand gradients, surface tints). No scraped decoration ships. |
| Fake signature | `about-author-signature.svg` | **Drop** | Dummy founder identity (§5 register); real founder block decided at C3.1. |
| Icon fonts | `webfonts/` | **Drop** | Geist self-hosted via `next/font` already in place. |

## C0.3 — Carousel decision

**Decision: CSS scroll-snap row. No carousel primitive, no Embla dependency.**

- Rationale: plan §6.3 says "pick lightest that meets a11y gates". Testimonial
  blocks show 3–5 quote cards; a scroll-snap row needs zero JS, is keyboard
  operable (focusable scroll region, cards tab into links), and reduced-motion
  is trivially satisfied. shadcn's carousel would add `embla-carousel-react`
  (~7 kB gz) against the 200 KB/route budget and the skill's no-new-libraries
  rule.
- Consequence for M2/M3: testimonial sections render as snap rows
  (`snap-x snap-mandatory`, hidden scrollbar, visible focus states).
- Added instead per C0.3: **`src/components/ui/accordion.tsx`** (shadcn/Radix
  primitive, repo conventions: function components, `data-slot`, unified
  `radix-ui` import) for the FAQ fold pattern (C1.6 reuses it).

## C0.4 — Token verification (`globals.css`)

Template patterns audited against the `@theme`: eyebrow label, ticker,
step cards, sidebar CTA box.

**Fixed — broken token references.** Site components referenced
`waymark-primary` / `waymark-deep` / `waymark-mid`, which match no theme token
(the palette registers `waymarks-*`). Those classes generated nothing. Renamed
to canonical tokens across 13 files in `src/components/site/`:

| Broken class | Canonical token | Semantic role |
| ------------ | --------------- | ------------- |
| `waymark-primary` | `waymarks-primary` | Brand-first highlights, star fills |
| `waymark-deep` | `waymarks-secondary` | Eyebrows/icons/links on light surfaces |
| `waymark-mid` | `waymarks-accent` | Eyebrows/highlights on dark (inverse) surfaces |

**Extended — genuinely missing tokens.**

- `--animate-accordion-down` / `--animate-accordion-up` — required by the new
  accordion primitive (keyframes ship with `shadcn/tailwind.css`).
- `--animate-marquee` + `@keyframes marquee` — the C1.4 ticker pattern.
- Base-layer `prefers-reduced-motion` guard pausing the marquee and collapsing
  accordion height motion (quality gate B).

**Covered — no extension needed.** Eyebrow labels (`text-xs uppercase
tracking-widest` + secondary/accent), step cards and sidebar CTA box
(`radius-lg/xl`, `border-border`, `shadow-card`, card/popover surfaces),
testimonial rules, stat typography (`tabular-nums`) all resolve to existing
tokens. Zero raw hex in `src/components` (grep-verified).

## C0.5 — Copy replacement map (annotated §5)

Authoritative register: `docs/implementation-plan.md` §5. Owner-module map
verified against the current typed modules — every row below is either real
copy or explicitly marked `SEED` at the source. **No template dummy string has
an owner gap.**

| Template dummy | Owner module | Status |
| -------------- | ------------ | ------ |
| "$29/$39/$49 per month", "30 day free trial" | `home.ts` `pricingRows` (+ pricing page C3.6) | `SEED` ("From $[X]") |
| "25+ years", "8k+ awards", "5k+ customers", "50+ projects", "15K+", "500+ Happy customer" | `stats.ts` `proofStats`/`trustLine` | `SEED` |
| "sarah mitchell, CEO & founder" + signature | `team.ts` (+ founder fields at C3.1) | `SEED` (bracketed names) |
| "Crafting logos, color palettes guidelines…" blurb | `services.ts` summaries | Real copy shipped |
| "emily williams / emma johnson / mark johnson / devon lane" quotes | `testimonials.ts` | `SEED` (bracketed authors/companies/sources) |
| "+123 456 789", "info@domainname.com", "123 Creative Lane London" | `site.ts` | Real values shipped (`hello@waymarks.agency`, `+971 55 896 5353`, Dubai UAE) |
| Stock photos (people/offices/projects) | See C0.2 register | Never ship |

Launch guard (C5.4): grep `src/` for the dummy strings above — zero hits
expected; unverified `SEED`/bracketed values must be resolved or dropped.

## DoD check (M0)

- [x] Accordion primitive exists in `src/components/ui/`
- [x] Carousel approach decided (scroll-snap; documented above)
- [x] Tokens extended where genuinely missing; class/token mismatch fixed;
      no raw hex anywhere
- [x] Asset checklist + copy decisions written down (this file)
- [x] `/build` green — site builds unchanged apart from the token fixes
