// About route copy. /about is its own page in the route map
// (src/lib/routes.ts), so its strings live here rather than in home.ts. Voice
// follows .skill/waymark-ui-ux/content.md: clear, calm, UK spelling.

import { icons, startProjectCta, type Cta } from "./home";
import { routeHref } from "../routes";

export const aboutSeo = {
  title: "About Waymarks | A Global Digital Studio",
  description:
    "Waymarks is a global digital studio headquartered in Dubai, serving disruptive founders and forward-thinking enterprises across North America, Europe, and Asia.",
} as const;

/** A single figure in the hero's presence panel. `tone` picks the value colour
 *  token so the component never hard-codes it. */
export interface AboutStat {
  value: string;
  label: string;
  tone: "light" | "accent";
}

export const aboutPageHero = {
  label: "About",
  labelIcon: icons.aboutUs,
  title:
    "A Global Digital Studio That Brings Ideas, People, And Technology Together",
  lead: "Waymarks is a global digital studio built on one simple belief:",
  body: "Good ideas become powerful when the right people work together to make them real.",
  // One primary action per section (content.md rule 5); the secondary is a
  // quieter outline that points at the contact route.
  primaryCta: startProjectCta,
  secondaryCta: {
    label: "Meet the Team",
    href: routeHref("/contact/"),
  } as Cta,
  // Right column — global presence note above the studio figures.
  presence: {
    icon: icons.aboutUsHero,
    title: "Global Digital Presence",
    body: "Headquartered in Dubai, serving disruptive founders and forward-thinking enterprises across North America, Europe, and Asia.",
  },
  stats: [
    { value: "15+", label: "Years Experience", tone: "light" },
    { value: "2026", label: "Official Launch", tone: "accent" },
  ] as readonly AboutStat[],
} as const;

// ---------------------------------------------------------------------------
// About Us section
//
// Sits directly below the hero: a two-line headline — white lead, CTA-gradient
// close — over the studio's wide "about us" image. Copy follows content.md
// (calm, UK spelling, headline ≤ 10 words).
// ---------------------------------------------------------------------------

export const aboutUsSection = {
  heading: {
    lead: "About Us",
    highlight: "The People Behind the Work.",
  },
  body: "Waymark is a global digital studio where strategy, design, and engineering meet. We partner with founders and teams to turn complex ideas into products people are glad to use.",
  // Wide banner (1280 × 700). Plain img: images.unoptimized makes next/image
  // pure overhead (quality gate C).
  image: {
    src: "/images/about_us/aboutus.png",
    alt: "The Waymark studio, the people behind the work.",
    width: 1280,
    height: 700,
  },
} as const;

// ---------------------------------------------------------------------------
// Identity & Capabilities section
//
// Sits directly below About Us: a centred eyebrow + gradient headline + lead
// paragraph, then two capability cards — the studio itself and the distributed
// network — each with a Figma mark, a note, and a green glass tick list.
// ---------------------------------------------------------------------------

/** One of the two capability cards below the lead paragraph. */
export interface IdentityCapability {
  icon: string;
  title: string;
  body: string;
  points: readonly string[];
}

export const identityCapabilities = {
  label: "Identity & Capabilities",
  title: "Who We Are",
  intro:
    "We are a global digital studio and creative team. We help businesses with branding, UI/UX, websites, digital products, and growth.",
  cards: [
    {
      icon: icons.creativePowerhouse,
      title: "Creative Powerhouse & Studio",
      body: "We are a global digital studio and creative team. We help businesses with branding, UI/UX, websites, digital products, and growth.",
      points: [
        "Brand Identity & Visual Systems",
        "UI/UX & Product Experience Design",
        "Custom Web & App Development",
      ],
    },
    {
      icon: icons.talentNetwork,
      title: "Distributed Talent Network",
      body: "Our teams work remotely across many locations. That lets us choose the right people for each project, regardless of geographical boundaries.",
      points: [
        "Hand-picked specialized talent for every brief",
        "Seamless cross-time-zone collaboration",
        "Agile, transparent communication channels",
      ],
    },
  ] as readonly IdentityCapability[],
} as const;

// ---------------------------------------------------------------------------
// What Makes Our Global Digital Studio Different section
//
// Sits directly below Identity & Capabilities: the same numbered-step band as
// the contact route, with an about-specific headline — white lead, CTA-gradient
// studio name, white close.
// ---------------------------------------------------------------------------

