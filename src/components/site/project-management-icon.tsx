import { cn } from "@/lib/utils";

/**
 * Project management mark from the Figma export in `public/icon_figma.ts`
 * (`project_management_icon`). The source's `#BDD631` fill and strokes are both
 * `waymarks-primary`, so the mark inherits `currentColor` and carries no raw
 * hex (quality gate A).
 */
export function ProjectManagementIcon({ className }: { className?: string }) {
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
        d="M30 28.5H36M36 28.5H43.125C46.285 28.5 47.865 28.5 49 29.2584C49.4915 29.5867 49.9132 30.0086 50.2416 30.4999C51 31.6349 51 33.215 51 36.375C51 41.6418 51 44.2751 49.736 46.1669C49.1889 46.9857 48.4857 47.6889 47.6669 48.236C45.7751 49.5 43.1418 49.5 37.875 49.5H36C28.9289 49.5 25.3934 49.5 23.1967 47.3032C21 45.1066 21 41.571 21 34.5V29.9164C21 27.1917 21 25.8293 21.5705 24.8071C21.9771 24.0784 22.5784 23.4771 23.3071 23.0705C24.3293 22.5 25.6917 22.5 28.4164 22.5C30.162 22.5 31.0348 22.5 31.7989 22.7865C33.5433 23.4407 34.2627 25.0254 35.0499 26.5997L36 28.5Z"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M36 34.5V37.5" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M42 34.5V43.5" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M30 34.5V40.5" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
