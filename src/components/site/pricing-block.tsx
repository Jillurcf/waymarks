import { SectionHeading } from "@/components/site/section-heading";
import { PricingTiers } from "@/components/site/pricing-tiers";
import {
  pricingHeading,
  pricingTeaserCta,
} from "@/lib/content/home";

// Block 10 — Pricing teaser (template .our-pricing): home heading plus the
// shared tier cards + benefit row from pricing-tiers.tsx. Figures are ranges
// from pricing.ts — never the template's dummy $29/$39/$49 (plan §5).
export function PricingBlock() {
  return (
    <section id="pricing" aria-labelledby="pricing-title" className="py-20 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow={pricingHeading.eyebrow}
          title={pricingHeading.title}
          description={pricingHeading.description}
          id="pricing-title"
        />
        <PricingTiers cta={pricingTeaserCta} />
      </div>
    </section>
  );
}
