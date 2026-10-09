import type { ServiceDetail, ServiceDetailImage } from "@/lib/content/service-details";

import { CtaButton } from "./cta";

/**
 * "Who this is for" band: the artwork leads in the left column, and the trailing
 * column names the audience — the headline at display size, one line per audience
 * type, then the CTA. Stacks to a single column below the tablet breakpoint
 * (design-system §3). `image` swaps the artwork when a route repeats the band
 * with a different visual.
 */
export function ServiceDetailWhoItsFor({
  service,
  image: imageOverride,
}: {
  service: ServiceDetail;
  image?: ServiceDetailImage;
}) {
  const { title, points, cta, image: serviceImage } = service.whoItsFor;
  const image = imageOverride ?? serviceImage;

  return (
    <section className="border-b border-white/10 bg-waymarks-surface py-20 text-white lg:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
          {/* Audience artwork (620 × 500). Plain img: images.unoptimized makes
              next/image pure overhead (quality gate C). */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={image.src}
            alt={image.alt}
            width={image.width}
            height={image.height}
            className="aspect-[620/500] w-full rounded-2xl border border-white/10 object-cover"
          />

          <div>
            <h2 className="text-[32px] font-bold leading-[1.15] tracking-tight text-white sm:text-[40px] lg:text-[56px]">
              {title}
            </h2>

            <ul className="mt-8 space-y-4">
              {points.map((point) => (
                <li key={point} className="flex items-start gap-3">
                  <span
                    aria-hidden="true"
                    className="mt-2.5 size-1.5 shrink-0 rounded-full bg-waymarks-primary"
                  />
                  <span className="text-base leading-relaxed text-muted-foreground sm:text-lg">
                    {point}
                  </span>
                </li>
              ))}
            </ul>

            <div className="mt-10">
              <CtaButton cta={cta} variant="primary" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}