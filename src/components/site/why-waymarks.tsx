import { Users, MessagesSquare, Gauge, type LucideIcon } from "lucide-react";

import { SectionHeading } from "@/components/site/section-heading";
import { differentiators, whyHeading } from "@/lib/content/home";

const iconMap: Record<string, LucideIcon> = {
  Users,
  MessagesSquare,
  Gauge,
};

export function WhyWaymarks() {
  return (
    <section id="why" className="py-20 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow={whyHeading.eyebrow}
          title={whyHeading.title}
          description={whyHeading.description}
        />
        <ul className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {differentiators.map((item) => {
            const Icon = iconMap[item.icon] ?? Users;
            return (
              <li
                key={item.title}
                className="flex flex-col gap-4 rounded-xl border border-border bg-card p-6"
              >
                <span className="flex size-10 items-center justify-center rounded-lg bg-waymark-primary/10 text-waymark-deep">
                  <Icon className="size-5" aria-hidden="true" />
                </span>
                <h3 className="text-lg font-medium tracking-tight">
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}