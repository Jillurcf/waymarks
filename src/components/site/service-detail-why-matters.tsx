import type { ServiceDetail } from "@/lib/content/service-details";

/**
 * "Why it matters" band: the section headline leads on the left — white for the
 * question, the CTA gradient on the closing phrase — and the argument follows in
 * the trailing column as one lead line over a supporting paragraph. Stacks to a
 * single column below the tablet breakpoint (design-system §3).
 */
export function ServiceDetailWhyMatters({ service }: { service: ServiceDetail }) {
  const { heading, lead, body } = service.whyItMatters;

  return (
    <section className="border-b border-white/10 bg-waymarks-dark py-20 text-white lg:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-start lg:gap-16">
          <h2 className="text-[32px] font-bold tracking-tight text-white sm:text-[40px]">
            {heading.lead}
            <span className="waymarks-gradient-text block">{heading.highlight}</span>
          </h2>

          <div>
            <p className="text-2xl font-medium leading-snug tracking-tight text-white sm:text-[28px]">
              {lead}
            </p>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground">{body}</p>
          </div>
        </div>
      </div>
    </section>
  );
}