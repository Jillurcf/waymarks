// "Technologies & Platforms — Our Team Builds With" band on the website design
// and development route. Icon keys resolve to glyphs in
// `src/components/site/technologies-section.tsx`; colours are read straight off
// each Simple Icons mark so no brand colour is invented. The only overrides are
// for legibility on the dark ramp and for the brands Simple Icons no longer
// ships (see the SEED notes below).

import {
  siCloudflare,
  siFigma,
  siFirebase,
  siGit,
  siHostinger,
  siKotlin,
  siMongodb,
  siMysql,
  siNodedotjs,
  siPostgresql,
  siPython,
  siReact,
  siSwift,
  siTailwindcss,
  siTypescript,
  siWebflow,
  siWordpress,
  type SimpleIcon,
} from "simple-icons";

const brand = (icon: SimpleIcon) => `#${icon.hex}`;

export type Technology = {
  name: string;
  /** Glyph key resolved in `technologies-section.tsx`. */
  icon: string;
  /** Brand tint applied to the glyph. */
  color: string;
};

export const technologiesSection = {
  heading: {
    lead: "Technologies & Platforms",
    highlight: "Our Team Builds With",
  },
  items: [
    { name: "Python", icon: "python", color: brand(siPython) },
    { name: "React", icon: "react", color: brand(siReact) },
    // Next.js ships a black mark — white keeps it legible on the dark ramp.
    { name: "Next.js", icon: "nextjs", color: "var(--color-waymarks-light)" },
    { name: "Node.js", icon: "node", color: brand(siNodedotjs) },
    { name: "TypeScript", icon: "typescript", color: brand(siTypescript) },

    { name: "WordPress", icon: "wordpress", color: brand(siWordpress) },
    { name: "Webflow", icon: "webflow", color: brand(siWebflow) },
    { name: "Tailwind CSS", icon: "tailwindcss", color: brand(siTailwindcss) },
    { name: "Figma", icon: "figma", color: brand(siFigma) },
    // SEED — Simple Icons no longer ships a Java mark; a coffee-cup stand-in on
    // the brand accent green. Confirm the glyph with the studio.
    { name: "Java", icon: "java", color: "var(--color-waymarks-accent)" },

    { name: "Kotlin", icon: "kotlin", color: brand(siKotlin) },
    { name: "Swift", icon: "swift", color: brand(siSwift) },
    // SEED — Simple Icons no longer ships an OpenAI mark; a bot stand-in on the
    // brand accent green. Confirm the glyph with the studio.
    { name: "AI Automation", icon: "ai", color: "var(--color-waymarks-accent)" },
    // SEED — Simple Icons no longer ships an AWS mark; a cloud stand-in on the
    // brand accent green. Confirm the glyph with the studio.
    { name: "AWS", icon: "aws", color: "var(--color-waymarks-accent)" },
    { name: "Firebase", icon: "firebase", color: brand(siFirebase) },
    { name: "Git", icon: "git", color: brand(siGit) },

    { name: "MongoDB", icon: "mongodb", color: brand(siMongodb) },
    { name: "PostgreSQL", icon: "postgresql", color: brand(siPostgresql) },
    { name: "MySQL", icon: "mysql", color: brand(siMysql) },
    // Prisma ships a dark slate mark — white keeps it legible on the dark ramp.
    { name: "Prisma", icon: "prisma", color: "var(--color-waymarks-light)" },
    { name: "Hostinger", icon: "hostinger", color: brand(siHostinger) },
    { name: "Cloudflare", icon: "cloudflare", color: brand(siCloudflare) },
  ] satisfies Technology[],
};
