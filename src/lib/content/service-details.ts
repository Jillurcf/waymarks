// Service detail route copy (one page per service under /services/[slug]).
// Separate from services.ts, which holds the services *overview* copy. The
// overview CTAs point here, so each entry owns its canonical path and the route
// map derives its sitemap/breadcrumb entries from this list.
//
// Voice follows .skill/waymark-ui-ux/content.md and the "Template: service"
// shape: hero → why it matters → design services → methodology → FAQs → CTA.
//
// This module deliberately imports only leaf content (icons.ts for the icon
// names, site.ts for the booking link and brand facts). routes.ts imports *from*
// here to register the routes, so importing home.ts or routes.ts back would
// create an initialisation cycle.

import { icons } from "./icons";
import type { Cta } from "./home";
import { bookCallHref, site } from "./site";

export interface ServiceDetailFaq {
  question: string;
  answer: string;
}

export interface ServiceDetailStep {
  title: string;
  description: string;
}

/** Step with its own number, for bands that render it in a marker. */
export interface ServiceDetailNumberedStep extends ServiceDetailStep {
  number: string;
}

/** Image reference with its intrinsic size, so every `img` can reserve space. */
export interface ServiceDetailImage {
  src: string;
  alt: string;
  width: number;
  height: number;
}

export interface ServiceDetail {
  /** Canonical path for this service, with the trailing slash the export adds. */
  path: string;
  slug: string;
  title: string;
  seoTitle: string;
  seoDescription: string;
  /** Hero eyebrow label shown next to the service mark. */
  hero: {
    label: string;
    /** Display headline, one entry per rendered line. */
    title: string[];
    intro: string;
    body: string;
    image: ServiceDetailImage;
    cta: Cta;
    /** Secondary hero action; renders as an outline button without an icon. */
    secondaryCta?: Cta;
  };
  /**
   * Two-column rationale band: the headline states why the service matters, the
   * closing phrase carries the CTA gradient, and the trailing column argues the
   * case in one lead line plus a supporting paragraph.
   */
  whyItMatters: {
    /** Headline split in two — `lead` renders white, `highlight` as gradient. */
    heading: { lead: string; highlight: string };
    lead: string;
    body: string;
  };
  /**
   * Consistency band: the headline states the rule, the two paragraphs argue it,
   * and `touchpoints` are the places the brand has to hold — icon plus label, no
   * supporting copy.
   */
  brandEverywhere: {
    /** Headline split in two — `lead` renders white, `highlight` as gradient. */
    heading: { lead: string; highlight: string };
    lead: string;
    body: string;
    touchpoints: { title: string; icon: string }[];
  };
  /**
   * Service line-up band: the headline names the discipline, the two paragraphs
   * state the promise, and `items` are the individual design services, numbered
   * in the order they are delivered.
   */
  designServices: {
    /** Headline split in two — `lead` renders white, `highlight` as gradient. */
    heading: { lead: string; highlight: string };
    intro: string;
    body: string;
    items: { number: string; title: string; body: string; image: ServiceDetailImage }[];
  };
  /**
   * Proof band: the headline states the claim, the paragraph sets it up, and
   * `items` are the six most recent identity projects — image plus the short
   * project name shown under it.
   */
  recentWork: {
    /** Headline split in two — `lead` renders white, `highlight` as gradient. */
    heading: { lead: string; highlight: string };
    body: string;
    items: { title: string; image: ServiceDetailImage }[];
  };
  /**
   * Deliverables band: the headline states what the client gets — white lead,
   * gradient middle phrase, white tail — and the trailing column lists the five
   * handover deliverables behind a glass tick.
   */
  whatYouReceive: {
    /** Headline in three parts — `lead` and `tail` white, `highlight` gradient. */
    heading: { lead: string; highlight: string; tail: string };
    items: string[];
  };
  /**
   * Identity process band: the framed headline names the process, and the five
   * steps run in a single row below it — the number marker sits on the frame's
   * top rule, so the line of circles reads as one waymarked route. Stacks to a
   * single column on mobile.
   */
  designProcess: {
    /** Headline split in two — `lead` renders white, `highlight` as gradient. */
    heading: { lead: string; highlight: string };
    steps: ServiceDetailNumberedStep[];
  };
  /**
 * Audience band: the visual leads in the left column, and the trailing column
 * states who the service is for — the audience lines, then one CTA.
 */
  whoItsFor: {
    title: string;
    /** One line per audience type. */
    points: string[];
    cta: Cta;
    image: ServiceDetailImage;
  };
  process: ServiceDetailStep[];
  faqs: ServiceDetailFaq[];
  /** Band that closes the page before the site-wide CTA. */
  closing: { title: string; body: string; cta: Cta };
}

