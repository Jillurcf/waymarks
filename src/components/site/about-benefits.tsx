import { FileCheck, MessagesSquare, Target, UserCheck, type LucideIcon } from "lucide-react";

import { Reveal } from "@/components/site/reveal";
import { SectionHeading } from "@/components/site/section-heading";
import { aboutBenefits } from "@/lib/content/about";

// Values/benefits grid on /about (C3.1, FR-15): what every engagement
// includes, as icon boxes.
const iconMap: Record<string, LucideIcon> = {
  UserCheck,
  Target,
  FileCheck,
  MessagesSquare,
};

export function AboutBenefits() {
  return (
    <section
      aria-labelledby="about-benefits-title"
      className="bg-secondary/40 py-20 sm:py-32"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow={aboutBenefits.eyebrow}
          title={aboutBenefits.title}
          description={aboutBenefits.description}
          id="about-benefits-title"
        />
        <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {aboutBenefits.items.map((item, index) => {
            const Icon = iconMap[item.icon] ?? Target;
            return (
              <li key={item.title} className="h-full">
                <Reveal delay={index * 100} className="h-full">
                  <div className="flex h-full flex-col gap-3 rounded-xl border border-border bg-card p-6 transition-all hover:border-waymarks-primary/40 hover:shadow-card-hover">
                    <span className="flex size-11 items-center justify-center rounded-lg bg-waymarks-primary/10 text-waymarks-secondary">
                      <Icon className="size-5" aria-hidden="true" />
                    </span>
                    <h3 className="text-base font-medium tracking-tight">
                      {item.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {item.body}
                    </p>
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
