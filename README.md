# Waymark — Company Website

Marketing site for Waymark, a UI/UX and digital product design studio.
Built as a **static Next.js export** by converting the `html_version/`
HTML template's structure into the existing app, re-skinned to the Waymark
brand (green molten-metal identity, Geist type, editorial restraint).

## Stack

- Next.js 16 (App Router) · React 19 · TypeScript 5
- Tailwind CSS v4 with design tokens in `src/app/globals.css` (`@theme`)
- shadcn/ui primitives + `lucide-react` icons
- `ogl` WebGL hero ("MoltenMetal") with static fallback
- Static export: `output: "export"`, trailing slashes, emits to `out/`

## Quickstart

```bash
npm install
npm run dev        # http://localhost:3000
```

## Verification

```bash
npx tsc --noEmit   # types
npm run lint       # eslint
npm run build      # static export to out/
# or all three:
npm run verify
```

## Working on this repo

- **Milestones:** the build is organised milestone-wise in
  [`docs/implementation-plan.md`](docs/implementation-plan.md) — pick a
  milestone (M0–M5), work its tasks (`C<m>.<n>`), finish with `/build`.
- **Brand rules:** [`.skill/waymark-ui-ux/`](.skill/waymark-ui-ux/SKILL.md)
  is mandatory for any UI or copy change; quality gates there must pass.
- **Content:** lives in typed modules under `src/lib/content/` — never inline
  copy in components. Template placeholder strings never ship.
- **Routes:** register every URL in `src/lib/routes.ts` first (nav, footer,
  sitemap, breadcrumbs read from it).
- **Next.js 16:** breaking changes vs older knowledge — read the bundled
  guides in `node_modules/next/dist/docs/` before writing app code.

## Documentation

| Folder | Contents |
| ------ | -------- |
| `docs/` | Implementation plan, architecture, content guide, testing, release checklist |
| `.spec/` | BRD + SRS (requirements with traceable IDs) |
| `.command/` | Agent workflows: `/dev`, `/build`, `/scaffold`, `/design`, `/content`, `/ship`, `/deploy` |
| `html_version/` | Read-only design reference (source template capture). Never imported or shipped. |

## Deploy

The site deploys as pure static files: `npm run build` → upload `out/` to any
static host. See `.command/deploy.md` and `docs/architecture.md`.
