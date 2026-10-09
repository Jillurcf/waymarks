import Image from "next/image";

function titleFrom(name: string) {
  const base = name.replace(/\.\w+$/, "");
  return base.replace(/[-_\d]+/g, " ").replace(/\b\w/g, (m) => m.toUpperCase()).trim();
}

export function RecentProductDesign() {
  return (
    <section className="border-b border-white/10 bg-waymarks-dark py-20 text-white lg:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <h2 className="text-2xl font-bold leading-tight tracking-tight sm:text-3xl md:text-4xl">
            Recent
          </h2>
          <h2 className="text-2xl waymarks-gradient-text font-bold leading-tight tracking-tight sm:text-3xl md:text-4xl">
           Product Design
          </h2>
          <p className="mt-4 text-base font-normal leading-relaxed text-white/75 sm:text-lg md:text-xl">
          A few identity systems we've built recently for startups and growing teams.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <div className="flex flex-col gap-6">
            <figure className="relative overflow-hidden rounded-2xl border border-white/10">
              <Image
                src="/images/services/website_design/web_design01.png"
                alt="Web design 01"
                width={1200}
                height={800}
                className="h-auto w-full object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <figcaption className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 text-sm font-medium">
                {titleFrom("web_design01.png")}
              </figcaption>
            </figure>
            <figure className="relative overflow-hidden rounded-2xl border border-white/10">
              <Image
                src="/images/services/website_design/web_design02.png"
                alt="Web design 02"
                width={1200}
                height={800}
                className="h-auto w-full object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <figcaption className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 text-sm font-medium">
                {titleFrom("web_design02.png")}
              </figcaption>
            </figure>
          </div>

          <div className="flex flex-col gap-6">
            <figure className="relative overflow-hidden rounded-2xl border border-white/10">
              <Image
                src="/images/services/website_design/web_design03.png"
                alt="Web design 03"
                width={1200}
                height={1600}
                className="h-auto w-full object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <figcaption className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 text-sm font-medium">
                {titleFrom("web_design03.png")}
              </figcaption>
            </figure>
          </div>
        </div>

        <div className="mt-6">
          <figure className="relative overflow-hidden rounded-2xl border border-white/10">
            <Image
              src="/images/services/website_design/web_design04.png"
              alt="Web design 04"
              width={1600}
              height={900}
              className="h-auto w-full object-cover"
              sizes="100vw"
            />
            <figcaption className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 text-sm font-medium">
              {titleFrom("web_design04.png")}
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}
