import { capabilitiesSection } from "@/lib/content/home";

/**
 * Capabilities (P4.4): pill chips on the section band (design
 * btn-secondary-light labels, cursor default — they are not links).
 */
export function Capabilities() {
  return (
    <section className="border-y border-border bg-waymarks-surface py-20 lg:py-24">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-12 px-4 sm:px-6 lg:flex-row lg:items-stretch lg:gap-16 lg:px-8">

        {/* Content */}
        <div className="w-full lg:w-9/12">
          <h2 className="max-w-4xl text-2xl font-bold tracking-tight text-foreground sm:text-4xl">
            {capabilitiesSection.title}
          </h2>

          <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            {capabilitiesSection.intro}
          </p>

          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
            {capabilitiesSection.body}
          </p>

          <h3 className="mt-2 text-[28px] font-medium text-white">
            {capabilitiesSection.subheading}
          </h3>

          <ul className="mt-6 flex flex-wrap gap-3">
            {capabilitiesSection.chips.map((chip) => (
              <li
                key={chip}
                className="rounded-full border border-white/15 bg-white/5 px-5 py-2.5 text-sm font-semibold text-white"
              >
                {chip}
              </li>
            ))}
          </ul>
        </div>

        {/* Image */}
        <div className="lg:flex lg:w-4/12 lg:items-center">
          <img
            src="/images/3DLogo_capabilities.png"
            // alt={capabilitiesSection.image.alt}
            className="h-auto w-full rounded-3xl lg:h-full lg:w-full "
          />
        </div>

      </div>
    </section>
  );
}
