"use client";

import * as React from "react";
import { ArrowLeft, ArrowRight, Check, Pause, Play } from "lucide-react";

import {
  studioSection,
  type StudioDesignVisual,
  type StudioFidelity,
  type StudioGrowthVisual,
  type StudioSlide,
  type StudioStrategyVisual,
  type StudioTechCategory,
  type StudioTechnologyVisual,
  type StudioVisual,
} from "@/lib/content/home";
import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";

import { CtaButton } from "./cta";
import { Icon } from "./icon";

const reducedMotionQuery = "(prefers-reduced-motion: reduce)";
const strategyNodePositions = [
  "left-[16%] top-[62%] -translate-x-1/2",
  "left-1/2 top-[10%] -translate-x-1/2",
  "right-[16%] top-[48%] translate-x-1/2",
];

function subscribeToReducedMotion(onStoreChange: () => void) {
  const mediaQuery = window.matchMedia(reducedMotionQuery);
  mediaQuery.addEventListener("change", onStoreChange);

  return () => mediaQuery.removeEventListener("change", onStoreChange);
}

function getReducedMotionSnapshot() {
  return window.matchMedia(reducedMotionQuery).matches;
}

function getServerReducedMotionSnapshot() {
  return false;
}

function VisualFrame({
  title,
  aside,
  children,
}: {
  title: string;
  aside?: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-80 flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-5 sm:min-h-96 sm:p-6">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 pb-3 font-mono text-xs text-white/55">
        <span className="flex min-w-0 items-center gap-2">
          <span className="size-2 shrink-0 rounded-full bg-waymarks-primary motion-safe:animate-pulse" />
          <span className="truncate">{title}</span>
        </span>
        {aside}
      </div>
      {children}
    </div>
  );
}

function StrategyCanvas({ visual }: { visual: StudioStrategyVisual }) {
  const [selectedNode, setSelectedNode] = React.useState<number | null>(null);
  const node = selectedNode === null ? null : visual.nodes[selectedNode];

  return (
    <VisualFrame title={visual.title} aside={<span>{visual.hint}</span>}>
      <div className="relative my-5 min-h-64 flex-1">
        <svg
          aria-hidden="true"
          viewBox="0 0 500 240"
          preserveAspectRatio="none"
          className="absolute inset-0 size-full text-white/5"
        >
          <path d="M0 40H500M0 120H500M0 200H500" stroke="currentColor" />
          <path d="M100 0V240M250 0V240M400 0V240" stroke="currentColor" />
        </svg>
        <svg
          aria-hidden="true"
          viewBox="0 0 500 240"
          preserveAspectRatio="none"
          className="absolute inset-0 size-full overflow-visible"
        >
          <path
            d="M60 180C140 180 160 60 250 60S360 140 440 140"
            className="text-waymarks-accent"
            stroke="currentColor"
            strokeWidth="10"
            strokeLinecap="round"
            opacity="0.16"
          />
          <path
            d="M60 180C140 180 160 60 250 60S360 140 440 140"
            className="text-waymarks-primary"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
          />
        </svg>
        {visual.nodes.map((item, index) => {
          const selected = selectedNode === index;

          return (
            <button
              key={item.label}
              type="button"
              aria-pressed={selected}
              onClick={() => setSelectedNode(index)}
              className={cn(
                "absolute flex min-h-16 min-w-16 flex-col items-center gap-2 rounded-lg text-xs outline-none transition-colors duration-200 hover:text-waymarks-primary focus-visible:ring-3 focus-visible:ring-waymarks-accent/50",
                strategyNodePositions[index],
                selected ? "text-waymarks-primary" : "text-white/75",
              )}
            >
              <span
                className={cn(
                  "flex size-8 items-center justify-center rounded-full border-2 bg-waymarks-surface-raised transition-transform duration-200 motion-safe:hover:scale-110",
                  selected
                    ? "border-waymarks-primary shadow-[0_0_18px_var(--waymarks-primary)]"
                    : "border-waymarks-primary/60",
                )}
              >
                <span
                  className={cn(
                    "size-2.5 rounded-full",
                    selected ? "bg-waymarks-primary" : "bg-waymarks-accent",
                  )}
                />
              </span>
              <span className="font-semibold">{item.label}</span>
            </button>
          );
        })}
      </div>
      <div
        aria-live="polite"
        className="flex min-h-14 items-center justify-between gap-3 rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-xs"
      >
        <span className="shrink-0 text-white/50">
          {node ? visual.selectionLabel : ""}
        </span>
        <span className="text-right font-mono font-semibold text-waymarks-primary">
          {node?.detail ?? visual.prompt}
        </span>
      </div>
    </VisualFrame>
  );
}

