import { cn } from "@/lib/utils";

/**
 * SaaS product mark from Figma export.
 */
export function SaasProductIcon({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 72 72"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("size-18 shrink-0 text-waymarks-primary", className)}
    >
      <rect width="72" height="72" rx="12" fill="currentColor" fillOpacity="0.1" />
      <path d="M31.5 22.5H24C23.1716 22.5 22.5 23.1716 22.5 24V31.5C22.5 32.3284 23.1716 33 24 33H31.5C32.3284 33 33 32.3284 33 31.5V24C33 23.1716 32.3284 22.5 31.5 22.5Z" stroke="currentColor" strokeWidth="3" />
      <path d="M48 22.5H40.5C39.6716 22.5 39 23.1716 39 24V31.5C39 32.3284 39.6716 33 40.5 33H48C48.8284 33 49.5 32.3284 49.5 31.5V24C49.5 23.1716 48.8284 22.5 48 22.5Z" stroke="currentColor" strokeWidth="3" />
      <path d="M31.5 39H24C23.1716 39 22.5 39.6716 22.5 40.5V48C22.5 48.8284 23.1716 49.5 24 49.5H31.5C32.3284 49.5 33 48.8284 33 48V40.5C33 39.6716 32.3284 39 31.5 39Z" stroke="currentColor" strokeWidth="3" />
      <path d="M48 39H40.5C39.6716 39 39 39.6716 39 40.5V48C39 48.8284 39.6716 49.5 40.5 49.5H48C48.8284 49.5 49.5 48.8284 49.5 48V40.5C49.5 39.6716 48.8284 39 48 39Z" stroke="currentColor" strokeWidth="3" />
    </svg>
  );
}
