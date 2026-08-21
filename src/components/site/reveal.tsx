"use client";

import * as React from "react";

import { cn } from "@/lib/utils";

// Observer-based scroll reveal (C1.5), replacing the template's WOW.js
// fadeInUp. Server HTML renders visible (no-JS safe). After mount, elements
// starting below the fold are hidden via inline styles and revealed once
// when they enter the viewport; above-fold content is left untouched so
// nothing visible flickers. Reduced-motion users skip the effect entirely.
export function Reveal({
  children,
  className,
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  /** Stagger delay in milliseconds (0–300 ms per the motion budget). */
  delay?: number;
}) {
  const ref = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (
      reducedMotion ||
      typeof IntersectionObserver === "undefined" ||
      node.getBoundingClientRect().top <= window.innerHeight
    ) {
      return;
    }

    // Start hidden without a React render; restore on reveal.
    const hide = () => {
      node.style.transition = "none";
      node.style.opacity = "0";
      node.style.transform = "translateY(12px)";
    };
    const show = () => {
      node.style.transition =
        `opacity 300ms ease-out ${delay}ms, ` +
        `transform 300ms ease-out ${delay}ms`;
      node.style.opacity = "";
      node.style.transform = "";
    };

    hide();
    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries.some((entry) => entry.isIntersecting)) return;
        observer.disconnect();
        show();
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" },
    );
    observer.observe(node);

    return () => {
      observer.disconnect();
      node.style.transition = "";
      node.style.opacity = "";
      node.style.transform = "";
    };
  }, [delay]);

  return (
    <div ref={ref} className={cn("motion-reduce:transition-none", className)}>
      {children}
    </div>
  );
}
