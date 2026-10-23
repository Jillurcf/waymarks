import type { Metadata } from "next";

import { site } from "@/lib/content/site";
import {
  findServiceDetail,
  serviceFaqJsonLd,
  serviceJsonLd,
} from "@/lib/content/service-details";

import { Footer } from "@/components/site/footer";
import { ServiceDetailBrandIdentityProcess } from "@/components/site/service-detail-brand-identity-process";
import { ServiceDetailClosing } from "@/components/site/service-detail-closing";
import { ServiceDetailHero } from "@/components/site/service-detail-hero";
import { ServiceDetailRecentWork } from "@/components/site/service-detail-recent-work";
import { ServiceDetailWhatYouReceive } from "@/components/site/service-detail-what-you-receive";
import { ServiceDetailWhoItsFor } from "@/components/site/service-detail-who-its-for";
import { ServiceDetailWhyMatters } from "@/components/site/service-detail-why-matters";
import { Faq } from "@/components/site/faq";

const service = findServiceDetail("project-management-services")!;

export function generateMetadata(): Metadata {
  return {
    title: { absolute: service.seoTitle },
    description: service.seoDescription,
    alternates: { canonical: service.path },
    openGraph: {
      title: service.seoTitle,
      description: service.seoDescription,
      url: `${site.domain}${service.path}`,
      siteName: site.name,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: service.seoTitle,
      description: service.seoDescription,
    },
  };
}

export default function ProjectManagementServicePage() {
  const jsonLd = JSON.stringify({
    "@context": "https://schema.org",
    "@graph": [serviceJsonLd(service), serviceFaqJsonLd(service.faqs)],
  }).replace(/</g, "\\u003c");

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd }} />
      <ServiceDetailHero service={service} />
      <Faq />
      <ServiceDetailClosing service={service} />
      <Footer />
    </>
  );
}
