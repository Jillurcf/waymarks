---
description: Add or update site content (services, case studies, copy).
agent: build
---

Update content for the Waymark site without touching layout logic.

## Steps

1. Map the requested change ($ARGUMENTS) to the sitemap/Section of
   `docs/content-guide.md`.
2. Locate the content source — content lives in typed data modules under
   `src/lib/content/` (e.g. `src/lib/content/services.ts`,
   `src/lib/content/case-studies.ts`) or as local `*.md[x]` content
   collections if the blog uses them. Never bury copy deep inside JSX
   components.
3. Follow the tone-of-voice and copy rules in `docs/content-guide.md`:
   - Convert action, no jargon; keep paragraphs short.
   - Every case study needs title, client, sector, services, year, outcome,
     and 1–2 result metrics (qualitative allowed when metrics are not known).
   - Alt text on every image/logo.
4. Respect locale/typo rules: British English unless the team specifies
   otherwise, `: ` after colons, proper number formatting (+971 55 896 5353).
5. Where a template exists for the type of content (case study, service, post),
   copy add/update must be done in both the human-facing draft AND the typed
   data module so rendering and review stay in sync.

## Definition of done

- Content is updated in the correct data module (not scattered in components).
- Page still passes `npx tsc --noEmit` and `npm run lint`.
- No placeholder lorem/emoji/`TODO` copy left behind, unless explicitly approved.
- Copy follows the brand tone from the skill.