import { aboutPageHero } from "@/lib/content/about";
import { cn } from "@/lib/utils";

import { CtaButton } from "./cta";
import { Icon } from "./icon";

/**
 * About page hero. Left column: the "About" eyebrow above a 56px display
 * headline, the studio belief line and a constrained supporting paragraph
 * (8 of 12 columns, per the design). Right column: the globe mark, the global
 * presence note, a hairline, then the two studio figures. One spotlight glow
 * keeps the brand restraint (design-system §3).
 */
export function AboutHero() {
  return (
    <section className="relative overflow-hidden bg-waymarks-dark text-white">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-1/4 right-0 size-[34rem] rounded-full bg-waymarks-primary/10 blur-3xl"
      />

      <div className="relative mx-auto flex max-w-6xl flex-col gap-12 px-6 py-16 lg:grid lg:grid-cols-12 lg:gap-8 lg:px-8 lg:py-24">
        <div className="col-span-12 lg:col-span-8">
          <p className="flex items-center gap-4 text-[22px] font-bold text-waymarks-primary">
            <Icon name={aboutPageHero.labelIcon} className="size-11" />
            <span>{aboutPageHero.label}</span>
          </p>

          <h1 className="mt-8 text-4xl font-bold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-[56px]">
            {aboutPageHero.title}
          </h1>

          <p className="mt-8 text-xl leading-relaxed text-white">
            {aboutPageHero.lead}
          </p>

          <div className="mt-4 grid grid-cols-12">
            <p className="col-span-12 text-base leading-relaxed text-white/75 sm:col-span-8">
              {aboutPageHero.body}
            </p>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <CtaButton cta={aboutPageHero.primaryCta} variant="primary" />
            <CtaButton cta={aboutPageHero.secondaryCta} variant="outline-inverse" />
          </div>
        </div>

        <div className="col-span-12 lg:col-span-4 bg-white/5 rounded-3xl p-8 lg:p-12">
          <Icon name={aboutPageHero.presence.icon} className="size-18" />

          <h2 className="mt-6 text-lg font-semibold text-white">
            {aboutPageHero.presence.title}
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-white/75">
            {aboutPageHero.presence.body}
          </p>

          <div className="mt-6 border-t border-white/10" />

          <div className="mt-6 grid grid-cols-2 gap-4 text-center">
            {aboutPageHero.stats.map((stat) => (
              <div key={stat.label}>
                <p
                  className={cn(
                    "text-2xl font-bold",
                    stat.tone === "accent"
                      ? "text-waymarks-accent"
                      : "text-white",
                  )}
                >
                  {stat.value}
                </p>
                <p className="mt-1 text-xs text-waymarks-primary">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
