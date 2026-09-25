import { hero } from "@/lib/content/home";

import { CtaButton } from "./cta";

/**
 * Hero (P4.1): dark brand stage with a radial glow, headline, dual CTAs and the
 * proof dot. The Waymarks lockup floats in a framed rounded container on
 * `float-logo` with a breathing `pulse-glow` podium beneath — both paused under
 * prefers-reduced-motion via the base-layer guard in globals.css.
 */
export function Hero() {
  return (
    <section className="relative overflow-hidden bg-waymarks-dark text-white">
      {/* Radial brand glow (design: circle at 80% 20%, primary at 8%) —
          token-based, no raw gradients in components. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-1/4 right-0 size-[34rem] rounded-full bg-waymarks-primary/10 blur-3xl"
      />

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-4 py-20 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8 lg:py-24">
        <div className="animate-fade-up">
          <h1 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-5xl">
            {hero.title}
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-white/80 sm:text-xl">
            {hero.subhead}
          </p>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-white/60">
            {hero.body}
          </p>
          <p className="mt-8 text-xl font-bold tracking-[0.05em] text-waymarks-primary sm:text-2xl">
            {hero.tagline}
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <CtaButton cta={hero.primaryCta} variant="primary" />
            <CtaButton cta={hero.secondaryCta} variant="outline-inverse" />
          </div>
          <div className="mt-6 flex items-center gap-2.5 text-sm text-white/60">
            <span
              aria-hidden="true"
              className="size-2 shrink-0 rounded-full bg-waymarks-accent shadow-[0_0_8px_var(--waymarks-accent)]"
            />
            <span>{hero.proof}</span>
          </div>
        </div>

        {/* Animated W logo stage */}
        <div className="relative mx-auto w-full max-w-md">
          <div className="relative flex aspect-square items-center justify-center overflow-hidden rounded-3xl border border-white/10 bg-waymarks-surface-raised/50 p-10">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute left-1/2 top-1/2 size-2/3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-waymarks-accent/10 blur-2xl"
            />
            {/* Plain img: images.unoptimized makes next/image pure overhead
                (quality gate C); eager + high priority keeps LCP behaviour. */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/logo_white.png"
              alt={hero.logo.alt}
              width={2081}
              height={321}
              loading="eager"
              fetchPriority="high"
              className="relative z-10 h-auto w-4/5 animate-float-logo drop-shadow-lg"
            />
            {/* Podium glow that breathes with the logo */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute bottom-[12%] left-1/2 h-5 w-3/4 -translate-x-1/2 animate-pulse-glow rounded-[50%] bg-waymarks-primary/30 blur-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
