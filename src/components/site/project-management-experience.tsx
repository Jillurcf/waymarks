import { projectManagementExperience as experience } from "@/lib/content/project-management-experience";

import { Icon } from "./icon";

/**
 * Project management experience band: years-led summary on the left, the
 * supporting argument and three coverage cards on the right. Sits directly
 * below the service hero as a raised frame on the dark base.
 */
export function ProjectManagementExperience() {
  return (
    <section
      aria-labelledby="project-management-experience-heading"
      className="border-b border-white/10 bg-white/3 py-12 text-white lg:py-16"
    >
      <div className="container">
        <div className="grid grid-cols-1 items-center gap-8 rounded-2xl border border-white/10 bg-white/3 p-5 shadow-card sm:p-7 lg:grid-cols-[32%_1fr] lg:gap-7 lg:p-8 ">
          <div className="flex flex-col justify-center border-b border-white/10 pb-6 lg:min-h-[145px] lg:border-r lg:border-b-0 lg:pb-0 lg:pr-7">
            <div className="flex items-baseline gap-3">
              <span className="text-5xl font-bold leading-none tracking-tight text-waymarks-primary tabular-nums sm:text-6xl">
                {experience.years}
              </span>
              <span className="text-lg font-bold text-waymarks-primary">
                {experience.yearsLabel}
              </span>
            </div>

            <h2
              id="project-management-experience-heading"
              className="mt-3 max-w-xs text-sm font-bold leading-5 text-white"
            >
              {experience.heading}
            </h2>

            <p className="mt-2 max-w-xs text-xs leading-relaxed text-muted-foreground">
              {experience.note}
            </p>
          </div>

          <div className="min-w-0">
            <p className="max-w-2xl text-sm leading-relaxed text-white/80">
              {experience.body}
            </p>

            <h3 className="mt-4 mb-2 text-xs font-bold uppercase tracking-wide text-waymarks-primary">
              {experience.coversLabel}
            </h3>

            <div className="grid grid-cols-1 gap-2 sm:grid-cols-3">
              {experience.items.map((item) => (
                <div
                  key={item.title}
                  className="rounded-lg border border-white/10 bg-white/3 p-3 transition-colors duration-200 hover:border-waymarks-primary/60"
                >
                  <Icon
                    name={item.icon}
                    className="mb-2 size-9 text-waymarks-primary"
                  />

                  <h4 className="text-sm font-semibold leading-5 text-white">
                    {item.title}
                  </h4>

                  <p className="mt-0.5 text-xs leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
