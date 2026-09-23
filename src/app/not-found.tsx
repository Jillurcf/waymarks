import Link from "next/link";

import { Button } from "@/components/ui/button";
import { notFound } from "@/lib/content/site";

export default function NotFound() {
  return (
    <section className="py-20 sm:py-32">
      <div className="mx-auto max-w-xl px-4 text-center sm:px-6 lg:px-8">
        <p className="text-xs font-semibold uppercase tracking-widest text-waymarks-accent">
          {notFound.eyebrow}
        </p>
        <h1 className="mt-3 text-3xl font-bold tracking-tight text-waymarks-secondary sm:text-4xl">
          {notFound.title}
        </h1>
        <p className="mt-4 text-base leading-relaxed text-muted-foreground">
          {notFound.body}
        </p>
        <Button asChild className="mt-8 h-10 px-6 text-base">
          <Link href="/">{notFound.backHome}</Link>
        </Button>
      </div>
    </section>
  );
}