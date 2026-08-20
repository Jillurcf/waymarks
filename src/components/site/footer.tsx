import Image from "next/image";
import Link from "next/link";

import { services } from "@/lib/content/services";
import { site, socialLinks } from "@/lib/content/site";

const quickLinks = [
  { title: "Work", href: "/work" },
  { title: "About", href: "/about" },
  { title: "Pricing", href: "/pricing" },
  { title: "Blog", href: "/blog" },
  { title: "Contact", href: "/contact" },
];

const legalLinks = [
  { title: "Privacy policy", href: "/privacy" },
  { title: "Terms & conditions", href: "/terms" },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-background py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-4">
          <div className="col-span-2 md:col-span-1">
            <Link href="/" aria-label={`${site.name} — home`}>
              <Image
                src="/Waymarks_Logo-01.png"
                alt="Waymark logo"
                width={140}
                height={25}
                className="h-6 w-auto"
              />
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
              {site.tagline}. Strategy, UI/UX, and development under one roof.
            </p>
          </div>

          <nav aria-label="Services">
            <p className="mb-4 text-xs font-medium uppercase tracking-widest text-muted-foreground">
              Services
            </p>
            <ul className="space-y-2.5">
              {services.map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Site">
            <p className="mb-4 text-xs font-medium uppercase tracking-widest text-muted-foreground">
              Explore
            </p>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <p className="mb-4 text-xs font-medium uppercase tracking-widest text-muted-foreground">
              Contact
            </p>
            <ul className="space-y-2.5 text-sm text-muted-foreground">
              <li>
                <a
                  href={`mailto:${site.email}`}
                  className="transition-colors hover:text-foreground"
                >
                  {site.email}
                </a>
              </li>
              <li>
                <a
                  href={site.phoneHref}
                  className="transition-colors hover:text-foreground"
                >
                  {site.phone}
                </a>
              </li>
              <li>{site.region}</li>
            </ul>
            <ul className="mt-4 flex flex-wrap gap-x-4 gap-y-1.5">
              {socialLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
          <nav aria-label="Legal" className="flex gap-4">
            {legalLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="transition-colors hover:text-foreground"
              >
                {link.title}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}