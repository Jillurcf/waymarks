import Link from "next/link";
import {
  ArrowRight,
  PanelsTopLeft,
  Sparkles,
  LayoutTemplate,
  Workflow,
  Rocket,
  Smartphone,
  type LucideIcon,
} from "lucide-react";

import { SectionHeading } from "@/components/site/section-heading";
import { services } from "@/lib/content/services";
import { whatWeDo } from "@/lib/content/home";

const iconMap: Record<string, LucideIcon> = {
  PanelsTopLeft,
  Sparkles,
  LayoutTemplate,
  Workflow,
  Rocket,
  Smartphone,
};

export function ServicesGrid() {
  return (
    <section id="services" className="py-20 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow={whatWeDo.eyebrow}
          title={whatWeDo.title}
          description={whatWeDo.description}
        />
        <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = iconMap[service.icon] ?? Sparkles;
            return (
              <li key={service.slug}>
                <Link
                  href={`/services/${service.slug}`}
                  className="group flex h-full flex-col gap-4 rounded-xl border border-border bg-card p-6 transition-all hover:border-waymark-primary/40 hover:shadow-sm"
                >
                  <span className="flex size-10 items-center justify-center rounded-lg bg-waymark-primary/10 text-waymark-deep">
                    <Icon className="size-5" aria-hidden="true" />
                  </span>
                  <h3 className="text-lg font-medium tracking-tight">
                    {service.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {service.summary}
                  </p>
                  <span className="mt-auto inline-flex items-center gap-1 text-sm font-medium text-waymark-deep">
                    Learn more
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
      </div>
    </section>
  );
}