import { leadership } from "@/lib/content/about";

/**
 * "Leadership" section: a white eyebrow and gradient headline above an intro
 * paragraph, a row of two founder cards (photo, name, role), and a closing
 * principle statement beside a brand left rule (design-system §4 testimonial
 * pattern). Sits on a `waymarks-surface` band so the page alternates steps
 * beneath it.
 */
export function Leadership() {
  return (
    <section className="bg-waymarks-surface py-20 text-white lg:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <header className="text-center">
          <small className="block text-sm font-semibold text-[40px] tracking-widest text-white">
            {leadership.label}
          </small>
          <h2 className="mt-3 text-[40px] font-bold leading-[1.15] tracking-tight">
            <span className="block waymarks-gradient-text">
              {leadership.heading}
            </span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-xl font-normal leading-relaxed text-white/60">
            {leadership.intro}
          </p>
        </header>

<div className="mt-12 grid gap-6 lg:grid-cols-2">
          {leadership.founders.map((founder) => (
            <article
              key={founder.name}
              className="rounded-2xl border border-white/10 bg-waymarks-surface-raised p-6 text-left"
            >
              <div className="flex items-center gap-6">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={founder.image.src}
                  alt={founder.image.alt}
                  width={founder.image.width}
                  height={founder.image.height}
                  className="size-20 shrink-0 self-center object-cover"
                />
                <div className="flex min-w-0 flex-1 flex-col justify-center">
                  <h3 className="text-xl font-bold leading-snug text-white">
                    {founder.name}
                  </h3>
                  <p className="mt-1.5 text-sm font-normal leading-snug text-white/60">
                    {founder.role}
                  </p>
                </div>
              </div>

              <p className="mt-6 border-l-2 border-waymarks-primary pl-5 text-sm font-normal leading-relaxed text-white/75">
                {founder.quote}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}