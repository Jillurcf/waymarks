import {
  ArrowRight,
  ChartBar,
  ChartPie,
  CircleCheckBig,
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
  Star,
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
    default:
      return null;
  }
}