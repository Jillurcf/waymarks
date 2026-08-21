import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";

import { formatDate } from "@/components/site/post-card";
import { articlePage } from "@/lib/content/blog";
import { site } from "@/lib/content/site";
import type { Post, PostBlock } from "@/lib/content/posts";

// Article template (C4.2, template .page-single-post): featured cover,
// rich body rendered from typed blocks, tag chips, and share links.
// Server component — share URLs resolve at build time from the route map.

const coverTones = [
  "from-waymarks-primary/25 to-waymarks-accent/10",
  "from-waymarks-accent/20 to-waymarks-secondary/10",
  "from-waymarks-secondary/15 to-waymarks-primary/10",
];

function BodyBlock({ block }: { block: PostBlock }) {
  switch (block.type) {
    case "h2":
      return (
        <h2 className="pt-4 text-2xl font-medium tracking-tight text-foreground sm:text-3xl">
          {block.text}
        </h2>
      );
    case "quote":
      return (
        <blockquote className="border-l-2 border-waymarks-primary pl-5 text-lg font-medium tracking-tight text-foreground">
          <p>{block.text}</p>
        </blockquote>
      );
    case "ul":
      return (
        <ul className="flex flex-col gap-2.5 text-base leading-relaxed text-muted-foreground">
          {block.items.map((item) => (
            <li key={item} className="flex gap-3">
              <span
                aria-hidden="true"
                className="mt-[0.6em] size-1.5 shrink-0 rounded-full bg-waymarks-primary"
              />
              {item}
            </li>
          ))}
        </ul>
      );
    default:
      return (
        <p className="text-base leading-relaxed text-muted-foreground">
          {block.text}
        </p>
      );
  }
}

export function ArticleDetail({ post }: { post: Post }) {
  const url = `${site.domain}/blog/${post.slug}`;
  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(post.title);

  const shareHrefs: Record<string, string> = {
    X: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`,
    LinkedIn: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
    Facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
    Email: `mailto:?subject=${encodedTitle}&body=${encodedUrl}`,
  };

  return (
    <article className="py-20 sm:py-32">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        {/* Featured cover — token gradient until brand imagery exists. */}
        <div
          aria-hidden="true"
          className={`aspect-[16/9] w-full overflow-hidden rounded-xl border border-border bg-gradient-to-br ${coverTones[0]}`}
        />

        <p className="mt-8 text-xs uppercase tracking-widest text-muted-foreground tabular-nums">
          <time dateTime={post.date}>{formatDate(post.date)}</time> ·{" "}
          {post.readingTime}
        </p>

        <div className="mt-6 flex flex-col gap-6">
          {post.body.map((block, index) => (
            <BodyBlock key={index} block={block} />
          ))}
        </div>

        {/* Tags + share row (template .post-tag-links). Tags are plain
            chips — no tag-archive routes exist to link to. */}
        <footer className="mt-12 flex flex-wrap items-center justify-between gap-x-8 gap-y-6 border-t border-border pt-8">
          <div>
            <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
              {articlePage.tagsLabel}
            </p>
            <ul className="mt-2.5 flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <li
                  key={tag}
                  className="rounded-full border border-border bg-background px-3 py-1 text-xs font-medium text-foreground"
                >
                  {tag}
                </li>
              ))}
            </ul>
          </div>

          <nav aria-label={articlePage.shareLabel}>
            <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
              {articlePage.shareLabel}
            </p>
            <ul className="mt-2.5 flex flex-wrap gap-x-4 gap-y-2">
              {articlePage.shareNetworks.map((network) => (
                <li key={network.label}>
                  <a
                    href={shareHrefs[network.label]}
                    aria-label={`${network.verb}: ${post.title}`}
                    {...(network.label === "Email"
                      ? {}
                      : { target: "_blank", rel: "noopener noreferrer" })}
                    className="inline-flex min-h-6 items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-waymarks-accent"
                  >
                    {network.label}
                    <ArrowUpRight className="size-3.5" aria-hidden="true" />
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </footer>

        <Link
          href="/blog"
          className="group mt-12 inline-flex items-center gap-2 text-sm font-medium text-waymarks-secondary transition-colors hover:text-waymarks-accent"
        >
          <ArrowLeft
            className="size-4 transition-transform group-hover:-translate-x-0.5"
            aria-hidden="true"
          />
          {articlePage.backLabel}
        </Link>
      </div>
    </article>
  );
}
