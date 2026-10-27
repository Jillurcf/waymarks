import { fetchSanitySingle, isSanityConfigured } from "./client";
import * as homeContent from "../content/home";

/**
 * Fetch homepage content from Sanity CMS with fallback to local content.
 */
export async function getHomeContent() {
  if (!isSanityConfigured()) {
    return homeContent;
  }

  try {
    const query = `*[_type == "homePage"][0]{
      homeSeo,
      hero,
      testimonialsSection,
      testimonials,
      studioSection,
      capabilitiesSection,
      servicesSection,
      segmentsSection,
      statsSection,
      caseStudySection,
      processSection,
      whyUsSection,
      faqSection,
      homeJsonLd,
      finalCtaSection,
      footer
    }`;
    const cmsData = await fetchSanitySingle<Record<string, unknown>>(query);
    if (!cmsData) {
      return homeContent;
    }

    return {
      ...homeContent,
      homeSeo: (cmsData.homeSeo as typeof homeContent.homeSeo) ?? homeContent.homeSeo,
      hero: (cmsData.hero as typeof homeContent.hero) ?? homeContent.hero,
      testimonialsSection:
        (cmsData.testimonialsSection as typeof homeContent.testimonialsSection) ??
        homeContent.testimonialsSection,
      testimonials: (cmsData.testimonials as typeof homeContent.testimonials) ?? homeContent.testimonials,
      studioSection: (cmsData.studioSection as typeof homeContent.studioSection) ?? homeContent.studioSection,
      capabilitiesSection:
        (cmsData.capabilitiesSection as typeof homeContent.capabilitiesSection) ??
        homeContent.capabilitiesSection,
      servicesSection: (cmsData.servicesSection as typeof homeContent.servicesSection) ?? homeContent.servicesSection,
      segmentsSection: (cmsData.segmentsSection as typeof homeContent.segmentsSection) ?? homeContent.segmentsSection,
      statsSection: (cmsData.statsSection as typeof homeContent.statsSection) ?? homeContent.statsSection,
      caseStudySection:
        (cmsData.caseStudySection as typeof homeContent.caseStudySection) ?? homeContent.caseStudySection,
      processSection: (cmsData.processSection as typeof homeContent.processSection) ?? homeContent.processSection,
      whyUsSection: (cmsData.whyUsSection as typeof homeContent.whyUsSection) ?? homeContent.whyUsSection,
      faqSection: (cmsData.faqSection as typeof homeContent.faqSection) ?? homeContent.faqSection,
      homeJsonLd: (cmsData.homeJsonLd as typeof homeContent.homeJsonLd) ?? homeContent.homeJsonLd,
      finalCtaSection: (cmsData.finalCtaSection as typeof homeContent.finalCtaSection) ?? homeContent.finalCtaSection,
      footer: (cmsData.footer as typeof homeContent.footer) ?? homeContent.footer,
    };
  } catch {
    return homeContent;
  }
}
