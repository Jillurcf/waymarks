import { Reveal } from "@/components/site/reveal";
import { SectionHeading } from "@/components/site/section-heading";
import { FaqList, FaqSchema } from "@/components/site/faq";

interface FaqSectionProps {
  eyebrow: string;
  title: string;
  description?: string;
  faqs: { question: string; answer: string }[];
  /** Emit FAQPage JSON-LD — only for blocks with page-unique questions. */
  schema?: boolean;
}

// Standard FAQ section (heading + accordion) reused by the /about,
// /services, /pricing, and case-study pages. The home block keeps its own
// aside layout in faq.tsx.
export function FaqSection({
  eyebrow,
  title,
  description,
  faqs,
  schema = false,
}: FaqSectionProps) {
  return (
    <>
      {schema ? <FaqSchema items={faqs} /> : null}
      <section aria-labelledby="faq-section-title" className="py-20 sm:py-32">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow={eyebrow}
            title={title}
            description={description}
            id="faq-section-title"
          />
          <Reveal>
            <FaqList faqs={faqs} />
          </Reveal>
        </div>
      </section>
    </>
  );
}
