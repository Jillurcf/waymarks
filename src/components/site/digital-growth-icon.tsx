import { cn } from "@/lib/utils";

/**
 * Digital growth mark from Figma export.
 */
export function DigitalGrowthIcon({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 72 72"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("size-18 shrink-0 text-waymarks-primary", className)}
    >
      <rect width="72" height="72" rx="12" fill="currentColor" fillOpacity="0.1" />
      <path d="M24 46.5H48" stroke="currentColor" strokeWidth="3" />
      <path d="M28.5 46.5V31.5M36 46.5V25.5M43.5 46.5V36" stroke="currentColor" strokeWidth="3" />
    </svg>
  );
}
