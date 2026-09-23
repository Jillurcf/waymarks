# Waymark — Implementation Phases (One-Pager Rebuild)

- **Version:** 1.0
- **Project:** Waymark company website (static Next.js app, App Router)
- **Source of design:** `Waymarks Final Homepage Design.html` — the approved
  final homepage design (single canonical reference).
- **Decision:** the multi-page site is wiped to a **one-pager**: navbar + a
  single rebuilt homepage. All other routes (Services, Work, About, Pricing,
  Blog, Contact, Privacy, Terms) are removed; nav becomes in-page anchors.
- **Brand authority:** `.skill/waymark-ui-ux/` (SKILL.md, design-system.md,
  quality-gates.md, content.md). The design file governs structure and motion;
  its styling is mapped onto existing `@theme` tokens — zero raw hex in
  components.
- **Execution model:** phase-wise. Each phase below is self-contained with its
  own Definition of Done; run `npm run verify` (`npx tsc --noEmit && npm run
  lint && npm run build`) at the end of every phase.

---

## Phase 1 — Wipe to one-pager (keep navbar + deps)

Strip the repo to the Navbar shell and the infrastructure it needs; make the
build green with only the home route present.

| Task | ID | Output |
| ---- | -- | ------ |
| Delete route dirs: `src/app/{about,blog,pricing,privacy,services,terms,work}` (+ `[slug]/` subdirs) | P1.1 | Only `page.tsx`, `layout.tsx`, `not-found.tsx`, `globals.css`, `robots.ts`, `sitemap.ts`, `fonts/`, `favicon.ico` remain under `src/app` |
| Delete `src/components/site/*` and `src/components/molten-metal.tsx` | P1.2 | Only `navbar.tsx` + `ui/*` remain under `src/components` |
| Delete content modules except `src/lib/content/site.ts` | P1.3 | Only `site.ts` remains under `src/lib/content` |
| Rewrite `src/lib/routes.ts` to a single `/` route | P1.4 | Route map reduces to Home |
| Rewrite `src/app/not-found.tsx` without deleted deps | P1.5 | On-brand 404 that builds |
| `npm run verify` green | P1.6 | tsc + lint + export pass |

**DoD P1:** tree reduced to navbar shell; only `/` exists; build green.

## Phase 2 — Homepage content module

Put all homepage copy into typed modules so components never inline copy.

| Task | ID | Output |
| ---- | -- | ------ |
| Create `src/lib/content/home.ts`: hero, tagline, proof, capabilities/chips, services grid, segments, stats, case study, process, why-us, FAQ, CTA banner, footer copy | P2.1 | Typed content module mirroring the design file; SEO metadata + FAQ JSON-LD data |
| Extract reusable snippets (buttons, icons metadata) as typed constants | P2.2 | `home.ts` exports |

**DoD P2:** copy for every section lives in `home.ts`; no inline copy pattern is
left for section components to fall into.

## Phase 3 — Shell & shared primitives

Interactivity + shared bits the homepage builds on.

| Task | ID | Output |
| ---- | -- | ------ |
| Add `@theme` keyframes in `globals.css`: `float-logo` (4s ease-in-out, translateY 0→−16px + rotate 1deg) and `pulse-glow` (scale 1→1.15) with `prefers-reduced-motion` pause | P3.1 | `globals.css` extended |
| Recreate `src/components/site/count-up.tsx` (IntersectionObserver, runs once, `tabular-nums`, reduced-motion aware) | P3.2 | Counter primitive |
| Rework `navbar.tsx` nav items → in-page anchors (`#services`, `#work`, `#blog`, `#contact`) desktop + mobile; keep contact panel + "Book a Free Call" | P3.3 | Navbar anchors only |

**DoD P3:** animations available as theme utilities; counters work; navbar
points at on-page sections.

## Phase 4 — Homepage sections

Rebuild every section of the design in order, token-based, consuming `home.ts`.

| # | Section | Component | Animations/notes |
| - | ------- | --------- | ---------------- |
| 1 | Hero | rework `site/hero.tsx` | radial glow, dark bg; CTAs; proof dot; animated W logo stage using `Waymarks_Logo-01.png` in framed rounded container with `float-logo` + `podium-glow` |
| 2 | Proof / testimonials | rework `site/testimonials.tsx` | 3 cards, gradient avatar initials |
| 3 | Connected studio bento | `site/studio-bento.tsx` | Strategy/Design/Technology/Growth light section |
| 4 | Capabilities chips | `site/capabilities.tsx` | pill labels (Brand identities, Websites, …) |
| 5 | Services grid | rework `site/services-grid.tsx` | 7 service cards + "Explore All" |
| 6 | Segment focus | `site/segments.tsx` | Startups/Growing Businesses/SaaS/Established bento |
| 7 | Stats counters | `site/stats-section.tsx` | 12+/100+/450+/25+ via `count-up.tsx` |
| 8 | Case study | `site/case-study.tsx` | Weavers dark showcase card, browser-frame thumbnail |
| 9 | Process | `site/process.tsx` | 6-step Discover→Improve grid |
| 10 | Why choose us | `site/why-us.tsx` | 6-reason bento |
| 11 | FAQ | rework `site/faq.tsx` | shadcn `accordion`, 6 items |
| 12 | Final CTA banner | `site/final-cta.tsx` | glowing full-width band |
| 13 | Footer | rework `site/footer.tsx` | 4-column dark, socials, newsletter form (static-safe), copyright |

**DoD P4:** every design section rendered in order, all motion present,
`npm run verify` green, quality gates A–E pass.

## Phase 5 — Homepage assembly & hookup

| Task | ID | Output |
| ---- | -- | ------ |
| Assemble sections in `src/app/page.tsx` in design order | P5.1 | Home route matches the reference |
| Metadata + Organization/FAQPage JSON-LD per design file | P5.2 | `homeSeo` metadata wired; FAQ JSON-LD matches visible copy |
| Checkpoint against quality gates + responsive 320/768/1280/1920 | P5.3 | UI done |

**DoD P5:** `/` renders the full design; SEO/schema set; `npm run verify` green;
`.skill/waymark-ui-ux/quality-gates.md` all pass.

## Phase 6 — Release prep

| Task | ID | Output |
| ---- | -- | ------ |
| Final `npm run verify` + `out/` export | P6.1 | Deployable static export |
| Update `docs/README.md` + `AGENTS.md` notes to one-pager reality | P6.2 | Docs current |