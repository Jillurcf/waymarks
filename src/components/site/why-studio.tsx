import {
  CalendarCheck,
  FileCheck,
  PanelsTopLeft,
  Target,
  TrendingUp,
  Users,
  type LucideIcon,
} from "lucide-react";

import { Reveal } from "@/components/site/reveal";
import { SectionHeading } from "@/components/site/section-heading";
import { whyFeatures, whyHeading } from "@/lib/content/home";

const iconMap: Record<string, LucideIcon> = {
  Users,
  Target,
  PanelsTopLeft,
  FileCheck,
  CalendarCheck,
  TrendingUp,
};

// Why Waymark: the one-team promise, unpacked into six concrete differences.
// Grid of feature cards — no central motif needed here since the process
// band above already carries the spotlight.
export function WhyStudio() {
  return (
    <section aria-labelledby="why-title" className="py-20 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow={whyHeading.eyebrow}
          title={whyHeading.title}
          description={whyHeading.description}
          id="why-title"
        />
        <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {whyFeatures.map((feature, index) => {
            const Icon = iconMap[feature.icon] ?? Users;
            return (
              <li key={feature.title}>
                <Reveal delay={index * 100} className="h-full">
                  <div className="flex h-full items-start gap-4 rounded-xl border border-border bg-card p-6 transition-all hover:border-waymarks-primary/40 hover:shadow-card">
                    <span className="flex size-11 shrink-0 items-center justify-center rounded-lg bg-waymarks-primary/10 text-waymarks-secondary">
                      <Icon className="size-5" aria-hidden="true" />
                    </span>
                    <div>
                      <h3 className="text-base font-medium tracking-tight">
                        {feature.title}
                      </h3>
                      <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                        {feature.description}
                      </p>
                    </div>
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