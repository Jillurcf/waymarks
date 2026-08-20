"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, ChevronRight } from "lucide-react";

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
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { bookCallHref, site } from "@/lib/content/site";

const navItems = [
  { title: "Services", href: "/services" },
  { title: "Work", href: "/work" },
  { title: "About", href: "/about" },
  { title: "Pricing", href: "/pricing" },
  { title: "Blog", href: "/blog" },
];

function Brand() {
  return (
    <Link
      href="/"
      className="flex items-center gap-2 font-semibold"
      aria-label={`${site.name} — home`}
    >
      <Image
        src="/Waymarks_Logo-01.png"
        alt="Waymark logo"
        width={158}
        height={28}
        priority
        className="h-7 w-auto"
      />
    </Link>
  );
}

function DesktopNav() {
  return (
    <NavigationMenu className="hidden md:flex">
      <NavigationMenuList>
        {navItems.map((item) => (
          <NavigationMenuItem key={item.title}>
            <NavigationMenuLink asChild>
              <Link
                href={item.href}
                className={navigationMenuTriggerStyle()}
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
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden" aria-label="Open menu">
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
                className="flex items-center justify-between rounded-lg px-3 py-2 text-sm font-medium transition-colors hover:bg-muted"
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