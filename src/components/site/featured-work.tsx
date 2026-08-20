import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { SectionHeading } from "@/components/site/section-heading";
import { featuredWork } from "@/lib/content/case-studies";
import { featuredWorkHeading } from "@/lib/content/home";

export function FeaturedWork() {
  return (
    <section id="work" className="bg-secondary/40 py-20 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow={featuredWorkHeading.eyebrow}
          title={featuredWorkHeading.title}
          description={featuredWorkHeading.description}
        />
        <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {featuredWork.map((project) => (
            <li key={project.slug} className="h-full">
              <Link
                href={`/work/${project.slug}`}
                className="group flex h-full flex-col overflow-hidden rounded-xl border border-border bg-card transition-all hover:border-waymark-primary/40 hover:shadow-sm"
              >
                <div
                  className="h-36 w-full bg-gradient-to-br from-waymark-mid/40 via-waymark-primary/20 to-waymark-deep/10"
                  role="img"
                  aria-label={project.coverAlt}
                />
                <div className="flex flex-1 flex-col gap-3 p-5">
                  <h3 className="text-base font-medium tracking-tight">
                    {project.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {project.description}
                  </p>
                  <p className="text-sm font-medium leading-snug text-waymark-deep">
                    {project.outcome}
                  </p>
                  <div className="mt-auto flex flex-wrap gap-1.5 pt-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-border bg-background px-2.5 py-0.5 text-xs text-muted-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <span className="inline-flex items-center gap-1 text-sm font-medium text-waymark-deep">
                    View case study
                    <ArrowUpRight
                      className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                      aria-hidden="true"
                    />
                  </span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}