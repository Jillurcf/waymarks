import { Bot, Cloud, Coffee } from "lucide-react";
import type { ComponentType } from "react";
import {
  siCloudflare,
  siFigma,
  siFirebase,
  siGit,
  siHostinger,
  siKotlin,
  siMongodb,
  siMysql,
  siNextdotjs,
  siNodedotjs,
  siPostgresql,
  siPrisma,
  siPython,
  siReact,
  siSwift,
  siTailwindcss,
  siTypescript,
  siWebflow,
  siWordpress,
  type SimpleIcon,
} from "simple-icons";

import { technologiesSection } from "@/lib/content/technologies";

/** Simple Icons renders monochrome through `fill="currentColor"`, so the row's
 *  brand tint (set on the wrapping span) colours the mark. */
function SimpleGlyph({
  icon,
  className,
}: {
  icon: SimpleIcon;
  className?: string;
}) {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className={className}>
      <path d={icon.path} fill="currentColor" />
    </svg>
  );
}

// Icon key -> glyph. Simple Icons where the brand mark exists; lucide stand-ins
// for the brands Simple Icons no longer ships (Java, OpenAI/AI, AWS).
const simpleGlyphs: Record<string, SimpleIcon> = {
  python: siPython,
  react: siReact,
  nextjs: siNextdotjs,
  node: siNodedotjs,
  typescript: siTypescript,
  wordpress: siWordpress,
  webflow: siWebflow,
  tailwindcss: siTailwindcss,
  figma: siFigma,
  kotlin: siKotlin,
  swift: siSwift,
  firebase: siFirebase,
  git: siGit,
  mongodb: siMongodb,
  postgresql: siPostgresql,
  mysql: siMysql,
  prisma: siPrisma,
  hostinger: siHostinger,
  cloudflare: siCloudflare,
};

const lucideGlyphs: Record<string, ComponentType<{ className?: string }>> = {
  java: Coffee,
  ai: Bot,
  aws: Cloud,
};

/**
 * "Technologies & Platforms — Our Team Builds With" band. Sits on the dark base
 * so the alternating section rhythm holds against the surrounding surface bands
 * (design-system §3). The first heading line stays white; the second closes on
 * the CTA gradient. Below, each technology shows its brand mark over its name.
 */
export function TechnologiesSection() {
  return (
    <section className="border-b border-white/10 bg-waymarks-dark py-20 text-white lg:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-12 max-w-2xl text-center sm:mb-16">
          <div className="mx-auto mb-5 h-[3px] w-6 rounded-full bg-waymarks-primary" />

          <h2 className="text-2xl font-bold leading-tight tracking-tight sm:text-3xl md:text-4xl">
            <span className="block">{technologiesSection.heading.lead}</span>
            <span className="block waymarks-gradient-text">
              {technologiesSection.heading.highlight}
            </span>
          </h2>
        </div>

        <ul className="grid grid-cols-2 gap-x-5 gap-y-8 sm:grid-cols-3 sm:gap-x-8 md:grid-cols-4 lg:grid-cols-5 lg:gap-x-10">
          {technologiesSection.items.map((tech) => {
            const Simple = simpleGlyphs[tech.icon];
            const Lucide = lucideGlyphs[tech.icon];

            return (
              <li
                key={tech.name}
                className="group flex min-w-0 items-center gap-3 rounded-lg py-2 transition-transform duration-300 motion-safe:hover:-translate-y-0.5"
              >
                <span className="shrink-0" style={{ color: tech.color }}>
                  {Simple ? (
                    <SimpleGlyph
                      icon={Simple}
                      className="h-6 w-6 transition-transform duration-300 motion-safe:group-hover:scale-110 sm:h-7 sm:w-7"
                    />
                  ) : Lucide ? (
                    <Lucide className="h-6 w-6 transition-transform duration-300 motion-safe:group-hover:scale-110 sm:h-7 sm:w-7" />
                  ) : null}
                </span>

                <span className="text-sm font-semibold text-white/75 transition-colors duration-300 group-hover:text-white sm:text-base">
                  {tech.name}
                </span>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
