import type { Metadata } from "next";

import { site } from "@/lib/content/site";
import { websiteDesignSeo, websiteDesignWhoItsForImage } from "@/lib/content/website-design";

import { FinalCta } from "@/components/site/final-cta";
import { Footer } from "@/components/site/footer";
import { WebsiteDesignBusinessNeeds } from "@/components/site/website-design-business-needs";
import { WebsiteDesignHero } from "@/components/site/website-design-hero";
import { WebsiteDesignServices } from "@/components/site/website-design-services";
import { WebsiteDesignStrategy } from "@/components/site/website-design-strategy";
import { WebsiteDevelopmentServices } from "@/components/site/website-development-services";
import { WebsiteDesignWhyTogether } from "@/components/site/website-design-why-together";
import { WebsiteDesignWhoItsFor } from "@/components/site/website-design-who-its-for";
import { TechnologiesSection } from "@/components/site/technologies-section";
import { RecentProductDesign } from "@/components/site/recent-product-design";
import { ServiceDetailWhatYouReceive } from "@/components/site/service-detail-what-you-receive";
import { ServiceDetailBrandIdentityProcess } from "@/components/site/service-detail-brand-identity-process";
import { ServiceDetailWhoItsFor } from "@/components/site/service-detail-who-its-for";
import { Faq } from "@/components/site/faq";
import { ServiceDetailClosing } from "@/components/site/service-detail-closing";
import { findServiceDetail } from "@/lib/content/service-details";

const path = "/services/website-design/";

const service = findServiceDetail("ui-ux-design")!;

export function generateMetadata(): Metadata {
  return {
    title: { absolute: websiteDesignSeo.title },
    description: websiteDesignSeo.description,
    alternates: { canonical: path },
    openGraph: {
      title: websiteDesignSeo.title,
      description: websiteDesignSeo.description,
      url: `${site.domain}${path}`,
      siteName: site.name,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: websiteDesignSeo.title,
      description: websiteDesignSeo.description,
    },
  };
}

/**
 * Web Design and Development service detail route (own route file so the hero
 * can be designed independently of the shared `[slug]` template).
 * Hero → strategy before screens → website design services → closing CTA →
 * footer.
 */
export default function WebsiteDesignServicePage() {
  return (
    <>
      <WebsiteDesignHero />
      <WebsiteDesignStrategy />
      <WebsiteDesignServices />
      <WebsiteDevelopmentServices />
      <WebsiteDesignWhyTogether />
      <WebsiteDesignBusinessNeeds />
      <TechnologiesSection />
      <RecentProductDesign />

          <ServiceDetailWhatYouReceive service={service} />
          <ServiceDetailBrandIdentityProcess service={service} />
          <ServiceDetailWhoItsFor service={service} image={websiteDesignWhoItsForImage} />

          <Faq />
          <ServiceDetailClosing service={service} />
          <Footer />
    </>
  );
}
