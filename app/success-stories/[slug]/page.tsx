import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CTA } from "@/components/CTA";
import { CASE_STUDIES, CAT, getCaseStudy } from "@/lib/caseStudies";
import { ACCENTS } from "@/lib/serviceTheme";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return CASE_STUDIES.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) return { title: "Success Stories — Nexalinx" };
  return { title: `${study.title} — Nexalinx`, description: study.summary };
}

export default async function CaseStudyPage({ params }: Params) {
  const { slug } = await params;
  const s = getCaseStudy(slug);
  if (!s) notFound();

  const cat = CAT[s.category];
  const a = ACCENTS[cat.accent];
  const more = CASE_STUDIES.filter((c) => c.slug !== s.slug).slice(0, 3);

  return (
    <>
      <Header />
      <main>
        {/* ---------------------------------------------------------- Hero */}
        <section className="relative -mt-20 overflow-hidden bg-navy-gradient pt-36 pb-16 text-white sm:pt-40">
          <div className="bg-grid absolute inset-0 opacity-[0.06]" />
          <div className={`absolute -left-40 top-0 h-[32rem] w-[32rem] rounded-full ${a.orb} blur-3xl`} />
          <div className="absolute -right-40 top-32 h-96 w-96 rounded-full bg-violet-500/20 blur-3xl" />

          <div className="container-x relative">
            <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm text-slate-400">
              <Link href="/" className="transition hover:text-white">Home</Link>
              <span aria-hidden>/</span>
              <Link href="/success-stories" className="transition hover:text-white">Success stories</Link>
              <span aria-hidden>/</span>
              <span className="text-slate-200">{cat.label}</span>
            </nav>

            <div className="mt-10 grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
              <div>
                <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.06] px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-brand-100 backdrop-blur">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent-500" />
                  {cat.label} · case study
                </span>

                <h1 className="mt-6 font-display text-4xl font-extrabold leading-[1.08] tracking-tight sm:text-5xl">
                  {s.title}
                </h1>
                <p className="mt-3 text-sm font-semibold uppercase tracking-wide text-brand-200">
                  {s.client}
                </p>
                <p className="mt-5 max-w-xl text-lg leading-relaxed text-slate-300">{s.summary}</p>

                <div className="mt-8 flex items-center gap-6 border-t border-white/10 pt-6">
                  <div>
                    <p className="font-display text-4xl font-extrabold text-white">{s.hero.value}</p>
                    <p className="mt-1 text-xs text-slate-400">{s.hero.label}</p>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {s.tech.map((t) => (
                      <span key={t} className="rounded-md bg-white/10 px-2 py-0.5 text-[11px] font-medium text-slate-200">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Cover image */}
              <div className="relative aspect-[16/11] overflow-hidden rounded-3xl ring-1 ring-white/10 shadow-glow">
                <Image
                  src={s.image}
                  alt={s.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/40 to-transparent" />
              </div>
            </div>
          </div>
        </section>

        {/* Formula strip */}
        <div className="border-b border-slate-100 bg-white">
          <div className="container-x grid divide-slate-100 sm:grid-cols-3 sm:divide-x">
            {[
              { n: "01", t: "Client", q: "Who are they?" },
              { n: "02", t: "Challenge", q: "What was going wrong?" },
              { n: "03", t: "Solution", q: "What Nexalinx did" },
            ].map((step, i) => (
              <a
                key={step.t}
                href={`#${step.t.toLowerCase()}`}
                className="group flex items-center gap-4 px-2 py-6 transition sm:px-6"
              >
                <span className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl font-display text-sm font-bold ${i === 0 ? a.soft : "bg-slate-100 text-slate-500"}`}>
                  {step.n}
                </span>
                <span>
                  <span className="block font-display text-sm font-bold text-ink">{step.t}</span>
                  <span className="block text-xs text-slate-500">{step.q}</span>
                </span>
              </a>
            ))}
          </div>
        </div>

        {/* ------------------------------------------------------- CLIENT */}
        <section id="client" className="scroll-mt-24 bg-white py-20 sm:py-24">
          <div className="container-x grid gap-12 lg:grid-cols-[1fr_0.85fr]">
            <div>
              <span className={`inline-flex rounded-lg px-2.5 py-1 text-[11px] font-bold uppercase tracking-wide ${a.chip}`}>
                Client
              </span>
              <h2 className="section-title mt-4">Who are they?</h2>
              <p className="mt-5 text-lg leading-relaxed text-slate-600">{s.client_who}</p>
            </div>

            <dl className="grid grid-cols-1 gap-3 self-start rounded-2xl border border-slate-100 bg-slate-50/70 p-6 sm:grid-cols-3 lg:grid-cols-1">
              {s.client_facts.map((f) => (
                <div key={f.label} className="border-slate-200/70 lg:border-b lg:pb-3 lg:last:border-0 lg:last:pb-0">
                  <dt className="text-[11px] font-bold uppercase tracking-wider text-slate-400">{f.label}</dt>
                  <dd className="mt-1 font-display text-base font-bold text-ink">{f.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        {/* ---------------------------------------------------- CHALLENGE */}
        <section id="challenge" className="scroll-mt-24 bg-slate-50/70 py-20 sm:py-24">
          <div className="container-x grid gap-12 lg:grid-cols-[0.85fr_1fr]">
            <div>
              <span className="inline-flex rounded-lg bg-rose-50 px-2.5 py-1 text-[11px] font-bold uppercase tracking-wide text-rose-600">
                Challenge
              </span>
              <h2 className="section-title mt-4">What was going wrong?</h2>
              <p className="mt-5 text-lg leading-relaxed text-slate-600">{s.challenge_intro}</p>
            </div>

            <ul className="space-y-3 self-start">
              {s.challenge_points.map((p) => (
                <li key={p} className="flex items-start gap-3.5 rounded-2xl border border-slate-100 bg-white p-5 shadow-card">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-rose-50 text-rose-500">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6">
                      <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
                    </svg>
                  </span>
                  <p className="text-[15px] leading-relaxed text-slate-700">{p}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ----------------------------------------------------- SOLUTION */}
        <section id="solution" className="relative scroll-mt-24 overflow-hidden bg-navy-gradient py-20 text-white sm:py-24">
          <div className="bg-grid absolute inset-0 opacity-[0.06]" />
          <div className={`absolute -right-40 top-10 h-96 w-96 rounded-full ${a.orb} blur-3xl`} />

          <div className="container-x relative">
            <div className="max-w-2xl">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.06] px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-brand-100">
                Nexalinx solution
              </span>
              <h2 className="mt-4 font-display text-3xl font-bold leading-tight sm:text-4xl lg:text-[2.75rem]">
                What Nexalinx{" "}
                <span className="bg-gradient-to-r from-brand-300 to-violet-400 bg-clip-text text-transparent">
                  did about it
                </span>
              </h2>
              <p className="mt-4 text-lg text-slate-300">{s.solution_intro}</p>
            </div>

            <ol className="mt-14 grid gap-6 md:grid-cols-3">
              {s.solution_steps.map((step, i) => (
                <li key={step.title} className="rounded-2xl border border-white/10 bg-white/[0.04] p-6">
                  <span className="font-display text-sm font-bold text-brand-300">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-2 font-display text-lg font-bold">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-300">{step.desc}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* ------------------------------------------------------ RESULTS */}
        <section className="bg-white py-20 sm:py-24">
          <div className="container-x">
            <div className="mx-auto max-w-2xl text-center">
              <span className="eyebrow">The outcome</span>
              <h2 className="section-title mt-5">
                What the work <span className="text-gradient">produced</span>
              </h2>
            </div>

            <div className="mt-12 grid gap-5 sm:grid-cols-3">
              {s.results.map((r) => (
                <div
                  key={r.label}
                  className="rounded-2xl border border-slate-100 bg-slate-50/70 p-8 text-center shadow-card"
                >
                  <p className="font-display text-4xl font-extrabold text-ink">{r.value}</p>
                  <p className="mt-2 text-sm text-slate-500">{r.label}</p>
                </div>
              ))}
            </div>

            {s.quote && (
              <blockquote className="mx-auto mt-12 max-w-3xl rounded-3xl border border-slate-100 bg-white p-8 text-center shadow-card sm:p-10">
                <p className="font-display text-xl font-bold leading-snug text-ink sm:text-2xl">
                  &ldquo;{s.quote.text}&rdquo;
                </p>
                <cite className="mt-4 block text-sm not-italic text-slate-500">— {s.quote.author}</cite>
              </blockquote>
            )}
          </div>
        </section>

        {/* ------------------------------------------------------- Related */}
        <section className="bg-slate-50/70 py-20 sm:py-24">
          <div className="container-x">
            <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
              <h2 className="font-display text-2xl font-bold text-ink sm:text-3xl">More success stories</h2>
              <Link
                href="/success-stories"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-600 transition hover:gap-2.5"
              >
                View all
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                  <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
            </div>

            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {more.map((m) => {
                const mc = CAT[m.category];
                return (
                  <Link
                    key={m.slug}
                    href={`/success-stories/${m.slug}`}
                    className="group flex flex-col overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:shadow-soft"
                  >
                    <div className="relative h-40 overflow-hidden">
                      <Image src={m.image} alt={m.title} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover" />
                      <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-navy-950/25 to-transparent" />
                      <span className="absolute left-4 top-4 rounded-full bg-white/15 px-2.5 py-1 text-[11px] font-semibold text-white ring-1 ring-white/20 backdrop-blur">
                        {mc.label}
                      </span>
                      <h3 className="absolute inset-x-4 bottom-3 font-display text-base font-bold leading-snug text-white">
                        {m.title}
                      </h3>
                    </div>
                    <div className="flex flex-1 flex-col p-5">
                      <p className="flex-1 text-sm leading-relaxed text-slate-500">{m.summary}</p>
                      <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-600 transition-all group-hover:gap-2.5">
                        Read case study
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

        <CTA />
      </main>
      <Footer />
    </>
  );
}
