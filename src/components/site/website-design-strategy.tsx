import { websiteDesignStrategy } from "@/lib/content/website-design";

/**
 * "Strategy before screens" band: sits directly under the website design hero
 * and copies the `ServiceDetailWhyWorkWithAgency` layout, reversed — the
 * pre-design checklist runs as numbered raised cards in the left column, while
 * the strategy headline, lead paragraph and studio visual hold the right
 * column.
 */
export function WebsiteDesignStrategy() {
  return (
    <section className="border-b border-white/10 bg-waymarks-surface py-20 text-white lg:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-start lg:gap-6">
          <div>    

            <ol className="space-y-4">
              {websiteDesignStrategy.items.map((item, index) => (
                <li
                  key={item}
                  className="flex items-center gap-4 rounded-xl border border-white/10 bg-waymarks-surface-raised p-6 shadow-card"
                >
                  <span className="waymarks-cta-gradient flex size-9 shrink-0 items-center justify-center rounded-full text-base font-bold tabular-nums text-waymarks-dark shadow-card">
                    {index + 1}
                  </span>
                  <span className="text-base leading-relaxed text-white sm:text-lg">
                    {item}
                  </span>
                </li>
              ))}
            </ol>
          </div>

          <div className="mx-auto max-w-4xl lg:mx-0">
            <div>
              <h2 className="text-[32px] text-right font-bold leading-[1.15] tracking-tight text-white sm:text-[40px] lg:text-[40px] mt-6">
                {websiteDesignStrategy.heading.lead}
                
              </h2>
              <h1 className="waymarks-gradient-text text-[32px] text-right font-bold leading-[1.15] tracking-tight sm:text-[40px] lg:text-[40px]">
            
                  {websiteDesignStrategy.heading.highlight}
             
              </h1>
            </div>

            <p className="mt-6 text-xl font-normal leading-relaxed text-white text-right">
              {websiteDesignStrategy.body}
            </p>

            {/* Section visual (480 × 444). Plain img: images.unoptimized makes
                next/image pure overhead (quality gate C). */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={websiteDesignStrategy.image.src}
              alt={websiteDesignStrategy.image.alt}
              width={websiteDesignStrategy.image.width}
              height={websiteDesignStrategy.image.height}
              className="mt-8 w-full rounded-2xl border border-white/10 object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
