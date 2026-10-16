import { cn } from "@/lib/utils";

/**
 * Topic-card mark. Converted from the Figma export in `public/icon_figma.ts`
 * (`brand_topics_icon`) into a real component so it can be themed from tokens:
 * the source's `#BDD631` fill becomes `currentColor`, so the mark inherits the
 * surrounding text colour and carries no raw hex (quality gate A).
 */
export function BrandTopicsIcon({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("size-[22px] shrink-0", className)}
    >
      <path
        d="M9.21875 1.21094C15.625 0 21.2109 4.84375 21.25 10.9766C21.2109 12.3828 20.0781 13.5156 18.7109 13.5156H15.5859C13.5938 13.5156 12.3047 15.5859 13.2031 17.3828C13.9453 18.8281 13.1641 20.7031 11.5625 20.9766C6.5625 21.7188 0 16.2891 1.44531 8.98438C2.1875 5.11719 5.3125 1.99219 9.21875 1.21094ZM5 13.5156C5.66406 13.5156 6.25 12.9688 6.25 12.2656C6.25 11.6016 5.66406 11.0156 5 11.0156C4.29688 11.0156 3.75 11.6016 3.75 12.2656C3.75 12.9688 4.29688 13.5156 5 13.5156ZM6.25 8.51562C6.91406 8.51562 7.5 7.96875 7.5 7.26562C7.5 6.60156 6.91406 6.01562 6.25 6.01562C5.54688 6.01562 5 6.60156 5 7.26562C5 7.96875 5.54688 8.51562 6.25 8.51562ZM11.25 6.01562C11.9141 6.01562 12.5 5.46875 12.5 4.76562C12.5 4.10156 11.9141 3.51562 11.25 3.51562C10.5469 3.51562 10 4.10156 10 4.76562C10 5.46875 10.5469 6.01562 11.25 6.01562ZM16.25 8.51562C16.9141 8.51562 17.5 7.96875 17.5 7.26562C17.5 6.60156 16.9141 6.01562 16.25 6.01562C15.5469 6.01562 15 6.60156 15 7.26562C15 7.96875 15.5469 8.51562 16.25 8.51562Z"
        fill="currentColor"
      />
    </svg>
  );
}
