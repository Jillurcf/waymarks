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
    default:
      return null;
  }
}