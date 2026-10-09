import { websiteDevelopmentServices } from "@/lib/content/website-design";

import { Icon } from "./icon";

/**
 * "Website development services" band: copied from `WebsiteDesignServices` —
 * the service rows lead on the right behind their icons, while the left column
 * carries the headline (white lead, gradient services phrase) with the visual
 * beneath it. Sits on the dark base so the alternating section rhythm holds
 * (design-system §3).
 */
export function WebsiteDevelopmentServices() {
  return (
    <section className="border-b border-white/10 bg-waymarks-dark py-20 text-white lg:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-start lg:gap-16">
             <ul className="space-y-5">
            {websiteDevelopmentServices.items.map((item) => (
              <li
                key={item.label}
                className="flex items-center gap-4 rounded-xl border border-white/10 bg-waymarks-surface-raised p-5 shadow-card"
              >
                <span className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-waymarks-primary/15 text-waymarks-primary">
                  <Icon name={item.icon} />
                </span>
                <span className="text-base font-semibold text-white sm:text-lg">
                  {item.label}
                </span>
              </li>
            ))}
          </ul>
          <div>
            <h2 className="text-[32px] font-bold leading-[1.15] tracking-tight text-white sm:text-[40px] lg:text-[40px]">
              {websiteDevelopmentServices.heading.lead}{" "}
            </h2>
            <h2 className="text-[32px] font-bold leading-[1.15] tracking-tight waymarks-gradient-text sm:text-[40px] lg:text-[40px]">
              {websiteDevelopmentServices.heading.highlight}
            </h2>

            <p className="mt-6 text-base font-normal leading-relaxed text-white/75">
              {websiteDevelopmentServices.body}
            </p>

            {/* Section visual. Plain img: images.unoptimized makes next/image
                pure overhead (quality gate C). */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={websiteDevelopmentServices.image.src}
              alt={websiteDevelopmentServices.image.alt}
              width={websiteDevelopmentServices.image.width}
              height={websiteDevelopmentServices.image.height}
              className="mt-8 h-auto w-full max-w-md rounded-2xl border border-white/10"
            />
          </div>

        </div>
      </div>
    </section>
  );
}
