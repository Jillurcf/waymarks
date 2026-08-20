# .spec — Waymark Project Specifications

Source-of-truth requirement documents for the **Waymark** company website.

| Document              | File                | Owner role            | Status    |
| --------------------- | ------------------- | --------------------- | --------- |
| Business Requirements | `.spec/BRD.md`      | Product / Account     | Draft v1  |
| Software Requirements | `.spec/SRS.md`      | Engineering / QA      | Draft v1  |

## How to read this folder

- **BRD** answers *why* — business goals, audience, scope, success metrics.
- **SRS** answers *what/how well* — concrete, testable requirements that the
  implementation (see `docs/implementation-plan.md`) must satisfy.
- Every requirement carries an ID (`BR-x`, `FR-x`, `NFR-x`) so tests and build
  phases can trace back to it. `docs/testing.md` maps tests to these IDs.

## Governance rules

1. Anything that changes product behavior must touch the BRD/SRS first, then
   the implementation plan. Docs are written in the design phase, code follows.
2. A requirement is "done" only when its acceptance criteria in the SRS pass.
3. Keep one source of truth: if a rule appears here and in `docs/`, `docs/`
   links back here instead of restating it.