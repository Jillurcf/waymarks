// Single route map for the whole site (docs/architecture.md, FR-18/FR-19).
// The homepage is a one-pager, so its nav links are in-page anchors; routes
// that exist as their own page are registered here and read by nav, footer,
// sitemap and breadcrumbs.

export interface Route {
  path: string;
  title: string;
  description?: string;
}

export const staticRoutes: Route[] = [
  { path: "/", title: "Home" },
  {
    path: "/services/",
    title: "Services",
    description:
      "Digital design services built around real business needs — brand, UI/UX, websites, SaaS products, MVPs, mobile apps and growth.",
  },
];

/** Routes reachable from the navbar (non-anchor paths only). */
export const navRoutes: Route[] = staticRoutes.filter((route) => route.path !== "/");

/** Every indexable URL on the site, in sitemap order. */
export function allRoutes(): Route[] {
  return staticRoutes;
}

export function findRoute(path: string): Route | undefined {
  // Matches with or without the trailing slash the export adds, so
  // breadcrumbTrail's accumulated "/services" resolves too.
  const normalized = path.endsWith("/") ? path : `${path}/`;
  return allRoutes().find(
    (route) => route.path === path || route.path === normalized,
  );
}

/** Path for a registered route, so nav/footer hrefs never hard-code a URL.
 *  Unregistered paths are returned unchanged rather than throwing. */
export function routeHref(path: string): string {
  return findRoute(path)?.path ?? path;
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