import { ArrowRight } from "lucide-react";

import { Reveal } from "@/components/site/reveal";
import { SectionHeading } from "@/components/site/section-heading";
import { outcomesSection } from "@/lib/content/home";

// Outcomes section: every product should exist for a reason. Stated openings
// on the left, the outcome list + closing emphasis on the right.
export function OutcomesSection() {
  return (
    <section
      aria-labelledby="outcomes-title"
      className="bg-secondary/30 py-20 sm:py-32"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <SectionHeading
              align="left"
              eyebrow={outcomesSection.eyebrow}
              title={outcomesSection.title}
              id="outcomes-title"
              className="mb-10"
            />
            <ul className="space-y-5">
              {outcomesSection.intro.map((line) => (
                <li
                  key={line}
                  className="border-t border-border pt-5 text-base leading-relaxed text-muted-foreground first:border-t-0 first:pt-0"
                >
                  {line}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={100}>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-widest text-waymarks-secondary">
              {outcomesSection.listTitle}
            </h3>
            <ul className="grid grid-cols-1 gap-2.5 sm:grid-cols-2">
              {outcomesSection.items.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2 rounded-lg border border-border bg-card p-3.5 text-sm leading-relaxed"
                >
                  <ArrowRight
                    className="mt-0.5 size-4 shrink-0 text-waymarks-accent"
                    aria-hidden="true"
                  />
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-8 space-y-1.5 border-t border-border pt-6">
              {outcomesSection.closing.map((line) => (
                <p
                  key={line}
                  className="text-xl font-semibold tracking-tight text-waymarks-secondary"
                >
                  {line}
                </p>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}