import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Reveal } from "@/components/site/reveal";
import { SectionHeading } from "@/components/site/section-heading";
import { exploreSection } from "@/lib/content/home";

// Explore section: click-through cards to the site's core routes, so the
// home page funnels visitors towards the next step (services, work, about,
// pricing, blog).
export function ExploreSection() {
  return (
    <section aria-labelledby="explore-title" className="py-20 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow={exploreSection.eyebrow}
          title={exploreSection.title}
          id="explore-title"
        />
        <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {exploreSection.items.map((item, index) => (
            <li key={item.href} className="h-full">
              <Reveal delay={(index % 3) * 100} className="h-full">
                <Link
                  href={item.href}
                  className="group flex h-full flex-col gap-3 rounded-xl border border-border bg-card p-6 transition-all hover:border-waymarks-primary/40 hover:shadow-card"
                >
                  <h3 className="text-base font-medium tracking-tight transition-colors group-hover:text-waymarks-accent">
                    {item.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {item.body}
                  </p>
                  <span className="mt-auto inline-flex items-center gap-1.5 text-sm font-medium text-waymarks-secondary">
                    {item.cta}
                    <ArrowRight
                      className="size-4 transition-transform group-hover:translate-x-0.5"
                      aria-hidden="true"
                    />
                  </span>
                </Link>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}