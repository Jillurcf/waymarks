# Waymark — Testing Strategy & QA Matrix

QA is layered: automated gates run on every build; manual QA runs per phase;
launch QA is scripted from the release checklist.

## 1. Automated gates (every commit / CI)

| Gate            | Command              | Enforced       |
| --------------- | -------------------- | -------------- |
| Type safety     | `npx tsc --noEmit`   | CI + pre-ship  |
| Lint            | `npm run lint`       | CI + pre-ship  |
| Static build    | `npm run build`      | CI            |
| Dependencies    | `npm audit`          | CI            |
| Bundle check    | compare per-route size vs 200 KB budget | CI (alert only) |

## 2. Test matrix (maps SRS AC → method)

| AC/section         | Test method                                   | Instrument        |
| ------------------ | --------------------------------------------- | ----------------- |
| AC-FR5-1, -2       | WebGL on/off, reduced-motion on/off           | Playwright + manual |
| AC-FR12-1, -2, NFR-4-2 | Form validation, submit ok/error, slow/offline, mailto fallback | Playwright + browser devtools |
| AC-FR18-1, FR-19-1 | Metadata on every route; sitemap/robots crawl | Playwright + scripted checker |
| NFR-1              | LCP/TBT on throttled 4G; per-route JS size    | Lighthouse CI     |
| NFR-2              | Keyboard walkthrough, contrast, focus, ARIA   | axe-core + manual |
| NFR-3              | Latest 2 versions desktop Chrome/Edge/Firefox/Safari + iOS/Android | Playwright matrix + Device Farm optional |
| NFR-4-3            | Unknown route → styled 404, no crash          | Playwright         |
| NFR-7-1            | Two clean builds produce byte-identical `out/` | CI job           |
| Content (all)      | Copy spec, alt text, no lorem/TODO            | Lint-style grep + review |

## 3. Manual QA per phase (checklist)

**Phase 1 (shell):** nav on mobile + desktop, focus trap in sheet, footer links,
skip-to-content.

**Phases 2–3 (pages):** walk each page at 320/768/1280/1920 px; test every CTA;
try broken content paths (empty list, missing image) without crashes; form
end-to-end in the sandbox provider; blog tags/filters.

**Phase 4 (hardening):** Lighthouse on all templates; axe scan; keyboard-only
session of the full top 5 tasks; color-contrast check of every button pair;
browser matrix.

## 4. UAT (Phase 5)

Walk stakeholders through the acceptance criteria in SRS §9 with a printed
scorecard. Each FR row: Pass / Fail / Notes. Any "Fail" blocks launch.

## 5. Regression protocol

- After any change to `src/lib/routes.ts`, `globals.css`, `layout.tsx`,
  `navbar.tsx`, or the form: re-run the automated gates + the 5 core flows in
  §2 (hero, nav, form, case study, 404).
- Tagged release: run the full matrix; record results in the release PR.

## 6. Tooling decisions (TBD)

- Playwright for E2E, Lighthouse CI for perf, axe-core for a11y.
- Owner: engineering (eng/QA).
- Add to CI in P0.5–P4 as budgets/tools are locked.