import { formatDate } from "@/components/site/post-card";
import type { LegalDoc } from "@/lib/content/legal";

// Legal page body (C4.5): shared by /privacy and /terms on the PageHeader
// shell. Sections render from the typed content module only.
export function LegalArticle({ doc }: { doc: LegalDoc }) {
  return (
    <article className="py-20 sm:py-32">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <p className="text-xs uppercase tracking-widest text-muted-foreground tabular-nums">
          Last updated{" "}
          <time dateTime={doc.updated}>{formatDate(doc.updated)}</time>
        </p>

        <div className="mt-6 flex flex-col gap-6 text-base leading-relaxed text-muted-foreground">
          {doc.intro.map((paragraph) => (
            <p key={paragraph.slice(0, 32)}>{paragraph}</p>
          ))}
        </div>

        {doc.sections.map((section) => (
          <section key={section.heading} className="mt-12">
            <h2 className="text-2xl font-medium tracking-tight text-foreground">
              {section.heading}
            </h2>
            {section.paragraphs ? (
              <div className="mt-4 flex flex-col gap-4 text-base leading-relaxed text-muted-foreground">
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph.slice(0, 32)}>{paragraph}</p>
                ))}
              </div>
            ) : null}
            {section.bullets ? (
              <ul className="mt-4 flex flex-col gap-2.5 text-base leading-relaxed text-muted-foreground">
                {section.bullets.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span
                      aria-hidden="true"
                      className="mt-[0.6em] size-1.5 shrink-0 rounded-full bg-waymarks-primary"
                    />
                    {item}
                  </li>
                ))}
              </ul>
            ) : null}
          </section>
        ))}

        <p className="mt-14 rounded-xl border border-border bg-card px-6 py-5 text-sm leading-relaxed text-muted-foreground">
          {doc.contactNote}
        </p>
      </div>
    </article>
  );
}
