import { projectManagementServicesHelp as services } from "@/lib/content/project-management-experience";

import { Icon } from "./icon";

/**
 * "Where our project management services can help" band: copied from
 * `WebsiteDesignServices` — the service rows lead on the left behind their
 * icons, while the trailing column carries the headline (white lead, gradient
 * services phrase) with the visual beneath it. Sits on the dark base so the
 * alternating section rhythm holds (design-system §3).
 */
export function ProjectManagementServicesHelp() {
  return (
    <section className="border-b border-white/10 bg-waymarks-dark py-20 text-white lg:py-24">
      <div className="container">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-start lg:gap-16">
          <div>
            <h2 className="text-[32px] font-bold leading-[1.15] tracking-tight text-white sm:text-[40px] lg:text-[40px]">
              {services.heading.lead}{" "}
            </h2>
            <h2 className="text-[32px] font-bold leading-[1.15] tracking-tight waymarks-gradient-text sm:text-[40px] lg:text-[40px]">
              {services.heading.highlight}
            </h2>

            <p className="mt-6 text-[20px] font-normal leading-relaxed text-white">
              {services.body.lead}
            </p>
            <p className="mt-4 text-base font-normal leading-relaxed text-white/75">
              {services.body.note}
            </p>

            {/* Section visual. Plain img: images.unoptimized makes next/image
                pure overhead (quality gate C). */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={services.image.src}
              alt={services.image.alt}
              width={services.image.width}
              height={services.image.height}
              className="mt-8 h-auto w-full max-w-md rounded-2xl border border-white/10"
            />
          </div>
          <ul className="space-y-5">
            {services.items.map((item) => (
              <li
                key={item.label}
                className="flex gap-8 rounded-xl border border-white/12 p-8 shadow-card"
              >
                <span
                  className={
                    item.size === "original"
                      ? "flex h-12 w-[60px] shrink-0 items-center justify-center text-waymarks-primary"
                      : "flex shrink-0 items-center justify-center text-waymarks-primary"
                  }
                >
                  <Icon
                    name={item.icon}
                    className={item.size === "original" ? "h-12 w-[60px]" : undefined}
                  />
                </span>
                <div>
                  <div className="flex flex-col">
                  <span className="text-[28px] lg:text-[28px] font-semibold text-white sm:text-lg">
                    {item.label}
                  </span>
                  {item.description ? (
                    <p className="mt-4 text-sm leading-relaxed text-white/60">
                      {item.description}
                    </p>
                  ) : null}
                </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
