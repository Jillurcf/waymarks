import { PostCard } from "@/components/site/post-card";
import { blogPage } from "@/lib/content/blog";
import { posts } from "@/lib/content/posts";

// Blog index grid (C4.1, template .page-blog): card grid of image, title,
// read-more. Pagination is deferred until more than six posts exist
// (implementation plan §2) — the stub below renders nothing at one page.
const PAGE_SIZE = 6;

export function BlogGrid() {
  const pagePosts = posts.slice(0, PAGE_SIZE);
  const pageCount = Math.ceil(posts.length / PAGE_SIZE);

  return (
    <div>
      <ul className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {pagePosts.map((post, index) => (
          <li key={post.slug} className="h-full">
            <PostCard post={post} tone={index} readMore={blogPage.readMore} />
          </li>
        ))}
      </ul>

      {/* Pagination stub (C4.1). Static-export pagination will ship as
          /blog/page/[n] routes once a seventh post exists; until then the
          single page needs no controls. */}
      {pageCount > 1 ? (
        <nav aria-label="Blog pages" className="mt-12" data-stub="pagination">
          {/* Prev/next + numbered links to /blog/page/[n] land with the
              first multi-page build. */}
        </nav>
      ) : null}
    </div>
  );
}
