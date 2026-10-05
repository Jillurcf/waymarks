import type { ServiceDetail } from "@/lib/content/service-details";
import { serviceDetailSections } from "@/lib/content/service-details";

/**
 * Methodology band: numbered steps on the dark base, separated by hairlines.
 * The waymark line — each step points at the next one (design-system §3).
 */
export function ServiceDetailProcess({ service }: { service: ServiceDetail }) {
  return (
    <section className="border-b border-white/10 bg-waymarks-dark py-20 text-white lg:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <p className="text-xs font-medium uppercase tracking-widest text-waymarks-accent">
          {serviceDetailSections.process.eyebrow}
        </p>
        <h2 className="mt-4 max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-4xl">
          {serviceDetailSections.process.title}
        </h2>

        <ol className="mt-10 divide-y divide-white/10 border-y border-white/10">
          {service.process.map((step, index) => (
            <li
              key={step.title}
              className="grid gap-3 py-8 sm:grid-cols-12 sm:gap-6"
            >
              <span className="font-mono text-sm font-semibold tabular-nums text-waymarks-primary sm:col-span-2">
                {String(index + 1).padStart(2, "0")}
              </span>
              <div className="sm:col-span-10">
                <h3 className="text-xl font-semibold tracking-tight text-white">
                  {step.title}
                </h3>
                <p className="mt-2 max-w-2xl text-base leading-relaxed text-muted-foreground">
                  {step.description}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}