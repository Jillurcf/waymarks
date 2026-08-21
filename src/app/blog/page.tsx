import type { Metadata } from "next";

import { PageHeader } from "@/components/site/page-header";
import { BlogGrid } from "@/components/site/blog-grid";
import { ClosingCta } from "@/components/site/closing-cta";
import { blogPage } from "@/lib/content/blog";
import { site } from "@/lib/content/site";

export const metadata: Metadata = {
  title: blogPage.title,
  description: blogPage.description,
  alternates: { canonical: "/blog" },
  openGraph: {
    title: `${blogPage.title} — ${site.name}`,
    description: blogPage.description,
    url: "/blog",
    siteName: site.name,
    type: "website",
  },
};

// Blog index (C4.1, template .page-blog): card grid of cover image, title,
// and read-more link, with a pagination stub deferred until >6 posts.
export default function BlogPage() {
  return (
    <>
      <PageHeader
        eyebrow={blogPage.eyebrow}
        title={blogPage.title}
        pathname="/blog"
      />
      <section aria-labelledby="blog-grid-title" className="py-20 sm:py-32">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <p id="blog-grid-title" className="sr-only">
            {blogPage.title}
          </p>
          <BlogGrid />
        </div>
      </section>
      <ClosingCta />
    </>
  );
}
