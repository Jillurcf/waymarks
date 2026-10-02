import { servicesMvpDevelopment } from "@/lib/content/services";

import { Icon } from "./icon";
import { MvpDevelopmentIcon } from "./mvp-development-icon";

/**
 * MVP development spotlight: the feature visual takes the wider left column
 * (~65%) and the copy column sits top-left aligned on the right. Sits directly
 * after the cover band on the same `waymarks-surface` ramp, so it continues that
 * band instead of introducing a new one.
 */
export function ServicesMvpDevelopment() {
  return (
    <section className="border-b border-white/10 bg-waymarks-surface py-20 text-white lg:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:gap-10">
          {/* Feature visual (882 × 450). Plain img: images.unoptimized makes
              next/image pure overhead (quality gate C). */}
          <div className="lg:flex-[2]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={servicesMvpDevelopment.image.src}
              alt={servicesMvpDevelopment.image.alt}
              width={882}
              height={450}
              className="w-full rounded-2xl border border-white/10 object-cover"
            />
          </div>

          <div className="lg:flex-1 lg:pt-4 lg:text-right">
            <MvpDevelopmentIcon className="ml-auto" />
            <h2 className="mt-6 text-4xl font-bold tracking-tight text-white">
              {servicesMvpDevelopment.title}
            </h2>
            <p className="mt-4 text-sm font-semibold leading-relaxed text-muted-foreground">
              {servicesMvpDevelopment.body}
            </p>
            <a
              href={servicesMvpDevelopment.cta.href}
              className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-waymarks-service-accent transition-colors hover:text-waymarks-primary"
            >
              {servicesMvpDevelopment.cta.label}
              <Icon name={servicesMvpDevelopment.cta.icon} className="size-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
