import { caseStudySection } from "@/lib/content/home";

import { CtaButton } from "./cta";

/**
 * Case study (P4.8): Weavers showcase card inverted out of the section band —
 * the browser-frame thumbnail is rebuilt entirely from tokens/typography, no
 * imagery (gate C).
 */
export function CaseStudy() {
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
        <div>
            <img
            src="/images/Real_Case_Study_Thumbnail_Visual.png"
            alt={`${caseStudySection.client} case study visual`}
            className=" h-full w-full rounded-2xl object-cover"
          />
        </div>
        </div>
      </div>
    </section>
  );
}