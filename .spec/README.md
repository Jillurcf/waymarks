# .spec — Waymark Project Specifications

Source-of-truth requirement documents for the **Waymark** company website.

| Document              | File                | Owner role            | Status      |
| --------------------- | ------------------- | --------------------- | ----------- |
| Business Requirements | `.spec/BRD.md`      | Product / Account     | v1.1        |
| Software Requirements | `.spec/SRS.md`      | Engineering / QA      | v1.1        |

## How to read this folder

- **BRD** answers *why* — business goals, audience, scope, success metrics.
  v1.1 context: the site is built by converting the `html_version/` HTML
  template's structure into the existing Next.js static export, re-skinned to
  the Waymark brand skill.
- **SRS** answers *what/how well* — concrete, testable requirements that the
  implementation (see `docs/implementation-plan.md`, milestones M0–M5) must
  satisfy.
- Every requirement carries an ID (`BR-x`, `FR-x`, `NFR-x`) so tests and build
  milestones can trace back to it. `docs/testing.md` maps tests to these IDs.

## Governance rules

1. Anything that changes product behavior must touch the BRD/SRS first, then
   the implementation plan. Docs are written in the design phase, code follows.
2. A requirement is "done" only when its acceptance criteria in the SRS pass.
3. Keep one source of truth: if a rule appears here and in `docs/`, `docs/`
   links back here instead of restating it.

## Changelog

- **v1.1 (2026-08-21):** design source changed to the Artistic template
  conversion; galleries and team-single pages moved out of scope; FR-23
  (newsletter) added; AC-BR5-1 (no template assets/copy) added.
- **v1.0 (2026-08-19):** initial draft.
