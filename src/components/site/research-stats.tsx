import { ArrowUpRight } from "lucide-react";

import { CountUp } from "@/components/site/count-up";
import { Reveal } from "@/components/site/reveal";
import { SectionHeading } from "@/components/site/section-heading";
import {
  researchNote,
  researchStats,
  researchStatsHeading,
} from "@/lib/content/home";

// Research-backed numbers band: three cited industry findings with links to
// the source research, plus a note that the figures are directional. Dark
// brand surface, inverse heading — the one spotlight moment between the
// approach and outcomes sections.
export function ResearchStats() {
  return (
    <section
      aria-labelledby="research-stats-title"
      className="bg-waymarks-dark text-waymarks-light"
    >
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
        <SectionHeading
          tone="inverse"
          eyebrow={researchStatsHeading.eyebrow}
          title={researchStatsHeading.title}
          id="research-stats-title"
        />
        <ul className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {researchStats.map((stat, i) => (
            <li
              key={`${stat.number}-${stat.claim}`}
              className="flex flex-col gap-4 rounded-xl border border-waymarks-light/10 bg-waymarks-light/5 p-6"
            >
              <Reveal delay={i * 100} className="h-full">
                <div className="flex h-full flex-col gap-4">
                  <div className="flex flex-wrap items-baseline gap-x-2 gap-y-1">
                    <span className="text-5xl font-medium tabular-nums tracking-tight text-waymarks-primary">
                      <CountUp value={stat.number} />
                    </span>
                    <span className="text-sm font-medium text-waymarks-light/80">
                      {stat.claim}
                    </span>
                  </div>
                  <p className="text-sm leading-relaxed text-waymarks-light/70">
                    {stat.blurb}
                  </p>
                  <p className="text-xs text-waymarks-light/50">
                    Source: {stat.source}
                  </p>
                  <a
                    href={stat.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-auto inline-flex items-center gap-1.5 text-sm font-medium text-waymarks-accent underline-offset-4 hover:underline"
                  >
                    {stat.linkLabel}
                    <ArrowUpRight className="size-4" aria-hidden="true" />
                  </a>
                </div>
              </Reveal>
            </li>
          ))}
        </ul>
        <p className="mx-auto mt-8 max-w-3xl text-center text-sm leading-relaxed text-waymarks-light/60">
          {researchNote}
        </p>
      </div>
    </section>
  );
}