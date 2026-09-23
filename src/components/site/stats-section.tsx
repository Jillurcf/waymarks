import { statsSection } from "@/lib/content/home";

import { CountUp } from "./count-up";

/**
 * Stats counters (P4.7): 12+/100+/450+/25+ animated via CountUp on a light
 * section, each stat on an accent hairline (design stat-card border-left).
 */
export function StatsSection() {
  return (
    <section className="border-t border-border bg-waymarks-light py-20 lg:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 className="max-w-2xl text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          {statsSection.title}
        </h2>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
          {statsSection.intro}
        </p>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
          {statsSection.body}
        </p>

        <h3 className="mt-14 text-3xl font-bold tracking-tight text-foreground">
          {statsSection.subheading}
        </h3>
        <div className="mt-10 grid gap-10 sm:grid-cols-2 lg:grid-cols-4 sm:gap-8">
          {statsSection.items.map((stat) => (
            <div key={stat.label} className="border-l-2 border-waymarks-accent pl-5">
              <div className="text-4xl font-extrabold leading-none text-waymarks-secondary lg:text-5xl">
                <CountUp value={stat.value} suffix={stat.suffix} />
              </div>
              <p className="mt-3 text-base font-semibold text-waymarks-secondary">
                {stat.label}
              </p>
              <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}