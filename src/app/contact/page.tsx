import type { Metadata } from "next";
import { ExternalLink } from "lucide-react";

import { PageHeader } from "@/components/site/page-header";
import { ContactInfoPanel } from "@/components/site/contact-info-panel";
import { LeadForm } from "@/components/site/lead-form";
import { contactPage } from "@/lib/content/contact";
import { site } from "@/lib/content/site";

export const metadata: Metadata = {
  title: "Contact",
  description: contactPage.description,
  alternates: { canonical: "/contact" },
  openGraph: {
    title: `Contact — ${site.name}`,
    description: contactPage.description,
    url: "/contact",
    siteName: site.name,
    type: "website",
  },
};

// Contact page (C4.3, template .page-contact-us): info panel beside the
// validated lead form, then a lazy map embed. The form posts to a static-
// compatible endpoint when configured, with a mailto fallback (C4.4).
export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow={contactPage.eyebrow}
        title={contactPage.title}
        pathname="/contact"
      />

      <section aria-labelledby="contact-form-title" className="py-20 sm:py-32">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
            <aside className="lg:col-span-5">
              <ContactInfoPanel />
            </aside>

            <div className="lg:col-span-7">
              <h2
                id="contact-form-title"
                className="text-2xl font-medium tracking-tight text-foreground sm:text-3xl"
              >
                {contactPage.formTitle}
              </h2>
              <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                {contactPage.formDescription}
              </p>
              <div className="mt-8 rounded-xl border border-border bg-card p-6 sm:p-8">
                <LeadForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lazy map embed (template .google-map): loads only when scrolled into
          view; consent note points at the privacy policy. */}
      <section aria-labelledby="contact-map-title" className="pb-20 sm:pb-32">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2
            id="contact-map-title"
            className="text-xl font-medium tracking-tight text-foreground"
          >
            {contactPage.mapHeading}
          </h2>
          <iframe
            src={contactPage.mapEmbedSrc}
            title={`Map showing the ${site.name} studio area in ${site.region}`}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="mt-6 h-80 w-full rounded-xl border border-border sm:h-[380px]"
          />
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground">
            {contactPage.mapNote}{" "}
            <a
              href={contactPage.mapLinkHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-6 items-center gap-1 font-medium text-waymarks-secondary transition-colors hover:text-waymarks-accent"
            >
              {contactPage.mapLinkLabel}
              <ExternalLink className="size-3.5" aria-hidden="true" />
            </a>
          </p>
        </div>
      </section>
    </>
  );
}
