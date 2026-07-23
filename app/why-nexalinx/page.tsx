import type { Metadata } from "next";
import Link from "next/link";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CTA } from "@/components/CTA";
import { ServiceIcon } from "@/components/ServiceIcon";
import { BlockGrid, FaqList, PageHero, SectionHead } from "@/components/Editorial";
import {
  COMPARISON,
  DIFFERENTIATION,
  PILLARS,
  STRENGTHS,
  TRUST,
  WHY_FAQS,
  WHY_HERO,
} from "@/lib/whyNexalinx";
import { ACCENTS } from "@/lib/serviceTheme";

export const metadata: Metadata = {
  title: "Why Nexalinx — Nexalinx",
  description:
    "More accountable than freelancers, faster than enterprise agencies, more production-ready than no-code prototypes. The messaging pillars, honest comparison and trust commitments behind Nexalinx.",
};

export default function WhyNexalinxPage() {
  return (
    <>
      <Header />
      <main>
        <PageHero hero={WHY_HERO} />

        {/* ------------------------------------- Differentiation statement */}
        <section className="bg-white py-16 sm:py-20">
          <div className="container-x">
            <figure className="relative mx-auto max-w-4xl overflow-hidden rounded-[2rem] bg-cta-gradient px-7 py-12 text-center sm:px-14 sm:py-16">
              <div className="bg-grid absolute inset-0 opacity-[0.07]" />
              <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
              <div className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-violet-500/30 blur-3xl" />

              <div className="relative">
                <svg
                  width="34" height="34" viewBox="0 0 24 24" fill="none"
                  className="mx-auto text-accent-500/70"
                >
                  <path
                    d="M9.5 7C7 8.4 5.5 10.7 5.5 13.4c0 2.2 1.4 3.6 3.2 3.6 1.7 0 2.9-1.2 2.9-2.8 0-1.6-1.1-2.7-2.6-2.7-.3 0-.6 0-.8.1.3-1.3 1.3-2.5 2.6-3.3L9.5 7Zm8 0c-2.5 1.4-4 3.7-4 6.4 0 2.2 1.4 3.6 3.2 3.6 1.7 0 2.9-1.2 2.9-2.8 0-1.6-1.1-2.7-2.6-2.7-.3 0-.6 0-.8.1.3-1.3 1.3-2.5 2.6-3.3L17.5 7Z"
                    fill="currentColor"
                  />
                </svg>
                <blockquote className="mt-6 font-display text-2xl font-bold leading-snug text-white sm:text-3xl lg:text-[2.15rem]">
                  {DIFFERENTIATION.text}
                </blockquote>
                {DIFFERENTIATION.attribution && (
                  <figcaption className="mt-6 text-xs font-semibold uppercase tracking-wider text-brand-200">
                    {DIFFERENTIATION.attribution}
                  </figcaption>
                )}
              </div>
            </figure>
          </div>
        </section>

        {/* ----------------------------------------------------- Pillars */}
        <section id="pillars" className="scroll-mt-24 bg-slate-50/70 py-20 sm:py-28">
          <div className="container-x">
            <SectionHead
              eyebrow="What we stand for"
              title="Five things we"
              highlight="refuse to compromise on"
              intro="These aren't values on a wall — each one shows up as something concrete in how your project runs."
            />
            <div className="mt-14">
              <BlockGrid blocks={PILLARS} />
            </div>
          </div>
        </section>

        {/* -------------------------------------------------- Comparison */}
        <section className="bg-white py-20 sm:py-28">
          <div className="container-x">
            <SectionHead
              eyebrow="The honest comparison"
              title="How we stack up against"
              highlight="what else you're considering"
              intro="You're probably weighing a freelancer, a big agency and an AI builder. Here's where each genuinely wins — and where we do."
            />

            <div className="mt-14 overflow-hidden rounded-[1.5rem] border border-slate-100 shadow-card">
              <div className="overflow-x-auto">
                <table className="w-full min-w-[52rem] border-collapse text-left">
                  <thead>
                    <tr>
                      <th className="w-48 bg-slate-50 px-6 py-5 align-bottom text-[11px] font-bold uppercase tracking-wider text-slate-400">
                        Criterion
                      </th>
                      {COMPARISON.columns.map((c) => (
                        <th
                          key={c.id}
                          className={`px-6 py-5 align-bottom ${
                            c.highlight ? "bg-ink text-white" : "bg-slate-50"
                          }`}
                        >
                          <span
                            className={`block font-display text-base font-bold ${
                              c.highlight ? "text-white" : "text-ink"
                            }`}
                          >
                            {c.label}
                          </span>
                          {c.note && (
                            <span
                              className={`mt-1 block text-[11px] font-medium ${
                                c.highlight ? "text-brand-200" : "text-slate-400"
                              }`}
                            >
                              {c.note}
                            </span>
                          )}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {COMPARISON.rows.map((row, i) => (
                      <tr key={row.criterion} className={i % 2 ? "bg-slate-50/50" : "bg-white"}>
                        <th
                          scope="row"
                          className="px-6 py-5 align-top font-display text-sm font-bold text-ink"
                        >
                          {row.criterion}
                        </th>
                        {COMPARISON.columns.map((c) => {
                          const value = row.values[c.id];
                          const isBest = row.best === c.id;
                          return (
                            <td
                              key={c.id}
                              className={`px-6 py-5 align-top text-sm ${
                                c.highlight
                                  ? "bg-brand-50/60 font-semibold text-ink"
                                  : "text-slate-500"
                              }`}
                            >
                              <span className="flex items-start gap-2">
                                {isBest && (
                                  <svg
                                    width="16" height="16" viewBox="0 0 24 24" fill="none"
                                    className="mt-0.5 shrink-0 text-accent-600"
                                  >
                                    <path
                                      d="M20 6 9 17l-5-5"
                                      stroke="currentColor" strokeWidth="2.8"
                                      strokeLinecap="round" strokeLinejoin="round"
                                    />
                                  </svg>
                                )}
                                {value ?? "—"}
                              </span>
                            </td>
                          );
                        })}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <p className="mt-5 text-center text-sm text-slate-500">
              A freelancer really is cheaper, and a no-code tool really is faster to a
              prototype. We&apos;re the right answer when the thing has to survive real users.
            </p>
          </div>
        </section>

        {/* ---------------------------------------------------- Strengths */}
        <section className="relative overflow-hidden bg-navy-gradient py-20 text-white sm:py-28">
          <div className="bg-grid absolute inset-0 opacity-[0.06]" />
          <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-brand-500/25 blur-3xl" />

          <div className="container-x relative">
            <div className="mx-auto max-w-2xl text-center">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.06] px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-brand-100">
                What we bring
              </span>
              <h2 className="mt-5 font-display text-3xl font-bold leading-tight sm:text-4xl lg:text-[2.75rem]">
                The advantages you can{" "}
                <span className="bg-gradient-to-r from-brand-300 to-violet-400 bg-clip-text text-transparent">
                  actually verify
                </span>
              </h2>
              <p className="mt-4 text-lg text-slate-300">
                Not adjectives — things you can check on a call, in a repo or in a contract.
              </p>
            </div>

            <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {STRENGTHS.map((s) => (
                <article
                  key={s.title}
                  className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 transition-colors hover:bg-white/[0.08]"
                >
                  {s.icon && (
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 text-white">
                      <ServiceIcon name={s.icon} className="h-5 w-5" />
                    </span>
                  )}
                  <h3 className="mt-5 font-display text-lg font-bold">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-300">{s.body}</p>
                </article>
              ))}
            </div>

            <div className="mt-12 text-center">
              <Link href="/success-stories" className="btn-primary">
                See the proof
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                  <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
            </div>
          </div>
        </section>

        {/* -------------------------------------------------------- Trust */}
        <section className="bg-white py-20 sm:py-28">
          <div className="container-x">
            <SectionHead
              eyebrow="Objection handling"
              title="The six worries about offshore —"
              highlight="answered"
              intro="Quality, communication, security, timeline, ownership and exit. These are the right questions to ask, so here are the answers before you have to."
            />
            <div className="mt-14">
              <BlockGrid blocks={TRUST} variant="panel" />
            </div>
          </div>
        </section>

        {/* ---------------------------------------------------------- FAQ */}
        <section className="bg-slate-50/70 py-20 sm:py-28">
          <div className="container-x grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <SectionHead
                eyebrow="Questions"
                title="The uncomfortable ones,"
                highlight="answered honestly"
                intro="We'd rather lose a deal on a straight answer than win one on a vague promise."
                align="left"
              />
              <Link
                href="/how-we-work"
                className="mt-8 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-600 transition hover:gap-2.5"
              >
                See how we deliver
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                  <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
            </div>
            <FaqList faqs={WHY_FAQS} />
          </div>
        </section>

        <CTA />
      </main>
      <Footer />
    </>
  );
}
