import { capabilitiesSection } from "@/lib/content/home";

/**
 * Capabilities (P4.4): pill chips on a surface section (design
 * btn-secondary-light labels, cursor default — they are not links).
 */
export function Capabilities() {
  return (
    <section className="border-t border-border bg-muted py-20 lg:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 className="max-w-2xl text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          {capabilitiesSection.title}
        </h2>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
          {capabilitiesSection.intro}
        </p>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
          {capabilitiesSection.body}
        </p>

        <h3 className="mt-12 text-2xl font-medium text-waymarks-secondary">
          {capabilitiesSection.subheading}
        </h3>
        <ul className="mt-6 flex flex-wrap gap-3">
          {capabilitiesSection.chips.map((chip) => (
            <li
              key={chip}
              className="rounded-full border border-waymarks-secondary/30 px-5 py-2.5 text-sm font-semibold text-waymarks-secondary"
            >
              {chip}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}