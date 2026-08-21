"use client";

import * as React from "react";

import { WorkCard } from "@/components/site/work-card";
import type { CaseStudy } from "@/lib/content/case-studies";
import { workFilter } from "@/lib/content/work";

// Filterable work grid (C3.4, FR-13), replacing the template's Isotope.
// Category state filters the card list; plain buttons keep it keyboard
// operable with visible aria-pressed state, and an aria-live region
// announces the result count as it changes.
export function WorkGrid({ projects }: { projects: CaseStudy[] }) {
  const categories = React.useMemo(
    () => [workFilter.allLabel, ...new Set(projects.map((p) => p.category))],
    [projects],
  );
  const [active, setActive] = React.useState(workFilter.allLabel);

  const visible =
    active === workFilter.allLabel
      ? projects
      : projects.filter((project) => project.category === active);

  return (
    <div>
      <div
        role="group"
        aria-label={workFilter.label}
        className="flex flex-wrap gap-2"
      >
        {categories.map((category) => {
          const isActive = category === active;
          return (
            <button
              key={category}
              type="button"
              onClick={() => setActive(category)}
              aria-pressed={isActive}
              className={
                isActive
                  ? "inline-flex h-10 items-center rounded-lg bg-waymarks-secondary px-4 text-sm font-medium text-white transition-colors"
                  : "inline-flex h-10 items-center rounded-lg border border-border bg-card px-4 text-sm font-medium text-foreground transition-colors hover:border-waymarks-primary/40 hover:bg-muted"
              }
            >
              {category}
            </button>
          );
        })}
      </div>

      <p aria-live="polite" className="sr-only">
        {workFilter.status(visible.length)}
      </p>

      <ul className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
        {visible.map((project) => (
          <li key={project.slug} className="h-full">
            <WorkCard project={project} />
          </li>
        ))}
      </ul>
    </div>
  );
}
