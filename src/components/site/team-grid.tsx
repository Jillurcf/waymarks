import { MapPin } from "lucide-react";

import { Reveal } from "@/components/site/reveal";
import { SectionHeading } from "@/components/site/section-heading";
import { aboutLocations, aboutTeam } from "@/lib/content/about";
import { team } from "@/lib/content/team";

// Team grid on /about (C3.1), absorbing the template's team.html fold.
// Real portraits come from team.ts; an initials plate stands in until a
// member's photo is available.
export function TeamGrid() {
  return (
    <section id="team" aria-labelledby="team-title" className="py-20 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow={aboutTeam.eyebrow}
          title={aboutTeam.title}
          description={aboutTeam.description}
          id="team-title"
        />
        <Reveal>
          <ul className="grid grid-cols-2 gap-6 md:grid-cols-4">
            {team.map((member, i) => (
              <li
                key={`${member.name}-${i}`}
                className="overflow-hidden rounded-xl border border-border bg-card text-center"
              >
                {member.photo ? (
                  <img
                    src={member.photo}
                    alt={`${member.name}, ${member.role}`}
                    width={940}
                    height={1080}
                    loading="lazy"
                    className="aspect-[47/54] w-full object-cover"
                  />
                ) : (
                  <span
                    className="flex aspect-[47/54] w-full items-center justify-center bg-waymarks-secondary text-2xl font-semibold text-white"
                    aria-hidden="true"
                  >
                    {member.initials}
                  </span>
                )}
                <div className="flex flex-col items-center gap-3 p-4 sm:p-6">
                  <p className="text-sm font-medium">{member.name}</p>
                  <p className="mt-0.5 text-xs text-muted-foreground">
                    {member.role}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </Reveal>

        {/* Locations note (FR-15) */}
        <Reveal delay={100}>
          <div className="mt-10 flex flex-col items-start gap-4 rounded-xl border border-waymarks-primary/30 bg-waymarks-primary/5 p-6 sm:flex-row sm:items-center">
            <span className="flex size-11 shrink-0 items-center justify-center rounded-lg bg-waymarks-primary/15 text-waymarks-secondary">
              <MapPin className="size-5" aria-hidden="true" />
            </span>
            <div>
              <h3 className="text-base font-medium tracking-tight">
                {aboutLocations.title}
              </h3>
              <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                {aboutLocations.body}
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
