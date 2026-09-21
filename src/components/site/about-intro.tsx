import { Target, UserCheck, type LucideIcon } from "lucide-react";

import { Reveal } from "@/components/site/reveal";
import { SecondaryCtaLink } from "@/components/site/cta";
import { SectionHeading } from "@/components/site/section-heading";
import { FounderQuoteCard } from "@/components/site/founder-quote-card";
import { aboutIntro } from "@/lib/content/home";
import { proofStats } from "@/lib/content/stats";
import { team } from "@/lib/content/team";

// Block 3 — About intro (template .about-us). The template's client-photo
// strip becomes an overlapping team-avatar row with a satisfaction chip, and
// the founder photo/signature become a dark quote card with a display-type
// signature line (no scraped photography ships — conversion register C0.2).
const iconMap: Record<string, LucideIcon> = {
  UserCheck,
  Target,
};

export function AboutIntro() {
  const satisfaction = proofStats.find((stat) => stat.icon === "Star");

  return (
    <section aria-labelledby="about-intro-title" className="py-20 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Visual column: avatar strip + founder quote card */}
          <Reveal>
            <div className="flex flex-wrap items-center gap-4">
              <div className="flex -space-x-3">
                {team.map((member) =>
                  member.photo ? (
                    <img
                      key={member.name}
                      src={member.photo}
                      alt=""
                      width={940}
                      height={1080}
                      loading="lazy"
                      className="size-12 rounded-full border-2 border-background object-cover"
                    />
                  ) : (
                    <span
                      key={member.name}
                      className="flex size-12 items-center justify-center rounded-full border-2 border-background bg-waymarks-secondary text-xs font-semibold text-white"
                      aria-hidden="true"
                    >
                      {member.initials}
                    </span>
                  ),
                )}
              </div>
              {satisfaction ? (
                <p className="text-sm text-muted-foreground">
                  <span className="font-semibold tabular-nums text-waymarks-secondary">
                    {satisfaction.value}
                  </span>{" "}
                  {satisfaction.label.toLowerCase()}
                </p>
              ) : null}
            </div>

            <FounderQuoteCard />
          </Reveal>

          {/* Content column: heading, feature list, CTA */}
          <Reveal delay={100}>
            <SectionHeading
              align="left"
              eyebrow={aboutIntro.eyebrow}
              title={aboutIntro.title}
              description={aboutIntro.description}
              id="about-intro-title"
              className="mb-10"
            />
            <ul className="space-y-6">
              {aboutIntro.features.map((feature) => {
                const Icon = iconMap[feature.icon] ?? Target;
                return (
                  <li key={feature.title} className="flex items-start gap-4">
                    <span className="flex size-11 shrink-0 items-center justify-center rounded-lg bg-waymarks-primary/10 text-waymarks-secondary">
                      <Icon className="size-5" aria-hidden="true" />
                    </span>
                    <div>
                      <h3 className="text-base font-medium tracking-tight">
                        {feature.title}
                      </h3>
                      <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                        {feature.body}
                      </p>
                    </div>
                  </li>
                );
              })}
            </ul>
            <div className="mt-10">
              <SecondaryCtaLink href={aboutIntro.cta.href}>
                {aboutIntro.cta.label}
              </SecondaryCtaLink>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
