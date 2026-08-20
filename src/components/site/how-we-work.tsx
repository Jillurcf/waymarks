import { SectionHeading } from "@/components/site/section-heading";
import { processHeading, processSteps } from "@/lib/content/home";

export function HowWeWork() {
  return (
    <section id="process" className="bg-secondary/40 py-20 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow={processHeading.eyebrow}
          title={processHeading.title}
          description={processHeading.description}
        />
        <ol className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((step) => (
            <li
              key={step.step}
              className="relative flex flex-col gap-3 rounded-xl border border-border bg-card p-6"
            >
              <span
                className="flex size-10 items-center justify-center rounded-full bg-waymark-primary/10 text-sm font-semibold tabular-nums text-waymark-deep"
                aria-hidden="true"
              >
                {step.step}
              </span>
              <h3 className="text-lg font-medium tracking-tight">{step.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {step.description}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}