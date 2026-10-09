import { aboutUsSection } from "@/lib/content/about";

/**
 * "About Us" section: the two-line headline — white lead, accent close — with
 * the studio's wide "about us" image below. Sits on the page base
 * (`waymarks-dark`) so the `waymarks-surface` bands that close the page read as
 * distinct steps beneath it (design-system §3).
 */
export function AboutUs() {
  return (
    <section className="border-t border-white/10 bg-waymarks-dark py-20 text-white lg:py-18">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
       
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={aboutUsSection.image.src}
          alt={aboutUsSection.image.alt}
          width={aboutUsSection.image.width}
          height={aboutUsSection.image.height}
          className=" aspect-[1280/700] w-full rounded-2xl border border-white/10 object-cover"
        />
      </div>
    </section>
  );
}