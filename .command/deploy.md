---
description: Deploy the static export to the configured host.
agent: build
---

Deploy the Waymark static export to the hosting provider configured for this
repository.

## Rules first

- The site is a **static export** (`next.config.ts` → `output: "export"`).
  Anything that needs a server (API routes, on-demand revalidation) is
  incompatible — use the export as-is; do not "fix" by switching configs.
- Never commit or echo deployment tokens.

## Steps

1. Run the build first: `npx tsc --noEmit && npm run lint && npm run build`,
   ensure `out/` is current and passing.
2. Identify the target from $ARGUMENTS or the repo's CI/DEPLOYMENT notes
   (default: see `docs/architecture.md#deployment`).
3. For platform CLIs (Netlify/Vercel/GH Pages), use the configured CLI/token
   from env. For a generic host, commit/push the `out/` artifact per its
   documented flow.
4. Smoke-test the live URL: main route `200`, a nested route, image asset,
   and one 404 case.
5. Report the live URL and asset checksum/size so the team can verify parity
   with local `out/`.

## Definition of done

- Deployed bytes match local `out/` (same file names, HTML, and asset paths).
- Live smoke tests pass and are reported.
- No secrets or deploy keys appear in shell history, config, or the repo.