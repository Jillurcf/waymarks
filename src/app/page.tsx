import type { Metadata } from "next";

import { homeJsonLd, homeSeo } from "@/lib/content/home";
import { site } from "@/lib/content/site";

import { Hero } from "@/components/site/hero";
import { Testimonials } from "@/components/site/testimonials";
import { StudioBento } from "@/components/site/studio-bento";
import { Capabilities } from "@/components/site/capabilities";
import { ServicesGrid } from "@/components/site/services-grid";
import { Segments } from "@/components/site/segments";
import { StatsSection } from "@/components/site/stats-section";
import { CaseStudy } from "@/components/site/case-study";
import { Process } from "@/components/site/process";
import { WhyUs } from "@/components/site/why-us";
import { Faq } from "@/components/site/faq";
import { FinalCta } from "@/components/site/final-cta";
import { Footer } from "@/components/site/footer";

export const metadata: Metadata = {
  // P5.2: SEO title/description mirror the design file's <head> exactly —
  // homeSeo (Content module) is the single source for both. Title uses the
  // `absolute` form to bypass the layout template (no double-branding).
  title: { absolute: homeSeo.title },
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

// Single-page home (P4/P5): every design section rendered in order — hero →
// proof → studio bento → capabilities → services → segments → stats → case
// study → process → why us → FAQ → final CTA → footer.
export default function Home() {
  return (
    <>
      {/* Schema.org Organization + WebSite + FAQPage (homeJsonLd): the FAQ
          graph is rebuilt from faqSection.items so it always matches the
          visible accordion copy — emitted verbatim per home.ts. */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homeJsonLd) }}
      />
      <Hero />
      <Testimonials />
      <StudioBento />
      <Capabilities />
      <ServicesGrid />
      <Segments />
      <StatsSection />
      <CaseStudy />
      <Process />
      <WhyUs />
      <Faq />
      <FinalCta />
      <Footer />
    </>
  );
}