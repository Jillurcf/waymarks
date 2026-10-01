import { servicesPageHero } from "@/lib/content/services";
import { bookCallHref, navCtaLabel } from "@/lib/content/site";
import { cn } from "@/lib/utils";

import { ctaClass } from "./cta";
import { ServiceIcon } from "./service-icon";

/**
 * Services page hero. Label row (mark + "Services") sits above a 56px display
 * headline on the left column; the right column is the image slot for the
 * studio's hero visual.
 */
export function ServicesPageHero() {
  return (
    <section className="relative overflow-hidden bg-waymarks-dark text-white">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-1/4 right-0 size-[34rem] rounded-full bg-waymarks-primary/10 blur-3xl"
      />

      <div className="relative mx-auto flex max-w-6xl items-center px-4 py-20 sm:px-6 lg:grid-cols-2 lg:gap-8 lg:px-8 lg:py-24">
        <div className="animate-fade-up">
          <p className="flex items-center gap-4 text-[22px] font-bold text-waymarks-primary sm:text-2xl">
            <ServiceIcon />
            <span>{servicesPageHero.label}</span>
          </p>
          <h1 className="mt-8 text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl lg:text-[56px]">
            {servicesPageHero.title.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/75">
            {servicesPageHero.intro}
          </p>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/75">
            {servicesPageHero.body}
          </p>
          <a href={bookCallHref} className={cn(ctaClass("primary"), "mt-8")}>
            {navCtaLabel}
          </a>
        </div>

        {/* Hero visual (528 × 700 portrait). Plain img: images.unoptimized
            makes next/image pure overhead (quality gate C). */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <div>
          <img
            src={servicesPageHero.image.src}
            alt={servicesPageHero.image.alt}
            width={528}
            height={700}
            loading="eager"
            fetchPriority="high"
            className="mx-auto w-full max-w-md rounded-3xl border border-white/10 object-cover"
          />
        </div>
      </div>
    </section>
  );
}