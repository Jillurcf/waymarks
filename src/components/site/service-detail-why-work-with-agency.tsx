import { CircleHelp } from "lucide-react";

import type { ServiceDetail } from "@/lib/content/service-details";

/**
 * "Why work with a UI/UX design agency" band: sits directly under the hero and
 * mirrors the "what you receive" layout — the question headline and the two
 * rationale lines lead in the left column (white lead, gradient agency phrase,
 * muted supporting paragraph), while the trailing column repeats the handover
 * deliverables as raised cards, each behind a gradient question mark. Renders
 * nothing on services without the section copy.
 */
export function ServiceDetailWhyWorkWithAgency({ service }: { service: ServiceDetail }) {
  const section = service.whyWorkWithAgency;
  const { items } = service.whatYouReceive;

  if (!section) return null;

  return (
    <section className="border-b border-white/10 bg-waymarks-surface py-20 text-white lg:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-start lg:gap-6">
          <div className="mx-auto max-w-4xl lg:mx-0">
            <h2 className="text-[32px] font-bold leading-[1.15] tracking-tight text-white sm:text-[40px] lg:text-[40px]">
              {section.heading.lead}{" "}
              <span className="waymarks-gradient-text">{section.heading.highlight}</span>
            </h2>
            <p className="mt-6 text-base leading-relaxed text-white sm:text-lg">
              {section.lead}
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              {section.body}
            </p>
          </div>
          <div>
            <ul className="space-y-5">
              {items.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-4 rounded-xl border border-white/10 bg-waymarks-surface-raised p-5 shadow-card"
                >
                  <span className="waymarks-cta-gradient flex size-9 shrink-0 items-center justify-center rounded-full text-waymarks-dark shadow-card">
                    <CircleHelp className="size-4" strokeWidth={3} aria-hidden="true" />
                  </span>
                  <span className="text-base leading-relaxed text-white sm:text-lg">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
