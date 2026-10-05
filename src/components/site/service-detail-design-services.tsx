import type { ServiceDetail } from "@/lib/content/service-details";

/**
 * Design services band: the discipline headline leads at display size with the
 * closing phrase on the CTA gradient, the two promise paragraphs follow, and the
 * service line-up sits below in a two-column grid — number, title, and the
 * concrete outcome. Every card is identical, so the grid fills row by row
 * (design-system §3).
 */
export function ServiceDetailDesignServices({ service }: { service: ServiceDetail }) {
  const { heading, intro, body, items } = service.designServices;

  return (
    <section className="border-b border-white/10 bg-waymarks-surface py-20 text-white lg:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 className="max-w-4xl mx-auto text-center text-[32px] font-bold leading-[1.15] tracking-tight text-white sm:text-[40px] lg:text-[56px]">
          {heading.lead}
          <span className="waymarks-gradient-text block">{heading.highlight}</span>
        </h2>

        <div className="mt-8 mx-auto text-center max-w-xl space-y-4">
          <p className="text-[20px] leading-relaxed text-muted-foreground sm:text-lg">{intro}</p>
          <p className="text-[16px] text-center text-white/25 leading-relaxed  sm:text-lg">{body}</p>
        </div>

        <ul className="mt-14 grid gap-10 sm:grid-cols-2 lg:gap-x-12">
          {items.map((item) => (
            <li key={item.number}>
              {/* Service visual (620 × 350). Plain img: images.unoptimized makes
                  next/image pure overhead (quality gate C). */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={item.image.src}
                alt={item.image.alt}
                width={item.image.width}
                height={item.image.height}
                className="aspect-[620/350] w-full rounded-2xl border border-white/10 object-cover"
              />

              <div className="mt-6">
                <div className="flex flex-wrap items-baseline  gap-x-4 gap-y-1">
                  <div className="flex items-center gap-4 border border-white/10 rounded-xl bg-waymarks-surface px-6 py-3 text-sm font-semibold text-waymarks-primary">
                    <span className="font-mono text-sm font-semibold tabular-nums text-waymarks-primary">
                      {item.number}
                    </span>
                    <h3 className="text-xl font-semibold tracking-tight text-white">
                      {item.title}
                    </h3>
                  </div>
                </div>
                <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground">
                  {item.body}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}