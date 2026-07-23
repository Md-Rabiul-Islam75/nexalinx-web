import Link from "next/link";

import { ServiceIcon } from "./ServiceIcon";
import type { IconKey, Accent } from "@/lib/services";
import { ACCENTS } from "@/lib/serviceTheme";

export type LaneItem = {
  slug: string;
  label: string;
  href: string;
  icon: IconKey;
  accent: Accent;
};

/**
 * Sibling-page switcher used by the service and solution detail pages, so
 * moving between them never requires a trip back to the header dropdown.
 *
 * On wide screens it's a vertical rail pinned to the right edge — collapsed to
 * icons, expanding to full labels on hover. Below 1440px there isn't room
 * beside the container, so it falls back to a sticky horizontal pill bar.
 */
export function LaneNav({
  items,
  activeSlug,
  ariaLabel,
  railTitle,
  allHref,
  allLabel,
}: {
  items: LaneItem[];
  activeSlug: string;
  ariaLabel: string;
  /** Small heading revealed when the rail opens */
  railTitle: string;
  allHref: string;
  allLabel: string;
}) {
  return (
    <>
      {/* --------------------------------------------------- vertical rail */}
      <nav
        aria-label={ariaLabel}
        className="group fixed right-5 top-1/2 z-40 hidden -translate-y-1/2 flex-col wide:flex"
      >
        <div className="flex flex-col gap-1.5 rounded-[1.4rem] border border-slate-200/80 bg-white/85 p-2 shadow-soft backdrop-blur-md">
          <span className="overflow-hidden whitespace-nowrap px-2 text-right text-[10px] font-bold uppercase tracking-wider text-slate-400 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            {railTitle}
          </span>

          {items.map((item) => {
            const active = item.slug === activeSlug;
            const a = ACCENTS[item.accent];
            return (
              <Link
                key={item.slug}
                href={item.href}
                aria-current={active ? "page" : undefined}
                title={item.label}
                className={`flex h-11 w-11 items-center justify-end gap-3 overflow-hidden rounded-xl pr-[0.3rem] transition-[width,background-color] duration-300 ease-out group-hover:w-[16.5rem] group-hover:pl-4 ${
                  active ? "bg-ink" : "hover:bg-slate-100"
                }`}
              >
                <span
                  className={`whitespace-nowrap text-sm font-semibold opacity-0 transition-opacity duration-200 group-hover:opacity-100 ${
                    active ? "text-white" : "text-slate-600"
                  }`}
                >
                  {item.label}
                </span>
                <span
                  className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg ${
                    active ? "bg-white/15 text-white" : a.soft
                  }`}
                >
                  <ServiceIcon name={item.icon} className="h-5 w-5" />
                </span>
              </Link>
            );
          })}

          <span aria-hidden className="mx-2 my-0.5 h-px bg-slate-100" />

          <Link
            href={allHref}
            title={allLabel}
            className="flex h-11 w-11 items-center justify-end gap-3 overflow-hidden rounded-xl pr-[0.3rem] transition-[width] duration-300 ease-out hover:bg-brand-50 group-hover:w-[16.5rem] group-hover:pl-4"
          >
            <span className="whitespace-nowrap text-sm font-semibold text-brand-600 opacity-0 transition-opacity duration-200 group-hover:opacity-100">
              {allLabel}
            </span>
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-brand-50 text-brand-600">
              <ServiceIcon name="grid" className="h-[1.15rem] w-[1.15rem]" />
            </span>
          </Link>
        </div>
      </nav>

      {/* ------------------------------------- horizontal fallback (<1440px) */}
      <div className="sticky top-20 z-40 border-b border-slate-100 bg-white/85 backdrop-blur-md wide:hidden">
        <div className="container-x">
          <div className="no-scrollbar -mx-1 flex items-center gap-2 overflow-x-auto py-3">
            {items.map((item) => {
              const active = item.slug === activeSlug;
              const a = ACCENTS[item.accent];
              return (
                <Link
                  key={item.slug}
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={`flex shrink-0 items-center gap-2 rounded-full py-2 pl-2 pr-4 text-sm font-semibold transition-all duration-200 ${
                    active
                      ? "bg-ink text-white shadow-soft"
                      : "border border-slate-200 bg-white text-slate-600 hover:border-slate-300 hover:text-ink"
                  }`}
                >
                  <span
                    className={`flex h-7 w-7 items-center justify-center rounded-full ${
                      active ? "bg-white/15 text-white" : a.soft
                    }`}
                  >
                    <ServiceIcon name={item.icon} className="h-4 w-4" />
                  </span>
                  {item.label}
                </Link>
              );
            })}

            <Link
              href={allHref}
              className="ml-1 flex shrink-0 items-center gap-1.5 rounded-full px-4 py-2 text-sm font-semibold text-brand-600 transition hover:bg-brand-50"
            >
              All
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
