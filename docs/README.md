# Waymark — Project Documentation

Engineering and delivery documentation for the Waymark company website.

## Document map

| Document | Purpose |
| -------- | ------- |
| **implementation-plan.md** | Phased delivery plan with milestones, tasks, effort — what gets built and when. |
| **architecture.md** | Technical architecture: structure, conventions, static-export constraints, deployment. |
| **content-guide.md** | Sitemap, content inventory, case-study templates, editorial calendar. |
| **testing.md** | QA strategy and the test matrix mapped to SRS acceptance criteria. |
| **release-checklist.md** | Pre-launch gate: SEO, a11y, performance, analytics, legal, deploy. |

## Companion sources of truth

| For this…                       | Read this                                    |
| ------------------------------- | -------------------------------------------- |
| Why we build this / business    | `.spec/BRD.md`                               |
| What to build / acceptance      | `.spec/SRS.md`                               |
| The brand & visual identity     | `.skill/waymark-ui-ux/` (SKILL.md + companions) |
| Repo conventions / agent rules  | `AGENTS.md`, `.command/README.md`            |

## How to work with these docs

1. **Specs govern, docs explain.** `docs/` operationalizes `.spec/`. When in
   conflict, `.spec/` wins.
2. **Requirements change** → update `.spec/` first, then downstream docs.
3. **UI work** → load the brand skill and enforce `quality-gates.md`.
4. **Each build task** references phase ids from `implementation-plan.md`
   (e.g. `P1.3`) and AC/FR ids from the SRS.