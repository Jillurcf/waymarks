// Home page content. Copy follows .skill/waymark-ui-ux/content.md (calm,
// concrete, outcome-led) and the approved homepage SEO spec: keyword coverage
// for "digital product studio Dubai", research-backed proof numbers, and a
// section order that mirrors the conversion path. Content is typed here so the
// page never inlines copy.

// SEO metadata for the home route (page.tsx consumes homeSeo.title/description).
// Relevant keywords are documented here for brief/content use — meta keywords
// are not emitted (deprecated by Google). The focus keyword "digital product
// studio Dubai" is carried in copy below (hero subhead and closing CTA).
export const homeSeo = {
  title: "Digital Product Studio Dubai | Waymark",
  description:
    "Waymark is a digital product studio in Dubai helping startups and growing businesses design, build and launch better digital products.",
  focusKeyword: "digital product studio Dubai",
  keywords: [
    "Digital product design",
    "Product design studio Dubai",
    "UI/UX design agency Dubai",
    "Digital product development",
  ],
};

// Block 1 — Hero.
export const hero = {
  eyebrow: "Digital product studio in Dubai",
  headlineLead: "We turn complex ideas into",
  headlineAccent: "clear digital products",
  subhead:
    "Waymark is a digital product studio in Dubai helping startups and growing businesses turn ideas, challenges and complicated workflows into digital experiences people understand and enjoy using.",
  subheadTwo:
    "From brand identity and websites to SaaS products, MVPs and mobile apps, we bring strategy, design and development together under one roof.",
  ctaLead: "Let's build something clear.",
  primaryCta: "Book a discovery call",
  phoneBoxLabel: "Prefer to talk?",
  // Floating service pill over the hero visual (template .hero-tag).
  tag: "UI/UX design", // SEED: swap for the service you want spotlighted
  // Rotating circular badge linking to the contact page.
  exploreLabel: "Explore more",
};

// Block 2 — Positioning: "Good products should not need explaining".
export const claritySection = {
  eyebrow: "Clarity first",
  title: "Good products should not need explaining",
  leads: [
    "Your product might be powerful.",
    "Your business might have a great idea behind it.",
    "But if people do not understand what you offer, cannot figure out what to do next or struggle to use the product, complexity becomes a business problem.",
  ],
  turn: "We help remove that complexity.",
  closing:
    "Waymark works with founders, product teams and growing businesses to create digital products that are easier to understand, easier to use and easier to grow.",
};

// Block 3 — Services section heading and closing bar.
export const servicesSection = {
  eyebrow: "Services",
  title: "One studio. From idea to experience.",
  description:
    "A digital product rarely needs just one service. A startup may need a brand before launching its website. A SaaS company may need a better product experience before adding another feature. An established business may need to redesign its website while bringing its brand and customer experience together. That is why Waymark brings the essential pieces together.",
  closingBar: {
    highlight: "Free",
    text: "discovery call — tell us what you're building and we'll scope it with you.",
    ctaLabel: "Book a discovery call",
  },
};

// Block 4 — Approach: three connected sections on how Waymark designs.
export interface ApproachBlock {
  eyebrow?: string;
  title: string;
  intro: string[];
  /** Short standalone lines, e.g. the questions we ask. */
  listTitle?: string;
  items?: string[];
  closing: string;
}

export const approach: ApproachBlock[] = [
  {
    eyebrow: "Approach",
    title: "Design with a reason behind it",
    intro: [
      "We do not start with colours, animations or a collection of beautiful screens.",
      "We start by asking questions.",
    ],
    listTitle: "Questions that shape the design",
    items: [
      "Who is using this?",
      "What are they trying to accomplish?",
      "Where are they getting stuck?",
      "What does the business need to achieve?",
      "What should we solve first?",
    ],
    closing:
      "The answers shape the design. That means important decisions have a reason behind them. Our digital product design approach connects business goals with user needs, so the final product is not only attractive but useful.",
  },
  {
    eyebrow: "User centred",
    title: "Built around real users",
    intro: [
      "People do not experience your product as a sitemap, feature list or technical specification.",
      "They experience it one interaction at a time.",
    ],
    listTitle: "The moments that matter",
    items: [
      "They click.",
      "They scroll.",
      "They search.",
      "They hesitate.",
      "They make mistakes.",
      "They decide whether to continue.",
    ],
    closing:
      "Our process is built around understanding those moments. We use research, user flows, prototypes, usability testing and real product behaviour to create experiences that feel natural rather than complicated.",
  },
  {
    eyebrow: "Why design matters",
    title: "Why digital product design is a business decision",
    intro: [
      "Design is often treated as the visual layer added after everything else has been decided.",
      "We see it differently.",
    ],
    listTitle: "What poor design costs",
    items: [
      "A confusing product can increase support requests.",
      "A complicated checkout can reduce conversions.",
      "Poor onboarding can prevent users from reaching the value of your product.",
      "An inconsistent brand can make a growing business feel less established.",
      "A slow website can make visitors leave before they even see what you offer.",
    ],
    closing:
      "Good design does not solve every business problem. But poor design can create problems that are difficult to ignore.",
  },
];

