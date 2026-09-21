import { Check } from "lucide-react";

import { approach, type ApproachBlock } from "@/lib/content/home";
import { cn } from "@/lib/utils";

// Three connected approach sections: design with a reason, built around real
// users, and why design is a business decision. Each block alternates an
// intro/headline column with a list + closing column, and every other block
// sits on the tinted surface for rhythm.
function Block({ block, index }: { block: ApproachBlock; index: number }) {
  const reversed = index % 2 === 1;
  return (
    <section
      aria-labelledby={`approach-title-${index}`}
      className={cn(index % 2 === 1 && "bg-secondary/30")}
    >
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
        <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
          <div className={cn(reversed && "lg:order-2")}>
            {block.eyebrow ? (
              <p className="mb-3 text-xs font-medium uppercase tracking-widest text-waymarks-secondary">
                {block.eyebrow}
              </p>
            ) : null}
            <h2
              id={`approach-title-${index}`}
              className="text-3xl font-medium tracking-tight sm:text-4xl"
            >
              {block.title}
            </h2>
            <div className="mt-6 space-y-4">
              {block.intro.map((paragraph) => (
                <p
                  key={paragraph}
                  className="text-base leading-relaxed text-muted-foreground"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </div>

          <div className={cn(reversed && "lg:order-1")}>
            {block.listTitle ? (
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-widest text-waymarks-secondary">
                {block.listTitle}
              </h3>
            ) : null}
            {block.items ? (
              <ul className="space-y-3">
                {block.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 rounded-lg border border-border bg-card p-4"
                  >
                    <Check
                      className="mt-0.5 size-4 shrink-0 text-waymarks-accent"
                      aria-hidden="true"
                    />
                    <span className="text-sm leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            ) : null}
            <p className="mt-6 max-w-xl rounded-xl border border-waymarks-primary/30 bg-waymarks-primary/5 p-5 text-sm leading-relaxed">
              {block.closing}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export function ApproachSection() {
  return (
    <>
      {approach.map((block, index) => (
        <Block key={block.title} block={block} index={index} />
      ))}
    </>
  );
}