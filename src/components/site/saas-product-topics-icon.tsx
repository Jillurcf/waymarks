import { cn } from "@/lib/utils";

/**
 * Topic-card mark for the SaaS & Products topic. Converted from the Figma
 * export in `public/icon_figma.ts` (`saas_product_icon`) into a real component
 * so it can be themed from tokens: the source's `#BDD631` fill becomes
 * `currentColor`, so the mark inherits the surrounding text colour and carries
 * no raw hex (quality gate A).
 */
export function SaasProductTopicsIcon({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 20 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("h-[18px] w-5 shrink-0", className)}
    >
      <path
        d="M19.0625 8.55469C19.6094 8.75 20 9.25781 20 9.84375V14.1406C20 14.6875 19.6875 15.1953 19.2188 15.4297L15.3125 17.3828C14.9219 17.5781 14.4531 17.5781 14.0234 17.3828L10 15.3516L5.9375 17.3828C5.54688 17.5781 5.07812 17.5781 4.64844 17.3828L0.742188 15.4297C0.273438 15.1953 0 14.6875 0 14.1406V9.84375C0 9.25781 0.351562 8.75 0.898438 8.55469L4.64844 7.10938V2.89062C4.64844 2.30469 5.03906 1.79688 5.58594 1.5625L9.49219 0.117188C9.80469 0 10.1562 0 10.4688 0.117188L14.375 1.5625C14.9219 1.79688 15.3125 2.30469 15.3125 2.89062V7.10938L19.0625 8.55469ZM13.9844 7.14844V4.29688L10.6641 5.74219V8.39844L13.9844 7.14844ZM6.01562 2.85156L10 4.49219L13.9844 2.85156L10 1.32812L6.01562 2.85156ZM9.29688 14.2188V11.25L5.97656 12.7734V15.8594L9.29688 14.2188ZM9.29688 9.84375V9.80469L5.3125 8.32031L1.32812 9.80469V9.84375L5.3125 11.4453L9.29688 9.84375ZM18.6719 14.2188V11.25L15.3516 12.7734V15.8594L18.6719 14.2188ZM18.6719 9.84375V9.80469L14.6875 8.32031L10.7031 9.80469V9.84375L14.6875 11.4453L18.6719 9.84375Z"
        fill="currentColor"
      />
    </svg>
  );
}
