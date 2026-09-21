// Services shown on the home page "What We Do" grid and linked to their
// dedicated service pages (see docs/content-guide.md sitemap).
// Icon is a lucide name; the section component maps it to a component.
//
// Detail-page fields (C3.3) follow the service template in
// .skill/waymark-ui-ux/content.md: outcome-led summary, concrete
// deliverables, a 3–4 step methodology, and 3 real questions.
export interface ServiceFaq {
  question: string;
  answer: string;
}

export interface ServiceStep {
  title: string;
  description: string;
}

export interface Service {
  slug: string;
  icon: string;
  title: string;
  summary: string;
  /** Short list shown on the service rows ("What we help with:"). */
  helpsWith: string[];
  /** Row CTA label, e.g. "Explore UI/UX Design". */
  exploreLabel: string;
  /** Entry copy for /services/[slug] (first paragraph renders as lead). */
  intro: string[];
  deliverables: string[];
  process: ServiceStep[];
  faqs: ServiceFaq[];
}

export const services: Service[] = [
  {
    slug: "ui-ux-design",
    icon: "PanelsTopLeft",
    title: "UI/UX Design",
    summary:
      "Turning research and user needs into interfaces people enjoy using.",
    helpsWith: [
      "User research",
      "Information architecture",
      "Wireframes",
      "Prototypes",
      "Usability testing",
      "Design systems",
    ],
    exploreLabel: "Explore UI/UX Design",
    intro: [
      "We design interfaces that make complex products feel obvious. Research, wireframes, and tested prototypes come before any visual polish — so decisions rest on evidence, not taste.",
      "You see work every week and can steer at every step. The result is a design your developers can build without guesswork, and your users don't need a manual for.",
    ],
    deliverables: [
      "UX research findings and user personas",
      "Journey maps and information architecture",
      "Wireframes for every key screen",
      "Usability-tested interactive prototypes",
      "A complete UI kit in Figma",
      "Developer-ready handover specs",
    ],
    process: [
      {
        title: "Discover",
        description:
          "Stakeholder interviews, analytics review, and user interviews to find where the product loses people.",
      },
      {
        title: "Design",
        description:
          "Flows, wireframes, then high-fidelity UI — reviewed with you in short cycles.",
      },
      {
        title: "Validate",
        description:
          "Moderated usability tests on the prototype; we fix what users stumble over before build.",
      },
      {
        title: "Deliver",
        description:
          "Dev-ready specs and a component library, plus support while your team builds.",
      },
    ],
    faqs: [
      {
        question: "Do you work with our existing designs?",
        answer:
          "Yes. We audit what you have, keep what works, and redesign only where the evidence says it's needed.",
      },
      {
        question: "Which tools do you design in?",
        answer:
          "Figma for design and prototyping, with moderated calls or Maze for usability testing.",
      },
      {
        question: "Can you test with our users?",
        answer:
          "Yes — we can run sessions with participants from your customer list or source them for you.",
      },
    ],
  },
  {
    slug: "brand-identity",
    icon: "Sparkles",
    title: "Brand Design & Identity",
    summary:
      "Visual identity systems that make a business instantly recognisable.",
    helpsWith: [
      "Brand strategy",
      "Logo systems",
      "Typography",
      "Colour",
      "Visual language",
      "Guidelines",
      "Marketing templates",
    ],
    exploreLabel: "Explore Brand Design",
    intro: [
      "A brand system is more than a logo. We define how your product looks, speaks, and behaves — then document it so every future asset stays consistent.",
      "Everything is built as a practical system: tokens, templates, and rules your team can apply without a designer standing by.",
    ],
    deliverables: [
      "Logo suite with usage rules",
      "Colour and typography system",
      "Iconography and illustration style",
      "Brand voice and messaging guide",
      "Templates for social, decks, and web",
      "A guidelines document your team will use",
    ],
    process: [
      {
        title: "Discover",
        description:
          "A positioning workshop covering audience, competitors, and what your brand should stand for.",
      },
      {
        title: "Create",
        description:
          "Distinct visual directions; we refine one together rather than presenting three half-baked options.",
      },
      {
        title: "Systemise",
        description:
          "The chosen direction becomes tokens, components, and templates across touchpoints.",
      },
      {
        title: "Document",
        description:
          "Guidelines and source files handed over, with a walkthrough session for your team.",
      },
    ],
    faqs: [
      {
        question: "We already have a logo. Can you build around it?",
        answer:
          "Yes. We often evolve an existing mark into a full identity system rather than starting again.",
      },
      {
        question: "Do you write brand copy?",
        answer:
          "We define voice and tone with example messaging; full copywriting can be added to the scope.",
      },
      {
        question: "What do we get at handover?",
        answer:
          "Source files, exported assets, and a guidelines document, walked through with your team.",
      },
    ],
  },
  {
    slug: "web-design-development",
    icon: "LayoutTemplate",
    title: "Web Design & Development",
    summary:
      "Websites built to communicate clearly and convert visitors into customers.",
    helpsWith: [
      "Website strategy",
      "UX",
      "Responsive design",
      "Custom development",
      "CMS integration",
      "Performance",
      "Analytics",
    ],
    exploreLabel: "Explore Web Design & Development",
    intro: [
      "We design and build marketing sites and web apps that load fast and convert. Design and code stay in one team, so nothing is lost in translation.",
      "Every build ships with a performance and accessibility pass, and analytics wired in so you can see how the site performs from day one.",
    ],
    deliverables: [
      "Sitemap and content plan",
      "High-fidelity responsive designs",
      "Next.js/React front-end build",
      "CMS integration when you need one",
      "Performance and accessibility pass",
      "Analytics events configured",
    ],
    process: [
      {
        title: "Plan",
        description:
          "Sitemap, content structure, and technical scope agreed before design starts.",
      },
      {
        title: "Design",
        description:
          "High-fidelity designs across breakpoints, reviewed page by page with you.",
      },
      {
        title: "Build",
        description:
          "Component-based front-end development with weekly demos on a staging link.",
      },
      {
        title: "Launch",
        description:
          "QA, redirects, analytics, and post-launch support once you're live.",
      },
    ],
    faqs: [
      {
        question: "Can you work with our developers?",
        answer:
          "Yes. We can hand over production-ready designs and specs, or build alongside your team.",
      },
      {
        question: "What do you build with?",
        answer:
          "Next.js and React, deployed static or server-rendered depending on what your product needs.",
      },
      {
        question: "Who writes the content?",
        answer:
          "You know your business best — we provide structure, direction, and editing so the copy lands.",
      },
    ],
  },
  {
    slug: "saas-product-design",
    icon: "Workflow",
    title: "SaaS & Product Design",
    summary:
      "Complex workflows made simple for SaaS platforms and internal tools.",
    helpsWith: [
      "Product audits",
      "Information architecture",
      "Dashboards",
      "Workflows",
      "Design systems",
      "Developer-ready handoff",
    ],
    exploreLabel: "Explore SaaS & Product Design",
    intro: [
      "Dashboards, workflows, and internal tools — we make dense products feel simple. We design from real user tasks, not feature lists.",
      "Work happens inside a documented design system, so every new screen stays consistent and your developers always know what to build next.",
    ],
    deliverables: [
      "Product audit with prioritised fixes",
      "Design system and component library",
      "Key-flow prototypes tested with users",
      "Data-dense screens: tables, charts, filters",
      "Developer handover specs",
      "Ongoing design support options",
    ],
    process: [
      {
        title: "Audit",
        description:
          "Heuristic review plus user interviews to rank what hurts usability most.",
      },
      {
        title: "Structure",
        description:
          "Information architecture, navigation, and the core flows users repeat daily.",
      },
      {
        title: "Design",
        description:
          "System-driven UI in sprints, each ending with a demo and your feedback.",
      },
      {
        title: "Support",
        description:
          "We stay through the build answering questions and iterating on real usage.",
      },
    ],
    faqs: [
      {
        question: "Our product is very complex. Is that a problem?",
        answer:
          "It's our favourite kind of problem — most of our work is simplifying dense, data-heavy tools.",
      },
      {
        question: "Can you adopt our existing design system?",
        answer:
          "Yes. We extend and document what exists before proposing anything new.",
      },
      {
        question: "Do you design dark mode?",
        answer:
          "Yes — themes are planned from the start as design tokens, not an afterthought.",
      },
    ],
  },
  {
    slug: "mvp-builds",
    icon: "Rocket",
    title: "MVP Development",
    summary:
      "From idea to a working, testable product without building everything at once.",
    helpsWith: [
      "MVP strategy",
      "Product scope",
      "UX",
      "UI",
      "Prototyping",
      "Development",
      "Testing",
      "Launch",
    ],
    exploreLabel: "Explore MVP Development",
    intro: [
      "We take founders from idea to a working product users can test. Fixed scope, fixed price, and a launch date we hold.",
      "The feature set is cut to one core workflow before any code is written — so budget goes on what proves the idea, not on everything imaginable.",
    ],
    deliverables: [
      "Scoped MVP feature set",
      "Clickable prototype for early feedback",
      "Full-stack build: front-end, API, database",
      "Deployment and monitoring setup",
      "A prioritised plan for post-launch iteration",
    ],
    process: [
      {
        title: "Scope",
        description:
          "We cut the idea to the smallest product that proves value — in writing, with a fixed price.",
      },
      {
        title: "Prototype",
        description:
          "A clickable prototype tested with target users before production code starts.",
      },
      {
        title: "Build",
        description:
          "Weekly increments on staging, so you watch the product appear.",
      },
      {
        title: "Launch",
        description:
          "Ship, measure against the metrics that matter, and draft the v1.1 roadmap together.",
      },
    ],
    faqs: [
      {
        question: "How fast can an MVP ship?",
        answer:
          "Typically six to ten weeks depending on scope — you get a firm date in the proposal.",
      },
      {
        question: "What tech stack do you use?",
        answer:
          "TypeScript end to end: React/Next.js front-end with a managed backend chosen per product.",
      },
      {
        question: "Do we own the code?",
        answer:
          "Yes. Everything is delivered to your repositories and your accounts.",
      },
    ],
  },
  {
    slug: "mobile-app-design",
    icon: "Smartphone",
    title: "Mobile App Design",
    summary:
      "Native and cross platform app experiences designed around real users and real devices.",
    helpsWith: [
      "Mobile UX",
      "User flows",
      "Prototypes",
      "Interface design",
      "Design systems",
      "Developer handoff",
    ],
    exploreLabel: "Explore Mobile App Design",
    intro: [
      "App design that survives real thumbs and real networks. We prototype on-device early, so gestures and flows feel right before any build starts.",
      "Every screen ships with its states — empty, loading, error — because that's where apps actually feel finished.",
    ],
    deliverables: [
      "Platform-appropriate UX patterns",
      "On-device clickable prototypes",
      "Complete screen inventory in Figma",
      "Empty, loading, and error states designed",
      "App store listing assets",
      "Design QA during development",
    ],
    process: [
      {
        title: "Discover",
        description:
          "Your users, your market, and the platform conventions each OS expects.",
      },
      {
        title: "Prototype",
        description:
          "Core flows prototyped on real devices early — gestures included.",
      },
      {
        title: "Design",
        description:
          "The full screen inventory with all states, built on a shared system.",
      },
      {
        title: "Support",
        description:
          "Design QA during the build so what ships matches what was designed.",
      },
    ],
    faqs: [
      {
        question: "iOS, Android, or both?",
        answer:
          "We design for both from one system, respecting each platform's conventions.",
      },
      {
        question: "Native or cross-platform?",
        answer:
          "We're pragmatic — the right choice depends on your team and roadmap, and we advise honestly.",
      },
      {
        question: "Can you build the app too?",
        answer:
          "For many apps, yes — we scope this after discovery. Otherwise we hand off specs your developers can build from.",
      },
    ],
  },
];

// Services overview page (C3.2). Heading overrides for the shared services
// rows; FAQ answers the questions prospects ask before choosing a service.
export const servicesPage = {
  header: {
    eyebrow: "Our services",
    title: "Strategy, design, and build under one roof",
    description:
      "Six services covering the full product journey. Pick one, or hand us the whole thing — every engagement starts with a free discovery call and a fixed quote.",
  },
  gridHeading: {
    eyebrow: "What we offer",
    title: "Six ways we take products forward",
    description:
      "From first sketch to shipped product — pick one service or the whole journey.",
  },
  faqHeading: {
    eyebrow: "FAQ",
    title: "Choosing a service",
    description: "How engagements are shaped, priced, and combined.",
  },
  faqs: [
    {
      question: "How do engagements usually start?",
      answer:
        "With a free discovery call. We scope goals and constraints, then send a written proposal with a fixed price and timeline.",
    },
    {
      question: "Can we combine services?",
      answer:
        "Yes — most projects mix research, design, and development. We shape the team around what your product needs.",
    },
    {
      question: "What if we only need design?",
      answer:
        "That works. We regularly deliver production-ready designs and specs for in-house or external developers to build.",
    },
  ] satisfies ServiceFaq[],
};
