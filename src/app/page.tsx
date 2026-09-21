import type { Metadata } from "next";

import { ApproachSection } from "@/components/site/approach-section";
import { ClaritySection } from "@/components/site/clarity-section";
import { ClosingCta } from "@/components/site/closing-cta";
import { EngagementSteps } from "@/components/site/engagement-steps";
import { ExploreSection } from "@/components/site/explore-section";
import { Faq } from "@/components/site/faq";
import { FeaturedWork } from "@/components/site/featured-work";
import { FitSection } from "@/components/site/fit-section";
import { Hero } from "@/components/site/hero";
import { OutcomesSection } from "@/components/site/outcomes-section";
import { ProductProcess } from "@/components/site/product-process";
import { ResearchStats } from "@/components/site/research-stats";
import { ResourcesSection } from "@/components/site/resources-section";
import { ServiceTeasers } from "@/components/site/service-teasers";
import { ServicesGrid } from "@/components/site/services-grid";
import { WhyStudio } from "@/components/site/why-studio";
import { homeClosingCta, homeSeo } from "@/lib/content/home";
import { site } from "@/lib/content/site";

export const metadata: Metadata = {
  title: homeSeo.title,
  description: homeSeo.description,
  alternates: { canonical: "/" },
  openGraph: {
    title: homeSeo.title,
    description: homeSeo.description,
    url: site.domain,
    siteName: site.name,
    type: "website",
  },
};

// ProfessionalService JSON-LD. aggregateRating is omitted until a verified
// review count exists (site.reviews is still SEED) — placeholder values must
// not ship as structured data.
const schema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Waymark",
  url: site.domain,
  email: site.email,
  telephone: site.phone,
  description: homeSeo.description,
  areaServed: "United Arab Emirates",
};

// FAQPage JSON-LD matching the visible FAQ text is emitted by <Faq />.

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schema).replace(/</g, "\\u003c"),
        }}
      />
      <Hero />
      <ClaritySection />
      <ServicesGrid />
      <ApproachSection />
      <ResearchStats />
      <OutcomesSection />
      <ProductProcess />
      <WhyStudio />
      <FeaturedWork />
      <EngagementSteps />
      <FitSection />
      <ServiceTeasers />
      <Faq />
      <ResourcesSection />
      <ExploreSection />
      <ClosingCta
        eyebrow={homeClosingCta.eyebrow}
        title={homeClosingCta.title}
        body={homeClosingCta.body}
        primaryLabel={homeClosingCta.ctaLabel}
      />
    </>
  );
}