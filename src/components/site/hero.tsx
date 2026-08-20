import { Star } from "lucide-react";

import MoltenMetal from "@/components/molten-metal";
import { CtaLink, SecondaryCtaLink } from "@/components/site/cta";
import { hero } from "@/lib/content/home";
import { trustLine } from "@/lib/content/stats";
import { bookCallHref } from "@/lib/content/site";

function TrustLine() {
  return (
    <p className="mt-8 flex flex-col items-center gap-2 text-sm text-muted-foreground sm:flex-row sm:gap-3">
      <span className="flex items-center gap-1" aria-label={`${trustLine.rating} out of 5 stars`}>
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            className="size-4 fill-waymark-primary text-waymark-primary"
            aria-hidden="true"
          />
        ))}
        <span className="ml-1 font-medium text-foreground">
          {trustLine.rating} rating
        </span>
      </span>
      <span className="hidden sm:inline" aria-hidden="true">·</span>
      <span>{trustLine.projectsDelivered} projects delivered</span>
      <span className="hidden sm:inline" aria-hidden="true">·</span>
      <span>{trustLine.qualifier}</span>
    </p>
  );
}

export function Hero() {
  return (
    <section className="relative flex min-h-[calc(100dvh-4rem)] items-center justify-center overflow-hidden bg-background">
      <MoltenMetal
        className="absolute inset-0 h-full w-full"
        opacity={0.3}
        brightness={1.6}
        glow={2}
        scale={5}
        detail={3}
      />
      <div className="relative z-10 mx-auto max-w-3xl px-4 py-24 text-center sm:px-6">
        <p className="mb-6 text-xs font-medium uppercase tracking-widest text-waymark-deep">
          {hero.eyebrow}
        </p>
        <h1 className="text-4xl font-medium tracking-tight text-foreground sm:text-5xl lg:text-6xl">
          {hero.headline}
        </h1>
        <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
          {hero.subhead}
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <CtaLink href={bookCallHref} external className="h-10 px-6 text-base">
            {hero.primaryCta}
          </CtaLink>
          <SecondaryCtaLink href="#work" className="h-10 px-6 text-base">
            {hero.secondaryCta}
          </SecondaryCtaLink>
        </div>
        <TrustLine />
      </div>
    </section>
  );
}