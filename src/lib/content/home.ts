// Home page copy and data that is specific to the conversion-optimised layout.
// Sections 2–16 of the spec (see docs/implementation-plan.md).

export const hero = {
  eyebrow: "Digital product studio",
  headline: "We Design and Build Digital Products That Turn Users Into Customers",
  subhead:
    "Waymark partners with startups and growing businesses on strategy, UI/UX design, and development — turning ideas into products people actually want to use.",
  primaryCta: "Book a Free Strategy Call",
  secondaryCta: "See Our Work",
};

// Section 4 — Client Logo Bar.
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

// Section 6 — What We Do heading.
export const whatWeDo = {
  eyebrow: "What we do",
  title: "Capabilities under one roof",
  description:
    "Strategy, design, and development — one connected team, no handoffs.",
};

// Section 7 — Featured work heading.
export const featuredWorkHeading = {
  eyebrow: "Selected work",
  title: "Proof before promises",
  description:
    "A few of the projects that show how we think, scope, and ship.",
};

// Section 8 — Why Waymarks.
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
];

// Section 9 — How we work.
export const processHeading = {
  eyebrow: "How we work",
  title: "No black box",
  description:
    "What actually happens after you fill out the form — so there are no surprises.",
};

export const processSteps = [
  {
    step: "1",
    title: "Discovery Call",
    description:
      "We learn about your business, goals, and constraints. No obligation.",
  },
  {
    step: "2",
    title: "Proposal & Scope",
    description:
      "You get a clear plan: deliverables, timeline, and cost, in writing.",
  },
  {
    step: "3",
    title: "Design & Build",
    description:
      "Regular check-ins, not a black box — you see progress every step.",
  },
  {
    step: "4",
    title: "Launch & Support",
    description:
      "We stay involved post-launch to make sure it performs.",
  },
];

// Section 12 — Pricing transparency. Ranges are fine; exact numbers are not
// required. Replace each "From $[X]" with a real starting figure when known.
export const pricingHeading = {
  eyebrow: "Pricing",
  title: "What does a project cost?",
  description:
    "No hidden quotes. Every project starts with a free discovery call to scope exact requirements and give you a fixed price — no surprises.",
};

export const pricingRows = [
  { label: "Website Design & Development", from: "From $[X]" },
  { label: "UI/UX Design", from: "From $[X]" },
  { label: "MVP Development", from: "From $[X]" },
  { label: "SaaS Product Design", from: "From $[X]" },
];

// Section 13 — FAQ (objection handling). Keep answers 1–2 sentences. The
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
      "A focused website or design project typically takes [X-Y weeks]; larger SaaS or app projects can take [X-Y months]. You'll get a specific timeline after the discovery call.",
  },
  {
    question: "What happens after launch?",
    answer:
      "We offer post-launch support and can continue as an ongoing partner for updates, iteration, and new features as your product grows.",
  },
];

// Section 14 — Final CTA + lead form.
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