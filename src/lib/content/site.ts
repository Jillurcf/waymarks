export const site = {
  name: "Waymark",
  domain: "https://waymarks.agency",
  email: "hello@waymarks.agency",
  phone: "+971 55 896 5353",
  phoneHref: "tel:+971558965353",
  region: "Dubai, UAE",
  rating: "4.9",
  reviews: "[X]", // REVIEW: real review count from Clutch/Google once available
  tagline: "Digital product design and development studio",
  description:
    "Waymark is a digital product studio in Dubai helping startups and growing businesses design, build and launch better digital products.",
};

export const bookCallHref = `mailto:${site.email}?subject=${encodeURIComponent(
  "Free strategy call",
)}`;

// Primary navbar CTA label (design file header: "Start a Project").
export const navCtaLabel = "Start a Project";

export const socialLinks = [
  { label: "Dribbble", href: "https://dribbble.com" },
  { label: "Behance", href: "https://behance.net" },
  { label: "LinkedIn", href: "https://linkedin.com" },
  { label: "Instagram", href: "https://instagram.com" },
];

// Shared shell blocks (M1). Copy follows .skill/waymark-ui-ux/content.md.

// Header offcanvas contact panel (C1.1).
export const contactPanel = {
  title: "Contact",
  phoneLabel: "Phone",
  emailLabel: "Email",
  addressLabel: "Studio",
  stayConnected: "Stay connected",
};

// Footer work-together band (C1.2).
export const workTogether = {
  eyebrow: "Let's collaborate",
  title: "Tell us what you're building",
  cta: "Get in touch",
};

// Newsletter slot (FR-23): hidden until a static-compatible endpoint exists.
export const newsletter = {
  enabled: false,
  title: "Subscribe to our newsletter",
  placeholder: "Work email",
  submitLabel: "Subscribe",
};

// Sidebar CTA box for detail pages (C1.7).
export const sidebarCta = {
  title: "Questions about your project?",
  body: "Book a free discovery call. We'll talk through goals, scope, and timeline — no obligation.",
};

// Closing contact CTA band for inner pages (BR-2 / FR-4). One primary action
// per section (content.md rule 5); the phone line is contact info, not a
// competing CTA.
export const closingCta = {
  eyebrow: "Next step",
  title: "Ready when you are",
  body: "Book a free discovery call. We'll talk through your goals, scope, and timeline — and reply within one business day.",
  primaryLabel: "Book a discovery call",
  phoneLabel: "Prefer to talk?",
};

// On-brand 404 (C1.8).
export const notFound = {
  eyebrow: "Error 404",
  title: "This route isn't waymarked yet",
  body: "The page you're looking for doesn't exist or has moved. Let's get you back on track.",
  backHome: "Back to home",
  contactCta: "Contact us",
};