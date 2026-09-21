// Team snapshot (Section 11).
export interface TeamMember {
  name: string;
  role: string;
  initials: string;
  photo?: string;
}

export const team: TeamMember[] = [
  {
    name: "Eiahia Sohel",
    role: "Founder & CEO",
    initials: "ES",
    photo: "/images/team/eiahia-sohel.png",
  },
  {
    name: "Rasheduzzaman",
    role: "Co-Founder & COO",
    initials: "RZ",
    photo: "/images/team/rasheduzzaman.png",
  },
  {
    name: "Omor Sany Ananta",
    role: "Head of Digital Marketing",
    initials: "OS",
    photo: "/images/team/omor-sany-ananta.png",
  },
  {
    name: "Abdullah Al Mamun",
    role: "Lead Brand Design & Identity",
    initials: "AM",
    photo: "/images/team/abdullah-al-mamun.png",
  },
  {
    name: "Fariha Islam Osin",
    role: "Lead UI-UX Design",
    initials: "FO",
    photo: "/images/team/fariha-islam-osin.png",
  },
  {
    name: "Nasim Mojumder",
    role: "Motion",
    initials: "NM",
    photo: "/images/team/nasim-mojumder.png",
  },
  {
    name: "Shahadat Hossain Shuvo",
    role: "Motion",
    initials: "SH",
    photo: "/images/team/shahadat-hossain-shuvo.png",
  },
  {
    name: "Israt Jahan Rabeya",
    role: "UI-UX Designer",
    initials: "IR",
    photo: "/images/team/israt-jahan-rabeya.png",
  },
  {
    name: "Yeasin Arafat",
    role: "Visual Communication Designer",
    initials: "YA",
    photo: "/images/team/yeasin-arafat.png",
  },
  {
    name: "Md. Shahadat Hossain Khan",
    role: "Web Developer",
    initials: "SK",
    photo: "/images/team/md-shahadat-hossain-khan.png",
  },
];

// Founder quote card on the home about-intro (M2 block 3) and the About page
// founder section (C3.1). Replaces the template's dummy "sarah mitchell,
// CEO & founder" + signature — see implementation plan §5.
//
// The signature line renders the name in display type until a real signature
// asset exists.
export const founder = {
  name: "Eiahia Sohel",
  role: "Founder & CEO",
  initials: "ES",
  quote:
    "We started Waymark to give founders agency-grade product work without the agency bloat.",
};