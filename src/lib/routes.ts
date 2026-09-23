// Single route map for the whole site (docs/architecture.md, FR-18/FR-19).
// The site is currently a one-pager: only the home route exists. Nav links are
// in-page anchors into the homepage sections.

export interface Route {
  path: string;
  title: string;
  description?: string;
}

export const staticRoutes: Route[] = [{ path: "/", title: "Home" }];

export const navRoutes: Route[] = [];

/** Every indexable URL on the site, in sitemap order. */
export function allRoutes(): Route[] {
  return staticRoutes;
}

export function findRoute(path: string): Route | undefined {
  return allRoutes().find((route) => route.path === path);
}

function prettifySegment(segment: string): string {
  return segment
    .split("-")
    .map((word) => (word ? word.charAt(0).toUpperCase() + word.slice(1) : word))
    .join(" ");
}

/**
 * Breadcrumb trail for a pathname, resolved against the route map. Unmapped
 * segments fall back to a prettified label so deep links never break.
 */
export function breadcrumbTrail(pathname: string): Route[] {
  const trail: Route[] = [{ path: "/", title: "Home" }];
  let accumulated = "";
  for (const segment of pathname.split("/").filter(Boolean)) {
    accumulated += `/${segment}`;
    const route = findRoute(accumulated);
    trail.push({
      path: accumulated,
      title: route?.title ?? prettifySegment(segment),
    });
  }
  return trail;
}