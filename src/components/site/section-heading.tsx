import { cn } from "@/lib/utils";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  id,
  tone = "default",
  className,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  id?: string;
  tone?: "default" | "inverse";
  className?: string;
}) {
  const inverse = tone === "inverse";
  return (
    <div
      className={cn(
        "mb-12 sm:mb-16 max-w-2xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      <p
        className={cn(
          "mb-3 text-xs font-medium uppercase tracking-widest",
          inverse ? "text-waymarks-accent" : "text-waymarks-secondary",
        )}
      >
        {eyebrow}
      </p>
      <h2
        id={id}
        className={cn(
          "text-3xl font-medium tracking-tight sm:text-4xl",
          inverse ? "text-background" : "text-foreground",
        )}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={cn(
            "mt-4 text-base leading-relaxed",
            inverse ? "text-background/70" : "text-muted-foreground",
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}