export const aboutDifference = {
  heading: {
    lead: "What Makes Our",
    highlight: "Global Digital Studio",
    trail: "Different",
  },
} as const;

// ---------------------------------------------------------------------------
// Nature hill banner
//
// Sits directly below What Makes Our Global Digital Studio Different: a single
// full-width image, no heading or copy. Plain img: images.unoptimized makes
// next/image pure overhead (quality gate C).
// ---------------------------------------------------------------------------

export const aboutNature = {
  image: {
    src: "/images/about_us/nature_hill_img.png",
    alt: "Rolling green hills under an open sky.",
    width: 1280,
    height: 450,
  },
} as const;

// ---------------------------------------------------------------------------
// Evolution & Legacy section
//
// Sits directly below the nature hill banner: a two-line headline — white
// lead, CTA-gradient close — over an alternating timeline of studio
// milestones. Each marker uses a lucide icon; `side` alternates the card
// across the centre line.
// ---------------------------------------------------------------------------

/** A single milestone on the Evolution & Legacy timeline. */
export interface EvolutionMilestone {
  year: string;
  title: string;
  description: string;
  icon: "lightbulb" | "handshake" | "compass" | "rocket";
  side: "left" | "right";
}

export const evolutionTimeline = {
  heading: {
    lead: "Evolution & Legacy",
    highlight: "Our Story",
  },
  lead: "The timeline of patience, learning, and visionary creation.",
  caption: "~ 15 Years Ago",
  milestones: [
    {
      year: "~ 15 Years Ago",
      title: "The Spark of Innovation",
      description:
        "A small vision emerged, building a venture that brought creativity, design, and digital innovation together into one cohesive force.",
      icon: "lightbulb",
      side: "left",
    },
    {
      year: "2022",
      title: "Meeting of Minds",
      description:
        "Sohel met Rasheduzzaman while working together at the same company, discovering a shared passion for exceptional design and engineering standards.",
      icon: "handshake",
      side: "right",
    },
    {
      year: "2023",
      title: "Foundations Laid",
      description:
        "Recognising their complementary skills and shared values, they decided to combine forces and officially build Waymarks together.",
      icon: "compass",
      side: "left",
    },
    {
      year: "2026",
      title: "Waymarks Takes Flight",
      description:
        "After years of patience, learning, and hard work, Waymarks officially launched its global studio model to empower brands worldwide.",
      icon: "rocket",
      side: "right",
    },
  ] as readonly EvolutionMilestone[],
} as const;

// ---------------------------------------------------------------------------
// Design Thinking image band
//
// Sits directly below Evolution & Legacy: a quiet two-column collage with no
// heading or copy. Two landscape frames stack on the left, one tall frame sits
// on the right.
// ---------------------------------------------------------------------------

/** A single frame in the Design Thinking image band. */
export interface DesignThinkingImage {
  src: string;
  alt: string;
  width: number;
  height: number;
}

export const designThinkingImages = {
  stacked: [
    {
      src: "/images/about_us/design_thinking.png",
      alt: "A design thinking workshop in progress.",
      width: 624,
      height: 336,
    },
    {
      src: "/images/about_us/design_thinking01.png",
      alt: "Design thinking ideation sketches and notes.",
      width: 624,
      height: 336,
    },
  ] as readonly DesignThinkingImage[],
  tall: {
    src: "/images/about_us/design_thinking02.png",
    alt: "A design thinking board capturing the process.",
    width: 624,
    height: 700,
  } as DesignThinkingImage,
} as const;

// ---------------------------------------------------------------------------
// Leadership section
//
// Sits directly below the Design Thinking image band: a white eyebrow, a
// gradient headline, an intro paragraph, one row of two founder cards, and a
// closing principle statement beside a brand left rule.
// ---------------------------------------------------------------------------

/** A single founder card in the Leadership section. */
export interface Founder {
  name: string;
  role: string;
  quote: string;
  image: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
}

