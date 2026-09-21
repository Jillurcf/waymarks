import { Check } from "lucide-react";

import { Reveal } from "@/components/site/reveal";
import { SectionHeading } from "@/components/site/section-heading";
import { fitSection } from "@/lib/content/home";

// Fit section: the situations Waymark is built for, as a chip grid, closing
// with the reassurance that a loose brief is fine.
export function FitSection() {
  return (
    <section aria-labelledby="fit-title" className="py-20 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow={fitSection.eyebrow}
          title={fitSection.title}
          description={fitSection.intro}
          id="fit-title"
        />
        <Reveal>
          <ul className="mx-auto grid max-w-3xl grid-cols-1 gap-3 sm:grid-cols-2">
            {fitSection.items.map((item) => (
              <li
                key={item}
                className="flex items-center gap-3 rounded-lg border border-border bg-card px-4 py-3 text-sm font-medium"
              >
                <Check
                  className="size-4 shrink-0 text-waymarks-accent"
                  aria-hidden="true"
                />
                {item}
              </li>
            ))}
          </ul>
        </Reveal>
        <Reveal delay={100}>
          <p className="mx-auto mt-10 max-w-2xl text-center text-base leading-relaxed text-muted-foreground">
            {fitSection.note}
          </p>
        </Reveal>
      </div>
    </section>
  );
}