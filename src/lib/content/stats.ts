// Proof metrics (M2 block 9 — facts band) and trust line numbers.
//
// SEED CONTENT: the spec requires REAL figures here. Ranges based on delivered
// projects are acceptable ("6–10 weeks"); invented precision is not. Replace
// every "SEED" value with verified numbers before launch, or drop the stat.
export interface Stat {
  value: string;
  label: string;
  /** lucide icon name; the section component maps it to a component. */
  icon?: string;
}

export const proofStats: Stat[] = [
  {
    value: "+30%", // SEED: replace with real average conversion lift
    label: "Average increase in conversion on redesigned pages",
    icon: "TrendingUp",
  },
  {
    value: "6–10",
    label: "Weeks from kickoff to launch, on typical projects",
    icon: "CalendarRange",
  },
  {
    value: "12+", // SEED: replace with real project count
    label: "Digital products shipped",
    icon: "Rocket",
  },
  {
    value: "4.9/5", // SEED: replace with real average client score
    label: "Average client satisfaction score",
    icon: "Star",
  },
];

// Facts band intro (M2 block 9): heading, supporting copy, and the circular
// CTA that points to the next action (brand rule: every section points on).
export const factsIntro = {
  eyebrow: "Our facts",
  title: "The numbers behind the work",
  body: "Every figure here comes from delivered projects — ask us for the detail behind any of them on a discovery call.",
  ctaLabel: "Start your project",
  ctaHref: "/contact",
};

export const trustLine = {
  rating: "4.9", // SEED: replace with real rating
  qualifier: "Trusted by teams in the Middle East and beyond", // SEED: refine region/industry
};
