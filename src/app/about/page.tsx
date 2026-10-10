import type { Metadata } from "next";

import { aboutSeo } from "@/lib/content/about";
import { site } from "@/lib/content/site";

import { AboutDifference } from "@/components/site/about-difference";
import { AboutHero } from "@/components/site/about-hero";
import { AboutNature } from "@/components/site/about-nature";
import { AboutUs } from "@/components/site/about-us";
import { DesignThinking } from "@/components/site/design-thinking";
import { EvolutionTimeline } from "@/components/site/evolution-timeline";
import { FinalCta } from "@/components/site/final-cta";
import { Footer } from "@/components/site/footer";
import { IdentityCapabilities } from "@/components/site/identity-capabilities";
import { Leadership } from "@/components/site/leadership";
import { Philosophy } from "@/components/site/philosophy";
import { Standards } from "@/components/site/standards";

export const metadata: Metadata = {
  // `absolute` bypasses the layout template, mirroring the home, services and
  // contact routes so the brand is not appended twice.
  title: { absolute: aboutSeo.title },
  description: aboutSeo.description,
  alternates: { canonical: "/about/" },
  openGraph: {
    title: aboutSeo.title,
    description: aboutSeo.description,
    url: `${site.domain}/about/`,
    siteName: site.name,
    type: "website",
  },
};

/**
 * About route: hero (studio belief + global presence panel) → About Us
 * (headline + studio image) → Identity & Capabilities (lead paragraph plus the
 * studio and network cards) → Evolution & Legacy (milestone timeline) →
 * Design Thinking (image collage) → Leadership (founders) → Standards
 * (principles) → Philosophy (beliefs) → closing CTA → footer. The navbar comes from the from the
 * root layout; the footer is rendered per page, and the route ends in a
 * contact CTA per BR-2.
 */
export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <AboutUs />
      <IdentityCapabilities />
      <AboutDifference />
      <AboutNature />
      <EvolutionTimeline />
      <DesignThinking />
      <Leadership />
      <Standards />
      <Philosophy />
      <FinalCta />
      <Footer />
    </>
  );
}
