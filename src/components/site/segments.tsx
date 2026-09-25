import { segmentsSection } from "@/lib/content/home";

import { Icon } from "./icon";

/**
 * Segment focus (P4.6): Startups / Growing Businesses / SaaS / Established
 * bento cards on the section band (design surface-section + bento-card).
 */
export function Segments() {
  return (
    <section className="border-y border-border bg-waymarks-surface py-20 lg:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 className="max-w-2xl text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          {segmentsSection.title}
        </h2>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
          {segmentsSection.intro}
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {segmentsSection.items.map((segment) => (
            <div
              key={segment.title}
              className="rounded-2xl border border-border bg-card p-8 transition-all duration-200 hover:-translate-y-1 hover:border-waymarks-accent hover:shadow-card-hover"
            >
              <h3 className="flex items-center gap-3 text-xl font-bold text-white">
                <Icon name={segment.icon} className="size-6 text-waymarks-primary" />
                {segment.title}
              </h3>
              <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                {segment.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}