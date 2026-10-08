import type { Metadata } from "next";

import { site } from "@/lib/content/site";
import { websiteDesignSeo } from "@/lib/content/website-design";

import { FinalCta } from "@/components/site/final-cta";
import { Footer } from "@/components/site/footer";
import { WebsiteDesignHero } from "@/components/site/website-design-hero";
import { WebsiteDesignServices } from "@/components/site/website-design-services";
import { WebsiteDesignStrategy } from "@/components/site/website-design-strategy";

const path = "/services/website-design/";

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
      <FinalCta />
      <Footer />
    </>
  );
}
