import type { ServiceDetail } from "@/lib/content/service-details";

/**
 * Brand identity process band: the headline sits in a dotted frame, and the five
 * steps run in one row beneath a second frame — each number marker is centred on
 * that frame's top rule, so the circles read as a single marked route. The row
 * becomes one column below the mobile breakpoint (design-system §3).
 */
export function ServiceDetailBrandIdentityProcess({ service }: { service: ServiceDetail }) {
  const { heading, steps } = service.designProcess;

  return (
    <section className="border-b border-white/10 bg-waymarks-dark py-20 text-white lg:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 className="mx-auto max-w-md px-5 py-3 text-center text-[28px] font-bold leading-tight tracking-tight text-white sm:text-[32px] lg:text-[40px]">
          {heading.lead}
          <span className="text-white block">{heading.highlight}</span>
        </h2>

        <div className="relative mx-auto mt-16 max-w-5xl px-4 pt-8 pb-10 sm:px-6 lg:px-8">
          {/* Connector line threading the five number markers, plus a soft
              brand glow on the middle of the route (design-system §5.4). */}

          <div
            aria-hidden="true"
            className="pointer-events-none absolute top-0 left-1/2 hidden h-32 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle_at_center,var(--color-waymarks-primary)_0%,transparent_70%)] opacity-20 blur-xl lg:block"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute lg:top-8 right-[10%] left-[10%] hidden h-px bg-white/10 lg:block"
          />
          <ol className="relative grid gap-y-12 sm:grid-cols-2 lg:grid-cols-5 lg:gap-x-6">
            {steps.map((step) => (
              <li key={step.number} className="relative px-1 pt-9 text-center">
                <span className="absolute top-0 left-1/2 flex size-8 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-waymarks-surface-raised font-mono text-xs font-semibold tabular-nums text-waymarks-primary">
                  {step.number}

                </span>

                <h3 className="text-base font-medium tracking-tight text-white">
                  {step.title}
                </h3>
                <p className="mx-auto mt-2 max-w-[15rem] text-sm leading-relaxed text-muted-foreground">
                  {step.description}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}