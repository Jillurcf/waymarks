// Home page content (M2). Sections follow the template's index.html order —
// see docs/implementation-plan.md §4 M2. Copy rules: .skill/waymark-ui-ux/
// content.md (calm, concrete, ≤ 3-sentence paragraphs, ≤ 10-word headlines).

// Block 1 — Hero.
export const hero = {
  eyebrow: "Digital product studio",
  headlineLead: "We turn complex ideas into",
  headlineAccent: "clear digital products",
  subhead:
    "Waymark partners with startups and growing businesses on strategy, UI/UX design, and development — turning ideas into products people actually want to use.",
  primaryCta: "Get started",
  phoneBoxLabel: "Prefer to talk?",
  // Floating service pill over the hero visual (template .hero-tag).
  tag: "UI/UX design", // SEED: swap for the service you want spotlighted
  // Rotating circular badge linking to the contact page (template
  // .explore-more-circle). The text repeats around the ring.
  exploreLabel: "Explore more",
};

// Block 2 — Client logo ticker.
// SEED CONTENT: only include logos Waymark can actually show. If the roster is
// small, delete entries — a thin logo bar hurts more than none. This doubles
// as the fallback: text wordmarks rendered from real client names.
export const clientLogos: string[] = [
  "[Client 01]",
  "[Client 02]",
  "[Client 03]",
  "[Client 04]",
];

export const logoBarLabel = "Trusted by teams building with us";

// Block 3 — About intro.
export const aboutIntro = {
  eyebrow: "About us",
  title: "Small studio, senior hands",
  description:
    "Waymark is a compact product studio. You work directly with the people designing and building your product — no layers in between.",
  features: [
    {
      icon: "UserCheck",
      title: "Senior-only team",
      body: "The people who scope your project are the people who deliver it — no junior handoffs.",
    },
    {
      icon: "Target",
      title: "Built for outcomes",
      body: "Every project starts from the metric it must move: signups, checkout completion, retention.",
    },
  ],
  cta: { label: "More about Waymark", href: "/about" },
};

// Block 4 — Services rows.
export const servicesSection = {
  eyebrow: "Services",
  title: "Six ways we take products forward",
  description:
    "From first sketch to shipped product — pick one service or the whole journey.",
  closingBar: {
    highlight: "Free",
    text: "discovery call — tell us what you're building and we'll scope it with you.",
    ctaLabel: "Book a discovery call",
  },
};

// Block 5 — What we do.
export const whatWeDo = {
  eyebrow: "What we do",
  title: "From problem to polished product",
  description:
    "One connected team covers the whole journey — so nothing gets lost between strategy, design, and code.",
  items: [
    {
      title: "Strategy & UX research",
      body: "Interviews, journey mapping, and prototypes tested with real users — so we build the right thing before building the thing right.",
    },
    {
      title: "Interface design & build",
      body: "Design systems and production-ready front-end code, so what ships matches what was designed.",
    },
  ],
  cta: { label: "More about our approach", href: "/about" },
};

// Block 6 — Why Waymarks.
export const whyHeading = {
  eyebrow: "Why Waymarks",
  title: "One team, start to finish",
  description:
    "What working with a smaller, focused studio actually changes — compared with a traditional agency.",
};

export const differentiators = [
  {
    icon: "Users",
    title: "One Team, Start to Finish",
    description:
      "No handoffs between disconnected vendors — strategy, design, and development stay connected from day one.",
  },
  {
    icon: "MessagesSquare",
    title: "Direct Access to the People Doing the Work",
    description:
      "You work with the actual designers and developers on your project, not just an account manager relaying messages.",
  },
  {
    icon: "Gauge",
    title: "Built for Speed",
    description:
      "Smaller, focused teams mean faster decisions and shorter timelines than most traditional agencies.",
  },
  {
    icon: "FileCheck",
    title: "Fixed Quotes, Written Scope",
    description:
      "You approve scope and price before work starts — no hourly drift, no surprise invoices.",
  },
];

// Block 7 — Featured work heading.
export const featuredWorkHeading = {
  eyebrow: "Selected work",
  title: "Proof before promises",
  description:
    "A few of the projects that show how we think, scope, and ship.",
  viewAll: { label: "See all work", href: "/work" },
};

