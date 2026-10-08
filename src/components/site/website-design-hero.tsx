import { websiteDesignHero } from "@/lib/content/website-design";

import { CtaButton, ctaClass } from "./cta";
import { Breadcrumbs } from "./service-detail-hero";
import { WebsiteDesignIcon } from "./website-design-icon";

/**
 * Website design detail hero: breadcrumb trail, then the eyebrow mark + label on
 * the stage, then a flex split — display headline, supporting copy and the two
 * CTAs lead on the left, the studio's hero visual holds the right
 * (design-system §4 Hero).
 */
export function WebsiteDesignHero() {
  return (
    <section className="relative overflow-hidden border-b border-white/10 bg-waymarks-dark text-white">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-0 size-[34rem] rounded-full bg-waymarks-primary/10 blur-3xl"
      />

      <div className="relative mx-auto max-w-6xl px-4 pb-16 pt-8 sm:px-6 lg:px-8 lg:pb-24 lg:pt-10">
        <Breadcrumbs pathname={websiteDesignHero.path} />

        <p className="mt-10 flex items-center gap-4 text-[22px] font-bold text-waymarks-primary sm:text-2xl">
          <WebsiteDesignIcon className="size-11" />
          <span>{websiteDesignHero.label}</span>
        </p>

        <div className="mt-10 flex flex-col gap-10 lg:flex-row lg:items-center lg:gap-2">
          <div className="animate-fade-up w-7/12">
            <h1 className="text-[56px] font-bold leading-[1.1] tracking-tight">
              {websiteDesignHero.title.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </h1>

            <p className="mt-6 max-w-xl text-[18px] leading-relaxed text-white">
              {websiteDesignHero.intro}
            </p>
            <p className="mt-2 max-w-xl text-[16px] leading-relaxed text-white/75">
              {websiteDesignHero.body}
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <CtaButton cta={websiteDesignHero.cta} variant="primary" />
              <a href={websiteDesignHero.secondaryCta.href} className={ctaClass("outline")}>
                <span>{websiteDesignHero.secondaryCta.label}</span>
              </a>
            </div>
          </div>

          {/* Hero visual (528 × 541). Plain img: images.unoptimized makes
              next/image pure overhead (quality gate C). */}
          <div className="animate-fade-up w-5/12">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={websiteDesignHero.image.src}
              alt={websiteDesignHero.image.alt}
              width={websiteDesignHero.image.width}
              height={websiteDesignHero.image.height}
              loading="eager"
              fetchPriority="high"
              className="mx-auto w-full rounded-3xl border border-white/10 object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
