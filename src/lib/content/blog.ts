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
