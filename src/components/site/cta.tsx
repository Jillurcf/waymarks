import { cn } from "@/lib/utils";
import type { Cta } from "@/lib/content/home";

import { Icon } from "./icon";

export type CtaVariant = "primary" | "outline" | "outline-inverse";

const baseClass =
  "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-base font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/50";

const variantClass: Record<CtaVariant, string> = {
  // CTA gradient, reserved for primary actions (design-system §5).
  primary:
    "waymarks-cta-gradient text-waymarks-dark shadow-card hover:-translate-y-0.5 hover:shadow-card-hover",
  // Secondary on the dark surface ramp: hairline outline that heats to accent.
  outline:
    "border border-white/20 text-white hover:border-waymarks-accent hover:text-waymarks-accent hover:-translate-y-0.5",
  // Secondary on brand-dark stages: brighter outline that heats up on hover.
  "outline-inverse":
    "border border-white/60 text-white hover:border-waymarks-primary hover:text-waymarks-primary hover:-translate-y-0.5",
};

/** CTA button classes for a variant; shared so non-`CtaButton` surfaces
 *  (e.g. the navbar CTA in the header) stay visually identical to the banner. */
export function ctaClass(variant: CtaVariant = "primary"): string {
  return cn(baseClass, variantClass[variant]);
}

/** On-brand CTA link rendered from the typed `Cta` data (content owns copy). */
export function CtaButton({
  cta,
  variant = "primary",
  className,
}: {
  cta: Cta;
  variant?: CtaVariant;
  className?: string;
}) {
  return (
    <a href={cta.href} className={cn(ctaClass(variant), className)}>
      <span>{cta.label}</span>
      <Icon name={cta.icon} className="size-4" />
    </a>
  );
}