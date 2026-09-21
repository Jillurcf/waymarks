// Featured work on the home page (Section 7) and the /work routes (C3.4/C3.5).
//
// SEED CONTENT: these are placeholder entries that prove the layout and the
// data model. Replace each entry with a real delivered project before launch
// (gate P2.12 / BRD BR-4). Prefer an outcome metric when one is genuinely
// measurable; otherwise use a specific scope statement — never a fabricated
// number.
export interface CaseStudyMetric {
  /** Display value; numeric part animates via CountUp (e.g. "4 min"). */
  value: string;
  label: string;
}

export interface CaseStudy {
  slug: string;
  title: string;
  description: string;
  outcome: string;
  tags: string[];
  coverAlt: string;
  /** Filter dimension for the /work grid (FR-13). */
  category: string;
  /** Meta sidebar (FR-14). Client names stay bracketed until approved. */
  client: string; // SEED
  sector: string;
  year: string;
  challenge: string;
  approach: string;
  results: string[];
  metrics: CaseStudyMetric[];
}

export const featuredWork: CaseStudy[] = [
  {
    slug: "fintech-onboarding-redesign",
    title: "Fintech Onboarding Redesign",
    description:
      "A complicated onboarding experience redesigned around clarity and completion.",
    outcome:
      "Signup completion time reduced from 9 minutes to 4 minutes.",
    tags: ["SaaS Design", "UX Research", "Development"],
    coverAlt: "Wireframes from the fintech onboarding redesign",
    category: "UI/UX Design",
    client: "[Fintech client]", // SEED
    sector: "Fintech",
    year: "2025",
    challenge:
      "Signup took nine minutes across twelve screens, and compliance questions appeared with no explanation. Support tickets kept rising while paid acquisition leaked at step three.",
    approach:
      "We interviewed recent signups and mapped exactly where users stalled. Progressive disclosure moved compliance questions to the moment they were needed, and save-and-resume let people return without starting over. Every revision was usability-tested before it reached development.",
    results: [
      "Completion time cut from 9 minutes to 4, measured on the live product",
      "Compliance questions answered at the step they apply to, not up front",
      "Save-and-resume adopted by users returning between sessions",
    ],
    metrics: [
      { value: "12", label: "Screens redesigned across the flow" },
      { value: "4 min", label: "Median signup completion time, down from 9" },
    ],
  },
  {
    slug: "b2b-analytics-dashboard",
    title: "B2B Analytics Dashboard",
    description:
      "A data heavy analytics experience simplified around the decisions users actually need to make.",
    outcome: "Reduced 40+ report views to 8 task-focused screens.",
    tags: ["Product Design", "Dashboard", "Design Systems"],
    coverAlt: "Dashboard layout explorations for the analytics rebuild",
    category: "SaaS & Product",
    client: "[B2B SaaS client]", // SEED
    sector: "B2B SaaS",
    year: "2025",
    challenge:
      "Forty-plus report views had grown organically over years, and users couldn't find the three reports they actually needed. Training a new team member took days.",
    approach:
      "Card sorts and usage analysis showed most sessions touched only eight views. We rebuilt navigation around tasks instead of report types, designed a reusable table-and-chart system, and retired redundant views behind saved custom reports.",
    results: [
      "Navigation rebuilt around user tasks instead of report types",
      "A documented table-and-chart system the team now extends itself",
      "Redundant views retired behind saved custom reports",
    ],
    metrics: [
      { value: "40+", label: "Legacy report views consolidated" },
      { value: "8", label: "Task-focused screens replaced them" },
    ],
  },
  {
    slug: "healthcare-booking-web-app",
    title: "Healthcare Booking Web App",
    description:
      "A booking experience redesigned to remove unnecessary friction from the customer journey.",
    outcome:
      "Checkout abandonment reduced by roughly one third.",
    tags: ["Web Development", "UI/UX", "Mobile"],
    coverAlt: "Booking flow screens for the healthcare web app",
    category: "Web Development",
    client: "[Healthcare provider]", // SEED
    sector: "Healthcare",
    year: "2024",
    challenge:
      "Patients abandoned booking at the checkout step, and phone bookings consumed reception hours. The legacy flow couldn't show real-time availability or prices before payment.",
    approach:
      "We redesigned booking as a single progress path with availability shown up front and clear pricing before payment, then built the front-end against the clinic's existing scheduling API. Accessibility was held to WCAG 2.1 AA throughout.",
    results: [
      "Checkout abandonment reduced by roughly a third",
      "Real-time availability visible before booking starts",
      "WCAG 2.1 AA conformance verified across the flow",
    ],
    metrics: [
      { value: "-33%", label: "Abandonment on the checkout step" },
      { value: "AA", label: "WCAG 2.1 conformance level met" },
    ],
  },
  {
    slug: "mvp-ai-tool",
    title: "MVP for an AI Productivity Tool",
    description: "Took a founder's concept from whiteboard to a testable MVP.",
    outcome: "Shipped a working MVP in 6 weeks — from idea to user testing.",
    tags: ["MVP", "Development", "Product Strategy"],
    coverAlt: "Early MVP screens for the AI productivity tool",
    category: "MVP Builds",
    client: "[AI startup founder]", // SEED
    sector: "AI & Productivity",
    year: "2026",
    challenge:
      "A validated idea and a tight budget — but nothing to put in front of users. The founder needed proof of concept without signing up to a six-month build.",
    approach:
      "We cut the feature set to one core workflow, prototyped it in week one, and tested with five target users before writing production code. The build shipped in weekly increments on a managed backend, keeping costs predictable.",
    results: [
      "Working MVP shipped six weeks after kickoff",
      "Five user tests ran before production code started",
      "The v1.1 roadmap was drafted from test findings, not guesses",
    ],
    metrics: [
      { value: "6", label: "Weeks from kickoff to tested MVP" },
      { value: "5", label: "User tests before production build" },
    ],
  },
];
