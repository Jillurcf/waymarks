# Waymark — Implementation Plan (HTML Template → Next.js Conversion)

- **Version:** 2.0
- **Project:** Waymark company website (static Next.js app)
- **Source of design:** `html_version/` — the "Artistic" design-agency HTML
  template (Awaiken Themes), 16 pages + 3 home variants, captured with HTTrack.
- **Target:** the existing Next.js 16 App Router static export in `src/`.
- **Brand authority:** `.skill/waymark-ui-ux/` (SKILL.md, design-system.md,
  quality-gates.md, content.md). The template's look is **re-skinned** to the
  Waymark identity — its structure and interactions are ported, its styling is
  not.
- **Execution model:** milestone-wise. Each milestone below is a
  self-contained work package with its own Definition of Done; run `/build`
  (`npx tsc --noEmit && npm run lint && npm run build`) at the end of every
  milestone.

---

## 1. Conversion principles

| Principle | Rule |
| --------- | ---- |
| Structure from the template | Section order, page inventory, and interaction patterns come from `html_version/`. |
| Styling from the skill | Every visual decision resolves to `@theme` tokens in `globals.css`; zero raw hex in components. |
| No jQuery-era dependencies | Bootstrap, jQuery, SlickNav, Swiper, WOW.js, GSAP, Isotope, Magnific, counterUp, parallaxie are all replaced by React/Tailwind/shadcn equivalents (see §3). |
| Copy from the content rules | The template's dummy copy ("$29/month", "25+ years", lorem-grade blurbs) never ships. All copy comes from typed modules under `src/lib/content/`, written per `.skill/waymark-ui-ux/content.md`, seeded values marked `SEED`. |
| Static-export safe | No server runtime anywhere; forms/analytics/maps follow `docs/architecture.md` §Static export rules. |
| Performance budget holds | ≤ 200 KB JS per route; no preloader; motion respects `prefers-reduced-motion`. |

## 2. Page mapping (template → routes)

Routes already exist in `src/lib/routes.ts`; the conversion fills them.

