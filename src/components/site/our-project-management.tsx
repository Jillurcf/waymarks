import Image from "next/image";
import { ArrowRight } from "lucide-react";

import { ourProjectManagement as section } from "@/lib/content/project-management-experience";
import { routeHref } from "@/lib/routes";

/**
 * "Our Project Management Services" band: centred white/gradient heading over
 * a two-up card grid. Each card leads with the section visual, then a
 * hairline-framed panel carrying the numbered title, description, and the
 * green article link (design-system §4–5).
 */
export function OurProjectManagement() {
  return (
    <section
      aria-labelledby="our-project-management-heading"
      className="border-b border-white/10 bg-waymarks-surface py-20 text-white lg:py-24"
    >
      <div className="container">
        <h2
          id="our-project-management-heading"
          className="text-center text-[32px] font-bold leading-tight tracking-tight sm:text-[40px]"
        >
          <span className="block text-white">{section.heading.lead}</span>
          <span className="waymarks-gradient-text block">
            {section.heading.highlight}
          </span>
        </h2>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {section.items.map((item) => {
            const image = item.image ?? section.image;

            return (
              <article key={item.number} className="flex flex-col">
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={image.width}
                  height={image.height}
                  className="mb-4 h-auto w-full rounded-2xl border border-white/12 object-cover"
                />

                <div className="rounded-2xl">
                  <div className="flex items-baseline gap-3 rounded-xl border border-white/12 p-4 mt-4">
                    <span className="text-[28px] font-bold leading-none tracking-tight text-waymarks-primary tabular-nums">
                      {item.number}
                    </span>
                    <h3 className="text-[28px] font-bold leading-tight tracking-tight text-white">
                      {item.title}
                    </h3>
                  </div>

                  <p className="mt-6 text-base leading-relaxed text-white/75">
                    {item.description}
                  </p>

                  <a
                    href={routeHref(section.cta.href)}
                    className="mt-6 mb-8 inline-flex items-center gap-2 text-sm font-normal text-waymarks-primary transition-colors hover:text-waymarks-accent"
                  >
                    {section.cta.label}
                    <ArrowRight aria-hidden="true" className="size-4" />
                  </a>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
