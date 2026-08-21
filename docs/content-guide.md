# Waymark — Content Guide & Inventory

The content layer of the site. Copy rules live in
`.skill/waymark-ui-ux/content.md`; this doc covers structure, inventory, and
the replacement of the HTML template's placeholder copy.

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

Template pages folded into the above (final for v1): `faqs.html` → FAQ blocks
on home/pricing/services; `team.html`/`team-single.html` → team grid on
About; `testimonial.html` → testimonial blocks on home/about/services;
`image-gallery.html`/`video-gallery.html` → dropped.

Routes must be added to `src/lib/routes.ts` when created (nav, footer, sitemap,
breadcrumbs all read from it).

## Content ownership & format

| Content type | Location (typed module / files)                  | Maintained by  |
| ------------ | ------------------------------------------------ | -------------- |
| Site identity (name, contact, socials) | `src/lib/content/site.ts` | Founders |
| Home sections | `src/lib/content/home.ts`                      | Product/Design |
| Services     | `src/lib/content/services.ts`                    | Design / Product |
| Case studies | `src/lib/content/case-studies.ts`                | Account / Design |
| Testimonials | `src/lib/content/testimonials.ts`                | Account        |
| Stats/trust  | `src/lib/content/stats.ts`                       | Account        |
| Team         | `src/lib/content/team.ts`                        | Founders       |
| Blog posts   | `src/lib/content/posts.ts` (or MDX collection)   | Marketing      |
| Legal        | `src/app/privacy/page.tsx` etc.                  | Legal / Founders |

## Launch content inventory (targets from BRD)

| Item            | Count | Owner        | Needed by (task)  |
| --------------- | ----- | ------------ | ----------------- |
| Case studies    | ≥ 4–6 | Account      | C4.6              |
| Client logos/wordmarks | ≥ 6 | Account | C1.4              |
| Testimonials    | 3–5   | Account      | M2 (block 11)     |
| Services copy   | 6     | Product/Design | C3.2–C3.3       |
| Blog articles   | 4–6   | Marketing    | C4.6              |
| Team/founder info | 1 set | Founders   | C3.1              |
| Pricing/engagement ranges | 1 set | Founders | C3.6           |
| Verified stats (proof strip) | 4 | Account | M2 (block 9)      |
| Imagery (hero-adjacent, portfolio thumbnails, blog covers) | 15–30 | Design | per milestone |

Every asset: compressed for web, sized near render size, descriptive alt,
brand-approved (green coverage ≤ 10%). **Scraped template photography never
ships** — license and brand risk.

## Placeholder-copy replacement register

The template ships dummy copy that must not survive. The authoritative register
lives in `docs/implementation-plan.md` §5; summary:

- Pricing "$29/$39/$49", "25+ years", "8k+ awards", "500+ customers" → real,
  verified figures or honest ranges (`SEED` until provided).
- Fake people ("sarah mitchell", "emily williams"…) → real founder/team/client
  identities with approval.
- Repeated service blurb ("Crafting logos, color palettes…") → per-service
  outcome-led summaries.
- Contact "+123 456 789" / "info@domainname.com" / London address →
  `hello@waymarks.agency`, `+971 55 896 5353`, real address.

Grep guard before launch: search `src/` for these strings — zero hits expected.

## Migration from the current home page

The existing Next.js home (musemind-style conversion layout) is superseded by
the template's section order (M2). Assets and modules carried forward:

| Element | Destination |
| ------- | ----------- |
| Logo lockup `public/Waymarks_Logo-01.png` | Header/footer/OG image |
| Email `hello@waymarks.agency`, phone `+971 55 896 5353` | `site.ts` → header offcanvas, footer, contact, schema |
| MoltenMetal hero + tokens | Hero block 1 (replaces template video) |
| Typed content modules | Same modules feed the rebuilt sections |
| Navbar + ui primitives | Shell (M1), extended with contact offcanvas |

## Editorial calendar (SEO cadence)

- 4–6 launch articles, then 2/month (C4.6 onwards).
- Topics aligned to service pages: "Designing a B2B SaaS onboarding flow",
  "When to invest in UX research", "Brand identity beyond the logo",
  "Static-site performance for agency sites", etc.
- Each article targets one primary keyword (found in the service it supports)
  and links to one case study + one service page.

## Content QA

- Written against `.skill/waymark-ui-ux/content.md` tone rules (UK English,
  short sentences, no anti-glossary terms).
- Proofread by a second person.
- Factual claims (metrics, years, client names) verified before publish;
  unverified values stay marked `SEED` and are stripped at C5.4.
- Alt text + metadata (title ~60 chars, description ~150 chars) mandatory.
