import type { ServiceDetail } from "@/lib/content/service-details";

/**
 * Recent product design band: the centred headline leads at display size with
 * the closing phrase on the CTA gradient, the supporting line follows beneath
 * it, and the visuals run as two columns — the three captioned screens stack
 * one under the other on the left, one tall product shot holds the right and
 * stays aligned to the top of the stack, captioned like the screens
 * (design-system §3). Runs on the dark
 * base so the `waymarks-surface` bands either side keep their own stretch.
 */
export function ServiceDetailRecentProductDesign({ service }: { service: ServiceDetail }) {
  const section = service.recentProductDesign;

  if (!section) return null;

  return (
    <section
      id="recent-product-design"
      className="scroll-mt-24 border-b border-white/10 bg-waymarks-dark py-20 text-white lg:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 className="mx-auto max-w-4xl text-center text-[32px] font-bold leading-[1.15] tracking-tight text-white sm:text-[40px] lg:text-[56px]">
          {section.heading.lead}
          <span className="waymarks-gradient-text block">{section.heading.highlight}</span>
        </h2>

        <p className="mx-auto mt-8 max-w-2xl text-center text-base leading-relaxed text-muted-foreground sm:text-lg">
          {section.body}
        </p>

        <div className="mt-14 grid gap-10 lg:grid-cols-2 lg:items-start lg:gap-6">
          {/* Left column — the captioned screens, one after another. */}
          <div className="flex flex-col gap-2">
            {section.items.map((item) => (
              <figure key={item.title}>
                {/* Plain img: images.unoptimized makes next/image pure overhead
                    (quality gate C). */}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={item.image.src}
                  alt={item.image.alt}
                  width={item.image.width}
                  height={item.image.height}
                  loading="lazy"
                  className="h-auto w-full rounded-2xl border border-white/10"
                />
                <figcaption className="mt-1 text-lg font-semibold tracking-tight text-white sm:text-xl">
                  {item.title}
                </figcaption>
              </figure>
            ))}
          </div>

          {/* Right column — one tall product shot, top-aligned with the stack. */}
          <figure>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={section.image.src}
              alt={section.image.alt}
              width={section.image.width}
              height={section.image.height}
              loading="lazy"
              className="h-auto w-full rounded-2xl border border-white/10"
            />
            {section.imageTitle ? (
              <figcaption className="mt-1 text-lg font-semibold tracking-tight text-white sm:text-xl">
                {section.imageTitle}
              </figcaption>
            ) : null}
          </figure>
        </div>
      </div>
    </section>
  );
}
