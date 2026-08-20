---
description: Full verification then a clean, conventional commit.
agent: build
---

Prepare the current change for release: verify, then commit cleanly.

## Steps

1. Inspect `git status` and `git diff` (review only what we are intentionally
   changing; do not stage unrelated files).
2. Run the same verification as `/build`:
   - `npx tsc --noEmit`
   - `npm run lint`
   - `npm run build` (static export must emit `out/`)
3. Confirm no secrets/keys/`.env` files are being committed.
4. Stage only the intended files and commit with a concise conventional
   message in the repo style (e.g. `feat(hero): add webgl background`,
   `docs(spec): add SRS`). Do NOT push unless asked.
5. Report the commit hash and summary.

Anything in $ARGUMENTS is added context (e.g. a custom commit message).

## Definition of done

- Git tree reflects exactly the intended change; nothing unrelated staged.
- Build, typecheck, and lint all pass before the commit is created.
- Commit message matches repo conventions and references related issue/spec
  IDs when present.