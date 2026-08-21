# Waymark — Business Requirements Document (BRD)

- **Version:** 1.1
- **Project:** Waymark Company Website
- **Date:** 2026-08-21
- **Prepared by:** Product / Account (with Engineering review)
- **Basis:** existing Next.js static export at `C:\waymarks`
- **Design source:** `html_version/` — "Artistic" design-agency HTML template
  (structure and interactions only; styling is re-skinned to the Waymark brand)

---

## 1. Executive summary

Waymark is a UI/UX and digital product design studio. The repository already
contains a working static Next.js marketing site with a conversion-focused
home page, typed content modules, and the brand's liquid-metal green identity.

This initiative aligns the site's information architecture and page inventory
with the purchased "Artistic" design-agency template (captured in
`html_version/`): its section structure, page types, and interaction patterns
are ported into the existing Next.js app milestone-wise, while every visual
decision is re-skinned to the Waymark brand skill (green molten-metal accent,
Geist typography, editorial restraint). The template's placeholder copy,
stock imagery, and jQuery-era dependencies never ship.

The primary business metric remains **qualified leads generated**
(contact-form submissions and booked discovery calls). The site must build
credibility through a high-craft portfolio, transparent engagement/pricing
information, and a clean editorial design language that embodies the brand's
"liquid metal" green identity.

## 2. Business context & background

- **Current state:** A functional Next.js 16 static export: home page with
  hero (MoltenMetal WebGL), services/work/testimonials/pricing/FAQ sections,
  typed content modules under `src/lib/content/`, route map, sitemap/robots.
  Brand assets: logo lockup (`public/Waymarks_Logo-01.png`, 2457×435) and the
  green palette encoded in `globals.css` tokens.
- **Change driver:** The team acquired the Artistic template and wants its
  proven agency-site structure (hero + ticker + about intro + service rows +
  why-choose + projects + process + facts + pricing + testimonials + FAQ +
  blog) as the site blueprint, executed in the existing stack.
- **Operating environment:** Static hosting; the team targets fast, low-ops
  deployments.

## 3. Business objectives

| Obj. | Objective                                          | Measured by                                                        | Target |
| ---- | -------------------------------------------------- | ----------------------------------------------------------------- | ------ |
| B1   | Establish a credible agency presence               | Live site, complete service & portfolio sections                   | In 90 days |
| B2   | Generate qualified inbound leads                   | Contact submissions / booked calls                                 | 10+/month at 6 months |
| B3   | Maintain premium positioning ("Design that moves") | Brand consistency pass in every page review                        | 100%   |
| B4   | Support SEO discovery                              | indexed service & portfolio pages, Lighthouse SEO ≥ 90             | 12 weeks |
| B5   | Enable low-effort content updates                  | Content editable from typed data modules without code shuffles     | By launch |

## 4. Success metrics (KPIs)

- **Primary:** Qualified lead submissions per month (target 10+ by month 6).
- **Secondary:**
  - Bounce rate < 45% on landing pages.
  - Average session duration ≥ 90s on portfolio pages.
  - Lighthouse performance ≥ 90, accessibility ≥ 95 (desktop).
  - Page load (LCP) < 2.5s on 4G; exported site below 200 KB of JS per route.
  - Search console impressions growing month-over-month on service queries.

## 5. Target audience & personas

| Persona | Profile | Mindsets / needs                                        | Site job-to-be-done               |
| ------- | ------- | ------------------------------------------------------- | --------------------------------- |
| Founder | Startup founder, pre-seed–Series A | Fast validation, direction, trust, speed | See proof + reach out quickly |
| PM/Design lead | Building a product or redesign | Quality bars, process, ROI, reliability | See process + engage on scope |
| Enterprise buyer | Need re-platforming / design system | Compliance, scale, case studies, credibility | Download info / book a call |
| Talent/partner | Looking to collaborate or join | Real work, culture, vibe | Explore work + careers/contact |

## 6. Value proposition

> Waymark turns complex product ideas into clear, high-craft digital
> experiences — from strategy and research through UI/UX, brand, and build.

Key differentiators vs peers: integrated strategy→design→build under one roof,
a distinctive liquid-metal visual identity, and honest engagement transparency.

## 7. Scope

### In scope (v1.1 — template conversion)

- Home page rebuilt in the template's section order (hero with MoltenMetal
  backdrop replacing the template video, logo ticker, about intro, service
  rows, what-we-do, why-choose, projects, process steps, facts/counters,
  pricing teaser, testimonials, FAQ, blog teaser).
- Services overview + individual service pages (6 services).
- Work / Case studies overview (filterable) + individual case-study pages.
- About page absorbing the template's team grid (no per-member pages in v1).
- Pricing / engagement models page (transparent tiers or ranges).
- Blog index + article pages to feed SEO; CMS-light via typed data or MDX.
- Contact page with form + validation + form-service endpoint (+ map embed).
- FAQ blocks (grouped accordion) on home/pricing/services — the template's
  dedicated FAQs page is folded into these.
