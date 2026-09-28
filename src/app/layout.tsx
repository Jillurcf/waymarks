import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";

import { Navbar } from "@/components/navbar";
import { site } from "@/lib/content/site";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: `${site.name} — ${site.tagline}`,
    template: `%s — ${site.name}`,
  },
  description: site.description,
  metadataBase: new URL(site.domain),
  openGraph: {
    title: `${site.name} — ${site.tagline}`,
    description: site.description,
    url: site.domain,
    siteName: site.name,
    type: "website",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      // The site is dark-first (design-system §1): `dark` activates the
      // brand-navy surface ramp in globals.css for the whole document.
      className={`dark ${inter.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-waymarks-dark">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:z-[60] focus:bg-background focus:px-4 focus:py-2"
        >
          Skip to content
        </a>
        <Navbar />
        <main id="main" className="flex-1">
          {children}
        </main>
      </body>
    </html>
  );
}