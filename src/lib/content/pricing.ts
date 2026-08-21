// Pricing page content (C3.6, FR-16). Tier and benefit data moved here from
// home.ts so the pricing page owns it; the home teaser imports the same
// arrays. Figures are ranges or honest starting points — never the
// template's dummy $29/$39/$49 (implementation plan §5).
import type { ServiceFaq } from "@/lib/content/services";

export interface PricingTier {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  highlighted?: boolean;
}

// SEED: replace each "From $[X]" with a real starting figure when known.
export const pricingTiers: PricingTier[] = [
  {
    name: "Design sprint",
    price: "From $[X]", // SEED
    period: "fixed scope",
    description:
      "A focused engagement to de-risk one problem before you commit to a full build.",
    features: [
      "UX audit with prioritised findings",
      "Usability-tested prototype",
      "Fixed-quote proposal for delivery",
    ],
  },
  {
    name: "Product build",
    price: "From $[X]", // SEED
    period: "per project",
    description:
      "Strategy, UI/UX, and development for a complete website, app, or SaaS platform.",
    features: [
      "Discovery, design, and build",
      "Weekly demos throughout",
      "Launch and post-launch support",
    ],
    highlighted: true,
  },
  {
    name: "Monthly partner",
    price: "From $[X]", // SEED
    period: "per month",
    description:
      "An ongoing senior team for iteration, new features, and improvements after launch.",
    features: [
      "Rolling backlog of improvements",
      "Direct access to the team",
      "Pause or cancel monthly",
    ],
  },
];

export const pricingBenefits = [
  { icon: "ClipboardCheck", text: "Scoped and priced before we start" },
  { icon: "BadgeCheck", text: "No hidden fees" },
  { icon: "KeyRound", text: "You own everything we make" },
];

export const pricingHeader = {
  eyebrow: "Pricing",
  title: "Engagement models, priced up front",
  description:
    "Three ways to work with Waymark — each one scoped in writing before any work starts.",
};

// FR-16 guidance text: how the figures should be read.
export const pricingGuidance = {
  eyebrow: "How pricing works",
  title: "No teaser rates, no hourly drift",
  body: "Every project is scoped individually after a free discovery call. You receive a written proposal with a fixed price and timeline before work starts — the figures below are honest starting points for typical scopes.",
};

/** CTA used on every tier card of the full pricing page. */
export const pricingPageCta = {
  label: "Book a discovery call",
};

export const pricingFaqHeading = {
  eyebrow: "FAQ",
  title: "Pricing questions, answered plainly",
  description: "How fixed quotes, changes, and payments actually work.",
};

export const pricingFaqs: ServiceFaq[] = [
  {
    question: "Why fixed price instead of hourly?",
    answer:
      "Fixed prices reward efficiency and remove your risk. You approve scope and cost before we start; if scope changes, we agree a written change order first.",
  },
  {
    question: "What happens if the scope changes?",
    answer:
      "We flag it early, price the change, and you decide whether it ships now or later. No silent overruns.",
  },
  {
    question: "Do you require a deposit?",
    answer:
      "Yes — a deposit books the team's time, with the balance tied to milestones. Exact terms are set out in the proposal.", // SEED: confirm terms with account owner
  },
  {
    question: "Is there a minimum engagement?",
    answer:
      "The design sprint is our smallest fixed-scope engagement. For ongoing work, monthly partnerships flex to the backlog you actually have.",
  },
];
