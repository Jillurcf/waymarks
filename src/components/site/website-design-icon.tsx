import { cn } from "@/lib/utils";

/**
 * Website design mark. Converted from the Figma export in
 * `public/icon_figma.ts` (`website_design`) into a real component so it can be
 * themed from tokens.
 */
export function WebsiteDesignIcon({ className }: { className?: string }) {
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
        d="M36 49.5C43.4558 49.5 49.5 43.4558 49.5 36C49.5 28.5442 43.4558 22.5 36 22.5C28.5442 22.5 22.5 28.5442 22.5 36C22.5 43.4558 28.5442 49.5 36 49.5Z"
        stroke="currentColor"
        strokeWidth="3"
      />
      <path
        d="M22.5 36H49.5M36 22.5C39.1743 26.2823 40.9143 31.0622 40.9143 36C40.9143 40.9378 39.1743 45.7177 36 49.5C32.8257 45.7177 31.0857 40.9378 31.0857 36C31.0857 31.0622 32.8257 26.2823 36 22.5Z"
        stroke="currentColor"
        strokeWidth="3"
      />
    </svg>
  );
}
