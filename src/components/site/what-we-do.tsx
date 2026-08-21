import { Reveal } from "@/components/site/reveal";
import { SecondaryCtaLink } from "@/components/site/cta";
import { SectionHeading } from "@/components/site/section-heading";
import { whatWeDo } from "@/lib/content/home";

// Block 5 — What we do (template .what-we-do): copy plus two feature items on
// the left, a three-tile token-graphic collage on the right (the template's
// photo collage, rebuilt without scraped imagery — conversion register C0.2).
export function WhatWeDo() {
  return (
    <section aria-labelledby="what-we-do-title" className="bg-secondary/30 py-20 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <SectionHeading
              align="left"
              eyebrow={whatWeDo.eyebrow}
              title={whatWeDo.title}
              description={whatWeDo.description}
              id="what-we-do-title"
              className="mb-10"
            />
            <ul className="space-y-8">
              {whatWeDo.items.map((item) => (
                <li key={item.title} className="border-t border-border pt-6">
                  <h3 className="text-lg font-medium tracking-tight">
                    {item.title}
                  </h3>
                  <p className="mt-2 max-w-md text-sm leading-relaxed text-muted-foreground">
                    {item.body}
                  </p>
                </li>
              ))}
            </ul>
            <div className="mt-10">
              <SecondaryCtaLink href={whatWeDo.cta.href}>
                {whatWeDo.cta.label}
              </SecondaryCtaLink>
            </div>
          </Reveal>

          {/* Token-graphic collage */}
          <Reveal delay={100}>
            <div aria-hidden="true" className="grid grid-cols-2 gap-4 sm:gap-6">
              <div className="col-span-2 aspect-[16/9] rounded-2xl border border-waymarks-primary/25 bg-gradient-to-br from-waymarks-primary/20 to-waymarks-accent/10" />
              <div className="aspect-square rounded-2xl border border-border bg-gradient-to-tr from-waymarks-secondary/15 to-waymarks-primary/10" />
              <div className="aspect-square rounded-2xl border border-border bg-gradient-to-bl from-waymarks-accent/15 to-waymarks-secondary/5 sm:translate-y-6" />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
