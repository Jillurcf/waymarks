import type { Metadata } from "next";

import { PageHeader } from "@/components/site/page-header";
import { SectionHeading } from "@/components/site/section-heading";
import { Reveal } from "@/components/site/reveal";
import { WorkGrid } from "@/components/site/work-grid";
import { ClosingCta } from "@/components/site/closing-cta";
import { featuredWork } from "@/lib/content/case-studies";
import { workHeading } from "@/lib/content/work";
import { site } from "@/lib/content/site";

export const metadata: Metadata = {
  title: "Work",
  description: workHeading.description,
  alternates: { canonical: "/work" },
  openGraph: {
    title: `Work — ${site.name}`,
    description: workHeading.description,
    url: "/work",
    siteName: site.name,
    type: "website",
  },
};

// Work overview (C3.4, FR-13): filter tabs (All + categories derived from
// the data) filtering the case-study card grid — the Isotope replacement.
export default function WorkPage() {
  return (
    <>
      <PageHeader
        eyebrow={workHeading.eyebrow}
        title={workHeading.title}
        pathname="/work"
      />
      <section aria-labelledby="work-grid-title" className="py-20 sm:py-32">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow={workHeading.eyebrow}
            title={workHeading.title}
            description={workHeading.description}
            id="work-grid-title"
          />
          <Reveal>
            <WorkGrid projects={featuredWork} />
          </Reveal>
        </div>
      </section>
      <ClosingCta />
    </>
  );
}
