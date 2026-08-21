import type { Metadata } from "next";

import { Hero } from "@/components/site/hero";
import { LogoStrip } from "@/components/site/logo-strip";
import { AboutIntro } from "@/components/site/about-intro";
import { ServicesGrid } from "@/components/site/services-grid";
import { WhatWeDo } from "@/components/site/what-we-do";
import { WhyWaymarks } from "@/components/site/why-waymarks";
import { FeaturedWork } from "@/components/site/featured-work";
import { HowWeWork } from "@/components/site/how-we-work";
import { ProofStrip } from "@/components/site/proof-strip";
import { PricingBlock } from "@/components/site/pricing-block";
import { Testimonials } from "@/components/site/testimonials";
import { Faq } from "@/components/site/faq";
import { BlogTeaser } from "@/components/site/blog-teaser";
import { site } from "@/lib/content/site";

export const metadata: Metadata = {
  title: "Waymark — Digital Product Design & Development",
  description: site.description,
  openGraph: {
    title: "Waymark — Digital Product Design & Development",
    description: site.description,
    url: site.domain,
    siteName: site.name,
    type: "website",
  },
};

// Block 14 — ProfessionalService JSON-LD (M2). aggregateRating is omitted
// until a verified review count exists (site.reviews is still SEED) —
// placeholder values must not ship as structured data.
const schema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Waymark",
  url: site.domain,
  email: site.email,
  telephone: site.phone,
  description: site.description,
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
      {/* M2 section order — docs/implementation-plan.md §4 */}
      <Hero />
      <LogoStrip />
      <AboutIntro />
      <ServicesGrid />
      <WhatWeDo />
      <WhyWaymarks />
      <FeaturedWork />
      <HowWeWork />
      <ProofStrip />
      <PricingBlock />
      <Testimonials />
      <Faq />
      <BlogTeaser />
    </>
  );
}
