import { SectionHeading } from "@/components/site/section-heading";
import { pricingHeading, pricingRows } from "@/lib/content/home";

export function PricingBlock() {
  return (
    <section id="pricing" className="py-20 sm:py-32">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow={pricingHeading.eyebrow}
          title={pricingHeading.title}
          description={pricingHeading.description}
        />
        <ul className="divide-y divide-border rounded-xl border border-border bg-card">
          {pricingRows.map((row) => (
            <li
              key={row.label}
              className="flex items-center justify-between gap-4 px-6 py-5"
            >
              <span className="text-base font-medium tracking-tight">
                {row.label}
              </span>
              <span className="text-sm font-semibold tabular-nums text-waymark-deep">
                {row.from}
              </span>
            </li>
          ))}
        </ul>
        <p className="mt-8 text-center">
          <a
            href="/pricing"
            className="inline-flex items-center gap-1 text-sm font-medium text-waymark-deep underline-offset-4 hover:underline"
          >
            See full pricing
          </a>
        </p>
      </div>
    </section>
  );
}