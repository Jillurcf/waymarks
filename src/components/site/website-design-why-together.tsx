import { websiteDesignWhyTogether } from "@/lib/content/website-design";

import { Icon } from "./icon";

/**
 * "Why Web Design and Development Should Work Together" band: sits on the
 * surface ramp after the development services so the cards can rise one step on
 * surface-raised. Headline leads white, closes on the CTA gradient; the two
 * supporting lines state the argument, then four outcome cards give the reasons.
 */
export function WebsiteDesignWhyTogether() {
  return (
    <section className="border-b border-white/10 bg-waymarks-surface py-20 text-white lg:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-12 max-w-md text-center">
          <div className="mx-auto mb-5 h-[3px] w-6 rounded-full bg-waymarks-primary" />

          <h2 className="text-2xl font-bold leading-tight tracking-tight sm:text-3xl">
            <span className="block">{websiteDesignWhyTogether.heading.lead}</span>
            {websiteDesignWhyTogether.heading.highlight.map((line) => (
              <span
                key={line}
                className="block waymarks-gradient-text"
              >
                {line}
              </span>
            ))}
          </h2>

          <p className="mx-auto mt-4 max-w-sm text-sm leading-relaxed text-white/75">
            {websiteDesignWhyTogether.intro}
          </p>

          <p className="mt-3 text-xs leading-relaxed text-white/50">
            {websiteDesignWhyTogether.footnote}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:gap-6">
          {websiteDesignWhyTogether.features.map((feature) => (
            <article
              key={feature.title}
              className="min-h-[150px] rounded-xl border border-white/10 bg-waymarks-surface-raised p-5 shadow-card transition-colors duration-300 hover:border-waymarks-primary/30 sm:p-6"
            >
              <div className="mb-4 flex items-center gap-4">
                <Icon
                  name={feature.icon}
                  className="size-6 stroke-[1.7] shrink-0 text-waymarks-primary"
                />
                <h3 className="text-base font-semibold text-white">
                  {feature.title}
                </h3>
              </div>

              <p className="text-sm leading-relaxed text-white/75">
                {feature.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}