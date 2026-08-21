import type { Metadata } from "next";

import { PageHeader } from "@/components/site/page-header";
import { AboutStory } from "@/components/site/about-story";
import { AboutBenefits } from "@/components/site/about-benefits";
import { HowWeWork } from "@/components/site/how-we-work";
import { ProofStrip } from "@/components/site/proof-strip";
import { TeamGrid } from "@/components/site/team-grid";
import { Testimonials } from "@/components/site/testimonials";
import { FaqSection } from "@/components/site/faq-section";
import { ClosingCta } from "@/components/site/closing-cta";
import {
  aboutFaqs,
  aboutFaqHeading,
  aboutHeader,
} from "@/lib/content/about";
import { site } from "@/lib/content/site";

export const metadata: Metadata = {
  title: "About",
  description: aboutHeader.description,
  alternates: { canonical: "/about" },
  openGraph: {
    title: `About — ${site.name}`,
    description: aboutHeader.description,
    url: "/about",
    siteName: site.name,
    type: "website",
  },
};

// About page (C3.1, FR-15): story/founder, values/benefits, process, facts
// counters, team grid (absorbs team.html), locations, testimonials, FAQ —
// ending in the contact CTA band (BR-2). Process and facts reuse the shared
// home/stats sections.
export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow={aboutHeader.eyebrow}
        title={aboutHeader.title}
        pathname="/about"
      />
      <AboutStory />
      <AboutBenefits />
      <HowWeWork />
      <ProofStrip />
      <TeamGrid />
      <Testimonials />
      <FaqSection
        eyebrow={aboutFaqHeading.eyebrow}
        title={aboutFaqHeading.title}
        description={aboutFaqHeading.description}
        faqs={aboutFaqs}
        schema
      />
      <ClosingCta />
    </>
  );
}
