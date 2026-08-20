import { Star } from "lucide-react";

import { SectionHeading } from "@/components/site/section-heading";
import { testimonials } from "@/lib/content/testimonials";

export function Testimonials() {
  return (
    <section id="testimonials" className="py-20 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Testimonials"
          title="What clients say after launch"
          description="Specific results, from the people who paid for them."
        />
        <ul className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <li
              key={t.author}
              className="flex h-full flex-col gap-4 rounded-xl border border-border bg-card p-6"
            >
              <span
                className="flex items-center gap-1"
                aria-label="5 out of 5 stars"
              >
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className="size-4 fill-waymark-primary text-waymark-primary"
                    aria-hidden="true"
                  />
                ))}
              </span>
              <blockquote className="flex-1 border-l-2 border-waymark-primary pl-4 text-sm leading-relaxed text-foreground">
                “{t.quote}”
              </blockquote>
              <figcaption className="flex items-center gap-3">
                <span
                  className="flex size-10 shrink-0 items-center justify-center rounded-full bg-waymark-deep text-xs font-semibold text-background"
                  aria-hidden="true"
                >
                  {t.initials}
                </span>
                <div>
                  <p className="text-sm font-medium">{t.author}</p>
                  <p className="text-xs text-muted-foreground">
                    {t.role}, {t.company}
                  </p>
                </div>
              </figcaption>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}