import type { Metadata } from "next";

import { PageHeader } from "@/components/site/page-header";
import { LegalArticle } from "@/components/site/legal-article";
import { privacyPage } from "@/lib/content/legal";
import { site } from "@/lib/content/site";

export const metadata: Metadata = {
  title: "Privacy policy",
  description:
    "What Waymark collects through waymarks.agency, why, and how to have it deleted.",
  alternates: { canonical: "/privacy" },
  openGraph: {
    title: `Privacy policy — ${site.name}`,
    description:
      "What Waymark collects through waymarks.agency, why, and how to have it deleted.",
    url: "/privacy",
    siteName: site.name,
    type: "website",
  },
};

// Privacy policy (C4.5) on the shared PageHeader shell.
export default function PrivacyPage() {
  return (
    <>
      <PageHeader
        eyebrow="Legal"
        title={privacyPage.title}
        pathname="/privacy"
      />
      <LegalArticle doc={privacyPage} />
    </>
  );
}
