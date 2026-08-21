// Testimonials (Section 10).
//
// SEED CONTENT: quotes must come from real clients. Prefer a quote that leads
// with a specific result ("we saw a 30% lift in signups") over a generic
// compliment. Author/company placeholders are bracketed until verified.
export interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
  initials: string;
  source: string;
}

// Section heading copy for the shared testimonial block (used on home,
// /about, /services per implementation plan §2).
export const testimonialsSection = {
  eyebrow: "Testimonials",
  title: "What clients say after launch",
  description: "Specific results, from the people who paid for them.",
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "Waymark redesigned our signup flow and we saw a clear lift in completed signups within the first month.",
    author: "[Client name]",
    role: "Founder",
    company: "[Company name]",
    initials: "CL",
    source: "[Clutch]", // REVIEW: verified review source (Clutch/Google) once live
  },
  {
    quote:
      "They caught usability issues in our checkout flow that three previous freelancers missed.",
    author: "[Client name]",
    role: "Product Lead",
    company: "[Company name]",
    initials: "PL",
    source: "[Clutch]", // REVIEW: verified review source once live
  },
  {
    quote:
      "From the first call we had a clear plan, a fixed timeline, and a quote in writing. It never went dark.",
    author: "[Client name]",
    role: "Managing Director",
    company: "[Company name]",
    initials: "MD",
    source: "[Google]", // REVIEW: verified review source once live
  },
];