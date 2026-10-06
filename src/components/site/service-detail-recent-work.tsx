import type { ServiceDetail } from "@/lib/content/service-details";

/**
 * Recent brand work band: the centred headline leads at display size with the
 * closing phrase on the CTA gradient, the supporting line follows beneath it,
 * and the six projects sit below in a two-column grid — image with the short
 * project name under it. Cards are identical, so the grid fills row by row
 * (design-system §3). Runs on the dark base so the `waymarks-surface` line-up
 * band above it keeps its own stretch.
 */
export function ServiceDetailRecentWork({ service }: { service: ServiceDetail }) {
  const { heading, body, items } = service.recentWork;

  return (
    <section className="border-b border-white/10 bg-waymarks-dark py-20 text-white lg:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 className="mx-auto max-w-4xl text-center text-[32px] font-bold leading-[1.15] tracking-tight text-white sm:text-[40px] lg:text-[56px]">
          {heading.lead}
          <span className="waymarks-gradient-text block">{heading.highlight}</span>
        </h2>

        <p className="mx-auto mt-8 max-w-xl text-center text-base leading-relaxed text-muted-foreground sm:text-lg">
          {body}
        </p>

        <ul className="mt-14 grid gap-10 sm:grid-cols-2 lg:gap-x-12 lg:gap-y-14">
          {items.map((item) => (
            <li key={item.title}>
              {/* Project artwork. Plain img: images.unoptimized makes next/image
                  pure overhead (quality gate C). */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={item.image.src}
                alt={item.image.alt}
                width={item.image.width}
                height={item.image.height}
                className="aspect-[4/3] w-full rounded-2xl border border-white/10 object-cover"
              />
              <h3 className="mt-5 text-lg font-semibold tracking-tight text-white">
                {item.title}
              </h3>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}