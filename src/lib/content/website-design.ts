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

// Website development services band: copy of the design services band for the
// development half of the offer. SEED — heading, body, image and item labels
// below are placeholders copied from `websiteDesignServices` for the studio to
// replace with the approved development line-up.
export const websiteDevelopmentServices = {
  heading: { lead: "Website", highlight: "Development Services" },
  body: "Your website is often the first real meeting between a customer and your business. Our web design and development team builds sites that explain your value clearly, work smoothly, and help visitors take action.",
  image: {
    src: "/images/services/website_design/website_devlopment_service.png",
    alt: "Waymark website development services",
    width: 446,
    height: 500,
  },
  items: [
    { icon: icons.developerReadyDesigns, label: "Frontend Development" },
    { icon: icons.backendDevelopment, label: "Backend Development" },
    { icon: icons.cmsSetup, label: "CMS Setup" },
    { icon: icons.performanceOptimization, label: "Performance Optimization" },
    { icon: icons.qaTesting, label: "QA and Testing" },
    { icon: icons.deployment, label: "Deployment or Publishing Support" },
    { icon: icons.usabilityTestingMark, label: "Maintenance Support" },
  ],
};

// "Why Web Design and Development Should Work Together" band: case for keeping
// design and code under one team — the headline leads white with the rest on
// the CTA gradient, then the two supporting lines and four outcome cards.
export const websiteDesignWhyTogether = {
  heading: {
    lead: "Why Web Design and",
    highlight: ["Development Should Work", "Together"],
  },
  intro:
    "When design and code are planned together, you get fewer delays and a better site. Designers know what is possible. Developers know why each choice was made.",
  footnote:
    "That is why our web design and development work happens in one team, from the first sketch to the final launch.",
  features: [
    {
      icon: icons.clock3,
      title: "Fewer Project Delays",
      description:
        "When design and code are planned together, you get fewer delays and a better site. Designers know what is possible. Developers know why each choice was made.",
    },
    {
      icon: icons.cpu,
      title: "Feasible Innovation",
      description:
        "Creative UI ideas are backed immediately by engineering feasibility, ensuring animations and layouts perform smoothly.",
    },
    {
      icon: icons.target,
      title: "Purpose-Driven Intent",
      description:
        "Every line of code preserves the original UX context, ensuring visitor interactions drive business objectives.",
    },
    {
      icon: icons.sparkles,
      title: "Flawless Polish",
      description:
        "Pixel-perfect execution across responsive mobile screens and desktop monitors without visual compromises.",
    },
  ],
};

// "Built for different business needs" band: copy of the shared `designServices`
// line-up — centred gradient headline, promise paragraphs, then a numbered
// gallery of the business types a website can be built for. SEED — intro, body
// and item copy are placeholders to confirm with the approved service line-up;
// item imagery reuses the shared service captures until the studio supplies
// website-build captures.
export const websiteDesignBusinessNeeds = {
  heading: { lead: "Built Web For Different", highlight: "Business Needs" },
  intro:
    "Websites built to fit the way a business actually works. Every build starts from what that business needs to do — then shape, code and copy follow it.",
  body: "From local service businesses to growing startups, we build the right website for each business.",
  items: [
    {
      number: "01",
      title: "Local & Service Businesses",
      body: "A clear storefront that turns local searches into booked jobs and answered calls.",
      image: {
        src: "/images/services/website_design/build_web_Image01.png",
        alt: "Waymark website build for a local service business",
        width: 620,
        height: 350,
      },
    },
    // SEED — placeholder copy for items 05–08 and beyond.
    {
      number: "02",
      title: "E-commerce",
      body: "Storefronts built to sell — fast load times, clear product pages, and a checkout that works.",
      image: {
        src: "/images/services/website_design/build_web_Image02.png",
        alt: "Waymark e-commerce website build",
        width: 620,
        height: 350,
      },
    },
    // SEED
    {
      number: "03",
      title: "Startups & SaaS",
      body: "Product-led websites that explain what you do, prove value, and turn visitors into sign-ups.",
      image: {
        src: "/images/services/website_design/build_web_Image03.png",
        alt: "Waymark SaaS website build",
        width: 620,
        height: 350,
      },
    },
    // SEED
    {
      number: "04",
      title: "Corporate & B2B",
      body: "Credible, informative sites that carry trust across departments and win business.",
      image: {
        src: "/images/services/website_design/build_web_Image04.png",
        alt: "Waymark corporate website build",
        width: 620,
        height: 350,
      },
    },
    // SEED
    {
      number: "05",
      title: "Real Estate",
      body: "Property-focused sites that make listings easy to browse and enquiries easy to make.",
      image: {
        src: "/images/services/website_design/build_web_Image05.png",
        alt: "Waymark real estate website build",
        width: 620,
        height: 350,
      },
    },
    // SEED
    {
      number: "06",
      title: "Hospitality & Restaurants",
      body: "Menus, bookings, and locations that bring guests in and keep them coming back.",
      image: {
        src: "/images/services/website_design/build_web_Image06.png",
        alt: "Waymark hospitality website build",
        width: 620,
        height: 350,
      },
    },
    // SEED
    {
      number: "07",
      title: "Nonprofits & Community",
      body: "Purpose-driven sites that raise visibility, explain impact, and move supporters to act.",
      image: {
        src: "/images/services/website_design/build_web_Image07.png",
        alt: "Waymark nonprofit website build",
        width: 620,
        height: 350,
      },
    },
    // SEED
    {
      number: "08",
      title: "Portfolio & Creatives",
      body: "Showcase sites that let the work speak and turn visitors into clients.",
      image: {
        src: "/images/services/website_design/build_web_Image08.png",
        alt: "Waymark portfolio website build",
        width: 620,
        height: 350,
      },
    },
  ],
};
