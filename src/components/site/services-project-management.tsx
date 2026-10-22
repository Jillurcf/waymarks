import { servicesProjectManagement } from "@/lib/content/services";

import { Icon } from "./icon";
import { ProjectManagementIcon } from "./project-management-icon";

/**
 * Project management spotlight: centered stack (icon → heading → body → visual
 * → CTA) so it reads as a distinct closing service band while keeping the
 * `waymarks-surface` ramp and typography of the other spotlights.
 */
export function ServicesProjectManagement() {
  return (
    <section
      id="project-management-services"
      className="border-b border-white/10 bg-waymarks-surface py-20 text-white lg:py-24"
    >
      <div className="container">
        <div className="flex flex-col items-center text-center">
          <div className="lg:flex gap-4 mx-auto justify-center items-center">
            <div className="flex items-center justify-center gap-4">
              <ProjectManagementIcon />
              <h2 className="text-4xl font-bold tracking-tight text-white">
                {servicesProjectManagement.title}
              </h2>
            </div>
          </div>
          <p className="mt-4 max-w-2xl text-sm font-semibold leading-relaxed text-muted-foreground">
            {servicesProjectManagement.body}
          </p>

          {/* Feature visual. Plain img: images.unoptimized makes next/image pure
              overhead (quality gate C). */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={servicesProjectManagement.image.src}
            alt={servicesProjectManagement.image.alt}
            width={882}
            height={450}
            className="mt-10 w-full rounded-2xl border border-white/10 object-cover"
          />


        </div>
        <div className="flex justify-center lg:justify-end">
          <a
            href={servicesProjectManagement.cta.href}
            className="mt-8 inline-flex items-center gap-1.5 text-sm font-semibold text-waymarks-service-accent transition-colors hover:text-waymarks-primary"
          >
            {servicesProjectManagement.cta.label}
            <Icon name={servicesProjectManagement.cta.icon} className="size-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