export const leadership = {
  label: "Leadership",
  heading: "Meet The Founders",
  intro:
    "Guided by experience, purpose, and relentless pursuit of excellence.",
  founders: [
    {
      name: "S A M Eiahia Sohel",
      role: "Founder & Technology Lead",
      quote:
        "Great software is built on clarity, collaboration, and high technical standards. At Waymarks, we turn complexity into seamless digital execution.",
      image: {
        src: "/images/about_us/Eiahia.png",
        alt: "Portrait of S A M Eiahia Sohel, Founder & Technology Lead.",
        width: 80,
        height: 80,
      },
    },
    {
      name: "Rasheduzzaman",
      role: "Co-Founder & COO",
      quote:
        "Technology and strategy must serve human experiences. Our vision has always been to build a studio where creativity isn't just aesthetic, but functional and transformative.",
      image: {
        src: "/images/about_us/Rashed.png",
        alt: "Portrait of Rasheduzzaman, Co-Founder & COO.",
        width: 80,
        height: 80,
      },
    },
  ] as readonly Founder[],
} as const;

// ---------------------------------------------------------------------------
// Standards / Our Principles section
//
// Sits directly below the Leadership section: a copy of the
// `WebsiteDevelopmentServices` band — principle rows lead on the left behind
// their icons, while the right column carries the headline (white "Standards",
// gradient "Our Principles") with the body and visual beneath it.
// SEED — heading, body, image and item labels below are placeholders for the
// studio to replace with the approved principles line-up.
// ---------------------------------------------------------------------------

/** A single principle row in the Standards section. */
export interface Principle {
  icon: string;
  label: string;
}

export const standardsPrinciples = {
  heading: { lead: "Standards", highlight: "Our Principles" },
  body: "Guiding principles that define how we operate every day.",
  image: {
    src: "/images/about_us/standards_principles.png",
    alt: "Waymarks principles visual",
    width: 446,
    height: 454,
  },
  // SEED — placeholder labels copied from the website development line-up.
  items: [
    { icon: icons.uniqueApproach, label: "Unique Approach" },
    { icon: icons.agileProcess, label: "Agile Processes" },
    { icon: icons.dataDriven, label: "Data Driven Decisions" },
    { icon: icons.collaborationMindset, label: "Collaborative Mindset" },
    { icon: icons.clientCentric, label: "Client Centric Focus" },
    { icon: icons.continuousInnovation, label: "Continuous Innovation" },
  ] as readonly Principle[],
} as const;

// ---------------------------------------------------------------------------
// Philosophy / What We Believe section
//
// Sits directly below the Standards section: a copy of the Standards band — the
// belief rows lead on the left behind their icons, while the right column
// carries the headline (white "Philosophy", gradient "What We Believe") with the
// body and visual beneath it.
// SEED — all copy, image and item labels below are placeholders copied from
// `standardsPrinciples` for the studio to replace with the approved content.
// ---------------------------------------------------------------------------

/** A belief row in the Philosophy section; an optional `body` adds a
 *  supporting paragraph beneath the icon + label row. */
export interface PhilosophyPrinciple {
  icon: string;
  label: string;
  body?: string;
}

export const philosophyPrinciples = {
  heading: { lead: "Philosophy", highlight: "What We Believe" },
  body: [
    "The core beliefs driving every pixel,",
    "line of code, and partnership.",
  ],
  image: {
    src: "/images/about_us/philosophy.png",
    alt: "Waymarks philosophy visual",
    width: 446,
    height: 815,
  },
  // SEED — remaining labels are placeholders.
  items: [
    {
      icon: icons.creativeNeeds,
      label: "Creativity Needs Strategy",
      body: "Great creative work starts with understanding. We align artistic vision with strategic business objectives from day one.",
    },
    {
      icon: icons.designShouldSolve,
      label: "Design Should Solve Problems",
      body: "Good design isn't just visually appealing; it makes something clearer, easier, or more useful for real human users.",
    },
    {
      icon: icons.technologyShouldHave,
      label: "Technology Should Have A Purpose",
      body: "We don't build tech for tech's sake. We engineer tailored technology to solve real business and user problems efficiently.",
    },
    {
      icon: icons.collaborationMakes,
      label: "Collaboration Makes Work Better",
      body: "Different views create stronger ideas. Diversity of thought and open communication fuel innovation.",
    },
    {
      icon: icons.growthShouldBe,
      label: "Growth Should Be Measurable",
      body: "Whenever possible, we connect creative work to real, quantifiable business results that justify your investment and propel momentum.",
    },
  ] as readonly PhilosophyPrinciple[],
} as const;
