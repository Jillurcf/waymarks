"use client";

import * as React from "react";

import { cn } from "@/lib/utils";

// Observer-based count-up (C1.5), replacing the template's counterUp +
// waypoints. Server HTML renders the final value (no-JS safe). After mount,
// when the element enters the viewport and motion is allowed, only the
// numeric part of the value animates from zero — prefixes/suffixes such as
// "+" or "%" stay fixed. Runs once; reduced-motion users see the static value.
export function CountUp({
  value,
  className,
  duration = 1200,
}: {
  /** Full display value, e.g. "+30%", "12+", "4.9/5". */
  value: string;
  className?: string;
  /** Animation length in milliseconds. */
  duration?: number;
}) {
  const ref = React.useRef<HTMLSpanElement>(null);
  const [display, setDisplay] = React.useState(value);

  React.useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const match = value.match(/^(\D*?)(\d+(?:\.\d+)?)(.*)$/);
    const reducedMotion =
      typeof window.matchMedia === "function" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (
      !match ||
      reducedMotion ||
      typeof IntersectionObserver === "undefined"
    ) {
      return;
    }

    const [, prefix, target, suffix] = match;
    const end = Number.parseFloat(target);
    const decimals = target.includes(".") ? target.split(".")[1].length : 0;

    let raf = 0;
    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries.some((entry) => entry.isIntersecting)) return;
        observer.disconnect();

        const start = performance.now();
        const tick = (now: number) => {
          const progress = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          setDisplay(`${prefix}${(end * eased).toFixed(decimals)}${suffix}`);
          if (progress < 1) raf = requestAnimationFrame(tick);
        };
        raf = requestAnimationFrame(tick);
      },
      { threshold: 0.5 },
    );

    observer.observe(node);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [value, duration]);

  return (
    <span ref={ref} className={cn("tabular-nums", className)}>
      {display}
    </span>
  );
}
