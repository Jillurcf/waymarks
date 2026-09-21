import { Reveal } from "@/components/site/reveal";
import { SectionHeading } from "@/components/site/section-heading";
import {
  productProcessHeading,
  productProcessSteps,
} from "@/lib/content/home";

// Product process: five connected stages from idea to launch, rendered as a
// numbered step row so the connecting journey reads at a glance.
export function ProductProcess() {
  return (
    <section
      aria-labelledby="product-process-title"
      className="py-20 sm:py-32"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow={productProcessHeading.eyebrow}
          title={productProcessHeading.title}
          description={productProcessHeading.description}
          id="product-process-title"
        />
        <ol className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {productProcessSteps.map((step, index) => (
            <li key={step.step}>
              <Reveal delay={index * 100} className="h-full">
                <div className="flex h-full flex-col gap-3 rounded-xl border border-border bg-card p-6">
                  <span
                    className="text-2xl font-semibold tabular-nums tracking-tight text-waymarks-accent"
                    aria-hidden="true"
                  >
                    {step.step}
                  </span>
                  <span className="sr-only">Step {step.step}</span>
                  <h3 className="text-base font-medium tracking-tight">
                    {step.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {step.description}
                  </p>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}