function DesignCanvas({ visual }: { visual: StudioDesignVisual }) {
  const [fidelity, setFidelity] = React.useState<StudioFidelity>("hifi");
  const modes: StudioFidelity[] = ["wireframe", "hifi"];
  const highFidelity = fidelity === "hifi";

  return (
    <VisualFrame
      title={visual.title}
      aside={
        <div
          role="group"
          aria-label={visual.modesLabel}
          className="flex flex-wrap gap-1 rounded-lg border border-white/10 bg-white/5 p-1"
        >
          {modes.map((mode) => (
            <Button
              key={mode}
              type="button"
              variant="ghost"
              aria-pressed={fidelity === mode}
              onClick={() => setFidelity(mode)}
              className={cn(
                "min-h-11 rounded-md px-3 text-xs font-semibold",
                fidelity === mode
                  ? "bg-waymarks-accent text-waymarks-dark hover:bg-waymarks-accent hover:text-waymarks-dark"
                  : "text-white/55 hover:bg-white/5 hover:text-white",
              )}
            >
              {visual.modes[mode]}
            </Button>
          ))}
        </div>
      }
    >
      <div className="my-auto flex justify-center py-5">
        <div
          className={cn(
            "w-full max-w-sm rounded-2xl p-6 transition-colors duration-200",
            highFidelity
              ? "border border-white/10 bg-waymarks-surface-raised shadow-card"
              : "border-2 border-dashed border-white/20 bg-transparent",
          )}
        >
          <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
            <div
              className={cn(
                "flex size-10 shrink-0 items-center justify-center rounded-full border text-sm font-bold",
                highFidelity
                  ? "border-waymarks-primary bg-waymarks-primary/10 text-waymarks-primary"
                  : "border-white/20 font-mono text-white/55",
              )}
            >
              {highFidelity ? visual.preview.hifiAvatar : visual.preview.wireframeAvatar}
            </div>
            <span
              className={cn(
                "px-2.5 py-1 text-xs font-semibold",
                highFidelity
                  ? "rounded-full bg-waymarks-accent/10 text-waymarks-accent"
                  : "rounded border border-white/20 font-mono text-white/55",
              )}
            >
              {visual.preview.badge[fidelity]}
            </span>
          </div>
          <h4 className="mb-2 text-lg font-bold text-white">
            {visual.preview.title}
          </h4>
          <p className="mb-4 text-xs leading-relaxed text-white/60">
            {visual.preview.description}
          </p>
          <div
            className={cn(
              "w-full rounded-xl py-3 text-center text-xs font-bold",
              highFidelity
                ? "waymarks-cta-gradient text-waymarks-dark"
                : "border border-white/20 font-mono text-white/60",
            )}
          >
            {visual.preview.button[fidelity]}
          </div>
        </div>
      </div>
      <p className="text-center font-mono text-xs text-white/50">
        {visual.footer}
      </p>
    </VisualFrame>
  );
}

