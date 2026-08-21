import { Check, ClipboardCheck, BadgeCheck, KeyRound, type LucideIcon } from "lucide-react";

import { Reveal } from "@/components/site/reveal";
import { CtaLink, SecondaryCtaLink } from "@/components/site/cta";
import {
  pricingBenefits,
  pricingTiers,
} from "@/lib/content/pricing";

// Tier cards (highlighted middle) + benefit row, shared by the home teaser
// (block 10) and the /pricing page (C3.6). Data comes only from pricing.ts.
const benefitIconMap: Record<string, LucideIcon> = {
  ClipboardCheck,
  BadgeCheck,
  KeyRound,
};

export function PricingTiers({
  cta,
  external = false,
}: {
  /** Label + href applied to every tier card's button. */
  cta: { label: string; href: string };
  /** True when the CTA leaves the site (e.g. mailto booking link). */
  external?: boolean;
}) {
  return (
    <div>
      <ul className="grid grid-cols-1 items-stretch gap-6 md:grid-cols-3">
        {pricingTiers.map((tier, index) => (
          <li key={tier.name} className="h-full">
            <Reveal delay={index * 100} className="h-full">
              <div
                className={
                  tier.highlighted
                    ? "relative flex h-full flex-col rounded-xl border border-waymarks-primary bg-card p-6 shadow-card-hover"
                    : "flex h-full flex-col rounded-xl border border-border bg-card p-6"
                }
              >
                {tier.highlighted ? (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-waymarks-primary px-3 py-1 text-xs font-semibold text-foreground">
                    Most popular
                  </span>
                ) : null}
                <h3 className="text-lg font-medium tracking-tight">{tier.name}</h3>
                <p className="mt-3 flex items-baseline gap-2">
                  <span className="text-3xl font-medium tabular-nums tracking-tight">
                    {tier.price}
                  </span>
                  <span className="text-sm text-muted-foreground">{tier.period}</span>
                </p>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {tier.description}
                </p>
                <ul className="mt-6 flex-1 space-y-2.5 border-t border-border pt-5">
                  {tier.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-2 text-sm text-foreground"
                    >
                      <Check
                        className="mt-0.5 size-4 shrink-0 text-waymarks-accent"
                        aria-hidden="true"
                      />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="mt-6">
                  {tier.highlighted ? (
                    <CtaLink
                      href={cta.href}
                      external={external}
                      className="flex h-10 w-full px-4 text-sm"
                    >
                      {cta.label}
                    </CtaLink>
                  ) : (
                    <SecondaryCtaLink href={cta.href} external={external} className="w-full">
                      {cta.label}
                    </SecondaryCtaLink>
                  )}
                </div>
              </div>
            </Reveal>
          </li>
        ))}
      </ul>

      <Reveal delay={100}>
        <ul className="mt-10 flex flex-wrap items-center justify-center gap-x-10 gap-y-3">
          {pricingBenefits.map((benefit) => {
            const Icon = benefitIconMap[benefit.icon] ?? BadgeCheck;
            return (
              <li key={benefit.text} className="flex items-center gap-2 text-sm text-muted-foreground">
                <Icon className="size-4 shrink-0 text-waymarks-accent" aria-hidden="true" />
                {benefit.text}
              </li>
            );
          })}
        </ul>
      </Reveal>
    </div>
  );
}
