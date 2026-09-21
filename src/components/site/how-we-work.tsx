import { Check } from "lucide-react";

import { Reveal } from "@/components/site/reveal";
import { SectionHeading } from "@/components/site/section-heading";
import {
  aboutProcessHeading,
  aboutProcessSteps,
} from "@/lib/content/about";

// Numbered step cards with concrete bullet lists — used on the About page.
export function HowWeWork() {
  return (
    <section id="process" aria-labelledby="process-title" className="py-20 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow={aboutProcessHeading.eyebrow}
          title={aboutProcessHeading.title}
          description={aboutProcessHeading.description}
          id="process-title"
        />
        <ol className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {aboutProcessSteps.map((step, index) => (
            <li key={step.step}>
              <Reveal delay={index * 100} className="h-full">
                <div className="flex h-full flex-col gap-4 rounded-xl border border-border bg-card p-6">
                  <span
                    className="text-xs font-semibold uppercase tracking-widest text-waymarks-accent tabular-nums"
                    aria-hidden="true"
                  >
                    Step {step.step}
                  </span>
                  <h3 className="text-lg font-medium tracking-tight">{step.title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {step.description}
                  </p>
                  <ul className="mt-auto space-y-2 border-t border-border pt-4">
                    {step.bullets.map((bullet) => (
                      <li
                        key={bullet}
                        className="flex items-center gap-2 text-sm text-foreground"
                      >
                        <Check
                          className="size-4 shrink-0 text-waymarks-accent"
                          aria-hidden="true"
                        />
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}