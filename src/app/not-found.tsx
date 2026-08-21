import { PageHeader } from "@/components/site/page-header";
import { CtaLink, SecondaryCtaLink } from "@/components/site/cta";
import { notFound } from "@/lib/content/site";
import type { Route } from "@/lib/routes";

// On-brand 404 (C1.8). Static export has no request pathname, so the
// breadcrumb trail is passed explicitly.
const crumbs: Route[] = [
  { path: "/", title: "Home" },
  { path: "/404", title: "404 error" },
];

export default function NotFound() {
  return (
    <>
      <PageHeader
        eyebrow={notFound.eyebrow}
        title={notFound.title}
        crumbs={crumbs}
      />
      <section className="py-20 sm:py-32">
        <div className="mx-auto max-w-xl px-4 text-center sm:px-6 lg:px-8">
          <p className="text-base leading-relaxed text-muted-foreground">
            {notFound.body}
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <CtaLink href="/" className="h-10 px-6 text-base">
              {notFound.backHome}
            </CtaLink>
            <SecondaryCtaLink href="/contact" className="h-10 px-6 text-base">
              {notFound.contactCta}
            </SecondaryCtaLink>
          </div>
        </div>
      </section>
    </>
  );
}
