"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Menu,
  ChevronRight,
  Grip,
  Phone,
  Mail,
  MapPin,
  ArrowUpRight,
} from "lucide-react";

import { cn } from "@/lib/utils";
import { ctaClass } from "@/components/site/cta";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  bookCallHref,
  site,
  socialLinks,
  contactPanel,
  navCtaLabel,
} from "@/lib/content/site";

import { icons, sectionAnchors, servicesSection } from "@/lib/content/home";
import { routeHref } from "@/lib/routes";
import { Icon } from "./site/icon";
import { SocialIcon } from "./site/social-icon";

// Nav items: real routes come from the route map (src/lib/routes.ts) so nav,
// footer and sitemap can never drift; the rest are in-page anchors into the
// homepage sections — sourced from the typed content module, never hand-rolled.
const navItems = [
  { title: "About Us", href: routeHref("/about/") },
  { title: "Services", href: routeHref("/services/") },
  { title: "Work", href: sectionAnchors.work },
  { title: "Blog", href: routeHref("/blog/") },
  { title: "Contact", href: routeHref("/contact/") },
];

// Desktop nav is a semantic list of in-page anchor links — the design file's
// header uses a plain <ul class="nav-links">, so the Radix navigation-menu
// primitive is deliberately avoided (quality gate C: ≤200 KB route JS).
function DesktopNav() {
  const isActive = useIsActive();
  const [servicesOpen, setServicesOpen] = React.useState(false);
  const timeoutRef = React.useRef<NodeJS.Timeout | null>(null);

  const handleServicesEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    setServicesOpen(true);
  };

  const handleServicesLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setServicesOpen(false);
    }, 150);
  };

  const handleDropdownEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
  };

  const handleDropdownLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setServicesOpen(false);
    }, 150);
  };

  const isServicesActive = isActive(routeHref("/services/"));

  const serviceDetailLinks = [
    {
      icon: servicesSection.items[0].icon,
      title: "Brand Design & Identity",
      body: "Build a brand people recognise, trust, and remember.",
      href: routeHref("/services/brand-design/"),
    },
    {
      icon: servicesSection.items[1].icon,
      title: "UI/UX Design",
      body: "Create digital experiences that feel simple, useful, and natural.",
      href: routeHref("/services/ui-ux-design/"),
    },
    {
      icon: servicesSection.items[2].icon,
      title: "Website Design & Development",
      body: "Design websites that look sharp and guide people to take action.",
      href: routeHref("/services/website-design/"),
    },
    {
      icon: servicesSection.items[3].icon,
      title: "SaaS & Product Design",
      body: "Turn complicated workflows into simple, useful digital products.",
      href: "/services/#saas-product-design",
    },
    {
      icon: servicesSection.items[4].icon,
      title: "MVP Development",
      body: "Turn an idea into a working product you can test, learn from, and improve.",
      href: "/services/#mvp-development",
    },
    {
      icon: servicesSection.items[5].icon,
      title: "Mobile App Design",
      body: "Create mobile experiences that feel natural and match your brand.",
      href: "/services/#mobile-app-design",
    },
    {
      icon: servicesSection.items[6].icon,
      title: "Digital Growth",
      body: "Use SEO, content, social media, email, and analytics to build steady momentum.",
      href: "/services/#digital-growth",
    },
    {
      icon: icons.projectManagement,
      title: "Project Management Services",
      body: "Tailored structures designed to keep your digital workflows predictable and efficient.",
      href: routeHref("/services/project-management-services/"),
    },
  ];

  return (
    <nav className="hidden md:flex" aria-label="Main">
      <ul className="flex items-center gap-6">
        <li>
          <Link
            href={navItems[0].href}
            aria-current={isActive(navItems[0].href) ? "page" : undefined}
            className={cn(
              "inline-flex items-center justify-center rounded-lg px-2.5 py-1.5 text-base font-medium transition-colors hover:text-waymarks-accent focus-visible:ring-3 focus-visible:ring-ring/50 outline-none",
              isActive(navItems[0].href) && "text-waymarks-accent",
            )}
          >
            {navItems[0].title}
          </Link>
        </li>
        <li
          className="relative"
          onMouseEnter={handleServicesEnter}
          onMouseLeave={handleServicesLeave}
        >
          <Link
            href={navItems[1].href}
            aria-current={isServicesActive ? "page" : undefined}
            className={cn(
              "inline-flex items-center justify-center rounded-lg px-2.5 py-1.5 text-base font-medium transition-colors hover:text-waymarks-accent focus-visible:ring-3 focus-visible:ring-ring/50 outline-none",
              isServicesActive && "text-waymarks-accent",
            )}
          >
            {navItems[1].title}
          </Link>
          {servicesOpen ? (
            <div
              className="absolute left-1/2 top-full z-50 mt-2 w-[min(52rem,95vw)] -translate-x-1/2"
              onMouseEnter={handleDropdownEnter}
              onMouseLeave={handleDropdownLeave}
            >
              <div className="overflow-hidden rounded-2xl border border-white/10 bg-waymarks-surface-raised shadow-card">
                <div className="grid grid-cols-1 gap-1 p-4 md:grid-cols-2">
                  {serviceDetailLinks.map((service) => (
                    <Link
                      key={service.title}
                      href={service.href}
                      className="group flex items-start gap-3 rounded-xl px-3 py-3 transition-colors hover:bg-white/5"
                    >
                      <span className="mt-0.5 flex size-10 shrink-0 items-center justify-center rounded-lg bg-waymarks-primary/15 text-waymarks-primary">
                        <Icon name={service.icon} className="size-5" aria-hidden="true" />
                      </span>
                      <span className="min-w-0">
                        <span className="block text-sm font-medium text-foreground group-hover:text-waymarks-accent">
                          {service.title}
                        </span>
                        <span className="mt-1 block text-xs leading-relaxed text-muted-foreground">
                          {service.body}
                        </span>
                      </span>
                    </Link>
                  ))}
                </div>
               </div>
            </div>
          ) : null}
        </li>
        <li>
          <Link
            href={navItems[2].href}
            aria-current={isActive(navItems[2].href) ? "page" : undefined}
            className={cn(
              "inline-flex items-center justify-center rounded-lg px-2.5 py-1.5 text-base font-medium transition-colors hover:text-waymarks-accent focus-visible:ring-3 focus-visible:ring-ring/50 outline-none",
              isActive(navItems[2].href) && "text-waymarks-accent",
            )}
          >
            {navItems[2].title}
          </Link>
        </li>
        <li>
          <Link
            href={navItems[3].href}
            aria-current={isActive(navItems[3].href) ? "page" : undefined}
            className={cn(
              "inline-flex items-center justify-center rounded-lg px-2.5 py-1.5 text-base font-medium transition-colors hover:text-waymarks-accent focus-visible:ring-3 focus-visible:ring-ring/50 outline-none",
              isActive(navItems[3].href) && "text-waymarks-accent",
            )}
          >
            {navItems[3].title}
          </Link>
        </li>
        <li>
          <Link
            href={navItems[4].href}
            aria-current={isActive(navItems[4].href) ? "page" : undefined}
            className={cn(
              "inline-flex items-center justify-center rounded-lg px-2.5 py-1.5 text-base font-medium transition-colors hover:text-waymarks-accent focus-visible:ring-3 focus-visible:ring-ring/50 outline-none",
              isActive(navItems[4].href) && "text-waymarks-accent",
            )}
          >
            {navItems[4].title}
          </Link>
        </li>
      </ul>
    </nav>
  );
}

