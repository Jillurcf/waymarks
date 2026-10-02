import { contactPageHero } from "@/lib/content/contact";
import { icons } from "@/lib/content/home";

import { Icon } from "./icon";

/**
 * Contact page hero. Centred eyebrow (mark + "Contact") above a 56px display
 * headline — the "high, centred eyeline" hero treatment from the brand skill —
 * with the subcopy beneath and a single response-time promise as the closing
 * beat. Centred keeps the band free of decoration so the spotlight stays on the
 * headline (design-system §3, premium restraint).
 */
export function ContactHero() {
  return (
    <section className="relative overflow-hidden bg-waymarks-dark text-white">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-1/4 left-1/2 size-[34rem] -translate-x-1/2 rounded-full bg-waymarks-primary/10 blur-3xl"
      />

      <div className="relative mx-auto max-w-3xl px-4 py-20 text-center sm:px-6 lg:px-8 lg:py-28">
        <p className="flex items-center justify-center gap-4 text-2xl font-bold text-waymarks-primary">
          <Icon name={icons.mail} className="size-7" />
          <span>{contactPageHero.label}</span>
        </p>

        <h1 className="mt-8 text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl lg:text-[56px]">
          {contactPageHero.title.map((line) => (
            <span key={line} className="block">
              {line}
            </span>
          ))}
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/75">
          {contactPageHero.intro}
        </p>
        <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
          {contactPageHero.body}
        </p>
      </div>
    </section>
  );
}