function TechnologyCanvas({ visual }: { visual: StudioTechnologyVisual }) {
  const [filter, setFilter] = React.useState<StudioTechCategory>("all");

  return (
    <VisualFrame title={visual.title}>
      <div
        role="group"
        aria-label={visual.filtersLabel}
        className="flex flex-wrap justify-end gap-1"
      >
        {visual.filters.map((item) => (
          <Button
            key={item.id}
            type="button"
            variant="ghost"
            aria-pressed={filter === item.id}
            onClick={() => setFilter(item.id)}
            className={cn(
              "min-h-11 rounded-md px-3 text-xs font-semibold",
              filter === item.id
                ? "bg-waymarks-primary text-waymarks-dark hover:bg-waymarks-primary hover:text-waymarks-dark"
                : "text-white/55 hover:bg-white/5 hover:text-white",
            )}
          >
            {item.label}
          </Button>
        ))}
      </div>
      <div className="my-auto grid grid-cols-1 gap-2.5 py-5 sm:grid-cols-2 lg:grid-cols-3">
        {visual.items.map((item) => (
          <div
            key={item.name}
            className={cn(
              "flex min-h-14 items-center gap-2.5 rounded-xl border border-white/10 bg-white/5 px-3 transition-colors duration-200 hover:border-waymarks-primary/50",
              filter !== "all" && filter !== item.category && "hidden",
            )}
          >
            <Icon
              name={item.icon}
              className="size-4 shrink-0 text-waymarks-primary"
            />
            <span className="text-xs font-semibold text-white">{item.name}</span>
          </div>
        ))}
      </div>
      <p className="text-right font-mono text-xs text-white/50">
        <span>{visual.footerLabel}: </span>
        <span className="text-waymarks-primary">{visual.footerValue}</span>
      </p>
    </VisualFrame>
  );
}

function GrowthCanvas({ visual }: { visual: StudioGrowthVisual }) {
  return (
    <VisualFrame
      title={visual.title}
      aside={
        <span className="font-semibold text-waymarks-accent">
          {visual.metric.value} {visual.metric.label}
        </span>
      }
    >
      <div className="relative my-auto h-48 py-5">
        <svg
          aria-hidden="true"
          viewBox="0 0 400 150"
          className="size-full overflow-visible text-waymarks-accent"
        >
          <defs>
            <linearGradient id="studio-growth-fill" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="currentColor" stopOpacity="0.35" />
              <stop offset="100%" stopColor="currentColor" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path
            d="M0 125Q90 112 160 76T280 46T390 18V150H0Z"
            fill="url(#studio-growth-fill)"
          />
          <path
            d="M0 125Q90 112 160 76T280 46T390 18"
            className="text-waymarks-primary"
            stroke="currentColor"
            strokeWidth="4"
            strokeLinecap="round"
          />
          <circle
            cx="390"
            cy="18"
            r="8"
            className="text-waymarks-primary motion-safe:animate-ping"
            fill="currentColor"
            opacity="0.3"
          />
          <circle cx="390" cy="18" r="5" className="text-waymarks-primary" fill="currentColor" />
        </svg>
        <div className="absolute right-3 top-5 rounded-xl border border-waymarks-accent/40 bg-waymarks-dark/90 p-3 font-mono shadow-card">
          <div className="text-white/50">{visual.chart.label}</div>
          <div className="text-sm font-bold text-waymarks-primary">
            {visual.chart.value}
          </div>
          <div className="text-white/60">{visual.chart.note}</div>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-2 border-t border-white/10 pt-3 text-center">
        {visual.stats.map((stat, index) => (
          <div key={stat.label} className="rounded-lg bg-white/5 p-2">
            <div className="text-xs text-white/50">{stat.label}</div>
            <div
              className={cn(
                "mt-1 font-mono text-sm font-bold tabular-nums",
                index === 2 ? "text-waymarks-primary" : "text-waymarks-accent",
              )}
            >
              {stat.value}
            </div>
          </div>
        ))}
      </div>
    </VisualFrame>
  );
}

function StudioVisualPanel({ visual }: { visual: StudioVisual }) {
  switch (visual.kind) {
    case "strategy":
      return <StrategyCanvas visual={visual} />;
    case "design":
      return <DesignCanvas visual={visual} />;
    case "technology":
      return <TechnologyCanvas visual={visual} />;
    case "growth":
      return <GrowthCanvas visual={visual} />;
  }
}

