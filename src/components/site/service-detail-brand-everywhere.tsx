import type { ServiceDetail } from "@/lib/content/service-details";

import { Icon } from "./icon";

/**
 * "A brand should work everywhere" band: the rule sits in the headline on the
 * left, the argument follows beneath it, and the trailing column lists the
 * touchpoints as icon-and-label cells in a two-column grid. Sits on the dark base
 * with the statement bands, so the `waymarks-surface` line-up band below it keeps
 * its own run (design-system §3).
 */
export function ServiceDetailBrandEverywhere({ service }: { service: ServiceDetail }) {
  const { heading, lead, body, touchpoints } = service.brandEverywhere;

  return (
    <section className="border-b border-white/10 bg-waymarks-dark py-20 text-white lg:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <h2 className="text-[32px] font-bold leading-[1.15] tracking-tight text-white sm:text-[40px]">
              {heading.lead}
              <span className="waymarks-gradient-text block">{heading.highlight}</span>
            </h2>
            <p className="mt-6 text-xl font-normal leading-relaxed text-white">
              {lead}
            </p>
            <p className="mt-4 max-w-xl text-base font-normal leading-relaxed text-white/25">
              {body}
            </p>
          </div>

          <ul className="grid gap-4 lg:grid-cols-2">
            {touchpoints.map((touchpoint) => (
              <li
                key={touchpoint.title}
                className="flex items-center gap-4 rounded-2xl border border-white/25 p-5"
              >
                <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-waymarks-primary/15 text-waymarks-primary">
                  <Icon name={touchpoint.icon} />
                </span>
                <span className="text-base font-semibold text-white">{touchpoint.title}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}