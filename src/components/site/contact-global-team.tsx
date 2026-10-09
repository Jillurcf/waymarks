import { contactGlobalTeam } from "@/lib/content/contact";

/**
 * "We're a global team" banner: the two-line headline — white lead,
 * CTA-gradient close — over the studio's wide team image. Sits on a
 * `waymarks-surface` band so it alternates against the dark sections either
 * side of it (design-system §3).
 */
export function ContactGlobalTeam() {
  return (
    <section className="border-b border-white/10 bg-waymarks-surface py-20 text-white lg:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-[32px] text-center font-bold leading-[1.15] tracking-tight text-white sm:text-[40px]">
          {contactGlobalTeam.heading.lead}
          <span className="waymarks-gradient-text block">
            {contactGlobalTeam.heading.highlight}
          </span>
        </h2>

        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={contactGlobalTeam.image.src}
          alt={contactGlobalTeam.image.alt}
          width={contactGlobalTeam.image.width}
          height={contactGlobalTeam.image.height}
          className="mt-12 aspect-[1280/700] w-full rounded-2xl border border-white/10 object-cover"
        />
      </div>
    </section>
  );
}
