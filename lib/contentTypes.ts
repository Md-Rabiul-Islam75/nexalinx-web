import type { IconKey, Accent } from "./services";

/**
 * Shared content contract for the editorial pages (How we work, Why Nexalinx).
 *
 * These types are the interface between the CMS and the design. Every section
 * renders from an array, so an editor can add, remove or reorder items and the
 * layout absorbs it — no component knows how many entries it will receive.
 *
 * Rules the design guarantees:
 *   • Lists flow into responsive grids; any count from 1 upward composes.
 *   • Optional fields degrade — omit `desc` and the row simply tightens.
 *   • `icon` and `accent` fall back to sensible defaults when absent, so a new
 *     entry is never broken, only plainer.
 */

export type PageHero = {
  eyebrow: string;
  /** Headline split in two so the second half can carry the gradient */
  headline: [string, string];
  intro: string;
  stats: { value: string; label: string }[];
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
};

/** A numbered stage in a process timeline */
export type Phase = {
  step: string;
  title: string;
  duration: string;
  summary: string;
  /** What the client physically receives at the end of this phase */
  deliverables: string[];
  icon?: IconKey;
  accent?: Accent;
};

/** A titled card with body copy — the workhorse block */
export type Block = {
  title: string;
  body: string;
  icon?: IconKey;
  accent?: Accent;
  /** Optional short tag rendered above the title */
  tag?: string;
};

/** One row of a comparison table */
export type CompareRow = {
  criterion: string;
  /** Keyed by column id — missing keys render as a dash */
  values: Record<string, string>;
  /** Column id that wins this row; that cell is highlighted */
  best?: string;
};

export type CompareTable = {
  columns: { id: string; label: string; note?: string; highlight?: boolean }[];
  rows: CompareRow[];
};

export type Faq = { q: string; a: string };

export type Quote = {
  text: string;
  attribution?: string;
};
