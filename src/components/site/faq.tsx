import { ChevronDown } from "lucide-react";

import { SectionHeading } from "@/components/site/section-heading";
import { faqHeading, faqs } from "@/lib/content/home";

// Section 13 — FAQ (objection handling).
// Rendered with native <details>/<summary> (no JS required). The FAQPage
// JSON-LD is generated from the same data source, so schema always matches
// the visible text exactly.
function FaqSchema() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
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

export function Faq() {
  return (
    <>
      <FaqSchema />
      <section id="faq" className="py-20 sm:py-32">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow={faqHeading.eyebrow}
            title={faqHeading.title}
            description={faqHeading.description}
          />
          <div className="divide-y divide-border rounded-xl border border-border bg-card">
            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="group px-6 py-5 [&[open]]:bg-secondary/40"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-base font-medium tracking-tight [&::-webkit-details-marker]:hidden">
                  {faq.question}
                  <ChevronDown
                    className="size-4 shrink-0 text-muted-foreground transition-transform group-open:rotate-180"
                    aria-hidden="true"
                  />
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}