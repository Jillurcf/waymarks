import { cn } from "@/lib/utils";

/**
 * Mobile app design mark from Figma export.
 */
export function MobileAppIcon({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 72 72"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("size-18 shrink-0 text-waymarks-primary", className)}
    >
      <rect width="72" height="72" rx="12" fill="currentColor" fillOpacity="0.1" />
      <path d="M42 21H30C28.3431 21 27 22.3431 27 24V48C27 49.6569 28.3431 51 30 51H42C43.6569 51 45 49.6569 45 48V24C45 22.3431 43.6569 21 42 21Z" stroke="currentColor" strokeWidth="3" />
      <path d="M30 49.5H42" stroke="currentColor" strokeWidth="3" />
    </svg>
  );
}
