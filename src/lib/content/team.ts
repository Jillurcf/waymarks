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

// Founder quote card on the home about-intro (M2 block 3) and the About page
// founder section (C3.1). Replaces the template's dummy "sarah mitchell,
// CEO & founder" + signature — see implementation plan §5.
//
// SEED CONTENT: replace with the real founder identity and an approved quote.
// The signature line renders the name in display type until a real signature
// asset exists.
export const founder = {
  name: "[Founder name]", // SEED
  role: "Founder & Principal Designer", // SEED
  initials: "FN", // SEED
  quote:
    "We started Waymark to give founders agency-grade product work without the agency bloat.", // SEED
};