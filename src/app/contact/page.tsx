import type { Metadata } from "next";

import { contactJsonLd, contactPageHero, contactSeo } from "@/lib/content/contact";
import { icons } from "@/lib/content/home";
import { site } from "@/lib/content/site";

import { Icon } from "@/components/site/icon";
import { LeadForm } from "@/components/site/lead-form";
import { FinalCta } from "@/components/site/final-cta";
import { Footer } from "@/components/site/footer";
import { Faq } from "@/components/site/faq";
import { ContactAfter } from "@/components/site/contact-after";
import { ContactGlobalTeam } from "@/components/site/contact-global-team";

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
 * Contact route (FR-12 / BR-3): a compact eyebrow band (mark + "Contact") →
 * the display headline beside the lead form (lit by a single top-right glow)
 * → the shared FAQ block → closing CTA → footer. The FAQ is reused rather
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

      <section className="bg-waymarks-dark text-white">
        {/* <div className="mx-auto max-w-6xl px-4 pb-10 pt-20 sm:px-6 lg:px-8 lg:pb-12 lg:pt-24">

        </div> */}
      </section>

      <section className="relative overflow-hidden border-y border-white/10 bg-waymarks-surface py-20 lg:py-24">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-1/4 right-0 size-[34rem] rounded-full bg-waymarks-primary/10 blur-3xl"
        />
        <div className="relative mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-12 lg:gap-2 lg:px-8">
          <div className="lg:col-span-6">
            <p className="flex items-center gap-4 text-2xl font-bold text-waymarks-primary">
              <Icon name={icons.mail} className="size-7" />
              <span>{contactPageHero.label}</span>
            </p>
            <h1 className="mt-8 text-4xl font-bold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-[56px]">
              {contactPageHero.title.map((line) => (
                <span key={line} className="lg:block">
                  {line}
                </span>
              ))}
            </h1>
            <p className="mt-6 text-xl font-bold text-white">
              {contactPageHero.intro}
            </p>
            <p className="mt-4 text-base text-white/75">
              {contactPageHero.body}
            </p>
            <ul className="mt-8 flex flex-col gap-4 max-w-[250px]">
              {contactPageHero.links.map((link) => (
                <li key={link.value} className="flex items-center gap-4">
                  <Icon name={link.icon} className="size-7 shrink-0 text-waymarks-primary" />
                  {link.href ? (
                    <a
                      href={link.href}
                      className="text-base text-white transition-colors duration-200 hover:text-waymarks-primary"
                    >
                      {link.value}
                    </a>
                  ) : (
                    <span className="text-base text-white">{link.value}</span>
                  )}
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:col-span-6">
            <LeadForm />
          </div>
        </div>
      </section>

      <ContactAfter />
      <ContactGlobalTeam />
      <Faq />
      <FinalCta />
      <Footer />
    </>
  );
}
