import { servicesMobileAppDesign } from "@/lib/content/services";

import { Icon } from "./icon";
import { MobileAppIcon } from "./mobile-app-icon";

/**
 * Mobile app design spotlight: the copy column leads on the left (left aligned) and
 * the feature visual takes the wider right column, mirroring the brand design
 * band above it on the same `waymarks-surface` ramp.
 */
export function ServicesMobileAppDesign() {
  return (
    <section className="border-b border-white/10 bg-waymarks-surface py-20 text-white lg:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:gap-10">
          <div className="lg:flex-1 lg:pt-4">
            <MobileAppIcon />
            <h2 className="mt-6 text-4xl font-bold tracking-tight text-white">
              {servicesMobileAppDesign.title}
            </h2>
            <p className="mt-4 text-sm font-semibold leading-relaxed text-muted-foreground">
              {servicesMobileAppDesign.body}
            </p>
            <a
              href={servicesMobileAppDesign.cta.href}
              className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-waymarks-service-accent transition-colors hover:text-waymarks-primary"
            >
              {servicesMobileAppDesign.cta.label}
              <Icon name={servicesMobileAppDesign.cta.icon} className="size-4" />
            </a>
          </div>

          {/* Feature visual (882 × 450). Plain img: images.unoptimized makes
              next/image pure overhead (quality gate C). */}
          <div className="lg:flex-[2]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={servicesMobileAppDesign.image.src}
              alt={servicesMobileAppDesign.image.alt}
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
