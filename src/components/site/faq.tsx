import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Reveal } from "@/components/site/reveal";
import { SectionHeading } from "@/components/site/section-heading";
import { SidebarCta } from "@/components/site/sidebar-cta";
import { faqHeading, faqs, type Faq } from "@/lib/content/home";

// FAQ block (C1.6), ported from the template's .our-faqs accordion onto the
// shadcn/Radix primitive (keyboard-complete; reduced motion handled in
// globals.css). The visible text is the single source for FAQPage JSON-LD,
// so schema always matches what is on screen.
export interface FaqGroup {
  title: string;
  faqs: Faq[];
}

export function FaqSchema({ items }: { items: Faq[] }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

export function FaqList({ faqs }: { faqs: Faq[] }) {
  return (
    <Accordion
      type="single"
      collapsible
      className="rounded-xl border border-border bg-card px-6"
    >
      {faqs.map((faq) => (
        <AccordionItem key={faq.question} value={faq.question}>
          <AccordionTrigger className="py-5 text-base font-medium tracking-tight">
            {faq.question}
          </AccordionTrigger>
          <AccordionContent className="pb-5 text-sm leading-relaxed text-muted-foreground">
            {faq.answer}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}

// Grouped variant for the faqs.html fold: themed question groups reused on
// home/pricing/services per the page mapping (implementation plan §2).
export function FaqGroups({ groups }: { groups: FaqGroup[] }) {
  return (
    <div className="flex flex-col gap-10">
      {groups.map((group) => (
        <section key={group.title}>
          <h3 className="mb-4 text-lg font-medium tracking-tight">
            {group.title}
          </h3>
          <FaqList faqs={group.faqs} />
        </section>
      ))}
    </div>
  );
}

// Home FAQ section (block 12, template .our-faqs): heading, a help/CTA aside
// (the template's image + phone box, rebuilt as the shared SidebarCta), and
// the accordion. The visible text is the single source for FAQPage JSON-LD,
// so schema always matches what is on screen.
export function Faq() {
  return (
    <>
      <FaqSchema items={faqs} />
      <section id="faq" aria-labelledby="faq-title" className="py-20 sm:py-32">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow={faqHeading.eyebrow}
            title={faqHeading.title}
            id="faq-title"
          />
          <div className="grid items-start gap-8 lg:grid-cols-5 lg:gap-12">
            <Reveal className="lg:col-span-2">
              <SidebarCta />
            </Reveal>
            <Reveal delay={100} className="lg:col-span-3">
              <FaqList faqs={faqs} />
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
