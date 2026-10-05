import type { ServiceDetail } from "@/lib/content/service-details";
import { serviceDetailSections } from "@/lib/content/service-details";
import { bookCallHref } from "@/lib/content/site";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { CtaButton } from "./cta";

/**
 * Service FAQ band: heading and one CTA on the left, the accordion on the
 * right — the same two-column treatment as the site-wide FAQ. Accordion items
 * come from the typed content module, never JSX.
 */
export function ServiceDetailFaq({ service }: { service: ServiceDetail }) {
  return (
    <section className="border-b border-white/10 bg-waymarks-surface py-20 text-white lg:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <h2 className="max-w-md text-3xl font-bold tracking-tight text-white sm:text-4xl">
              {serviceDetailSections.faq.title}
            </h2>
            <p className="mt-4 max-w-md text-base leading-relaxed text-muted-foreground sm:text-lg">
              {serviceDetailSections.faq.body}
            </p>
            <div className="mt-8">
              <CtaButton
                cta={{ label: serviceDetailSections.faq.ctaLabel, href: bookCallHref }}
                variant="primary"
              />
            </div>
          </div>

          <div className="lg:col-span-7">
            <Accordion
              type="single"
              collapsible
              defaultValue="item-0"
              className="space-y-4"
            >
              {service.faqs.map((faq, index) => (
                <AccordionItem
                  key={faq.question}
                  value={`item-${index}`}
                  className="rounded-2xl border border-border bg-card px-6 transition-colors duration-200 last:border-b hover:border-waymarks-accent data-[state=open]:border-waymarks-accent"
                >
                  <AccordionTrigger className="text-left text-base font-semibold text-white">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-base leading-relaxed text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
}