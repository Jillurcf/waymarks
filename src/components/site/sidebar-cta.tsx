import { Phone, PhoneCall } from "lucide-react";

import { cn } from "@/lib/utils";
import { site, sidebarCta } from "@/lib/content/site";

// Sidebar CTA box (C1.7), ported from the template's .sidebar-cta-box for
// detail pages: icon, short pitch, and a direct phone button. Dark brand
// surface so it reads as the one spotlight element in the sidebar.
export function SidebarCta({
  title,
  body,
  className,
}: {
  title?: string;
  body?: string;
  className?: string;
}) {
  return (
    <aside
      className={cn(
        "rounded-xl bg-waymarks-dark p-6 text-waymarks-light",
        className,
      )}
    >
      <span className="flex size-11 items-center justify-center rounded-lg bg-waymarks-primary/15 text-waymarks-primary">
        <PhoneCall className="size-5" aria-hidden="true" />
      </span>
      <h2 className="mt-4 text-lg font-medium tracking-tight">
        {title ?? sidebarCta.title}
      </h2>
      <p className="mt-2 text-sm leading-relaxed text-waymarks-light/70">
        {body ?? sidebarCta.body}
      </p>
      <a
        href={site.phoneHref}
        className="waymarks-cta-gradient mt-5 inline-flex h-11 items-center gap-2 rounded-lg px-5 text-sm font-medium text-waymarks-dark transition-opacity hover:opacity-85"
      >
        <Phone className="size-4" aria-hidden="true" />
        {site.phone}
      </a>
    </aside>
  );
}
