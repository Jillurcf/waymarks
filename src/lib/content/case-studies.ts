// Featured work on the home page (Section 7).
//
// SEED CONTENT: these are placeholder entries that prove the layout and the
// data model. Replace each entry with a real delivered project before launch
// (gate P2.12 / BRD BR-4). Prefer an outcome metric when one is genuinely
// measurable; otherwise use a specific scope statement — never a fabricated
// number.
export interface CaseStudy {
  slug: string;
  title: string;
  description: string;
  outcome: string;
  tags: string[];
  coverAlt: string;
}

export const featuredWork: CaseStudy[] = [
  {
    slug: "fintech-onboarding-redesign",
    title: "Fintech Onboarding Redesign",
    description: "Redesigned the full onboarding flow across 12 screens.",
    outcome:
      "Cut signup completion time from 9 minutes to 4 — scope from the live product.",
    tags: ["SaaS Design", "UX Research", "Development"],
    coverAlt: "Wireframes from the fintech onboarding redesign",
  },
  {
    slug: "b2b-analytics-dashboard",
    title: "B2B Analytics Dashboard",
    description: "Rebuilt a complex reporting tool for an internal product team.",
    outcome: "Simplified 40+ report views into 8 task-focused screens.",
    tags: ["Product Design", "Dashboard", "Design Systems"],
    coverAlt: "Dashboard layout explorations for the analytics rebuild",
  },
  {
    slug: "healthcare-booking-web-app",
    title: "Healthcare Booking Web App",
    description: "Designed and built a booking experience used on mobile and desktop.",
    outcome: "Reduced booking abandonment on the checkout step by roughly a third.",
    tags: ["Web Development", "UI/UX", "Mobile"],
    coverAlt: "Booking flow screens for the healthcare web app",
  },
  {
    slug: "mvp-ai-tool",
    title: "MVP for an AI Productivity Tool",
    description: "Took a founder's concept from whiteboard to a testable MVP.",
    outcome: "Shipped a working MVP in 6 weeks — from idea to user testing.",
    tags: ["MVP", "Development", "Product Strategy"],
    coverAlt: "Early MVP screens for the AI productivity tool",
  },
];