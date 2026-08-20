# Waymark — Implementation Plan (Full Project Build)

- **Version:** 1.0
- **Project:** Waymark company website (static Next.js app)
- **Horizon:** 90 days from kickoff (BRD: B1)
- **Entry point:** existing "coming soon" static export; assets: logo lockup,
  green liquid-metal palette, shadcn primitives, MoltenMetal shader.

This plan turns `.spec/BRD.md` and `.spec/SRS.md` into shipped software.
Phases are sequential where dependencies exist, parallelizable where green.
Each phase defines tasks, owners, and a Definition of Done. Requirement IDs
(`FR-x`, `NFR-x`) reference `.spec/SRS.md`.

---

## Approach summary

| Principle | How |
| --------- | --- |
| Static-first | All routes build to `out/`; no runtime server ever required. |
| Design-first | Lock tokens/design system before page work (Phase 2 gates later phases). |
| Content-as-data | Copy lives in typed modules; layout and content decouple. |
| Incrementally shippable | Every phase ends in a deployable export that satisfies `/build`. |
| Verified by machine | Every phase runs `tsc`, lint, and the static build automatically. |

---

## Phase 0 — Foundation & scaffolding (days 1–5)

**Goal:** a reproducible, verifiable base the rest of the build stands on.

| Task | ID | SRS / FR | Effort |
| ---- | -- | -------- | ------ |
| Consolidate repo conventions (AGENTS.md, scripts, editor config) | P0.1 | NFR-5 | 4 h |
| Lock design tokens in `src/app/globals.css` `@theme` (brand palette, spacing, radius, shadows) | P0.2 | FR-5, NFR-1 | 6 h |
| Self-host fonts (vendor `woff2`, wire via `next/font/local`) to survive offline CI | P0.3 | FR-21, NFR-1 | 3 h |
| Define typed content modules under `src/lib/content/*.ts` (Service, CaseStudy, Post, Testimonial, Stat) | P0.4 | §7 SRS, NFR-5 | 4 h |
| Wire in CI: install → `tsc --noEmit` → lint → `npm run build` → artifact `out/` | P0.5 | NFR-7, NFR-8 | 4 h |
| Add `sitemap.ts` + `robots.ts` driven by the route/content maps | P0.6 | FR-19 | 2 h |

**DoD (Phase 0):** clean build from scratch on CI; tokens visible on a smoke
page; `/` still renders the placeholder.

---

## Phase 1 — Shell, layout & global instrumentation (days 5–15)

**Tasks:** DO NOT build pages yet — build the shared frame.

| Task | ID | SRS / FR | Effort |
| ---- | -- | -------- | ------ |
| Root layout: metadata defaults, fonts, analytics loader, skip-to-content | P1.1 | FR-18, FR-22 | 4 h |
| Navbar (desktop + mobile sheet) with active states and aria-current | P1.2 | FR-1, FR-2 | 8 h |
| Footer: contact, quick links, socials, reviews, legal | P1.3 | FR-3 | 5 h |
| Shared sections: SectionHeading, CTABand, StatBlock, Testimonial, Marquee/LogoStrip | P1.4 | FR-6, FR-9 | 8 h |
| MoltenMetal hero component with fallback (gradient image), reduced-motion + WebGL detection, capped DPR, start/stop observer | P1.5 | FR-5, NFR-4 | 10 h |
| 404 page styled on brand | P1.6 | FR-1, NFR-4 | 3 h |
| Route map module (`src/lib/routes.ts`) used by nav, sitemap, breadcrumbs | P1.7 | FR-18, FR-19 | 3 h |

**DoD (Phase 1):** shell renders on every route; header/footer identical across
routes; keyboard navigation complete; hero shows animated or fallback variant.

---

## Phase 2 — Core marketing pages (days 10–35)

**Rendering order:** Home → Services → Work → About → Pricing.

### 2.1 Home (10–18)

The home page follows the conversion-optimised layout (reference:
musemind.agency). Every section has one job — build trust, prove capability,
or drive action — with multiple low-friction entry points (sticky CTA, hero
CTAs, final form/call split) and objections answered in-page (process,
pricing ranges, FAQ). Full section order and rationale are captured in the
home page spec; the summary below is the build map.

