// Services shown on the home page "What We Do" grid and linked to their
// dedicated service pages (see docs/content-guide.md sitemap).
// Icon is a lucide name; the section component maps it to a component.
export interface Service {
  slug: string;
  icon: string;
  title: string;
  summary: string;
}

export const services: Service[] = [
  {
    slug: "ui-ux-design",
    icon: "PanelsTopLeft",
    title: "UI/UX Design",
    summary:
      "Turning research and user needs into interfaces people enjoy using.",
  },
  {
    slug: "brand-identity",
    icon: "Sparkles",
    title: "Brand Design & Identity",
    summary:
      "Visual identity systems that make a business instantly recognisable.",
  },
  {
    slug: "web-design-development",
    icon: "LayoutTemplate",
    title: "Web Design & Development",
    summary: "Websites built to convert, not just look good.",
  },
  {
    slug: "saas-product-design",
    icon: "Workflow",
    title: "SaaS & Product Design",
    summary: "Complex workflows made simple for SaaS platforms and internal tools.",
  },
  {
    slug: "mvp-builds",
    icon: "Rocket",
    title: "MVP Development",
    summary: "From idea to a working, testable product — fast.",
  },
  {
    slug: "mobile-app-design",
    icon: "Smartphone",
    title: "Mobile App Design",
    summary: "Native and cross-platform app experiences that scale.",
  },
];