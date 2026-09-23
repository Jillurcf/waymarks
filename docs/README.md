# Waymark — Project Documentation

Engineering and delivery documentation for the Waymark company website — a
**one-pager**: navbar + a single rebuilt homepage. The multi-page site
(Services, Work, About, Pricing, Blog, Contact, legal) was wiped; nav links
are in-page anchors into homepage sections. The design source of truth is
**`Waymarks Final Homepage Design.html`** (the approved final homepage), not
`html_version/`.

## Document map

| Document | Purpose |
| -------- | ------- |
| **implementation-phases.md** | The one-pager rebuild plan: phases P1–P6 with tasks and DoDs. Start here. |
| **implementation-plan.md** | Superseded M0–M5 multi-page template conversion (kept for history; do not execute). |
| **architecture.md** | Technical architecture: structure, conventions, static-export constraints, deployment. |
| **content-guide.md** | Sitemap, content inventory, placeholder-copy replacement, editorial calendar. |
| **conversion-register.md** | M0 freeze-decisions (historical): template asset audit, carousel choice, token verification, copy-owner map. |
| **testing.md** | QA strategy and the test matrix mapped to SRS acceptance criteria. |
| **release-checklist.md** | Pre-launch gate: SEO, a11y, performance, analytics, legal, deploy. |

## Companion sources of truth

| For this…                       | Read this                                    |
| ------------------------------- | -------------------------------------------- |
| Why we build this / business    | `.spec/BRD.md`                               |
| What to build / acceptance      | `.spec/SRS.md`                               |
| The brand & visual identity     | `.skill/waymark-ui-ux/` (SKILL.md + companions) |
| Design reference (canonical)    | `Waymarks Final Homepage Design.html`        |
| Repo conventions / agent rules  | `AGENTS.md`, `.command/README.md`            |

## How to work with these docs

1. **Specs govern, docs explain.** `docs/` operationalizes `.spec/`. When in
   conflict, `.spec/` wins.
2. **Requirements change** → update `.spec/` first, then downstream docs.
3. **UI work** → load the brand skill and enforce `quality-gates.md`. The
   design file governs structure and motion; the skill supplies every visual
   decision.
4. **Phase execution** → pick a phase from `implementation-phases.md`
   (e.g. "Execute Phase 4"), work its task list (`P4.x`), finish with
   `/build`, and check the DoD before moving on.
5. **Each build task** references task ids from `implementation-phases.md`
   (e.g. `P3.2`) and AC/FR ids from the SRS.
