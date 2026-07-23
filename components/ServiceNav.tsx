import { LaneNav } from "./LaneNav";
import { SERVICES } from "@/lib/services";

/** Lane switcher for the service detail pages. */
export function ServiceNav({ activeSlug }: { activeSlug: string }) {
  return (
    <LaneNav
      activeSlug={activeSlug}
      ariaLabel="Services"
      railTitle="Switch service"
      allHref="/services"
      allLabel="Compare all services"
      items={SERVICES.map((s) => ({
        slug: s.slug,
        label: s.navLabel,
        href: `/services/${s.slug}`,
        icon: s.icon,
        accent: s.accent,
      }))}
    />
  );
}
