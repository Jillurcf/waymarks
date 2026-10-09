export function WebsiteDesignWhoItsFor() {
  return (
    <section className="border-b border-white/10 bg-waymarks-surface py-20 text-white lg:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 className="mx-auto max-w-4xl text-center text-[32px] font-bold leading-[1.15] tracking-tight text-white sm:text-[40px] lg:text-[56px]">
          Who This Is For
          <span className="waymarks-gradient-text block">
            The Right Fit For Your Goals
          </span>
        </h2>

        <div className="mt-10 grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
          <img
            src="/images/services/website_design/web_devlopment.png"
            alt="Website design and development illustration"
            width={620}
            height={500}
            className="aspect-[620/500] w-full rounded-2xl border border-white/10 object-cover"
          />

          <div>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span aria-hidden="true" className="mt-2.5 size-1.5 shrink-0 rounded-full bg-waymarks-primary" />
                <span className="text-base leading-relaxed text-muted-foreground sm:text-lg">
                  Startups and founders needing a website that builds credibility from day one
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span aria-hidden="true" className="mt-2.5 size-1.5 shrink-0 rounded-full bg-waymarks-primary" />
                <span className="text-base leading-relaxed text-muted-foreground sm:text-lg">
                  Growing businesses looking to convert more visitors into customers
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span aria-hidden="true" className="mt-2.5 size-1.5 shrink-0 rounded-full bg-waymarks-primary" />
                <span className="text-base leading-relaxed text-muted-foreground sm:text-lg">
                  Established brands ready for a modern, high-performing website
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span aria-hidden="true" className="mt-2.5 size-1.5 shrink-0 rounded-full bg-waymarks-primary" />
                <span className="text-base leading-relaxed text-muted-foreground sm:text-lg">
                  Service businesses that need to generate more qualified leads
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
