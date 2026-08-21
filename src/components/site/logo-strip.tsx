import { clientLogos, logoBarLabel } from "@/lib/content/home";

// Client-logo ticker (C1.4), ported from the template's .our-scrolling-ticker.
// Pure CSS marquee: a duplicated track translating by -50% for a seamless
// loop (token: --animate-marquee). The duplicate copy is aria-hidden, the
// animation pauses on hover and under prefers-reduced-motion (globals.css).
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
      <div className="overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">
          {[0, 1].map((copy) => (
            <ul
              key={copy}
              aria-hidden={copy === 1 || undefined}
              className="flex shrink-0 items-center gap-x-14 pe-14"
            >
              {clientLogos.map((name) => (
                <li
                  key={name}
                  className="whitespace-nowrap text-base font-semibold uppercase tracking-widest text-muted-foreground/70"
                >
                  {name}
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
    </section>
  );
}
