import type { Metadata } from "next";
import Link from "next/link";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CTA } from "@/components/CTA";
import { ServiceIcon } from "@/components/ServiceIcon";
import { BlockGrid, FaqList, PageHero, SectionHead } from "@/components/Editorial";
import {
  CADENCE,
  GUARANTEES,
  HOW_FAQS,
  HOW_HERO,
  PHASES,
  TEAM_ROLES,
  TOOLS,
} from "@/lib/howWeWork";
import { ACCENTS } from "@/lib/serviceTheme";

export const metadata: Metadata = {
  title: "How We Work — Nexalinx",
  description:
    "Our six-phase delivery process: discovery, blueprint, design, build, launch and iterate — with a weekly working demo, milestone-based delivery and full code ownership.",
};

export default function HowWeWorkPage() {
  return (
    <>
      <Header />
      <main>
        <PageHero hero={HOW_HERO} />

        {/* ------------------------------------------------- Phase timeline */}
        <section className="bg-white py-20 sm:py-28">
          <div className="container-x">
            <SectionHead
              eyebrow="The process"
              title="Six phases,"
              highlight="every single time"
              intro="You always know which phase you're in, what it produces and when it ends. Step on at any point — most clients start at Discovery or Blueprint."
            />

            <div className="mt-16 space-y-4">
              {PHASES.map((p, i) => {
                const a = ACCENTS[p.accent ?? "brand"];
                const last = i === PHASES.length - 1;
                return (
                  <div key={p.step} className="relative flex gap-4 sm:gap-8">
                    {/* Rail */}
                    <div className="relative flex shrink-0 flex-col items-center">
                      <span
                        className={`flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br ${a.grad} font-display text-sm font-bold text-white shadow-soft sm:h-14 sm:w-14`}
                      >
                        {p.icon ? <ServiceIcon name={p.icon} className="h-6 w-6" /> : p.step}
                      </span>
                      {!last && (
                        <span
                          aria-hidden
                          className="mt-2 w-px flex-1 bg-gradient-to-b from-slate-200 to-slate-100"
                        />
                      )}
                    </div>

                    {/* Card */}
                    <article
                      className={`mb-4 flex-1 rounded-2xl border border-slate-100 bg-white p-6 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-soft sm:p-7 max-sm:p-5 ${
                        last ? "mb-0" : ""
                      }`}
                    >
                      <div className="flex flex-wrap items-center gap-3">
                        <span className={`rounded-lg px-2.5 py-1 text-[11px] font-bold uppercase tracking-wide ${a.chip}`}>
                          Phase {p.step}
                        </span>
                        <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wide text-slate-400">
                          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <circle cx="12" cy="12" r="9" />
                            <path d="M12 7v5l3 2" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                          {p.duration}
                        </span>
                      </div>

                      <h3 className="mt-3 font-display text-xl font-bold text-ink">{p.title}</h3>
                      <p className="mt-2 max-w-2xl text-[15px] leading-relaxed text-slate-600">{p.summary}</p>

                      {p.deliverables.length > 0 && (
                        <div className="mt-5 border-t border-slate-100 pt-5">
                          <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                            You walk away with
                          </p>
                          <ul className="mt-3 grid gap-2 sm:grid-cols-3">
                            {p.deliverables.map((d) => (
                              <li key={d} className="flex items-start gap-2 text-sm text-slate-600">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="mt-0.5 shrink-0 text-accent-500">
                                  <path d="M20 6 9 17l-5-5" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                {d}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </article>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ----------------------------------------------------- Cadence */}
        <section className="relative overflow-hidden bg-navy-gradient py-20 text-white sm:py-28">
          <div className="bg-grid absolute inset-0 opacity-[0.06]" />
          <div className="absolute -right-40 top-10 h-96 w-96 rounded-full bg-brand-500/25 blur-3xl" />

          <div className="container-x relative">
            <div className="mx-auto max-w-2xl text-center">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.06] px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-brand-100">
                Communication
              </span>
              <h2 className="mt-5 font-display text-3xl font-bold leading-tight sm:text-4xl lg:text-[2.75rem]">
                The rhythm that removes{" "}
                <span className="bg-gradient-to-r from-brand-300 to-violet-400 bg-clip-text text-transparent">
                  the guesswork
                </span>
              </h2>
              <p className="mt-4 text-lg text-slate-300">
                Distance is only a problem when it comes with silence. Here&apos;s exactly
                how often you hear from us, and what you get each time.
              </p>
            </div>

            <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {CADENCE.map((c) => (
                <article
                  key={c.title}
                  className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 transition-colors hover:bg-white/[0.08]"
                >
                  {c.icon && (
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 text-white">
                      <ServiceIcon name={c.icon} className="h-5 w-5" />
                    </span>
                  )}
                  {c.tag && (
                    <p className="mt-5 text-[11px] font-bold uppercase tracking-wider text-brand-300">{c.tag}</p>
                  )}
                  <h3 className="mt-1 font-display text-lg font-bold">{c.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-300">{c.body}</p>
                </article>
              ))}
            </div>

            {TOOLS.length > 0 && (
              <div className="mt-14 flex flex-col items-center gap-5 border-t border-white/10 pt-10 lg:flex-row lg:justify-between">
                <p className="max-w-sm text-sm text-slate-300">
                  <span className="font-semibold text-white">Full access, day one.</span>{" "}You
                  get a seat in every tool we use on your project — nothing happens somewhere
                  you can&apos;t see.
                </p>
                <div className="flex flex-wrap justify-center gap-2.5">
                  {TOOLS.map((t) => (
                    <span
                      key={t}
                      className="rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-slate-200"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>

        {/* -------------------------------------------------------- Team */}
        <section className="bg-white py-20 sm:py-28">
          <div className="container-x">
            <SectionHead
              eyebrow="Who you get"
              title="A team, not"
              highlight="a pool of contractors"
              intro="Every engagement is staffed with named people you approve before they start — and you meet the tech lead on the first call."
            />
            <div className="mt-14">
              <BlockGrid blocks={TEAM_ROLES} />
            </div>
          </div>
        </section>

        {/* -------------------------------------------------- Guarantees */}
        <section id="guarantees" className="scroll-mt-24 bg-slate-50/70 py-20 sm:py-28">
          <div className="container-x">
            <SectionHead
              eyebrow="Risk reversal"
              title="Offshore delivery,"
              highlight="without the offshore risk"
              intro="Every engagement carries the same six commitments. They're in the agreement, not just on this page."
            />
            <div className="mt-14">
              <BlockGrid blocks={GUARANTEES} variant="card" />
            </div>

            <div className="mt-10 flex flex-col items-center justify-center gap-4 rounded-2xl bg-white p-7 text-center shadow-card sm:flex-row sm:text-left">
              <p className="text-sm font-medium text-slate-600">
                Want to see the process applied to your project?
              </p>
              <a href="/book" className="btn-primary shrink-0">
                Book a Discovery Call
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                  <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </div>
          </div>
        </section>

        {/* --------------------------------------------------------- FAQ */}
        <section className="bg-white py-20 sm:py-28">
          <div className="container-x grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <SectionHead
                eyebrow="Questions"
                title="What buyers ask"
                highlight="before signing"
                intro="Straight answers. If yours isn't here, ask it on the call."
                align="left"
              />
              <Link
                href="/why-nexalinx"
                className="mt-8 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-600 transition hover:gap-2.5"
              >
                See why teams choose us
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                  <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
            </div>
            <FaqList faqs={HOW_FAQS} />
          </div>
        </section>

        <CTA />
      </main>
      <Footer />
    </>
  );
}
