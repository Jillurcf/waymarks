import type { Metadata } from "next";

import { PageHeader } from "@/components/site/page-header";
import { SectionHeading } from "@/components/site/section-heading";
import { Reveal } from "@/components/site/reveal";
import { PricingTiers } from "@/components/site/pricing-tiers";
import { ProofStrip } from "@/components/site/proof-strip";
import { FaqSection } from "@/components/site/faq-section";
import { ClosingCta } from "@/components/site/closing-cta";
import {
  pricingFaqHeading,
  pricingFaqs,
  pricingGuidance,
  pricingHeader,
  pricingPageCta,
} from "@/lib/content/pricing";
import { bookCallHref, site } from "@/lib/content/site";

export const metadata: Metadata = {
  title: "Pricing",
  description: pricingHeader.description,
  alternates: { canonical: "/pricing" },
  openGraph: {
    title: `Pricing — ${site.name}`,
    description: pricingHeader.description,
    url: "/pricing",
    siteName: site.name,
    type: "website",
  },
};

// Pricing page (C3.6, FR-16): guidance text, tier cards with one highlighted
// tier, benefit row, facts band reuse, FAQs — ending in the contact CTA
// band (BR-2).
export default function PricingPage() {
  return (
    <>
      <PageHeader
        eyebrow={pricingHeader.eyebrow}
        title={pricingHeader.title}
        pathname="/pricing"
      />
      <section aria-labelledby="pricing-tiers-title" className="py-20 sm:py-32">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow={pricingGuidance.eyebrow}
            title={pricingGuidance.title}
            description={pricingGuidance.body}
            id="pricing-tiers-title"
          />
          <Reveal>
            <PricingTiers
              cta={{ label: pricingPageCta.label, href: bookCallHref }}
              external
            />
          </Reveal>
        </div>
      </section>
      <ProofStrip />
      <FaqSection
        eyebrow={pricingFaqHeading.eyebrow}
        title={pricingFaqHeading.title}
        description={pricingFaqHeading.description}
        faqs={pricingFaqs}
        schema
      />
      <ClosingCta />
    </>
  );
}
