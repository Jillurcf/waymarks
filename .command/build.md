---
description: Typecheck, lint, and produce the static export.
agent: build
---

Produce a verified static production build of the Waymark site.

## Steps

1. Run the TypeScript check: `npx tsc --noEmit`.
2. Run the linter: `npm run lint`.
3. Run the production build: `npm run build`.
   - `next.config.ts` sets `output: "export"`, `trailingSlash`, and
     unoptimized images — verify these are still respected.
   - The export emits to `out/`.
4. Verify the export:
   - `out/index.html` exists.
   - `out/404.html` (or equivalent) exists for unknown routes.
   - No route emitted as a raw `.html` that should be a directory index
     (`trailingSlash` should produce `about/index.html`, etc.).
5. Check the build output log for any warnings (e.g. dynamic APIs used at
   runtime, missing metadata, image optimization disabled) and resolve what the
   static-export model actually forbids. Read the local guide
   `node_modules/next/dist/docs/01-app/02-guides/static-exports.md` before any
   restructuring.

## Definition of done

- `tsc --noEmit` exits 0.
- `npm run lint` exits 0 with no errors.
- `npm run build` exits 0 and emits `out/`.
- Export structure verified as above and reported.

Failing any of these, stop and report the exact failure rather than
papering over it. — $ARGUMENTS