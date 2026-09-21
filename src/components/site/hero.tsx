import Link from "next/link";
import {
  ArrowUpRight,
  MapPin,
  PhoneCall,
  Sparkle,
  type LucideIcon,
} from "lucide-react";

import MoltenMetal from "@/components/molten-metal";
import { hero } from "@/lib/content/home";
import { site } from "@/lib/content/site";
import { cn } from "@/lib/utils";

// Block 1 — Hero (template .hero). Ported 1:1 from html_version index.html:
//
//   .hero-bg-video        -> MoltenMetal WebGL signature (plan §61: the
//                            template's stock video is replaced by the brand
//                            shader, static gradient fallback underneath)
//   .hero::before         -> dark token-gradient overlay for text contrast
//   .section-title h3     -> eyebrow with spark glyph (lucide Sparkle stands
//                            in for the template's starburst asset)
//   h1.text-anime-style-2 -> per-character reveal (see <Chars/> below)
//   .wow fadeInUp         -> animate-fade-up entrances (subhead 0ms, body
//                            200ms — same delays as the template)
//   .btn-default          -> glass pill + detached circular arrow knob that
//                            rotates 45° on hover (arrow points ↗, lands →)
//   .hero-contact-box     -> phone circle that fills light on hover, icon
//                            flips dark (template scale(0)->scale(1) fill)
//   .explore-more-circle  -> rotating circular-text badge linking to /contact
//                            (exploremorerotate, 25s linear infinite)
//   .hero-tag             -> floating service pill drifting side to side
//                            (herotagmove, 3s linear alternate)
//
// The template's portrait photo is not ported (conversion register: never
// ship scraped photography); the right column uses a token-built waymark
// motif consistent with why-waymarks.tsx.

/**
 * Per-character headline reveal — CSS port of the template's GSAP
 * text-anime-style-2 (chars slide in from x:20px, 30ms stagger, 1s ease-out,
 * 100ms base delay). Words are wrapped to preserve line breaking; each char
 * carries an inline animation-delay into the shared animate-char-in timeline.
 */
function Chars({
  text,
  accent = false,
  offset = 0,
}: {
  text: string;
  accent?: boolean;
  offset?: number;
}) {
  let index = offset;
  const words = text.split(" ");
  return (
    <>
      {words.map((word, w) => (
        <span key={w}>
          <span className="inline-block whitespace-nowrap">
            {Array.from(word).map((char, c) => {
              return (
                <span
                  key={c}
                  className={cn(
                    "inline-block animate-char-in",
                    accent && "font-bold text-waymarks-primary",
                  )}
                  style={{ animationDelay: `${100 + index++ * 30}ms` }}
                >
                  {char}
                </span>
              );
            })}
          </span>
          {w < words.length - 1 ? " " : null}
        </span>
      ))}
    </>
  );
}

function AnimatedHeadline() {
  // Stagger continues across both segments, so the accent segment starts
  // after every rendered lead character.
  const leadChars = Array.from(hero.headlineLead).filter(
    (char) => char !== " ",
  ).length;
  return (
    <h1 className="text-4xl font-light leading-tight tracking-tight sm:text-5xl lg:text-6xl">
      <span className="sr-only">
        {hero.headlineLead} {hero.headlineAccent}
      </span>
      <span aria-hidden="true">
        <Chars text={hero.headlineLead} />{" "}
        <Chars text={hero.headlineAccent} accent offset={leadChars} />
      </span>
    </h1>
  );
}

/** Rotating circular-text badge (template .explore-more-circle). */
function ExploreBadge({ Icon }: { Icon: LucideIcon }) {
  return (
    <Link
      href="/contact"
      aria-label={`${hero.exploreLabel} — go to contact`}
      className="group absolute end-0 top-8 block size-28 sm:size-36 lg:top-10 lg:size-40"
    >
      <span
        aria-hidden="true"
        className="absolute inset-0 rounded-full bg-waymarks-primary shadow-card transition-transform duration-300 group-hover:scale-105"
      />
      <svg
        aria-hidden="true"
        viewBox="0 0 160 160"
        className="absolute inset-0 size-full animate-explore-spin motion-reduce:[animation-play-state:paused]"
      >
        <defs>
          <path
            id="explore-badge-circle"
            d="M80,80 m-56,0 a56,56 0 1,1 112,0 a56,56 0 1,1 -112,0"
            fill="none"
          />
        </defs>
        <text
          className="fill-waymarks-dark text-xs font-bold uppercase"
          letterSpacing="3"
        >
          <textPath href="#explore-badge-circle">
            {`${hero.exploreLabel} • `.repeat(4)}
          </textPath>
        </text>
      </svg>
      <span
        aria-hidden="true"
        className="absolute inset-0 m-auto flex size-16 items-center justify-center rounded-full bg-waymarks-dark sm:size-20"
      >
        <span className="flex size-9 items-center justify-center rounded-full bg-waymarks-primary sm:size-11">
          <Icon className="size-5 text-waymarks-dark sm:size-6" />
        </span>
      </span>
    </Link>
  );
}

