import Link from "next/link";
import { ChevronRight } from "lucide-react";

import { breadcrumbTrail, type Route } from "@/lib/routes";

// Shared inner-page banner (C1.3), ported from the template's .page-header.
// Dark brand band: eyebrow, title with a CSS-only entrance (no parallax, no
// SplitText), and a breadcrumb derived from the route map.
export function PageHeader({
  eyebrow,
  title,
  pathname,
  crumbs,
}: {
  eyebrow?: string;
  title: string;
  /** Current pathname; breadcrumbs are resolved against the route map. */
  pathname?: string;
  /** Explicit trail override for pages without a real pathname (e.g. 404). */
  crumbs?: Route[];
}) {
  const trail = crumbs ?? breadcrumbTrail(pathname ?? "/");

  return (
    <section className="bg-waymarks-dark text-waymarks-light">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="max-w-2xl animate-in fade-in-0 slide-in-from-bottom-3 fill-mode-both duration-500 motion-reduce:animate-none">
          {eyebrow ? (
            <p className="mb-3 text-xs font-medium uppercase tracking-widest text-waymarks-accent">
              {eyebrow}
            </p>
          ) : null}
          <h1 className="text-4xl font-medium tracking-tight sm:text-5xl">
            {title}
          </h1>
          <nav aria-label="Breadcrumb" className="mt-5">
            <ol className="flex flex-wrap items-center gap-x-1.5 gap-y-1 text-sm">
              {trail.map((crumb, index) => {
                const isLast = index === trail.length - 1;
                return (
                  <li
                    key={crumb.path}
                    className="flex items-center gap-x-1.5"
                  >
                    {index > 0 ? (
                      <ChevronRight
                        className="size-3.5 shrink-0 text-waymarks-light/40"
                        aria-hidden="true"
                      />
                    ) : null}
                    {isLast ? (
                      <span aria-current="page" className="text-waymarks-primary">
                        {crumb.title}
                      </span>
                    ) : (
                      <Link
                        href={crumb.path}
                        className="text-waymarks-light/60 transition-colors hover:text-waymarks-primary"
                      >
                        {crumb.title}
                      </Link>
                    )}
                  </li>
                );
              })}
            </ol>
          </nav>
        </div>
      </div>
    </section>
  );
}
