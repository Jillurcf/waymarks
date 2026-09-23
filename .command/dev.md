---
description: Start the development server and smoke-test the app.
agent: build
---

Launch the Waymark development server and verify it renders before handing back.

## Steps

1. Run `npm run dev` (beware: Next.js 16 — read `node_modules/next/dist/docs/01-app/01-getting-started/` conventions before touching app code).
2. Wait for the server to report ready (usually `http://localhost:3000`).
3. Fetch the homepage and confirm it returns `200` and contains the Waymark logo
   alt text. If `next dev` is not available in this environment, state so and
   instead run a production `npm run build` smoke test.
4. Report the URL and the state of the three things listed in Definition of Done.

## Definition of done

- Dev server starts with no errors.
- Home page renders the current one-pager state (see
  `docs/implementation-phases.md`) with the Waymark hero visible.
- No new console warnings introduced by the change under test.

Calling context (if any): $ARGUMENTS