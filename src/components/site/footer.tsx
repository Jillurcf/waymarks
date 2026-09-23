import Link from "next/link";

import { footer } from "@/lib/content/home";

import { Icon } from "./icon";

function SocialLinks() {
  const socials = footer.about.socials;
  return (
    <ul className="mt-6 flex gap-3">
      {socials.map((social) => (
        <li key={social.label}>
          <a
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={social.label}
            className="flex size-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-xs font-semibold text-white transition-colors duration-200 hover:bg-waymarks-cta hover:text-waymarks-dark"
          >
            {social.label.slice(0, 2).toUpperCase()}
          </a>
        </li>
      ))}
    </ul>
  );
}

function LinkColumn({ title, links }: { title: string; links: readonly { label: string; href: string }[] }) {
  return (
    <div>
      <h2 className="text-base font-bold text-white">{title}</h2>
      <ul className="mt-5 space-y-3 text-sm">
        {links.map((link) => (
          <li key={link.label}>
            <a
              href={link.href}
              className="text-white/60 underline-offset-4 transition-colors duration-200 hover:text-waymarks-primary"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

/** Static-safe newsletter slot (FR-23): hidden until an endpoint exists. */
function NewsletterForm() {
  const newsletter = footer.newsletter;
  if (!newsletter.enabled) return null;
  return (
    <form className="mt-6">
      <label htmlFor="newsletter-email" className="block text-sm font-medium text-white">
        {newsletter.title}
      </label>
      <div className="mt-3 flex gap-2">
        <input
          id="newsletter-email"
          type="email"
          required
          placeholder={newsletter.placeholder}
          className="w-full min-w-0 rounded-full border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white outline-none placeholder:text-white/40 focus:border-waymarks-primary"
        />
        <button
          type="submit"
          className="shrink-0 rounded-full bg-waymarks-cta px-5 py-2.5 text-sm font-semibold text-waymarks-dark"
        >
          {newsletter.submitLabel}
        </button>
      </div>
    </form>
  );
}

/**
 * Footer (P4.13): four-column dark footer — brand + socials, Services,
 * Company (real section anchors only), Work With Us + newsletter slot — with
 * tagline and legal bottom row.
 */
export function Footer() {
  return (
    <footer className="bg-waymarks-dark pb-8 pt-16 text-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1.5fr]">
          <div>
            <Link href="/" aria-label={`${footer.about.title} — home`}>
              {/* Plain img: images.unoptimized makes next/image pure overhead
                  (quality gate C — route JS budget); irrelevant to LCP here. */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/logo_white.png"
                alt="Waymarks logo"
                width={158}
                height={24}
                loading="lazy"
                className="h-7 w-auto"
              />
            </Link>
            <p className="mt-5 text-base font-semibold text-white">
              {footer.about.title}
            </p>
            <p className="mt-2 max-w-xs text-sm leading-relaxed text-white/60">
              {footer.about.body}
            </p>
            <SocialLinks />
          </div>

          <LinkColumn title={footer.servicesColumn.title} links={footer.servicesColumn.links} />

          <LinkColumn title={footer.companyColumn.title} links={footer.companyColumn.links} />

          <div>
            <h2 className="text-base font-bold text-white">{footer.workWithUs.title}</h2>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/60">
              {footer.workWithUs.highlights.join(" • ")}
            </p>
            <p className="mt-5 flex items-center gap-2 text-sm font-semibold text-waymarks-primary">
              <Icon name={footer.workWithUs.contactIcon} className="size-4" />
              {footer.workWithUs.contactLabel}
            </p>
            <a
              href={`mailto:${footer.workWithUs.email}`}
              className="mt-1 inline-block text-sm text-white underline-offset-4 transition-colors duration-200 hover:text-waymarks-primary"
            >
              {footer.workWithUs.email}
            </a>
            <NewsletterForm />
          </div>
        </div>

        <p className="mt-12 text-center text-sm font-medium text-waymarks-primary">
          {footer.tagline}
        </p>

        <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-sm text-white/50 sm:flex-row">
          <p>{footer.legal.copyright}</p>
          <ul className="flex gap-6">
            {footer.legal.links.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="text-white/50 underline-offset-4 transition-colors duration-200 hover:text-waymarks-primary"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}