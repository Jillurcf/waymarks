import Link from "next/link";
import { ChevronRight } from "lucide-react";

import { breadcrumbTrail, type Route } from "@/lib/routes";
import type { ServiceDetail } from "@/lib/content/service-details";

import { CtaButton } from "./cta";
import { ServiceMark } from "./service-mark";

/** Breadcrumb trail for any route whose path is registered in the route map. */
export function Breadcrumbs({ pathname }: { pathname: string }) {
  const trail: Route[] = breadcrumbTrail(pathname);

  return (
    <nav aria-label="Breadcrumb">
      <ol className="flex flex-wrap items-center gap-x-1.5 gap-y-1 text-sm">
        {trail.map((crumb, index) => {
          const isLast = index === trail.length - 1;
          return (
            <li key={crumb.path} className="flex items-center gap-x-1.5">
              {index > 0 ? (
                <ChevronRight className="size-3.5 shrink-0 text-white/40" aria-hidden="true" />
              ) : null}
              {isLast ? (
                <span aria-current="page" className="text-waymarks-primary">
                  {crumb.title}
                </span>
              ) : (
                <Link
                  href={crumb.path}
                  className="text-white/60 transition-colors hover:text-waymarks-primary"
                >
                  {crumb.title}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

/**
 * Service detail hero: breadcrumb, then the same stage language as the services
 * overview — mark + eyebrow label, display headline on the left column, hero
 * visual on the right. High, centered eyeline with generous space below the
 * headline (design-system §3).
 */
export function ServiceDetailHero({ service }: { service: ServiceDetail }) {
  return (
    <section className="relative overflow-hidden border-b border-white/10 bg-waymarks-dark text-white">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-0 size-[34rem] rounded-full bg-waymarks-primary/10 blur-3xl"
      />

      <div className="relative mx-auto max-w-6xl px-4 pb-16 pt-8 sm:px-6 lg:px-8 lg:pb-4 lg:pt-10">
        <Breadcrumbs pathname={service.path} />

        <div className="mt-10 flex flex-col items-center gap-10 lg:flex-row lg:gap-2">
          <div className="animate-fade-up lg:flex-7/12">
            <p className="flex items-center gap-4 text-[22px] font-bold text-waymarks-primary sm:text-2xl">
              <ServiceMark slug={service.slug} />
              <span>{service.hero.label}</span>
            </p>

            <h1 className="mt-4 text-[56px] font-bold leading-[1.1] tracking-tight">
              {service.hero.title.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </h1>

            <p className="mt-2 max-w-xl text-lg leading-relaxed text-white/75">
              {service.hero.intro}
            </p>
            <p className="mt-1 max-w-xl text-lg leading-relaxed text-white/75">
              {service.hero.body}
            </p>

            <CtaButton cta={service.hero.cta} variant="primary" className="mt-2" />
          </div>

          {/* Hero visual. Plain img: images.unoptimized makes next/image pure
              overhead (quality gate C). */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <div className="animate-fade-up lg:flex-5/12">
            <img
              src={service.hero.image.src}
              alt={service.hero.image.alt}
              width={service.hero.image.width}
              height={service.hero.image.height}
              loading="eager"
              fetchPriority="high"
              className="w-full h-auto pb-8 "
            />
          </div>
        </div>
      </div>
    </section>
  );
}