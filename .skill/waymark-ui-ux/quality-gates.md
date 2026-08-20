# Waymark — Quality Gates

Mandatory checklist. **A UI task is not done until every applicable gate
passes.** Run these against any component or page before handing over.

## A. Brand fidelity

- [ ] Colors come only from the tokens in `design-system.md` — no raw hex in
      components (grep the diff for `#[0-9a-fA-F]{3,6}` and `rgb(`/`oklch(`).
- [ ] Logo used as-is (no skew/filter/color override), correct aspect, clear
      space respected, alt text set.
- [ ] Green acts as accent, not background flood.
- [ ] Typography follows the scale; no font-size arbitrary values
      (no `text-[14px]`-style ad-hoc sizes).
- [ ] Hairlines and section rhythm match §3 of the design system.

## B. Accessibility

- [ ] Keyboard: every interactive element reachable, visible focus ring,
      correct focus order.
- [ ] Contrast ≥ 4.5:1 body text, ≥ 3:1 large text / icons (button pairs
      verified with primary green + ink label).
- [ ] All images have alt text (empty `alt=""` only for decorative).
- [ ] Forms: `<label>` bound, `aria-invalid` on error, `aria-live` status.
- [ ] `prefers-reduced-motion` respected where motion exists.

## C. Performance

- [ ] No new blocking third-party scripts; fonts self-hosted.
- [ ] WebGL hero: `dpr` capped, feature-detected, IntersectionObserver-based
      start/stop, static fallback present.
- [ ] Images sized near their rendered size; `next/image` with explicit
      `width`/`height` (or aspect ratio) — no layout shift.
- [ ] Route JS stays within the 200 KB budget (check build output per route).

## D. Correctness

- [ ] `npx tsc --noEmit` passes.
- [ ] `npm run lint` passes without new warnings.
- [ ] `npm run build` succeeds; route appears in `out/` as `index.html`.
- [ ] Content pulled from the typed data module, none buried in JSX.
- [ ] Metadata (title, description, canonical, OG) present on the route.

## E. Responsiveness

- [ ] Verified at 320, 768, 1280, and 1920 px — no overflow, no horizontal
      scroll, tap targets ≥ 44 px.
- [ ] Navbar collapses to the sheet menu on mobile with working focus trap.

## F. Content & tone

- [ ] Copy follows `content.md` (voice, grammar, UK spelling, no lorem/TODO).
- [ ] No emoji-as-decoration; icons from lucide only.
- [ ] Numbers formatted per brand (e.g. `+971 55 896 5353`).