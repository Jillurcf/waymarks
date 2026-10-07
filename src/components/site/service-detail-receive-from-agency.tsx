import type { ServiceDetail } from "@/lib/content/service-details";

import { Icon } from "./icon";

/**
 * "What you receive from our UI/UX design agency" band: reversed from the band
 * it replaces — the deliverable rows lead on the left behind their icons, while
 * the trailing column carries the headline (white lead, gradient agency phrase)
 * with the product visual beneath it. Sits on the dark base so the alternating
 * section rhythm holds (design-system §3).
 */
export function ServiceDetailReceiveFromAgency({ service }: { service: ServiceDetail }) {
  const section = service.receiveFromAgency;

  if (!section) return null;

  return (
    <section className="border-b border-white/10 bg-waymarks-dark py-20 text-white lg:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-start lg:gap-16">
          <ul className="space-y-5">
            {section.items.map((item) => (
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
              {section.heading.lead}{" "}
              <span className="waymarks-gradient-text">{section.heading.highlight}</span>
            </h2>

            {/* Product visual (446 × 727 portrait). Plain img: images.unoptimized
                makes next/image pure overhead (quality gate C). */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={section.image.src}
              alt={section.image.alt}
              width={section.image.width}
              height={section.image.height}
              className="mt-8 h-auto w-full max-w-md rounded-2xl border border-white/10"
            />
          </div>
        </div>
      </div>
    </section>
  );
}