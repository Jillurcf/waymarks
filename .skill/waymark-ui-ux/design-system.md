# Waymark Design System

Source of visual truth for the Waymark site. Tokens live in
`src/app/globals.css` (`@theme`); this file governs naming and usage.

## 1. Brand palette (logo-derived)

| Token               | Hex       | Usage                                                        |
| ------------------- | --------- | ------------------------------------------------------------ |
| `waymark-primary`   | `#1AB26B` | Primary CTAs, active states, key accents (small doses)       |
| `waymark-mid`       | `#8FE0B5` | Hover/gradient mid-tone, tints, success states               |
| `waymark-deep`      | `#0B6C3E` | Dark text on light, footer brand accents                     |
| `ink` / `paper`     | oklch neutrals (from globals.css) | Base text and surfaces                |
| `hairline`          | `border` token | 1 px rules and dividers                                      |

Rules:
- Primary green is a **spotlight accent**, not a surface. Keep coverage
  < 10% of a viewport; backgrounds stay paper/ink neutrals.
- Gradient direction: deep → mid → primary, flowing left-to-right (motion).
- Do not lighten greens to make them "match" — use mid for lighter steps.

## 2. Typography

- Sans: Geist (already loaded via `next/font`). Headings may use tighter
  tracking (`tracking-tight`) for big display sizes; small labels use
  `tracking-widest` uppercase (consistent with the current "coming soon"
  treatment).
- Scale: display 6xl/7xl → body sm/base → label xs/sm. One scale per page
  type; never more than 3 heading sizes in a section.
- Numbers and metrics: `tabular-nums` where they appear in stats.

## 3. Spacing & layout

- Base unit 4 px; section padding `py-20`–`py-32`; container `max-w-6xl`
  with `px-4 sm:px-6 lg:px-8`.
- Grid: 12-col on desktop, 2-col tablet, 1-col mobile. Cards use 16/24 radii
  (`--radius` tokens), border + subtle shadow, hover lifts 1 px.
- Keep one "breathing rail" (usually 96–160 px) of whitespace above and below
  every major section header.

## 4. Components

| Component           | Pattern                                                        |
| ------------------- | -------------------------------------------------------------- |
| Buttons             | `button`/`button-variant` from `ui`; primary = green fill, ink text (contrast-checked), radius-lg |
| Cards               | paper surface, radius-xl, hairline border, hover: border-primary/40 + lift |
| Navigation          | sticky, translucent blur, hairline on scroll; active `aria-current` |
| Forms               | labeled inputs, inline validation, `aria-live` status region   |
| Testimonial         | quote, hairline left rule, author + source                     |
| Stat block          | big tabular figure, label uppercase tracking-widest            |
| Hero                | full-bleed; paper background; optional MoltenMetal layer at opacity ≤ 0.35 with brightness driver; content column max-w-3xl |

## 5. Motion

- Durations: 150 ms (micro), 250 ms (cards/menus), 300 ms (hero reveal).
- Easings: `cubic-bezier(0.22, 1, 0.36, 1)` "ease-out-expo-lite".
- Only animate opacity + transform; never layout-affecting properties.
- `prefers-reduced-motion: reduce` → disable all entrance animations and the
  WebGL loop (serve the static gradient variant).

## 6. Iconography

- `lucide-react` only (already a dependency). Thin stroke (`1.5`), currentColor.
- Services use one icon each, consistent family; do not mix icon sets.

## 7. Dark/light

- Default: **paper (light)** with ink text (matches current page).
- Where a dark section is needed (hero variant, footer), use ink surface with
  white glyphs — this is where the logo lockup (light glyphs) belongs.