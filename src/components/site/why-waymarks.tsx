import { Users, MessagesSquare, Gauge, FileCheck, MapPin, type LucideIcon } from "lucide-react";

import { Reveal } from "@/components/site/reveal";
import { SectionHeading } from "@/components/site/section-heading";
import { differentiators, whyHeading } from "@/lib/content/home";

// Block 6 — Why choose us (template .why-choose-us): four icon boxes flanking
// a central waymark motif — a slow-rotating ring around a waypoint marker,
// built purely from tokens (the template's stock graphic is not ported).
const iconMap: Record<string, LucideIcon> = {
  Users,
  MessagesSquare,
  Gauge,
  FileCheck,
};

function WhyBox({ item }: { item: (typeof differentiators)[number] }) {
  const Icon = iconMap[item.icon] ?? Users;
  return (
    <div className="flex items-start gap-4 rounded-xl border border-border bg-card p-5 transition-all hover:border-waymarks-primary/40 hover:shadow-card">
      <span className="flex size-11 shrink-0 items-center justify-center rounded-lg bg-waymarks-primary/10 text-waymarks-secondary">
        <Icon className="size-5" aria-hidden="true" />
      </span>
      <div>
        <h3 className="text-base font-medium tracking-tight">{item.title}</h3>
        <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
          {item.description}
        </p>
      </div>
    </div>
  );
}

export function WhyWaymarks() {
  return (
    <section id="why" aria-labelledby="why-title" className="py-20 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow={whyHeading.eyebrow}
          title={whyHeading.title}
          description={whyHeading.description}
          id="why-title"
        />
        <div className="grid items-center gap-8 lg:grid-cols-[1fr_auto_1fr] lg:gap-12">
          {/* Left pair */}
          <div className="space-y-6 lg:order-1">
            {differentiators.slice(0, 2).map((item) => (
              <WhyBox key={item.title} item={item} />
            ))}
          </div>

          {/* Central waymark graphic */}
          <Reveal className="lg:order-2">
            <div aria-hidden="true" className="relative mx-auto flex size-56 items-center justify-center sm:size-72">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="size-56 rounded-full border border-dashed border-waymarks-primary/50 sm:size-72 animate-spin-slow motion-reduce:[animation-play-state:paused]" />
              </div>
              <div className="flex size-44 items-center justify-center rounded-full bg-gradient-to-br from-waymarks-primary/20 to-waymarks-accent/10 sm:size-56">
                <span className="flex size-16 items-center justify-center rounded-full bg-card shadow-card sm:size-20">
                  <MapPin className="size-7 text-waymarks-secondary sm:size-8" />
                </span>
              </div>
            </div>
          </Reveal>

          {/* Right pair */}
          <div className="space-y-6 lg:order-3">
            {differentiators.slice(2).map((item) => (
              <WhyBox key={item.title} item={item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
