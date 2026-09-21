import { Reveal } from "@/components/site/reveal";
import { SectionHeading } from "@/components/site/section-heading";
import { engagementHeading, engagementSteps } from "@/lib/content/home";

// Client engagement sequence: four numbered rows showing how a project runs
// once work starts. Vertical list style — deliberately distinct from the
// horizontal product-process band above.
export function EngagementSteps() {
  return (
    <section
      aria-labelledby="engagement-title"
      className="bg-secondary/30 py-20 sm:py-32"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow={engagementHeading.eyebrow}
          title={engagementHeading.title}
          id="engagement-title"
        />
        <ol className="mx-auto max-w-3xl space-y-4">
          {engagementSteps.map((step, index) => (
            <li key={step.step}>
              <Reveal delay={index * 100}>
                <div className="flex items-start gap-5 rounded-xl border border-border bg-card p-6">
                  <span
                    className="flex size-10 shrink-0 items-center justify-center rounded-full bg-waymarks-primary/15 text-sm font-semibold tabular-nums text-waymarks-secondary"
                    aria-hidden="true"
                  >
                    {step.step}
                  </span>
                  <div>
                    <h3 className="text-base font-medium tracking-tight">
                      {step.title}
                    </h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                      {step.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}