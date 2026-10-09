// Contact route copy (FR-12 / BR-3). Separate module from home.ts because
// /contact is its own page in the route map (src/lib/routes.ts); the homepage
// keeps its own #contact CTA band. Voice follows .skill/waymark-ui-ux/content.md:
// calm, concrete, outcome-led, UK spelling, one CTA per section.

import { icons, servicesSection } from "./home";
import { site, socialLinks } from "./site";

export const contactSeo = {
  title: "Contact Waymark | Book a Free Discovery Call",
  description:
    "Tell Waymark what you are building. Book a free discovery call on brand, UI/UX, website, SaaS, MVP, mobile app or digital growth work.",
} as const;

// ---------------------------------------------------------------------------
// 1. Hero
// ---------------------------------------------------------------------------

export const contactPageHero = {
  label: "Contact",
  // Display headline. Set on the left column at 56px / bold / white, matching
  // the services hero treatment; the lead form sits opposite it.
  title: ["Contact Waymarks", "And Let's Build", "Something", "Meaningful"],
  intro:
    "Have an idea? Need a better website? Building a digital product? Refreshing your brand? Looking for a growth partner?",
  body: "Have an idea? Need a better website? Building a digital product? Refreshing your brand? Looking for a growth partner?",
  // Direct contact beats under the intro copy. `href` is omitted for the beat
  // with no actionable link, rendered as plain text.
  links: [
    {
      icon: icons.mail,
      value: site.email,
      href: `mailto:${site.email}`,
    },
    {
      icon: icons.clock3,
      value: "Pick a time that suits you and talk with our team directly.",
    },
  ] as readonly ContactPageLink[],
} as const;

/** A single icon + text beat under the contact hero copy. */
interface ContactPageLink {
  icon: string;
  value: string;
  href?: string;
}

// ---------------------------------------------------------------------------
// 2. Direct contact details
// ---------------------------------------------------------------------------

/** A direct contact row. `href` is omitted for rows with no actionable link
 *  (the studio location), which the panel renders as plain text. */
export interface ContactRow {
  icon: string;
  label: string;
  value: string;
  href?: string;
}

export const contactDetails = {
  title: "Or reach us directly",
  intro:
    "Prefer to skip the form? These are the fastest ways to reach the studio.",
  // Brand promise about response time (BR-3: reply within 24h).
  responseNote: "We reply to every message within one business day.",
  rows: [
    {
      icon: icons.mail,
      label: "Email",
      value: site.email,
      href: `mailto:${site.email}`,
    },
    {
      icon: icons.phone,
      label: "Phone",
      value: site.phone,
      href: site.phoneHref,
    },
    {
      icon: icons.mapPin,
      label: "Studio",
      value: `${site.region} — remote team, global clients`,
    },
  ] satisfies readonly ContactRow[],
  socialsTitle: "Follow the studio",
  socials: socialLinks,
} as const;

// ---------------------------------------------------------------------------
// 3. Lead form (FR-12)
// ---------------------------------------------------------------------------

// `service` and `budget` options are derived from the real service list and the
// studio's published engagement ranges, so the form can never offer work that
// is not on the services page.
export const contactForm = {
  title: "Tell us about your project",
  intro:
    "Six short fields. The more concrete you are, the more useful our first reply will be.",
  submitLabel: "Send message",
  sendingLabel: "Sending…",
  preferTalk: "Prefer to talk first?",
  bookCallLabel: "Book a Call Directly",
  successTitle: "Thanks — we've got it.",
  successBody: `Your message is with the studio. Expect a reply at the email you gave us within one business day.`,
  errorTitle: "That didn't send.",
  errorBody: `The form could not reach our inbox. Email ${site.email} directly and we will pick it up from there.`,
  mailtoFallbackLabel: "Email us instead",
  privacyNote:
    "We use your details to reply to this enquiry only. No newsletter, no sharing.",
  // Honeypot: hidden from people, irresistible to bots (architecture.md §Static
  // export rules). Bots that fill it get a silent no-op.
  honeypotLabel: "Leave this field empty",
  budgetLabel: "Budget range",
  budgetPlaceholder: "Select a range",
  budgetOptions: [
    "Under $5K",
    "$5K – $10K",
    "$10K – $25K",
    "$25K – $50K",
    "$50K+",
    "Not sure yet",
  ],
  fields: {
    name: {
      label: "Full name",
      placeholder: "Alex Carter",
      autoComplete: "name",
    },
    email: {
      label: "Work email",
      placeholder: "alex@company.com",
      autoComplete: "email",
    },
    company: {
      label: "Company",
      placeholder: "Company name",
      autoComplete: "organization",
    },
    service: {
      label: "Service needed",
      placeholder: "Select a service",
    },
    message: {
      label: "Tell us about your project",
      placeholder:
        "What are you building, who is it for, and what is not working today?",
    },
  },
  // Inline validation copy, surfaced through aria-invalid + aria-describedby.
  errors: {
    name: "Please tell us your name.",
    email: "Please enter a valid email address.",
    message: "Please add a sentence or two about the project.",
  },
  // Select option lists.
  serviceOptions: servicesSection.items.map((item) => item.title),
  notSureService: "Something else",
} as const;

// ---------------------------------------------------------------------------
// 4. JSON-LD (FR-18) — ContactPage wrapping the studio's ProfessionalService.
//
// The FAQ block is deliberately not duplicated here: the contact route reuses
// the shared `Faq` section, and its FAQPage JSON-LD already ships on the home
// route, so the same questions never appear (or are marked up) twice.
// ---------------------------------------------------------------------------

export const contactJsonLd = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: `Contact ${site.name}`,
  description: contactSeo.description,
  url: `${site.domain}/contact/`,
  mainEntity: {
    "@type": "ProfessionalService",
    name: site.name,
    description: site.description,
    url: site.domain,
    email: site.email,
    telephone: site.phone,
    areaServed: "Worldwide",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Dubai",
      addressCountry: "AE",
    },
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "sales",
      email: site.email,
      telephone: site.phone,
      availableLanguage: ["English"],
    },
    sameAs: socialLinks.map((link) => link.href),
  },
} as const;
