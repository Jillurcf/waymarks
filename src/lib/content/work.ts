// Work overview (/work) and case-study detail (/work/[slug]) content (C3.4,
// C3.5). Case-study data itself lives in case-studies.ts.
import type { ServiceFaq } from "@/lib/content/services";

export const workHeading = {
  eyebrow: "Selected work",
  title: "Projects that show how we think",
  description:
    "Every case study names the problem, the approach, and what changed for the business — including where numbers can't be published, we say so.",
};

export const workFilter = {
  label: "Filter by category",
  allLabel: "All",
  /** Screen-reader status template; {count} is replaced at render time. */
  status(count: number): string {
    return `Showing ${count} ${count === 1 ? "project" : "projects"}`;
  },
};

export const relatedWorkHeading = {
  eyebrow: "Related work",
  title: "More projects like this",
};

export const caseStudyMeta = {
  client: "Client",
  sector: "Sector",
  services: "Services",
  year: "Year",
  outcomeTitle: "Outcome",
  challengeTitle: "The challenge",
  approachTitle: "Our approach",
  resultsTitle: "The result",
  metricsEyebrow: "Outcome metrics",
};

// Shared FAQ for case-study pages (C3.5). Answers apply to every study, so
// no FAQPage JSON-LD is emitted here — schema stays on pages with unique
// questions.
export const caseStudyFaqHeading = {
  eyebrow: "FAQ",
  title: "About our case studies",
  description: "How we publish results, and how to read them.",
};

export const caseStudyFaqs: ServiceFaq[] = [
  {
    question: "Why do some results have no numbers?",
    answer:
      "Figures are published only when a client has approved them. Where they can't be shared, we describe the scope of what was delivered instead.",
  },
  {
    question: "Can you work under NDA?",
    answer:
      "Yes, happily — several projects here are described only at the level our clients signed off on.",
  },
  {
    question: "What would a project like this cost?",
    answer:
      "Every project is scoped individually. See the pricing page for engagement models, or book a discovery call for a fixed quote.",
  },
];
