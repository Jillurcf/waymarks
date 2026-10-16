import Image from "next/image";
import type { Metadata } from "next";

import { blogPageHero, blogSeo } from "@/lib/content/blog";
import { site } from "@/lib/content/site";

import { BlogIcon } from "@/components/site/blog-icon";
import { FinalCta } from "@/components/site/final-cta";
import { Footer } from "@/components/site/footer";

export const metadata: Metadata = {
  // `absolute` bypasses the layout template, mirroring the home, services,
  // about and contact routes so the brand is not appended twice.
  title: { absolute: blogSeo.title },
  description: blogSeo.description,
  alternates: { canonical: "/blog/" },
  openGraph: {
    title: blogSeo.title,
    description: blogSeo.description,
    url: `${site.domain}/blog/`,
    siteName: site.name,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: blogSeo.title,
    description: blogSeo.description,
  },
};

/**
 * Blog route: the hero band (mark + "Blog" eyebrow beside the display
 * headline and hero illustration, lit by a single top-right glow) → closing
 * CTA → footer. The navbar comes from the root layout; the footer is rendered
 * per page, and the route ends in a contact CTA per BR-2.
 */
export default function BlogPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-waymarks-dark text-white">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-1/4 right-0 size-[34rem] rounded-full bg-waymarks-primary/10 blur-3xl"
        />

        <div className="container relative grid gap-10 py-20 md:grid-cols-2 md:items-center lg:py-24">
          <div className="relative aspect-[4/4] w-full">
            <Image
              src={blogPageHero.image.src}
              alt={blogPageHero.image.alt}
              fill
              className="object-contain"
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>

          <div className="flex flex-col items-end gap-6 text-right">
            <p className="flex items-center gap-3 text-[22px] font-bold text-waymarks-primary">
              <span>{blogPageHero.label}</span>
              <BlogIcon className="size-11" />
            </p>
            <h1 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-[56px]">
              {blogPageHero.title}
            </h1>
            <p className="waymarks-gradient-text text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-[56px]">
              {blogPageHero.titleAccent}
            </p>
            <p className="text-[22px] leading-relaxed text-white">
              {blogPageHero.intro}
            </p>
            <p className="text-base leading-relaxed text-white/75">
              {blogPageHero.body}
            </p>
          </div>
        </div>
      </section>

      <FinalCta />
      <Footer />
    </>
  );
}
