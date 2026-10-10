import Image from "next/image";

import { designThinkingImages } from "@/lib/content/about";

/**
 * "Design Thinking" image band: a quiet two-column collage with no heading or
 * copy, sat directly beneath the Evolution & Legacy timeline. Two landscape
 * frames stack on the left; one tall frame sits on the right
 * (design-system §3).
 */
export function DesignThinking() {
  const { stacked, tall } = designThinkingImages;

  return (
    <section className="border-b border-white/10 bg-waymarks-dark py-20 lg:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="flex flex-col gap-6">
            {stacked.map((image) => (
              <Image
                key={image.src}
                src={image.src}
                alt={image.alt}
                width={image.width}
                height={image.height}
                className="h-auto w-full rounded-2xl border border-white/10 object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            ))}
          </div>
          <Image
            src={tall.src}
            alt={tall.alt}
            width={tall.width}
            height={tall.height}
            className="h-auto w-full rounded-2xl border border-white/10 object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>
      </div>
    </section>
  );
}