import {
  testimonials,
  testimonialsSection,
} from "@/lib/content/home";

/**
 * Proof / testimonials (P4.2): three verified-client quote cards on the dark
 * band, avatar initials set on the CTA gradient (design avatar-placeholder).
 */
export function Testimonials() {
  return (
    <section className="border-y border-white/10 bg-waymarks-dark py-14 text-white sm:py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <p className="text-center text-xs font-semibold uppercase tracking-widest text-waymarks-primary">
          {testimonialsSection.eyebrow}
        </p>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {testimonials.map((item) => (
            <figure
              key={item.author}
              className="flex flex-col rounded-2xl border border-white/10 bg-white/5 p-6"
            >
              <blockquote className="text-base leading-relaxed text-white/85">
                &ldquo;{item.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3">
                <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-waymarks-cta text-sm font-bold text-waymarks-dark">
                  {item.initials}
                </span>
                <span>
                  <span className="block text-sm font-semibold text-white">
                    {item.author}
                  </span>
                  <span className="block text-xs text-white/60">
                    {item.role} @ {item.company}
                  </span>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}