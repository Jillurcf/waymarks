import { whyUsSection } from "@/lib/content/home";

/**
 * Why choose us (P4.10): six-reason bento on the section band
 * (design surface-section + bento-card, no icons in the reference).
 */
export function WhyUs() {
  return (
    <section className="border-y border-border bg-waymarks-surface py-20 lg:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 className="max-w-2xl text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          {whyUsSection.title}
        </h2>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
          {whyUsSection.intro}
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {whyUsSection.items.map((reason) => (
            <div
              key={reason.title}
              className="rounded-2xl border border-border bg-card p-8 transition-all duration-200 hover:-translate-y-1 hover:border-waymarks-accent hover:shadow-card-hover"
            >
              <h3 className="text-xl font-bold text-white">
                {reason.title}
              </h3>
              <p className="mt-2 text-base leading-relaxed text-muted-foreground">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}