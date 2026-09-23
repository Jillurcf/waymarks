import {
  ArrowRight,
  ChartBar,
  ChartPie,
  CircleCheckBig,
  Cloud,
  Code,
  Diamond,
  Eye,
  Globe,
  Layers,
  LayoutDashboard,
  Mail,
  Monitor,
  PenTool,
  Rocket,
  Search,
  ShieldCheck,
  Smartphone,
  Star,
  TrendingUp,
  Users,
  Zap,
} from "lucide-react";

import { cn } from "@/lib/utils";
import { icons } from "@/lib/content/home";

// Content modules reference icons by name (gate F: lucide only). The map is
// resolved as static JSX below — never as a dynamic element type — so React
// Compiler's static-components rule stays satisfied.

/** Render a content icon by name. Decorative (aria-hidden) by default. */
export function Icon({
  name,
  className,
}: {
  name: string | undefined;
  className?: string;
}) {
  const cls = cn("size-5", className);
  // Keep the lucide imports live; the branch table stays exhaustive against
  // the icons registry in home.ts.
  switch (name) {
    case icons.strategy:
      return <Globe aria-hidden="true" className={cls} />;
    case icons.design:
      return <ShieldCheck aria-hidden="true" className={cls} />;
    case icons.technology:
      return <Code aria-hidden="true" className={cls} />;
    case icons.growth:
      return <TrendingUp aria-hidden="true" className={cls} />;
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
    case icons.mail:
      return <Mail aria-hidden="true" className={cls} />;
    default:
      return null;
  }
}