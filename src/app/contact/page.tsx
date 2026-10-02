import type { Metadata } from "next";

import { contactJsonLd, contactSeo } from "@/lib/content/contact";
import { site } from "@/lib/content/site";

import { ContactHero } from "@/components/site/contact-hero";
import { LeadForm } from "@/components/site/lead-form";
import { ContactDetails } from "@/components/site/contact-details";
import { FinalCta } from "@/components/site/final-cta";
import { Footer } from "@/components/site/footer";
import { Faq } from "@/components/site/faq";

export const metadata: Metadata = {
  // `absolute` bypasses the layout template, mirroring the home and services
  // routes so the brand is not appended twice.
  title: { absolute: contactSeo.title },
  description: contactSeo.description,
  alternates: { canonical: "/contact/" },
  openGraph: {
    title: contactSeo.title,
    description: contactSeo.description,
    url: `${site.domain}/contact/`,
    siteName: site.name,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: contactSeo.title,
    description: contactSeo.description,
  },
};

/**
 * Contact route (FR-12 / BR-3): hero → lead form beside the direct contact
 * panel → the shared FAQ block → closing CTA → footer. The FAQ is reused rather
 * than duplicated so the same questions (and the FAQPage JSON-LD that ships
 * with them on the home route) never appear twice on the site. The footer is
 * rendered per page (the root layout only owns the navbar), and the route ends
 * in a contact CTA per BR-2.
 */
export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactJsonLd) }}
      />

      <ContactHero />

      <section className="border-y border-white/10 bg-waymarks-surface py-20 lg:py-24">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-12 lg:gap-8 lg:px-8">
          <div className="lg:col-span-7">
            <LeadForm />
          </div>
          <div className="lg:col-span-5">
            <ContactDetails />
          </div>
        </div>
      </section>

      <Faq />
      <FinalCta />
      <Footer />
    </>
  );
}
