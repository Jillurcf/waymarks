import Link from "next/link";
import { ArrowRight } from "lucide-react";

import type { Post } from "@/lib/content/posts";

// Shared post card (C4.1) — used by the blog index grid and the home teaser.
// Cover art is a token-based gradient: brand-approved photography is not yet
// available, and template stock imagery must never ship (plan §5).
const coverTones = [
  "from-waymarks-primary/25 to-waymarks-accent/10",
  "from-waymarks-accent/20 to-waymarks-secondary/10",
  "from-waymarks-secondary/15 to-waymarks-primary/10",
];

export function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

export function PostCard({
  post,
  tone = 0,
  readMore,
}: {
  post: Post;
  /** Index into the rotating cover-tone palette. */
  tone?: number;
  readMore: string;
}) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group flex h-full flex-col overflow-hidden rounded-xl border border-border bg-card transition-all hover:border-waymarks-primary/40 hover:shadow-card-hover"
    >
      <div
        aria-hidden="true"
        className={`aspect-[16/9] w-full bg-gradient-to-br ${coverTones[tone % coverTones.length]}`}
      />
      <div className="flex flex-1 flex-col gap-3 p-5">
        <p className="text-xs uppercase tracking-widest text-muted-foreground tabular-nums">
          {formatDate(post.date)} · {post.readingTime}
        </p>
        <h3 className="text-base font-medium tracking-tight transition-colors group-hover:text-waymarks-accent">
          {post.title}
        </h3>
        <p className="line-clamp-2 text-sm leading-relaxed text-muted-foreground">
          {post.excerpt}
        </p>
        <span className="mt-auto inline-flex items-center gap-1 pt-2 text-sm font-medium text-waymarks-secondary">
          {readMore}
          <ArrowRight
            className="size-4 transition-transform group-hover:translate-x-0.5"
            aria-hidden="true"
          />
        </span>
      </div>
    </Link>
  );
}
