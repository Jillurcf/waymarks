import { ArrowUpRight } from "lucide-react";

import { Reveal } from "@/components/site/reveal";
import { SectionHeading } from "@/components/site/section-heading";
import { resources, resourcesHeading } from "@/lib/content/home";

// Resources: the research behind the numbers band, listed so readers can
// verify the claims themselves. External links open in a new tab.
export function ResourcesSection() {
  return (
    <section aria-labelledby="resources-title" className="py-20 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow={resourcesHeading.eyebrow}
          title={resourcesHeading.title}
          description={resourcesHeading.description}
          id="resources-title"
        />
        <ul className="mx-auto max-w-3xl space-y-4">
          {resources.map((resource, index) => (
            <li key={resource.title}>
              <Reveal delay={index * 50}>
                <a
                  href={resource.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-start gap-5 rounded-xl border border-border bg-card p-6 transition-all hover:border-waymarks-primary/40 hover:shadow-card"
                >
                  <span
                    className="flex size-10 shrink-0 items-center justify-center rounded-full bg-waymarks-primary/15 text-sm font-semibold tabular-nums text-waymarks-secondary"
                    aria-hidden="true"
                  >
                    {resource.step}
                  </span>
                  <span className="flex-1">
                    <span className="block text-base font-medium tracking-tight transition-colors group-hover:text-waymarks-accent">
                      {resource.title}
                    </span>
                    <span className="mt-1.5 block text-sm leading-relaxed text-muted-foreground">
                      {resource.description}
                    </span>
                    <span className="mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-waymarks-accent underline-offset-4 group-hover:underline">
                      {resource.linkLabel}
                      <ArrowUpRight
                        className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                        aria-hidden="true"
                      />
                    </span>
                  </span>
                </a>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}