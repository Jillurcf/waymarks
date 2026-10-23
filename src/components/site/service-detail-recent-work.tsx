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
    <section id="recent-work" className="scroll-mt-24 border-b border-white/10 bg-waymarks-dark py-20 text-white lg:py-24">
      <div className="container">
        <h2 className="mx-auto max-w-4xl text-center text-[32px] font-bold leading-[1.15] tracking-tight text-white sm:text-[40px] lg:text-[56px]">
          {heading.lead}
          <span className="waymarks-gradient-text block">{heading.highlight}</span>
        </h2>

        <p className="mx-auto mt-8 max-w-lg text-center text-base leading-relaxed text-muted-foreground sm:text-lg">
          {body}
        </p>

        {/* One flex div per line of two images — no grid. Each row is
            independently styled: change a row's classes, not the layout. */}
        {items && items.length > 0 ? (
          <div>
            <div className="mt-12 flex flex-col gap-8 sm:flex-row sm:gap-4">
              {items[0] ? (
                <div>
                  {items[0].image ? (
                    <img src={items[0].image.src} alt={items[0].image.alt} />
                  ) : null}
                  {items[0].title ? <p>{items[0].title}</p> : null}
                </div>
              ) : null}
              {items[1] ? (
                <div>
                  {items[1].image ? (
                    <img src={items[1].image.src} alt={items[1].image.alt} />
                  ) : null}
                  {items[1].title ? <p>{items[1].title}</p> : null}
                </div>
              ) : null}
            </div>
            {items.length > 2 ? (
              <div className="mt-12 flex flex-col gap-8 sm:flex-row sm:gap-4">
                {items[2] ? (
                  <div>
                    {items[2].image ? (
                      <img src={items[2].image.src} alt={items[2].image.alt} />
                    ) : null}
                    {items[2].title ? <p>{items[2].title}</p> : null}
                  </div>
                ) : null}
                {items[3] ? (
                  <div>
                    {items[3].image ? (
                      <img src={items[3].image.src} alt={items[3].image.alt} />
                    ) : null}
                    {items[3].title ? <p>{items[3].title}</p> : null}
                  </div>
                ) : null}
              </div>
            ) : null}
            {items.length > 4 ? (
              <div className="mt-12 flex flex-col gap-8 sm:flex-row sm:gap-4">
                {items[4] ? (
                  <div>
                    {items[4].image ? (
                      <img src={items[4].image.src} alt={items[4].image.alt} />
                    ) : null}
                    {items[4].title ? <p>{items[4].title}</p> : null}
                  </div>
                ) : null}
                {items[5] ? (
                  <div>
                    {items[5].image ? (
                      <img src={items[5].image.src} alt={items[5].image.alt} />
                    ) : null}
                    {items[5].title ? <p>{items[5].title}</p> : null}
                  </div>
                ) : null}
              </div>
            ) : null}
          </div>
        ) : null}
      </div>
    </section>
  );
}