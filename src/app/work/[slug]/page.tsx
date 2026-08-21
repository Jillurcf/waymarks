import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { PageHeader } from "@/components/site/page-header";
import { CaseStudyDetail } from "@/components/site/case-study-detail";
import { ClosingCta } from "@/components/site/closing-cta";
import { featuredWork } from "@/lib/content/case-studies";
import { site } from "@/lib/content/site";

// Case-study detail (C3.5, FR-14): all routes resolve at build time from the
// typed content module — required by the static export.
export const dynamicParams = false;

export function generateStaticParams() {
  return featuredWork.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = featuredWork.find((p) => p.slug === slug);
  if (!project) return {};

  return {
    title: project.title,
    description: project.description,
    alternates: { canonical: `/work/${project.slug}` },
    openGraph: {
      title: `${project.title} — ${site.name}`,
      description: project.description,
      url: `/work/${project.slug}`,
      siteName: site.name,
      type: "website",
    },
  };
}

export default async function WorkPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = featuredWork.find((p) => p.slug === slug);
  if (!project) notFound();

  // Related work: up to three other studies, most recent first is fine for
  // v1 — data order is curated in case-studies.ts.
  const related = featuredWork.filter((p) => p.slug !== project.slug).slice(0, 3);

  return (
    <>
      <PageHeader
        eyebrow="Work"
        title={project.title}
        pathname={`/work/${project.slug}`}
      />
      <CaseStudyDetail study={project} related={related} />
      <ClosingCta />
    </>
  );
}
