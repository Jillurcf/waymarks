import { Check } from "lucide-react";

import { identityCapabilities } from "@/lib/content/about";

import { Icon } from "./icon";

/**
 * "Identity & Capabilities" section: a centred eyebrow, gradient headline and
 * lead paragraph, then two capability cards — the studio and the distributed
 * network — each led by its Figma mark, a note, and a green glass tick list.
 * Sits on the page base (`waymarks-dark`) so the closing `waymarks-surface` CTA
 * band still reads as a distinct step beneath it (design-system §3).
 */
export function IdentityCapabilities() {
  const { label, title, intro, cards } = identityCapabilities;

  return (
    <section className="border-t border-white/10 bg-waymarks-dark py-20 text-white lg:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl text-center lg:max-w-2xl">
          <p className="text-xs font-semibold tracking-widest text-white lg:text-[40px]">
            {label}
          </p>

          <h2 className="waymarks-gradient-text mt-4 text-[32px] font-bold leading-[1.15] tracking-tight sm:text-[40px]">
            {title}
          </h2>

          <p className="mx-auto mt-6 max-w-6xl text-xl font-normal leading-relaxed text-white ">
            {intro}
          </p>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-2">
          {cards.map((card) => (
            <div
              key={card.title}
              className="rounded-3xl border border-white/2 bg-white/2 raised p-8 shadow-card"
            >
              <Icon name={card.icon} className="size-18" />

              <h3 className="mt-6 text-lg font-semibold text-white">
                {card.title}
              </h3>
              <p className="mt-3 text-sm font-normal leading-relaxed text-white/75">
                {card.body}
              </p>

              <ul className="mt-6 space-y-4">
                {card.points.map((point) => (
                  <li key={point} className="flex items-start gap-3">
                    <span className="flex size-8 shrink-0 items-center justify-center rounded-full border border-waymarks-primary/30 bg-waymarks-primary/15 text-waymarks-primary shadow-card backdrop-blur-md">
                      <Check className="size-4" strokeWidth={3} aria-hidden="true" />
                    </span>
                    <span className="text-sm leading-relaxed text-white">
                      {point}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
