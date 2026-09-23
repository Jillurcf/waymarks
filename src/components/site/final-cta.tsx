import { finalCtaSection } from "@/lib/content/home";

import { CtaButton } from "./cta";

/**
 * Final CTA banner (P4.12): glowing full-width dark band whose glowing orb
 * sits behind the copy (design full-cta-banner + cta-glow-bg).
 */
export function FinalCta() {
  return (
    <section
      id="contact"
      className="relative scroll-mt-24 overflow-hidden border-y border-white/10 bg-waymarks-dark py-20 text-center text-white"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 h-72 w-[38rem] max-w-full -translate-x-1/2 -translate-y-1/2 rounded-full bg-waymarks-primary/15 blur-3xl"
      />
      <div className="relative mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
          {finalCtaSection.title}
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-white/75 sm:text-lg">
          {finalCtaSection.body}
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <CtaButton cta={finalCtaSection.primaryCta} variant="primary" />
          <CtaButton cta={finalCtaSection.secondaryCta} variant="outline-inverse" />
        </div>
      </div>
    </section>
  );
}