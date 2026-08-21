# Waymark — Software Requirements Specification (SRS)

- **Version:** 1.1
- **Project:** Waymark Company Website
- **Date:** 2026-08-21
- **Status:** Active — implemented via `docs/implementation-plan.md` (milestones M0–M5)
- **Applies to:** `C:\waymarks` repository, Next.js 16 App Router, static export

---

## 1. Introduction

### 1.1 Purpose
Define the functional and non-functional requirements for the Waymark marketing
website to the level of testable acceptance criteria. This document is the
contract between stakeholder intent (BRD) and implementation (docs/).

### 1.2 Scope
A static, multi-page marketing site: Home, Services, Work/Case Studies, About,
Pricing/Engagements, Blog, Contact, Legal pages, and supporting SEO, analytics,
and 404 handling. No authenticated areas, payments, or server runtime.
The implementation converts the `html_version/` HTML template's structure into
this app; template pages not listed in §3 are folded or dropped (see §3 notes).

### 1.3 Document conventions
Requirement IDs: `FR-n` (functional), `NFR-n` (non-functional). Each maps to
acceptance criteria `AC-<ID>-x` and, where applicable, a BRD `BR-n` objective.

### 1.4 References
- `.spec/BRD.md` — business context and objectives.
- `docs/architecture.md` — technical design constraints.
- `.skill/waymark-ui-ux/design-system.md` — visual and component rules.
- `docs/implementation-plan.md` — conversion mapping and phased delivery.
- `node_modules/next/dist/docs/01-app/02-guides/static-exports.md` — static
  export constraints (authoritative for this Next.js version).

## 2. Overall description

### 2.1 Product perspective
Evolution of the existing static export. The Artistic HTML template
(`html_version/`) supplies the page inventory and section structure; the
Waymark brand skill supplies every visual decision; the existing stack
(Next.js 16 App Router, React 19, TypeScript 5, Tailwind CSS v4, shadcn/ui,
`ogl`) supplies the implementation. jQuery-era template dependencies are all
replaced (see `docs/implementation-plan.md` §3).

### 2.2 Users
Visitors (clients, founders, design leaders), search engines, the internal
team (content editors via code+data modules), and QA.

### 2.3 Operating environment
- Static export (`next.config.ts`: `output: "export"`, `trailingSlash: true`).
- Deployed to any static host (Netlify/Vercel/GH Pages/nginx/S3).
- Modern evergreen browsers (last 2 versions); no legacy IE support.

### 2.4 Constraints
- No server runtime: no API routes, no on-demand revalidation, no DB.
- Forms must use an external form endpoint or client-side mail fallback.
- Builds run in CI without network guarantees → fonts/images must self-host.
- Brand assets are limited; design tokens are locked before UI build.
- Template dummy copy, stock photography, and logos must never ship (BR-5).

### 2.5 Assumptions
Per BRD §11. Single language, mobile-first, ~50%+ mobile traffic.

## 3. Information architecture (routes)

```
/                      Home
/services               Services overview
/services/[slug]        Service detail
/work                   Case studies overview
/work/[slug]            Case study detail
/about                  About + process + team (absorbs template team page)
/pricing                Pricing / engagement models
/blog                   Blog index
/blog/[slug]            Article
/contact                Contact + form
/privacy                Privacy policy
/terms                  Terms & conditions
/404                    Fallback (static out/404.html)
```

Template-page decisions: `faqs.html`, `testimonial.html`, `team.html`,
`team-single.html` are **folded** into the routes above as reusable blocks;
`image-gallery.html` and `video-gallery.html` are **dropped** from v1.

Navigation groups (navbar): Home, Services (dropdown), Work, About, Blog,
Pricing; right-side: Contact CTA + contact offcanvas panel (phone/email/
address/socials). Mobile: slide-in sheet with grouped items.

## 4. Functional requirements

### 4.1 Navigation & shell

| ID   | Requirement                                                                          | AC |
| ---- | ------------------------------------------------------------------------------------ | --- |
| FR-1 | Sticky header with brand lockup, nav items, contact CTA, contact offcanvas panel, and mobile sheet menu. | AC-FR1-1..5 |
| FR-2 | Active route is visually indicated (aria-current); keyboard navigable.               | AC-FR2-1 |
| FR-3 | Footer exposes work-together CTA band, contact, quick links (services, work, about), social links, and legal links. Newsletter slot appears only when an endpoint exists (FR-23). | AC-FR3-1 |
| FR-4 | Every page renders a visible contact CTA (button or block) except 404/legal.         | AC-FR4-1 |

### 4.2 Home page

Section order follows the template (`docs/implementation-plan.md` M2).

