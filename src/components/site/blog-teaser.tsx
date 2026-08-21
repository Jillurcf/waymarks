import { ArrowRight } from "lucide-react";

import { Reveal } from "@/components/site/reveal";
import { PostCard } from "@/components/site/post-card";
import { SecondaryCtaLink } from "@/components/site/cta";
import { SectionHeading } from "@/components/site/section-heading";
import { blogTeaser } from "@/lib/content/home";
import { posts } from "@/lib/content/posts";
import { site } from "@/lib/content/site";

// Block 13 — Blog teaser (template .our-blog): heading row plus up to three
// post cards on the shared PostCard (C4.1). Until launch articles exist a
// quiet empty state keeps the block present without faking published posts.
export function BlogTeaser() {
  const latest = posts.slice(0, 3);

  return (
    <section aria-labelledby="blog-teaser-title" className="bg-secondary/40 py-20 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            align="left"
            eyebrow={blogTeaser.eyebrow}
            title={blogTeaser.title}
            id="blog-teaser-title"
            className="mb-0"
          />
          <SecondaryCtaLink href={blogTeaser.viewAll.href} className="mb-1">
            {blogTeaser.viewAll.label}
          </SecondaryCtaLink>
        </div>

        <Reveal>
          {latest.length > 0 ? (
            <ul className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
              {latest.map((post, index) => (
                <li key={post.slug} className="h-full">
                  <PostCard
                    post={post}
                    tone={index}
                    readMore={blogTeaser.readMore}
                  />
                </li>
              ))}
            </ul>
          ) : (
            <div className="mt-12 rounded-xl border border-dashed border-border bg-card px-6 py-12 text-center">
              <h3 className="text-lg font-medium tracking-tight">
                {blogTeaser.emptyState.title}
              </h3>
              <p className="mx-auto mt-2 max-w-md text-sm leading-relaxed text-muted-foreground">
                {blogTeaser.emptyState.body}
              </p>
              <a
                href={`mailto:${site.email}`}
                className="mt-6 inline-flex items-center gap-1.5 rounded-lg border border-border bg-background px-4 py-2 text-sm font-medium text-foreground transition-all hover:bg-muted"
              >
                {blogTeaser.emptyState.ctaLabel}
                <ArrowRight className="size-4" aria-hidden="true" />
              </a>
            </div>
          )}
        </Reveal>
      </div>
    </section>
  );
}