export const serviceDetails: ServiceDetail[] = [
  {
    path: "/services/brand-design/",
    slug: "brand-design",
    title: "Brand Design & Identity",
    seoTitle: "Brand Design & Identity Services | Waymarks",
    seoDescription:
      "Brand identity systems built to be used — logo suite, colour and typography, voice, and the guidelines and templates your team needs to stay consistent.",
    hero: {
      label: "Brand Design & Identity",
      title: ["Brand Identity Design That People Remember"],
      intro:
        "We build identity systems that hold up beyond the launch: on every deck, every product screen, every post.",
      body: "Strategy, design, and the documentation that keeps it consistent.",
      image: {
        src: "/images/services/service_brand_details_hero.png",
        alt: "Waymark brand identity system for a client launch",
        width: 528,
        height: 440,
      },
      cta: { label: "Book a discovery call", href: bookCallHref, icon: icons.arrowRight },
    },
    whyItMatters: {
      heading: { lead: "Why Brand Identity", highlight: "Design Matters" },
      lead: "People decide fast. A clear brand helps them understand who you are and why they should trust you.",
      body: "Strong brand identity design gives you one look and one voice. That makes every ad, page, and message feel like it comes from the same business.",
    },
brandEverywhere: {
      heading: { lead: "A Brand Should", highlight: "Work Everywhere" },
      lead: "Your brand needs to work on your website, on social media, in presentations, on packaging, in ads, and inside apps.",
      body: "We create flexible brand systems that stay consistent at every touchpoint. That is the goal of good brand identity design.",
      touchpoints: [
        { title: "Website", icon: icons.website },
        { title: "Social Media", icon: icons.socialMedia },
        { title: "Presentations", icon: icons.presentations },
        { title: "Packaging", icon: icons.packaging },
        { title: "Ads", icon: icons.ads },
        { title: "Apps", icon: icons.mobileApp },
      ],
    },
    designServices: {
      heading: { lead: "Our Brand Identity", highlight: "Design Services" },
      intro:
        "A strong brand identity starts with purposeful design. We create distinctive logos, colour systems, typography, and visual assets that give your brand a clear, consistent, and memorable presence.",
      body: "We create cohesive brand identities that connect with your audience, build credibility, and support long-term growth.",
      items: [
        {
          number: "01",
          title: "Logo Design",
          body: "A clear visual mark designed around your brand. Build a brand people recognise, trust, and remember.",
          image: {
            src: "/images/services/design-servic01.png",
            alt: "Logo design artwork from a Waymark client identity",
            width: 620,
            height: 350,
          },
        },
        {
          number: "02",
          title: "Visual Identity",
          body: "Colors, fonts, images, graphics, and supporting elements that fit together.",
          image: {
            src: "/images/services/design-servic02.png",
            alt: "Brand identity system applied across brand touchpoints",
            width: 620,
            height: 350,
          },
        },
        {
          number: "03",
          title: "Brand Strategy",
          body: "Your positioning, personality, and message, defined before design begins.",
          image: {
            src: "/images/services/design-servic03.png",
            alt: "Brand guidelines document pages from a Waymark handover",
            width: 620,
            height: 350,
          },
        },
        {
          number: "04",
          title: "Brand Guidelines",
          body: "Simple rules that help your team use the brand the same way every time.",
          image: {
            src: "/images/services/design-servic04.png",
            alt: "Editable brand templates for social and presentations",
            width: 620,
            height: 350,
          },
        },
        {
          number: "05",
          title: "Marketing Materials",
          body: "Business cards, presentations, social media assets, and ad materials.",
          image: {
            src: "/images/services/design-servic05.png",
            alt: "Brand voice and messaging framework from a Waymark project",
            width: 620,
            height: 350,
          },
        },
        {
          number: "06",
          title: "Illustration System",
          body: "Custom illustration styles that make your message more distinctive.",
          image: {
            src: "/images/services/design-servic06.png",
            alt: "Brand voice and messaging framework from a Waymark project",
            width: 620,
            height: 350,
          },
        },
        {
          number: "07",
          title: "Mascot Design",
          body: "Character systems that give your brand personality.",
          image: {
            src: "/images/services/design-servic07.png",
            alt: "Brand voice and messaging framework from a Waymark project",
            width: 620,
            height: 350,
          },
        },
        {
          number: "08",
          title: "Campaigning Design",
          body: "Creative systems for launches, promotions, and campaigns.",
          image: {
            src: "/images/services/design-servic08.png",
            alt: "Brand voice and messaging framework from a Waymark project",
            width: 620,
            height: 350,
          },
        },
        {
          number: "09",
          title: "Motion Design",
          body: "Motion graphics that bring your brand to life.",
          image: {
            src: "/images/services/design-servic09.png",
            alt: "Brand voice and messaging framework from a Waymark project",
            width: 620,
            height: 350,
          },
        },
        {
          number: "10",
          title: "Social Media Kit",
          body: "Ready to use branded assets for your social channels.",
          image: {
            src: "/images/services/design-servic10.png",
            alt: "Brand voice and messaging framework from a Waymark project",
            width: 620,
            height: 350,
          },
        },
      ],
    },
    recentWork: {
      heading: { lead: "Recent", highlight: "Brand Work" },
      body: "Six identities shipped in the last year, each built around a different problem.",
      items: [
        {
          title: "",
          image: {
            src: "/images/services/recent_brand_work01.png",
            alt: "Packaging artwork for the Vegetable Focused produce brand",
            width: 757,
            height: 404,
          },
        },
        // SEED — placeholder project names; confirm real client titles before ship.
        {
          title: "Vegetable Focused",
          image: {
            src: "/images/services/recent_brand_work02.png",
            alt: "Identity artwork for a recent Waymark brand project",
            width: 443,
            height: 400,
          },
        },
        // SEED
        {
          title: "Real State",
          image: {
            src: "/images/services/recent_brand_work03.png",
            alt: "Identity artwork for a recent Waymark brand project",
            width: 400,
            height: 362,
          },
        },
        // SEED
        {
          title: "Real State",
          image: {
            src: "/images/services/recent_brand_work04.png",
            alt: "Identity artwork for a recent Waymark brand project",
            width: 400,
            height: 362,
          },
        },
        // SEED
        {
          title: "Dress the Vibe",
          image: {
            src: "/images/services/recent_brand_work05.png",
            alt: "Identity artwork for a recent Waymark brand project",
            width: 650,
            height: 400,
          },
        },
        // SEED
        {
          title: "Dress the Vibe",
          image: {
            src: "/images/services/recent_brand_work06.png",
            alt: "Identity artwork for a recent Waymark brand project",
            width: 546,
            height: 400,
          },
        },
      ],
    },
    whatYouReceive: {
      heading: {
        lead: "What You Receive From",
        highlight: "Our Brand Identity",
        tail: "Design",
      },
      items: [
        "Logo files in every format you need",
        "Editable source files for every lockup",
        "Colour and typography tokens for product and web",
        "Guidelines your team can follow without us",
        "Social and presentation templates ready to edit",
      ],
    },
    designProcess: {
      heading: { lead: "Our Brand Identity", highlight: "Design Process" },
      steps: [
        {
          number: "01",
          title: "Discover",
          description: "We learn about your business, market, audience, and competitors.",
        },
        {
          number: "02",
          title: "Define",
          description: "We set your positioning, personality, and visual direction.",
        },
        {
          number: "03",
          title: "Create",
          description: "We develop concepts, identity elements, and supporting assets.",
        },
        {
          number: "04",
          title: "Refine",
          description: "We review the direction together and improve it with your feedback.",
        },
        {
          number: "05",
          title: "Deliver",
          description: "You receive the final identity system and all brand assets.",
        },
      ],
    },
    whoItsFor: {
      title: "Who This Is For",
      points: [
        "Startups that need a first brand.",
        "Growing companies that need a fresh look.",
        "Established businesses that want a clear, modern identity across every channel.",
      ],
      cta: { label: "Talk to our brand team", href: bookCallHref, icon: icons.arrowRight },
      image: {
        src: "/images/services/who_this_for.png",
        alt: "Brand identity artwork for a Waymark client project",
        width: 620,
        height: 500,
      },
    },
    process: [
      {
        title: "Discover",
        description:
          "We interview your team, review what you have, and agree what the brand has to achieve.",
      },
      {
        title: "Define",
        description:
          "Positioning, audience, and message hierarchy. We write it down before anything is drawn.",
      },
      {
        title: "Design",
        description:
          "Two identity routes, refined with you into one system of mark, colour, type, and language.",
      },
      {
        title: "Systemise",
        description:
          "Tokens, templates, and guidelines — tested on real assets before handover.",
      },
    ],
    faqs: [
      {
        question: "We already have a logo. Can you build around it?",
        answer:
          "Yes. We audit what you have, then design the wider system around it — or redraw the mark first if it is holding the identity back.",
      },
      {
        question: "Do you write the brand copy too?",
        answer:
          "We write the messaging framework and tone rules. Longer brand narratives are drafted with your team so the language stays yours.",
      },
      {
        question: "What do we get at handover?",
        answer:
          "Final artwork in every format you need, editable source files, design tokens, templates, and the guidelines document.",
      },
      {
        question: "How long does a brand identity take?",
        answer:
          "Most identities run four to eight weeks from kick-off to handover. A rebrand of an established brand usually sits at the longer end.",
      },
    ],
    closing: {
      title: "Ready to look more like yourself?",
      body: "Tell us where the brand is today and where it needs to go. We will tell you honestly what a rebrand costs and what it buys.",
      cta: { label: "Book a discovery call", href: bookCallHref, icon: icons.arrowRight },
    },
  },
  {
    path: "/services/ui-ux-design/",
    slug: "ui-ux-design",
    title: "UI/UX Design",
    seoTitle: "UI/UX Design Services | Waymarks",
    seoDescription:
      "UI/UX design that makes digital products easier to use — research, planning, design, and testing so users move through your product with less confusion and more confidence.",
    hero: {
      label: "UI/UX Design",
      title: ["UI/UX Design", "That Makes", "Digital Products", "Easier To Use"],
      intro:
        "Good design helps people know what to do next. As a UI/UX design agency, we research, plan, design, and test your product so users move through it with less confusion and more confidence.",
      body: "We make digital experiences easier to understand, easier to navigate, and easier to love.",
      // Studio hero visual for the UI/UX route (528 × 604 portrait).
      image: {
        src: "/images/services/UIUX/UI_UX_Hero.png",
        alt: "Waymark UI/UX design work on a digital product",
        width: 528,
        height: 604,
      },
      cta: { label: "Start a project", href: bookCallHref, icon: icons.arrowRight },
      secondaryCta: { label: "Explore Our Work", href: "#recent-work" },
    },
    whyItMatters: {
      heading: { lead: "Why UI/UX Design", highlight: "Matters" },
      lead: "People judge software in seconds. If they cannot find the next step, they leave — and confusion costs you sign-ups, sales, and support time.",
      body: "UI/UX design removes the guesswork. Clear screens, obvious actions, and a logical flow keep users moving forward and coming back.",
    },
    brandEverywhere: {
      heading: { lead: "A Product Should", highlight: "Work Everywhere" },
      lead: "The same ease needs to hold on your website, in your app, on a dashboard, and through every onboarding and checkout flow.",
      body: "We design a coherent product experience that stays simple and consistent at every touchpoint users meet.",
      touchpoints: [
        { title: "Websites", icon: icons.website },
        { title: "Mobile Apps", icon: icons.mobileApp },
        { title: "SaaS Platforms", icon: icons.saas },
        { title: "Dashboards", icon: icons.uiUx },
        { title: "Onboarding", icon: icons.discover },
        { title: "Notifications", icon: icons.improve },
      ],
    },
    designServices: {
      heading: { lead: "Our UI/UX", highlight: "Design Services" },
      intro:
        "Great products start with understanding users, then shape every screen around what they need to do next. We research, structure, design, and test so the result is both useful and beautiful.",
      body: "We design product experiences that feel simple, feel natural, and help users get things done.",
      items: [
        {
          number: "01",
          title: "UX Research",
          body: "User interviews, analytics, and market context that ground every design decision.",
          image: {
            src: "/images/services/design-servic01.png",
            alt: "Interview and research notes from a Waymark UX project",
            width: 620,
            height: 350,
          },
        },
        // SEED — placeholder artwork; confirm screen captures for each service.
        {
          number: "02",
          title: "User Flows",
          body: "The routes users take, mapped before any screen is designed.",
          image: {
            src: "/images/services/design-servic02.png",
            alt: "User flow diagram from a Waymark UX project",
            width: 620,
            height: 350,
          },
        },
        // SEED
        {
          number: "03",
          title: "Wireframes",
          body: "Low-fidelity layouts that agree structure and hierarchy fast.",
          image: {
            src: "/images/services/design-servic03.png",
            alt: "Low-fidelity wireframes from a Waymark UX project",
            width: 620,
            height: 350,
          },
        },
        // SEED
        {
          number: "04",
          title: "UI Design",
          body: "High-fidelity screens with colour, typography, and motion that match your brand.",
          image: {
            src: "/images/services/design-servic04.png",
            alt: "Final UI screens from a Waymark UX project",
            width: 620,
            height: 350,
          },
        },
        // SEED
        {
          number: "05",
          title: "Design System",
          body: "Reusable components and tokens that keep every future screen consistent.",
          image: {
            src: "/images/services/design-servic05.png",
            alt: "Design tokens and component library from a Waymark UX project",
            width: 620,
            height: 350,
          },
        },
        // SEED
        {
          number: "06",
          title: "Prototyping",
          body: "Clickable prototypes that make the experience feel real before build.",
          image: {
            src: "/images/services/design-servic06.png",
            alt: "Interactive prototype preview from a Waymark UX project",
            width: 620,
            height: 350,
          },
        },
        // SEED
        {
          number: "07",
          title: "Usability Testing",
          body: "Real users, real tasks, and a short list of fixes that go into the design.",
          image: {
            src: "/images/services/design-servic07.png",
            alt: "Usability test session notes from a Waymark UX project",
            width: 620,
            height: 350,
          },
        },
        // SEED
        {
          number: "08",
          title: "Interaction Design",
          body: "Micro-interactions and transitions that make a product feel responsive.",
          image: {
            src: "/images/services/design-servic08.png",
            alt: "Interaction design states from a Waymark UX project",
            width: 620,
            height: 350,
          },
        },
        // SEED
        {
          number: "09",
          title: "Accessibility",
          body: "Contrast, keyboard, and screen-reader checks so no one is left out.",
          image: {
            src: "/images/services/design-servic09.png",
            alt: "Accessibility audit checklist from a Waymark UX project",
            width: 620,
            height: 350,
          },
        },
        // SEED
        {
          number: "10",
          title: "Developer Handoff",
          body: "Specced, organised files your engineers can build from without guesswork.",
          image: {
            src: "/images/services/design-servic10.png",
            alt: "Handoff-ready design files from a Waymark UX project",
            width: 620,
            height: 350,
          },
        },
      ],
    },
    recentWork: {
      heading: { lead: "Recent", highlight: "UX Work" },
      body: "Six digital products shipped in the last year, each designed around a different user problem.",
      items: [
        {
          title: "Vegetable Focused",
          image: {
            src: "/images/services/recent_brand_work01.png",
            alt: "Product screens for a recently shipped Waymark experience",
            width: 757,
            height: 404,
          },
        },
        // SEED — placeholder projects; confirm real product names and screens before ship.
        {
          title: "SEED Project Two",
          image: {
            src: "/images/services/recent_brand_work02.png",
            alt: "Product screens for a recently shipped Waymark experience",
            width: 443,
            height: 400,
          },
        },
        // SEED
        {
          title: "SEED Project Three",
          image: {
            src: "/images/services/recent_brand_work03.png",
            alt: "Product screens for a recently shipped Waymark experience",
            width: 400,
            height: 362,
          },
        },
        // SEED
        {
          title: "SEED Project Four",
          image: {
            src: "/images/services/recent_brand_work04.png",
            alt: "Product screens for a recently shipped Waymark experience",
            width: 400,
            height: 362,
          },
        },
        // SEED
        {
          title: "SEED Project Five",
          image: {
            src: "/images/services/recent_brand_work05.png",
            alt: "Product screens for a recently shipped Waymark experience",
            width: 650,
            height: 400,
          },
        },
        // SEED
        {
          title: "SEED Project Six",
          image: {
            src: "/images/services/recent_brand_work06.png",
            alt: "Product screens for a recently shipped Waymark experience",
            width: 546,
            height: 400,
          },
        },
      ],
    },
    whatYouReceive: {
      heading: {
        lead: "What You Receive From",
        highlight: "Our UI/UX",
        tail: "Design",
      },
      items: [
        "Journey maps and user flow documents",
        "Wireframes and clickable prototypes",
        "A scalable UI kit and design system",
        "Usability test notes and fixes",
        "Developer-ready specs for handoff",
      ],
    },
    designProcess: {
      heading: { lead: "Our UI/UX", highlight: "Design Process" },
      steps: [
        {
          number: "01",
          title: "Discover",
          description: "We learn about your users, goals, and the problems in the current product.",
        },
        {
          number: "02",
          title: "Define",
          description: "We set the flows, hierarchy, and success measures for the experience.",
        },
        {
          number: "03",
          title: "Create",
          description: "We design screens and prototypes, screen by screen, flow by flow.",
        },
        {
          number: "04",
          title: "Refine",
          description: "We test with real users and tighten the design with your feedback.",
        },
        {
          number: "05",
          title: "Deliver",
          description: "You receive the final UI and the system your team can keep building from.",
        },
      ],
    },
    whoItsFor: {
      title: "Who This Is For",
      points: [
        "Startups launching a first digital product.",
        "Product teams that need a simpler, clearer experience.",
        "Businesses that want more sign-ups and fewer support questions.",
      ],
      cta: { label: "Talk to our UX team", href: bookCallHref, icon: icons.arrowRight },
      image: {
        src: "/images/services/who_this_for.png",
        alt: "UX design artwork for a Waymark client project",
        width: 620,
        height: 500,
      },
    },
    process: [
      {
        title: "Discover",
        description:
          "We interview users, review the data, and agree what the product has to help people achieve.",
      },
      {
        title: "Define",
        description:
          "Flows, information hierarchy, and success measures — agreed before any screen is drawn.",
      },
      {
        title: "Design",
        description:
          "Wireframes to hi-fi UI, iterated with you and tested with real users along the way.",
      },
      {
        title: "Deliver",
        description:
          "Specced screens plus a design system, handed over so your team can build without guesswork.",
      },
    ],
    faqs: [
      {
        question: "We already have a product. Can you improve it?",
        answer:
          "Yes. We audit the current flows, find where users drop off, and redesign the parts that cost you sign-ups and support time.",
      },
      {
        question: "Do you test the designs with real users?",
        answer:
          "We prototype the key flows and run short moderated tests, then feed the findings straight back into the design.",
      },
      {
        question: "Do you design for our developers?",
        answer:
          "Every screen ships with specs, tokens, and a component list your engineers can build from — nothing is left to guesswork.",
      },
      {
        question: "How long does UI/UX design take?",
        answer:
          "A focused design sprint runs two to four weeks; a full product experience typically runs six to ten weeks from research to handoff.",
      },
    ],
    closing: {
      title: "Ready to make your product easier to use?",
      body: "Tell us what your users get stuck on today. We will show you exactly what a clearer experience looks like and what it costs.",
      cta: { label: "Book a discovery call", href: bookCallHref, icon: icons.arrowRight },
    },
  },
];

/**
 * Section copy shared by every service detail page. Only service-specific
 * material lives on each entry above; the band headings live here once so the
 * template stays consistent as services are added.
 */
export const serviceDetailSections = {
  process: { eyebrow: "Methodology", title: "How it works" },
  faq: {
    title: "Questions we get asked",
    body: "Still unsure whether this is the right fit? Ask us directly and we will answer honestly.",
    ctaLabel: "Ask us anything",
  },
} as const;

export function findServiceDetail(slug: string): ServiceDetail | undefined {
  return serviceDetails.find((service) => service.slug === slug);
}

/** schema.org Service node for a detail route. `@context` is supplied once by
 *  the page, which composes these into a single `@graph`. */
export function serviceJsonLd(service: ServiceDetail) {
  return {
    "@type": "Service",
    name: service.title,
    description: service.seoDescription,
    serviceType: service.title,
    url: `${site.domain}${service.path}`,
    provider: {
      "@type": "ProfessionalService",
      name: site.name,
      url: site.domain,
      telephone: site.phone,
      areaServed: site.region,
    },
  };
}

/** FAQPage node for the FAQs on a detail route; `@context` comes from the page. */
export function serviceFaqJsonLd(faqs: ServiceDetailFaq[]) {
  return {
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };
}