function SlideDetails({ slide }: { slide: StudioSlide }) {
  return (
    <div className="space-y-6">
      <div className="inline-flex items-center gap-2 rounded-md border border-waymarks-primary/30 bg-waymarks-primary/10 px-3 py-1.5 text-xs font-semibold text-waymarks-primary">
        <Icon name={slide.badgeIcon} className="size-4" />
        <span>{slide.eyebrow}</span>
      </div>
      <h3 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
        {slide.title}
      </h3>
      <p className="text-sm leading-relaxed text-white/65 sm:text-base">
        {slide.description}
      </p>
      <ul className="space-y-3 pt-1">
        {slide.highlights.map((highlight) => (
          <li key={highlight.label} className="flex items-start gap-3 text-sm text-white/75">
            <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full border border-waymarks-accent bg-waymarks-accent/10 text-waymarks-accent">
              <Check aria-hidden="true" className="size-3" strokeWidth={3} />
            </span>
            <span>
              <strong className="font-semibold text-white">
                {highlight.label}:
              </strong>{" "}
              {highlight.description}
            </span>
          </li>
        ))}
      </ul>
      <CtaButton cta={slide.cta} variant="primary" />
    </div>
  );
}

export function StudioBento() {
  const [activeSlide, setActiveSlide] = React.useState(0);
  const [autoplay, setAutoplay] = React.useState(true);
  const prefersReducedMotion = React.useSyncExternalStore(
    subscribeToReducedMotion,
    getReducedMotionSnapshot,
    getServerReducedMotionSnapshot,
  );
  const autoplayEnabled = autoplay && !prefersReducedMotion;
  const slide = studioSection.slides[activeSlide];
  const totalSlides = studioSection.slides.length;

  React.useEffect(() => {
    if (!autoplayEnabled) return;

    let timer: number | undefined;

    const stopTimer = () => {
      if (timer !== undefined) window.clearInterval(timer);
    };

    const startTimer = () => {
      stopTimer();
      if (document.hidden) return;
      timer = window.setInterval(() => {
        setActiveSlide((current) => (current + 1) % totalSlides);
      }, 6000);
    };

    startTimer();
    document.addEventListener("visibilitychange", startTimer);

    return () => {
      stopTimer();
      document.removeEventListener("visibilitychange", startTimer);
    };
  }, [autoplayEnabled, totalSlides]);

  const showPrevious = () => {
    setActiveSlide((current) => (current - 1 + totalSlides) % totalSlides);
  };

  const showNext = () => {
    setActiveSlide((current) => (current + 1) % totalSlides);
  };

  return (
    <section
      id="studio"
      className="relative scroll-mt-24 overflow-hidden border-y border-white/10 bg-waymarks-dark py-20 text-white lg:py-24"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 top-1/3 size-96 rounded-full bg-waymarks-secondary/10 blur-3xl motion-safe:animate-pulse-glow"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 top-12 size-80 rounded-full bg-waymarks-primary/5 blur-3xl"
      />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-12 max-w-3xl text-center sm:mb-16">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-waymarks-surface-raised px-3.5 py-1.5">
            <span className="size-2 rounded-full bg-waymarks-primary" />
            <span className="text-xs font-semibold uppercase tracking-widest text-waymarks-primary">
              {studioSection.eyebrow}
            </span>
          </div>
          <h2 className="text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
            {studioSection.title}{" "}
            <span className="text-waymarks-primary">
              {studioSection.titleAccent}
            </span>
          </h2>
          <p className="mt-6 text-base leading-relaxed text-white/65 sm:text-lg">
            {studioSection.intro}
          </p>
        </div>

        <div className="rounded-3xl border border-white/10 bg-waymarks-surface-raised/80 p-2 backdrop-blur-xl">
          <div className="flex flex-col items-stretch justify-between gap-4 lg:flex-row lg:items-center">
            <div
              role="group"
              aria-label={studioSection.controls.groupLabel}
              className="grid w-full grid-cols-2 gap-1.5 sm:grid-cols-4 lg:w-auto"
            >
              {studioSection.slides.map((item, index) => {
                const active = index === activeSlide;

                return (
                  <Button
                    key={item.id}
                    id={`studio-tab-${item.id}`}
                    type="button"
                    variant="ghost"
                    aria-pressed={active}
                    aria-controls={`studio-panel-${item.id}`}
                    onClick={() => setActiveSlide(index)}
                    className={cn(
                      "min-h-11 w-full rounded-xl px-3 text-xs font-semibold sm:rounded-full sm:px-5 sm:text-sm",
                      active
                        ? "bg-waymarks-primary text-waymarks-dark shadow-card hover:bg-waymarks-primary hover:text-waymarks-dark"
                        : "text-white/60 hover:bg-white/5 hover:text-white",
                    )}
                  >
                    <Icon name={item.icon} className="size-4" />
                    <span>{item.label}</span>
                  </Button>
                );
              })}
            </div>

            <div className="flex w-full flex-col items-stretch gap-1 px-2 sm:flex-row sm:items-center sm:gap-3 sm:px-0 lg:w-auto lg:justify-end">
              <Button
                type="button"
                variant="ghost"
                aria-pressed={autoplayEnabled}
                disabled={prefersReducedMotion}
                onClick={() => setAutoplay((current) => !current)}
                className="min-h-11 self-start rounded-lg px-2.5 text-xs font-mono text-white/55 hover:bg-white/5 hover:text-waymarks-primary"
              >
                {autoplayEnabled ? (
                  <Pause aria-hidden="true" className="size-4 text-waymarks-primary" />
                ) : (
                  <Play aria-hidden="true" className="size-4" />
                )}
                <span>
                  {autoplayEnabled
                    ? studioSection.controls.autoplayOn
                    : studioSection.controls.autoplayOff}
                </span>
              </Button>
              <span className="hidden h-6 w-px bg-white/10 sm:block" />
              <div className="flex items-center justify-between gap-1 sm:justify-center">
                <Button
                  type="button"
                  variant="outline"
                  size="icon-lg"
                  aria-label={studioSection.controls.previous}
                  onClick={showPrevious}
                  className="size-11 rounded-full border-white/10 bg-waymarks-surface-raised text-white/70 hover:border-waymarks-primary/50 hover:bg-waymarks-primary/10 hover:text-white"
                >
                  <ArrowLeft aria-hidden="true" className="size-4" />
                </Button>
                <span className="min-w-9 text-center font-mono text-xs font-bold tabular-nums text-waymarks-primary">
                  {String(activeSlide + 1).padStart(2, "0")} /{" "}
                  {String(totalSlides).padStart(2, "0")}
                </span>
                <Button
                  type="button"
                  variant="outline"
                  size="icon-lg"
                  aria-label={studioSection.controls.next}
                  onClick={showNext}
                  className="size-11 rounded-full border-white/10 bg-waymarks-surface-raised text-white/70 hover:border-waymarks-primary/50 hover:bg-waymarks-primary/10 hover:text-white"
                >
                  <ArrowRight aria-hidden="true" className="size-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="relative mt-8 min-h-[36rem] overflow-hidden rounded-3xl border border-white/10 bg-waymarks-surface-raised p-5 shadow-card sm:p-8 lg:min-h-[34rem] lg:p-10">
          <div
            key={slide.id}
            id={`studio-panel-${slide.id}`}
            role="region"
            aria-labelledby={`studio-tab-${slide.id}`}
            className="relative z-10 grid grid-cols-1 items-center gap-8 motion-safe:animate-fade-up lg:grid-cols-12 lg:gap-12"
          >
            <div className="lg:col-span-5">
              <SlideDetails slide={slide} />
            </div>
            <div className="lg:col-span-7">
              <StudioVisualPanel visual={slide.visual} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
