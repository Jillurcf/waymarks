import { processSection } from "@/lib/content/home";

import { Icon } from "./icon";

/**
 * Process (P4.9): six-step Discover → Improve grid on the brand-navy base
 * (design process-card with step number + icon in accent green).
 */
export function Process() {
  return (
    <section className="bg-waymarks-dark bg-waymarks-radial py-20 lg:py-24">
      <div className="container">
        <h2 className="max-w-2xl text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          {processSection.title}
        </h2>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
          {processSection.intro}
        </p>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {processSection.steps.map((step) => (
            <div
              key={step.step}
              className="rounded-2xl border border-border bg-white/3 p-7 transition-all duration-200 hover:-translate-y-1 hover:border-waymarks-accent hover:shadow-card-hover"
            >
              <div className="flex items-center gap-2 text-xs font-bold tracking-widest text-waymarks-accent">
                <Icon name={step.icon} className="size-4" />
                <span>STEP {step.step}</span>
              </div>
              <h3 className="mt-4 text-xl font-bold text-waymarks-primary">
                {step.title}
              </h3>
              <p className="mt-2 text-base leading-relaxed text-muted-foreground">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}