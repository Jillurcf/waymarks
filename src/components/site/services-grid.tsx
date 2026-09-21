import Link from "next/link";
import { ArrowRight } from "lucide-react";
import {
  PanelsTopLeft,
  Sparkles,
  LayoutTemplate,
  Workflow,
  Rocket,
  Smartphone,
  type LucideIcon,
} from "lucide-react";

import { Reveal } from "@/components/site/reveal";
import { SectionHeading } from "@/components/site/section-heading";
import { services } from "@/lib/content/services";
import { servicesSection } from "@/lib/content/home";
import { bookCallHref } from "@/lib/content/site";

// Block 4 — Services rows (template .our-services): full-width linked rows —
// icon, title, blurb, token-graphic tile revealed on hover, read-more —
// closed by the free-discovery-call quote bar. Heading defaults to the home
// copy; /services overrides it with its own module content (C3.2).
const iconMap: Record<string, LucideIcon> = {
  PanelsTopLeft,
  Sparkles,
  LayoutTemplate,
  Workflow,
  Rocket,
  Smartphone,
};

export function ServicesGrid({
  eyebrow,
  title,
  description,
}: {
  eyebrow?: string;
  title?: string;
  description?: string;
}) {
  return (
    <section id="services" aria-labelledby="services-title" className="py-20 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow={eyebrow ?? servicesSection.eyebrow}
          title={title ?? servicesSection.title}
          description={description ?? servicesSection.description}
          id="services-title"
        />
        <Reveal>
          <ul className="space-y-4">
            {services.map((service) => {
              const Icon = iconMap[service.icon] ?? Sparkles;
              return (
                <li key={service.slug}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="group grid grid-cols-[auto_1fr_auto] items-center gap-4 rounded-xl border border-border bg-card p-4 transition-all hover:border-waymarks-primary/40 hover:shadow-card-hover sm:gap-6 sm:p-6 lg:grid-cols-[auto_1fr_auto_auto]"
                  >
                    <span className="flex size-12 shrink-0 items-center justify-center rounded-lg bg-waymarks-primary/10 text-waymarks-secondary">
                      <Icon className="size-6" aria-hidden="true" />
                    </span>
                    <span>
                      <h3 className="text-lg font-medium tracking-tight transition-colors group-hover:text-waymarks-accent">
                        {service.title}
                      </h3>
                      <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                        {service.summary}
                      </p>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                        <span className="font-medium text-foreground">
                          What we help with:
                        </span>{" "}
                        {service.helpsWith.join(", ")}
                      </p>
                    </span>
                    {/* Token-graphic tile, revealed on hover/focus (template's
                        hover image; no scraped photography ships) */}
                    <span
                      aria-hidden="true"
                      className="hidden size-24 items-center justify-center rounded-lg bg-gradient-to-br from-waymarks-primary/25 via-waymarks-accent/15 to-waymarks-secondary/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100 lg:flex"
                    >
                      <Icon className="size-7 text-waymarks-secondary/70" />
                    </span>
                    <span className="flex items-center gap-1 text-sm font-medium text-waymarks-secondary">
                      <span className="sr-only sm:not-sr-only">
                        {service.exploreLabel}
                      </span>
                      <ArrowRight
                        className="size-4 transition-transform group-hover:translate-x-0.5"
                        aria-hidden="true"
                      />
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </Reveal>

        <Reveal delay={100}>
          <p className="mt-10 flex flex-col items-center justify-center gap-x-3 gap-y-2 rounded-xl border border-waymarks-primary/30 bg-waymarks-primary/5 px-6 py-5 text-center sm:flex-row">
            <span className="rounded-full bg-waymarks-primary/15 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-waymarks-secondary">
              {servicesSection.closingBar.highlight}
            </span>
            <span className="text-muted-foreground">
              {servicesSection.closingBar.text}
            </span>
            <a
              href={bookCallHref}
              className="font-medium text-waymarks-accent underline-offset-4 hover:underline"
            >
              {servicesSection.closingBar.ctaLabel}
            </a>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
