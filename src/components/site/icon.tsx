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
    default:
      return null;
  }
}