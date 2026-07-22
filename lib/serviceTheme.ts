import type { Accent } from "./services";

/**
 * Per-lane accent theme. Class strings are written out in full so Tailwind's
 * scanner can see them — do not build these by interpolation.
 */
export type AccentTheme = {
  /** Solid gradient for icon tiles and hero glows */
  grad: string;
  /** Light chip background + text */
  chip: string;
  /** Soft icon tile */
  soft: string;
  /** Text-only accent */
  text: string;
  /** Border accent on hover */
  ring: string;
  /** Blurred hero orb */
  orb: string;
  /** Top bar on package cards */
  bar: string;
};

export const ACCENTS: Record<Accent, AccentTheme> = {
  brand: {
    grad: "from-brand-500 to-violet-500",
    chip: "bg-brand-50 text-brand-700",
    soft: "bg-brand-50 text-brand-600",
    text: "text-brand-600",
    ring: "hover:border-brand-300",
    orb: "bg-brand-500/25",
    bar: "from-brand-400 to-brand-600",
  },
  accent: {
    grad: "from-accent-500 to-brand-600",
    chip: "bg-accent-50 text-accent-700",
    soft: "bg-accent-50 text-accent-700",
    text: "text-accent-700",
    ring: "hover:border-accent-300",
    orb: "bg-accent-500/25",
    bar: "from-accent-400 to-accent-600",
  },
  violet: {
    grad: "from-violet-500 to-indigo-600",
    chip: "bg-violet-100 text-violet-700",
    soft: "bg-violet-100 text-violet-600",
    text: "text-violet-600",
    ring: "hover:border-violet-400",
    orb: "bg-violet-500/30",
    bar: "from-violet-400 to-violet-600",
  },
  emerald: {
    grad: "from-emerald-500 to-teal-600",
    chip: "bg-emerald-50 text-emerald-700",
    soft: "bg-emerald-50 text-emerald-600",
    text: "text-emerald-600",
    ring: "hover:border-emerald-300",
    orb: "bg-emerald-500/25",
    bar: "from-emerald-400 to-emerald-600",
  },
  indigo: {
    grad: "from-indigo-500 to-violet-600",
    chip: "bg-indigo-50 text-indigo-700",
    soft: "bg-indigo-50 text-indigo-600",
    text: "text-indigo-600",
    ring: "hover:border-indigo-300",
    orb: "bg-indigo-500/25",
    bar: "from-indigo-400 to-indigo-600",
  },
  amber: {
    grad: "from-amber-400 to-orange-500",
    chip: "bg-amber-50 text-amber-700",
    soft: "bg-amber-50 text-amber-600",
    text: "text-amber-600",
    ring: "hover:border-amber-300",
    orb: "bg-amber-400/25",
    bar: "from-amber-300 to-amber-500",
  },
};
