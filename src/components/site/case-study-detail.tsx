import { ArrowRight, Check } from "lucide-react";

import Link from "next/link";
import { Reveal } from "@/components/site/reveal";
import { SectionHeading } from "@/components/site/section-heading";
import { SidebarCta } from "@/components/site/sidebar-cta";
import { CountUp } from "@/components/site/count-up";
import { FaqList } from "@/components/site/faq";
import { WorkCard } from "@/components/site/work-card";
import type { CaseStudy } from "@/lib/content/case-studies";
import {
  caseStudyFaqHeading,
  caseStudyFaqs,
  caseStudyMeta,
  relatedWorkHeading,
} from "@/lib/content/work";

// Case-study detail body (C3.5, FR-14): entry with token-gradient hero,
// challenge/approach/result narrative, outcome metrics, meta sidebar
// (client/sector/services/year), related work, and FAQ.
export function CaseStudyDetail({
  study,
  related,
}: {
  study: CaseStudy;
  related: CaseStudy[];
}) {
  return (
    <>
      {/* Entry: gradient hero stands in for photography until brand imagery
          exists (conversion register C0.2) */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div
              className="h-56 w-full rounded-xl bg-gradient-to-br from-waymarks-accent/40 via-waymarks-primary/20 to-waymarks-secondary/10 sm:h-72"
              role="img"
              aria-label={study.coverAlt}
            />
            <div className="mt-10 max-w-3xl">
              <ul className="flex flex-wrap gap-1.5" aria-label="Project tags">
                {study.tags.map((tag) => (
                  <li
                    key={tag}
                    className="rounded-full border border-border bg-card px-2.5 py-0.5 text-xs text-muted-foreground"
                  >
                    {tag}
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-lg leading-relaxed text-foreground sm:text-xl">
                {study.description} {study.outcome}
              </p>
            </div>
          </Reveal>

          <div className="mt-14 grid items-start gap-12 lg:grid-cols-3 lg:gap-16">
            {/* Narrative column */}
            <div className="lg:col-span-2">
              <Reveal>
                <h2 className="text-2xl font-medium tracking-tight">
                  {caseStudyMeta.challengeTitle}
                </h2>
                <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                  {study.challenge}
                </p>
              </Reveal>
              <Reveal>
                <h2 className="mt-12 text-2xl font-medium tracking-tight">
                  {caseStudyMeta.approachTitle}
                </h2>
                <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                  {study.approach}
                </p>
              </Reveal>
              <Reveal>
                <h2 className="mt-12 text-2xl font-medium tracking-tight">
                  {caseStudyMeta.resultsTitle}
                </h2>
                <ul className="mt-4 space-y-3">
                  {study.results.map((result) => (
                    <li
                      key={result.slice(0, 24)}
                      className="flex items-start gap-2.5 text-base leading-relaxed text-foreground"
                    >
                      <Check
                        className="mt-1 size-4 shrink-0 text-waymarks-accent"
                        aria-hidden="true"
                      />
                      {result}
                    </li>
                  ))}
                </ul>
              </Reveal>

              {/* Outcome metrics */}
              <Reveal>
                <dl className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2">
                  {study.metrics.map((metric) => (
                    <div
                      key={metric.label}
                      className="flex flex-col-reverse gap-1 rounded-xl border border-border bg-card p-6"
                    >
                      <dt className="text-sm leading-snug text-muted-foreground">
                        {metric.label}
                      </dt>
                      <dd className="text-4xl font-medium tabular-nums tracking-tight text-waymarks-secondary">
                        <CountUp value={metric.value} />
                      </dd>
                    </div>
                  ))}
                </dl>
              </Reveal>
            </div>

            {/* Meta sidebar (client/sector/services/year) + CTA */}
            <aside className="space-y-6 lg:sticky lg:top-28">
              <Reveal>
                <dl className="rounded-xl border border-border bg-card p-6">
                  <div className="border-b border-border pb-4">
                    <dt className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                      {caseStudyMeta.client}
                    </dt>
                    <dd className="mt-1.5 text-sm font-medium">{study.client}</dd>
                  </div>
                  <div className="border-b border-border py-4">
                    <dt className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                      {caseStudyMeta.sector}
                    </dt>
                    <dd className="mt-1.5 text-sm font-medium">{study.sector}</dd>
                  </div>
                  <div className="border-b border-border py-4">
                    <dt className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                      {caseStudyMeta.services}
                    </dt>
                    <dd className="mt-1.5 text-sm font-medium">
                      {study.tags.join(", ")}
                    </dd>
                  </div>
                  <div className="pt-4">
                    <dt className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                      {caseStudyMeta.year}
                    </dt>
                    <dd className="mt-1.5 text-sm font-medium tabular-nums">
                      {study.year}
                    </dd>
                  </div>
                </dl>
              </Reveal>
              <SidebarCta />
            </aside>
          </div>
        </div>
      </section>

      {/* Related work */}
      {related.length > 0 ? (
        <section
          aria-labelledby="related-work-title"
          className="bg-secondary/40 py-20 sm:py-32"
        >
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <SectionHeading
              eyebrow={relatedWorkHeading.eyebrow}
              title={relatedWorkHeading.title}
              id="related-work-title"
            />
            <Reveal>
              <ul className="grid grid-cols-1 gap-6 md:grid-cols-3">
                {related.map((project) => (
                  <li key={project.slug} className="h-full">
                    <WorkCard project={project} />
                  </li>
                ))}
              </ul>
            </Reveal>
            <div className="mt-10 text-center">
              <Link
                href="/work"
                className="inline-flex items-center gap-1.5 rounded-lg border border-border bg-card px-4 py-2 text-sm font-medium text-foreground transition-all hover:bg-muted"
              >
                See all work
                <ArrowRight className="size-4" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </section>
      ) : null}

      {/* FAQ — shared answers across studies, so no FAQPage schema here */}
      <section aria-labelledby="cs-faq-title" className="py-20 sm:py-32">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow={caseStudyFaqHeading.eyebrow}
            title={caseStudyFaqHeading.title}
            description={caseStudyFaqHeading.description}
            id="cs-faq-title"
          />
          <Reveal>
            <FaqList faqs={caseStudyFaqs} />
          </Reveal>
        </div>
      </section>
    </>
  );
}
