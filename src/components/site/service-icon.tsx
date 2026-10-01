import { cn } from "@/lib/utils";

/**
 * Services page mark. Converted from the Figma export in
 * `public/icon_figma.ts` (`service_icon`) into a real component so it can be
 * themed from tokens: the source's `#BDD631` fills and strokes are all
 * `waymarks-primary`, so the mark inherits `currentColor` and carries no raw
 * hex (quality gate A).
 */
export function ServiceIcon({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 44 44"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("size-11 shrink-0 text-waymarks-primary", className)}
    >
      <rect width="44" height="44" rx="12" fill="currentColor" fillOpacity="0.1" />
      <path
        d="M12.833 22C12.833 16.9374 16.9371 12.8333 21.9997 12.8333C27.0622 12.8333 31.1663 16.9374 31.1663 22C31.1663 27.0626 27.0622 31.1667 21.9997 31.1667C16.9371 31.1667 12.833 27.0626 12.833 22Z"
        stroke="currentColor"
        strokeWidth="1.83"
      />
      <path
        d="M19.25 20.625C19.25 19.8656 19.8656 19.25 20.625 19.25H23.375C24.1344 19.25 24.75 19.8656 24.75 20.625V23.375C24.75 24.1344 24.1344 24.75 23.375 24.75H20.625C19.8656 24.75 19.25 24.1344 19.25 23.375V20.625Z"
        stroke="currentColor"
        strokeWidth="1.83"
        strokeLinejoin="round"
      />
      <path
        d="M19.2497 22H12.833"
        stroke="currentColor"
        strokeWidth="1.83"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}