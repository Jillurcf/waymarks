import { Check } from "lucide-react";

import type { ServiceDetail } from "@/lib/content/service-details";

/**
 * "What you receive" band: the statement headline leads in the left column —
 * white for the question, the CTA gradient on the middle phrase, white again for
 * the tail — and the trailing column lists the five handover deliverables, each
 * behind a green glass tick. Stacks to a single column below the tablet
 * breakpoint (design-system §3).
 */
export function ServiceDetailWhatYouReceive({ service }: { service: ServiceDetail }) {
  const { heading, items } = service.whatYouReceive;

  return (
    <section className="border-b border-white/10 bg-waymarks-surface py-20 text-white lg:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-start lg:gap-6">
          <div className="mx-auto max-w-4xl lg:mx-0">
            <h2 className="text-[32px] font-bold leading-[1.15] tracking-tight text-white sm:text-[40px] lg:text-[40px]">
              {heading.lead}
              <span className="waymarks-gradient-text block">{heading.highlight}</span>
              {heading.tail}
            </h2>

          </div>
          <div>
            <ul className="space-y-5">
              {items.map((item) => (
                <li key={item} className="flex items-start gap-4">
                  <span className="flex size-9 shrink-0 items-center justify-center rounded-full border border-waymarks-primary/30 bg-waymarks-primary/15 text-waymarks-primary shadow-card backdrop-blur-md">
                    <Check className="size-4" strokeWidth={3} aria-hidden="true" />
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