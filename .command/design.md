---
description: Build UI work following the Waymark brand skill and design system.
agent: build
---

Implement or refine UI work for the Waymark site, strictly on brand.

## Mandatory inputs

1. Load `.skill/waymark-ui-ux/SKILL.md` and follow it: it encodes the brand
   derived from the logo (palette, liquid-metal accent, typography, tone).
2. Read `.skill/waymark-ui-ux/design-system.md` for tokens and component
   conventions.
3. Read `docs/architecture.md` for where components live and how they are
   exported.

## Steps

1. Confirm the target element/feature from $ARGUMENTS.
2. Prefer existing primitives in `src/components/ui/` (build with shadcn-style
   `cn()` + `radix`/`lucide` already in the repo) — do not hand-roll controls.
3. Use the MoltenMetal component (`src/components/molten-metal.tsx`) only where
   the design calls for the animated liquid-metal background; otherwise keep
   surfaces static CSS for performance.
4. Keep motion on brand: smooth, fast (150–300 ms), and purposeful. Respect
   `prefers-reduced-motion`.
5. Never inline arbitrary colors — use the `@theme` tokens in
   `src/app/globals.css` or the palette in the skill. No new hex values outside
   `.spec`/design docs.
6. Verify against the quality gates at
   `.skill/waymark-ui-ux/quality-gates.md`.

## Definition of done

- Matches the design system tokens (no off-palette colors, correct radius/spacing).
- `npx tsc --noEmit` and `npm run lint` pass.
- Keyboard-operable and has visible focus states; contrast meets AA.
- Renders correctly at mobile, tablet, and desktop widths.