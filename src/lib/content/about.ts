// About page content (C3.1, FR-15): story/founder, values/benefits, team,
// locations, and FAQ. Founder and team identities live in team.ts; process
// and facts sections reuse the shared home/stats modules.
import type { ServiceFaq } from "@/lib/content/services";

export const aboutHeader = {
  eyebrow: "About Waymark",
  title: "A small studio with senior hands",
  description:
    "Waymark is a compact digital product studio in Dubai. Meet the team, see how we work, and decide whether we're the right partner for your product.",
};

export const aboutStory = {
  eyebrow: "Our story",
  title: "Agency-grade work, minus the agency bloat",
  paragraphs: [
    "Waymark started with a simple observation: founders don't miss out on good product work because agencies are too expensive — they miss out because the process is slow, layered, and opaque.",
    "So we built a compact studio. You work directly with the senior people designing and building your product. Decisions happen in days, and every project starts from the metric it must move.",
  ],
  cta: { label: "See how we price projects", href: "/pricing" },
};

export const aboutBenefits = {
  eyebrow: "Why Waymarks",
  title: "What every engagement includes",
  description:
    "However large or small the project, these four things are non-negotiable.",
  items: [
    {
      icon: "UserCheck",
      title: "Senior-only team",
      body: "No juniors learning on your budget — the people who scope your project are the people who deliver it.",
    },
    {
      icon: "Target",
      title: "Outcome-first scoping",
      body: "Every project starts from the metric it must move: signups, checkout completion, retention.",
    },
    {
      icon: "FileCheck",
      title: "Fixed quotes, written scope",
      body: "You approve scope and price before work starts. No hourly drift, no surprise invoices.",
    },
    {
      icon: "MessagesSquare",
      title: "Weekly demos",
      body: "You see progress every week in plain language — not a monthly slide deck.",
    },
  ],
};

export const aboutTeam = {
  eyebrow: "The team",
  title: "The people you'll actually work with",
  description:
    "No account-manager relay. Your project is delivered by the people below.", // SEED: refine once real bios exist
};

export const aboutLocations = {
  eyebrow: "Studio",
  title: "Based in Dubai, working worldwide",
  body: "Our studio is in Dubai, and we work with clients across time zones. Discovery calls, demos, and reviews run over video, with working hours that overlap the UAE, UK, and EU.",
};

export const aboutFaqHeading = {
  eyebrow: "FAQ",
  title: "About working with us",
  description: "The questions founders ask before the first call.",
};

export const aboutFaqs: ServiceFaq[] = [
  {
    question: "Who will actually work on my project?",
    answer:
      "The senior team you meet on the discovery call — the same people from kickoff to launch.",
  },
  {
    question: "What size of companies do you work with?",
    answer:
      "Mostly startups and growing businesses — from a first MVP to established products that need a redesign.",
  },
  {
    question: "Where is Waymark based?",
    answer:
      "Dubai, UAE. We work with clients worldwide and schedule around their time zones.",
  },
  {
    question: "Can you join a project that's already running?",
    answer:
      "Often, yes. After a short audit we can pick up an in-flight project or plug design capability into your existing team.",
  },
];
