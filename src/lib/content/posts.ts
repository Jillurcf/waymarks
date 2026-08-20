// Blog posts (launch articles land in Phase 3, P3.5).
//
// SEED CONTENT: this list is intentionally empty until the launch articles are
// written. The Post model matches SRS §7 and the blog templates in P3.3/P3.4.
export interface Post {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  readingTime: string;
  body: string;
  tags: string[];
}

export const posts: Post[] = [];