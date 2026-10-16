import Image from "next/image";

import { blogTopPicks, type BlogTopPick } from "@/lib/content/blog";

/**
 * "Top Picks" band: white eyebrow → gradient "Featured Articles" heading, then
 * one full-width featured card and a paired row of two cards. Each card is
 * framed by a `white/25` hairline on the dark base, with the headline in white,
 * the standfirst in `waymarks-accent`, and the artwork below (design-system §1,
 * §3 — the hairline is the blog layout's stronger variant).
 */
function PickCard({
  pick,
  sizes,
  aspect,
}: {
  pick: BlogTopPick;
  sizes: string;
  aspect: string;
}) {
  return (
    <article className="flex flex-col gap-5">
      <div className="flex flex-col gap-3 mx-auto lg:max-w-2xl">
        <h3 className="text-[28px] font-bold leading-snug tracking-tight text-white text-center">
          {pick.title}
        </h3>
        <p className="text-xl font-normal leading-relaxed text-waymarks-accent text-center">
          {pick.body}
        </p>
      </div>

      <div className={`relative w-full ${aspect}`}>
        <Image
          src={pick.image.src}
          alt={pick.image.alt}
          fill
          sizes={sizes}
          className="object-contain"
        />
      </div>
    </article>
  );
}

export function BlogTopPicks() {
  const { label, title, featured, picks } = blogTopPicks;

  return (
    <section className="border-t border-white/10 bg-waymarks-dark text-white">
      <div className="container flex flex-col gap-10 py-20 lg:py-24">
        <div className="flex flex-col gap-3 mx-auto">
          <p className="text-[40px] font-semibold tracking-widest text-white text-center">
            {label}
          </p>
          <h2 className="waymarks-gradient-text text-[40px] font-bold leading-tight tracking-tight">
            {title}
          </h2>
        </div>

        <div className="flex flex-col gap-10 mx-auto">
          <div className="rounded-2xl border border-white/25 p-6 sm:p-8">
            <PickCard
              pick={featured}
              aspect="aspect-[1238/550]"
              sizes="(max-width: 1280px) 100vw, 1280px"
            />
          </div>

          <div className="rounded-2xl border border-white/25 p-6 sm:p-8">
            <div className="grid gap-10 md:grid-cols-2 md:gap-12">
              {picks.map((pick) => (
                <PickCard
                  key={pick.title}
                  pick={pick}
                  aspect="aspect-[6/5]"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
