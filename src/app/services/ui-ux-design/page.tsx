import type { Metadata } from "next";

import { site } from "@/lib/content/site";
import {
  findServiceDetail,
  serviceFaqJsonLd,
  serviceJsonLd,
} from "@/lib/content/service-details";

import { Footer } from "@/components/site/footer";
import { ServiceDetailBrandEverywhere } from "@/components/site/service-detail-brand-everywhere";
import { ServiceDetailBrandIdentityProcess } from "@/components/site/service-detail-brand-identity-process";
import { ServiceDetailDesignServices } from "@/components/site/service-detail-design-services";
import { ServiceDetailClosing } from "@/components/site/service-detail-closing";
import { ServiceDetailHero } from "@/components/site/service-detail-hero";
import { ServiceDetailRecentWork } from "@/components/site/service-detail-recent-work";
import { ServiceDetailWhatYouReceive } from "@/components/site/service-detail-what-you-receive";
import { ServiceDetailWhoItsFor } from "@/components/site/service-detail-who-its-for";
import { ServiceDetailWhyMatters } from "@/components/site/service-detail-why-matters";
import { Faq } from "@/components/site/faq";

const service = findServiceDetail("ui-ux-design")!;

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

/**
 * UI/UX Design service detail page (own route file so the hero and section
 * order can be designed independently of the shared `[slug]` template).
 * Hero → why it matters → product touchpoints → design services → recent work
 * → what you receive → process → who it is for → FAQs → closing CTA → footer.
 */
export default function UiUxDesignServicePage() {
  const jsonLd = JSON.stringify({
    "@context": "https://schema.org",
    "@graph": [serviceJsonLd(service), serviceFaqJsonLd(service.faqs)],
  }).replace(/</g, "\\u003c");

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd }} />
      <ServiceDetailHero service={service} />
      <ServiceDetailWhyMatters service={service} />
      <ServiceDetailBrandEverywhere service={service} />
      <ServiceDetailDesignServices service={service} />
      <ServiceDetailRecentWork service={service} />
      <ServiceDetailWhatYouReceive service={service} />
      <ServiceDetailBrandIdentityProcess service={service} />
      <ServiceDetailWhoItsFor service={service} />

      <Faq />
      <ServiceDetailClosing service={service} />
      <Footer />
    </>
  );
}