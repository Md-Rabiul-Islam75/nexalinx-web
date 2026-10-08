import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CTA } from "@/components/CTA";
import { ServiceIcon } from "@/components/ServiceIcon";
import { SolutionNav } from "@/components/SolutionNav";
import { FaqList, SectionHead } from "@/components/Editorial";
import { SOLUTIONS, getSolution } from "@/lib/solutions";
import { getService } from "@/lib/services";
import { ACCENTS } from "@/lib/serviceTheme";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return SOLUTIONS.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const solution = getSolution(slug);
  if (!solution) return { title: "Solutions — Nexalinx" };
  return {
    title: `${solution.name} — Nexalinx`,
    description: solution.summary,
  };
}

export default async function SolutionPage({ params }: Params) {
  const { slug } = await params;
  const s = getSolution(slug);
  if (!s) notFound();

  const a = ACCENTS[s.accent];
  const lanes = s.services.map(getService).filter((x) => x !== undefined);

  return (
    <>
      <Header />
      <main>
        {/* ---------------------------------------------------------- Hero */}
        <section className="relative -mt-20 overflow-hidden bg-navy-gradient pt-36 pb-20 text-white sm:pt-40">
          <div className="bg-grid absolute inset-0 opacity-[0.06]" />
          <div className={`absolute -left-40 top-0 h-[32rem] w-[32rem] rounded-full ${a.orb} blur-3xl`} />
          <div className="absolute -right-40 top-32 h-96 w-96 rounded-full bg-violet-500/20 blur-3xl" />

          <div className="container-x relative">
            <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm text-slate-400">
              <Link href="/" className="transition hover:text-white">Home</Link>
              <span aria-hidden>/</span>
              <Link href="/solutions" className="transition hover:text-white">Solutions</Link>
              <span aria-hidden>/</span>
              <span className="text-slate-200">{s.navLabel}</span>
            </nav>

            <div className="mt-10 grid items-start gap-12 lg:grid-cols-[1.15fr_0.85fr]">
              <div>
                <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.06] px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-brand-100 backdrop-blur">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent-500" />
                  {s.eyebrow}
                </span>

                <h1 className="mt-6 font-display text-4xl font-extrabold leading-[1.08] tracking-tight sm:text-5xl">
                  {s.headline[0]}{" "}
                  <span className="bg-gradient-to-r from-brand-300 via-brand-400 to-violet-400 bg-clip-text text-transparent">
                    {s.headline[1]}
                  </span>
                </h1>

                <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-300">{s.intro}</p>

                <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                  <a href="/book" className="btn-primary text-base">
                    Book a Discovery Call
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                      <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </a>
                  <a href="#offer" className="btn border border-white/20 bg-white/5 text-base text-white hover:bg-white/10">
                    See the way in
                  </a>
                </div>
              </div>

              {/* Symptom checklist */}
              <div className="relative rounded-3xl border border-white/10 bg-white/[0.05] p-7 backdrop-blur-sm">
                <div className={`flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${a.grad} text-white shadow-glow`}>
                  <ServiceIcon name={s.icon} className="h-7 w-7" />
                </div>
                <p className="mt-5 font-display text-lg font-bold">Sounds familiar?</p>
                <ul className="mt-4 space-y-2.5">
                  {s.symptoms.map((sym) => (
                    <li key={sym} className="flex items-start gap-2.5 text-sm leading-relaxed text-slate-200">
                      <span className="mt-[0.45rem] h-1.5 w-1.5 shrink-0 rounded-full bg-accent-500" />
                      {sym}
                    </li>
                  ))}
                </ul>
                <p className="mt-5 border-t border-white/10 pt-4 text-sm font-semibold text-brand-200">
                  If two or more apply, the discovery call is worth 45 minutes.
                </p>
              </div>
            </div>

            <dl className="mt-14 grid grid-cols-2 gap-6 border-t border-white/10 pt-8 sm:grid-cols-4">
              {s.stats.map((st) => (
                <div key={st.label}>
                  <dt className="font-display text-2xl font-bold text-white sm:text-3xl">{st.value}</dt>
                  <dd className="mt-1 text-xs text-slate-400">{st.label}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        <SolutionNav activeSlug={s.slug} />

        {/* ------------------------------------------- Cost of doing nothing */}
        <section className="bg-white py-20 sm:py-24">
          <div className="container-x">
            <SectionHead
              eyebrow="Why it matters now"
              title="What waiting"
              highlight="actually costs"
              intro="Every one of these gets more expensive the longer it runs. That's the whole argument for acting this quarter rather than next."
            />
            <div className="mt-14 grid gap-5 lg:grid-cols-3">
              {s.cost.map((c) => (
                <article
                  key={c.title}
                  className="group rounded-2xl border border-slate-100 bg-white p-7 shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:shadow-soft"
                >
                  <span className={`flex h-12 w-12 items-center justify-center rounded-xl ${a.soft} transition-transform duration-300 group-hover:scale-110`}>
                    <ServiceIcon name={c.icon} className="h-5 w-5" />
                  </span>
                  <h3 className="mt-5 font-display text-base font-bold text-ink">{c.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-500">{c.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* -------------------------------------------------------- Approach */}
        <section className="relative overflow-hidden bg-navy-gradient py-20 text-white sm:py-28">
          <div className="bg-grid absolute inset-0 opacity-[0.06]" />
          <div className={`absolute -right-40 top-10 h-96 w-96 rounded-full ${a.orb} blur-3xl`} />

          <div className="container-x relative">
            <div className="mx-auto max-w-2xl text-center">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.06] px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-brand-100">
                Our approach
              </span>
              <h2 className="mt-5 font-display text-3xl font-bold leading-tight sm:text-4xl lg:text-[2.75rem]">
                How we{" "}
                <span className="bg-gradient-to-r from-brand-300 to-violet-400 bg-clip-text text-transparent">
                  solve this
                </span>
              </h2>
              <p className="mt-4 text-lg text-slate-300">
                The same path every time, so you always know which step you&apos;re on and
                what it produces.
              </p>
            </div>

            <ol className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-5">
              {s.approach.map((p, i) => (
                <li key={p.step} className="relative">
                  {i < s.approach.length - 1 && (
                    <span
                      aria-hidden
                      className="absolute left-12 top-5 hidden h-px w-[calc(100%-2rem)] bg-gradient-to-r from-white/25 to-transparent lg:block"
                    />
                  )}
                  <div className="relative flex h-10 w-10 items-center justify-center rounded-xl border border-white/15 bg-white/10 font-display text-sm font-bold backdrop-blur">
                    {p.step}
                  </div>
                  <h3 className="mt-5 font-display text-base font-bold">{p.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-300">{p.desc}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* ------------------------------------------ Deliverables & outcomes */}
        <section className="bg-slate-50/70 py-20 sm:py-28">
          <div className="container-x grid gap-6 lg:grid-cols-2">
            <div className="rounded-[1.5rem] border border-slate-100 bg-white p-8 shadow-card sm:p-10">
              <span className={`inline-flex rounded-lg px-2.5 py-1 text-[11px] font-bold uppercase tracking-wide ${a.chip}`}>
                What you get
              </span>
              <h2 className="mt-4 font-display text-2xl font-bold text-ink">
                Concrete deliverables
              </h2>
              <ul className="mt-6 space-y-3">
                {s.deliverables.map((d) => (
                  <li key={d} className="flex items-start gap-3 text-[15px] text-slate-600">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="mt-0.5 shrink-0 text-accent-500">
                      <path d="M20 6 9 17l-5-5" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    {d}
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative overflow-hidden rounded-[1.5rem] bg-navy-gradient p-8 text-white shadow-soft sm:p-10">
              <div className="bg-grid absolute inset-0 opacity-[0.07]" />
              <div className="absolute -right-16 -top-16 h-52 w-52 rounded-full bg-accent-500/20 blur-3xl" />
              <div className="relative">
                <span className="inline-flex rounded-lg bg-white/15 px-2.5 py-1 text-[11px] font-bold uppercase tracking-wide">
                  The result
                </span>
                <h2 className="mt-4 font-display text-2xl font-bold">Business outcomes</h2>
                <ul className="mt-6 space-y-4">
                  {s.outcomes.map((o, i) => (
                    <li key={o} className="flex items-start gap-3.5">
                      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-white/10 font-display text-xs font-bold text-brand-200">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <p className="text-[15px] leading-relaxed text-slate-200">{o}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ----------------------------------------------------------- Offer */}
        <section id="offer" className="scroll-mt-40 bg-white py-20 sm:py-28">
          <div className="container-x">
            <SectionHead
              eyebrow="The way in"
              title="Start here,"
              highlight="not with a contract"
              intro="A small, fixed first step that gives you something useful whether or not you continue with us."
            />

            <article className="mt-14 overflow-hidden rounded-[1.75rem] border border-slate-100 shadow-soft">
              <div className="grid lg:grid-cols-[1fr_1.1fr]">
                <div className="relative overflow-hidden bg-navy-gradient p-8 text-white sm:p-10">
                  <div className="bg-grid absolute inset-0 opacity-[0.07]" />
                  <div className={`absolute -right-16 -top-16 h-56 w-56 rounded-full ${a.orb} blur-3xl`} />
                  <div className="relative">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="rounded-full bg-white/15 px-2.5 py-1 text-[11px] font-bold uppercase tracking-wide">
                        {s.offer.price}
                      </span>
                      <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wide text-slate-300">
                        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <circle cx="12" cy="12" r="9" />
                          <path d="M12 7v5l3 2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        {s.offer.timeline}
                      </span>
                    </div>
                    <h3 className="mt-5 font-display text-2xl font-bold sm:text-3xl">{s.offer.name}</h3>
                    <p className="mt-4 text-sm leading-relaxed text-slate-300">{s.offer.desc}</p>
                    <a href="/book" className="btn-primary mt-8">
                      Book a Discovery Call
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                        <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </a>
                  </div>
                </div>

                <div className="grid gap-px bg-slate-100 sm:grid-cols-2">
                  {s.offer.includes.map((inc) => (
                    <div key={inc} className="flex items-start gap-3 bg-white p-6 sm:p-7">
                      <span className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg ${a.soft}`}>
                        <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6">
                          <path d="M20 6 9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </span>
                      <p className="pt-1.5 text-sm font-semibold text-ink">{inc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </article>
          </div>
        </section>

        {/* -------------------------------------------------- Service lanes */}
        {lanes.length > 0 && (
          <section className="bg-slate-50/70 py-20 sm:py-24">
            <div className="container-x">
              <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
                <div>
                  <span className="eyebrow">Delivered by</span>
                  <h2 className="mt-4 font-display text-2xl font-bold text-ink sm:text-3xl">
                    The service lanes behind this
                  </h2>
                </div>
                <Link
                  href="/services"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-600 transition hover:gap-2.5"
                >
                  View all services
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                    <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
              </div>

              <div className="mt-10 grid gap-6 md:grid-cols-3">
                {lanes.map((lane) => {
                  const la = ACCENTS[lane.accent];
                  return (
                    <Link
                      key={lane.slug}
                      href={`/services/${lane.slug}`}
                      className="group rounded-2xl border border-slate-100 bg-white p-6 shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:shadow-soft"
                    >
                      <div className={`flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${la.grad} text-white`}>
                        <ServiceIcon name={lane.icon} />
                      </div>
                      <h3 className="mt-5 font-display text-base font-bold text-ink">{lane.name}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-slate-500">{lane.summary}</p>
                      <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-600 transition-all group-hover:gap-2.5">
                        Explore
                        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                          <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </span>
                    </Link>
                  );
                })}
              </div>
            </div>
          </section>
        )}

        {/* ------------------------------------------------------------ FAQ */}
        <section className="bg-white py-20 sm:py-28">
          <div className="container-x grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <SectionHead
                eyebrow="Questions"
                title="What people ask"
                highlight="in this situation"
                intro="Straight answers. If yours isn't here, bring it to the call."
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
            <FaqList faqs={s.faqs} />
          </div>
        </section>

        <CTA />
      </main>
      <Footer />
    </>
  );
}
