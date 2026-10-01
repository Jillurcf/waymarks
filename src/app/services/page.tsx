import type { Metadata } from "next";

import { servicesSeo } from "@/lib/content/services";
import { site } from "@/lib/content/site";

import { ServicesPageHero } from "@/components/site/services-page-hero";
import { ServicesCover } from "@/components/site/services-cover";
import { ServicesGrid } from "@/components/site/services-grid";
import { FinalCta } from "@/components/site/final-cta";
import { Footer } from "@/components/site/footer";

export const metadata: Metadata = {
  // Title uses the `absolute` form to bypass the layout template
  // (no double-branding), mirroring the home route.
  title: { absolute: servicesSeo.title },
  description: servicesSeo.description,
  alternates: { canonical: "/services/" },
  openGraph: {
    title: servicesSeo.title,
    description: servicesSeo.description,
    url: `${site.domain}/services/`,
    siteName: site.name,
    type: "website",
  },
};

/**
 * Services route: hero (mark + display headline + image slot) → cover band →
 * the existing seven-service grid → closing CTA → footer.
 */
export default function ServicesPage() {
  return (
    <>
      <ServicesPageHero />
      <ServicesCover />
      <ServicesGrid />
      <FinalCta />
      <Footer />
    </>
  );
}