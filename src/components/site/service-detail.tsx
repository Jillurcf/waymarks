import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";

import { Reveal } from "@/components/site/reveal";
import { SectionHeading } from "@/components/site/section-heading";
import { SidebarCta } from "@/components/site/sidebar-cta";
import { FaqList, FaqSchema } from "@/components/site/faq";
import {
  PanelsTopLeft,
  Sparkles,
  LayoutTemplate,
  Workflow,
  Rocket,
  Smartphone,
  type LucideIcon,
} from "lucide-react";
import { services, type Service } from "@/lib/content/services";

// Service detail body (C3.3, FR-11): two-column layout ported from
// service-single.html — entry copy, deliverables, process steps, and FAQs on
// the left; sidebar CTA box plus other-services navigation on the right.
const iconMap: Record<string, LucideIcon> = {
  PanelsTopLeft,
  Sparkles,
  LayoutTemplate,
  Workflow,
  Rocket,
  Smartphone,
};

export function ServiceDetail({ service }: { service: Service }) {
  const Icon = iconMap[service.icon] ?? Sparkles;
  const otherServices = services.filter((s) => s.slug !== service.slug);
  const [lead, ...rest] = service.intro;

  return (
    <>
      <FaqSchema items={service.faqs} />
      <section className="py-20 sm:py-32">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-start gap-12 lg:grid-cols-3 lg:gap-16">
            {/* Main column */}
            <div className="lg:col-span-2">
              <Reveal>
                <div className="flex items-center gap-4">
                  <span className="flex size-14 shrink-0 items-center justify-center rounded-xl bg-waymarks-primary/10 text-waymarks-secondary">
                    <Icon className="size-7" aria-hidden="true" />
                  </span>
                  <p className="text-lg font-medium leading-relaxed tracking-tight text-waymarks-secondary">
                    {service.summary}
                  </p>
                </div>
                <p className="mt-8 text-lg leading-relaxed text-foreground">
                  {lead}
                </p>
                {rest.map((paragraph) => (
                  <p
                    key={paragraph.slice(0, 24)}
                    className="mt-4 text-base leading-relaxed text-muted-foreground"
                  >
                    {paragraph}
                  </p>
                ))}
              </Reveal>

              {/* Deliverables */}
              <Reveal>
                <div className="mt-14">
                  <SectionHeading
                    align="left"
                    eyebrow="Deliverables"
                    title="What you get"
                    id="service-deliverables-title"
                    className="mb-8"
                  />
                  <ul className="grid grid-cols-1 gap-x-8 gap-y-3 rounded-xl border border-border bg-card p-6 sm:grid-cols-2 sm:p-8">
                    {service.deliverables.map((deliverable) => (
                      <li
                        key={deliverable}
                        className="flex items-start gap-2.5 text-sm text-foreground"
                      >
                        <Check
                          className="mt-0.5 size-4 shrink-0 text-waymarks-accent"
                          aria-hidden="true"
                        />
                        {deliverable}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>

              {/* Process steps */}
              <Reveal>
                <div className="mt-14">
                  <SectionHeading
                    align="left"
                    eyebrow="Methodology"
                    title="How it works"
                    id="service-process-title"
                    className="mb-8"
                  />
                  <ol className="divide-y divide-border rounded-xl border border-border bg-card px-6">
                    {service.process.map((step, index) => (
                      <li key={step.title} className="flex gap-5 py-6 first:pt-6 last:pb-6">
                        <span
                          aria-hidden="true"
                          className="text-sm font-semibold tabular-nums text-waymarks-accent"
                        >
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        <div>
                          <h3 className="text-base font-medium tracking-tight">
                            {step.title}
                          </h3>
                          <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                            {step.description}
                          </p>
                        </div>
                      </li>
                    ))}
                  </ol>
                </div>
              </Reveal>

              {/* FAQs */}
              <Reveal>
                <div className="mt-14">
                  <SectionHeading
                    align="left"
                    eyebrow="FAQ"
                    title="Common questions"
                    id="service-faq-title"
                    className="mb-8"
                  />
                  <FaqList faqs={service.faqs} />
                </div>
              </Reveal>
            </div>

            {/* Sidebar: CTA box + other services (template .service-sidebar) */}
            <aside className="space-y-6 lg:sticky lg:top-28">
              <SidebarCta />
              <nav
                aria-label="Other services"
                className="rounded-xl border border-border bg-card p-6"
              >
                <h2 className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
                  Other services
                </h2>
                <ul className="mt-4 space-y-1">
                  {otherServices.map((other) => (
                    <li key={other.slug}>
                      <Link
                        href={`/services/${other.slug}`}
                        className="group flex items-center justify-between gap-2 rounded-lg px-3 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-muted hover:text-waymarks-accent"
                      >
                        {other.title}
                        <ArrowRight
                          className="size-4 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:text-waymarks-accent"
                          aria-hidden="true"
                        />
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
