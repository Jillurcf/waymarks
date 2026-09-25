import { caseStudySection } from "@/lib/content/home";

import { CtaButton } from "./cta";

/**
 * Case study (P4.8): Weavers showcase card inverted out of the section band —
 * the browser-frame thumbnail is rebuilt entirely from tokens/typography, no
 * imagery (gate C).
 */
export function CaseStudy() {
  const thumb = caseStudySection.thumbnail;
  return (
    <section
      id="work"
      className="scroll-mt-24 border-y border-white/10 bg-waymarks-surface py-20 text-white lg:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 className="max-w-2xl text-3xl font-bold tracking-tight sm:text-4xl">
          {caseStudySection.title}
        </h2>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/70 sm:text-lg">
          {caseStudySection.intro}
        </p>

        <div className="mt-12 grid items-center gap-10 rounded-3xl border border-white/10 bg-waymarks-dark p-8 shadow-card lg:grid-cols-2 lg:gap-14 lg:p-12">
          <div>
            <h3 className="text-2xl font-bold text-white">{caseStudySection.client}</h3>
            <p className="mt-4 text-base leading-relaxed text-white/75">
              {caseStudySection.body}
            </p>
            <ul className="mt-8 space-y-3">
              {caseStudySection.results.map((result) => (
                <li
                  key={result}
                  className="text-xl font-bold text-waymarks-primary"
                >
                  {result}
                </li>
              ))}
            </ul>
            <div className="mt-10">
              <CtaButton cta={caseStudySection.cta} variant="primary" />
            </div>
          </div>

          {/* Browser-frame thumbnail */}
          <div className="overflow-hidden rounded-xl border border-white/10 bg-waymarks-surface-raised shadow-card">
            <div className="flex items-center gap-2 border-b border-white/10 bg-white/5 px-4 py-2.5">
              <span aria-hidden="true" className="size-2.5 rounded-full bg-red-400/80" />
              <span aria-hidden="true" className="size-2.5 rounded-full bg-yellow-400/80" />
              <span aria-hidden="true" className="size-2.5 rounded-full bg-green-400/80" />
              <span className="ml-2 text-xs text-white/50">{thumb.url}</span>
            </div>
            <div className="flex min-h-72 flex-col justify-between gap-6 p-6">
              <div className="flex items-start justify-between gap-4">
                <span className="text-xl font-extrabold tracking-wider text-waymarks-primary">
                  {thumb.wordmark}
                </span>
                <span className="rounded-full bg-waymarks-primary/20 px-3 py-1 text-xs font-semibold text-waymarks-primary">
                  {thumb.badge}
                </span>
              </div>
              <div>
                <h4 className="text-xl font-bold leading-tight text-white">
                  {thumb.title}
                </h4>
                <p className="mt-2 text-xs leading-relaxed text-white/60">
                  {thumb.blurb}
                </p>
              </div>
              <div className="flex flex-wrap items-center gap-3">
                <span className="inline-flex h-9 items-center rounded-full bg-waymarks-cta px-4 text-xs font-bold text-waymarks-dark">
                  {thumb.primaryButton}
                </span>
                <span className="inline-flex h-9 items-center rounded-full border border-white/15 px-4 text-xs font-semibold text-white">
                  {thumb.secondaryButton}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}