import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { CtaLink } from "@/components/site/cta";
import { services } from "@/lib/content/services";
import {
  site,
  socialLinks,
  workTogether,
  newsletter,
} from "@/lib/content/site";

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

// Newsletter slot (FR-23): single email field posting to the same form
// provider as the lead form. Hidden until a static-compatible endpoint
// exists; wiring lands with C4.4.
function NewsletterSlot() {
  if (!newsletter.enabled) return null;

  return (
    <form className="mt-6" aria-label={newsletter.title}>
      <p className="mb-2 text-sm font-medium">{newsletter.title}</p>
      <div className="flex gap-2">
        <label htmlFor="footer-newsletter-email" className="sr-only">
          {newsletter.placeholder}
        </label>
        <input
          id="footer-newsletter-email"
          type="email"
          name="email"
          required
          placeholder={newsletter.placeholder}
          className="h-11 w-full min-w-0 rounded-lg border border-waymarks-light/15 bg-transparent px-3 text-sm text-waymarks-light placeholder:text-waymarks-light/40 focus-visible:border-waymarks-accent focus-visible:outline-none"
        />
        <button
          type="submit"
          className="inline-flex h-11 shrink-0 items-center rounded-lg bg-waymarks-primary px-4 text-sm font-medium text-waymarks-dark transition-opacity hover:opacity-85"
        >
          {newsletter.submitLabel}
        </button>
      </div>
    </form>
  );
}

export function Footer() {
  return (
    <footer className="bg-waymarks-dark text-waymarks-light">
      {/* Work-together CTA band (C1.2) */}
      <div className="border-b border-waymarks-light/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-16 sm:px-6 sm:py-20 lg:px-8 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="mb-3 text-xs font-medium uppercase tracking-widest text-waymarks-accent">
              {workTogether.eyebrow}
            </p>
            <h2 className="max-w-xl text-3xl font-medium tracking-tight sm:text-4xl">
              {workTogether.title}
            </h2>
          </div>
          <CtaLink
            href="/contact"
            className="h-11 shrink-0 px-6 text-base hover:opacity-85"
          >
            {workTogether.cta}
            <ArrowRight className="size-4" aria-hidden="true" />
          </CtaLink>
        </div>
      </div>

      {/* Main footer */}
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-12">
          <div className="col-span-2 md:col-span-4">
            <Link href="/" aria-label={`${site.name} — home`}>
              {/* Plain img: images.unoptimized makes next/image pure overhead
                  (quality gate C — route JS budget). */}
              <img
                src="/Waymarks_Logo-01.png"
                alt="Waymark logo"
                width={140}
                height={25}
                className="h-6 w-auto"
              />
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-waymarks-light/70">
              {site.tagline}. Strategy, UI/UX, and development under one roof.
            </p>
          </div>

          <nav aria-label="Services" className="md:col-span-2">
            <p className="mb-4 text-xs font-medium uppercase tracking-widest text-waymarks-light/50">
              Services
            </p>
            <ul className="space-y-2.5">
              {services.map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="text-sm text-waymarks-light/70 transition-colors hover:text-waymarks-primary"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Site" className="md:col-span-2">
            <p className="mb-4 text-xs font-medium uppercase tracking-widest text-waymarks-light/50">
              Explore
            </p>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-waymarks-light/70 transition-colors hover:text-waymarks-primary"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="col-span-2 md:col-span-4">
            <p className="mb-4 text-xs font-medium uppercase tracking-widest text-waymarks-light/50">
              Contact
            </p>
            <ul className="space-y-2.5 text-sm text-waymarks-light/70">
              <li>
                <a
                  href={`mailto:${site.email}`}
                  className="transition-colors hover:text-waymarks-primary"
                >
                  {site.email}
                </a>
              </li>
              <li>
                <a
                  href={site.phoneHref}
                  className="transition-colors hover:text-waymarks-primary"
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
                    className="text-sm text-waymarks-light/70 transition-colors hover:text-waymarks-primary"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <NewsletterSlot />
          </div>
        </div>

        {/* Copyright row */}
        <div className="mt-14 flex flex-col gap-3 border-t border-waymarks-light/10 pt-6 text-xs text-waymarks-light/60 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
          <nav aria-label="Legal" className="flex gap-4">
            {legalLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="transition-colors hover:text-waymarks-primary"
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