| Task | ID | FR | Effort |
| ---- | -- | -- | ------ |
| Hero: headline, subhead, dual CTA, trust line (rating · projects · qualifier), MoltenMetal layer | P2.1 | FR-5 | 8 h |
| Client logo bar (wordmarks) — data-driven; renders nothing if roster is empty | P2.2a | FR-6 | 3 h |
| Proof strip "Design That Moves the Numbers" — 4 real metrics from delivered projects | P2.2b | FR-6, FR-9 | 4 h |
| What We Do — 6-service card grid linking to service pages | P2.3 | FR-7 | 6 h |
| Featured work — 3–6 case-study cards, each with one outcome metric/scope statement | P2.4 | FR-8 | 6 h |
| Why Waymarks — differentiation (one team, direct access, speed) | P2.4a | FR-9 | 4 h |
| How We Work — 4-step process (removes "black box" fear) | P2.4b | FR-9 | 4 h |
| Testimonials + review badge, quotes leading with a result | P2.5 | FR-9 | 5 h |
| Team snapshot (3–5 people, small; links to About) | P2.5a | FR-15 | 3 h |
| Pricing transparency block — ranges, not exact; links to /pricing | P2.5b | FR-16 | 4 h |
| FAQ (objection handling) + FAQPage JSON-LD matching visible text exactly | P2.5c | FR-18 | 5 h |
| Closing CTA band: dual path — book-a-call link + lead form (two dropdowns with "Not sure yet" options, honeypot, mailto fallback) | P2.6 | FR-9, FR-4, FR-12 | 8 h |
| ProfessionalService JSON-LD (name, URL, description, areaServed, aggregateRating) | P2.6a | FR-18 | 2 h |

**Conversion-critical content gates (block final copy, not layout):** the
Proof Strip (P2.2b) and Pricing block (P2.5b) require **real figures** —
ranges based on delivered projects are acceptable ("6–10 weeks"), invented
precision is not. Client logos (P2.2a), testimonials (P2.5), and team
photos (P2.5a) must be verified real sources before launch. Seed content
lives in `src/lib/content/*.ts` and is marked `SEED`; the layout is done,
copy swaps are one-file edits.

**DoD (Phase 2):** every core page builds, is on-brand per the skill gates,
ends with a contact CTA (BR-2), and the home page emits
ProfessionalService + FAQPage JSON-LD.

### 2.2 Services (18–27)
| Task | ID | FR | Effort |
| ---- | -- | -- | ------ |
| Services overview page (grid of all services) | P2.7 | FR-10 | 6 h |
| Service detail template + `generateStaticParams` for 6–8 services | P2.8 | FR-11 | 10 h |
| Service FAQs + deliverable lists (content-driven) | P2.9 | FR-11 | 6 h |

### 2.3 Work / Case studies (22–31)
| Task | ID | FR | Effort |
| ---- | -- | -- | ------ |
| Work overview with filters (service/sector) | P2.10 | FR-13 | 8 h |
| Case study detail template (challenge/approach/result/gallery/related) | P2.11 | FR-14 | 12 h |
| Seed 4–6 real case studies in content module + imagery from team | P2.12 | FR-14, BR-4 | 16 h |

### 2.4 About & Pricing (30–35)
| Task | ID | FR | Effort |
| ---- | -- | -- | ------ |
| About: story, values, process timeline, team, location, CTA | P2.13 | FR-15 | 8 h |
| Pricing / engagement models: tiers + guidance + FAQs + CTA | P2.14 | FR-16 | 8 h |

**DoD (Phase 2):** every core page builds, is on-brand per the skill gates, and
ends with a contact CTA (BR-2).

---

## Phase 3 — Contact, Blog, Legal (days 33–50)

| Task | ID | FR | Effort |
| ---- | -- | -- | ------ |
| Contact page + form (validation, aria-live, honeypot, success/error, mailto fallback, form-service endpoint) | P3.1 | FR-12, FR-3 | 12 h |
| "Book a call" deep link (Calendly) integrated into CTAs | P3.2 | FR-4 | 3 h |
| Blog index (cards: title, date, excerpt, reading time, tags) | P3.3 | FR-17 | 6 h |
| Blog post template + MDX/local content so posts are just content files | P3.4 | FR-17, BR-7 | 8 h |
| Publish 4–6 launch articles (content module/MDX), each SEO-optimized | P3.5 | FR-17, BR-8 | 12 h |
| Privacy policy + Terms (accurate, reviewed legal copy) | P3.6 | FR-1 | 4 h |
| Testimonials/badges verified against real sources  | P3.7 | FR-9 | 3 h |

