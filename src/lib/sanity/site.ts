import { fetchSanitySingle, isSanityConfigured } from "./client";

export const siteFallback = {
  name: "Waymark",
  domain: "https://waymarks.agency",
  email: "hello@waymarks.agency",
  phone: "+971 55 896 5353",
  phoneHref: "tel:+971558965353",
  region: "Dubai, UAE",
  rating: "4.9",
  reviews: "[X]",
  tagline: "Digital product design and development studio",
  description:
    "Waymark is a digital product studio in Dubai helping startups and growing businesses design, build and launch better digital products.",
};

export const socialLinksFallback = [
  { label: "Behance", href: "https://www.behance.net/waymarks_agency", platform: "behance" },
  { label: "LinkedIn", href: "https://www.linkedin.com/company/waymarks_agency", platform: "linkedin" },
  { label: "Instagram", href: "https://www.instagram.com/waymarks_agency", platform: "instagram" },
  { label: "Twitter", href: "https://twitter.com", platform: "twitter" },
  { label: "Facebook", href: "https://www.facebook.com/waymarks.agency", platform: "facebook" },
] as const;

/**
 * Fetch site settings from Sanity CMS with fallback to local values.
 */
export async function getSiteSettings() {
  const defaults = {
    site: siteFallback,
    bookCallHref: `mailto:${siteFallback.email}?subject=${encodeURIComponent("Free strategy call")}`,
    navCtaLabel: "Start a Project",
    socialLinks: socialLinksFallback,
    contactPanel: {
      title: "Contact",
      phoneLabel: "Phone",
      emailLabel: "Email",
      addressLabel: "Studio",
      stayConnected: "Stay connected",
    },
    workTogether: {
      eyebrow: "Let's collaborate",
      title: "Tell us what you're building",
      cta: "Get in touch",
    },
    newsletter: { enabled: false, title: "Subscribe to our newsletter", placeholder: "Work email", submitLabel: "Subscribe" },
    closingCta: {
      eyebrow: "Next step",
      title: "Ready when you are",
      body: "Book a free discovery call. We'll talk through your goals, scope, and timeline — and reply within one business day.",
      primaryLabel: "Book a discovery call",
      phoneLabel: "Prefer to talk?",
    },
    notFound: {
      eyebrow: "Error 404",
      title: "This route isn't waymarked yet",
      body: "The page you're looking for doesn't exist or has moved. Let's get you back on track.",
      backHome: "Back to home",
      contactCta: "Contact us",
    },
  };

  if (!isSanityConfigured()) {
    return defaults;
  }

  try {
    const query = `*[_type == "siteSettings"][0]{
      site,
      navCtaLabel,
      socialLinks,
      contactPanel,
      workTogether,
      newsletter,
      closingCta,
      notFound
    }`;
    const cmsData = await fetchSanitySingle<Record<string, unknown>>(query);
    if (!cmsData) {
      return defaults;
    }

    const cmsSite = ((cmsData.site as Record<string, unknown>) ?? cmsData) as Record<string, unknown>;
    const phone = (cmsSite.phone as string) ?? siteFallback.phone;
    const site = {
      name: (cmsSite.name as string) ?? siteFallback.name,
      domain: (cmsSite.domain as string) ?? siteFallback.domain,
      email: (cmsSite.email as string) ?? siteFallback.email,
      phone,
      phoneHref: (cmsSite.phoneHref as string) ?? `tel:${phone.replace(/\s+/g, "")}`,
      region: (cmsSite.region as string) ?? siteFallback.region,
      rating: (cmsSite.rating as string) ?? siteFallback.rating,
      reviews: (cmsSite.reviews as string) ?? siteFallback.reviews,
      tagline: (cmsSite.tagline as string) ?? siteFallback.tagline,
      description: (cmsSite.description as string) ?? siteFallback.description,
    };

    return {
      site,
      bookCallHref: `mailto:${site.email}?subject=${encodeURIComponent("Free strategy call")}`,
      navCtaLabel: (cmsData.navCtaLabel as string) ?? defaults.navCtaLabel,
      socialLinks: (cmsData.socialLinks as typeof socialLinksFallback) ?? socialLinksFallback,
      contactPanel: (cmsData.contactPanel as typeof defaults.contactPanel) ?? defaults.contactPanel,
      workTogether: (cmsData.workTogether as typeof defaults.workTogether) ?? defaults.workTogether,
      newsletter: (cmsData.newsletter as typeof defaults.newsletter) ?? defaults.newsletter,
      closingCta: (cmsData.closingCta as typeof defaults.closingCta) ?? defaults.closingCta,
      notFound: (cmsData.notFound as typeof defaults.notFound) ?? defaults.notFound,
    };
  } catch {
    return defaults;
  }
}
