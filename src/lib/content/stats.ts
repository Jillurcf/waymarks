// Proof strip metrics (Section 5) and trust line numbers.
//
// SEED CONTENT: the spec requires REAL figures here. Ranges based on delivered
// projects are acceptable ("6–10 weeks"); invented precision is not. Replace
// every "SEED" value with verified numbers before launch, or drop the stat.
export interface Stat {
  value: string;
  label: string;
  suffix?: string;
}

export const proofStats: Stat[] = [
  {
    value: "+30%", // SEED: replace with real average conversion lift
    label: "Average increase in conversion on redesigned pages",
  },
  {
    value: "6–10",
    label: "Weeks from kickoff to launch, on typical projects",
  },
  {
    value: "12+", // SEED: replace with real project count
    label: "Digital products shipped",
  },
  {
    value: "4.9/5", // SEED: replace with real average client score
    label: "Average client satisfaction score",
  },
];

export const trustLine = {
  rating: "4.9", // SEED: replace with real rating
  projectsDelivered: "[X]", // SEED: replace with real project count
  qualifier: "Trusted by teams in the Middle East and beyond", // SEED: refine region/industry
};