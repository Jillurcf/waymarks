import Link from "next/link";
import { ChevronRight } from "lucide-react";

import { breadcrumbTrail, type Route } from "@/lib/routes";
import type { ServiceDetail } from "@/lib/content/service-details";

import { CtaButton, ctaClass } from "./cta";
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

      <div className="container relative pb-16 pt-8 lg:pb-4 lg:pt-10">
        <Breadcrumbs pathname={service.path} />

        <div className="mt-10 flex flex-col items-center gap-10 lg:flex-row lg:gap-2">
          <div className="animate-fade-up lg:flex-">
            <p className="flex items-center gap-4 text-[22px] font-bold text-waymarks-primary sm:text-2xl">
              {service.slug === "project-management-services" ? (
                <svg
                  aria-hidden="true"
                  viewBox="0 0 72 72"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-18 shrink-0 text-waymarks-primary"
                >
                  <rect width="72" height="72" rx="12" fill="currentColor" fillOpacity="0.1" />
                  <path
                    d="M30 28.5H36M36 28.5H43.125C46.285 28.5 47.865 28.5 49 29.2584C49.4915 29.5867 49.9132 30.0086 50.2416 30.4999C51 31.6349 51 33.215 51 36.375C51 41.6418 51 44.2751 49.736 46.1669C49.1889 46.9857 48.4857 47.6889 47.6669 48.236C45.7751 49.5 43.1418 49.5 37.875 49.5H36C28.9289 49.5 25.3934 49.5 23.1967 47.3032C21 45.1066 21 41.571 21 34.5V29.9164C21 27.1917 21 25.8293 21.5705 24.8071C21.9771 24.0784 22.5784 23.4771 23.3071 23.0705C24.3293 22.5 25.6917 22.5 28.4164 22.5C30.162 22.5 31.0348 22.5 31.7989 22.7865C33.5433 23.4407 34.2627 25.0254 35.0499 26.5997L36 28.5Z"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path d="M36 34.5V37.5" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M42 34.5V43.5" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M30 34.5V40.5" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              ) : (
                <ServiceMark slug={service.slug} />
              )}
              <span>{service.hero.label}</span>
            </p>

            <h1 className="mt-4 text-[56px] font-bold leading-[1.1] tracking-tight">
              {service.hero.title.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </h1>

            <p className="mt-2 max-w-xl text-[22px] leading-relaxed text-white">
              {service.hero.intro}
            </p>
            <p className="mt-1 max-w-xl text-[16px] leading-relaxed text-white/75">
              {service.hero.body}
            </p>

            <div className="mt-2 flex flex-wrap items-center gap-3">
              <CtaButton cta={service.hero.cta} variant="primary" />
              {service.hero.secondaryCta ? (
                <a href={service.hero.secondaryCta.href} className={ctaClass("outline")}>
                  <span>{service.hero.secondaryCta.label}</span>
                </a>
              ) : null}
            </div>
          </div>

          {/* Hero visual. Plain img: images.unoptimized makes next/image pure
              overhead (quality gate C). */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <div className="animate-fade-up lg:flex-">
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
