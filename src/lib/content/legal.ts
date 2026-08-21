// Legal pages copy (M4 / C4.5).
//
// SEED CONTENT: drafted for the site build and NOT yet reviewed by a
// qualified legal professional. Before launch (C5.4) have both documents
// checked against Waymark's actual contracts, data flows, and UAE law.

export interface LegalSection {
  heading: string;
  paragraphs?: string[];
  bullets?: string[];
}

export interface LegalDoc {
  title: string;
  /** ISO date shown as "Last updated" (formatted en-GB at render time). */
  updated: string;
  intro: string[];
  sections: LegalSection[];
  contactNote: string;
}

export const privacyPage: LegalDoc = {
  title: "Privacy policy",
  updated: "2026-08-01",
  intro: [
    "This policy explains what information Waymark collects through waymarks.agency, why we collect it, and what happens to it. The short version: we collect the minimum we need to answer you, we do not sell it, and you can ask us to delete it at any time.",
  ],
  sections: [
    {
      heading: "What we collect",
      bullets: [
        "Contact details you submit through our forms: name, email, company, and your message.",
        "Email correspondence when you write to us directly.",
        "Aggregate, non-identifying usage statistics about how pages are used.",
      ],
    },
    {
      heading: "How we use it",
      paragraphs: [
        "We use contact details to reply to your enquiry and, where a project follows, to manage that project. We use aggregate statistics to decide which content to improve. We do not sell personal information or use it for advertising.",
      ],
    },
    {
      heading: "Where it is processed",
      paragraphs: [
        "This site is static — pages are plain files. Two features involve third parties:",
      ],
      bullets: [
        "Our contact form submits to a hosted form service, which forwards your message to us.",
        "The contact page can load an embedded Google Maps frame; Google receives standard request data when it loads.",
      ],
    },
    {
      heading: "Retention and deletion",
      paragraphs: [
        "Enquiries are kept for as long as they are useful to serve you, then deleted. Write to hello@waymarks.agency to request a copy of the personal details we hold about you, or to have them deleted, and we will action it within 30 days.",
      ],
    },
    {
      heading: "Cookies",
      paragraphs: [
        "The site sets no tracking cookies. If analytics are enabled in future, this section will be updated before they go live, with an opt-out provided.",
      ],
    },
  ],
  contactNote:
    "Questions about this policy? Email hello@waymarks.agency and a person — not a ticketing system — will answer.",
};

export const termsPage: LegalDoc = {
  title: "Terms & conditions",
  updated: "2026-08-01",
  intro: [
    "These terms cover the use of waymarks.agency. Work delivered by Waymark is governed by the written proposal and agreement signed for each engagement; where those documents differ from this page, the signed agreement takes precedence.",
  ],
  sections: [
    {
      heading: "Use of this site",
      paragraphs: [
        "You may browse, link to, and quote this site with attribution. You may not reproduce its content wholesale, scrape it for training datasets, or present it as your own work.",
      ],
    },
    {
      heading: "Quotes and scope of work",
      paragraphs: [
        "Prices published on this site are indicative ranges. A binding price is only created by a written proposal that lists deliverables, assumptions, and exclusions, accepted by both parties.",
      ],
    },
    {
      heading: "Intellectual property",
      paragraphs: [
        "On full payment, clients own the deliverables produced for their project — designs, code, and documentation. Waymark retains the right to show non-confidential work in its portfolio unless agreed otherwise in writing.",
      ],
    },
    {
      heading: "Content accuracy",
      paragraphs: [
        "Articles on this blog reflect our experience at the time of writing and do not constitute professional advice for your specific situation. Figures and case studies describe particular projects, not guaranteed outcomes.",
      ],
    },
    {
      heading: "Governing law",
      paragraphs: [
        "These terms are governed by the laws of the United Arab Emirates, with the courts of Dubai holding jurisdiction, unless a signed agreement states otherwise.",
      ],
    },
  ],
  contactNote:
    "Questions about these terms? Email hello@waymarks.agency before relying on anything above.",
};
