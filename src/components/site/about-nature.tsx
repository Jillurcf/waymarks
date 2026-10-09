import { aboutNature } from "@/lib/content/about";

/**
 * Nature hill banner: a single full-width image with no heading or copy, sat
 * directly beneath the "What Makes Our Global Digital Studio Different" band.
 * Sits on the page base (`waymarks-dark`) so it reads as a quiet breath between
 * the numbered steps above and the closing CTA below (design-system §3).
 */
export function AboutNature() {
  return (
    <section className="border-b border-white/10 bg-waymarks-dark py-20 text-white lg:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={aboutNature.image.src}
          alt={aboutNature.image.alt}
          width={aboutNature.image.width}
          height={aboutNature.image.height}
          className="aspect-[1280/450] w-full rounded-2xl border border-white/10 object-cover"
        />
      </div>
    </section>
  );
}