| ID    | Requirement                                                             | AC |
| ----- | ----------------------------------------------------------------------- | --- |
| FR-5  | Hero with eyebrow, headline, subcopy, primary CTA + phone box, and signature animated background (MoltenMetal with graceful fallback; replaces the template's stock video). | AC-FR5-1..3 |
| FR-6  | Trust strip: client logo ticker (CSS marquee) plus stats/facts counters. | AC-FR6-1 |
| FR-7  | Services summary rows (≥6) linking to service pages.                    | AC-FR7-1 |
| FR-8  | Selected work (3–6) linking to case studies.                            | AC-FR8-1 |
| FR-9  | Testimonials (+ rating), stats section, FAQ block, blog teaser, and closing CTA band. | AC-FR9-1..3 |

### 4.3 Services

| ID   | Requirement                                                              | AC |
| ---- | ------------------------------------------------------------------------ | --- |
| FR-10 | Services overview lists all services with icon, blurb, image, and link. | AC-FR10-1 |
| FR-11 | Service detail pages: overview, methodology/process steps, deliverables, FAQs, sidebar CTA. | AC-FR11-1..3 |
| FR-12 | Contact form collects: full name, email, company, service, budget range, message; validates client-side and posts to form service with success/error states and accessibility announcements. | AC-FR12-1..6 |

### 4.4 Work / Case studies

| ID   | Requirement                                                              | AC |
| ---- | ------------------------------------------------------------------------ | --- |
| FR-13 | Work overview: filterable grid of case studies (by service/sector); filter state accessible via keyboard. | AC-FR13-1 |
| FR-14 | Case study detail: hero image, meta sidebar (client/sector/services/year), challenge, approach, outcome metrics, related work, CTA. | AC-FR14-1..3 |

### 4.5 About / Pricing / Blog

| ID   | Requirement                                                              | AC |
| ---- | ------------------------------------------------------------------------ | --- |
| FR-15 | About: story/founder block, values/benefits, process, facts counters, team grid, testimonials, locations, CTA. | AC-FR15-1 |
| FR-16 | Pricing: engagement models/tiers with one highlighted tier, guidance text, benefit row, starting prices or ranges, FAQs, contact CTA. | AC-FR16-1 |
| FR-17 | Blog: index with cards (title, date, excerpt, reading time) and article pages with structured content, tags, and metadata. | AC-FR17-1..3 |

### 4.6 SEO, metadata & assets

| ID   | Requirement                                                              | AC |
| ---- | ------------------------------------------------------------------------ | --- |
| FR-18 | Every page emits title, description, canonical, Open Graph/Twitter, and JSON-LD where applicable (ProfessionalService, FAQPage matching visible text, Service, Article, BreadcrumbList). | AC-FR18-1..3 |
| FR-19 | Static `sitemap.xml` and `robots.txt` generated from route map at build.  | AC-FR19-1 |
| FR-20 | All images carry descriptive alt text; decorative images flagged as such. | AC-FR20-1 |
| FR-21 | All assets self-hosted (fonts, images, icons); no third-party render-blocking requests on critical path. | AC-FR21-1 |

### 4.7 Analytics & optional capture

| ID   | Requirement                                                              | AC |
| ---- | ------------------------------------------------------------------------ | --- |
| FR-22 | Privacy-respecting page-view analytics and two conversion events (form submit, book-call click) with opt-out. | AC-FR22-1 |
| FR-23 | Footer newsletter capture (single email field → form provider). Deferred until a provider endpoint exists; hidden until then. | AC-FR23-1 (when enabled) |

## 5. Non-functional requirements

| ID    | Requirement                                                                     | AC |
| ----- | ------------------------------------------------------------------------------- | --- |
| NFR-1 | Performance: LCP < 2.5s (4G), TBT < 200 ms, ≤ 200 KB JS per route (desktop Lighthouse). No preloader. | AC-NFR1-1..3 |
| NFR-2 | Accessibility: WCAG 2.1 AA — semantics, focus order, visible focus, contrast 4.5:1 (3:1 large), reduced-motion respected, ARIA where needed (accordions, filters, offcanvas, carousel). | AC-NFR2-1..4 |
| NFR-3 | Compatibility: last 2 evergreen versions of Chrome, Edge, Firefox, Safari; iOS/Android browsers; responsive 320–1920 px. | AC-NFR3-1 |
| NFR-4 | Resilience: form/analytics failures never block content; WebGL fallback; 404 for unknown routes. | AC-NFR4-1..3 |
| NFR-5 | Maintainability: content in typed data modules; components in `src/components`; tokens only from design system; zero inline hex values. | AC-NFR5-1..3 |
| NFR-6 | Security: no secrets in client bundle; dependency audit clean (npm audit); CSP headers configured at host for static assets. | AC-NFR6-1 |
| NFR-7 | Reliability: 100% uptime of static host, deterministic builds (same commit → same `out/`), reproducible installs (lockfile). | AC-NFR7-1..2 |
| NFR-8 | Observability/deployment: deployable via CI in < 5 min with rollback to previous artifact. | AC-NFR8-1 |

## 6. External interfaces

| Interface          | Description                                                                    |
| ------------------ | ------------------------------------------------------------------------------ |
| Form service       | POST JSON to provider (Formspree/Web3Forms or equivalent) with email delivery; timeout + error handling; honeypot spam field. |
| Analytics service  | Privacy-first script or lightweight beacon; respects consent/opt-out.          |
| Fonts              | Self-hosted vendored `.woff2` files via `next/font/local`.                     |
| Map embed          | Lazy Google Maps `<iframe>` on /contact (or static map + link — TBD).          |
| Review badges      | Static links/images to Clutch/GoodFirms/Dribbble/Behance profiles.             |
| Calendly / booking | Link for "Book a call" (optional, deferred), opened in new tab.                |

## 7. Data & content model

```ts
// Content modules (src/lib/content/*.ts)
type Service = { slug; title; icon; summary; deliverables: string[]; process; faqs: {q;a}[]; };
type CaseStudy = { slug; client; sector; services: string[]; year; cover; challenge; approach; outcome: string[]; metrics: {label; value}[]; gallery: string[]; related: string[]; };
type Post = { slug; title; date; excerpt; readingTime; body: string /* or MDX */; tags: string[]; };
type Testimonial = { quote; author; role; company; source };
type Stat = { label; value; suffix? };
type TeamMember = { name; role; photo; bio? };
```

Contact submission shape: `{ name, email, company, service, budget, message, _honeypot }`.

## 8. Use cases (primary flows)

1. **Visitor → lead:** Browse work → read service → contact form → submit →
   success state → email notification → sales reply < 24h.
2. **SEO discovery:** Google → service page → reads methodology → CTA → contact.
3. **Visitor research:** Home → facts/testimonials → About/process → book a call.
4. **Content editor:** Update case study in data module → commit → CI build →
   deploy → verify page.

## 9. Acceptance criteria (key items)

| AC | Criterion |
| -- | --------- |
| AC-FR5-1 | Hero renders without the WebGL effect when WebGL is unavailable or hardware acceleration is off; animated variant and static fallback look equivalent at rest. |
| AC-FR5-2 | With `prefers-reduced-motion: reduce`, Hero serves the static/gradient variant, the ticker stops auto-scrolling, reveals/counters render final states, and no animation loop runs. |
| AC-FR12-1 | Form validates email format and required fields inline; error messages are announced via `aria-live`. |
| AC-FR12-2 | Successful submit shows a clear success message and clears only the message field (or full form per spec); failure shows a retry message. |
| AC-FR13-1 | Work filters operate by keyboard and announce result counts. |
| AC-FR18-1 | Each route returns a unique title/description and canonicals to the trailing-slash URL. |
| AC-FR19-1 | `out/sitemap.xml` lists every index route (public URL) and `robots.txt` disallows nothing public. |
| AC-NFR1-1 | Lighthouse (desktop, throttled 4G) LCP < 2.5s and total JS < 200 KB per unique route. |
| AC-NFR2-1 | Full keyboard walkthrough of header, offcanvas panel, menus, accordions, filters, forms, and 404 reach all controls with visible focus. |
| AC-BR5-1 | Zero template placeholder strings, stock photos, or raw hex values ship in `src/` or `public/` (grep-verified). |
| AC-NFR4-1 | With the form endpoint unreachable, the UI shows a graceful error and offers an email fallback (`mailto:` prefilled). |
| AC-NFR7-1 | Two consecutive clean builds produce identical `out/` byte-for-byte (excluding timestamps). |

## 10. Traceability matrix (key BR→FR)

| BR  | FR(s)                                      |
| --- | ------------------------------------------ |
| BR-1 | FR-1..FR-19                               |
| BR-2 | FR-4, FR-11, FR-14, FR-15, FR-16          |
| BR-3 | FR-12, FR-22                              |
| BR-4 | FR-8, FR-13, FR-14                        |
| BR-5 | design tokens + skill gates (FR-5, FR-11, FR-20, AC-BR5-1) |
| BR-6 | NFR-4, NFR-7, FR-19                       |
| BR-7 | NFR-5, content model §7                   |
| BR-8 | FR-18, FR-19, FR-21                       |
| BR-9 | NFR-1                                     |
| BR-10 | NFR-2, FR-20                             |
| BR-11 | FR-22                                    |

## 11. Glossary / abbreviations

- **LCP / TBT:** Core Web Vitals (Largest Contentful Paint, Total Blocking Time).
- **MDX:** Markdown + JSX content format.
- **OG:** Open Graph social metadata.
- **Static export:** `next build` output of HTML/CSS/JS with no server runtime.
- **A11y:** accessibility.
- **Trailing slash routing:** URL shape `about/` mapped to `out/about/index.html`.
- **Folded page:** template page rendered as a reusable block inside another
  route rather than as its own URL.

---

*Changelog v1.1: design source switched to the Artistic template conversion;
§3 fold/drop decisions recorded; FR-1/FR-3 amended (offcanvas panel, newsletter
slot); FR-6/FR-9/FR-15 reworded for template sections; FR-23 added; NFR-1/2
amended (no preloader, motion primitives); AC-BR5-1 added.*