// Block 5 — Research-backed numbers.
export interface ResearchStat {
  number: string;
  claim: string;
  blurb: string;
  source: string;
  href: string;
  linkLabel: string;
}

export const researchStatsHeading = {
  eyebrow: "Why it matters",
  title: "A few numbers worth knowing",
};

export const researchStats: ResearchStat[] = [
  {
    number: "4,500+",
    claim: "people studied",
    blurb:
      "Stanford's Web Credibility Project conducted research involving more than 4,500 people and found that design, usability and other website characteristics can influence perceived credibility.",
    source: "Stanford Web Credibility Project",
    href: "https://credibility.stanford.edu/guidelines/",
    linkLabel: "Stanford Web Credibility Guidelines",
  },
  {
    number: "53%",
    claim: "mobile abandonment",
    blurb:
      "Google reports that 53% of mobile visits are likely to be abandoned when a page takes longer than three seconds to load.",
    source: "Google",
    href: "https://support.google.com/adsense/answer/7450973",
    linkLabel: "Google AdSense Mobile Speed Guidance",
  },
  {
    number: "33%",
    claim: "potential revenue increase",
    blurb:
      "Lucidpress's State of Brand Consistency research reported that consistent branding could contribute to up to 33% higher revenue. The same research reported that 81% of companies experienced off-brand content.",
    source: "Lucidpress research reported by PR Newswire",
    href: "https://www.prnewswire.com/news-releases/study-finds-companies-with-consistent-branding-can-see-up-to-33-increase-in-revenue-300967219.html",
    linkLabel: "Lucidpress Brand Consistency Research",
  },
];

export const researchNote =
  "These figures come from industry research and should be treated as directional rather than a guaranteed business outcome.";

// Block 6 — Outcomes.
export const outcomesSection = {
  eyebrow: "Outcomes",
  title: "We design for outcomes, not just deliverables",
  intro: [
    "A website should not exist simply because a company needs a website.",
    "A dashboard should not exist simply because the product has data.",
    "A mobile app should not exist simply because the business wants an app.",
    "Every digital product should have a reason to exist.",
  ],
  listTitle: "That reason might be to",
  items: [
    "Increase conversions",
    "Reduce friction",
    "Improve activation",
    "Make complex information easier to understand",
    "Help users complete tasks faster",
    "Launch a new product",
    "Create a stronger brand experience",
  ],
  closing: ["The deliverable is the design or product.", "The outcome is what matters."],
};

// Block 7 — Product process: idea to launch.
export const productProcessHeading = {
  eyebrow: "Process",
  title: "From the first idea to the final product",
  description:
    "Great work becomes difficult when every stage is handled by a different team. Strategy gets lost between meetings. Design decisions do not reach developers. Development starts before the experience is properly validated. Waymark keeps the process connected.",
};

export interface ProductStep {
  step: string;
  title: string;
  description: string;
}

export const productProcessSteps: ProductStep[] = [
  {
    step: "01",
    title: "Discover",
    description: "We understand the business, users, product and problem.",
  },
  {
    step: "02",
    title: "Define",
    description: "We identify what needs to be solved and what success should look like.",
  },
  {
    step: "03",
    title: "Design",
    description: "We turn strategy into user flows, interfaces, prototypes and systems.",
  },
  {
    step: "04",
    title: "Build",
    description: "We develop the experience into a working digital product.",
  },
  {
    step: "05",
    title: "Launch",
    description: "We help bring it into the real world and identify what should happen next.",
  },
];

// Block 8 — Why Waymark.
export const whyHeading = {
  eyebrow: "Why Waymark",
  title: "One team from strategy to execution",
  description:
    "The best product work happens when strategy, design and development can communicate directly. That is why Waymark keeps the process connected. You do not need to explain the same product problem to three different teams. You work with one studio that understands the wider picture.",
};

export const whyFeatures = [
  {
    icon: "Users",
    title: "Senior people on the work",
    description:
      "You work directly with experienced people instead of passing your project through layers of account management.",
  },
  {
    icon: "Target",
    title: "Strategy before execution",
    description:
      "We understand the problem before deciding what needs to be designed or built.",
  },
  {
    icon: "PanelsTopLeft",
    title: "One connected team",
    description:
      "Strategy, design and development stay connected throughout the project.",
  },
  {
    icon: "FileCheck",
    title: "Clear scope",
    description: "You know what we are delivering, what it costs and what happens next.",
  },
  {
    icon: "CalendarCheck",
    title: "Weekly visibility",
    description:
      "Regular demonstrations keep you close to the work without filling your calendar with unnecessary meetings.",
  },
  {
    icon: "TrendingUp",
    title: "Built to grow",
    description:
      "We create systems and foundations that can support the next stage of your product.",
  },
];

