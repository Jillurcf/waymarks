import { philosophyPrinciples } from "@/lib/content/about";

import { Icon } from "./icon";

/**
 * "Philosophy / What We Believe" band: copied from `Standards` — the belief
 * rows lead on the left behind their icons, while the right column carries the
 * headline (white "Philosophy", gradient "What We Believe") with the body and
 * visual beneath it. Sits on a `waymarks-surface` band so the section rhythm
 * alternates beneath the dark Standards band (design-system §3).
 */
export function Philosophy() {
  return (
    <section className="border-t border-white/10 bg-waymarks-surface py-20 text-white lg:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-start lg:gap-16">
          <ul className="space-y-5">
            {philosophyPrinciples.items.map((item) => (
              <li
                key={item.label}
                className="flex gap-8 rounded-xl border border-white/10 bg-waymarks-surface-raised p-9 shadow-card"
              >
                <span className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-waymarks-primary/15 text-waymarks-primary">
                  <Icon name={item.icon} />
                </span>
                <span className="text-base font-semibold text-white sm:text-lg">
                  {item.label}
                  <p className="mt-4 text-sm font-normal leading-relaxed text-white/75">
                    {item.body}
                  </p>
                </span>
              </li>
            ))}
          </ul>

          <div className="text-end">
            <h2 className="text-[40px] font-bold leading-[1.15] tracking-tight text-white">
              {philosophyPrinciples.heading.lead}
            </h2>
            <h2 className="text-[40px] font-bold leading-[1.15] tracking-tight waymarks-gradient-text">
              {philosophyPrinciples.heading.highlight}
            </h2>

            <p className="text-base font-normal leading-relaxed text-white/75">
              {philosophyPrinciples.body.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </p>

            {/* Section visual. Plain img: images.unoptimized makes next/image
                pure overhead (quality gate C). */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={philosophyPrinciples.image.src}
              alt={philosophyPrinciples.image.alt}
              width={philosophyPrinciples.image.width}
              height={philosophyPrinciples.image.height}
              className="mt-6 ml-auto h-auto w-full max-w-md rounded-2xl border border-white/10"
            />
          </div>
        </div>
      </div>
    </section>
  );
}