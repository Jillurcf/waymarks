// Services route copy. Separate from home.ts because this is a distinct route
// (FR-18/FR-19 route map); the homepage keeps its own services grid section.
// Voice follows .skill/waymark-ui-ux/content.md: calm, concrete, outcome-led.

export const servicesSeo = {
  title: "Digital Design Services | Waymarks",
  description:
    "Digital design services built around real business needs — brand, UI/UX, websites, SaaS products, MVPs, mobile apps and growth.",
};

export const servicesPageHero = {
  label: "Services",
  // Display headline. Sized 56px / bold / white, set on the left column; the
  // right column is reserved for the hero image the studio supplies.
  title: ["Digital Design Services", "Built Around Real", "Business Needs"],
  intro: "From brand identity to digital products and growth, our digital design services bring the right people and skills together to move your project forward.",
  body: "Pick what you need today. Add more when you are ready.",
  // Hero visual, supplied by the studio (528 × 700 portrait).
  image: {
    src: "/images/services/service_hero_img.png",
    alt: "Waymark digital design services",
  },
} as const;

export const servicesCover = {
  // Display heading. The lead-in is white; the closing phrase carries the
  // hero-highlight gradient treatment (design-system §1 "hero highlights").
  heading: {
    lead: "What Our Digital Design",
    highlight: "Services Cover",
  },
  body: "Every service below can stand alone. They also work well together, because our teams share one plan from the start.",
} as const;