import type { Metadata } from "next";
import Link from "next/link";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CTA } from "@/components/CTA";
import { ServiceIcon } from "@/components/ServiceIcon";
import { SOLUTIONS } from "@/lib/solutions";
import { ACCENTS } from "@/lib/serviceTheme";

export const metadata: Metadata = {
  title: "Solutions — Nexalinx",
  description:
    "Four situations we solve: starting from an idea, recovering a bad build, scaling what you've built, and taking a prototype to production.",
};

const STATS = [
  { value: "4", label: "situations we solve" },
  { value: "Fixed", label: "first step, every time" },
  { value: "USA & EU", label: "markets served" },
  { value: "Senior-led", label: "delivery teams" },
];

export default function SolutionsIndexPage() {
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
                Solutions
              </span>
              <h1 className="mt-6 font-display text-4xl font-extrabold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
                Start with the problem,{" "}
                <span className="bg-gradient-to-r from-brand-300 via-brand-400 to-violet-400 bg-clip-text text-transparent">
                  not the technology
                </span>
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-300">
                Most people arrive describing a situation rather than a stack. Find the
                one below that sounds like yours — each has a fixed, low-risk first step
                that leaves you better off whether or not we work together.
              </p>
            </div>

            <dl className="mt-12 grid max-w-3xl grid-cols-2 gap-6 border-t border-white/10 pt-8 sm:grid-cols-4">
              {STATS.map((s) => (
                <div key={s.label}>
                  <dt className="whitespace-nowrap font-display text-2xl font-bold text-white lg:text-3xl">{s.value}</dt>
                  <dd className="mt-1 text-xs text-slate-400">{s.label}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        {/* Solution cards */}
        <section className="bg-slate-50/70 py-16 sm:py-24">
          <div className="container-x grid gap-6 lg:grid-cols-2">
            {SOLUTIONS.map((s) => {
              const a = ACCENTS[s.accent];
              return (
                <article
                  key={s.slug}
                  className="group relative flex flex-col overflow-hidden rounded-3xl border border-slate-100 bg-white p-7 shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:shadow-soft sm:p-9"
                >
                  <span aria-hidden className={`absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r ${a.bar}`} />

                  <div className="flex items-center gap-4">
                    <div className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br ${a.grad} text-white transition-transform duration-300 group-hover:scale-110`}>
                      <ServiceIcon name={s.icon} className="h-7 w-7" />
                    </div>
                    <div>
                      <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                        {s.eyebrow}
                      </p>
                      <h2 className="mt-1 font-display text-xl font-bold text-ink">{s.name}</h2>
                    </div>
                  </div>

                  <p className="mt-5 text-[15px] leading-relaxed text-slate-600">{s.summary}</p>

                  <div className="mt-6 border-t border-slate-100 pt-5">
                    <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                      Sounds familiar?
                    </p>
                    <ul className="mt-3 space-y-2">
                      {s.symptoms.slice(0, 3).map((sym) => (
                        <li key={sym} className="flex items-start gap-2.5 text-sm text-slate-600">
                          <span className={`mt-[0.45rem] h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-br ${a.grad}`} />
                          {sym}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-6 flex flex-1 flex-col justify-end">
                    <div className="flex flex-wrap items-center gap-3 rounded-2xl bg-slate-50 p-4">
                      <span className={`rounded-lg px-2.5 py-1 text-[11px] font-bold uppercase tracking-wide ${a.chip}`}>
                        Start with
                      </span>
                      <p className="text-sm font-semibold text-ink">
                        {s.offer.name}
                        <span className="ml-2 font-normal text-slate-500">· {s.offer.timeline}</span>
                      </p>
                    </div>

                    <Link
                      href={`/solutions/${s.slug}`}
                      className="mt-5 inline-flex items-center justify-center gap-2 rounded-full bg-ink px-5 py-3 text-sm font-semibold text-white transition hover:bg-ink-800"
                    >
                      Explore this solution
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                        <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>

          <div className="container-x mt-10">
            <div className="flex flex-col items-center justify-center gap-4 rounded-2xl bg-white p-7 text-center shadow-card sm:flex-row sm:text-left">
              <p className="text-sm font-medium text-slate-600">
                None of these quite fit? Describe the situation and we&apos;ll tell you
                honestly whether we&apos;re the right team.
              </p>
              <a href="/book" className="btn-primary shrink-0">
                Book a Discovery Call
              </a>
            </div>
          </div>
        </section>

        <CTA />
      </main>
      <Footer />
    </>
  );
}
