import { Mail, MapPin, Phone } from "lucide-react";

import { contactPanel, site, socialLinks } from "@/lib/content/site";

// Contact info panel (C4.3, template .contact-info-box): phone / email /
// address rows plus social links. Server component — the navbar's offcanvas
// panel stays client-side; this one is static.
export function ContactInfoPanel() {
  const rows = [
    {
      icon: Phone,
      label: contactPanel.phoneLabel,
      value: site.phone,
      href: site.phoneHref,
    },
    {
      icon: Mail,
      label: contactPanel.emailLabel,
      value: site.email,
      href: `mailto:${site.email}`,
    },
    {
      icon: MapPin,
      label: contactPanel.addressLabel,
      value: site.region,
    },
  ];

  return (
    <div>
      <h2 className="text-2xl font-medium tracking-tight text-foreground sm:text-3xl">
        {contactPanel.title}
      </h2>
      <ul className="mt-8 flex flex-col gap-6">
        {rows.map(({ icon: Icon, label, value, href }) => {
          const content = (
            <>
              <span className="flex size-11 shrink-0 items-center justify-center rounded-lg bg-waymarks-primary/15 text-waymarks-secondary">
                <Icon className="size-4" aria-hidden="true" />
              </span>
              <span className="min-w-0">
                <span className="block text-xs font-medium uppercase tracking-widest text-muted-foreground">
                  {label}
                </span>
                <span className="block break-words text-sm font-medium text-foreground">
                  {value}
                </span>
              </span>
            </>
          );
          return (
            <li key={label}>
              {href ? (
                <a
                  href={href}
                  className="flex items-center gap-4 rounded-lg p-1 transition-colors hover:text-waymarks-accent"
                >
                  {content}
                </a>
              ) : (
                <div className="flex items-center gap-4 p-1">{content}</div>
              )}
            </li>
          );
        })}
      </ul>

      <div className="mt-10 border-t border-border pt-8">
        <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
          {contactPanel.stayConnected}
        </p>
        <ul className="mt-3 flex flex-wrap gap-x-5 gap-y-2">
          {socialLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-6 items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-waymarks-accent"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
