import { ArrowUpRight, TrendingUp, CalendarRange, Rocket, Star, type LucideIcon } from "lucide-react";

import { CountUp } from "@/components/site/count-up";
import { factsIntro, proofStats } from "@/lib/content/stats";

// Block 9 — Facts (template .our-facts): intro copy with an explore-circle
// CTA on the left, four animated counters on the right. Figures come only
// from stats.ts (real figures or marked SEED — never template dummies).
const iconMap: Record<string, LucideIcon> = {
  TrendingUp,
  CalendarRange,
  Rocket,
  Star,
};

export function ProofStrip() {
  return (
    <section
      aria-labelledby="proof-strip-title"
      className="bg-foreground text-background"
    >
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="mb-3 text-xs font-medium uppercase tracking-widest text-waymarks-accent">
              {factsIntro.eyebrow}
            </p>
            <h2
              id="proof-strip-title"
              className="text-3xl font-medium tracking-tight sm:text-4xl"
            >
              {factsIntro.title}
            </h2>
            <p className="mt-4 max-w-md text-base leading-relaxed text-background/70">
              {factsIntro.body}
            </p>
            {/* Explore-circle CTA (template .explore-more-circle pattern) */}
            <a href={factsIntro.ctaHref} className="group mt-8 inline-flex items-center gap-4">
              <span className="flex size-16 shrink-0 items-center justify-center rounded-full border border-background/30 transition-colors group-hover:border-waymarks-primary group-hover:bg-waymarks-primary/10">
                <ArrowUpRight
                  className="size-5 text-waymarks-primary transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  aria-hidden="true"
                />
              </span>
              <span className="text-sm font-medium underline-offset-4 group-hover:underline">
                {factsIntro.ctaLabel}
              </span>
            </a>
          </div>

          <dl className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {proofStats.map((stat) => {
              const Icon = stat.icon ? iconMap[stat.icon] : undefined;
              return (
                <div
                  key={stat.label}
                  className="flex flex-col-reverse gap-1 rounded-xl border border-background/15 bg-background/5 p-6"
                >
                  <dt className="text-sm leading-snug text-background/70">
                    {stat.label}
                  </dt>
                  <dd className="flex items-center gap-2 text-4xl font-medium tabular-nums tracking-tight">
                    {Icon ? (
                      <Icon
                        className="size-6 shrink-0 text-waymarks-primary"
                        aria-hidden="true"
                      />
                    ) : null}
                    <CountUp value={stat.value} />
                  </dd>
                </div>
              );
            })}
          </dl>
        </div>
      </div>
    </section>
  );
}