function Brand() {
  return (
    <Link
      href="/"
      className="flex items-center gap-2 font-semibold"
      aria-label={`${site.name} — home`}
    >
      {/* Plain img: images.unoptimized makes next/image pure overhead
          (quality gate C — route JS budget); eager + high fetch priority
          keeps LCP behaviour. */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/logo_white.png"
        alt="Waymark logo"
        width={158}
        height={30}
        loading="eager"
        fetchPriority="high"
        className="h-7.5 w-auto"
      />
    </Link>
  );
}

function useIsActive() {
  const pathname = usePathname();
  return React.useCallback(
    (href: string) => {
      // trailingSlash export: hrefs carry the slash, the pathname may not.
      const normalize = (path: string) =>
        path.length > 1 && path.endsWith("/") ? path.slice(0, -1) : path;
      const current = normalize(pathname);
      const target = normalize(href);
      return current === target || current.startsWith(`${target}/`);
    },
    [pathname],
  );
}

function MobileNav() {
  const isActive = useIsActive();
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden pointer-coarse:size-11"
          aria-label="Open menu"
        >
          <Menu className="size-5" aria-hidden="true" />
          <span className="sr-only">Toggle navigation</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left">
        <SheetHeader>
          <SheetTitle className="sr-only">Main navigation</SheetTitle>
          <Brand />
        </SheetHeader>
        <nav className="mt-6 flex flex-col gap-1 px-2">
          {navItems.map((item) => (
            <SheetClose asChild key={item.title}>
              <Link
                href={item.href}
                aria-current={isActive(item.href) ? "page" : undefined}
                className={cn(
                  "flex items-center justify-between rounded-lg px-3 py-3 text-sm font-medium transition-colors hover:bg-white/5",
                  isActive(item.href) && "text-waymarks-accent",
                )}
              >
                {item.title}
                <ChevronRight className="size-4 text-muted-foreground" aria-hidden="true" />
              </Link>
            </SheetClose>
          ))}
        </nav>
        <SheetFooter>
          <Button asChild className="w-full" variant="outline">
            <a href={`mailto:${site.email}`}>{site.email}</a>
          </Button>
          <a href={bookCallHref} className={cn(ctaClass("primary"), "mt-2 w-full")}>
            {navCtaLabel}
          </a>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}

// Offcanvas contact panel (C1.1): phone/email/address + socials, mirroring
// the template's #offcanvasRight header sidebar.
function ContactPanelRows() {
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
    <ul className="flex flex-col gap-1 px-4">
      {rows.map(({ icon: Icon, label, value, href }) => {
        const content = (
          <>
            <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-waymarks-primary/15 text-waymarks-primary">
              <Icon className="size-4" aria-hidden="true" />
            </span>
            <span className="min-w-0">
              <span className="block text-xs font-medium uppercase tracking-widest text-muted-foreground">
                {label}
              </span>
              <span className="block truncate text-sm font-medium text-foreground">
                {value}
              </span>
            </span>
          </>
        );
        return (
          <li key={label}>
            {href ? (
              <SheetClose asChild>
                <a
                  href={href}
                  className="flex items-center gap-3 rounded-lg px-2 py-3 transition-colors hover:bg-white/5"
                >
                  {content}
                </a>
              </SheetClose>
            ) : (
              <div className="flex items-center gap-3 px-2 py-3">{content}</div>
            )}
          </li>
        );
      })}
    </ul>
  );
}

