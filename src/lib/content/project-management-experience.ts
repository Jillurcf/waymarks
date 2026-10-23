import { icons } from "@/lib/content/icons";

export type ProjectManagementExperienceItem = {
  icon: string;
  title: string;
  description: string;
};

export type ProjectManagementExperience = {
  years: string;
  yearsLabel: string;
  heading: string;
  note: string;
  body: string;
  coversLabel: string;
  items: ProjectManagementExperienceItem[];
};

export const projectManagementExperience: ProjectManagementExperience = {
  years: "14+",
  yearsLabel: "Years",
  heading: "Led By Team Members With 14+ Years Of Experience",
  note: "Individual experience in software delivery, business intelligence, and operations.",
  body: "Our project management services are led by team members with 14+ years of individual experience, so the people planning your project have already handled the problems it may face.",
  coversLabel: "What That Experience Covers",
  items: [
    {
      icon: icons.softwareDelivery,
      title: "Software Delivery",
      description: "Planning, QA, and release work across multiple products.",
    },
    {
      icon: icons.remoteTeams,
      title: "Remote Teams",
      description: "Coordination across designers, developers, QA, and clients.",
    },
    {
      icon: icons.biOperations,
      title: "BI & Operations",
      description: "Reporting, data checks, and management updates.",
    },
  ],
};
