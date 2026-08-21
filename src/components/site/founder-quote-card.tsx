import { founder } from "@/lib/content/team";

// Founder quote card: dark brand surface with a display-type signature line
// (no scraped photography ships — conversion register C0.2). Shared by the
// home about-intro (M2 block 3) and the About story section (C3.1).
export function FounderQuoteCard() {
  return (
    <figure className="rounded-xl bg-waymarks-dark p-6 text-waymarks-light sm:p-8">
      <blockquote className="text-lg font-medium leading-relaxed tracking-tight">
        “{founder.quote}”
      </blockquote>
      <figcaption className="mt-6 flex items-center gap-4">
        <span
          className="flex size-11 shrink-0 items-center justify-center rounded-full bg-waymarks-primary text-sm font-semibold text-foreground"
          aria-hidden="true"
        >
          {founder.initials}
        </span>
        <span>
          <span className="block text-sm font-medium">{founder.name}</span>
          <span className="block text-xs text-waymarks-light/60">
            {founder.role}
          </span>
        </span>
      </figcaption>
      {/* Signature line until a real signature asset exists */}
      <div
        aria-hidden="true"
        className="mt-6 border-t border-waymarks-light/10 pt-4 font-light tracking-tight text-waymarks-light/80"
      >
        <span className="text-2xl">{founder.name}</span>
      </div>
    </figure>
  );
}