- Legal: Privacy policy, Terms & conditions.
- Footer (work-together CTA band, contact, quick links, socials, legal).
- Core SEO & social metadata (sitemap, robots, Open Graph, JSON-LD).
- Analytics (privacy-first).
- On-brand 404.

### Out of scope (v1.1, staged later)

- Image/video gallery pages (template's `image-gallery.html`,
  `video-gallery.html`) — revisit post-launch.
- Team member single pages.
- Multi-language/localized content.
- E-commerce, payments, member login/portal.
- Headless CMS migration (evaluated, not committed).

## 8. Stakeholders

| Stakeholder   | Role in project                                | Needs                                   |
| ------------- | ---------------------------------------------- | --------------------------------------- |
| Founders      | Approve strategy, budgets, brand               | Leads, reputation, control              |
| Design team   | Provide portfolio, craft the system            | Design-system fidelity, motion showcase |
| Engineering   | Implement, own performance & a11y              | Clear specs, static-export constraints  |
| Marketing/SEO | Drive traffic, content roadmap                 | Structured content, metadata            |
| Future clients| End users of the site                          | Trust, clarity, fast contact            |

## 9. Business requirements

| ID   | Requirement                                                              | Priority | Objective |
| ---- | ------------------------------------------------------------------------ | -------- | --------- |
| BR-1 | Site must publish a complete, launch-ready marketing presence in ≤ 90 days | High     | B1, B2    |
| BR-2 | Every service/work/about page must end in a contact call-to-action.       | High     | B2        |
| BR-3 | Contact workflow must capture name, email, company, service, budget, message and reply within 24h. | High | B2, B1 |
| BR-4 | Portfolio must show ≥ 6 case studies with outcomes at launch.            | High     | B1, B3    |
| BR-5 | Design must strictly follow the Waymark brand skill; the HTML template contributes structure only — its colors, fonts, dummy copy, and stock assets never ship. | High | B3 |
| BR-6 | Site must be statically exportable and deployable to any static host with zero server runtime. | High | B5/B6(ops) |
| BR-7 | Content (services, case studies, blog) must be updatable without editing component code. | Medium | B5 |
| BR-8 | Site must be findable: complete metadata, sitemap, robots, Open Graph on every page. | Medium | B4 |
| BR-9 | Performance budget: LCP < 2.5s on 4G, ≤ 200 KB JS per route; the conversion must not regress it (no preloader, no jQuery-era libraries). | Medium | B4 |
| BR-10 | Site must meet WCAG 2.1 AA (or A+ documented exception) for a11y.          | Medium    | B1, B3   |
| BR-11 | Analytics must capture page views and conversion events without slowing pages. | Low | B2, B4 |

## 10. Competitive benchmark

| Capability                    | Peer agencies                  | Waymark target (v1.1)                     |
| ----------------------------- | ------------------------------ | ----------------------------------------- |
| Service breadth               | UI/UX, brand, web, SaaS, app, MVP | Same core set, one page per service     |
| Trust signals                 | Clutch reviews, client logos, stats, testimonials | Stats, testimonials, case studies + ticker |
| Contact workflow              | Multi-field form + Calendly    | Equivalent: form + direct book-a-call     |
| Design language               | Clean, premium, image-led      | Template structure + signature liquid-metal identity |
| Transparency                  | Pricing page, engagement models | Pricing / engagement models page         |

## 11. Risks & assumptions

| Risk                                                            | Impact | Mitigation                                    |
| --------------------------------------------------------------- | ------ | --------------------------------------------- |
| Template look creeping in (off-brand accents, glow, rounded-everything) | High | Quality gate A per PR; skill tokens only; grep diffs for raw hex |
| Scraped template assets carrying license risk                   | High   | Never ship template photography/logos; replacement register in implementation plan §5 |
| No portfolio content ready at launch                            | High   | Ship with minimum 4–6 studies; seed values marked `SEED` until verified |
| Static export blocks server-side form handling                  | Med    | Use a form-service endpoint (Formspree/Web3Forms) with clean fallback; see SRS FR-12 |
| Motion/animation bloat (template ships 12 JS libraries)         | Med    | Only Reveal/CountUp/carousel primitives; bundle budget checked each milestone |
| WebGL hero hurts performance on low-end devices                 | Med    | Feature-detect, cap DPR, fallback to static gradient image |
| Search rankings take months regardless of site quality          | Low    | Set expectation in KPI: impressions 90-day horizon |
| Next.js 16 conventions differ from training assumptions         | Low    | All work reads `node_modules/next/dist/docs/` first (see AGENTS.md) |

**Assumptions:** static export stays the deployment model; single language
(English); no backend migration in scope; mobile traffic ~50%+.

## 12. Approvals

| Role          | Name         | Sign-off | Date |
| ------------- | ------------ | -------- | ---- |
| Product/Account | (pending)  |          |      |
| Engineering     | (pending)  |          |      |
| Design          | (pending)  |          |      |

---

*Traceability: BR-IDs above are referenced by FR-IDs in `.spec/SRS.md`.
Changelog v1.1: design source changed from musemind reference to Artistic
template conversion; galleries/team-singles moved out of scope; BR-5/BR-9
amended for conversion guardrails.*