// Block 9 — Featured work heading (cards pull from case-studies.ts).
export const featuredWorkHeading = {
  eyebrow: "Selected work",
  title: "Proof before promises",
  description:
    "A few of the projects that show how we think, scope, and ship.",
  viewAll: { label: "View all work", href: "/work" },
};

// Block 10 — Engagement: what working with Waymark looks like.
export const engagementHeading = {
  eyebrow: "Working with us",
  title: "What working with Waymark looks like",
};

export const engagementSteps: ProductStep[] = [
  {
    step: "01",
    title: "Discovery call",
    description:
      "We start with a conversation about your business, product and challenge. No complicated questionnaire. Just a focused conversation about what you are trying to achieve.",
  },
  {
    step: "02",
    title: "Proposal and scope",
    description:
      "We turn the conversation into a clear scope, timeline and fixed quote.",
  },
  {
    step: "03",
    title: "Design and build",
    description:
      "The work begins. You see progress through regular demonstrations and feedback sessions.",
  },
  {
    step: "04",
    title: "Launch and support",
    description:
      "We help you move from finished work to a live product and identify the next opportunities.",
  },
];

// Block 11 — Who we work best with.
export const fitSection = {
  eyebrow: "Who we work with",
  title: "We work best with ambitious teams",
  intro: "Waymark is a good fit if you are:",
  items: [
    "Building a new digital product",
    "Launching a startup",
    "Redesigning an existing website",
    "Growing a SaaS platform",
    "Simplifying a complicated workflow",
    "Creating a mobile application",
    "Building a stronger brand",
    "Turning an idea into an MVP",
  ],
  note: "You do not need to have everything figured out before speaking with us. That is part of what the discovery process is for.",
};

// Block 12 — Service teasers: common starting points, each linking to its
// dedicated service page.
export interface ServiceTeaser {
  icon: string;
  title: string;
  body: string[];
  listTitle?: string;
  list?: string[];
  closing?: string;
  cta: string;
  href: string;
}

export const serviceTeasers: ServiceTeaser[] = [
  {
    icon: "Rocket",
    title: "From idea to MVP",
    body: [
      "You might have an idea but not know what the first version should include. That is where product strategy becomes important.",
      "We help identify the core problem, define the essential workflow and determine what needs to be built first.",
    ],
    closing: "The objective is not to build the biggest product possible. It is to build enough to learn.",
    cta: "Explore MVP Development",
    href: "/services/mvp-builds",
  },
  {
    icon: "Workflow",
    title: "When your product becomes too complicated",
    body: [
      "Growth can create its own problems. More features. More users. More permissions. More dashboards. More settings. More workflows.",
      "Eventually, users may struggle to understand a product that was originally simple.",
    ],
    closing:
      "Waymark can audit the existing experience, identify the areas creating the most friction and redesign them around the tasks users actually need to complete.",
    cta: "Explore SaaS & Product Design",
    href: "/services/saas-product-design",
  },
  {
    icon: "LayoutTemplate",
    title: "Your website is part of your product experience",
    body: [
      "Your website introduces people to your company before they speak with your team.",
    ],
    listTitle: "It needs to communicate",
    list: [
      "Who you are",
      "What you offer",
      "Who it is for",
      "Why people should trust you",
      "What they should do next",
    ],
    closing:
      "Waymark combines UX, visual design, development and performance to create websites that do more than look good. They need to work.",
    cta: "Explore Web Design & Development",
    href: "/services/web-design-development",
  },
  {
    icon: "Sparkles",
    title: "A brand should work everywhere",
    body: ["Your identity should not stop at the logo."],
    listTitle: "It should create consistency across",
    list: [
      "Website",
      "Product",
      "Social media",
      "Advertising",
      "Presentations",
      "Sales material",
      "Email",
      "Marketing campaigns",
    ],
    closing: "Waymark creates practical brand systems that your team can actually use.",
    cta: "Explore Brand Design & Identity",
    href: "/services/brand-identity",
  },
];

export const serviceTeasersHeading = {
  eyebrow: "Where we help",
  title: "Starting points, whatever your stage",
};

// Block 13 — FAQ (objection handling). Visible text is also emitted as
// FAQPage JSON-LD verbatim by <Faq />.
export const faqHeading = {
  eyebrow: "FAQ",
  title: "Frequently Asked Questions",
};

