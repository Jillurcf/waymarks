import { ArrowUpRight } from "lucide-react";

import { contactDetails } from "@/lib/content/contact";
import { icons } from "@/lib/content/home";

import { Icon } from "./icon";

/**
 * Direct contact panel: phone, email and studio on the contact route. Sits
 * beside the lead form so the visitor always has a one-tap path that does not
 * depend on the form provider (NFR-4 — form failure never blocks contact).
 */
export function ContactDetails() {
  return (
    <aside className="rounded-3xl border border-white/10 bg-waymarks-surface-raised p-6 shadow-card sm:p-8">
      <h2 className="text-xl font-bold text-white">{contactDetails.title}</h2>
      <p className="mt-3 text-base leading-relaxed text-muted-foreground">
        {contactDetails.intro}
      </p>

      <ul className="mt-8 flex flex-col gap-1">
        {contactDetails.rows.map((row) => {
          const body = (
            <>
              <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-waymarks-primary/15 text-waymarks-primary">
                <Icon name={row.icon} className="size-5" />
              </span>
              <span className="min-w-0">
                <span className="block text-xs font-medium uppercase tracking-widest text-muted-foreground">
                  {row.label}
                </span>
                <span className="mt-0.5 block text-sm font-medium break-words text-white">
                  {row.value}
                </span>
              </span>
            </>
          );

          return (
            <li key={row.label}>
              {row.href ? (
                <a
                  href={row.href}
                  className="flex items-center gap-4 rounded-xl px-2 py-3 transition-colors duration-200 hover:bg-white/5 focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/50"
                >
                  {body}
                </a>
              ) : (
                <div className="flex items-center gap-4 px-2 py-3">{body}</div>
              )}
            </li>
          );
        })}
      </ul>

      <p className="mt-6 flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 p-4 text-sm leading-relaxed text-muted-foreground">
        <Icon name={icons.launch} className="mt-0.5 size-4 shrink-0 text-waymarks-accent" />
        {contactDetails.responseNote}
      </p>

      <div className="mt-8 border-t border-white/10 pt-6">
        <h3 className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
          {contactDetails.socialsTitle}
        </h3>
        <ul className="mt-4 flex flex-wrap gap-x-5 gap-y-2">
          {contactDetails.socials.map((social) => (
            <li key={social.label}>
              <a
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-11 items-center gap-1 text-sm font-medium text-white/70 transition-colors duration-200 hover:text-waymarks-accent focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/50"
              >
                {social.label}
                <ArrowUpRight className="size-3.5" aria-hidden="true" />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}