| Template page | Target route | Notes |
| ------------- | ------------ | ----- |
| `index.html` | `/` | Full section rebuild (M2). Home variants (`index-2/-image/-slider`) ignored — one canonical home. |
| `about.html` | `/about` | Absorbs `team.html` grid as its team section (fold decision). |
| `services.html` | `/services` | 6 service rows from `services.ts`. |
| `service-single.html` | `/services/[slug]` | Two-column layout + sidebar CTA; `generateStaticParams`. |
| `projects.html` | `/work` | Filterable grid replaces Isotope. |
| `project-single.html` | `/work/[slug]` | Case-study layout + meta sidebar. |
| `pricing.html` | `/pricing` | Engagement tiers (real figures or ranges — never template's $29/$39/$49). |
| `blog.html` | `/blog` | Card grid; pagination deferred until >6 posts. |
| `blog-single.html` | `/blog/[slug]` | Article layout + tags/share. |
| `contact.html` | `/contact` | Info panel + form + lazy map embed. |
| `faqs.html` | folded | Grouped accordion block reused on home/pricing/services. |
| `team.html`, `team-single.html` | folded into `/about` | Team grid on About; no per-member pages in v1. |
| `testimonial.html` | folded | Testimonial block shared by home/about/services. |
| `image-gallery.html`, `video-gallery.html` | dropped (v1) | Out of scope; revisit post-launch if needed. |
| `404.html` | `not-found.tsx` | On-brand 404. |

## 3. Interaction mapping (template tech → Next.js implementation)

| Template pattern | Used in | Replacement |
| ---------------- | ------- | ----------- |
| Preloader | all pages | **Dropped** — hurts LCP; skill demands restraint. |
| Sticky header + offcanvas contact panel | header | Existing `navbar.tsx` + shadcn `Sheet` for the contact offcanvas. |
| SlickNav mobile menu | header | Existing mobile sheet menu. |
| `.page-header` banner (parallaxie + SplitText H1 + breadcrumb) | inner pages | Shared `PageHeader` server component: eyebrow + animated-on-scroll title (CSS only) + breadcrumb from route map. No parallax library. |
| Scrolling logo ticker | all pages | Existing `logo-strip.tsx` as CSS marquee, paused on reduced-motion. |
| Hero background video | home hero | **Replaced by MoltenMetal** WebGL signature (brand rule), static gradient fallback, DPR-capped, observer-gated. |
| WOW.js `fadeInUp` / image reveal | everywhere | One small `Reveal` client component (IntersectionObserver adds a class); CSS transitions 150–300 ms; disabled under reduced-motion. |
| counterUp + waypoints counters | about/home facts | `CountUp` client component, `tabular-nums`, runs once when visible. |
| Swiper testimonial slider | about/services/home | shadcn-style carousel (Radix) or scroll-snap row — decide in M0; no Swiper dependency. |
| Bootstrap accordion FAQs | many pages | Add shadcn `accordion` primitive; content-driven groups. |
| Isotope portfolio filter | projects | Client component: category state filters the card list (data-driven, no masonry lib). |
| Magnific popups/galleries | galleries | Dropped with the gallery pages. |
| bootstrap-validator + AJAX form | contact/team-single | Existing `lead-form.tsx` client validation → POST to static-compatible endpoint; honeypot; `aria-live` status; `mailto:` fallback. |
| Google Maps iframe | contact | Lazy `<iframe>` (`loading="lazy"`) with title + consent-friendly note. |
| Newsletter mini-form (footer) | footer | Single email field posting to the same form provider; hidden until an endpoint exists (FR-23). |
| Magic cursor / SmoothScroll | all pages | **Dropped** — off-brand gimmicks; skill: motion is signature, not decoration. |

## 4. Milestones

> Execute in order; each milestone ends with `/build` green and a deployable
> `out/`. Task IDs (`C<milestone>.<n>`) are referenced by commits and QA.

### M0 — Conversion foundations (½–1 day)

Freeze decisions so later milestones never argue with the template again.

| Task | ID | Output |
| ---- | -- | ------ |
| Read Next.js 16 bundled guides relevant to routing/static export (`node_modules/next/dist/docs/`) | C0.1 | No code; conventions confirmed |
| Audit template assets worth keeping (client-logo SVGs, icon SVGs) vs replacing (all photos, hero video) | C0.2 | Asset checklist in PR description; copied assets land in `public/` with alt text planned |
| Decide carousel approach (Radix carousel vs scroll-snap) and add shadcn `accordion` (+ `carousel` if chosen) | C0.3 | Primitives in `src/components/ui/` |
| Verify tokens cover every template pattern (eyebrow label, ticker, step cards, sidebar CTA box); extend `@theme` only where a token is genuinely missing | C0.4 | `globals.css` updated, no raw hex anywhere |
| Map every string of template dummy copy to its owning content module; mark replacements `SEED` | C0.5 | Annotated copy plan (this file §5 or content-guide) |

**DoD M0:** primitives exist, tokens extended, asset/copy decisions written down. Site still builds unchanged.

### M1 — Shell & shared blocks (1–2 days)

The frame every page hangs on. Port the template's global bands, on brand.

| Task | ID | Source pattern | Target |
| ---- | -- | -------------- | ------ |
| Header: add offcanvas contact panel (phone/email/address + socials) via Sheet; keep active states + mobile sheet | C1.1 | `header.main-header` + `#offcanvasRight` | `navbar.tsx` |
| Footer: "work together" CTA band above main footer; newsletter slot (hidden until FR-23 endpoint); copyright row | C1.2 | `footer.main-footer` | `footer.tsx` |
| `PageHeader` shared banner: eyebrow, title, breadcrumb from route map | C1.3 | `.page-header` | new `site/page-header.tsx` |
| Ticker: CSS marquee of client wordmarks, duplicated track, reduced-motion pause | C1.4 | `.our-scrolling-ticker` | rework `logo-strip.tsx` |
| `Reveal` + `CountUp` primitives (observer-based, reduced-motion safe) | C1.5 | WOW.js + counterUp | new `site/reveal.tsx`, `site/count-up.tsx` |
| Accordion-backed FAQ block (grouped variant for faqs-fold) | C1.6 | `.our-faqs` accordion | rework `faq.tsx` |
| Sidebar CTA box (icon, pitch, phone button) for detail pages | C1.7 | `.sidebar-cta-box` | new `site/sidebar-cta.tsx` |
| On-brand 404 | C1.8 | `404.html` | `not-found.tsx` |

**DoD M1:** shell matches template structure at 320/768/1280/1920 px; keyboard-complete; quality gates A–E pass; `/build` green.

### M2 — Home page (2–3 days)

Rebuild `/` in the template's section order, Waymark voice throughout.
Content module: `src/lib/content/home.ts` (+ existing modules).

| # | Section (template class) | Component | Content source |
| - | ------------------------ | --------- | -------------- |
| 1 | Hero (`.hero`) — eyebrow, split-accent headline, subcopy, primary CTA + phone box; MoltenMetal backdrop instead of stock video | rework `hero.tsx` | `home.ts`, `site.ts` |
| 2 | Logo ticker (`.our-scrolling-ticker`) | C1.4 output | `stats.ts`/roster |
| 3 | About intro (`.about-us`) — client-image strip + happy-customers count, founder quote card w/ signature line, feature list, CTA | new `site/about-intro.tsx` | `team.ts`, `stats.ts` |
| 4 | Services rows (`.our-services`) — 3–6 full-width rows: icon, linked title, blurb, hover image, read-more; closing quote bar | rework `services-grid.tsx` | `services.ts` |
| 5 | What we do (`.what-we-do`) — copy + 2 feature items left, 3-image collage right | new `site/what-we-do.tsx` | `home.ts` |
| 6 | Why choose us (`.why-choose-us`) — 4 icon boxes around central graphic | rework `why-waymarks.tsx` | `home.ts` |
| 7 | Projects (`.our-projects`) — 3 case-study cards | rework `featured-work.tsx` | `case-studies.ts` |
| 8 | How it works (`.how-it-work`) — 3 numbered step cards with bullet lists | rework `how-we-work.tsx` | `home.ts` |
| 9 | Facts (`.our-facts`) — image + explore circle + 4 counters | rework `proof-strip.tsx` | `stats.ts` (real figures only) |
| 10 | Pricing teaser (`.our-pricing`) — 3 tiers + benefit row, links to `/pricing` | rework `pricing-block.tsx` | `home.ts` (ranges ok, no invented precision) |
| 11 | Testimonials slider (`.our-testimonials`) | rework `testimonials.tsx` | `testimonials.ts` |
| 12 | FAQ (`.our-faqs`) — image/CTA aside + accordion | C1.6 output | `home.ts` |
| 13 | Blog teaser (`.our-blog`) — heading + 3 post cards | new `site/blog-teaser.tsx` | `posts.ts` |
| 14 | JSON-LD: ProfessionalService + FAQPage matching visible text | — | `page.tsx` |

**DoD M2:** home renders all 14 blocks in order, on brand, responsive; Lighthouse perf ≥ 90 desktop; quality gates pass; `/build` green.

### M3 — Core inner pages (3–4 days)

Order: About → Services → Service detail → Work → Work detail → Pricing.

| Task | ID | Source | Target |
| ---- | -- | ------ | ------ |
| About: founder/approach sections, benefits list, facts counters, team grid (absorbs `team.html`), testimonial slider, FAQ | C3.1 | `about.html` + `team.html` | `app/about/page.tsx` + section components |
| Services overview: 6 rows + testimonials + FAQ reuse | C3.2 | `services.html` | `app/services/page.tsx` |
| Service detail: entry copy, process steps, deliverables, FAQ, sidebar CTA; `generateStaticParams` for all services | C3.3 | `service-single.html` | `app/services/[slug]/page.tsx` |
| Work overview: filter tabs (All + categories from data) filtering card grid | C3.4 | `projects.html` | `app/work/page.tsx` + filter client component |
| Case-study detail: entry, challenge/approach/result, outcome metrics, meta sidebar, related work, FAQ | C3.5 | `project-single.html` | `app/work/[slug]/page.tsx` |
| Pricing: tier cards (highlighted middle), benefit row, facts/benefits reuse, FAQ, CTA | C3.6 | `pricing.html` | `app/pricing/page.tsx` |

**DoD M3:** every core route builds with metadata + breadcrumbs; each page ends in a contact CTA (BR-2); filters and accordions keyboard-operable; `/build` green.

### M4 — Blog, contact, legal (2–3 days)

| Task | ID | Source | Target |
| ---- | -- | ------ | ------ |
| Blog index: card grid (image, title, read-more), pagination stub | C4.1 | `blog.html` | `app/blog/page.tsx` |
| Article template: featured image, rich body, tag chips, share links, Article JSON-LD | C4.2 | `blog-single.html` | `app/blog/[slug]/page.tsx` |
| Contact: info panel (phone/email/address/socials) + validated lead form + lazy map embed | C4.3 | `contact.html` | `app/contact/page.tsx` |
| Form endpoint wired (provider TBD — see Dependencies) with success/error/`aria-live`/mailto fallback | C4.4 | AJAX pattern | `lead-form.tsx` |
| Privacy + Terms pages on PageHeader shell | C4.5 | — | `app/privacy/`, `app/terms/` |
| Seed 4–6 posts + ≥4 case studies if not yet present (`SEED` where unverified) | C4.6 | — | content modules |

**DoD M4:** full sitemap from `routes.ts` builds; contact flow proven against sandbox endpoint; articles emit metadata + JSON-LD; `/build` green.

### M5 — Hardening & launch (2–3 days)

| Task | ID | Reference |
| ---- | -- | --------- |
| Lighthouse pass on every template type; fix LCP/CLS/TBT; confirm ≤ 200 KB JS/route | C5.1 | NFR-1 |
| axe + manual WCAG 2.1 AA audit (forms, menus, accordions, filters, focus) | C5.2 | NFR-2 |
| Metadata/OG/JSON-LD/sitemap audit on all routes | C5.3 | FR-18/19 |
| Replace remaining `SEED` copy/figures with verified content; strip template leftovers | C5.4 | content.md |
| Cross-browser + responsive matrix pass | C5.5 | NFR-3 |
| Analytics events (page view, form submit, book-call click) with opt-out | C5.6 | FR-22 |
| Release dry-run per `docs/release-checklist.md` | C5.7 | — |

**DoD M5:** release checklist fully green; production deploy trivial via `/deploy`.

## 5. Copy replacement register (template dummy → owner)

Every template string below is placeholder and must NOT ship. Owner modules:

| Template dummy | Appears in | Replaced by |
| -------------- | ---------- | ----------- |
| "$29/$39/$49 per month", "30 day free trial" | pricing | Real engagement ranges — founders/account (`home.ts`, pricing) `SEED` until provided |
| "25+ years", "8k+ awards", "5k+ customers", "50+ projects", "15K+", "500+ Happy customer" | facts/about | Verified Waymark stats (`stats.ts`) `SEED` |
| "sarah mitchell, CEO & founder" + signature | about/home | Real founder identity (`team.ts`) `SEED` |
| "Crafting logos, color palettes guidelines…" (repeated blurb) | services rows | Per-service summaries (`services.ts`) |
| "emily williams / emma johnson / mark johnson / devon lane" quotes | testimonials | Approved client quotes (`testimonials.ts`) `SEED` |
| "+123 456 789", "info@domainname.com", "123 Creative Lane London" | header/footer/contact | `hello@waymarks.agency`, `+971 55 896 5353`, real address (`site.ts`) |
| Stock photos (people/offices/projects) | everywhere | Brand-approved imagery or tasteful token-based graphics; never hotlink the scraped copies |

## 6. Dependencies & decision points

1. **Form provider** (blocks C4.4): Formspree vs Web3Forms vs other static-compatible endpoint — decide with account owner before M4.
2. **Real figures** (block C5.4 final copy): proof-strip stats and pricing ranges need verified numbers; ranges acceptable, invented precision is not.
3. **Carousel choice** (blocks C0.3): Radix/shadcn carousel vs CSS scroll-snap — pick lightest that meets a11y gates.
4. **Imagery** (blocks M2/M3 polish): brand-approved replacements for all stock photos; the scraped template images must not ship.
5. **Map embed** (blocks C4.3): Google Maps iframe vs static map image + link — privacy/perf trade-off, decide in M4.

## 7. Risks

| Risk | Mitigation |
| ---- | ---------- |
| Template look creeping in (orange accents, rounded-everything, glow) | Quality gate A on every PR: grep diffs for hex/rgb; skill tokens only |
| Scraped assets carrying license risk | Never ship template photography/logos; rebuild or replace (C0.2 register) |
| Motion/animation bloat (template ships 12 JS libs) | Only `Reveal`/`CountUp`/carousel allowed; budget check each milestone |
| Scope creep via template pages (galleries, team singles) | Fold/drop decisions in §2 are final for v1; changes require a spec update first |
| Dummy copy surviving to production | Copy register §5 audited at C5.4; grep for template strings in CI content lint |

## 8. Traceability

- Requirement IDs (`BR-x`, `FR-x`, `NFR-x`) keep their meaning from
  `.spec/SRS.md` v1.1; the conversion changes *how* requirements are met, not
  *which* requirements apply.
- Testing per milestone maps to `docs/testing.md`; launch gate is
  `docs/release-checklist.md`.
