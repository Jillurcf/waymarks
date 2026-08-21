# Waymark — Project Documentation

Engineering and delivery documentation for the Waymark company website —
a milestone-wise conversion of the `html_version/` HTML template into the
existing Next.js static export.

## Document map

| Document | Purpose |
| -------- | ------- |
| **implementation-plan.md** | The conversion plan: page/interaction mapping, milestones M0–M5 with tasks and DoDs, copy-replacement register. Start here. |
| **architecture.md** | Technical architecture: structure, conventions, static-export constraints, deployment. |
| **content-guide.md** | Sitemap, content inventory, placeholder-copy replacement, editorial calendar. |
| **conversion-register.md** | M0 freeze-decisions: template asset audit, carousel choice, token verification, copy-owner map. |
| **testing.md** | QA strategy and the test matrix mapped to SRS acceptance criteria. |
| **release-checklist.md** | Pre-launch gate: SEO, a11y, performance, analytics, legal, deploy. |

## Companion sources of truth

| For this…                       | Read this                                    |
| ------------------------------- | -------------------------------------------- |
| Why we build this / business    | `.spec/BRD.md`                               |
| What to build / acceptance      | `.spec/SRS.md`                               |
| The brand & visual identity     | `.skill/waymark-ui-ux/` (SKILL.md + companions) |
| Design reference (structure only) | `html_version/` (Artistic template capture) |
| Repo conventions / agent rules  | `AGENTS.md`, `.command/README.md`            |

## How to work with these docs

1. **Specs govern, docs explain.** `docs/` operationalizes `.spec/`. When in
   conflict, `.spec/` wins.
2. **Requirements change** → update `.spec/` first, then downstream docs.
3. **UI work** → load the brand skill and enforce `quality-gates.md`. The
   template supplies structure; the skill supplies every visual decision.
4. **Milestone execution** → pick a milestone from `implementation-plan.md`
   (e.g. "Execute M1"), work its task list (`C1.x`), finish with `/build`,
   and check the DoD before moving on.
5. **Each build task** references task ids from `implementation-plan.md`
   (e.g. `C1.3`) and AC/FR ids from the SRS.
