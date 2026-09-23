---
name: waymark-ui-ux
description: The Waymark brand and UI/UX design system. Use whenever you create or modify any UI, visual, or copy for this project (pages, components, hero, services, portfolio, contact, brand, logo, molten metal, waymark, waymarks, agency, homepage). Enforce palette, typography, spacing, motion, tone, and quality gates from the brand derived from the Waymark logo.
---

# Waymark UI/UX — Brand Skill

This skill encodes the Waymark visual identity as it exists in this repository.
It derives directly from the company asset and brand signals:

- **Logo lockup** `public/logo_white.png` — a wide horizontal wordmark
  lockup (2,457 × 435 px, ≈5.7:1) with glyphs rendered in a light/white tone
  for use on dark surfaces.
- **Brand color field** — the molten-metal greens already wired into the
  signature WebGL shader (`src/components/molten-metal.tsx` defaults).
- **Brand facts** — "Waymark" / "waymarks.agency"; premium UI/UX & digital
  product studio positioned like leading design agencies (Musemind, etc.).
- **Signature motion** — the liquid / molten-metal background effect.

Follow this file plus its companions:

- `design-system.md` — tokens, palette, typography, components, layout.
- `quality-gates.md` — mandatory checklists before any UI is done.
- `content.md` — tone of voice and copy rules.

## When to apply

- Any new page, section, component, or design change.
- Any copy or content written for the site.
- Any decision needing a "what would be on-brand here?" answer.

## Non-negotiable rules

1. **Palette is fixed.** Use only the tokens in `design-system.md` or the
   skill files. No arbitrary hex values in components.
2. **The logo is sacred.** Use the lockup file as-is; never re-color, skew,
   or re-draw it. Preserve aspect ratio and padding (clear space = height of
   the mark's lowercase glyphs on each side).
3. **Premium restraint.** Whitespace, thin rules, and one spotlight element per
   viewport. If everything glows, nothing glows.
4. **Built with the existing stack.** Reuse `src/components/ui/*`, `cn()` from
   `src/lib/utils.ts`, tokens from `globals.css` `@theme`. Do not add new UI
   libraries without a spec change.
5. **Motion is a signature, not a decoration.** The molten-metal background is
   the hero statement; elsewhere use fast, subtle transitions (150–300 ms) and
   always respect `prefers-reduced-motion`.

## Interpretation guide for the logo-driven identity

The wordmark sits high and wide like a **waymark** — a landmark found along a
path. Translate that everywhere:

- **High, centered eyelines** on hero typography; generous negative space below
  and beside the headline (space to "move").
- **Liquid movement** as metaphor: gradients flow smoothly; buttons lift on a
  single subtle radial glow; dividers are hairlines that ease in.
- **Waymark points the route:** every section should visually point toward the
  next action (CTA) — arrows, lines, chevrons used sparingly and consistently.

## Workflow

1. Read the relevant files here before writing any code or copy.
2. Check your output against `quality-gates.md`.
3. Run `/build` verification (`tsc`, lint, static export) after UI changes.
4. If the change affects content, update the typed data module, not JSX.

_Companion docs: `.spec/BRD.md`, `.spec/SRS.md`, `docs/design-system.md`,
`docs/implementation-plan.md`._