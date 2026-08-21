import { PhoneCall } from "lucide-react";

import { CtaLink } from "@/components/site/cta";
import { Reveal } from "@/components/site/reveal";
import {
  bookCallHref,
  closingCta,
  site,
} from "@/lib/content/site";

// Closing contact CTA band (BR-2 / FR-4): every core inner page ends in a
// visible contact action. Dark brand surface, one gradient CTA, phone as
// secondary info. Content defaults to site.ts; pages may override copy.
export function ClosingCta({
  eyebrow,
  title,
  body,
  primaryLabel,
}: {
  eyebrow?: string;
  title?: string;
  body?: string;
  primaryLabel?: string;
}) {
  return (
    <section
      aria-labelledby="closing-cta-title"
      className="bg-waymarks-dark text-waymarks-light"
    >
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
        <Reveal>
          <div className="max-w-2xl">
            <p className="mb-3 text-xs font-medium uppercase tracking-widest text-waymarks-accent">
              {eyebrow ?? closingCta.eyebrow}
            </p>
            <h2
              id="closing-cta-title"
              className="text-3xl font-medium tracking-tight sm:text-4xl"
            >
              {title ?? closingCta.title}
            </h2>
            <p className="mt-4 text-base leading-relaxed text-waymarks-light/70">
              {body ?? closingCta.body}
            </p>
            <div className="mt-8 flex flex-col gap-6 sm:flex-row sm:items-center">
              <CtaLink
                href={bookCallHref}
                external
                variant="gradient"
                className="h-11 px-6 text-base"
              >
                {primaryLabel ?? closingCta.primaryLabel}
              </CtaLink>
              <a href={site.phoneHref} className="group inline-flex items-center gap-3">
                <span className="flex size-11 shrink-0 items-center justify-center rounded-full border border-waymarks-light/20 text-waymarks-primary transition-colors group-hover:border-waymarks-primary/50">
                  <PhoneCall className="size-5" aria-hidden="true" />
                </span>
                <span>
                  <span className="block text-xs text-waymarks-light/60">
                    {closingCta.phoneLabel}
                  </span>
                  <span className="block text-base font-medium tabular-nums transition-colors group-hover:text-waymarks-primary">
                    {site.phone}
                  </span>
                </span>
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
