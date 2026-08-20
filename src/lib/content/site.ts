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
    "Waymark partners with startups and growing businesses on strategy, UI/UX design, and development — turning ideas into products people actually want to use.",
};

export const bookCallHref = `mailto:${site.email}?subject=${encodeURIComponent(
  "Free strategy call",
)}`;

export const socialLinks = [
  { label: "Dribbble", href: "https://dribbble.com" },
  { label: "Behance", href: "https://behance.net" },
  { label: "LinkedIn", href: "https://linkedin.com" },
  { label: "Instagram", href: "https://instagram.com" },
];