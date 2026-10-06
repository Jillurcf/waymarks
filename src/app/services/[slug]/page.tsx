import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { site } from "@/lib/content/site";
import {
  findServiceDetail,
  serviceDetails,
  serviceFaqJsonLd,
  serviceJsonLd,
  type ServiceDetail,
} from "@/lib/content/service-details";

import { Footer } from "@/components/site/footer";
import { ServiceDetailBrandEverywhere } from "@/components/site/service-detail-brand-everywhere";
import { ServiceDetailBrandIdentityProcess } from "@/components/site/service-detail-brand-identity-process";
import { ServiceDetailDesignServices } from "@/components/site/service-detail-design-services";
import { ServiceDetailClosing } from "@/components/site/service-detail-closing";
import { ServiceDetailFaq } from "@/components/site/service-detail-faq";
import { ServiceDetailHero } from "@/components/site/service-detail-hero";
import { ServiceDetailProcess } from "@/components/site/service-detail-process";
import { ServiceDetailRecentWork } from "@/components/site/service-detail-recent-work";
import { ServiceDetailWhatYouReceive } from "@/components/site/service-detail-what-you-receive";
import { ServiceDetailWhoItsFor } from "@/components/site/service-detail-who-its-for";
import { ServiceDetailWhyMatters } from "@/components/site/service-detail-why-matters";
import { Faq } from "@/components/site/faq";

// Every slug resolves at build time from the typed content module — required by
// the static export, so an unregistered slug 404s instead of rendering a shell.
export const dynamicParams = false;

export function generateStaticParams() {
  return serviceDetails.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = findServiceDetail(slug);
  if (!service) return {};

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

/** Service + FAQPage structured data. `<` is escaped so a stray sequence in
 *  copy can never close the script tag early. */
function ServiceStructuredData({ service }: { service: ServiceDetail }) {
  const jsonLd = JSON.stringify({
    "@context": "https://schema.org",
    "@graph": [serviceJsonLd(service), serviceFaqJsonLd(service.faqs)],
  }).replace(/</g, "\\u003c");

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd }} />;
}

/**
 * Service detail route: hero → why it matters → brand everywhere → design
 * services → recent brand work → what you receive → identity process → who it is
 * for → methodology → FAQs → closing CTA → footer.
 */
export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = findServiceDetail(slug);
  if (!service) notFound();

  return (
    <>
      <ServiceStructuredData service={service} />
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
