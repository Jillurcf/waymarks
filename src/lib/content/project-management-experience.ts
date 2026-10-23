import { icons } from "@/lib/content/icons";
import { bookCallHref } from "@/lib/content/site";

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

export type OurProjectManagementItem = {
  number: string;
  title: string;
  description: string;
  image?: { src: string; alt: string; width: number; height: number };
};

export type OurProjectManagement = {
  heading: { lead: string; highlight: string };
  image: { src: string; alt: string; width: number; height: number };
  cta: { label: string; href: string };
  items: OurProjectManagementItem[];
};

export type WhyWorkWithProjectManagement = {
  heading: { lead: string; highlight: string };
  body: string;
  note: string;
  cta: { label: string; href: string; icon?: string };
  image: { src: string; alt: string; width: number; height: number };
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

// "Our Project Management Services" band: a centred white/gradient heading
// over a two-up grid. Card 01 copy is confirmed; cards 02–04 are SEED — titles
// drawn from the service line-up and to confirm against the approved design.
export const ourProjectManagement: OurProjectManagement = {
  heading: {
    lead: "Our Project",
    highlight: "Management Services",
  },
  image: {
    src: "/images/project_mangement/our_project_management/project_mangement01.png",
    alt: "Waymark project management services",
    width: 590,
    height: 350,
  },
  cta: { label: "Explore Growth Articles", href: "/blog/" },
  items: [
    {
      number: "01",
      title: "Project Delivery Coordination",
      description:
        "Plan milestones, tasks, and dependencies for website, software, and digital client projects.",
    },
    {
      number: "02",
      title: "Process Mapping & SOPs",
      description:
        "Turn unclear routines into documented steps, owners, and checklists your team can follow.",
      image: {
        src: "/images/project_mangement/our_project_management/project_mangement02.png",
        alt: "Process mapping and SOP documentation",
        width: 590,
        height: 350,
      },
    },
    {
      number: "03",
      title: "Workflow Automation",
      description:
        "Set up reminders and approval rules in ClickUp or Jira so routine steps run on their own.",
      image: {
        src: "/images/project_mangement/our_project_management/project_mangement03.png",
        alt: "Workflow automation and approval rules",
        width: 590,
        height: 350,
      },
    },
    {
      number: "04",
      title: "Reporting & Follow Through",
      description:
        "Share status, workload, risks, and decisions in updates that are easy to read.",
      image: {
        src: "/images/project_mangement/our_project_management/project_mangement04.png",
        alt: "Project reporting and follow-through updates",
        width: 590,
        height: 350,
      },
    },
  ],
};

// "Why Work With a Project Management Partner?" band: a two-up split with the
// supporting visual on the left and the argument plus CTA on the right.
export const whyWorkWithProjectManagement: WhyWorkWithProjectManagement = {
  heading: {
    lead: "Why Work With a Project",
    highlight: "Management Partner?",
  },
  body: "Many teams have talented people but no shared way of working. Tasks live in different places, reviews run late, and updates depend on who remembers to send them.",
  note: "Our project management services connect planning, people, and reporting. Everyone knows their part, risks show up early, and launches feel calm instead of rushed.",
  cta: {
    label: "Talk to Our Project Manager",
    href: bookCallHref,
    icon: icons.arrowRight,
  },
  image: {
    src: "/images/project_mangement/why_work_with.png",
    alt: "Why work with a Waymark project management partner",
    width: 620,
    height: 500,
  },
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
    {
      icon: icons.intakeApprovals,
      label: "Intake & Approvals",
      size: "original",
      description: "Streamlined intake and approval routines to prevent bottlenecks before they form.",
    },
    {
      icon: icons.statusWorkload,
      label: "Status & Workload",
      size: "original",
      description: "Clear status and workload reporting so management and team leads stay aligned.",
    },
    {
      icon: icons.riskDependency,
      label: "Risk & Dependency Records",
      size: "original",
      description: "Proactive tracking of project risks, dependencies, and decisions so nothing falls through the cracks.",
    },
  ],
};