// Block 8 — How we work.
export const processHeading = {
  eyebrow: "How we work",
  title: "No black box",
  description:
    "Three steps from first call to launch — you always know where things stand.",
};

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
  bullets: string[];
}

export const processSteps: ProcessStep[] = [
  {
    step: "01",
    title: "Discovery call",
    description:
      "A free call to understand your goals, constraints, and whether we're the right fit.",
    bullets: ["Goals & constraints", "Audience & scope", "Success metrics"],
  },
  {
    step: "02",
    title: "Proposal & scope",
    description:
      "You get a clear plan in writing before any work starts.",
    bullets: ["Fixed price & timeline", "Deliverables list", "Milestone schedule"],
  },
  {
    step: "03",
    title: "Design & build",
    description:
      "Weekly demos while we design and build — and support after launch.",
    bullets: [
      "Usability-tested prototypes",
      "Weekly check-ins",
      "Launch & post-launch support",
    ],
  },
];

// Block 10 — Pricing teaser. Tier/benefit data lives in pricing.ts (the
// pricing page owns it); only the home-specific heading and teaser CTA
// remain here.
export const pricingHeading = {
  eyebrow: "Pricing",
  title: "What does a project cost?",
  description:
    "No hidden quotes. Every project starts with a free discovery call to scope exact requirements and give you a fixed price — no surprises.",
};

// Teaser CTA — every tier card links to the full pricing page.
export const pricingTeaserCta = { label: "Compare tiers", href: "/pricing" };

// Block 12 — FAQ (objection handling). Keep answers 1–2 sentences. The
// visible text below is also emitted as FAQPage JSON-LD verbatim.
export const faqHeading = {
  eyebrow: "FAQ",
  title: "Answers before you have to ask",
  description:
    "The questions most clients ask before booking a call.",
};

export interface Faq {
  question: string;
  answer: string;
}

export const faqs: Faq[] = [
  {
    question: "What if I don't have a clear brief yet?",
    answer:
      "That's normal — most clients start with a rough idea. Our discovery process helps define scope, priorities, and requirements before any design work begins.",
  },
  {
    question: "How is this different from hiring a freelancer?",
    answer:
      "A freelancer gives you one skill set. Waymark gives you a connected team — strategy, design, and development working together — without you having to coordinate multiple people yourself.",
  },
  {
    question: "What if I already have a development team?",
    answer:
      "We can work alongside your existing team, handling design or strategy while your developers build — or hand off production-ready designs and specs for your team to implement.",
  },
  {
    question: "How long does a typical project take?",
    answer:
      "A typical website or design project runs six to ten weeks from kickoff to launch; larger products take longer. You'll get a specific timeline after the discovery call.",
  },
  {
    question: "What happens after launch?",
    answer:
      "We offer post-launch support and can continue as an ongoing partner for updates, iteration, and new features as your product grows.",
  },
];

// Block 13 — Blog teaser.
export const blogTeaser = {
  eyebrow: "From the blog",
  title: "Notes from real projects",
  viewAll: { label: "Visit the blog", href: "/blog" },
  readMore: "Read article",
  emptyState: {
    title: "First articles are in the works",
    body: "We're writing up what we've learned from recent projects. Got a question you'd like answered?",
    ctaLabel: "Ask us directly",
  },
};

// Final CTA + lead form (used by the contact flow; the home page ends at the
// blog teaser per the M2 block list — the footer carries the closing CTA).
export const finalCta = {
  eyebrow: "Start the conversation",
  title: "Have an Idea? Let's Make It Real.",
  description: "Tell us what you're building. We'll respond within [X hours].",
  bookCallLabel: "Book a Free Call Directly",
  orLabel: "— or fill out the form below —",
  submitLabel: "Submit",
  successTitle: "Thanks — we've got it.",
  successBody:
    "We'll get back to you within one business day. If it's urgent, email hello@waymarks.agency directly.",
};

export const formOptions = {
  services: [
    "Web Design",
    "UI/UX",
    "Branding",
    "MVP",
    "SaaS Design",
    "Not Sure Yet",
  ],
  budgets: [
    "Under $5K",
    "$5K – $10K",
    "$10K – $25K",
    "$25K+",
    "Not sure yet",
  ],
};
