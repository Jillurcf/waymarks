# Waymark — Business Requirements Document (BRD)

- **Version:** 1.0 (Draft)
- **Project:** Waymark Company Website
- **Date:** 2026-08-19
- **Prepared by:** Product / Account (with Engineering review)
- **Basis:** Existing repository at `C:\waymark` (Next.js static export)
- **Reference point:** Digital product & UI/UX agencies (e.g. Musemind,
  https://musemind.agency/)

---

## 1. Executive summary

Waymark is a UI/UX and digital product design studio. Today the company has no
meaningful web presence — the repository contains only a "coming soon" page
with the Waymark logo, email, and phone number on a static Next.js export.

This initiative replaces that placeholder with a full marketing site that
positions Waymark as a premium, conversion-focused UI/UX agency, mirrors the
service breadth of leading peers (UI/UX, brand identity, web design &
development, SaaS and mobile product design, MVP builds), and drives qualified
inbound leads through a structured contact workflow.

The primary business metric is **qualified leads generated** (contact-form
submissions and booked discovery calls). The site must also build credibility
through a high-craft portfolio, transparent engagement/pricing information, and
a clean editorial design language that embodies the brand's "liquid metal" green
identity.

## 2. Business context & background

- **Current state:** A single static `src/app/page.tsx` rendering a centered
  logo, "Coming soon", `hello@waymarks.agency`, and `+971558965353`. A `Navbar`
  component and WebGL `MoltenMetal` shader component exist but are unused.
  The brand logo (`public/Waymarks_Logo-01.png`, 2457×435 horizontal lockup) is
  the only design asset.
- **Why now:** A studio selling design cannot convert leads without a portfolio.
- **Operating environment:** Static hosting; the team targets fast, low-ops
  deployments.

## 3. Business objectives

| Obj. | Objective                                          | Measured by                                                        | Target |
| ---- | -------------------------------------------------- | ----------------------------------------------------------------- | ------ |
| B1   | Establish a credible agency presence               | Live site, complete service & portfolio sections                   | In 90 days |
| B2   | Generate qualified inbound leads                   | Contact submissions / booked calls                                 | 10+/month at 6 months |
| B3   | Position premium positioning ("Design that moves") | Brand consistency pass in every page review                        | 100%   |
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

### In scope (v1)

- Home page (hero with signature background, services summary, selected work,
  stats/trust, testimonials, CTA).
- Services overview + individual service pages
  (UI/UX design, UX research/consulting, brand identity, web design &
  development, SaaS/product design, mobile app design, MVP builds).
- Work / Case studies overview + individual case-study pages.
- About page (process, team, values, locations).
- Pricing / engagement models page (transparent tiers or "project-based"
  guidance).
- Blog (category + article pages) to feed SEO; CMS-light via typed data or
  MDX content.
- Contact page with form + validation + form-service endpoint.
- Legal: Privacy policy, Terms & conditions.
- Footer (contact, quick links, reviews badges, socials, legal).
- Core SEO & social metadata (sitemap, robots, Open Graph).
- Analytics (first-party where possible, e.g. Vercel/Plausible).
- 404 page.

### Out of scope (v1, staged later)

- Multi-language/localized content.
- E-commerce, payments, member login/portal.
- Client dashboard or project management area.
- Headless CMS migration (evaluated, not committed).
- Native mobile apps / portfolio community portal.

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
| BR-5 | Design must strictly follow the Waymark brand skill (logo-derived identity: green liquid-metal accent, editorial layout). | High | B3 |
| BR-6 | Site must be statically exportable and deployable to any static host with zero server runtime. | High | B5/B6(ops) |
| BR-7 | Content (services, case studies, blog) must be updatable without editing component code. | Medium | B5 |
| BR-8 | Site must be findable: complete metadata, sitemap, robots, Open Graph on every page. | Medium | B4 |
| BR-9 | Performance budget: LCP < 2.5s on 4G, ≤ 200 KB JS per route.              | Medium    | B4       |
| BR-10 | Site must meet WCAG 2.1 AA (or A+ documented exception) for a11y.          | Medium    | B1, B3   |
| BR-11 | Analytics must capture page views and conversion events without slowing pages. | Low | B2, B4 |

## 10. Competitive benchmark (reference: Musemind)

| Capability                    | Musemind                       | Waymark target (v1)                       |
| ----------------------------- | ------------------------------ | ----------------------------------------- |
| Service breadth               | UI/UX, brand, web, SaaS, app, MVP, motion | Same core set, smaller set of pages |
| Trust signals                 | Clutch reviews, client logos, stats, testimonials | Stats, testimonials, case studies + logos |
| Contact workflow              | Multi-field form + Calendly     | Equivalent: form + direct book-a-call     |
| Design language               | Clean, premium, image-led       | Clean, premium, signature liquid-metal hero |
| Transparency                  | Pricing page, engagement models | Pricing / engagement models page           |

## 11. Risks & assumptions

| Risk                                                            | Impact | Mitigation                                    |
| --------------------------------------------------------------- | ------ | --------------------------------------------- |
| No portfolio content ready at launch                            | High   | Reuse client work early; document template + obtain approvals; ship with minimum 4–6 studies |
| Static export blocks server-side form handling                  | Med    | Use a form-service endpoint (Formspree/Web3Forms) with clean fallback; see SRS FR-12 |
| WebGL hero hurts performance on low-end devices                 | Med    | Feature-detect, cap DPR, fallback to static gradient image |
| Team bandwidth / external copywriting                           | Med    | Phase copywriting into plan; keep copy in content modules |
| Brand identity not fully documented (logo is the only asset)    | Med    | Lock palette/type/tone in the brand skill and design tokens before build |
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

*Traceability: BR-IDs above are referenced by FR-IDs in `.spec/SRS.md`.*