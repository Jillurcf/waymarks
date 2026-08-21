import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { PageHeader } from "@/components/site/page-header";
import { ArticleDetail } from "@/components/site/article-detail";
import { ClosingCta } from "@/components/site/closing-cta";
import { posts, type Post } from "@/lib/content/posts";
import { site } from "@/lib/content/site";

// Article detail (C4.2, FR-15): all routes resolve at build time from the
// typed content module — required by the static export.
export const dynamicParams = false;

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `/blog/${post.slug}`,
      siteName: site.name,
      type: "article",
      publishedTime: post.date,
      tags: post.tags,
    },
  };
}

// Article JSON-LD matching the visible page content.
function ArticleSchema({ post }: { post: Post }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    dateModified: post.date,
    author: {
      "@type": "Organization",
      name: site.name,
      url: site.domain,
    },
    publisher: {
      "@type": "Organization",
      name: site.name,
      url: site.domain,
    },
    mainEntityOfPage: `${site.domain}/blog/${post.slug}`,
    keywords: post.tags.join(", "),
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
      }}
    />
  );
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) notFound();

  return (
    <>
      <ArticleSchema post={post} />
      <PageHeader eyebrow="Blog" title={post.title} pathname={`/blog/${post.slug}`} />
      <ArticleDetail post={post} />
      <ClosingCta />
    </>
  );
}
