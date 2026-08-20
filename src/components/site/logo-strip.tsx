import { clientLogos, logoBarLabel } from "@/lib/content/home";

// Section 4 — Client Logo Bar.
// Renders only the logos actually available. The data module is the source of
// truth: if the roster is small, entries are removed there and this section
// collapses to nothing rather than showing a half-empty bar.
export function LogoStrip() {
  if (clientLogos.length === 0) return null;

  return (
    <section
      aria-labelledby="client-logos"
      className="border-y border-border bg-secondary/50 py-12"
    >
      <p
        id="client-logos"
        className="mb-8 text-center text-xs font-medium uppercase tracking-widest text-muted-foreground"
      >
        {logoBarLabel}
      </p>
      <ul className="mx-auto flex max-w-5xl flex-wrap items-center justify-center gap-x-12 gap-y-6 px-4">
        {clientLogos.map((name) => (
          <li
            key={name}
            className="text-base font-semibold uppercase tracking-widest text-muted-foreground/70"
          >
            {name}
          </li>
        ))}
      </ul>
    </section>
  );
}