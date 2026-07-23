import { ServiceIcon } from "./ServiceIcon";
import type { Block, Faq, PageHero as PageHeroData } from "@/lib/contentTypes";
import { ACCENTS } from "@/lib/serviceTheme";

/**
 * Layout primitives for the editorial pages. Each one takes an array and picks
 * its own grid, so adding or removing an item in the CMS rebalances the section
 * instead of leaving a hole in it.
 */

/** Choose a column count that divides the item count cleanly. */
function gridFor(count: number): string {
  if (count <= 1) return "grid-cols-1";
  if (count === 2) return "sm:grid-cols-2";
  if (count === 3) return "sm:grid-cols-2 lg:grid-cols-3";
  if (count === 4) return "sm:grid-cols-2 lg:grid-cols-4";
  if (count % 3 === 0) return "sm:grid-cols-2 lg:grid-cols-3";
  if (count % 4 === 0) return "sm:grid-cols-2 lg:grid-cols-4";
  return "sm:grid-cols-2 lg:grid-cols-3";
}

/* ------------------------------------------------------------------ hero */

export function PageHero({ hero }: { hero: PageHeroData }) {
  return (
    <section className="relative -mt-20 overflow-hidden bg-navy-gradient pt-36 pb-16 text-white sm:pt-40">
      <div className="bg-grid absolute inset-0 opacity-[0.06]" />
      <div className="absolute -left-40 top-10 h-[30rem] w-[30rem] rounded-full bg-brand-500/20 blur-3xl" />
      <div className="absolute -right-32 top-24 h-96 w-96 rounded-full bg-violet-500/25 blur-3xl" />

      <div className="container-x relative">
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.06] px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-brand-100 backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-accent-500" />
            {hero.eyebrow}
          </span>

          <h1 className="mt-6 font-display text-4xl font-extrabold leading-[1.08] tracking-tight sm:text-5xl lg:text-[3.5rem]">
            {hero.headline[0]}{" "}
            <span className="bg-gradient-to-r from-brand-300 via-brand-400 to-violet-400 bg-clip-text text-transparent">
              {hero.headline[1]}
            </span>
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-300">{hero.intro}</p>

          {(hero.primaryCta || hero.secondaryCta) && (
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              {hero.primaryCta && (
                <a href={hero.primaryCta.href} className="btn-primary text-base">
                  {hero.primaryCta.label}
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                    <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
              )}
              {hero.secondaryCta && (
                <a
                  href={hero.secondaryCta.href}
                  className="btn border border-white/20 bg-white/5 text-base text-white hover:bg-white/10"
                >
                  {hero.secondaryCta.label}
                </a>
              )}
            </div>
          )}
        </div>

        {hero.stats.length > 0 && (
          <dl className="mt-12 grid max-w-3xl grid-cols-2 gap-6 border-t border-white/10 pt-8 sm:grid-cols-4">
            {hero.stats.map((s) => (
              <div key={s.label}>
                <dt className="font-display text-2xl font-bold text-white sm:text-3xl">{s.value}</dt>
                <dd className="mt-1 text-xs text-slate-400">{s.label}</dd>
              </div>
            ))}
          </dl>
        )}
      </div>
    </section>
  );
}

/* --------------------------------------------------------- section head */

export function SectionHead({
  eyebrow,
  title,
  highlight,
  intro,
  align = "center",
}: {
  eyebrow: string;
  title: string;
  highlight?: string;
  intro?: string;
  align?: "center" | "left";
}) {
  return (
    <div className={align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      <span className="eyebrow">{eyebrow}</span>
      <h2 className="section-title mt-5">
        {title} {highlight && <span className="text-gradient">{highlight}</span>}
      </h2>
      {intro && <p className="mt-4 text-lg text-slate-600">{intro}</p>}
    </div>
  );
}

/* ------------------------------------------------------------ block grid */

export function BlockGrid({
  blocks,
  variant = "card",
}: {
  blocks: Block[];
  /** `card` = white tile on light bg · `panel` = bordered tile on tinted bg */
  variant?: "card" | "panel";
}) {
  return (
    <div className={`grid gap-5 ${gridFor(blocks.length)}`}>
      {blocks.map((b) => {
        const a = ACCENTS[b.accent ?? "brand"];
        return (
          <article
            key={b.title}
            className={`group relative overflow-hidden rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1.5 ${
              variant === "card"
                ? "border border-slate-100 bg-white shadow-card hover:shadow-soft"
                : "border border-slate-200/70 bg-slate-50/80 hover:border-slate-300 hover:bg-white hover:shadow-card"
            }`}
          >
            <div className="flex items-center gap-3">
              {b.icon && (
                <span
                  className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${a.soft} transition-transform duration-300 group-hover:scale-110`}
                >
                  <ServiceIcon name={b.icon} className="h-5 w-5" />
                </span>
              )}
              {b.tag && !b.icon && (
                <span className={`rounded-lg px-2.5 py-1 text-[11px] font-bold uppercase tracking-wide ${a.chip}`}>
                  {b.tag}
                </span>
              )}
            </div>

            {b.tag && b.icon && (
              <p className="mt-4 text-[11px] font-bold uppercase tracking-wider text-slate-400">{b.tag}</p>
            )}

            <h3 className={`font-display text-base font-bold text-ink ${b.tag && b.icon ? "mt-1" : "mt-4"}`}>
              {b.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-500">{b.body}</p>
          </article>
        );
      })}
    </div>
  );
}

/* -------------------------------------------------------------- faq list */

export function FaqList({ faqs }: { faqs: Faq[] }) {
  return (
    <div className="space-y-3">
      {faqs.map((f) => (
        <details
          key={f.q}
          className="group rounded-2xl border border-slate-100 bg-white px-6 py-5 shadow-card transition hover:shadow-soft"
        >
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-display text-base font-bold text-ink [&::-webkit-details-marker]:hidden">
            {f.q}
            <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-slate-100 text-slate-500 transition group-open:rotate-45 group-open:bg-brand-50 group-open:text-brand-600">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                <path d="M12 5v14M5 12h14" strokeLinecap="round" />
              </svg>
            </span>
          </summary>
          <p className="mt-3 text-[15px] leading-relaxed text-slate-600">{f.a}</p>
        </details>
      ))}
    </div>
  );
}
