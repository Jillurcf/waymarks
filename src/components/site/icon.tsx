import {
  ArrowRight,
  ChartBar,
  ChartPie,
  CircleCheckBig,
  Clock3,
  Cloud,
  Code,
  Compass,
  Cpu,
  Diamond,
  Eye,
  Layers,
  LayoutDashboard,
  Lightbulb,
  Mail,
  MapPin,
  Megaphone,
  Monitor,
  Package,
  Paintbrush,
  Palette,
  PenTool,
  Phone,
  Presentation,
  Rocket,
  Search,
  Share2,
  Smartphone,
  Sparkles,
  Star,
  Target,
  TrendingUp,
  Users,
  Zap,
} from "lucide-react";
import {
  siLaravel,
  siNextdotjs,
  siNodedotjs,
  siPostgresql,
  siReact,
  siShopify,
  siVuedotjs,
  siWebflow,
  siWordpress,
  type SimpleIcon,
} from "simple-icons";

import { cn } from "@/lib/utils";
import { icons } from "@/lib/content/home";

function BrandIcon({
  icon,
  className,
}: {
  icon: SimpleIcon;
  className?: string;
}) {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className={className}>
      <path d={icon.path} fill="currentColor" />
    </svg>
  );
}

/** Render a content icon by name. Decorative (aria-hidden) by default. */
export function Icon({
  name,
  className,
}: {
  name: string | undefined;
  className?: string;
}) {
  const cls = cn("size-5", className);
  switch (name) {
    case icons.strategy:
      return <Compass aria-hidden="true" className={cls} />;
    case icons.design:
      return <Palette aria-hidden="true" className={cls} />;
    case icons.technology:
      return <Code aria-hidden="true" className={cls} />;
    case icons.growth:
      return <TrendingUp aria-hidden="true" className={cls} />;
    case icons.strategyBadge:
      return <Lightbulb aria-hidden="true" className={cls} />;
    case icons.designBadge:
      return <Paintbrush aria-hidden="true" className={cls} />;
    case icons.technologyBadge:
      return <Cpu aria-hidden="true" className={cls} />;
    case icons.growthBadge:
      return <Rocket aria-hidden="true" className={cls} />;
    case icons.react:
      return <BrandIcon icon={siReact} className={cls} />;
    case icons.nextjs:
      return <BrandIcon icon={siNextdotjs} className={cls} />;
    case icons.vue:
      return <BrandIcon icon={siVuedotjs} className={cls} />;
    case icons.node:
      return <BrandIcon icon={siNodedotjs} className={cls} />;
    case icons.laravel:
      return <BrandIcon icon={siLaravel} className={cls} />;
    case icons.postgresql:
      return <BrandIcon icon={siPostgresql} className={cls} />;
    case icons.wordpress:
      return <BrandIcon icon={siWordpress} className={cls} />;
    case icons.shopify:
      return <BrandIcon icon={siShopify} className={cls} />;
    case icons.webflow:
      return <BrandIcon icon={siWebflow} className={cls} />;
    case icons.brandIdentity:
      return <Star aria-hidden="true" className={cls} />;
    case icons.uiUx:
      return <LayoutDashboard aria-hidden="true" className={cls} />;
    case icons.website:
      return <Monitor aria-hidden="true" className={cls} />;
    case icons.saas:
      return <Cloud aria-hidden="true" className={cls} />;
    case icons.mvp:
      return <Rocket aria-hidden="true" className={cls} />;
    case icons.mobileApp:
      return <Smartphone aria-hidden="true" className={cls} />;
    case icons.digitalGrowth:
      return <ChartPie aria-hidden="true" className={cls} />;
    case icons.startups:
      return <Zap aria-hidden="true" className={cls} />;
    case icons.growingBusinesses:
      return <ChartBar aria-hidden="true" className={cls} />;
    case icons.saasTeams:
      return <Layers aria-hidden="true" className={cls} />;
    case icons.establishedCompanies:
      return <Users aria-hidden="true" className={cls} />;
    case icons.discover:
      return <Search aria-hidden="true" className={cls} />;
    case icons.define:
      return <Diamond aria-hidden="true" className={cls} />;
    case icons.create:
      return <PenTool aria-hidden="true" className={cls} />;
    case icons.review:
      return <Eye aria-hidden="true" className={cls} />;
    case icons.launch:
      return <CircleCheckBig aria-hidden="true" className={cls} />;
    case icons.arrowRight:
      return <ArrowRight aria-hidden="true" className={cls} />;
    case icons.socialMedia:
      return <Share2 aria-hidden="true" className={cls} />;
    case icons.presentations:
      return <Presentation aria-hidden="true" className={cls} />;
    case icons.packaging:
      return <Package aria-hidden="true" className={cls} />;
    case icons.ads:
      return <Megaphone aria-hidden="true" className={cls} />;
    case icons.mail:
      return <Mail aria-hidden="true" className={cls} />;
    case icons.phone:
      return <Phone aria-hidden="true" className={cls} />;
    case icons.mapPin:
      return <MapPin aria-hidden="true" className={cls} />;
    // Converted from the Figma export (`about_us`); the plate and the "i" mark
    // inherit the row colour (quality gate A).
    case icons.aboutUs:
      return (
        <svg aria-hidden="true" viewBox="0 0 44 44" fill="none" className={cls}>
          <rect
            width="44"
            height="44"
            rx="12"
            fill="currentColor"
            fillOpacity="0.1"
          />
          <path
            d="M21.9997 31.1667C27.0623 31.1667 31.1663 27.0626 31.1663 22C31.1663 16.9374 27.0623 12.8333 21.9997 12.8333C16.9371 12.8333 12.833 16.9374 12.833 22C12.833 27.0626 16.9371 31.1667 21.9997 31.1667Z"
            stroke="currentColor"
            strokeWidth="1.83"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M22 25.6667V22"
            stroke="currentColor"
            strokeWidth="1.83"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M21.8851 18.5625H21.9997M21.7705 18.5625C21.7705 18.4359 21.8731 18.3333 21.9997 18.3333C22.1263 18.3333 22.2288 18.4359 22.2288 18.5625C22.2288 18.6891 22.1263 18.7917 21.9997 18.7917C21.8731 18.7917 21.7705 18.6891 21.7705 18.5625Z"
            stroke="currentColor"
            strokeWidth="1.83"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    // Converted from the Figma export (`about_us_hero_icon`). The frame carries
    // three tones, so it references the brand tokens rather than `currentColor`
    // (still zero raw hex — quality gate A).
    case icons.aboutUsHero:
      return (
        <svg aria-hidden="true" viewBox="0 0 72 72" fill="none" className={cls}>
          <rect
            width="72"
            height="72"
            rx="12"
            fill="var(--waymarks-secondary)"
            fillOpacity="0.3"
          />
          <rect
            x="0.5"
            y="0.5"
            width="71"
            height="71"
            rx="11.5"
            stroke="var(--waymarks-accent)"
            strokeOpacity="0.2"
          />
          <path
            d="M55.08 42H46C44.9391 42 43.9217 42.4214 43.1716 43.1716C42.4214 43.9217 42 44.9391 42 46V55.08"
            stroke="var(--waymarks-primary)"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M26 18.68V22C26 23.5913 26.6321 25.1174 27.7574 26.2426C28.8826 27.3679 30.4087 28 32 28C33.0609 28 34.0783 28.4214 34.8284 29.1716C35.5786 29.9217 36 30.9391 36 32C36 34.2 37.8 36 40 36C41.0609 36 42.0783 35.5786 42.8284 34.8284C43.5786 34.0783 44 33.0609 44 32C44 29.8 45.8 28 48 28H54.34"
            stroke="var(--waymarks-primary)"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M33.9996 55.9V48C33.9996 46.9391 33.5782 45.9217 32.828 45.1716C32.0779 44.4214 31.0605 44 29.9996 44C28.9387 44 27.9213 43.5786 27.1712 42.8284C26.421 42.0783 25.9996 41.0609 25.9996 40V38C25.9996 36.9391 25.5782 35.9217 24.828 35.1716C24.0779 34.4214 23.0605 34 21.9996 34H16.0996"
            stroke="var(--waymarks-primary)"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M36 56C47.0457 56 56 47.0457 56 36C56 24.9543 47.0457 16 36 16C24.9543 16 16 24.9543 16 36C16 47.0457 24.9543 56 36 56Z"
            stroke="var(--waymarks-primary)"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    // Converted from the Figma export (`creative_powerHouse_icon`); the frame
    // keeps the two brand tones and the mark inherits the row colour.
    case icons.creativePowerhouse:
      return (
        <svg aria-hidden="true" viewBox="0 0 72 72" fill="none" className={cls}>
          <rect
            width="72"
            height="72"
            rx="12"
            fill="var(--waymarks-secondary)"
            fillOpacity="0.3"
          />
          <rect
            x="0.5"
            y="0.5"
            width="71"
            height="71"
            rx="11.5"
            stroke="var(--waymarks-accent)"
            strokeOpacity="0.2"
          />
          <path
            d="M34.0339 17.628C34.1196 17.1692 34.3631 16.7549 34.7221 16.4567C35.0811 16.1585 35.5332 15.9952 35.9999 15.9952C36.4666 15.9952 36.9187 16.1585 37.2777 16.4567C37.6368 16.7549 37.8802 17.1692 37.9659 17.628L40.0679 28.744C40.2172 29.5343 40.6013 30.2613 41.17 30.83C41.7387 31.3987 42.4656 31.7827 43.2559 31.932L54.3719 34.034C54.8307 34.1197 55.2451 34.3632 55.5433 34.7222C55.8415 35.0813 56.0047 35.5333 56.0047 36C56.0047 36.4668 55.8415 36.9188 55.5433 37.2778C55.2451 37.6369 54.8307 37.8803 54.3719 37.966L43.2559 40.068C42.4656 40.2173 41.7387 40.6014 41.17 41.1701C40.6013 41.7388 40.2172 42.4657 40.0679 43.256L37.9659 54.372C37.8802 54.8308 37.6368 55.2452 37.2777 55.5434C36.9187 55.8416 36.4666 56.0048 35.9999 56.0048C35.5332 56.0048 35.0811 55.8416 34.7221 55.5434C34.3631 55.2452 34.1196 54.8308 34.0339 54.372L31.9319 43.256C31.7826 42.4657 31.3986 41.7388 30.8298 41.1701C30.2611 40.6014 29.5342 40.2173 28.7439 40.068L17.6279 37.966C17.1691 37.8803 16.7547 37.6369 16.4565 37.2778C16.1583 36.9188 15.9951 36.4668 15.9951 36C15.9951 35.5333 16.1583 35.0813 16.4565 34.7222C16.7547 34.3632 17.1691 34.1197 17.6279 34.034L28.7439 31.932C29.5342 31.7827 30.2611 31.3987 30.8298 30.83C31.3986 30.2613 31.7826 29.5343 31.9319 28.744L34.0339 17.628Z"
            stroke="var(--waymarks-primary)"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M52 16V24"
            stroke="var(--waymarks-primary)"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M56 20H48"
            stroke="var(--waymarks-primary)"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M20 56C22.2091 56 24 54.2091 24 52C24 49.7909 22.2091 48 20 48C17.7909 48 16 49.7909 16 52C16 54.2091 17.7909 56 20 56Z"
            stroke="var(--waymarks-primary)"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    // Converted from the Figma export (`talent_network_icon`); same frame as
    // `aboutUsHero`, with the network mark in the primary green.
    case icons.talentNetwork:
      return (
        <svg aria-hidden="true" viewBox="0 0 72 72" fill="none" className={cls}>
          <rect
            width="72"
            height="72"
            rx="12"
            fill="var(--waymarks-secondary)"
            fillOpacity="0.3"
          />
          <rect
            x="0.5"
            y="0.5"
            width="71"
            height="71"
            rx="11.5"
            stroke="var(--waymarks-accent)"
            strokeOpacity="0.2"
          />
          <path
            d="M48 54C48 49.7565 46.3143 45.6869 43.3137 42.6863C40.3131 39.6857 36.2435 38 32 38C27.7565 38 23.6869 39.6857 20.6863 42.6863C17.6857 45.6869 16 49.7565 16 54"
            stroke="var(--waymarks-primary)"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M32 38C37.5228 38 42 33.5228 42 28C42 22.4772 37.5228 18 32 18C26.4772 18 22 22.4772 22 28C22 33.5228 26.4772 38 32 38Z"
            stroke="var(--waymarks-primary)"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M55.9996 52C55.9996 45.26 51.9996 39 47.9996 36C49.3144 35.0136 50.3658 33.7182 51.0607 32.2286C51.7556 30.7389 52.0726 29.101 51.9836 27.4596C51.8947 25.8183 51.4024 24.2242 50.5506 22.8184C49.6987 21.4127 48.5134 20.2385 47.0996 19.4"
            stroke="var(--waymarks-primary)"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case icons.highFidelity:
      return (
        <svg aria-hidden="true" viewBox="0 0 48 48" className={cls}>
          <path
            d="M36 8H12C8.68629 8 6 10.6863 6 14V34C6 37.3137 8.68629 40 12 40H36C39.3137 40 42 37.3137 42 34V14C42 10.6863 39.3137 8 36 8Z"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M6 18H42M16 28H32"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case icons.userFlows:
      return (
        <svg aria-hidden="true" viewBox="0 0 48 48" className={cls}>
          <path
            d="M12 17C14.7614 17 17 14.7614 17 12C17 9.23858 14.7614 7 12 7C9.23858 7 7 9.23858 7 12C7 14.7614 9.23858 17 12 17Z"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M36 29C38.7614 29 41 26.7614 41 24C41 21.2386 38.7614 19 36 19C33.2386 19 31 21.2386 31 24C31 26.7614 33.2386 29 36 29Z"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12 41C14.7614 41 17 38.7614 17 36C17 33.2386 14.7614 31 12 31C9.23858 31 7 33.2386 7 36C7 38.7614 9.23858 41 12 41Z"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M17 12H24C25.5913 12 27.1174 12.6321 28.2426 13.7574C29.3679 14.8826 30 16.4087 30 18V19M17 36H24C25.5913 36 27.1174 35.3679 28.2426 34.2426C29.3679 33.1174 30 31.5913 30 30V29"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case icons.designSystems:
      return (
        <svg aria-hidden="true" viewBox="0 0 48 48" className={cls}>
          <path
            d="M24 6L42 16L24 26L6 16L24 6Z"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M6 26L24 36L42 26"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case icons.responsiveLayouts:
      return (
        <svg aria-hidden="true" viewBox="0 0 48 48" className={cls}>
          <path
            d="M28 10H10C7.79086 10 6 11.7909 6 14V26C6 28.2091 7.79086 30 10 30H28C30.2091 30 32 28.2091 32 26V14C32 11.7909 30.2091 10 28 10Z"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M38 18H32C29.7909 18 28 19.7909 28 22V36C28 38.2091 29.7909 40 32 40H38C40.2091 40 42 38.2091 42 36V22C42 19.7909 40.2091 18 38 18Z"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case icons.interactivePrototypes:
      return (
        <svg aria-hidden="true" viewBox="0 0 48 48" className={cls}>
          <path
            d="M10 6L22 40L27 26L42 21L10 6Z"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case icons.wireframes:
      return (
        <svg aria-hidden="true" viewBox="0 0 48 48" className={cls}>
          <path
            d="M38 6H10C7.79086 6 6 7.79086 6 10V38C6 40.2091 7.79086 42 10 42H38C40.2091 42 42 40.2091 42 38V10C42 7.79086 40.2091 6 38 6Z"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M6 18H42M20 18V42"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case icons.developerReadyDesigns:
      return (
        <svg aria-hidden="true" viewBox="0 0 39 35" className={cls}>
          <path
            d="M11.5 7.50024L1.5 17.5002L11.5 27.5002M27.5 7.50024L37.5 17.5002L27.5 27.5002M23.5 1.50024L15.5 33.5002"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case icons.usabilityTesting:
      return <Eye aria-hidden="true" className={cls} />;
    // Converted from the Figma export (`usability_testing_icon`); strokes are
    // `currentColor` so the mark inherits the row colour (quality gate A).
    case icons.usabilityTestingMark:
      return (
        <svg aria-hidden="true" viewBox="0 0 48 48" className={cls}>
          <path
            d="M8 40V20M20 40V8M32 40V26M44 40H4"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    // Converted from the Figma export (`backend_icon`); strokes are
    // `currentColor` so the mark inherits the row colour (quality gate A).
    case icons.backendDevelopment:
      return (
        <svg aria-hidden="true" viewBox="0 0 48 48" className={cls}>
          <path
            d="M40 4H8C5.79086 4 4 5.79086 4 8V16C4 18.2091 5.79086 20 8 20H40C42.2091 20 44 18.2091 44 16V8C44 5.79086 42.2091 4 40 4Z"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M40 28H8C5.79086 28 4 29.7909 4 32V40C4 42.2091 5.79086 44 8 44H40C42.2091 44 44 42.2091 44 40V32C44 29.7909 42.2091 28 40 28Z"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12 12H12.02"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12 36H12.02"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    // Converted from the Figma export (`cms_setup_icon`); strokes are
    // `currentColor` so the mark inherits the row colour (quality gate A).
    case icons.cmsSetup:
      return (
        <svg aria-hidden="true" viewBox="0 0 48 48" className={cls}>
          <path
            d="M40 6H8C6.89543 6 6 6.89543 6 8V18C6 19.1046 6.89543 20 8 20H40C41.1046 20 42 19.1046 42 18V8C42 6.89543 41.1046 6 40 6Z"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M22 28H8C6.89543 28 6 28.8954 6 30V40C6 41.1046 6.89543 42 8 42H22C23.1046 42 24 41.1046 24 40V30C24 28.8954 23.1046 28 22 28Z"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M40 28H34C32.8954 28 32 28.8954 32 30V40C32 41.1046 32.8954 42 34 42H40C41.1046 42 42 41.1046 42 40V30C42 28.8954 41.1046 28 40 28Z"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    // Converted from the Figma export (`performance_optimization_icon`);
    // strokes are `currentColor` so the mark inherits the row colour (gate A).
    case icons.performanceOptimization:
      return (
        <svg aria-hidden="true" viewBox="0 0 48 48" className={cls}>
          <path
            d="M24 28L32 20"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M6.68 37.9999C4.92444 34.9595 4.00013 31.5106 4 27.9998C3.99987 24.489 4.92391 21.04 6.67924 17.9995C8.43457 14.959 10.9593 12.4341 13.9998 10.6786C17.0402 8.92319 20.4892 7.99902 24 7.99902C27.5108 7.99902 30.9598 8.92319 34.0002 10.6786C37.0407 12.4341 39.5654 14.959 41.3208 17.9995C43.0761 21.04 44.0001 24.489 44 27.9998C43.9999 31.5106 43.0756 34.9595 41.32 37.9999"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    // Converted from the Figma export (`QA_testing_icon`); strokes are
    // `currentColor` so the mark inherits the row colour (quality gate A).
    case icons.qaTesting:
      return (
        <svg aria-hidden="true" viewBox="0 0 48 48" className={cls}>
          <path
            d="M40 25.9999C40 35.9999 33 40.9999 24.68 43.8999C24.2443 44.0476 23.7711 44.0405 23.34 43.8799C15 40.9999 8 35.9999 8 25.9999V11.9999C8 11.4695 8.21071 10.9608 8.58579 10.5857C8.96086 10.2106 9.46957 9.99992 10 9.99992C14 9.99992 19 7.59992 22.48 4.55992C22.9037 4.19792 23.4427 3.99902 24 3.99902C24.5573 3.99902 25.0963 4.19792 25.52 4.55992C29.02 7.61992 34 9.99992 38 9.99992C38.5304 9.99992 39.0391 10.2106 39.4142 10.5857C39.7893 10.9608 40 11.4695 40 11.9999V25.9999Z"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M18 24L22 28L30 20"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    // Converted from the Figma export (`deployment_icon`); strokes are
    // `currentColor` so the mark inherits the row colour (quality gate A).
    case icons.deployment:
      return (
        <svg aria-hidden="true" viewBox="0 0 48 48" className={cls}>
          <path
            d="M36 33.96H24.02C21.82 33.96 20.12 35.84 19.06 37.76C18.2209 39.3345 16.8796 40.5833 15.2492 41.3079C13.6189 42.0326 11.7931 42.1914 10.0621 41.7592C8.33115 41.3271 6.7943 40.3287 5.69589 38.9228C4.59749 37.5169 4.00056 35.7841 4 34C4.02 32.6 4.4 31.2 5.14 30"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12 34.0001L18.26 22.4401C19.32 20.5001 18.46 18.0801 17.26 16.2401C16.6936 15.3343 16.3144 14.3243 16.1447 13.2695C15.975 12.2148 16.0183 11.1368 16.272 10.099C16.5257 9.06131 16.9846 8.0849 17.6218 7.22742C18.2589 6.36993 19.0614 5.64874 19.9817 5.10639C20.9021 4.56405 21.9218 4.21154 22.9806 4.06965C24.0395 3.92777 25.116 3.99939 26.1467 4.28029C27.1774 4.56118 28.1414 5.04567 28.9818 5.70516C29.8222 6.36465 30.5221 7.18578 31.04 8.12011"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M24 12L30.26 23.46C31.32 25.4 33.8 26 36 26C38.1217 26 40.1566 26.8429 41.6569 28.3431C43.1571 29.8434 44 31.8783 44 34C44 36.1217 43.1571 38.1566 41.6569 39.6569C40.1566 41.1571 38.1217 42 36 42"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    // Converted from the Figma export (`competitive_analysis_icon`); strokes
    // are `currentColor` so the mark inherits the row colour (quality gate A).
    case icons.competitiveAnalysis:
      return (
        <svg aria-hidden="true" viewBox="0 0 48 48" className={cls}>
          <path
            d="M10 42V30M24 42V6M38 42V18"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    // Converted from the Figma export (`sitemap_icon`).
    case icons.sitemap:
      return (
        <svg aria-hidden="true" viewBox="0 0 48 48" className={cls}>
          <path
            d="M24 42C27.3137 42 30 39.3137 30 36C30 32.6863 27.3137 30 24 30C20.6863 30 18 32.6863 18 36C18 39.3137 20.6863 42 24 42Z"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18Z"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M36 18C39.3137 18 42 15.3137 42 12C42 8.68629 39.3137 6 36 6C32.6863 6 30 8.68629 30 12C30 15.3137 32.6863 18 36 18Z"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M36 18V22C36 23.2 35.2 24 34 24H14C12.8 24 12 23.2 12 22V18"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M24 24V30"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    // Converted from the Figma export (`interface_design_icon`).
    case icons.interfaceDesign:
      return (
        <svg aria-hidden="true" viewBox="0 0 48 48" className={cls}>
          <path
            d="M36 16V12C36 10.9391 35.5786 9.92172 34.8284 9.17157C34.0783 8.42143 33.0609 8 32 8H8C6.93913 8 5.92172 8.42143 5.17157 9.17157C4.42143 9.92172 4 10.9391 4 12V26C4 27.0609 4.42143 28.0783 5.17157 28.8284C5.92172 29.5786 6.93913 30 8 30H24"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M20 38.0001V30.0801V36.3801"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M14 38H24"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M40 24H36C33.7909 24 32 25.7909 32 28V40C32 42.2091 33.7909 44 36 44H40C42.2091 44 44 42.2091 44 40V28C44 25.7909 42.2091 24 40 24Z"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    // Converted from the Figma export (`section_libraries_icon`).
    case icons.sectionLibraries:
      return (
        <svg aria-hidden="true" viewBox="0 0 48 48" className={cls}>
          <path
            d="M32 12L40 40M24 12V40M16 16V40M8 8V40"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    // Converted from the Figma export (`ux_writing_icon`).
    case icons.uxWriting:
      return (
        <svg aria-hidden="true" viewBox="0 0 48 48" className={cls}>
          <path
            d="M31.414 42.5859C31.0389 42.9609 30.5303 43.1715 30 43.1715C29.4697 43.1715 28.9611 42.9609 28.586 42.5859L25.414 39.4139C25.0391 39.0389 24.8284 38.5303 24.8284 37.9999C24.8284 37.4696 25.0391 36.961 25.414 36.5859L36.586 25.4139C36.9611 25.039 37.4697 24.8284 38 24.8284C38.5303 24.8284 39.0389 25.039 39.414 25.4139L42.586 28.5859C42.9609 28.961 43.1716 29.4696 43.1716 29.9999C43.1716 30.5303 42.9609 31.0389 42.586 31.4139L31.414 42.5859Z"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M36 26L33.25 12.252C33.1752 11.878 32.995 11.5331 32.7307 11.2581C32.4663 10.9831 32.1288 10.7895 31.758 10.7L6.47001 4.05601C6.13687 3.97547 5.78861 3.98188 5.45866 4.07465C5.12871 4.16742 4.82814 4.34343 4.58579 4.58579C4.34343 4.82814 4.16742 5.12871 4.07465 5.45866C3.98188 5.78861 3.97547 6.13687 4.05601 6.47001L10.7 31.758C10.7895 32.1288 10.9831 32.4663 11.2581 32.7307C11.5331 32.995 11.878 33.1752 12.252 33.25L26 36"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M4.59998 4.6001L19.172 19.1721"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M22 26C24.2091 26 26 24.2091 26 22C26 19.7909 24.2091 18 22 18C19.7909 18 18 19.7909 18 22C18 24.2091 19.7909 26 22 26Z"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    // Converted from the Figma export (`ux_audit_icon`).
    case icons.uxAudit:
      return (
        <svg aria-hidden="true" viewBox="0 0 48 48" className={cls}>
          <path
            d="M16 22L20 26L28 18"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M22 38C30.8366 38 38 30.8366 38 22C38 13.1634 30.8366 6 22 6C13.1634 6 6 13.1634 6 22C6 30.8366 13.1634 38 22 38Z"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M42 41.9999L33.4 33.3999"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    // Converted from the Figma export (`conversion_strategy_icon`).
    case icons.conversionStrategy:
      return (
        <svg aria-hidden="true" viewBox="0 0 48 48" className={cls}>
          <path
            d="M32 14H44V26"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M44 14L27 31L17 21L4 34"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    // Converted from the Figma export (`design_systems_icon`); kept separate
    // from `icons.designSystems`, which carries the older layered-planes mark.
    case icons.designSystemsMark:
      return (
        <svg aria-hidden="true" viewBox="0 0 48 48" className={cls}>
          <path
            d="M31.072 22.5859C30.6971 22.961 30.4865 23.4696 30.4865 23.9999C30.4865 24.5302 30.6971 25.0389 31.072 25.4139L35.824 30.1679C36.1991 30.5429 36.7077 30.7535 37.238 30.7535C37.7683 30.7535 38.277 30.5429 38.652 30.1679L43.406 25.4139C43.781 25.0389 43.9916 24.5302 43.9916 23.9999C43.9916 23.4696 43.781 22.961 43.406 22.5859L38.652 17.8319C38.277 17.457 37.7683 17.2463 37.238 17.2463C36.7077 17.2463 36.1991 17.457 35.824 17.8319L31.072 22.5859Z"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M4.594 22.5859C4.21905 22.961 4.00842 23.4696 4.00842 23.9999C4.00842 24.5302 4.21905 25.0389 4.594 25.4139L9.348 30.1679C9.72305 30.5429 10.2317 30.7535 10.762 30.7535C11.2923 30.7535 11.8009 30.5429 12.176 30.1679L16.93 25.4139C17.3049 25.0389 17.5156 24.5302 17.5156 23.9999C17.5156 23.4696 17.3049 22.961 16.93 22.5859L12.176 17.8319C11.8009 17.457 11.2923 17.2463 10.762 17.2463C10.2317 17.2463 9.72305 17.457 9.348 17.8319L4.594 22.5859Z"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M17.832 35.8239C17.646 36.0096 17.4985 36.2302 17.3979 36.473C17.2972 36.7158 17.2454 36.9761 17.2454 37.2389C17.2454 37.5017 17.2972 37.762 17.3979 38.0048C17.4985 38.2476 17.646 38.4682 17.832 38.6539L22.586 43.4059C22.9611 43.7808 23.4697 43.9915 24 43.9915C24.5303 43.9915 25.0389 43.7808 25.414 43.4059L30.168 38.6539C30.3539 38.4682 30.5015 38.2476 30.6021 38.0048C30.7028 37.762 30.7546 37.5017 30.7546 37.2389C30.7546 36.9761 30.7028 36.7158 30.6021 36.473C30.5015 36.2302 30.3539 36.0096 30.168 35.8239L25.414 31.0719C25.0389 30.697 24.5303 30.4863 24 30.4863C23.4697 30.4863 22.9611 30.697 22.586 31.0719L17.832 35.8239Z"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M17.832 9.34812C17.457 9.72317 17.2464 10.2318 17.2464 10.7621C17.2464 11.2924 17.457 11.8011 17.832 12.1761L22.586 16.9281C22.961 17.3031 23.4696 17.5137 24 17.5137C24.5303 17.5137 25.0389 17.3031 25.414 16.9281L30.168 12.1761C30.5429 11.8011 30.7535 11.2924 30.7535 10.7621C30.7535 10.2318 30.5429 9.72317 30.168 9.34812L25.414 4.59412C25.0389 4.21918 24.5303 4.00854 24 4.00854C23.4696 4.00854 22.961 4.21918 22.586 4.59412L17.832 9.34812Z"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case icons.clock3:
      return <Clock3 aria-hidden="true" className={cls} />;
    case icons.cpu:
      return <Cpu aria-hidden="true" className={cls} />;
    case icons.target:
      return <Target aria-hidden="true" className={cls} />;
    case icons.sparkles:
      return <Sparkles aria-hidden="true" className={cls} />;
    // Converted from the Figma export (`unique_approach_icon`); strokes are
    // `currentColor` so the mark inherits the row colour (quality gate A).
    case icons.uniqueApproach:
      return (
        <svg
          aria-hidden="true"
          viewBox="0 0 48 48"
          fill="none"
          className={cls}
        >
          <path
            d="M24.0005 20C22.9396 20 21.9222 20.4214 21.172 21.1716C20.4219 21.9217 20.0005 22.9391 20.0005 24C20.0005 26.04 19.8005 29.02 19.4805 32"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M28 26.2402C28 31.0002 28 39.0002 26 44.0002"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M34.5801 42.04C34.8201 40.84 35.4401 37.44 35.5801 36"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M4 24C4 19.8024 5.32075 15.7111 7.77516 12.3058C10.2296 8.90048 13.6932 6.35375 17.6754 5.02633C21.6577 3.69892 25.9566 3.65813 29.9634 4.90973C33.9701 6.16133 37.4814 8.64188 40 12"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M4 32H4.02"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M43.5996 32C43.9996 28 43.8616 21.292 43.5996 20"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M10 39C11 36 12 30 12 24C11.998 22.6377 12.2279 21.2851 12.68 20"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M17.2998 44C17.7198 42.68 18.1998 41.36 18.4398 40"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M18 13.5999C19.8248 12.5463 21.8948 11.9919 24.0019 11.9922C26.109 11.9925 28.1789 12.5477 30.0033 13.6018C31.8278 14.6559 33.3425 16.1719 34.3952 17.9972C35.4479 19.8225 36.0014 21.8928 36 23.9999V27.9999"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    // Converted from the Figma export (`agile_process_icon`); strokes are
    // `currentColor` so the mark inherits the row colour (quality gate A).
    case icons.agileProcess:
      return (
        <svg
          aria-hidden="true"
          viewBox="0 0 48 48"
          fill="none"
          className={cls}
        >
          <path
            d="M31.8283 7.99982C32.0546 7.35855 32.0564 6.65943 31.8332 6.01705C31.6101 5.37468 31.1753 4.82717 30.6002 4.4643C30.0251 4.10142 29.3437 3.9447 28.6679 4.01984C27.992 4.09497 27.3617 4.3975 26.8803 4.87782L8.88034 22.8778C8.46063 23.2973 8.17473 23.8318 8.05879 24.4137C7.94286 24.9956 8.00211 25.5989 8.22903 26.1471C8.45596 26.6954 8.84038 27.1641 9.33367 27.4938C9.82696 27.8236 10.407 27.9997 11.0003 27.9998H19.0043C19.1641 28 19.3215 28.0385 19.4633 28.112C19.6051 28.1856 19.7273 28.292 19.8195 28.4224C19.9118 28.5528 19.9714 28.7035 19.9935 28.8617C20.0155 29.0199 19.9994 29.1811 19.9463 29.3318L16.1723 39.9998C15.946 40.6413 15.9443 41.3407 16.1677 41.9833C16.3911 42.6258 16.8262 43.1734 17.4017 43.5361C17.9772 43.8988 18.6589 44.0552 19.3349 43.9796C20.011 43.9039 20.6412 43.6008 21.1223 43.1198L39.1223 25.1198C39.5415 24.7002 39.8268 24.1657 39.9423 23.5839C40.0578 23.0021 39.9982 22.3991 39.7711 21.8512C39.544 21.3033 39.1596 20.8349 38.6664 20.5054C38.1733 20.1759 37.5935 19.9999 37.0003 19.9998H29.0063C28.8462 20.0001 28.6883 19.9618 28.546 19.8883C28.4037 19.8148 28.2811 19.7082 28.1886 19.5775C28.0961 19.4467 28.0363 19.2957 28.0144 19.137C27.9924 18.9784 28.0088 18.8168 28.0623 18.6658L31.8283 7.99982Z"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    // Converted from the Figma export (`data_driven_icon`); strokes are
    // `currentColor` so the mark inherits the row colour (quality gate A).
    case icons.dataDriven:
      return (
        <svg
          aria-hidden="true"
          viewBox="0 0 48 48"
          fill="none"
          className={cls}
        >
          <path
            d="M6 6V38C6 39.0609 6.42143 40.0783 7.17157 40.8284C7.92172 41.5786 8.93913 42 10 42H42"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M36 34V18"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M26 34V10"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M16 34V28"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    // Converted from the Figma export (`collaboration_mindset_icon`); strokes
    // are `currentColor` so the mark inherits the row colour (quality gate A).
    case icons.collaborationMindset:
      return (
        <svg
          aria-hidden="true"
          viewBox="0 0 48 48"
          fill="none"
          className={cls}
        >
          <path
            d="M32 20C32 21.0609 31.5786 22.0783 30.8284 22.8284C30.0783 23.5786 29.0609 24 28 24H13.656C12.5952 24.0002 11.578 24.4218 10.828 25.172L6.424 29.576C6.22541 29.7746 5.97241 29.9098 5.69698 29.9645C5.42155 30.0193 5.13606 29.9912 4.87661 29.8837C4.61717 29.7763 4.39541 29.5943 4.23937 29.3608C4.08334 29.1273 4.00004 28.8528 4 28.572V8C4 6.93913 4.42143 5.92172 5.17157 5.17157C5.92172 4.42143 6.93913 4 8 4H28C29.0609 4 30.0783 4.42143 30.8284 5.17157C31.5786 5.92172 32 6.93913 32 8V20Z"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M40 18C41.0609 18 42.0783 18.4214 42.8284 19.1716C43.5786 19.9217 44 20.9391 44 22V42.572C44 42.8528 43.9167 43.1273 43.7606 43.3608C43.6046 43.5943 43.3828 43.7763 43.1234 43.8837C42.8639 43.9912 42.5785 44.0193 42.303 43.9645C42.0276 43.9098 41.7746 43.7746 41.576 43.576L37.172 39.172C36.422 38.4218 35.4048 38.0002 34.344 38H20C18.9391 38 17.9217 37.5786 17.1716 36.8284C16.4214 36.0783 16 35.0609 16 34V32"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    // Converted from the Figma export (`client_centric_icon`); strokes are
    // `currentColor` so the mark inherits the row colour (quality gate A).
    case icons.clientCentric:
      return (
        <svg
          aria-hidden="true"
          viewBox="0 0 48 48"
          fill="none"
          className={cls}
        >
          <path
            d="M24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44Z"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M24 36C30.6274 36 36 30.6274 36 24C36 17.3726 30.6274 12 24 12C17.3726 12 12 17.3726 12 24C12 30.6274 17.3726 36 24 36Z"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M24 28C26.2091 28 28 26.2091 28 24C28 21.7909 26.2091 20 24 20C21.7909 20 20 21.7909 20 24C20 26.2091 21.7909 28 24 28Z"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    // Converted from the Figma export (`continuous_innovation_icon`); strokes
    // are `currentColor` so the mark inherits the row colour (quality gate A).
    case icons.continuousInnovation:
      return (
        <svg
          aria-hidden="true"
          viewBox="0 0 48 48"
          fill="none"
          className={cls}
        >
          <path
            d="M30 28C30.4 26 31.4 24.6 33 23C35 21.2 36 18.6 36 16C36 12.8174 34.7357 9.76516 32.4853 7.51472C30.2348 5.26428 27.1826 4 24 4C20.8174 4 17.7652 5.26428 15.5147 7.51472C13.2643 9.76516 12 12.8174 12 16C12 18 12.4 20.4 15 23C16.4 24.4 17.6 26 18 28"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M18 36H30"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M20 44H28"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    // Converted from the Figma export (`creative_needs_icon`); strokes are
    // `currentColor` so the mark inherits the row colour (quality gate A).
    case icons.creativeNeeds:
      return (
        <svg
          aria-hidden="true"
          viewBox="0 0 48 48"
          fill="none"
          className={cls}
        >
          <path
            d="M23.9997 10.0001C24.002 9.20016 23.8444 8.40783 23.536 7.6697C23.2277 6.93157 22.7749 6.26255 22.2042 5.70199C21.6335 5.14143 20.9565 4.70065 20.213 4.40556C19.4694 4.11048 18.6744 3.96705 17.8747 3.98372C17.0749 4.0004 16.2865 4.17682 15.5559 4.50263C14.8254 4.82844 14.1673 5.29706 13.6205 5.88091C13.0736 6.46476 12.6491 7.15207 12.3718 7.90241C12.0944 8.65274 11.97 9.45096 12.0057 10.2501C10.8301 10.5524 9.73866 11.1182 8.81412 11.9047C7.88958 12.6912 7.15614 13.6778 6.66935 14.7898C6.18256 15.9017 5.95518 17.1099 6.00444 18.3227C6.0537 19.5356 6.3783 20.7213 6.95366 21.7901C5.94202 22.612 5.14651 23.6686 4.63634 24.868C4.12616 26.0674 3.91678 27.3733 4.02639 28.6721C4.136 29.9709 4.56129 31.2232 5.26527 32.3201C5.96925 33.4171 6.93059 34.3254 8.06566 34.9661C7.92549 36.0506 8.00914 37.1523 8.31143 38.2031C8.61373 39.254 9.12825 40.2318 9.82323 41.076C10.5182 41.9202 11.3789 42.613 12.3521 43.1116C13.3253 43.6102 14.3904 43.904 15.4816 43.9748C16.5728 44.0456 17.6669 43.8919 18.6964 43.5233C19.7259 43.1547 20.6689 42.579 21.4672 41.8316C22.2654 41.0843 22.902 40.1812 23.3376 39.1782C23.7732 38.1752 23.9985 37.0936 23.9997 36.0001V10.0001Z"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M18 26C19.6791 25.4093 21.1454 24.334 22.2133 22.91C23.2813 21.486 23.9031 19.7773 24 18"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12.0059 10.25C12.0454 11.2175 12.3185 12.161 12.8019 13"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M6.9541 21.792C7.31998 21.494 7.71151 21.229 8.1241 21"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12.0004 35.9998C10.6221 36.0004 9.26694 35.6449 8.06641 34.9678"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M24 26H32"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M24 36H36C37.0609 36 38.0783 36.4214 38.8284 37.1716C39.5786 37.9217 40 38.9391 40 40V42"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M24 16H40"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M32 16V10C32 8.93913 32.4214 7.92172 33.1716 7.17157C33.9217 6.42143 34.9391 6 36 6"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M32 27C32.5523 27 33 26.5523 33 26C33 25.4477 32.5523 25 32 25C31.4477 25 31 25.4477 31 26C31 26.5523 31.4477 27 32 27Z"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M36 7C36.5523 7 37 6.55228 37 6C37 5.44772 36.5523 5 36 5C35.4477 5 35 5.44772 35 6C35 6.55228 35.4477 7 36 7Z"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M40 43C40.5523 43 41 42.5523 41 42C41 41.4477 40.5523 41 40 41C39.4477 41 39 41.4477 39 42C39 42.5523 39.4477 43 40 43Z"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M40 17C40.5523 17 41 16.5523 41 16C41 15.4477 40.5523 15 40 15C39.4477 15 39 15.4477 39 16C39 16.5523 39.4477 17 40 17Z"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    // Converted from the Figma export (`Design_should_solve`); strokes are
    // `currentColor` so the mark inherits the row colour (quality gate A).
    case icons.designShouldSolve:
      return (
        <svg
          aria-hidden="true"
          viewBox="0 0 48 48"
          fill="none"
          className={cls}
        >
          <path
            d="M31.4137 42.5862C31.0386 42.9611 30.53 43.1718 29.9997 43.1718C29.4694 43.1718 28.9608 42.9611 28.5857 42.5862L25.4137 39.4142C25.0388 39.0391 24.8281 38.5305 24.8281 38.0002C24.8281 37.4699 25.0388 36.9612 25.4137 36.5862L36.5857 25.4142C36.9608 25.0392 37.4694 24.8286 37.9997 24.8286C38.53 24.8286 39.0386 25.0392 39.4137 25.4142L42.5857 28.5862C42.9606 28.9612 43.1713 29.4699 43.1713 30.0002C43.1713 30.5305 42.9606 31.0391 42.5857 31.4142L31.4137 42.5862Z"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M36 26L33.25 12.252C33.1752 11.878 32.995 11.5331 32.7307 11.2581C32.4663 10.9831 32.1288 10.7895 31.758 10.7L6.47001 4.05601C6.13687 3.97547 5.78861 3.98188 5.45866 4.07465C5.12871 4.16742 4.82814 4.34343 4.58579 4.58579C4.34343 4.82814 4.16742 5.12871 4.07465 5.45866C3.98188 5.78861 3.97547 6.13687 4.05601 6.47001L10.7 31.758C10.7895 32.1288 10.9831 32.4663 11.2581 32.7307C11.5331 32.995 11.878 33.1752 12.252 33.25L26 36"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M4.59961 4.6001L19.1716 19.1721"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M22 26C24.2091 26 26 24.2091 26 22C26 19.7909 24.2091 18 22 18C19.7909 18 18 19.7909 18 22C18 24.2091 19.7909 26 22 26Z"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    // Converted from the Figma export (`technology_should_have`); strokes are
    // `currentColor` so the mark inherits the row colour (quality gate A).
    case icons.technologyShouldHave:
      return (
        <svg
          aria-hidden="true"
          viewBox="0 0 48 48"
          fill="none"
          className={cls}
        >
          <path d="M24 40V44" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M24 4V8" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M34 40V44" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M34 4V8" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M4 24H8" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M4 34H8" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M4 14H8" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M40 24H44" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M40 34H44" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M40 14H44" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M14 40V44" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M14 4V8" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M36 8H12C9.79086 8 8 9.79086 8 12V36C8 38.2091 9.79086 40 12 40H36C38.2091 40 40 38.2091 40 36V12C40 9.79086 38.2091 8 36 8Z" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M30 16H18C16.8954 16 16 16.8954 16 18V30C16 31.1046 16.8954 32 18 32H30C31.1046 32 32 31.1046 32 30V18C32 16.8954 31.1046 16 30 16Z" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    // Converted from the Figma export (`collaboration_makes`); strokes are
    // `currentColor` so the mark inherits the row colour (quality gate A).
    case icons.collaborationMakes:
      return (
        <svg
          aria-hidden="true"
          viewBox="0 0 48 48"
          fill="none"
          className={cls}
        >
          <path d="M32 42V38C32 35.8783 31.1571 33.8434 29.6569 32.3431C28.1566 30.8429 26.1217 30 24 30H12C9.87827 30 7.84344 30.8429 6.34315 32.3431C4.84285 33.8434 4 35.8783 4 38V42" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M32 6.25586C33.7155 6.7006 35.2348 7.70239 36.3194 9.10398C37.4039 10.5056 37.9924 12.2276 37.9924 13.9999C37.9924 15.7721 37.4039 17.4941 36.3194 18.8957C35.2348 20.2973 33.7155 21.2991 32 21.7439" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M44 41.9998V37.9998C43.9987 36.2272 43.4087 34.5053 42.3227 33.1044C41.2368 31.7035 39.7163 30.7029 38 30.2598" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M18 22C22.4183 22 26 18.4183 26 14C26 9.58172 22.4183 6 18 6C13.5817 6 10 9.58172 10 14C10 18.4183 13.5817 22 18 22Z" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    // Converted from the Figma export (`growth_should_be`); strokes are
    // `currentColor` so the mark inherits the row colour (quality gate A).
    case icons.growthShouldBe:
      return (
        <svg
          aria-hidden="true"
          viewBox="0 0 48 48"
          fill="none"
          className={cls}
        >
          <path d="M32 14H44V26" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M44 14L27 31L17 21L4 34" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    default:
      return null;
  }
}