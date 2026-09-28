import { statsSection } from "@/lib/content/home";

import { CountUp } from "./count-up";

/**
 * Stats counters (P4.7): 12+/100+/450+/25+ animated via CountUp on the
 * brand-navy base, each stat on an accent hairline (design stat-card
 * border-left).
 */
export function StatsSection() {
  return (
    <section className="bg-waymarks-dark py-20 lg:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-0">
      <div className="flex max-w-6xl flex-col sm:px-6 lg:flex-row lg:gap-0 lg:items-stretch"  >
         <div className="max-w-6xL lg:w-8/12 items-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:mt-6">
            {statsSection.title}
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            {statsSection.intro}
          </p>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            {statsSection.body}
          </p>
        </div>
        <div className="lg:flex lg:w-4/12">
          <img src="/images/logo_global_team.png" className="w-full h-auto rounded-3xl lg:h-full lg:w-full" 
          // alt={statsSection.image.alt}
           />
        </div>
      </div>

       <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
         <h3 className="mt-2 text-3xl font-bold tracking-tight text-foreground">
          {statsSection.subheading}
        </h3>
        <div className="mt-10 grid gap-10 sm:grid-cols-2 lg:grid-cols-4 sm:gap-8">
          {statsSection.items.map((stat) => (
            <div key={stat.label} className="border-l-2 border-waymarks-accent pl-5">
              <div className="text-4xl font-extrabold leading-none text-waymarks-primary lg:text-5xl">
                <CountUp value={stat.value} suffix={stat.suffix} />
              </div>
              <p className="mt-3 text-base font-semibold text-white">
                {stat.label}
              </p>
              <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
       </div>
      </div>
    </section>
  );
}