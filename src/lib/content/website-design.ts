// Website design service detail route copy (app/services/website-design).
// Separate from services.ts (overview copy) and service-details.ts (the shared
// [slug] template), because this route ships its own hero while the rest of the
// detail template is still being written. Voice follows
// .skill/waymark-ui-ux/content.md: calm, concrete, outcome-led.

import type { Cta } from "./home";
import { bookCallHref } from "./site";
import { icons } from "./icons";

export const websiteDesignSeo = {
  title: "Web Design and Development | Waymarks",
  description:
    "Web design and development built for more than looks — clear, smooth-working websites that explain your value and turn visitors into customers.",
};

export const websiteDesignHero = {
  path: "/services/website-design/",
  label: "Web Design and Development",
  // Display headline, one entry per rendered line (56px / bold / white).
  title: ["Web Design and", "Development Built For", "More Than Looks"],
  intro:
    "Your website is often the first real meeting between a customer and your business. Our web design and development team builds sites that explain your value clearly, work smoothly, and help visitors take action.",
  body: "We build clear, smooth-working websites that turn visitors into customers.",
  // Hero visual, supplied by the studio (528 × 541).
  image: {
    src: "/images/services/website_design/hero_image.png",
    alt: "Waymark web design and development work",
    width: 528,
    height: 541,
  },
  cta: { label: "Start a Project", href: bookCallHref, icon: icons.arrowRight } satisfies Cta,
  secondaryCta: { label: "Explore Our Work", href: "/#work" } satisfies Cta,
};

// "Strategy before screens" band, rendered directly under the hero. The
// headline leads white with the closing phrase on the CTA gradient, the lead
// paragraph argues the case, and the closing line restates the promise set
// right-aligned.
export const websiteDesignStrategy = {
  heading: { lead: "Strategy", highlight: "Before Screens" },
  body: "Every successful website begins with a solid foundation. Before we design your website, we evaluate every key angle to give every important decision a clear reason. By taking the time to understand your brand, audience, and goals upfront, we ensure that every visual and functional element serves a distinct purpose to drive measurable results.",
  // What we evaluate before design starts, numbered in the order it is covered.
  items: [
    "Business Goals",
    "Audience",
    "Market Competitors",
    "Audit Your Current Website",
    "Content",
    "Information Structure",
    "Conversion",
    "Opportunities",
    "Technical Needs",
  ],
  // Section visual, supplied by the studio (480 × 444).
  image: {
    src: "/images/services/website_design/stategy_before_img.png",
    alt: "Waymark website strategy and planning work",
    width: 480,
    height: 444,
  },
};

// Website design services band: the headline names the service, the icon rows
// list what the service covers, and the visual sits under the headline.
export const websiteDesignServices = {
  heading: { lead: "Website", highlight: "Design Services" },
  body: "Your website is often the first real meeting between a customer and your business. Our web design and development team builds sites that explain your value clearly, work smoothly, and help visitors take action.",
  image: {
    src: "/images/services/website_design/website_design_services.png",
    alt: "Waymark website design services",
    width: 446,
    height: 602,
  },
  // SEED — labels to confirm against the approved service line-up.
  items: [
    { icon: icons.competitiveAnalysis, label: "Competitive Analysis" },
    { icon: icons.sitemap, label: "Sitemap & Information Architecture" },
    { icon: icons.interfaceDesign, label: "Interface Design" },
    { icon: icons.sectionLibraries, label: "Section Libraries" },
    { icon: icons.uxWriting, label: "UX Writing" },
    { icon: icons.uxAudit, label: "UX Audit" },
    { icon: icons.conversionStrategy, label: "Conversion Strategy" },
    { icon: icons.designSystemsMark, label: "Design Systems" },
  ],
};
