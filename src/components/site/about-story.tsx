import { Reveal } from "@/components/site/reveal";
import { SecondaryCtaLink } from "@/components/site/cta";
import { SectionHeading } from "@/components/site/section-heading";
import { FounderQuoteCard } from "@/components/site/founder-quote-card";
import { aboutStory } from "@/lib/content/about";

// About story/founder block (C3.1, FR-15): studio story on the left, the
// shared founder quote card on the right (mirrors the home about-intro).
export function AboutStory() {
  return (
    <section aria-labelledby="about-story-title" className="py-20 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <SectionHeading
              align="left"
              eyebrow={aboutStory.eyebrow}
              title={aboutStory.title}
              id="about-story-title"
              className="mb-6"
            />
            {aboutStory.paragraphs.map((paragraph) => (
              <p
                key={paragraph.slice(0, 24)}
                className="mt-4 text-base leading-relaxed text-muted-foreground"
              >
                {paragraph}
              </p>
            ))}
            <div className="mt-8">
              <SecondaryCtaLink href={aboutStory.cta.href}>
                {aboutStory.cta.label}
              </SecondaryCtaLink>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <FounderQuoteCard />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
