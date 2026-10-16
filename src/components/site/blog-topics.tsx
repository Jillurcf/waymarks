import Image from "next/image";
import type { ReactElement } from "react";
import { ArrowRight } from "lucide-react";

import { blogTopics, type BlogTopic, type BlogTopicIcon } from "@/lib/content/blog";
import { routeHref } from "@/lib/routes";

import { AiTopicIcon } from "./ai-topic-icon";
import { BrandTopicsIcon } from "./brand-topics-icon";
import { GrowthTopicIcon } from "./growth-topic-icon";
import { SaasProductTopicsIcon } from "./saas-product-topics-icon";
import { UiUxTopicsIcon } from "./ui-ux-topics-icon";
import { WebsiteTopicsIcon } from "./website-topics-icon";

/** Topic tag marks, resolved from the content icon key. */
const topicIcons: Record<
  BlogTopicIcon,
  (props: { className?: string }) => ReactElement
> = {
  branding: BrandTopicsIcon,
  uiux: UiUxTopicsIcon,
  website: WebsiteTopicsIcon,
  saas: SaasProductTopicsIcon,
  growth: GrowthTopicIcon,
  ai: AiTopicIcon,
};

/**
 * "Explore Our Digital / Design Blog By Topic" band: a centred two-line heading
 * (white lead + gradient accent) over a topic grid. Cards are borderless — the
 * artwork sits at the top, then the topic tag (primary green) beside its topic
 * mark, the white headline, a light-neutral standfirst, and a green "explore"
 * anchor with a trailing arrow. The grid stays at `lg:grid-cols-3` (per spec);
 * six topics land as two full rows.
 */
function TopicCard({ topic }: { topic: BlogTopic }) {
  const TopicIcon = topicIcons[topic.icon];

  return (
    <article className="flex flex-col gap-4">
      <div className="relative aspect-[4/3] w-full">
        <Image
          src={topic.image.src}
          alt={topic.image.alt}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-contain"
        />
      </div>

      <p className="flex items-center gap-2 text-[22px] font-bold leading-none text-waymarks-primary">
        <TopicIcon className="text-waymarks-primary" />
        <span>{topic.tag}</span>
      </p>

      <h3 className="text-[28px] font-bold leading-snug tracking-tight text-white">
        {topic.title}
      </h3>

      <p className="text-xl font-normal leading-relaxed text-slate-200">
        {topic.body}
      </p>

      <a
        href={routeHref(topic.cta.href)}
        className="inline-flex items-center gap-2 text-sm font-normal text-waymarks-primary transition-colors hover:text-waymarks-accent"
      >
        {topic.cta.label}
        <ArrowRight aria-hidden="true" className="size-4" />
      </a>
    </article>
  );
}

export function BlogTopics() {
  const { titleLead, titleAccent, topics } = blogTopics;

  return (
    <section className="border-t border-white/10 bg-waymarks-dark text-white">
      <div className="container flex flex-col gap-12 py-20 lg:py-24">
        <h2 className="text-center text-[40px] font-bold leading-tight tracking-tight">
          <span className="block text-white">{titleLead}</span>
          <span className="waymarks-gradient-text block">{titleAccent}</span>
        </h2>

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {topics.map((topic) => (
            <TopicCard key={topic.title} topic={topic} />
          ))}
        </div>
      </div>
    </section>
  );
}
