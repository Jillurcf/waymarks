import type { Metadata } from "next";

import { servicesSeo } from "@/lib/content/services";
import { site } from "@/lib/content/site";

import { ServicesPageHero } from "@/components/site/services-page-hero";
import { ServicesCover } from "@/components/site/services-cover";
import { ServicesBrandDesign } from "@/components/site/services-brand-design";
import { FinalCta } from "@/components/site/final-cta";
import { Footer } from "@/components/site/footer";
import { ServicesUserExperience } from "@/components/site/services-user-experience";
import { ServicesWebsiteDesign } from "@/components/site/services-website-design";
import { ServicesSaasProduct } from "@/components/site/service-saas-product";
import { ServicesMvpDevelopment } from "@/components/site/services-mvp-development";
import { ServicesMobileAppDesign } from "@/components/site/services-mobile-app-design";
import { ServicesDigitalGrowth } from "@/components/site/services-digital-growth";
import { ServicesNeedMoreThanOne } from "@/components/site/services-need-more-than-one";
import DigitalDesignProcess from "@/components/site/services-digital-design-process";
import { Faq } from "@/components/site/faq";


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
 * brand design spotlight → the existing seven-service grid → closing CTA →
 * footer.
 */
export default function ServicesPage() {
  return (
    <>
      <ServicesPageHero />
      <ServicesCover />
      <ServicesBrandDesign />
      <ServicesUserExperience />
      <ServicesWebsiteDesign />
      <ServicesSaasProduct />
      <ServicesMvpDevelopment />
      <ServicesMobileAppDesign />
      <ServicesDigitalGrowth />
      <ServicesNeedMoreThanOne />
      <DigitalDesignProcess />
      <Faq />
      <FinalCta />
      <Footer />
    </>
  );
}
