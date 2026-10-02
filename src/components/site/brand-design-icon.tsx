import { cn } from "@/lib/utils";

/**
 * Brand design mark. Converted from the Figma export in
 * `public/icon_figma.ts` (`brand_design`) into a real component so it can be
 * themed from tokens: the source's `#BDD631` fill and stroke are both
 * `waymarks-primary`, so the mark inherits `currentColor` and carries no raw
 * hex (quality gate A). The export's `clipPath` is a no-op — the star path
 * already sits inside the 36 × 36 clip box — so it is dropped, which also keeps
 * the SVG id-free if the mark is ever rendered more than once.
 */
export function BrandDesignIcon({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 72 72"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("size-18 shrink-0 text-waymarks-primary", className)}
    >
      <rect width="72" height="72" rx="12" fill="currentColor" fillOpacity="0.1" />
      <path
        d="M36 21L39.75 30.75L49.5 34.5L39.75 38.25L36 48L32.25 38.25L22.5 34.5L32.25 30.75L36 21Z"
        stroke="currentColor"
        strokeWidth="3"
      />
    </svg>
  );
}