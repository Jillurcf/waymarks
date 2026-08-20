# Waymark — Release Checklist (Pre-Launch Gate)

Run the full checklist before every production deploy. Blocking items must pass;
non-blocking items must have an explicit decision/owner.

## 1. Functional completeness

- [ ] Every route in the sitemap builds and serves 200 (spot check nested routes).
- [ ] All page-to-page CTA links resolve (`npm run build` reports no 404s internally).
- [ ] Contact form end-to-end proven against the production form endpoint.
- [ ] 404 page tested (unknown URL returns styled 404, status 404 at host).

## 2. Content & brand

- [ ] Copy passes the tone rules (`.skill/waymark-ui-ux/content.md`) and has no
      TODOs/lorem or stale "coming soon".
- [ ] Logo used correctly on light and dark surfaces; alt text present.
- [ ] Palette compliance: no off-token hex values (grep `#[0-9a-fA-F]{3,6}` in diffs).
- [ ] All images compressed, sized, alt-annotated. Social OG image present.
- [ ] Contact details correct in footer, contact page, and schema
      (`hello@waymarks.agency`, `+971 55 896 5353`).

## 3. SEO

- [ ] `out/sitemap.xml` lists all public routes; `robots.txt` correct.
- [ ] Every route has unique title + description; canonicals point to
      trailing-slash URLs.
- [ ] Structured data present: Organization (home), Article (blog), Service,
      BreadcrumbList — validated (Google Rich Results / schema.org validator).

## 4. Accessibility

- [ ] Full keyboard walkthrough of nav, menus, forms passes (AA).
- [ ] ax-core scan reports 0 critical/serious issues.
- [ ] Contrast AA on all button/link pairs (green-primary combinations verified).
- [ ] `prefers-reduced-motion` disables hero animation gracefully.

## 5. Performance

- [ ] Lighthouse desktop ≥ 90 (perf) / ≥ 95 (a11y) / ≥ 90 (best-practices);
      mobile perf ≥ 85.
- [ ] Per-route JS ≤ 200 KB (gzip); LCP < 2.5 s on throttled 4G.
- [ ] No render-blocking third-party requests; fonts self-hosted.
- [ ] No layout shift on image-rich pages (CLS < 0.1).

## 6. Security & privacy

- [ ] No secrets/env files committed; client bundle contains no keys.
- [ ] `npm audit` clean (or documented exceptions with owners).
- [ ] CSP/headers configured at host (default-src 'self'; restricted script/style).
- [ ] Privacy policy and terms reviewed and published; analytics opt-out visible.

## 7. Operations

- [ ] CI build reproducible; `out/` artifact archived for rollback.
- [ ] Deploy plan documented (`.command/deploy.md`) and dry-run done on preview.
- [ ] Post-deploy smoke test: `/`, a service page, a case study, an image
      asset, and a 404.
- [ ] Monitoring/alerting (uptime + form endpoint) configured; contact inbox
      receiving test form submissions.

## 8. Sign-off

| Area        | Approver     | Status |
| ----------- | ------------ | ------ |
| Product     | (pending)    | [ ]    |
| Design      | (pending)    | [ ]    |
| Engineering | (pending)    | [ ]    |
| Legal/Marketing | (pending) | [ ]    |

Approve only when all blocking items are green.
Release version + date + commit hash recorded in the release notes.