import {
  Compass,
  Handshake,
  Lightbulb,
  Rocket,
  type LucideIcon,
} from "lucide-react";

import {
  evolutionTimeline,
  type EvolutionMilestone,
} from "@/lib/content/about";

import "./evolution-timeline.css";

const milestoneIcons: Record<EvolutionMilestone["icon"], LucideIcon> = {
  lightbulb: Lightbulb,
  handshake: Handshake,
  compass: Compass,
  rocket: Rocket,
};

function MilestoneIcon({ name }: { name: EvolutionMilestone["icon"] }) {
  const Icon = milestoneIcons[name];
  return <Icon className="size-6" strokeWidth={1.5} aria-hidden="true" />;
}

/**
 * "Evolution & Legacy" section: a two-line headline — white lead, CTA-gradient
 * close — over an alternating milestone timeline. Each milestone card sits
 * opposite its marker on the centre line, with the final step filled in
 * primary green (design-system §1).
 */
export function EvolutionTimeline() {
  const { heading, lead, caption, milestones } = evolutionTimeline;

  return (
    <section className="bg-waymarks-surface py-20 text-white lg:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <header className="text-center">
          <h2 className="text-[32px] font-bold leading-[1.15] tracking-tight sm:text-[40px]">
            <span className="block text-white">{heading.lead}</span>
            <span className="block waymarks-gradient-text">{heading.highlight}</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg font-normal leading-relaxed text-white/75">
            {lead}
          </p>
          <small className="mt-3 block text-sm font-semibold uppercase tracking-widest text-waymarks-primary">
            {caption}
          </small>
        </header>

        <div className="timeline">
          <div className="timeline-line" aria-hidden="true" />

          {milestones.map((item, index) => (
            <article
              key={item.title}
              className={`timeline-item timeline-${item.side}`}
            >
              <div className="timeline-card">
                <span className="timeline-year text-sm font-bold uppercase tracking-widest text-waymarks-accent">
                  {item.year}
                </span>
                <h3 className="mt-2 text-xl font-bold text-white">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-white/75 sm:text-base">
                  {item.description}
                </p>
              </div>

              <div
                className={`timeline-marker${
                  index === milestones.length - 1 ? " timeline-marker-active" : ""
                }`}
                aria-hidden="true"
              >
                <MilestoneIcon name={item.icon} />
              </div>

              <div className="timeline-spacer" aria-hidden="true" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}