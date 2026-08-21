import { Star } from "lucide-react";

import { Reveal } from "@/components/site/reveal";
import { SectionHeading } from "@/components/site/section-heading";
import {
  testimonials,
  testimonialsSection,
} from "@/lib/content/testimonials";

// Testimonial block (template .our-testimonials), shared by home, /about and
// /services (implementation plan §2). Per the C0.3 decision this is a CSS
// scroll-snap row — no carousel dependency. The scroll region is keyboard
// focusable; nothing auto-plays, so prefers-reduced-motion needs no special
// handling. Heading copy comes from testimonials.ts; pages may override it.
export function Testimonials({
  eyebrow,
  title,
  description,
}: {
  eyebrow?: string;
  title?: string;
  description?: string;
}) {
  return (
    <section
      id="testimonials"
      aria-labelledby="testimonials-title"
      className="bg-secondary/30 py-20 sm:py-32"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow={eyebrow ?? testimonialsSection.eyebrow}
          title={title ?? testimonialsSection.title}
          description={description ?? testimonialsSection.description}
          id="testimonials-title"
        />
      </div>
      <Reveal>
        <div
          role="region"
          aria-label="Client testimonials"
          tabIndex={0}
          className="focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/50"
        >
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="overflow-x-auto pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
              <ul className="flex snap-x snap-mandatory gap-6">
                {testimonials.map((t, i) => (
                  <li
                    key={`${t.author}-${i}`}
                    className="w-[85%] shrink-0 snap-start sm:w-96"
                  >
                    <figure className="flex h-full flex-col gap-4 rounded-xl border border-border bg-card p-6">
                      <span
                        className="flex items-center gap-1"
                        aria-label="5 out of 5 stars"
                      >
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Star
                            key={i}
                            className="size-4 fill-waymarks-primary text-waymarks-primary"
                            aria-hidden="true"
                          />
                        ))}
                      </span>
                      <blockquote className="flex-1 border-l-2 border-waymarks-primary pl-4 text-sm leading-relaxed text-foreground">
                        “{t.quote}”
                      </blockquote>
                      <figcaption className="flex items-center gap-3">
                        <span
                          className="flex size-10 shrink-0 items-center justify-center rounded-full bg-waymarks-secondary text-xs font-semibold text-white"
                          aria-hidden="true"
                        >
                          {t.initials}
                        </span>
                        <div>
                          <p className="text-sm font-medium">{t.author}</p>
                          <p className="text-xs text-muted-foreground">
                            {t.role}, {t.company} · {t.source}
                          </p>
                        </div>
                      </figcaption>
                    </figure>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