export interface Faq {
  question: string;
  answer: string;
}

export const faqs: Faq[] = [
  {
    question: "What does Waymark do?",
    answer:
      "Waymark is a digital product studio offering UI/UX design, brand identity, web design and development, SaaS and product design, MVP development and mobile app design.",
  },
  {
    question: "Where is Waymark based?",
    answer:
      "Waymark is based in Dubai, UAE and works with startups and growing businesses.",
  },
  {
    question: "Do you work with startups?",
    answer:
      "Yes. We work with startups from early stage ideas through to growing digital products.",
  },
  {
    question: "Can you work with an existing development team?",
    answer:
      "Yes. We can provide design systems, prototypes and developer ready handoff for your existing team.",
  },
  {
    question: "Do you only work on new products?",
    answer:
      "No. We also redesign existing websites, SaaS platforms, dashboards and digital experiences.",
  },
  {
    question: "Can you handle strategy as well as design?",
    answer:
      "Yes. We can help define the problem, structure the product experience and establish the direction before moving into detailed design.",
  },
  {
    question: "How do projects start?",
    answer:
      "Every project begins with a discovery call. We use that conversation to understand the problem, determine the right approach and prepare a clear scope.",
  },
  {
    question: "How long does a typical project take?",
    answer:
      "The timeline depends on the scope. A focused website or product engagement can typically take between several weeks and a few months. We provide a clear timeline as part of the proposal.",
  },
];

// Block 14 — Research resources linked from the numbers band.
export const resourcesHeading = {
  eyebrow: "Resources",
  title: "Research behind the numbers",
  description:
    "The sources behind the figures on this page, so you can check the evidence yourself.",
};

export interface Resource {
  step: string;
  title: string;
  description: string;
  href: string;
  linkLabel: string;
}

export const resources: Resource[] = [
  {
    step: "01",
    title: "Stanford Web Credibility Guidelines",
    description:
      "Research based guidelines covering visual design, usability, credibility and information architecture.",
    href: "https://credibility.stanford.edu/guidelines/",
    linkLabel: "Read the Stanford Web Credibility Guidelines",
  },
  {
    step: "02",
    title: "Stanford Web Credibility Research",
    description:
      "Background on the research behind website credibility and the influence of design decisions.",
    href: "http://www.webcredibility.org/",
    linkLabel: "Explore Stanford's Research",
  },
  {
    step: "03",
    title: "Google Mobile Speed Guidance",
    description:
      "Google's research and guidance around mobile loading performance and visitor abandonment.",
    href: "https://support.google.com/adsense/answer/7450973",
    linkLabel: "Read Google's Mobile Speed Guidance",
  },
  {
    step: "04",
    title: "Google: The Need for Mobile Speed",
    description:
      "Google's research into mobile speed, user expectations and the impact of slow experiences.",
    href: "https://blog.google/products/admanager/the-need-for-mobile-speed/",
    linkLabel: "Read Google's Mobile Speed Research",
  },
  {
    step: "05",
    title: "Lucidpress Brand Consistency Research",
    description:
      "Research examining brand consistency and its potential commercial impact.",
    href: "https://www.prnewswire.com/news-releases/study-finds-companies-with-consistent-branding-can-see-up-to-33-increase-in-revenue-300967219.html",
    linkLabel: "Read the Brand Consistency Research",
  },
];

// Block 15 — Explore links.
export const exploreSection = {
  eyebrow: "Explore",
  title: "Explore Waymark",
  items: [
    {
      title: "Our Services",
      body: "Explore everything Waymark can help you design and build.",
      href: "/services",
      cta: "View Services",
    },
    {
      title: "Our Work",
      body: "See how we approach real digital product problems.",
      href: "/work",
      cta: "View Work",
    },
    {
      title: "About Waymark",
      body: "Learn more about our approach, team and way of working.",
      href: "/about",
      cta: "About Waymark",
    },
    {
      title: "Pricing",
      body: "Understand how we structure projects and engagements.",
      href: "/pricing",
      cta: "View Pricing",
    },
    {
      title: "Insights",
      body: "Read our thinking on product design, UX, development and digital growth.",
      href: "/blog",
      cta: "Read the Blog",
    },
  ],
};

// Block 16 — Closing CTA (rendered via <ClosingCta /> overrides).
export const homeClosingCta = {
  eyebrow: "Start a project",
  title: "The next version of your product starts with a conversation",
  body:
    "You do not need a perfect brief. You do not need every feature planned. You just need to know what you are trying to solve. Tell us what you are building, where things are getting complicated and what you want to achieve. We will help you figure out what comes next.",
  lead: "Let's talk about your project.",
  ctaLabel: "Book a discovery call",
};

// Contact-flow content (shared with the contact page — not rendered on home).
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