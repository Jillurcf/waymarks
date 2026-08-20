// Team snapshot (Section 11).
//
// SEED CONTENT: replace names/roles/initials with the real people who do the
// work. Photos should be real portraits once available (see content-guide
// "Team/location info").
export interface TeamMember {
  name: string;
  role: string;
  initials: string;
}

export const team: TeamMember[] = [
  {
    name: "[Design lead]",
    role: "Design Lead",
    initials: "DL",
  },
  {
    name: "[Developer]",
    role: "Front-end Developer",
    initials: "FD",
  },
  {
    name: "[Strategist]",
    role: "Product Strategist",
    initials: "PS",
  },
  {
    name: "[Developer]",
    role: "Back-end & Systems",
    initials: "BS",
  },
];