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

export type ProjectManagementServicesHelp = {
  heading: { lead: string; highlight: string };
  body: { lead: string; note: string };
  image: { src: string; alt: string; width: number; height: number };
  items: { icon: string; label: string; size?: "original"; description?: string }[];
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

// "Where our project management services can help" band: mirrors the website
// design services layout, listing the project types the service covers.
// SEED — body and item labels to confirm against the approved service line-up.
export const projectManagementServicesHelp: ProjectManagementServicesHelp = {
  heading: {
    lead: "Where Our Project Management",
    highlight: "Services Can Help",
  },
  body: {
    lead: "Pick the part of our project management services that matches your need today.",
    note: "Automation works best when the process is clear first, so our project management services map the steps before we automate them.",
  },
  image: {
    src: "/images/project_mangement/where_our_project.png",
    alt: "Waymark project management services",
    width: 450,
    height: 782,
  },
  items: [
    {
      icon: icons.teamCoordination,
      label: "Team Coordination",
      size: "original",
      description: "Designer, developer, and QA synchronization across all development sprints.",
    },
    {
      icon: icons.clientReviews,
      label: "Client Reviews & Releases",
       size: "original",
      description: "Structured client reviews, transparent updates, and rigorous release checks.",
    },
    { icon: icons.launch, label: "Digital Product Launches" },
    { icon: icons.remoteTeams, label: "Multi-Stakeholder Teams" },
    { icon: icons.arrowRight, label: "Design & Development Handoffs" },
    { icon: icons.clock3, label: "Ongoing Delivery" },
  ],
};
