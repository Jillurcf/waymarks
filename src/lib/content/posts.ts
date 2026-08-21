// Blog posts (M4 / C4.6). Body is a typed block list so articles render as
// rich, structured HTML from data — no MDX runtime, static-export safe.
//
// SEED CONTENT: these five launch articles were written for the site build.
// Examples and figures inside are illustrative — verify client references
// before promotion (see docs/implementation-plan.md §5 register).

export type PostBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "quote"; text: string };

export interface Post {
  slug: string;
  title: string;
  /** ISO date string (formatted en-GB at render time). */
  date: string;
  excerpt: string;
  readingTime: string;
  body: PostBlock[];
  tags: string[];
}

export const posts: Post[] = [
  {
    slug: "why-discovery-calls-first",
    title: "Why every project starts with a discovery call",
    date: "2026-08-12",
    excerpt:
      "A 30-minute call saves weeks of rework. Here is what we cover before anyone opens a design file.",
    readingTime: "4 min read",
    tags: ["Process", "Scope"],
    body: [
      {
        type: "p",
        text: "Most briefs we receive describe a solution rather than a problem. \"We need an app\" tells us the deliverable, but not the metric it has to move. The discovery call exists to close that gap before any budget is spent on pixels.",
      },
      {
        type: "p",
        text: "The call is free, takes about 30 minutes, and has one outcome: a shared definition of success. If we are not the right studio for the job, we say so on the call and point you elsewhere.",
      },
      { type: "h2", text: "What we actually ask" },
      {
        type: "ul",
        items: [
          "What business outcome does this project serve?",
          "Who uses the product today, and what breaks for them?",
          "What has already been tried, and what did it cost?",
          "What does the deadline attach to — funding, launch, an event?",
        ],
      },
      {
        type: "p",
        text: "Answers to those four questions shape scope more than any feature list. On a recent fintech project, the brief asked for a redesigned dashboard; the call revealed the real problem was a signup flow that lost two thirds of applicants. We fixed the flow first.",
      },
      {
        type: "quote",
        text: "A fixed brief written before the first call usually prices the wrong project accurately.",
      },
      { type: "h2", text: "What you get afterwards" },
      {
        type: "p",
        text: "Within two business days you receive a written summary: goals, constraints, proposed scope, and a fixed price with a milestone schedule. You can take that document to any studio — it is yours, whether or not you work with us.",
      },
    ],
  },
  {
    slug: "design-systems-developers-use",
    title: "Design systems developers actually use",
    date: "2026-07-28",
    excerpt:
      "A component library nobody implements is expensive documentation. Four habits keep handoff honest.",
    readingTime: "5 min read",
    tags: ["Design systems", "Handoff"],
    body: [
      {
        type: "p",
        text: "Every studio sells design systems. Fewer can show one that survived contact with a real codebase six months later. The difference is rarely visual taste — it is whether the system was built for implementation or just for the portfolio case study.",
      },
      { type: "h2", text: "Name tokens after meaning, not appearance" },
      {
        type: "p",
        text: "\"Blue-500\" breaks the moment the brand changes. \"Surface-default\" survives it. Tokens should describe what a colour or spacing value means, so a rebrand is a find-and-replace instead of a redesign of the documentation.",
      },
      { type: "h2", text: "Design the states, not just the screens" },
      {
        type: "p",
        text: "Developers do not get stuck on the default button. They get stuck on loading, empty, error, disabled, and focus. A component spec without states is a guess dressed up as a decision.",
      },
      {
        type: "ul",
        items: [
          "Every interactive component ships with all its states drawn",
          "Focus rings meet WCAG 2.1 contrast, not just brand guidelines",
          "Motion specs name durations and easing, not adjectives",
          "Reduced-motion behaviour is defined, not implied",
        ],
      },
      {
        type: "quote",
        text: "If a developer has to ask what happens on hover, the system already failed quietly.",
      },
      { type: "h2", text: "Ship the system in code, not just Figma" },
      {
        type: "p",
        text: "Our systems land as coded primitives alongside the Figma library, built on the stack the client's team already runs. When the reference implementation is the same TypeScript the product uses, drift has nowhere to hide.",
      },
    ],
  },
  {
    slug: "ux-red-flags-we-check-first",
    title: "Five UX red flags we check first in any audit",
    date: "2026-07-09",
    excerpt:
      "Before touching tooling or trends, these five signals predict most of the conversion loss we find.",
    readingTime: "4 min read",
    tags: ["UX", "Audits"],
    body: [
      {
        type: "p",
        text: "A UX audit can drown in checklists. After enough audits, patterns repeat: most measurable loss traces back to a handful of failures. These are the five we look for first, in order.",
      },
      { type: "h2", text: "1. The form asks for trust the page has not earned" },
      {
        type: "p",
        text: "Company size fields above the fold, phone numbers marked required, fourteen questions before any value is delivered. Every field is a toll booth; most funnels collect too many tolls too early.",
      },
      { type: "h2", text: "2. Primary actions compete with each other" },
      {
        type: "p",
        text: "Three buttons of equal weight in one viewport means users pick none. One primary action per screen, phrased as what the visitor gets, consistently outperforms a row of look-at-me buttons.",
      },
      { type: "h2", text: "3. Empty states are blank" },
      {
        type: "p",
        text: "An empty dashboard with a zero and a shrug is where activation goes to die. Good empty states teach the next action — sample data, a checklist, one obvious button.",
      },
      { type: "h2", text: "4. Errors speak developer" },
      {
        type: "ul",
        items: [
          "\"Invalid input\" instead of what to fix and where",
          "Errors cleared only on resubmit, not on correction",
          "No keyboard focus moved to the first broken field",
        ],
      },
      { type: "h2", text: "5. Motion ignores the people who turn it off" },
      {
        type: "p",
        text: "Animation that never checks prefers-reduced-motion excludes users who need it and distracts everyone else. Motion should mark cause and effect — nothing more.",
      },
      {
        type: "p",
        text: "Fix these five before commissioning research. In our experience they account for the majority of quick wins, and clearing them makes any later study cheaper to run.",
      },
    ],
  },
  {
    slug: "mvp-scope-what-to-cut",
    title: "MVP scope: what to cut, what to keep",
    date: "2026-06-18",
    excerpt:
      "An MVP is not a small version of everything. It is the smallest thing that tests the riskiest assumption.",
    readingTime: "5 min read",
    tags: ["MVP", "Startups"],
    body: [
      {
        type: "p",
        text: "Founders arrive with roadmaps of thirty features and a budget for five. The conversation that follows is always the same exercise: find the assumption the whole business rests on, then build only what tests it.",
      },
      { type: "h2", text: "Keep: the one journey that proves value" },
      {
        type: "p",
        text: "Pick the single user journey that, if it works, makes the business model plausible. For a booking product it is search-to-booked-slot. For a marketplace it is list-and-transact. Everything that journey touches stays; everything else waits.",
      },
      { type: "h2", text: "Cut: configuration, roles, and edge cases" },
      {
        type: "ul",
        items: [
          "Admin panels — a spreadsheet behind the scenes costs nothing this month",
          "Multi-role permissions — ship single-role, learn, then split",
          "Customisation settings — you are the config while you learn",
          "Integrations beyond the one your beachhead users already live in",
        ],
      },
      {
        type: "quote",
        text: "Every feature you defer is information gained about the feature you shipped.",
      },
      { type: "h2", text: "Keep: the boring reliability basics" },
      {
        type: "p",
        text: "Cutting scope never licenses cutting feedback loops. Loading states, error messages, and empty states stay in scope from day one — they are how a five-feature product feels like a product rather than a demo.",
      },
      {
        type: "p",
        text: "On a recent AI-tool MVP, this discipline meant shipping in eight weeks with four features instead of twenty. The two features we had argued hardest for went unbuilt — and unmissed, which was itself the most useful finding of the release.",
      },
    ],
  },
  {
    slug: "why-waymark-quotes-fixed-prices",
    title: "Why Waymark quotes fixed prices",
    date: "2026-05-30",
    excerpt:
      "Hourly billing rewards slowness. Fixed quotes move scope risk to the studio, where it belongs.",
    readingTime: "3 min read",
    tags: ["Pricing", "Process"],
    body: [
      {
        type: "p",
        text: "The standard agency model bills by the hour and hands the client the risk: if the studio is slow, the client pays for the slowness. We think that is backwards, so we quote fixed prices per milestone.",
      },
      { type: "h2", text: "How a fixed quote gets made" },
      {
        type: "ul",
        items: [
          "Discovery call defines goals and constraints",
          "Written scope lists deliverables, assumptions, and exclusions",
          "Price attaches to milestones, not to hours consumed",
          "Change requests are priced separately before work starts",
        ],
      },
      {
        type: "p",
        text: "The written scope is the load-bearing document. It names what is included and, just as importantly, what is not — so \"just one more screen\" becomes a conversation about scope, not an argument about invoices.",
      },
      {
        type: "quote",
        text: "A quote you can hold us to is worth more than a rate card you cannot predict.",
      },
      { type: "h2", text: "What fixed pricing demands from us" },
      {
        type: "p",
        text: "It demands we estimate honestly and flag risk early, because overruns come out of our margin, not your budget. Clients tell us this is why they stay: the incentive to be efficient sits with the people controlling the work.",
      },
      {
        type: "p",
        text: "Ranges for typical engagements are on the pricing page. Exact figures follow the discovery call, once scope is written down.",
      },
    ],
  },
];
