import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { PageHeader } from "@/components/site/page-header";
import { ServiceDetail } from "@/components/site/service-detail";
import { ClosingCta } from "@/components/site/closing-cta";
import { services, type Service } from "@/lib/content/services";
import { site } from "@/lib/content/site";

// Service detail (C3.3, FR-11): all routes resolve at build time from the
// typed content module — required by the static export.
export const dynamicParams = false;

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) return {};

  return {
    title: service.title,
    description: service.summary,
    alternates: { canonical: `/services/${service.slug}` },
    openGraph: {
      title: `${service.title} — ${site.name}`,
      description: service.summary,
      url: `/services/${service.slug}`,
      siteName: site.name,
      type: "website",
    },
  };
}

// Service JSON-LD matching the visible page content.
function ServiceSchema({ service }: { service: Service }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.summary,
    provider: {
      "@type": "ProfessionalService",
      name: site.name,
      url: site.domain,
      telephone: site.phone,
    },
    areaServed: "United Arab Emirates",
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
      }}
    />
  );
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) notFound();

  return (
    <>
      <ServiceSchema service={service} />
      <PageHeader
        eyebrow="Services"
        title={service.title}
        pathname={`/services/${service.slug}`}
      />
      <ServiceDetail service={service} />
      <ClosingCta />
    </>
  );
}
