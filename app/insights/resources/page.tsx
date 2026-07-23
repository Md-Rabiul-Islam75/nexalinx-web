import type { Metadata } from "next";
import Link from "next/link";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CTA } from "@/components/CTA";
import { ServiceIcon } from "@/components/ServiceIcon";
import { RESOURCES } from "@/lib/insights";
import { ACCENTS } from "@/lib/serviceTheme";

export const metadata: Metadata = {
  title: "Founder Resources — Nexalinx",
  description:
    "Free checklists, templates and guides for founders and operators: AI opportunity audit, MVP blueprint template, app rescue checklist and vendor questions.",
};

export default function ResourcesPage() {
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
            <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm text-slate-400">
              <Link href="/" className="transition hover:text-white">Home</Link>
              <span aria-hidden>/</span>
              <Link href="/insights" className="transition hover:text-white">Insights</Link>
              <span aria-hidden>/</span>
              <span className="text-slate-200">Founder resources</span>
            </nav>

            <div className="mt-10 max-w-3xl">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.06] px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-brand-100 backdrop-blur">
                <span className="h-1.5 w-1.5 rounded-full bg-accent-500" />
                Founder resources
              </span>
              <h1 className="mt-6 font-display text-4xl font-extrabold leading-[1.08] tracking-tight sm:text-5xl">
                Our working instruments,{" "}
                <span className="bg-gradient-to-r from-brand-300 via-brand-400 to-violet-400 bg-clip-text text-transparent">
                  free to take
                </span>
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-300">
                These are the checklists and templates we use on paid engagements, not
                marketing summaries of them. Run the process yourself — and if you&apos;d
                rather someone ran it with you, that&apos;s what the discovery call is for.
              </p>
            </div>
          </div>
        </section>

        {/* Resource list */}
        <section className="bg-slate-50/70 py-16 sm:py-24">
          <div className="container-x grid gap-6 lg:grid-cols-2">
            {RESOURCES.map((r) => {
              const acc = ACCENTS[r.accent];
              return (
                <article
                  key={r.slug}
                  className="group relative flex flex-col overflow-hidden rounded-3xl border border-slate-100 bg-white p-7 shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:shadow-soft sm:p-9"
                >
                  <span aria-hidden className={`absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r ${acc.bar}`} />

                  <div className="flex items-start gap-4">
                    <div className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br ${acc.grad} text-white transition-transform duration-300 group-hover:scale-110`}>
                      <ServiceIcon name={r.icon} className="h-7 w-7" />
                    </div>
                    <div>
                      <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                        {r.format}
                      </p>
                      <h2 className="mt-1 font-display text-xl font-bold leading-snug text-ink">
                        {r.title}
                      </h2>
                    </div>
                  </div>

                  <p className="mt-5 text-[15px] leading-relaxed text-slate-600">{r.desc}</p>

                  <div className="mt-6 border-t border-slate-100 pt-5">
                    <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                      What&apos;s inside
                    </p>
                    <ul className="mt-3 grid gap-2 sm:grid-cols-2">
                      {r.contents.map((c) => (
                        <li key={c} className="flex items-start gap-2 text-sm text-slate-600">
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="mt-0.5 shrink-0 text-accent-500">
                            <path d="M20 6 9 17l-5-5" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                          {c}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-7 flex flex-1 flex-col justify-end">
                    <div className={`rounded-xl px-4 py-3 text-xs font-semibold ${acc.chip}`}>
                      For: {r.audience}
                    </div>
                    <a
                      href={`/contact?resource=${r.slug}`}
                      className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-full bg-ink px-5 py-3 text-sm font-semibold text-white transition hover:bg-ink-800"
                    >
                      {r.cta}
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                        <path d="M12 3v12M7 11l5 5 5-5M4 20h16" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </a>
                  </div>
                </article>
              );
            })}
          </div>

          <div className="container-x mt-10">
            <div className="flex flex-col items-center justify-center gap-4 rounded-2xl bg-white p-7 text-center shadow-card sm:flex-row sm:text-left">
              <p className="text-sm font-medium text-slate-600">
                Prefer to have someone walk it through with you? The audit call is free and
                takes 45 minutes.
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