function ContactPanel() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          className="pointer-coarse:size-11"
          aria-label="Open contact panel"
        >
          <Grip className="size-4" aria-hidden="true" />
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-full sm:max-w-sm">
        <SheetHeader>
          <SheetTitle>{contactPanel.title}</SheetTitle>
          <SheetDescription>{site.tagline}</SheetDescription>
        </SheetHeader>
        <div className="flex flex-col gap-6 overflow-y-auto pb-4">
          <ContactPanelRows />
          <div className="px-6">
            <p className="mb-3 text-xs font-medium uppercase tracking-widest text-muted-foreground">
              {contactPanel.stayConnected}
            </p>
            <ul className="flex flex-wrap gap-x-4 gap-y-2">
              {socialLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-6 items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-waymarks-accent"
                  >
                    <SocialIcon platform={link.platform} className="size-6" />
                    {link.label}
                    <ArrowUpRight className="size-3.5" aria-hidden="true" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <SheetFooter>
          <Button asChild className="h-11 w-full">
            <SheetClose asChild>
              <a href={bookCallHref}>Book a discovery call</a>
            </SheetClose>
          </Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}

export function Navbar() {
  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full border-b border-white/12 bg-waymarks-dark/85 text-white backdrop-blur-md",
      )}
    >
      <div className="container grid h-20 grid-cols-[1fr_auto] items-center gap-x-4 md:grid-cols-[1fr_auto_1fr]">
        <div className="flex min-w-0 items-center gap-2">
          <MobileNav />
          <Brand />
        </div>
        <DesktopNav />
        <div className="flex items-center justify-end gap-2">

          <a
            href={bookCallHref}
            className={cn(ctaClass("primary"), "h-[50px] w-[190px] px-0")}
          >
            {navCtaLabel}
          </a>
        </div>
      </div>
    </header>
  );
}
