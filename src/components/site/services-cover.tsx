import { servicesCover } from "@/lib/content/services";

/**
 * Services page cover band. Sits between the hero and the service grid on a
 * `waymarks-surface` band (dark hero → surface cover → dark grid), separated by
 * `border-white/10` hairlines. The closing phrase of the heading carries the
 * CTA gradient as a hero highlight; the lead-in stays white.
 */
export function ServicesCover() {
  return (
    <section className="border-y border-white/10 bg-waymarks-surface py-20 text-white lg:py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <h2 className="max-w-3xl text-center text-[40px] font-bold tracking-tight sm:text-4xl lg:text-5xl">
          {servicesCover.heading.lead}{" "}
          <span className="waymarks-gradient-text">
            {servicesCover.heading.highlight}
          </span>
        </h2>
        <p className="mt-6 max-w-xl text-center text-xs mx-auto leading-relaxed text-muted-foreground sm:text-lg">
          {servicesCover.body}
        </p>
      </div>
    </section>
  );
}