import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Reveal } from "@/components/site/reveal";
import { SectionHeading } from "@/components/site/section-heading";
import { WorkCard } from "@/components/site/work-card";
import { featuredWork } from "@/lib/content/case-studies";
import { featuredWorkHeading } from "@/lib/content/home";

// Block 7 — Projects (template .our-projects): three case-study cards.
export function FeaturedWork() {
  return (
    <section id="work" aria-labelledby="work-title" className="bg-secondary/40 py-20 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow={featuredWorkHeading.eyebrow}
          title={featuredWorkHeading.title}
          description={featuredWorkHeading.description}
          id="work-title"
        />
        <Reveal>
          <ul className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {featuredWork.slice(0, 3).map((project) => (
              <li key={project.slug} className="h-full">
                <WorkCard project={project} />
              </li>
            ))}
          </ul>
        </Reveal>
        <div className="mt-10 text-center">
          <Link
            href={featuredWorkHeading.viewAll.href}
            className="inline-flex items-center gap-1.5 rounded-lg border border-border bg-card px-4 py-2 text-sm font-medium text-foreground transition-all hover:bg-muted"
          >
            {featuredWorkHeading.viewAll.label}
            <ArrowRight className="size-4" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}
