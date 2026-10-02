import { cn } from "@/lib/utils";

/**
 * MVP development mark from Figma export.
 */
export function MvpDevelopmentIcon({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 72 72"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("size-18 shrink-0 text-waymarks-primary", className)}
    >
      <rect width="72" height="72" rx="12" fill="currentColor" fillOpacity="0.1" />
      <g clipPath="url(#clip0_177_682)">
        <path
          d="M36 21C39 25.5 40.5 30 40.5 34.5C40.5 35.6935 40.0259 36.8381 39.182 37.682C38.3381 38.5259 37.1935 39 36 39C34.8065 39 33.6619 38.5259 32.818 37.682C31.9741 36.8381 31.5 35.6935 31.5 34.5C31.5 30 33 25.5 36 21Z"
          stroke="currentColor"
          strokeWidth="3"
        />
        <path
          d="M31.5 40.5L27 48L31.5 46.5L33 51L36 45L39 51L40.5 46.5L45 48L40.5 40.5"
          stroke="currentColor"
          strokeWidth="3"
        />
      </g>
      <defs>
        <clipPath id="clip0_177_682">
          <rect width="36" height="36" fill="white" transform="translate(18 18)" />
        </clipPath>
      </defs>
    </svg>
  );
}
