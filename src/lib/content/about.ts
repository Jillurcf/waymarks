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
    src: "/images/Contact/aboutus.png",
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
    src: "/images/Contact/nature_hill_img.png",
    alt: "Rolling green hills under an open sky.",
    width: 1280,
    height: 450,
  },
} as const;