export function Hero() {
  return (
    <section className="relative flex min-h-[calc(100dvh-4rem)] items-center overflow-hidden bg-waymarks-dark text-waymarks-light">
      {/* Signature backdrop — replaces the template's background video */}
      <div aria-hidden="true" className="absolute inset-0">
        <MoltenMetal opacity={0.55} />
      </div>

      {/* Dark contrast overlay (template .hero::before); click-through so the
          shader keeps its mouse interaction */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-b from-waymarks-dark/50 via-waymarks-dark/80 to-waymarks-dark"
      />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-4 pb-20 pt-24 sm:px-6 lg:px-8 lg:pb-28 lg:pt-36">
        <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-12">
          {/* Hero content (template col-lg-6 / .hero-content) */}
          <div className="max-w-xl">
            <p className="mb-6 flex items-center gap-2.5 text-sm font-semibold uppercase tracking-widest text-waymarks-light">
              <Sparkle
                className="size-4 fill-waymarks-primary text-waymarks-primary"
                aria-hidden="true"
              />
              {hero.eyebrow}
            </p>

            <AnimatedHeadline />

            <p className="mt-5 max-w-xl text-lg leading-relaxed text-waymarks-light/70 animate-fade-up sm:text-xl">
              {hero.subhead}
            </p>
            <p className="mt-3 max-w-xl text-lg leading-relaxed text-waymarks-light/70 animate-fade-up sm:text-xl">
              {hero.subheadTwo}
            </p>

            <p className="mt-8 text-xl font-semibold tracking-tight text-waymarks-primary animate-fade-up">
              {hero.ctaLead}
            </p>

            {/* CTA row (template .hero-content-body, fadeInUp @ 0.2s) */}
            <div
              className="mt-10 flex flex-wrap items-center gap-x-12 gap-y-6 animate-fade-up"
              style={{ animationDelay: "200ms" }}
            >
              {/* Glass pill + detached arrow knob (template .btn-default) */}
              <Link
                href="/contact"
                className="group relative inline-flex items-center rounded-full bg-waymarks-primary/20 px-7 py-3.5 text-base font-bold text-waymarks-light backdrop-blur-md transition-colors duration-300 hover:bg-waymarks-primary/30"
              >
                {hero.primaryCta}
                <span
                  aria-hidden="true"
                  className="absolute end-0 top-1/2 flex size-12 -translate-y-1/2 translate-x-full items-center justify-center rounded-full bg-waymarks-accent transition-transform duration-300 group-hover:rotate-45"
                >
                  <ArrowUpRight className="size-6 text-waymarks-dark" />
                </span>
              </Link>

              {/* Phone box (template .hero-contact-box) */}
              <a href={site.phoneHref} className="group flex items-center">
                <span className="relative me-5 flex size-14 shrink-0 items-center justify-center overflow-hidden rounded-full border border-waymarks-primary">
                  <span
                    aria-hidden="true"
                    className="absolute inset-0 scale-0 rounded-full bg-waymarks-light transition-transform duration-300 group-hover:scale-100"
                  />
                  <PhoneCall
                    className="relative size-6 text-waymarks-light transition-colors duration-300 group-hover:text-waymarks-dark"
                    aria-hidden="true"
                  />
                </span>
                <span>
                  <span className="block text-sm text-waymarks-light/70">
                    {hero.phoneBoxLabel}
                  </span>
                  <span className="block text-xl font-medium tabular-nums">
                    {site.phone}
                  </span>
                </span>
              </a>
            </div>
          </div>

          {/* Hero visual (template col-lg-6 / .hero-images) */}
          <div className="relative mx-auto w-full max-w-md lg:max-w-none">
            {/* Token-built stand-in for the template portrait (aspect ratio
                preserved: 1/0.9 mobile, 1/1.13 desktop) */}
            <div
              aria-hidden="true"
              className="relative aspect-[1/0.9] overflow-hidden rounded-3xl border border-waymarks-light/10 bg-gradient-to-br from-waymarks-secondary/40 via-waymarks-dark to-waymarks-dark lg:aspect-[1/1.13]"
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="size-48 animate-spin-slow rounded-full border border-dashed border-waymarks-primary/40 motion-reduce:[animation-play-state:paused] sm:size-64 lg:size-72" />
                <div className="absolute size-32 rounded-full border border-waymarks-primary/20 sm:size-44 lg:size-52" />
                <div className="absolute flex size-24 items-center justify-center rounded-full bg-waymarks-primary/15 sm:size-32 lg:size-36">
                  <span className="flex size-12 items-center justify-center rounded-full bg-card shadow-card sm:size-16">
                    <MapPin className="size-6 text-waymarks-secondary sm:size-7" />
                  </span>
                </div>
              </div>
              <div className="absolute -bottom-20 left-1/2 size-56 -translate-x-1/2 rounded-full bg-waymarks-accent/20 blur-3xl" />
            </div>

            <ExploreBadge Icon={ArrowUpRight} />

            {/* Floating service tag (template .hero-tag) */}
            <div className="absolute start-0 top-24 animate-hero-tag-move motion-reduce:[animation-play-state:paused] sm:top-32">
              <Link
                href="/services"
                className="group relative block overflow-hidden rounded-full bg-waymarks-primary px-4 py-3 text-sm font-medium text-waymarks-dark transition-transform duration-300 hover:scale-[1.03]"
              >
                <span
                  aria-hidden="true"
                  className="absolute inset-0 origin-top scale-y-0 bg-waymarks-light transition-transform duration-300 group-hover:scale-y-100"
                />
                <span className="relative">{hero.tag}</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
