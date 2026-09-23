// Homepage (one-pager) copy for every section, mirroring the approved design
// reference "Waymarks Final Homepage Design.html" (the single canonical
// homepage design). Copy follows .skill/waymark-ui-ux/content.md: calm,
// concrete, outcome-led, UK English, one CTA per section. Every renderable
// string lives here so section components never inline copy.
//
// Structural choices that components make (grid columns, spacing, motion)
// stay out of this module; copy and link targets stay in.

import { site, socialLinks } from "./site";

// ---------------------------------------------------------------------------
// SEO metadata + JSON-LD
// ---------------------------------------------------------------------------

// Home route metadata (wired by page.tsx in Phase 5). Title/description mirror
// the design file's <head>. Meta keywords are deprecated by Google and not
// emitted; they are kept on record for brief/content use.
export const homeSeo = {
  title: "Digital Product Studio for Startups | Waymarks",
  description:
    "Waymarks is a global digital product studio for brands, websites, apps, and growth. Share your idea and let's start your project.",
  focusKeyword: "digital product studio",
  keywords: [
    "Digital product studio",
    "Digital design agency",
    "Digital product design",
    "Creative digital agency",
    "Global digital studio",
  ],
};

// ---------------------------------------------------------------------------
// Reusable snippets (buttons, icon metadata, anchors)
// ---------------------------------------------------------------------------

// lucide icon names used across sections. Components map these names to lucide
// components; keeping them as data means icon choice lives beside its copy.
export const icons = {
  strategy: "Globe",
  design: "ShieldCheck",
  technology: "Code",
  growth: "TrendingUp",
  brandIdentity: "Star",
  uiUx: "LayoutDashboard",
  website: "Monitor",
  saas: "Cloud",
  mvp: "Rocket",
  mobileApp: "Smartphone",
  digitalGrowth: "ChartPie",
  startups: "Zap",
  growingBusinesses: "ChartBar",
  saasTeams: "Layers",
  establishedCompanies: "Users",
  discover: "Search",
  define: "Diamond",
  create: "PenTool",
  review: "Eye",
  launch: "CircleCheckBig",
  improve: "TrendingUp",
  arrowRight: "ArrowRight",
  mail: "Mail",
} as const;

// On-page anchor targets (one-pager: nav and footer point into the page).
export const sectionAnchors = {
  studio: "#studio",
  services: "#services",
  work: "#work",
  blog: "#blog",
  contact: "#contact",
} as const;

export interface Cta {
  label: string;
  href: string;
  /** lucide icon name rendered beside the label; components map it. */
  icon?: string;
}

// Shared buttons. One primary action per section (content.md rule 5); the
// design reuses the same labels, so they are shared constants.
export const startProjectCta: Cta = {
  label: "Start a Project",
  href: sectionAnchors.contact,
  icon: icons.arrowRight,
};

export const startProjectMailtoCta: Cta = {
  label: "Start a Project",
  href: `mailto:${site.email}`,
  icon: icons.arrowRight,
};

export const exploreWorkCta: Cta = { label: "Explore Our Work", href: sectionAnchors.work };

export const viewCaseStudyCta: Cta = {
  label: "View Case Study",
  href: sectionAnchors.contact,
  icon: icons.arrowRight,
};

export const learnMoreCta: Cta = {
  label: "Learn More",
  href: sectionAnchors.contact,
  icon: icons.arrowRight,
};

export const exploreAllServicesCta: Cta = { label: "Explore All Services", href: sectionAnchors.services };

// ---------------------------------------------------------------------------
// 1. Hero
// ---------------------------------------------------------------------------

export const hero = {
  title: "Digital Product Studio That Turns Ideas Into Real Results",
  subhead:
    "Waymarks is a global digital product studio. We help startups, growing businesses, and large companies turn ideas into brands, websites, apps, and growth plans.",
  body: "Our remote teams bring strategy, design, technology, and marketing together. The result is digital work that people understand, trust, and remember.",
  tagline: "Think. Create. Deliver.",
  proof: "Trusted by 100+ businesses across 12+ countries.",
  primaryCta: startProjectCta,
  secondaryCta: exploreWorkCta,
  // Animated W logo stage (Phase 4 renders Waymarks_Logo-01.png in a framed,
  // floating container). Alt text lives here; the asset path is component data.
  logo: { alt: "Waymarks logo" },
};

// ---------------------------------------------------------------------------
// 2. Proof — verified client testimonials
// ---------------------------------------------------------------------------

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
  initials: string;
}