**DoD (Phase 3):** the full sitemap builds; contact flow verified end-to-end
against the form service sandbox; blog articles render with metadata.

---

## Phase 4 — Performance, a11y, SEO hardening (days 50–65)

| Task | ID | FR/NFR | Effort |
| ---- | -- | ------ | ------ |
| Lighthouse pass on all templates; fix LCP, CLS, TBT | P4.1 | NFR-1 | 8 h |
| Full WCAG 2.1 AA audit (axe + manual): forms, menus, focus, contrast | P4.2 | NFR-2 | 8 h |
| Metadata/OG/JSON-LD audit on every route + sitemap correctness | P4.3 | FR-18, FR-19 | 5 h |
| Bundle audit: code-split route components, lazy-load hero shader, compress images | P4.4 | NFR-1, NFR-3 | 6 h |
| Cross-browser pass (last 2 versions) + responsive breakpoints test | P4.5 | NFR-3 | 6 h |
| Analytics events wired (page views + form/CTA conversions) with opt-out | P4.6 | FR-22 | 4 h |

**DoD (Phase 4):** Lighthouse ≥ 90 perf / ≥ 95 a11y on templates; LCP < 2.5 s;
no a11y audit failures above "minor".

---

## Phase 5 — Content completion & launch (days 65–90)

| Task | ID | FR/NFR | Effort |
| ---- | -- | ------ | ------ |
| Final copy pass on all pages (tone, accuracy, typography rules) | P5.1 | skill content.md | 8 h |
| Final imagery: compress, resize, add alt text, verify with limit of 10% green coverage | P5.2 | FR-20, NFR-1 | 6 h |
| Legal review + privacy/terms final | P5.3 | BR-10 | 4 h |
| UAT: stakeholder walkthrough against acceptance criteria | P5.4 | SRS §9 | 8 h |
| Release dry-run: clean CI build → deploy preview → smoke test | P5.5 | NFR-7, NFR-8 | 4 h |

**DoD (Phase 5):** release checklist across `docs/release-checklist.md`;
production deploy is trivial (`/deploy`).

---

## Milestones & schedule

| Milestone | Target day | Entry exit criteria |
| --------- | ---------- | ------------------- |
| M0 Foundation ready | 5 | Phase 0 DoD |
| M1 Shell integrated | 15 | Phase 1 DoD |
| M2 Core pages complete | 35 | Phase 2 DoD |
| M3 Site complete (all routes) | 50 | Phase 3 DoD |
| M4 Hardened | 65 | Phase 4 DoD |
| M5 Launch | 90 | Phase 5 DoD |

## Effort estimate (approx.)

| Phase | Effort |
| ----- | ------ |
| P0 Foundation | ~23 h |
| P1 Shell | ~41 h |
| P2 Core pages | ~80 h |
| P3 Contact/Blog/Legal | ~48 h |
| P4 Hardening | ~37 h |
| P5 Content/Launch | ~30 h |
| **Total** | **~260 h** (~5–6 sprint-weeks of 2 people) |

## Key dependencies & decision points

1. **Form service choice (before P3.1):** Formspree vs Web3Forms vs vendor SMTP —
   decide with the account owner; only a static-compatible endpoint required.
2. **Real figures for the home page (before P2.2b/P2.5b final copy):** the Proof
   Strip and Pricing Transparency Block need verified numbers (conversion lift,
   weeks to launch, projects shipped, satisfaction score, starting prices).
   Ranges OK ("6–10 weeks"); fabricated precision is not. Send figures once
   available — copy swaps in `src/lib/content/*.ts`.
3. **Content availability (gate for P2.12):** need ≥4 approved case studies and
   brand-approved imagery before building the portfolio views in final form.
3. **Analytics provider (P1.1/P4.6):** pick privacy-first provider; deploy opt-out.
4. **Font licensing:** confirm Geist/local files can ship with the static site.

## Risks

Same as BRD §11, with phase-gate owners assigned: portfolio content (marketing),
WebGL performance (eng), brand consistency (design), form delivery (eng/ops).