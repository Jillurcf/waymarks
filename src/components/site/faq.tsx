import { faqSection } from "@/lib/content/home";

import { cn } from "@/lib/utils";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

import { CtaButton } from "./cta";

/**
 * FAQ (P4.11): two-column band — heading copy + CTA on the left, the shadcn
 * accordion on the right. First item open and active-state hairline follow the
 * design reference's `.faq-item.active` treatment.
 */
export function Faq() {
  return (
    <section className="bg-waymarks-dark py-20 lg:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <h2 className="max-w-md text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              {faqSection.title}
            </h2>
            <p className="mt-4 max-w-md text-base leading-relaxed text-muted-foreground sm:text-lg">
              {faqSection.intro}
            </p>
            <div className="mt-8">
              <CtaButton cta={faqSection.cta} variant="primary" />
            </div>

            <div className="mt-8 flex items-center gap-4">
              <div className="flex">
                {faqSection.activeSupport.avatars.map((avatar, i) => (
                  <img
                    key={avatar.src}
                    src={avatar.src}
                    alt={avatar.alt}
                    className={cn(
                      "size-11 shrink-0 rounded-full border-2 border-waymarks-dark object-cover",
                      i > 0 && "-ml-[22px]",
                    )}
                  />
                ))}
              </div>
              <div>
                <p className="text-sm font-semibold text-white">
                  {faqSection.activeSupport.title}
                </p>
                <p className="text-xs text-muted-foreground">
                  {faqSection.activeSupport.subtitle}
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <Accordion
              type="single"
              collapsible
              defaultValue="item-0"
              className="space-y-4"
            >
              {faqSection.items.map((item, index) => (
                <AccordionItem
                  key={item.question}
                  value={`item-${index}`}
                  className="rounded-2xl border border-border bg-card px-6 transition-colors duration-200 last:border-b hover:border-waymarks-accent data-[state=open]:border-waymarks-accent"
                >
                  <AccordionTrigger className="text-left text-base font-semibold text-white">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-base leading-relaxed text-muted-foreground">
                    {item.answer}
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