export const testimonialsSection = {
  eyebrow: "Verified Client Testimonials",
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "Waymarks completely revolutionised our SaaS user flow. Retention skyrocketed within two months.",
    author: "Marcus Vance",
    role: "Head of Product",
    company: "TechScale",
    initials: "MV",
  },
  {
    quote:
      "Having strategy, UI/UX, and development under one roof eliminated months of back-and-forth.",
    author: "Elena Rostova",
    role: "Founder",
    company: "Lumina Retail",
    initials: "ER",
  },
  {
    quote:
      "Their team executed our complete digital overhaul seamlessly across time zones.",
    author: "Tariq Al-Mansoor",
    role: "Managing Director",
    company: "Enterprise Hub",
    initials: "TA",
  },
];

// ---------------------------------------------------------------------------
// 3. Connected studio bento — strategy, design, technology, growth
// ---------------------------------------------------------------------------

export interface IconFeature {
  icon: string;
  title: string;
  description: string;
}

export const studioSection = {
  title: "One Digital Product Studio for Strategy, Design, and Growth",
  intro:
    "Good digital work is never just about how it looks. It starts with understanding your business, your customers, and the problem you want to solve.",
  body: "At our digital product studio, every team joins from day one. That keeps your strategy, brand, product, website, and marketing working as one connected experience.",
  features: [
    {
      icon: icons.strategy,
      title: "Strategy",
      description:
        "We learn about your goals, market, customers, and competitors before we create anything.",
    },
    {
      icon: icons.design,
      title: "Design",
      description: "We turn ideas into clear, useful, and memorable experiences.",
    },
    {
      icon: icons.technology,
      title: "Technology",
      description: "We build reliable digital products that work on every device and platform.",
    },
    {
      icon: icons.growth,
      title: "Growth",
      description: "We help you reach the right people and turn attention into action.",
    },
  ],
};

// ---------------------------------------------------------------------------
// 4. Capabilities — chips
// ---------------------------------------------------------------------------

export const capabilitiesSection = {
  title: "One Team From First Idea To Final Launch",
  intro: "You should not have to explain your business to five different agencies.",
  body: "Our digital product studio brings branding, UI/UX design, web development, and digital marketing together. That means fewer gaps, faster answers, and a team that sees the big picture.",
  subheading: "What We Can Build For You",
  chips: [
    "Brand identities",
    "Websites",
    "Web applications",
    "Mobile applications",
    "SaaS products",
    "MVPs",
    "Digital marketing systems",
    "Growth campaigns",
  ],
};

// ---------------------------------------------------------------------------
// 5. Services grid
// ---------------------------------------------------------------------------

export interface Service {
  icon: string;
  title: string;
  summary: string;
  cta: Cta;
}

export const servicesSection = {
  title: "Our Services",
  intro:
    "Pick one service from our digital product studio or combine several. Each one is built to work with the others.",
  items: [
    {
      icon: icons.brandIdentity,
      title: "Brand Design & Identity",
      summary: "Create a clear, distinctive brand that people recognise and remember.",
      cta: learnMoreCta,
    },
    {
      icon: icons.uiUx,
      title: "UI/UX Design",
      summary: "Design digital experiences that are simple to understand and easy to use.",
      cta: learnMoreCta,
    },
    {
      icon: icons.website,
      title: "Website Design & Development",
      summary:
        "Build websites that explain your value, load fast, and help visitors take action.",
      cta: learnMoreCta,
    },
    {
      icon: icons.saas,
      title: "SaaS & Product Design",
      summary: "Turn complicated workflows into simple, useful digital products.",
      cta: learnMoreCta,
    },
    {
      icon: icons.mvp,
      title: "MVP Development",
      summary:
        "Turn an idea into a working product you can test, learn from, and improve.",
      cta: learnMoreCta,
    },
    {
      icon: icons.mobileApp,
      title: "Mobile App Design",
      summary: "Create mobile experiences that feel natural and match your brand.",
      cta: learnMoreCta,
    },
    {
      icon: icons.digitalGrowth,
      title: "Digital Growth",
      summary:
        "Use SEO, content, social media, email, and analytics to build steady momentum.",
      cta: learnMoreCta,
    },
  ],
  exploreAll: exploreAllServicesCta,
};

// ---------------------------------------------------------------------------
// 6. Segment focus
// ---------------------------------------------------------------------------

export interface Segment {
  icon: string;
  title: string;
  description: string;
}

export const segmentsSection = {
  title: "A Digital Product Studio Built Around Your Business",
  intro:
    "Every business is different, so our digital product studio does not start with a fixed template. We start with your situation.",
  items: [
    {
      icon: icons.startups,
      title: "For Startups",
      description:
        "You have an idea and need to test it fast. We help you shape it, design it, and launch it.",
    },
    {
      icon: icons.growingBusinesses,
      title: "For Growing Businesses",
      description:
        "Your brand or website may have fallen behind. We help you refresh it and reach more customers.",
    },
    {
      icon: icons.saasTeams,
      title: "For SaaS Teams",
      description:
        "Your product may feel crowded or confusing. We help you make it clear and easy to use.",
    },
    {
      icon: icons.establishedCompanies,
      title: "For Established Companies",
      description:
        "You may need a new digital direction. We help you plan, design, and deliver it with less risk.",
    },
  ],
};

