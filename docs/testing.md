# Waymark — Testing Strategy & QA Matrix

QA is layered: automated gates run on every build; manual QA runs per
milestone; launch QA is scripted from the release checklist.

## 1. Automated gates (every commit / CI)

| Gate            | Command              | Enforced       |
| --------------- | -------------------- | -------------- |
| Type safety     | `npx tsc --noEmit`   | CI + pre-ship  |
| Lint            | `npm run lint`       | CI + pre-ship  |
| Static build    | `npm run build`      | CI            |
| Dependencies    | `npm audit`          | CI            |
| Bundle check    | compare per-route size vs 200 KB budget | CI (alert only) |
| Brand tokens    | grep diff for raw hex/`rgb(`/`oklch(` outside token files | PR review + CI (alert) |
| Placeholder copy| grep `src/` for template dummy strings (`docs/implementation-plan.md` §5) | CI content lint |

## 2. Test matrix (maps SRS AC → method)

| AC/section         | Test method                                   | Instrument        |
| ------------------ | --------------------------------------------- | ----------------- |
| AC-FR5-1, -2       | MoltenMetal on/off, reduced-motion on/off, static fallback parity | Playwright + manual |
| AC-FR12-1..6, NFR-4-2 | Form validation, submit ok/error, slow/offline, honeypot, mailto fallback | Playwright + browser devtools |
| AC-FR18-1, FR-19-1 | Metadata on every route; sitemap/robots crawl | Playwright + scripted checker |
| NFR-1              | LCP/TBT on throttled 4G; per-route JS size    | Lighthouse CI     |
| NFR-2              | Keyboard walkthrough incl. accordions, work filters, offcanvas panel, mobile sheet; contrast; focus; ARIA | axe-core + manual |
| NFR-3              | Latest 2 versions desktop Chrome/Edge/Firefox/Safari + iOS/Android | Playwright matrix + Device Farm optional |
| NFR-4-3            | Unknown route → styled 404, no crash          | Playwright         |
| NFR-7-1            | Two clean builds produce byte-identical `out/` | CI job           |
| Motion primitives  | `Reveal`/`CountUp` fire once, no layout shift, disabled under reduced-motion | Playwright + manual |
| Content (all)      | Copy spec, alt text, no lorem/TODO/`SEED`, no template strings | Lint-style grep + review |

## 3. Manual QA per milestone (checklist)

**M1 (shell):** header/footer bands at 320/768/1280/1920 px; contact offcanvas
focus trap; ticker pauses under reduced-motion; skip-to-content; footer links;
404 renders.

**M2–M4 (pages):** walk each page at all four widths; test every CTA; exercise
accordions, testimonial carousel, and the work filter with keyboard only; try
broken content paths (empty list, missing image) without crashes; form
end-to-end in the sandbox provider; blog tags.

**M5 (hardening):** Lighthouse on every template type (home, listing, detail,
form, article); axe scan; keyboard-only session of the top 5 tasks;
color-contrast check of every button pair; browser matrix.

## 4. UAT (M5)

Walk stakeholders through the acceptance criteria in SRS §9 with a printed
scorecard. Each FR row: Pass / Fail / Notes. Any "Fail" blocks launch. Verify
the placeholder-copy register is fully cleared (no `SEED` markers left).

## 5. Regression protocol

- After any change to `src/lib/routes.ts`, `globals.css`, `layout.tsx`,
  `navbar.tsx`, shared blocks (`page-header`, `footer`, `logo-strip`), or the
  form: re-run the automated gates + the 5 core flows in §2 (hero, nav,
  form, case study, 404).
- Tagged release: run the full matrix; record results in the release PR.

## 6. Tooling decisions (TBD)

- Playwright for E2E, Lighthouse CI for perf, axe-core for a11y.
- Owner: engineering (eng/QA).
- Add to CI across M0–M5 as budgets/tools are locked.
