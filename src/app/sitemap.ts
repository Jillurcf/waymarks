import type { MetadataRoute } from "next";

import { allRoutes } from "@/lib/routes";
import { site } from "@/lib/content/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return allRoutes().map((route) => ({
    url: `${site.domain}${route.path === "/" ? "" : route.path}`,
    changeFrequency: route.path === "/" ? "weekly" : "monthly",
    priority: route.path === "/" ? 1 : 0.8,
  }));
}