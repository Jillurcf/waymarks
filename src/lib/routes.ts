// Single route map for the whole site (docs/architecture.md, FR-18/FR-19).
// Nav, footer, sitemap, and breadcrumbs all read from here. Static marketing
// routes are listed below; content-driven routes (services, case studies,
// posts) are derived from their typed content modules so the sitemap stays in
// sync automatically.

import { featuredWork } from "@/lib/content/case-studies";
import { posts } from "@/lib/content/posts";
import { services } from "@/lib/content/services";

export interface Route {
  path: string;
  title: string;
  description?: string;
}

export const staticRoutes: Route[] = [
  { path: "/", title: "Home" },
  { path: "/services", title: "Services" },
  { path: "/work", title: "Work" },
  { path: "/about", title: "About" },
  { path: "/pricing", title: "Pricing" },
  { path: "/blog", title: "Blog" },
  { path: "/contact", title: "Contact" },
];

export const legalRoutes: Route[] = [
  { path: "/privacy", title: "Privacy policy" },
  { path: "/terms", title: "Terms & conditions" },
];

export const navRoutes: Route[] = [
  { path: "/services", title: "Services" },
  { path: "/work", title: "Work" },
  { path: "/about", title: "About" },
  { path: "/pricing", title: "Pricing" },
  { path: "/blog", title: "Blog" },
];

export const serviceRoutes: Route[] = services.map((service) => ({
  path: `/services/${service.slug}`,
  title: service.title,
  description: service.summary,
}));

export const workRoutes: Route[] = featuredWork.map((project) => ({
  path: `/work/${project.slug}`,
  title: project.title,
  description: project.description,
}));

export const postRoutes: Route[] = posts.map((post) => ({
  path: `/blog/${post.slug}`,
  title: post.title,
}));

/** Every indexable URL on the site, in sitemap order. */
export function allRoutes(): Route[] {
  return [
    ...staticRoutes,
    ...serviceRoutes,
    ...workRoutes,
    ...postRoutes,
    ...legalRoutes,
  ];
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
 * Breadcrumb trail for a pathname, resolved against the route map
 * (implementation plan C1.3). Unmapped segments fall back to a prettified
 * label so deep links never break the trail.
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
