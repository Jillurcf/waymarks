# Waymarks Design System

Source of visual truth for the Waymarks site. Tokens live in `src/app/globals.css` (`@theme`); this file governs naming, hierarchy, and usage.

## 1. Brand Palette

Waymarks uses a distinctive green palette supported by dark navy and white. The primary color should lead brand-first moments, while secondary and accent colors provide hierarchy and interaction.

| Token | Hex | RGB | Usage |
|---|---|---|---|
| `waymarks-primary` | `#BDD631` | `189, 214, 49` | Core identity color. Logo mark, key highlights, section markers, and brand-first moments. |
| `waymarks-secondary` | `#006543` | `0, 101, 67` | Supporting brand color. Fills, icons, and supporting UI. **Body text only on light backgrounds — never on the dark ramp.** |
| `waymarks-accent` | `#22C448` | `34, 196, 72` | Action color. Links, active states, icons, and interactive highlights. |
| `waymarks-cta-gradient` | `#BDD631 → #22C448` | — | CTA buttons and hero highlights only. Left-to-right gradient. |
| `waymarks-dark` | `#00051D` | `0, 5, 29` | The page background. Every surface on the site sits on it. |
| `waymarks-light` | `#FFFFFF` | `255, 255, 255` | Reserved light reference. The site is dark-first; it is not used as a page background. |

### 1a. Dark Surface Ramp

The site is **dark-first**: `<html>` carries `dark`, so the `.dark` block in
`globals.css` is the live theme. Every surface is one of three steps of the same
brand navy. These are neutral elevation steps derived from `waymarks-dark` — not
brand colors, and never mixed from the greens.

| Token | Hex | Usage |
|---|---|---|
| `waymarks-dark` | `#00051D` | Page base — hero, main content sections, navbar, footer. |
| `waymarks-surface` | `#060B24` | Alternating section band. Also `--muted`: quiet fills, input wells. |
| `waymarks-surface-raised` | `#0B1236` | Cards, sheets, popovers, nested frames. Also `--card` / `--popover`. |

Elevation ramp, bottom to top: `waymarks-dark` → `waymarks-surface` →
`waymarks-surface-raised`. Never skip a step for a nested surface, and never
place `waymarks-dark` on top of `waymarks-surface` except for a deliberate
inverted spotlight (the case-study showcase card).

### Color Rules

- `waymarks-primary` is the **core Waymarks identity color**. Lead with it in brand-first moments.
- Use `waymarks-primary` for the logo mark, important highlights, section markers, and visual brand recognition.
- Use `waymarks-secondary` for supporting fills, icons, and supporting UI on dark surfaces.
- Use `waymarks-accent` for links, active states, interactive elements, icons, and action-oriented highlights.
- The CTA gradient must always flow **left to right**:
  `#BDD631 → #22C448`.
- The CTA gradient is **reserved for CTA buttons and hero highlights**.
- Do **not** use the CTA gradient for body text or large background fills.
- `waymarks-dark` is the page background for every route; alternate with
  `waymarks-surface` bands to create section rhythm, and raise cards to
  `waymarks-surface-raised`.
- Separate every band edge with a hairline: `border-white/10`.
- Avoid introducing additional greens or replacing the official colors with arbitrary shades.
- Do not lighten or darken the official colors to create new brand colors. Use the defined palette and opacity when a softer treatment is required.
- Maintain sufficient text/background contrast for accessibility: body copy
  uses `--muted-foreground` (a lightened neutral) and clears **4.5:1** on all
  three ramp steps. `waymarks-secondary` as text on any dark step fails this gate.

## 2. Typography

- Sans: Geist, loaded through `next/font`.
- Headings may use tighter tracking (`tracking-tight`) for large display typography.
- Small labels and metadata may use `tracking-widest` with uppercase styling.
- Scale: `6xl/7xl` display → `body sm/base` → `label xs/sm`.
- Use a consistent type scale within each page.
- Never use more than three heading sizes within a single section.
- Numbers and metrics should use `tabular-nums` where alignment is important.
- Body text uses the `--muted-foreground` lightened neutral on the dark ramp, or `waymarks-secondary` when a light surface is in play.
- White text is the default on `waymarks-dark`, `waymarks-surface` and `waymarks-surface-raised`.

## 3. Spacing & Layout

- Base spacing unit: **4 px**.
- Major section padding: `py-20`–`py-32`.
- Container: `max-w-6xl` with `px-4 sm:px-6 lg:px-8`.
- Grid:
  - Desktop: 12 columns
  - Tablet: 2 columns
  - Mobile: 1 column
- Cards use `16/24px` radii through the existing radius tokens.
- Cards use a `border-white/10` hairline and a deeper, darker shadow — never the light-theme haze.
- Interactive cards may lift approximately `1px` on hover.
- Section rhythm: alternate `waymarks-dark` content sections with
  `waymarks-surface` bands, separated by a `border-white/10` hairline.
- Maintain a clear breathing rail, typically `96–160px`, above and below major section headers.
- Avoid overcrowding brand-first sections with excessive UI elements.

## 4. Components

| Component | Pattern |
|---|---|
| Buttons | Use `button`/`button-variant` from `ui`. Primary CTA uses the `waymarks-cta-gradient` with high-contrast text. Secondary buttons use a `white/20` outline that heats to `waymarks-accent` on hover. |
| Cards | `waymarks-surface-raised` surface, radius-xl, `border-white/10` hairline, `shadow-card`. Hover: `waymarks-accent` border + slight lift. |
| Navigation | Sticky navigation, `waymarks-dark/80` with blur and a `border-white/10` hairline. Active links use `waymarks-accent`. Use `aria-current` for active navigation. |
| Forms | Clearly labeled inputs, accessible focus states, inline validation, and `aria-live` status regions. Inputs sit on `white/5` with a `white/10` border; focus moves the border to `waymarks-primary`. |
| Links | Use `waymarks-accent` for links and interactive text. Hover states may transition toward `waymarks-primary`. |
| Testimonial | Quote, subtle brand-colored left rule, author, and source. |
| Stat Block | Large `tabular-nums` figure in `waymarks-primary` with a white uppercase label on a `waymarks-accent` left rule. |
| Hero | `waymarks-dark` brand stage. White text with `waymarks-primary`/`waymarks-accent` highlights, CTA uses the official `waymarks-cta-gradient`. |
| Footer | `waymarks-dark` background with white text/glyphs and selective primary/accent highlights. |

## 5. CTA & Gradient Usage

The official CTA gradient is:

```text
#BDD631 → #22C448
