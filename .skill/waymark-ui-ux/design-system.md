# Waymarks Design System

Source of visual truth for the Waymarks site. Tokens live in `src/app/globals.css` (`@theme`); this file governs naming, hierarchy, and usage.

## 1. Brand Palette

Waymarks uses a distinctive green palette supported by dark navy and white. The primary color should lead brand-first moments, while secondary and accent colors provide hierarchy and interaction.

| Token | Hex | RGB | Usage |
|---|---|---|---|
| `waymarks-primary` | `#BDD631` | `189, 214, 49` | Core identity color. Logo mark, key highlights, section markers, and brand-first moments. |
| `waymarks-secondary` | `#006543` | `0, 101, 67` | Supporting brand color. Body text on light backgrounds, secondary buttons, icons, and supporting UI elements. |
| `waymarks-accent` | `#22C448` | `34, 196, 72` | Action color. Links, active states, icons, and interactive highlights. |
| `waymarks-cta-gradient` | `#BDD631 → #22C448` | — | CTA buttons and hero highlights only. Left-to-right gradient. |
| `waymarks-dark` | `#00051D` | `0, 5, 29` | Primary dark background for hero sections, footers, and high-contrast brand moments. |
| `waymarks-light` | `#FFFFFF` | `255, 255, 255` | Primary light background for standard pages and content sections. |

### Color Rules

- `waymarks-primary` is the **core Waymarks identity color**. Lead with it in brand-first moments.
- Use `waymarks-primary` for the logo mark, important highlights, section markers, and visual brand recognition.
- Use `waymarks-secondary` for body text on light backgrounds, secondary buttons, icons, and supporting UI.
- Use `waymarks-accent` for links, active states, interactive elements, icons, and action-oriented highlights.
- The CTA gradient must always flow **left to right**:
  `#BDD631 → #22C448`.
- The CTA gradient is **reserved for CTA buttons and hero highlights**.
- Do **not** use the CTA gradient for body text or large background fills.
- `waymarks-dark` is the primary dark surface for heroes, footers, and high-contrast sections.
- `waymarks-light` is the default page and content background.
- Avoid introducing additional greens or replacing the official colors with arbitrary shades.
- Do not lighten or darken the official colors to create new brand colors. Use the defined palette and opacity when a softer treatment is required.
- Maintain sufficient text/background contrast for accessibility.

## 2. Typography

- Sans: Geist, loaded through `next/font`.
- Headings may use tighter tracking (`tracking-tight`) for large display typography.
- Small labels and metadata may use `tracking-widest` with uppercase styling.
- Scale: `6xl/7xl` display → `body sm/base` → `label xs/sm`.
- Use a consistent type scale within each page.
- Never use more than three heading sizes within a single section.
- Numbers and metrics should use `tabular-nums` where alignment is important.
- Body text on light backgrounds should primarily use `waymarks-secondary` or an appropriate high-contrast neutral.
- White text should be used on `waymarks-dark` backgrounds where appropriate.

## 3. Spacing & Layout

- Base spacing unit: **4 px**.
- Major section padding: `py-20`–`py-32`.
- Container: `max-w-6xl` with `px-4 sm:px-6 lg:px-8`.
- Grid:
  - Desktop: 12 columns
  - Tablet: 2 columns
  - Mobile: 1 column
- Cards use `16/24px` radii through the existing radius tokens.
- Cards should use a subtle border and shadow where appropriate.
- Interactive cards may lift approximately `1px` on hover.
- Maintain a clear breathing rail, typically `96–160px`, above and below major section headers.
- Avoid overcrowding brand-first sections with excessive UI elements.

## 4. Components

| Component | Pattern |
|---|---|
| Buttons | Use `button`/`button-variant` from `ui`. Primary CTA uses the `waymarks-cta-gradient` with high-contrast text. Secondary buttons use `waymarks-secondary` or an appropriate outlined treatment. |
| Cards | `waymarks-light` surface, radius-xl, subtle border, optional shadow. Hover: `waymarks-primary`/`waymarks-accent` border treatment + slight lift. |
| Navigation | Sticky navigation with translucent/blur treatment and subtle border. Active links use `waymarks-accent` or `waymarks-primary`. Use `aria-current` for active navigation. |
| Forms | Clearly labeled inputs, accessible focus states, inline validation, and `aria-live` status regions. Focus states should use `waymarks-accent` or `waymarks-primary`. |
| Links | Use `waymarks-accent` for links and interactive text. Hover states may transition toward `waymarks-primary`. |
| Testimonial | Quote, subtle brand-colored left rule, author, and source. |
| Stat Block | Large `tabular-nums` figure with supporting uppercase label. Use `waymarks-primary` or `waymarks-accent` selectively for emphasis. |
| Hero | Prefer `waymarks-dark` for high-impact brand heroes. Use white text with `waymarks-primary`/`waymarks-accent` highlights. CTA uses the official `waymarks-cta-gradient`. |
| Footer | `waymarks-dark` background with white text/glyphs and selective primary/accent highlights. |

## 5. CTA & Gradient Usage

The official CTA gradient is:

```text
#BDD631 → #22C448
