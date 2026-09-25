import { servicesSection } from "@/lib/content/home";

import { CtaButton } from "./cta";
import { Icon } from "./icon";

/**
 * Services grid (P4.5): seven service cards plus the Explore All action,
 * matching the design's 3-column card grid with hover lift + accent border.
 */
export function ServicesGrid() {
  return (
    <section id="services" className="scroll-mt-24 bg-waymarks-dark py-20 lg:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 className="max-w-2xl text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          {servicesSection.title}
        </h2>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
          {servicesSection.intro}
        </p>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {servicesSection.items.map((service) => (
            <article
              key={service.title}
              className="flex min-h-64 flex-col justify-between rounded-2xl border border-border bg-card p-8 transition-all duration-200 hover:-translate-y-1 hover:border-waymarks-accent hover:shadow-card-hover"
            >
              <div>
                <Icon name={service.icon} className="size-8 text-waymarks-primary" />
                <h3 className="mt-4 text-xl font-bold text-white">
                  {service.title}
                </h3>
                <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                  {service.summary}
                </p>
              </div>
              <a
                href={service.cta.href}
                className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-waymarks-accent transition-colors hover:text-waymarks-primary"
              >
                {service.cta.label}
                <Icon name={service.cta.icon} className="size-4" />
              </a>
            </article>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <CtaButton cta={servicesSection.exploreAll} variant="outline" />
        </div>
      </div>
    </section>
  );
}