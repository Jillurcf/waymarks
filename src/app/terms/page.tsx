import type { Metadata } from "next";

import { PageHeader } from "@/components/site/page-header";
import { LegalArticle } from "@/components/site/legal-article";
import { termsPage } from "@/lib/content/legal";
import { site } from "@/lib/content/site";

export const metadata: Metadata = {
  title: "Terms & conditions",
  description:
    "Terms for using waymarks.agency; engagement work is governed by each signed agreement.",
  alternates: { canonical: "/terms" },
  openGraph: {
    title: `Terms & conditions — ${site.name}`,
    description:
      "Terms for using waymarks.agency; engagement work is governed by each signed agreement.",
    url: "/terms",
    siteName: site.name,
    type: "website",
  },
};

// Terms & conditions (C4.5) on the shared PageHeader shell.
export default function TermsPage() {
  return (
    <>
      <PageHeader eyebrow="Legal" title={termsPage.title} pathname="/terms" />
      <LegalArticle doc={termsPage} />
    </>
  );
}
