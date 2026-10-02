import { servicesNeedMoreThanOne } from "@/lib/content/services";

import { Icon } from "./icon";

/**
 * Need more than one spotlight: the feature visual takes the wider left column
 * (~65%) and the copy column sits top-left aligned on the right.
 */
export function ServicesNeedMoreThanOne() {
  return (
    <section className="border-b border-white/10 bg-waymarks-surface py-20 text-white lg:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:gap-10">
          {/* Feature visual (882 × 450). Plain img: images.unoptimized makes
              next/image pure overhead (quality gate C). */}
          <div className="lg:flex-[2]">
            <h2 className="mt-6 text-4xl text-start font-bold tracking-tight text-white">
              {servicesNeedMoreThanOne.title}
            </h2>
            <p className="mt-4 text-start text-sm pb-4 font-semibold leading-relaxed text-muted-foreground">
              {servicesNeedMoreThanOne.body}
            </p>

          <div className="lg:mt-8">
              {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={servicesNeedMoreThanOne.image.src}
              alt={servicesNeedMoreThanOne.image.alt}
              width={882}
              height={450}
              className="w-full rounded-2xl border border-white/10 object-cover"
            />
          </div>
          </div>

          <div className="lg:flex-1 lg:pt-4">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/services/service_need_more_than_one.png"
              alt="Need more than one service"
              width={882}
              height={450}
              className="w-full rounded-2xl border border-white/10 object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
