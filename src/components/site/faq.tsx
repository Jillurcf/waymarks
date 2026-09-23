import { faqSection } from "@/lib/content/home";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

/**
 * FAQ (P4.11): six items in the shadcn accordion on a centered light section,
 * first item open by default matching the design reference.
 */
export function Faq() {
  return (
    <section className="bg-waymarks-light py-20 lg:py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          {faqSection.title}
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-base leading-relaxed text-muted-foreground sm:text-lg">
          {faqSection.intro}
        </p>

        <Accordion
          type="single"
          collapsible
          defaultValue="item-0"
          className="mt-10 space-y-4"
        >
          {faqSection.items.map((item, index) => (
            <AccordionItem
              key={item.question}
              value={`item-${index}`}
              className="rounded-2xl border border-border bg-card px-6 transition-colors duration-200 last:border-b data-[state=open]:border-waymarks-accent"
            >
              <AccordionTrigger className="text-left text-base font-semibold text-waymarks-secondary">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="text-base leading-relaxed text-muted-foreground">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}