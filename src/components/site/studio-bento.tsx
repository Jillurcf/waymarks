import { studioSection } from "@/lib/content/home";

import { Icon } from "./icon";

/**
 * Connected studio bento (P4.3): Strategy/Design/Technology/Growth cards on a
 * light section, icon beside each title (design bento-card + card-icon).
 */
export function StudioBento() {
  return (
    <section id="studio" className="scroll-mt-24 bg-waymarks-light py-20 lg:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 className="max-w-2xl text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          {studioSection.title}
        </h2>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
          {studioSection.intro}
        </p>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
          {studioSection.body}
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {studioSection.features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-2xl border border-border bg-card p-8 transition-all duration-200 hover:-translate-y-1 hover:border-waymarks-accent hover:shadow-card-hover"
            >
              <h3 className="flex items-center gap-3 text-xl font-bold text-waymarks-secondary">
                <Icon name={feature.icon} className="size-6" />
                {feature.title}
              </h3>
              <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}