// ---------------------------------------------------------------------------
// 7. Stats counters
// ---------------------------------------------------------------------------

export interface Stat {
  /** Numeric target for the animated counter. */
  value: number;
  /** Rendered directly after the counted figure, e.g. "+". */
  suffix: string;
  label: string;
  description: string;
}

export const statsSection = {
  title: "Global Team. Remote Collaboration. Local Understanding.",
  intro:
    "Waymarks works through remote teams in many locations. Our specialists cover branding, UI/UX, development, marketing, motion, AI, and client support.",
  body: "This lets our digital product studio build the right team for each project, instead of limiting you to one office or one skill set.",
  subheading: "Experience Across Markets",
  items: [
    {
      value: 12,
      suffix: "+",
      label: "Countries",
      description:
        "We work with businesses and brands in different markets and regions.",
    },
    {
      value: 100,
      suffix: "+",
      label: "Businesses",
      description:
        "We support businesses with branding, digital products, and growth.",
    },
    {
      value: 450,
      suffix: "+",
      label: "Ideas",
      description:
        "We turn concepts into brand identities and digital experiences.",
    },
    {
      value: 25,
      suffix: "+",
      label: "Industries",
      description:
        "We bring experience from many industries and business models.",
    },
  ],
};

// ---------------------------------------------------------------------------
// 8. Featured case study
// ---------------------------------------------------------------------------

export const caseStudySection = {
  title: "Selected Work From Our Digital Product Studio",
  intro:
    "A good case study should show more than a final screenshot. It should explain the problem, the thinking, the work, and what changed.",
  client: "Weavers Furnishing Ltd.",
  body: "A full digital transformation that combined brand strategy, UX/UI design, website development, SEO, and design systems.",
  results: [
    "27% increase in user engagement",
    "55% improved retention rate",
    "64% reported revenue increase",
  ],
  cta: viewCaseStudyCta,
  // Copy inside the browser-frame thumbnail visual.
  thumbnail: {
    url: "weavers.co.uk",
    wordmark: "WEAVERS",
    badge: "E-COMMERCE",
    title: "Crafting Timeless Home Furnishings",
    blurb:
      "Elevating interior elegance through bespoke artisanal textiles & custom decor.",
    primaryButton: "Shop Collection",
    secondaryButton: "Explore Catalog",
  },
};

// ---------------------------------------------------------------------------
// 9. Process
// ---------------------------------------------------------------------------

export interface ProcessStep {
  step: string;
  icon: string;
  title: string;
  description: string;
}

export const processSection = {
  title: "How We Work",
  intro: "Here is how our digital product studio takes a project from first idea to launch.",
  steps: [
    {
      step: "01",
      icon: icons.discover,
      title: "Discover",
      description: "We learn about your business, audience, goals, and challenges.",
    },
    {
      step: "02",
      icon: icons.define,
      title: "Define",
      description: "We turn what we learn into a clear direction and scope.",
    },
    {
      step: "03",
      icon: icons.create,
      title: "Create",
      description: "Our specialists design, build, and develop the solution.",
    },
    {
      step: "04",
      icon: icons.review,
      title: "Review",
      description: "You see progress, share feedback, and stay involved.",
    },
    {
      step: "05",
      icon: icons.launch,
      title: "Launch",
      description: "We get everything ready and help you go live with confidence.",
    },
    {
      step: "06",
      icon: icons.improve,
      title: "Improve",
      description: "We keep supporting you with optimisation, marketing, and development.",
    },
  ],
};

// ---------------------------------------------------------------------------
// 10. Why choose us
// ---------------------------------------------------------------------------

export interface Reason {
  title: string;
  description: string;
}

export const whyUsSection = {
  title: "Why Businesses Choose Our Digital Product Studio",
  intro: "Here is what sets our digital product studio apart.",
  items: [
    {
      title: "Senior Thinking",
      description:
        "Experienced people work on your project. You do not get layers of extra communication.",
    },
    {
      title: "Connected Services",
      description:
        "Brand, design, development, and growth work together instead of separately.",
    },
    {
      title: "Flexible Teams",
      description: "We build the team around what you actually need.",
    },
    {
      title: "Clear Communication",
      description:
        "You always know what is happening, what is next, and where your project stands.",
    },
    {
      title: "Global Delivery",
      description:
        "Our remote setup lets us work with clients across countries and time zones.",
    },
    {
      title: "Long Term Thinking",
      description:
        "We do not see projects as one time jobs. We build relationships around steady improvement.",
    },
  ],
};

// ---------------------------------------------------------------------------
// 11. FAQ
// ---------------------------------------------------------------------------

export interface Faq {
  question: string;
  answer: string;
}

