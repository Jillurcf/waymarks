# Waymark — Content Guide & Inventory

The content layer of the site. Copy rules live in
`.skill/waymark-ui-ux/content.md`; this doc covers structure, inventory, and
migration from the current placeholder.

## Sitemap (v1)

```
/                     Home
/services             Services overview
/services/ui-ux-design
/services/brand-identity
/services/web-design-development
/services/saas-product-design
/services/mobile-app-design
/services/mvp-builds
/work                 Case studies (6 launch)
/work/<client-slug>   Case study detail
/about                About, process, team, locations
/pricing              Engagement models & pricing
/blog                 Blog index
/blog/<post-slug>     Article (6 launch)
/contact              Contact + form
/privacy              Privacy policy
/terms                Terms & conditions
/404                  Static 404
```

Routes must be added to `src/lib/routes.ts` when created (nav, footer, sitemap,
breadcrumbs all read from it).

## Content ownership & format

| Content type | Location (typed module / files)                  | Maintained by  |
| ------------ | ------------------------------------------------ | -------------- |
| Services     | `src/lib/content/services.ts`                    | Design / Product |
| Case studies | `src/lib/content/case-studies.ts`                | Account / Design |
| Testimonials | `src/lib/content/testimonials.ts`                | Account        |
| Stats/trust  | `src/lib/content/stats.ts`                       | Account        |
| Blog posts   | `content/blog/*.md` (MDX)                        | Marketing      |
| Legal        | `src/app/privacy/page.tsx` etc.                  | Legal / Founders |

## Launch content inventory (targets from BRD)

| Item            | Count | Owner        | Needed by (phase) |
| --------------- | ----- | ------------ | ----------------- |
| Case studies    | ≥ 6   | Account      | P2.12 (day ~31)   |
| Client logos    | ≥ 8   | Account      | P2.2              |
| Testimonials    | 3–5   | Account      | P2.5              |
| Services copy   | 6–8   | Product/Design | P2.7–P2.9      |
| Blog articles   | 4–6   | Marketing    | P3.5              |
| Team/location info | 1 set | Founders   | P2.13             |
| Pricing/engagement | 1 set | Founders   | P2.14             |
| Imagery (hero, portfolio thumbnails) | 15–30 | Design | P2.x/ P5.2 |

Every asset: compressed for web, sized near render size, descriptive alt,
brand-approved (green coverage ≤ 10%).

## Migration from the placeholder page

Current placeholder content to carry forward:

| Element | Destination |
| ------- | ----------- |
| Logo lockup `public/Waymarks_Logo-01.png` | Header/footer/OG image |
| Email `hello@waymarks.agency` | Contact page, footer, metadata |
| Phone `+971558965353` → `+971 55 896 5353` | Contact page, footer, schema |
| MoltenMetal brand colors | Design tokens (`globals.css`) |
| "Coming soon" → replaced | Hero headline/copy in Phase 2 |
| Navbar components (`navbar.tsx`, ui/*) | Reused in Phase 1 shell |

## Editorial calendar (SEO cadence)

- 4–6 launch articles, then 2/month (P3.5 onwards).
- Topics aligned to service pages: "Designing a B2B SaaS onboarding flow",
  "When to invest in UX research", "Brand identity beyond the logo",
  "Static-site performance for agency sites", etc.
- Each article targets one primary keyword (found in the service it supports)
  and links to one case study + one service page.

## Content QA

- Written against `.skill/waymark-ui-ux/content.md` tone rules.
- Proofread by a second person; English UK.
- Factual claims (metrics, years, client names) verified before publish.
- Alt text + metadata (title ~60 chars, description ~150 chars) mandatory.