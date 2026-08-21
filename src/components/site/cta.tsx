import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { cn } from "@/lib/utils";

// Primary CTA treatments, per design-system §4/§5: solid brand green, or the
// official left-to-right CTA gradient (reserved for CTA buttons and hero
// highlights). Applied on top of the shadcn Button primitives — never
// hand-rolled.
export const primaryCtaClass =
  "bg-waymarks-primary text-foreground hover:bg-waymarks-primary/85";

export const gradientCtaClass = "waymarks-cta-gradient text-foreground hover:opacity-85";

export function CtaLink({
  href,
  children,
  className,
  external = false,
  variant = "solid",
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
  external?: boolean;
  variant?: "solid" | "gradient";
}) {
  const classes = cn(
    variant === "gradient" ? gradientCtaClass : primaryCtaClass,
    className,
  );
  if (external) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }
  return <Link href={href} className={classes}>{children}</Link>;
}

export function SecondaryCtaLink({
  href,
  children,
  className,
  external = false,
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
  external?: boolean;
}) {
  const classes = cn(
    "inline-flex items-center justify-center gap-1.5 rounded-lg border border-border bg-background px-4 py-2 text-sm font-medium text-foreground transition-all hover:bg-muted",
    className,
  );
  if (external) {
    return (
      <a href={href} className={classes}>
        {children}
        <ArrowRight className="size-4" aria-hidden="true" />
      </a>
    );
  }
  return (
    <Link href={href} className={classes}>
      {children}
      <ArrowRight className="size-4" aria-hidden="true" />
    </Link>
  );
}
