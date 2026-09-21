import { Reveal } from "@/components/site/reveal";
import { SectionHeading } from "@/components/site/section-heading";
import { claritySection } from "@/lib/content/home";

// Positioning section: why clarity is the promise Waymark sells. Statement
// lines on the left, the turn + closing on the right.
export function ClaritySection() {
  return (
    <section aria-labelledby="clarity-title" className="py-20 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow={claritySection.eyebrow}
          title={claritySection.title}
          id="clarity-title"
        />
        <Reveal>
          <div className="mx-auto grid max-w-4xl gap-10 lg:grid-cols-2 lg:gap-16">
            <ul className="space-y-5">
              {claritySection.leads.map((lead, i) => (
                <li
                  key={lead}
                  className={
                    i === claritySection.leads.length - 1
                      ? "text-base leading-relaxed text-muted-foreground"
                      : "text-xl leading-relaxed tracking-tight text-foreground"
                  }
                >
                  {lead}
                </li>
              ))}
            </ul>
            <div className="flex flex-col justify-center gap-4 border-t border-border pt-8 lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0">
              <p className="text-xl font-semibold tracking-tight text-waymarks-secondary">
                {claritySection.turn}
              </p>
              <p className="text-base leading-relaxed text-muted-foreground">
                {claritySection.closing}
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}