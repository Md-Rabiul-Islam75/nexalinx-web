import type { Metadata } from "next";
import Link from "next/link";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CTA } from "@/components/CTA";
import { ServiceIcon } from "@/components/ServiceIcon";
import { SERVICES } from "@/lib/services";
import { ACCENTS } from "@/lib/serviceTheme";

export const metadata: Metadata = {
  title: "Services — Nexalinx",
  description:
    "Six senior-led service lanes: AI development & automation, conversion websites, web apps & SaaS MVPs, mobile apps, critical product engineering and dedicated remote teams.",
};

const STATS = [
  { value: "6", label: "service lanes" },
  { value: "40+", label: "products shipped" },
  { value: "USA & EU", label: "markets served" },
  { value: "Senior-led", label: "every engagement" },
];

export default function ServicesIndexPage() {
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
                Service portfolio
              </span>
              <h1 className="mt-6 font-display text-4xl font-extrabold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
                Six lanes.{" "}
                <span className="bg-gradient-to-r from-brand-300 via-brand-400 to-violet-400 bg-clip-text text-transparent">
                  One accountable partner.
                </span>
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-300">
                International buyers don&apos;t buy a service list — they buy a business
                outcome. Each lane below is packaged around one: less manual work, more
                qualified leads, a shippable product, or a team you didn&apos;t have to hire.
              </p>
            </div>

            <dl className="mt-12 grid max-w-3xl grid-cols-2 gap-6 border-t border-white/10 pt-8 sm:grid-cols-4">
              {STATS.map((s) => (
                <div key={s.label}>
                  <dt className="font-display text-3xl font-bold text-white">{s.value}</dt>
                  <dd className="mt-1 text-xs text-slate-400">{s.label}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        {/* Lane list */}
        <section className="bg-slate-50/70 py-16 sm:py-24">
          <div className="container-x space-y-6">
            {SERVICES.map((s, i) => {
              const a = ACCENTS[s.accent];
              return (
                <article
                  key={s.slug}
                  className="group relative overflow-hidden rounded-3xl border border-slate-100 bg-white p-7 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-soft sm:p-9"
                >
                  <span aria-hidden className={`absolute inset-y-0 left-0 w-1.5 bg-gradient-to-b ${a.bar}`} />

                  <div className="grid gap-8 lg:grid-cols-[1fr_1.15fr]">
                    {/* Left: identity */}
                    <div>
                      <div className="flex items-center gap-4">
                        <div
                          className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br ${a.grad} text-white`}
                        >
                          <ServiceIcon name={s.icon} className="h-7 w-7" />
                        </div>
                        <div>
                          <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                            Lane {String(i + 1).padStart(2, "0")} · {s.eyebrow}
                          </p>
                          <h2 className="mt-1 font-display text-xl font-bold text-ink">{s.name}</h2>
                        </div>
                      </div>

                      <p className="mt-5 text-[15px] leading-relaxed text-slate-600">{s.summary}</p>

                      <Link
                        href={`/services/${s.slug}`}
                        className="mt-6 inline-flex items-center gap-2 rounded-full bg-ink px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-ink-800"
                      >
                        Explore this service
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                          <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </Link>
                    </div>

                    {/* Right: what we sell + who for */}
                    <div className="grid gap-6 sm:grid-cols-2">
                      <div>
                        <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                          What we can sell
                        </p>
                        <ul className="mt-3 space-y-2">
                          {s.deliverables.slice(0, 5).map((d) => (
                            <li key={d.title} className="flex items-start gap-2 text-sm text-slate-600">
                              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="mt-0.5 shrink-0 text-accent-500">
                                <path d="M20 6 9 17l-5-5" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
                              </svg>
                              {d.title}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                          Best customer
                        </p>
                        <div className="mt-3 flex flex-wrap gap-2">
                          {s.audience.map((au) => (
                            <span
                              key={au.title}
                              className={`rounded-lg px-2.5 py-1.5 text-xs font-semibold ${a.chip}`}
                            >
                              {au.title}
                            </span>
                          ))}
                        </div>

                        <p className="mt-5 text-[11px] font-bold uppercase tracking-wider text-slate-400">
                          Starts at
                        </p>
                        <p className="mt-2 text-sm font-semibold text-ink">
                          {s.packages[0].name}
                          <span className="ml-2 font-normal text-slate-500">
                            · {s.packages[0].timeline}
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        <CTA />
      </main>
      <Footer />
    </>
  );
}
