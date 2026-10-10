import { standardsPrinciples } from "@/lib/content/about";

import { Icon } from "./icon";

/**
 * "Standards / Our Principles" band: copied from `WebsiteDevelopmentServices` —
 * the principle rows lead on the left behind their icons, while the right
 * column carries the headline (white "Standards", gradient "Our Principles")
 * with the body and visual beneath it. Sits on the dark base so the section
 * rhythm holds (design-system §3).
 */
export function Standards() {
  return (
    <section className="border-t border-white/10 bg-waymarks-dark py-20 text-white lg:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-start lg:gap-16">
          <div>
            <h2 className="text-[40px] font-bold leading-[1.15] tracking-tight text-white">
              {standardsPrinciples.heading.lead}
            </h2>
            <h2 className="text-[40px] font-bold leading-[1.15] tracking-tight waymarks-gradient-text">
              {standardsPrinciples.heading.highlight}
            </h2>

            <p className="mt-6 text-base font-normal leading-relaxed text-white/75">
              {standardsPrinciples.body}
            </p>

            {/* Section visual. Plain img: images.unoptimized makes next/image
                pure overhead (quality gate C). */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={standardsPrinciples.image.src}
              alt={standardsPrinciples.image.alt}
              width={standardsPrinciples.image.width}
              height={standardsPrinciples.image.height}
              className="mt-8 h-auto w-full max-w-md rounded-2xl border border-white/10"
            />
          </div>
          <ul className="space-y-5">
            {standardsPrinciples.items.map((item) => (
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
        </div>
      </div>
    </section>
  );
}