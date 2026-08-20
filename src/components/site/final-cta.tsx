import { LeadForm } from "@/components/site/lead-form";
import { SectionHeading } from "@/components/site/section-heading";
import { finalCta } from "@/lib/content/home";
import { bookCallHref } from "@/lib/content/site";

export function FinalCta() {
  return (
    <section
      id="contact"
      className="bg-foreground py-20 text-background sm:py-32"
    >
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow={finalCta.eyebrow}
          title={finalCta.title}
          description={finalCta.description}
          tone="inverse"
        />
        <div className="mb-10 text-center">
          <a
            href={bookCallHref}
            className="inline-flex h-11 items-center justify-center rounded-lg bg-waymark-primary px-6 text-base font-medium text-foreground transition-all hover:bg-waymark-primary/85"
          >
            {finalCta.bookCallLabel}
          </a>
          <p className="mt-4 text-sm text-background/60">{finalCta.orLabel}</p>
        </div>
        <div className="rounded-xl border border-background/15 bg-background p-6 text-foreground sm:p-8">
          <LeadForm />
        </div>
      </div>
    </section>
  );
}