export const faqSection = {
  title: "Frequently Asked Questions",
  intro: "Everything you need to know about working with our digital product studio.",
  items: [
    {
      question: "What does Waymarks do?",
      answer:
        "Waymarks is a global digital product studio. We offer branding, UI/UX design, website design and development, SaaS and product design, MVP development, mobile app design, and digital growth services.",
    },
    {
      question: "Is Waymarks a Dubai based agency?",
      answer:
        "Yes. Waymarks is based in Dubai and works with clients across many markets and regions.",
    },
    {
      question:
        "Why choose a digital product studio instead of separate freelancers?",
      answer:
        "A digital product studio keeps strategy, design, development, and marketing under one plan. You explain your goals once, and one team carries them through to launch.",
    },
    {
      question: "Does Waymarks work with international clients?",
      answer:
        "Yes. We have worked across 12+ countries and 25+ industries.",
    },
    {
      question: "Can Waymarks handle a complete digital project?",
      answer:
        "Yes. Depending on your needs, we can support strategy, branding, UX/UI, development, launch, and growth.",
    },
    {
      question: "Can you work with our existing team?",
      answer:
        "Yes. We can work as an extension of your team or take charge of one part of your project.",
    },
  ],
};

// Schema.org data per the design file's JSON-LD @graph. FAQ answers are built
// from faqSection.items so schema always matches visible copy. page.tsx dumps
// homeJsonLd verbatim in Phase 5. Declared after faqSection so module
// initialisation order stays valid.
export const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${site.domain}/#organization`,
  name: "Waymarks",
  url: `${site.domain}/`,
  logo: `${site.domain}/Waymarks_Logo-01.png`,
  description: homeSeo.description,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Dubai",
    addressCountry: "AE",
  },
  email: site.email,
};

export const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${site.domain}/#website`,
  url: `${site.domain}/`,
  name: "Waymarks",
  publisher: { "@id": `${site.domain}/#organization` },
};

export const homeJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    organizationJsonLd,
    websiteJsonLd,
    {
      "@type": "FAQPage",
      mainEntity: faqSection.items.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: { "@type": "Answer", text: item.answer },
      })),
    },
  ],
};

// ---------------------------------------------------------------------------
// 12. Final CTA banner
// ---------------------------------------------------------------------------

export const finalCtaSection = {
  title: "Have an Idea? Let's Make It Real.",
  body: "Tell us what you are building, what is not working, or where you want to go next. Our digital product studio will help you find the right next step.",
  primaryCta: startProjectMailtoCta,
  secondaryCta: exploreWorkCta,
};

// ---------------------------------------------------------------------------
// 13. Footer
// ---------------------------------------------------------------------------

export interface FooterLink {
  label: string;
  href: string;
}

export const footer = {
  about: {
    title: "Global Digital Innovation & Creative Studio",
    body: "We bring strategy, creativity, technology, and growth together to help businesses create better digital experiences.",
    socials: socialLinks,
  },
  servicesColumn: {
    title: "Services",
    links: [
      { label: "Brand Design & Identity", href: sectionAnchors.services },
      { label: "UI/UX Design", href: sectionAnchors.services },
      { label: "Website Design & Development", href: sectionAnchors.services },
      { label: "SaaS & Product Design", href: sectionAnchors.services },
      { label: "MVP Development", href: sectionAnchors.services },
      { label: "Mobile App Design", href: sectionAnchors.services },
      { label: "Digital Growth", href: sectionAnchors.services },
    ],
  },
  companyColumn: {
    title: "Company",
    // Design lists About/Our Team/Pricing/Blog here, but the one-pager has no
    // such sections — dead links never ship. About retargets to the studio
    // bento; only real section anchors remain (per the Phase 1 wipe).
    links: [
      { label: "About", href: sectionAnchors.studio },
      { label: "Our Work", href: sectionAnchors.work },
      { label: "Contact", href: sectionAnchors.contact },
    ],
  },
  workWithUs: {
    title: "Work With Us",
    highlights: [
      "Global team",
      "Remote collaboration",
      "Flexible project teams",
      "Long term partnerships",
    ],
    contactLabel: "Contact",
    contactIcon: icons.mail,
    email: site.email,
  },
  // Static-safe newsletter (FR-23): hidden until a static-compatible endpoint
  // exists, matching the shared site.ts newsletter flag.
  newsletter: {
    enabled: false,
    title: "Subscribe to our newsletter",
    placeholder: "Enter your email",
    submitLabel: "Join",
  },
  tagline: "Global team. Remote collaboration. Digital experiences without borders.",
  legal: {
    copyright: `© ${new Date().getFullYear()} Waymarks. All rights reserved.`,
    links: [
      { label: "Privacy Policy", href: "#privacy" },
      { label: "Terms of Use", href: "#terms" },
    ],
  },
};