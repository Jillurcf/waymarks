import type { ReactElement } from "react";

import { cn } from "@/lib/utils";

import { BrandDesignIcon } from "./brand-design-icon";
import { DigitalGrowthIcon } from "./digital-growth-icon";
import { MobileAppIcon } from "./mobile-app-icon";
import { MvpDevelopmentIcon } from "./mvp-development-icon";
import { SaasProductIcon } from "./saas-product-icon";
import { UserExperienceIcon } from "./user-experience-icon";
import { WebsiteDesignIcon } from "./website-design-icon";

type MarkComponent = (props: { className?: string }) => ReactElement;

/** Slug → the Figma-converted service mark. Every mark inherits `currentColor`
 *  and carries no raw hex (quality gate A), so `text-*` on the wrapper sets
 *  the colour. Keeps one detail-page hero working for any service. */
const marks: Record<string, MarkComponent> = {
  "brand-design": BrandDesignIcon,
  "ui-ux-design": UserExperienceIcon,
  "website-design": WebsiteDesignIcon,
  "saas-product-design": SaasProductIcon,
  "mvp-development": MvpDevelopmentIcon,
  "mobile-app-design": MobileAppIcon,
  "digital-growth": DigitalGrowthIcon,
};

/** Service mark for a detail route, keyed by the content slug. */
export function ServiceMark({ slug, className }: { slug: string; className?: string }) {
  const Mark = marks[slug] ?? BrandDesignIcon;
  return <Mark className={cn("size-18 shrink-0", className)} />;
}