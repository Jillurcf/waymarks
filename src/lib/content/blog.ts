// Blog route copy. Separate module from home.ts because /blog is its own page
// in the route map (src/lib/routes.ts); the homepage keeps its own #blog slot.
// Voice follows .skill/waymark-ui-ux/content.md: calm, concrete, outcome-led,
// UK spelling.

export const blogSeo = {
  title: "Blog | Digital Design Ideas from Waymark",
  description:
    "Practical digital design ideas from Waymark on branding, UX, websites, digital products, technology, AI and growth. No extra jargon, just ideas you can use.",
} as const;

// ---------------------------------------------------------------------------
// 1. Hero
//
// Eyebrow band ("Blog" + mark) → display headline beside the hero
// illustration, lit by a single top-right glow. The headline splits into a
// plain first line and a gradient accent line, matching the approved design
// (`Waymarks Final Homepage Design.html`).
// ---------------------------------------------------------------------------

export const blogPageHero = {
  label: "Blog",
  title: "Digital Design Blog:",
  // Accent line, set in the brand gradient (`.waymarks-gradient-text`).
  titleAccent: "Ideas, Insights, And Digital Thinking",
  intro:
    "The digital world changes quickly. Our digital design blog shares practical ideas about branding, UX, websites, digital products, technology, AI, and growth.",
  body: "No extra jargon. Just useful ideas you can use.",
  image: {
    src: "/images/Blog/Blog_hero_img.png",
    alt: "Digital design blog hero illustration",
  },
} as const;

// ---------------------------------------------------------------------------
// 2. Top Picks
//
// "Top Picks" eyebrow → "Featured Articles" gradient heading, then one
// full-width featured card and a paired row of two cards, each framed by a
// `white/25` hairline (the design system's `white/10` is overridden here to
// match the approved blog layout).
// ---------------------------------------------------------------------------

export type BlogTopPick = {
  title: string;
  body: string;
  image: { src: string; alt: string };
};

export const blogTopPicks: {
  label: string;
  title: string;
  featured: BlogTopPick;
  picks: BlogTopPick[];
} = {
  label: "Top Picks",
  title: "Featured Articles",
  featured: {
    title: "Why Every Project Should Start With Discovery",
    body: "Before you design anything, understand the problem. Discovery uncovers key requirements, user motivations, and business goals to prevent costly redesigns later.",
    image: {
      src: "/images/Blog/top_pics.png",
      alt: "Discovery workshop sketch mapping requirements and user motivations",
    },
  },
  picks: [
    {
      title: "Design Systems Developers Actually Use",
      body: "A design system should make life easier for designers and developers. Learn how to bridge the gap between Figma and code effortlessly.",
      image: {
        src: "/images/Blog/top_pics1.png",
        alt: "Design system components shown side by side in Figma and code",
      },
    },
    {
      title: "5 UX Problems We Look For First",
      body: "Small usability problems can cause big customer frustration. Here are the 5 critical conversion killers we audit immediately.",
      image: {
        src: "/images/Blog/top_pics2.png",
        alt: "UX audit checklist highlighting common conversion blockers",
      },
    },
  ],
};

// ---------------------------------------------------------------------------
// 3. Topics
//
// "Explore Our Digital / Design Blog By Topic" centred two-line heading, then
// a topic grid (`lg:grid-cols-3`) of borderless cards. Each card picks its mark
// from `icon`, so a new topic is data-only.
// ---------------------------------------------------------------------------

export type BlogTopicIcon =
  | "branding"
  | "uiux"
  | "website"
  | "saas"
  | "growth"
  | "ai";

export type BlogTopic = {
  icon: BlogTopicIcon;
  image: { src: string; alt: string };
  tag: string;
  title: string;
  body: string;
  cta: { label: string; href: string };
};

export const blogTopics: {
  titleLead: string;
  titleAccent: string;
  topics: BlogTopic[];
} = {
  titleLead: "Explore Our Digital",
  titleAccent: "Design Blog By Topic",
  topics: [
    {
      icon: "branding",
      image: {
        src: "/images/Blog/explore_img01.png",
        alt: "Branding strategy illustration",
      },
      tag: "Branding Topic",
      title: "Branding Strategy",
      body: "Identity, positioning, visual systems, brand consistency, and creative strategy for modern companies.",
      cta: { label: "Explore Growth Articles", href: "/blog/" },
    },
    {
      icon: "uiux",
      image: {
        src: "/images/Blog/explore_img02.png",
        alt: "UI and UX design illustration",
      },
      tag: "UI/UX Topic",
      title: "UI & UX Design",
      body: "User research, interfaces, usability, design systems, and seamless product experiences.",
      cta: { label: "Explore Growth Articles", href: "/blog/" },
    },
    {
      icon: "website",
      image: {
        src: "/images/Blog/explore_img03.png",
        alt: "Web development illustration",
      },
      tag: "Websites Topic",
      title: "Web Development",
      body: "Web strategy, UX, conversion optimization, high-performance development, and content structure.",
      cta: { label: "Explore Growth Articles", href: "/blog/" },
    },
    {
      icon: "saas",
      image: {
        src: "/images/Blog/explore_img04.png",
        alt: "Digital product design illustration",
      },
      tag: "SaaS & Products Topic",
      title: "Digital Products",
      body: "Dashboards, complex workflows, product strategy, fast MVPs, and scalable product design.",
      cta: { label: "Explore Growth Articles", href: "/blog/" },
    },
    {
      icon: "growth",
      image: {
        src: "/images/Blog/explore_img05.png",
        alt: "Growth and marketing illustration",
      },
      tag: "Growth Topic",
      title: "Growth & Marketing",
      body: "SEO, content marketing, social media strategy, analytics, customer acquisition, and marketing systems.",
      cta: { label: "Explore Growth Articles", href: "/blog/" },
    },
    {
      icon: "ai",
      image: {
        src: "/images/Blog/explore_img06.png",
        alt: "AI and technology illustration",
      },
      tag: "AI & Tech Topic",
      title: "AI & Technology",
      body: "AI tools, workflow automation, emerging tech stack ideas, and practical digital implementation.",
      cta: { label: "Explore Growth Articles", href: "/blog/" },
    },
  ],
};
