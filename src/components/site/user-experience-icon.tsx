import { cn } from "@/lib/utils";

/**
 * User experience mark. Converted from the Figma export in
 * `public/icon_figma.ts` (`user_experience`) into a real component so it can be
 * themed from tokens: the source's `#BDD631` fill and stroke are both
 * `waymarks-primary`, so the mark inherits `currentColor` and carries no raw
 * hex (quality gate A).
 */
export function UserExperienceIcon({ className }: { className?: string }) {
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
        d="M46.5 24H25.5C23.8431 24 22.5 25.3431 22.5 27V42C22.5 43.6569 23.8431 45 25.5 45H46.5C48.1569 45 49.5 43.6569 49.5 42V27C49.5 25.3431 48.1569 24 46.5 24Z"
        stroke="currentColor"
        strokeWidth="3"
      />
      <path d="M30 49.5H42" stroke="currentColor" strokeWidth="3" />
    </svg>
  );
}