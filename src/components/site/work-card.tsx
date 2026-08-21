import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import type { CaseStudy } from "@/lib/content/case-studies";

// Case-study card shared by the home featured block, the /work grid
// (including its filtered state), and related-work rails. Token-gradient
// cover stands in for photography until brand imagery exists (C0.2).
export function WorkCard({ project }: { project: CaseStudy }) {
  return (
    <Link
      href={`/work/${project.slug}`}
      className="group flex h-full flex-col overflow-hidden rounded-xl border border-border bg-card transition-all hover:border-waymarks-primary/40 hover:shadow-card-hover"
    >
      <div
        className="h-40 w-full bg-gradient-to-br from-waymarks-accent/40 via-waymarks-primary/20 to-waymarks-secondary/10"
        role="img"
        aria-label={project.coverAlt}
      />
      <div className="flex flex-1 flex-col gap-3 p-5">
        <p className="text-xs font-medium uppercase tracking-widest text-waymarks-secondary">
          {project.category}
        </p>
        <h3 className="text-base font-medium tracking-tight transition-colors group-hover:text-waymarks-accent">
          {project.title}
        </h3>
        <p className="text-sm leading-relaxed text-muted-foreground">
          {project.description}
        </p>
        <p className="text-sm font-medium leading-snug text-waymarks-secondary">
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
        <span className="inline-flex items-center gap-1 text-sm font-medium text-waymarks-secondary">
          View case study
          <ArrowUpRight
            className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            aria-hidden="true"
          />
        </span>
      </div>
    </Link>
  );
}
