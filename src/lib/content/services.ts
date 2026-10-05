// Services route copy. Separate from home.ts because this is a distinct route
// (FR-18/FR-19 route map); the homepage keeps its own services grid section.
// Voice follows .skill/waymark-ui-ux/content.md: calm, concrete, outcome-led.

import { icons } from "./home";
import { routeHref } from "../routes";

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

// Brand design spotlight band (services route). Right-hand column carries the
// icon, heading, one-line summary and the single section CTA.
export const servicesBrandDesign = {
  // Feature visual, supplied by the studio (882 × 450 landscape).
  image: {
    src: "/images/services/brand_design_Image.png",
    alt: "Waymark brand design and identity work",
  },
  title: "Brand Design & Identity",
  body: "Build a brand people recognise, trust, and remember.",
  cta: {
    label: "Explore Brand Design",
    href: routeHref("/services/brand-design/"),
    icon: icons.arrowRight,
  },
} as const;

// User experience spotlight (services route). Copy column leads on the left and
// the feature visual mirrors the brand design band on the right.
export const servicesUserExperience = {
  // Feature visual, supplied by the studio (882 × 450 landscape).
  image: {
    src: "/images/services/user_experiencs.png",
    alt: "Waymark user experience design work",
  },
  title: "UI/UX Design",
  body: "Create digital experiences that feel simple, useful, and natural.",
  cta: {
    label: "Explore UI/UX Design",
    href: `${routeHref("/services/")}#ui-ux-design`,
    icon: icons.arrowRight,
  },
} as const;

export const servicesWebsiteDesign = {
  image: {
    src: "/images/services/service_landing_page.png",
    alt: "Waymark website design work",
  },
  title: "Website Design & Development",
  body: "Design websites that look sharp and guide people to take action.",
  cta: {
    label: "Explore Website Design",
    href: `${routeHref("/services/")}#website-design`,
    icon: icons.arrowRight,
  },
} as const;

export const servicesSaasProduct = {
  image: {
    src: "/images/services/saas_product_design.png",
    alt: "Waymark SaaS and product design work",
  },
  title: "SaaS & Product Design",
  body: "Turn complicated workflows into simple, useful digital products.",
  cta: {
    label: "Explore SaaS & Product Design",
    href: `${routeHref("/services/")}#saas-product-design`,
    icon: icons.arrowRight,
  },
} as const;

export const servicesMvpDevelopment = {
  image: {
    src: "/images/services/mvp_devlopment.png",
    alt: "Waymark MVP development work",
  },
  title: "MVP Development",
  body: "Turn an idea into a working product you can test, learn from, and improve.",
  cta: {
    label: "Explore MVP Development",
    href: `${routeHref("/services/")}#mvp-development`,
    icon: icons.arrowRight,
  },
} as const;

export const servicesMobileAppDesign = {
  image: {
    src: "/images/services/mobile_app_design.png",
    alt: "Waymark mobile app design work",
  },
  title: "Mobile App Design",
  body: "Create mobile experiences that feel natural and match your brand.",
  cta: {
    label: "Explore Mobile App Design",
    href: `${routeHref("/services/")}#mobile-app-design`,
    icon: icons.arrowRight,
  },
} as const;

export const servicesDigitalGrowth = {
  image: {
    src: "/images/services/service-digital-growth.png",
    alt: "Waymark digital growth work",
  },
  title: "Digital Growth",
  body: "Use SEO, content, social media, email, and analytics to build steady momentum.",
  cta: {
    label: "Explore Digital Growth",
    href: `${routeHref("/services/")}#digital-growth`,
    icon: icons.arrowRight,
  },
} as const;

export const servicesNeedMoreThanOne = {
  image: {
    src: "/images/services/service_need_more_than_one_container.png",
    alt: "Waymarks team supporting multiple design services",
  },
  title: "Need more than one service?",
  body: "We can combine services into one plan, one team, and one timeline. Tell us what you are working on and we will suggest the right mix.",
  cta: {
    label: "Start a conversation",
    href: routeHref("/contact"),
    icon: icons.arrowRight,
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
