import type { Metadata } from "next";

import { Hero } from "@/components/site/hero";
import { LogoStrip } from "@/components/site/logo-strip";
import { ProofStrip } from "@/components/site/proof-strip";
import { ServicesGrid } from "@/components/site/services-grid";
import { FeaturedWork } from "@/components/site/featured-work";
import { WhyWaymarks } from "@/components/site/why-waymarks";
import { HowWeWork } from "@/components/site/how-we-work";
import { Testimonials } from "@/components/site/testimonials";
import { TeamSnapshot } from "@/components/site/team-snapshot";
import { PricingBlock } from "@/components/site/pricing-block";
import { Faq } from "@/components/site/faq";
import { FinalCta } from "@/components/site/final-cta";
import { site } from "@/lib/content/site";
import { trustLine } from "@/lib/content/stats";

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

const schema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Waymark",
  url: site.domain,
  email: site.email,
  telephone: site.phone,
  description: site.description,
  areaServed: "United Arab Emirates",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: trustLine.rating,
    reviewCount: site.reviews,
  },
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <Hero />
      <LogoStrip />
      <ProofStrip />
      <ServicesGrid />
      <FeaturedWork />
      <WhyWaymarks />
      <HowWeWork />
      <Testimonials />
      <TeamSnapshot />
      <PricingBlock />
      <Faq />
      <FinalCta />
    </>
  );
}