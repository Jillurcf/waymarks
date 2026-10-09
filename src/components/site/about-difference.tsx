import { aboutDifference } from "@/lib/content/about";
import { contactAfterProcess } from "@/lib/content/contact";

/**
 * "What Makes Our Global Digital Studio Different" band: the numbered-step
 * layout of the contact route's "after you contact us" section, retitled for
 * this page — a white lead, a CTA-gradient studio name, and a white close over
 * four hairline-framed steps. The step number is an accent outline
 * (`.waymarks-outline-text`), never a fill. Rows run four-across on desktop,
 * two-up on tablet, one-up on mobile (design-system §3).
 */
export function AboutDifference() {
  const { lead, highlight, trail } = aboutDifference.heading;

  return (
    <section className="border-b border-white/10 bg-waymarks-dark py-20 text-white lg:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-[32px] text-center font-bold leading-[1.15] tracking-tight text-white sm:text-[40px]">
          {lead}{" "}
          <span className="waymarks-gradient-text">{highlight}</span> {trail}
        </h2>

        <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {contactAfterProcess.steps.map((step) => (
            <li
              key={step.number}
              className="rounded-2xl border border-white/10 p-6 text-left"
            >
              <span className="waymarks-outline-text block text-[40px] font-extrabold leading-none">
                {step.number}
              </span>
              <h3 className="mt-6 text-lg font-semibold text-white">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-white/75">
                {step.body}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
