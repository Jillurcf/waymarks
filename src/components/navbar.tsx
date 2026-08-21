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
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
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
} from "@/lib/content/site";

const navItems = [
  { title: "Services", href: "/services" },
  { title: "Work", href: "/work" },
  { title: "About", href: "/about" },
  { title: "Pricing", href: "/pricing" },
  { title: "Blog", href: "/blog" },
  { title: "Contact", href: "/contact" },
];

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
      <img
        src="/Waymarks_Logo-01.png"
        alt="Waymark logo"
        width={158}
        height={28}
        loading="eager"
        fetchPriority="high"
        className="h-7 w-auto"
      />
    </Link>
  );
}

function useIsActive() {
  const pathname = usePathname();
  return React.useCallback(
    (href: string) => pathname === href || pathname.startsWith(`${href}/`),
    [pathname],
  );
}

function DesktopNav() {
  const isActive = useIsActive();
  return (
    <NavigationMenu className="hidden md:flex">
      <NavigationMenuList>
        {navItems.map((item) => (
          <NavigationMenuItem key={item.title}>
            <NavigationMenuLink
              asChild
              aria-current={isActive(item.href) ? "page" : undefined}
            >
              <Link
                href={item.href}
                className={cn(
                  navigationMenuTriggerStyle(),
                  isActive(item.href)
                    ? "text-waymarks-accent"
                    : "text-foreground",
                )}
              >
                {item.title}
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
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
                  "flex items-center justify-between rounded-lg px-3 py-3 text-sm font-medium transition-colors hover:bg-muted",
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
          <Button asChild className="w-full">
            <a href={bookCallHref}>Book a Free Call</a>
          </Button>
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
            <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-waymarks-primary/15 text-waymarks-secondary">
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
                  className="flex items-center gap-3 rounded-lg px-2 py-3 transition-colors hover:bg-muted"
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
                    className="inline-flex min-h-6 items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-waymarks-accent"
                  >
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
        "sticky top-0 z-50 w-full border-b border-transparent bg-background/80 text-foreground backdrop-blur-md",
      )}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center gap-4 px-4 sm:px-6 lg:px-8">
        <MobileNav />
        <Brand />
        <DesktopNav />
        <div className="ml-auto flex items-center gap-2">
          <ContactPanel />
          <Button asChild size="default" className="hidden sm:inline-flex">
            <a href={bookCallHref}>Book a Free Call</a>
          </Button>
          <Button asChild size="default" className="sm:hidden" variant="outline">
            <a href={bookCallHref}>Book a Call</a>
          </Button>
        </div>
      </div>
    </header>
  );
}
