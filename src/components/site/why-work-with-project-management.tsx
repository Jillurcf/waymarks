import Image from "next/image";

import { whyWorkWithProjectManagement as section } from "@/lib/content/project-management-experience";

import { CtaButton } from "./cta";

/**
 * "Why Work With a Project Management Partner?" band: the supporting visual
 * leads on the left, while the white/gradient headline, argument, and primary
 * CTA sit on the right (design-system §3–5).
 */
export function WhyWorkWithProjectManagement() {
  return (
    <section
      aria-labelledby="why-work-with-project-management-heading"
      className="border-b border-white/10 bg-waymarks-dark py-20 text-white lg:py-24"
    >
      <div className="container">
        <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-16">
          <div>
            <Image
              src={section.image.src}
              alt={section.image.alt}
              width={section.image.width}
              height={section.image.height}
              className="h-auto w-full rounded-2xl border border-white/12 object-cover"
            />
          </div>

          <div>
            <h2
              id="why-work-with-project-management-heading"
              className="text-[32px] font-bold sm:text-[40px]"
            >
              <span className="block text-white">{section.heading.lead}</span>
              <span className="waymarks-gradient-text block">
                {section.heading.highlight}
              </span>
            </h2>

            <p className="mt-6 text-[20px] font-normal leading-relaxed text-white">
              {section.body}
            </p>

            <p className="mt-4 text-base font-normal leading-relaxed text-white/75">
              {section.note}
            </p>

            <CtaButton cta={section.cta} className="mt-20" />
          </div>
        </div>
      </div>
    </section>
  );
}
