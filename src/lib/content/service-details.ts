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