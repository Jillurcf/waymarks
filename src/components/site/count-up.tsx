"use client";

import * as React from "react";

import { cn } from "@/lib/utils";

interface CountUpProps {
  /** Final number the counter settles on. */
  value: number;
  /** Text rendered directly after the figure, e.g. "+". */
  suffix?: string;
  /** Duration of the count animation in ms. @default 1600 */
  duration?: number;
  className?: string;
}

const prefersReducedMotion =
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/**
 * CountUp (P3.2): IntersectionObserver-driven counter primitive for the home
 * facts strip. It starts counting only when the element first scrolls into
 * view, runs exactly once per mount, and uses tabular-nums so the digits never
 * shift the surrounding layout. Under prefers-reduced-motion it jumps straight
 * to the final value instead of animating. Mirrors the template's counterUp +
 * waypoints behaviour (12+, 100+, 450+, 25+).
 */
export function CountUp({
  value,
  suffix = "",
  duration = 1600,
  className,
}: CountUpProps) {
  const ref = React.useRef<HTMLSpanElement>(null);
  const [display, setDisplay] = React.useState<number>(0);

  React.useEffect(() => {
    const element = ref.current;
    if (!element) return;

    let frame = 0;
    let started = false;

    const animate = () => {
      const startTime = performance.now();
      const tick = (now: number) => {
        const progress = Math.min((now - startTime) / duration, 1);
        // easeOutCubic: fast start, soft landing.
        const eased = 1 - Math.pow(1 - progress, 3);
        setDisplay(Math.round(eased * value));
        if (progress < 1) {
          frame = requestAnimationFrame(tick);
        } else {
          setDisplay(value);
        }
      };
      frame = requestAnimationFrame(tick);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting && !started) {
          started = true;
          observer.disconnect();
          // Reduced-motion users get the final value immediately — no counting.
          // Set state from the async observer callback, not the effect body.
          if (prefersReducedMotion) {
            setDisplay(value);
            return;
          }
          animate();
        }
      },
      { threshold: 0.4 },
    );
    observer.observe(element);

    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
  }, [value, duration]);

  return (
    <span ref={ref} className={cn("tabular-nums", className)}>
      {display}
      {suffix}
    </span>
  );
}
