import { proofStats } from "@/lib/content/stats";

// Section 5 — Proof Strip: "Design That Moves the Numbers".
// Dark ink band that reframes the studio as results-driven. Stats come from
// the typed data module — never hardcode figures here.
export function ProofStrip() {
  return (
    <section
      aria-labelledby="proof-strip-title"
      className="bg-foreground text-background"
    >
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <p
          id="proof-strip-title"
          className="mb-10 text-xs font-medium uppercase tracking-widest text-waymark-mid"
        >
          Design that moves the numbers
        </p>
        <dl className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {proofStats.map((stat) => (
            <div key={stat.label} className="border-l border-background/20 pl-4">
              <dt className="order-2 mt-2 block text-sm leading-snug text-background/70">
                {stat.label}
              </dt>
              <dd className="text-4xl font-medium tabular-nums tracking-tight sm:text-5xl">
                {stat.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}