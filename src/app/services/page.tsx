import type { Metadata } from "next";

import { PageHeader } from "@/components/site/page-header";
import { ServicesGrid } from "@/components/site/services-grid";
import { Testimonials } from "@/components/site/testimonials";
import { FaqSection } from "@/components/site/faq-section";
import { ClosingCta } from "@/components/site/closing-cta";
import { servicesPage } from "@/lib/content/services";
import { site } from "@/lib/content/site";

export const metadata: Metadata = {
  title: "Services",
  description: servicesPage.header.description,
  alternates: { canonical: "/services" },
  openGraph: {
    title: `Services — ${site.name}`,
    description: servicesPage.header.description,
    url: "/services",
    siteName: site.name,
    type: "website",
  },
};

// Services overview (C3.2, FR-10): all six service rows (icon, blurb, hover
// image tile, link), then testimonials and FAQ per the template's
// services.html order — ending in the contact CTA band (BR-2).
export default function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow={servicesPage.header.eyebrow}
        title={servicesPage.header.title}
        pathname="/services"
      />
      <ServicesGrid
        eyebrow={servicesPage.gridHeading.eyebrow}
        title={servicesPage.gridHeading.title}
        description={servicesPage.gridHeading.description}
      />
      <Testimonials />
      <FaqSection
        eyebrow={servicesPage.faqHeading.eyebrow}
        title={servicesPage.faqHeading.title}
        description={servicesPage.faqHeading.description}
        faqs={servicesPage.faqs}
        schema
      />
      <ClosingCta />
    </>
  );
}
