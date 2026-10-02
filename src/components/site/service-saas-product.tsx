import { servicesSaasProduct } from "@/lib/content/services";

import { Icon } from "./icon";
import { SaasProductIcon } from "./saas-product-icon";

/**
 * SaaS product spotlight: the copy column leads on the left (left aligned) and
 * the feature visual takes the wider right column, mirroring the brand design
 * band above it on the same `waymarks-surface` ramp.
 */
export function ServicesSaasProduct() {
  return (
    <section className="border-b border-white/10 bg-waymarks-surface py-20 text-white lg:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:gap-10">
          <div className="lg:flex-1 lg:pt-4">
            <SaasProductIcon />
            <h2 className="mt-6 text-4xl font-bold tracking-tight text-white">
              {servicesSaasProduct.title}
            </h2>
            <p className="mt-4 text-sm font-semibold leading-relaxed text-muted-foreground">
              {servicesSaasProduct.body}
            </p>
            <a
              href={servicesSaasProduct.cta.href}
              className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-waymarks-service-accent transition-colors hover:text-waymarks-primary"
            >
              {servicesSaasProduct.cta.label}
              <Icon name={servicesSaasProduct.cta.icon} className="size-4" />
            </a>
          </div>

          {/* Feature visual (882 × 450). Plain img: images.unoptimized makes
              next/image pure overhead (quality gate C). */}
          <div className="lg:flex-[2]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={servicesSaasProduct.image.src}
              alt={servicesSaasProduct.image.alt}
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
