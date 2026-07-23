import { LaneNav } from "./LaneNav";
import { SOLUTIONS } from "@/lib/solutions";

/** Switcher for the solution detail pages. */
export function SolutionNav({ activeSlug }: { activeSlug: string }) {
  return (
    <LaneNav
      activeSlug={activeSlug}
      ariaLabel="Solutions"
      railTitle="Switch situation"
      allHref="/solutions"
      allLabel="See all solutions"
      items={SOLUTIONS.map((s) => ({
        slug: s.slug,
        label: s.navLabel,
        href: `/solutions/${s.slug}`,
        icon: s.icon,
        accent: s.accent,
      }))}
    />
  );
}
