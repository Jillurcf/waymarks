import Link from "next/link";
import {
  ArrowRight,
  LayoutTemplate,
  Rocket,
  Sparkles,
  Workflow,
  type LucideIcon,
} from "lucide-react";

import { Reveal } from "@/components/site/reveal";
import { SectionHeading } from "@/components/site/section-heading";
import {
  serviceTeasers,
  serviceTeasersHeading,
} from "@/lib/content/home";

const iconMap: Record<string, LucideIcon> = {
  Rocket,
  Workflow,
  LayoutTemplate,
  Sparkles,
};

// Four service teasers for the most common starting points, each linking to
// its dedicated service page. Two-column card grid.
export function ServiceTeasers() {
  return (
    <section
      aria-labelledby="service-teasers-title"
      className="bg-secondary/30 py-20 sm:py-32"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow={serviceTeasersHeading.eyebrow}
          title={serviceTeasersHeading.title}
          id="service-teasers-title"
        />
        <ul className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {serviceTeasers.map((teaser, index) => {
            const Icon = iconMap[teaser.icon] ?? Rocket;
            return (
              <li key={teaser.title}>
                <Reveal delay={(index % 2) * 100} className="h-full">
                  <div className="flex h-full flex-col gap-4 rounded-xl border border-border bg-card p-6">
                    <span className="flex size-11 items-center justify-center rounded-lg bg-waymarks-primary/10 text-waymarks-secondary">
                      <Icon className="size-5" aria-hidden="true" />
                    </span>
                    <h3 className="text-lg font-medium tracking-tight">
                      {teaser.title}
                    </h3>
                    {teaser.body.map((paragraph) => (
                      <p
                        key={paragraph}
                        className="text-sm leading-relaxed text-muted-foreground"
                      >
                        {paragraph}
                      </p>
                    ))}
                    {teaser.listTitle ? (
                      <p className="text-sm font-semibold">
                        {teaser.listTitle}
                      </p>
                    ) : null}
                    {teaser.list ? (
                      <ul className="flex flex-wrap gap-1.5">
                        {teaser.list.map((item) => (
                          <li
                            key={item}
                            className="rounded-full border border-border bg-background px-3 py-1 text-xs text-muted-foreground"
                          >
                            {item}
                          </li>
                        ))}
                      </ul>
                    ) : null}
                    {teaser.closing ? (
                      <p className="text-sm leading-relaxed text-muted-foreground">
                        {teaser.closing}
                      </p>
                    ) : null}
                    <Link
                      href={teaser.href}
                      className="mt-auto inline-flex items-center gap-1.5 text-sm font-medium text-waymarks-secondary underline-offset-4 hover:underline"
                    >
                      {teaser.cta}
                      <ArrowRight className="size-4" aria-hidden="true" />
                    </Link>
                  </div>
                </Reveal>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}