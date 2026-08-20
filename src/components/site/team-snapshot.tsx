import { SectionHeading } from "@/components/site/section-heading";
import { team } from "@/lib/content/team";

export function TeamSnapshot() {
  return (
    <section id="team" className="bg-secondary/40 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="The team"
          title="The people you'll actually work with"
          description="No account-manager relay. These are the people on your project."
        />
        <ul className="grid grid-cols-2 gap-6 md:grid-cols-4">
          {team.map((member) => (
            <li key={member.name} className="flex flex-col items-center gap-3 text-center">
              <span
                className="flex size-20 items-center justify-center rounded-full bg-waymark-deep text-xl font-semibold text-background"
                aria-hidden="true"
              >
                {member.initials}
              </span>
              <div>
                <p className="text-sm font-medium">{member.name}</p>
                <p className="text-xs text-muted-foreground">{member.role}</p>
              </div>
            </li>
          ))}
        </ul>
        <p className="mt-12 text-center">
          <a
            href="/about"
            className="inline-flex items-center gap-1 text-sm font-medium text-waymark-deep underline-offset-4 hover:underline"
          >
            Meet the full team
          </a>
        </p>
      </div>
    </section>
  );
}