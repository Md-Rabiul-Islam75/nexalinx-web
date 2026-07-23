import type { Metadata } from "next";
import Link from "next/link";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CTA } from "@/components/CTA";
import { ServiceIcon } from "@/components/ServiceIcon";
import { SectionHead } from "@/components/Editorial";
import { ARTICLES, CATEGORY_META, RESOURCES, formatDate } from "@/lib/insights";
import { ACCENTS } from "@/lib/serviceTheme";

export const metadata: Metadata = {
  title: "Insights — Nexalinx",
  description:
    "Notes on AI, MVPs and product engineering for founders, SMEs and agencies — plus free checklists and templates you can use today.",
};

export default function InsightsPage() {
  const featured = ARTICLES.find((a) => a.featured) ?? ARTICLES[0];
  const rest = ARTICLES.filter((a) => a.slug !== featured.slug);

  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="relative -mt-20 overflow-hidden bg-navy-gradient pt-36 pb-16 text-white sm:pt-40">
          <div className="bg-grid absolute inset-0 opacity-[0.06]" />
          <div className="absolute -left-40 top-10 h-[30rem] w-[30rem] rounded-full bg-brand-500/20 blur-3xl" />
          <div className="absolute -right-32 top-24 h-96 w-96 rounded-full bg-violet-500/25 blur-3xl" />

          <div className="container-x relative">
            <div className="max-w-3xl">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.06] px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-brand-100 backdrop-blur">
                <span className="h-1.5 w-1.5 rounded-full bg-accent-500" />
                Insights
              </span>
              <h1 className="mt-6 font-display text-4xl font-extrabold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
                Notes on AI, MVPs and{" "}
                <span className="bg-gradient-to-r from-brand-300 via-brand-400 to-violet-400 bg-clip-text text-transparent">
                  building things that last
                </span>
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-300">
                Written by the engineers doing the work, for founders and operators making
                decisions with incomplete information. No listicles, no vendor cheerleading —
                including the parts where we&apos;re the wrong answer.
              </p>
            </div>
          </div>
        </section>

        {/* Featured article */}
        <section className="bg-white py-16 sm:py-20">
          <div className="container-x">
            <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
              Featured
            </p>

            <Link
              href={`/insights/${featured.slug}`}
              className="group mt-5 grid overflow-hidden rounded-[1.75rem] border border-slate-100 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-soft lg:grid-cols-[1.05fr_1fr]"
            >
              <div
                className={`relative overflow-hidden bg-gradient-to-br ${
                  ACCENTS[CATEGORY_META[featured.category].accent].grad
                } p-9 text-white sm:p-11`}
              >
                <div className="bg-grid absolute inset-0 opacity-20" />
                <div className="relative flex h-full flex-col justify-between gap-10">
                  <span className="inline-flex w-fit items-center gap-2 rounded-full bg-white/20 px-3 py-1 text-[11px] font-bold uppercase tracking-wide backdrop-blur">
                    {CATEGORY_META[featured.category].label}
                  </span>
                  <div>
                    <p className="font-display text-3xl font-extrabold leading-[1.15] sm:text-[2.1rem]">
                      {featured.title}
                    </p>
                    <p className="mt-4 text-sm text-white/80">
                      {formatDate(featured.date)} · {featured.readingTime}
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col justify-center bg-white p-9 sm:p-11">
                <p className="text-[15px] leading-relaxed text-slate-600">{featured.excerpt}</p>
                <p className="mt-6 border-t border-slate-100 pt-5 text-sm font-semibold text-ink">
                  {featured.author.name}
                  <span className="ml-2 font-normal text-slate-400">{featured.author.role}</span>
                </p>
                <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-600 transition-all group-hover:gap-2.5">
                  Read the article
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                    <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </div>
            </Link>
          </div>
        </section>

        {/* Article grid */}
        <section className="bg-slate-50/70 py-16 sm:py-20">
          <div className="container-x">
            <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
              <h2 className="font-display text-2xl font-bold text-ink sm:text-3xl">
                Latest writing
              </h2>
              <p className="text-sm text-slate-500">
                {ARTICLES.length} {ARTICLES.length === 1 ? "article" : "articles"}
              </p>
            </div>

            <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {rest.map((a) => {
                const meta = CATEGORY_META[a.category];
                const acc = ACCENTS[meta.accent];
                return (
                  <Link
                    key={a.slug}
                    href={`/insights/${a.slug}`}
                    className="group flex flex-col rounded-2xl border border-slate-100 bg-white p-7 shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:shadow-soft"
                  >
                    <div className="flex items-center gap-2">
                      <span className={`rounded-lg px-2.5 py-1 text-[11px] font-bold uppercase tracking-wide ${acc.chip}`}>
                        {meta.label}
                      </span>
                      <span className="text-[11px] font-medium text-slate-400">{a.readingTime}</span>
                    </div>

                    <h3 className="mt-4 font-display text-lg font-bold leading-snug text-ink">
                      {a.title}
                    </h3>
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-500">{a.excerpt}</p>

                    <div className="mt-6 flex items-center justify-between border-t border-slate-100 pt-4">
                      <span className="text-xs text-slate-400">{formatDate(a.date)}</span>
                      <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-600 transition-all group-hover:gap-2.5">
                        Read
                        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                          <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </span>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        {/* Resources teaser */}
        <section className="bg-white py-20 sm:py-24">
          <div className="container-x">
            <SectionHead
              eyebrow="Founder resources"
              title="Free checklists and"
              highlight="templates you can use today"
              intro="The same instruments we use on paid engagements. Take them and run the process yourself — no call required."
            />

            <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {RESOURCES.map((r) => {
                const acc = ACCENTS[r.accent];
                return (
                  <article
                    key={r.slug}
                    className="group flex flex-col rounded-2xl border border-slate-100 bg-white p-6 shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:shadow-soft"
                  >
                    <span className={`flex h-11 w-11 items-center justify-center rounded-xl ${acc.soft} transition-transform duration-300 group-hover:scale-110`}>
                      <ServiceIcon name={r.icon} className="h-5 w-5" />
                    </span>
                    <p className="mt-5 text-[11px] font-bold uppercase tracking-wider text-slate-400">
                      {r.format}
                    </p>
                    <h3 className="mt-1 font-display text-[15px] font-bold leading-snug text-ink">
                      {r.title}
                    </h3>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-500">{r.desc}</p>
                  </article>
                );
              })}
            </div>

            <div className="mt-10 text-center">
              <Link href="/insights/resources" className="btn-primary">
                Browse all resources
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                  <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
            </div>
          </div>
        </section>

        <CTA />
      </main>
      <Footer />
    </>
  );
}
