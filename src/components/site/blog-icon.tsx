import { cn } from "@/lib/utils";

/**
 * Blog page mark. Converted from the Figma export in `public/icon_figma.ts`
 * (`blog_icon`) into a real component so it can be themed from tokens: the
 * source's `#BDD631` fills and strokes are all `waymarks-primary`, so the mark
 * inherits `currentColor` and carries no raw hex (quality gate A).
 */
export function BlogIcon({ className }: { className?: string }) {
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
        d="M23.8333 30.25H25.6666M23.8333 30.25C23.0739 30.25 22.4583 29.6344 22.4583 28.875V26.5833H22M23.8333 30.25H20.1666M22 26.5833H21.5416V28.875C21.5416 29.6344 20.926 30.25 20.1666 30.25M22 26.5833V30.25M20.1666 30.25H18.3333"
        stroke="currentColor"
        strokeWidth="1.375"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M25.6666 13.75H18.3333C15.7406 13.75 14.4442 13.75 13.6388 14.5555C12.8333 15.3609 12.8333 16.6573 12.8333 19.25V21.0833C12.8333 23.676 12.8333 24.9724 13.6388 25.7779C14.4442 26.5833 15.7406 26.5833 18.3333 26.5833H25.6666C28.2593 26.5833 29.5557 26.5833 30.3612 25.7779C31.1666 24.9724 31.1666 23.676 31.1666 21.0833V19.25C31.1666 16.6573 31.1666 15.3609 30.3612 14.5555C29.5557 13.75 28.2593 13.75 25.6666 13.75Z"
        stroke="currentColor"
        strokeWidth="1.375"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M25.6667 18.3333L26.791 19.3024C27.2637 19.7098 27.5 19.9135 27.5 20.1667C27.5 20.4198 27.2637 20.6235 26.791 21.0309L25.6667 22"
        stroke="currentColor"
        strokeWidth="1.375"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M18.3333 18.3333L17.209 19.3024C16.763 19.7091 16.5 19.9135 16.5 20.1667C16.5 20.4198 16.763 20.6235 17.209 21.0309L18.3333 22"
        stroke="currentColor"
        strokeWidth="1.375"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
