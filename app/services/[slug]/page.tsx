import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CTA } from "@/components/CTA";
import { ServiceIcon } from "@/components/ServiceIcon";
import { ServiceNav } from "@/components/ServiceNav";
import { SERVICES, getService, getRelated } from "@/lib/services";
import { ACCENTS } from "@/lib/serviceTheme";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return { title: "Service — Nexalinx" };
  return {
    title: `${service.name} — Nexalinx`,
    description: service.summary,
  };
}

export default async function ServicePage({ params }: Params) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const a = ACCENTS[service.accent];
  const related = getRelated(service);

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
            {/* Breadcrumb */}
            <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm text-slate-400">
              <Link href="/" className="transition hover:text-white">
                Home
              </Link>
              <span aria-hidden>/</span>
              <Link href="/services" className="transition hover:text-white">
                Services
              </Link>
              <span aria-hidden>/</span>
              <span className="text-slate-200">{service.navLabel}</span>
            </nav>

            <div className="mt-10 grid items-start gap-12 lg:grid-cols-[1.15fr_0.85fr]">
              <div>
                <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.06] px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-brand-100 backdrop-blur">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent-500" />
                  {service.eyebrow}
                </span>

                <h1 className="mt-6 font-display text-4xl font-extrabold leading-[1.08] tracking-tight sm:text-5xl">
                  {service.headline[0]}{" "}
                  <span className="bg-gradient-to-r from-brand-300 via-brand-400 to-violet-400 bg-clip-text text-transparent">
                    {service.headline[1]}
                  </span>
                </h1>

                <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-300">
                  {service.intro}
                </p>

                <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                  <a href="/book" className="btn-primary text-base">
                    Book a Discovery Call
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                      <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </a>
                  <a
                    href="#packages"
                    className="btn border border-white/20 bg-white/5 text-base text-white hover:bg-white/10"
                  >
                    See engagement options
                  </a>
                </div>
              </div>

              {/* Image banner + deliverables preview card */}
              <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.05] shadow-glow backdrop-blur-sm">
                {/* Service image */}
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.name}
                    fill
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    priority
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B1E45] via-[#0B1E45]/25 to-transparent" />
                  {/* Icon badge sitting on the image */}
                  <div
                    className={`absolute bottom-4 left-5 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${a.grad} text-white shadow-glow`}
                  >
                    <ServiceIcon name={service.icon} className="h-6 w-6" />
                  </div>
                </div>

                {/* Body */}
                <div className="p-7">
                  <p className="font-display text-lg font-bold">{service.name}</p>
                  <p className="mt-2 text-sm leading-relaxed text-slate-300">{service.summary}</p>

                  <ul className="mt-5 space-y-2.5 border-t border-white/10 pt-5">
                    {service.deliverables.slice(0, 4).map((d) => (
                      <li key={d.title} className="flex items-start gap-2.5 text-sm text-slate-200">
                        <svg width="17" height="17" viewBox="0 0 24 24" fill="none" className="mt-0.5 shrink-0 text-accent-400">
                          <path d="M20 6 9 17l-5-5" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        {d.title}
                      </li>
                    ))}
                    <li className="pt-1 text-sm font-semibold text-brand-200">
                      + {service.deliverables.length - 4} more capabilities below
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Stats */}
            <dl className="mt-14 grid grid-cols-2 gap-6 border-t border-white/10 pt-8 sm:grid-cols-4">
              {service.stats.map((s) => (
                <div key={s.label}>
                  <dt className="font-display text-3xl font-bold text-white">{s.value}</dt>
                  <dd className="mt-1 text-xs text-slate-400">{s.label}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        {/* Sticky lane switcher — jump between services without going back to the nav */}
        <ServiceNav activeSlug={service.slug} />

        {/* ------------------------------------------------------ Outcomes */}
        <section className="border-b border-slate-100 bg-white py-20 sm:py-24">
          <div className="container-x grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <span className="eyebrow">The business case</span>
              <h2 className="section-title mt-5">
                What you actually <span className="text-gradient">walk away with</span>
              </h2>
              <p className="mt-4 text-lg text-slate-600">
                International buyers don&apos;t buy a service list — they buy an outcome.
                Here&apos;s what this engagement is measured against.
              </p>
              <a href="/book" className="btn-ghost mt-8">
                Talk through your case
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                  <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </div>

            <ul className="space-y-3">
              {service.outcomes.map((o, i) => (
                <li
                  key={o}
                  className="flex items-start gap-4 rounded-2xl border border-slate-100 bg-slate-50/70 p-5 transition hover:border-slate-200 hover:bg-white hover:shadow-card"
                >
                  <span
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-xs font-bold ${a.soft}`}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="text-[15px] leading-relaxed text-slate-700">{o}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* -------------------------------------------------- Deliverables */}
        <section id="capabilities" className="scroll-mt-40 bg-slate-50/70 py-20 sm:py-28">
          <div className="container-x">
            <div className="mx-auto max-w-2xl text-center">
              <span className="eyebrow">What we build</span>
              <h2 className="section-title mt-5">
                Capabilities inside{" "}
                <span className="text-gradient">{service.navLabel.toLowerCase()}</span>
              </h2>
              <p className="mt-4 text-lg text-slate-600">
                Pick one, or take the lane end to end. Every item below is something we
                have designed, built and shipped to production.
              </p>
            </div>

            <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {service.deliverables.map((d) => (
                <article
                  key={d.title}
                  className={`group rounded-2xl border border-slate-100 bg-white p-6 shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:shadow-soft ${a.ring}`}
                >
                  <div
                    className={`flex h-11 w-11 items-center justify-center rounded-xl ${a.soft} transition-transform duration-300 group-hover:scale-110`}
                  >
                    <ServiceIcon name={d.icon} className="h-5 w-5" />
                  </div>
                  <h3 className="mt-5 font-display text-[15px] font-bold leading-snug text-ink">
                    {d.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-500">{d.desc}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ------------------------------------------------------ Audience */}
        <section className="bg-white py-20 sm:py-28">
          <div className="container-x">
            <div className="mx-auto max-w-2xl text-center">
              <span className="eyebrow">Best customer</span>
              <h2 className="section-title mt-5">
                Built for teams that <span className="text-gradient">look like this</span>
              </h2>
              <p className="mt-4 text-lg text-slate-600">
                If you recognise yourself here, the first call will be a short one — we
                already know the questions to ask.
              </p>
            </div>

            <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
              {service.audience.map((au) => (
                <div
                  key={au.title}
                  className="relative overflow-hidden rounded-2xl border border-slate-100 bg-white p-6 shadow-card"
                >
                  <span
                    aria-hidden
                    className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${a.bar}`}
                  />
                  <h3 className="mt-2 font-display text-base font-bold text-ink">{au.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-500">{au.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ------------------------------------------------------- Process */}
        <section className="relative overflow-hidden bg-navy-gradient py-20 text-white sm:py-28">
          <div className="bg-grid absolute inset-0 opacity-[0.06]" />
          <div className={`absolute -right-40 top-10 h-96 w-96 rounded-full ${a.orb} blur-3xl`} />

          <div className="container-x relative">
            <div className="mx-auto max-w-2xl text-center">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.06] px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-brand-100">
                How we deliver
              </span>
              <h2 className="mt-5 font-display text-3xl font-bold leading-tight sm:text-4xl lg:text-[2.75rem]">
                A process you can{" "}
                <span className="bg-gradient-to-r from-brand-300 to-violet-400 bg-clip-text text-transparent">
                  see through
                </span>
              </h2>
              <p className="mt-4 text-lg text-slate-300">
                No black box, no surprise invoice. You know what happens each week and
                what you get at the end of it.
              </p>
            </div>

            <ol className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-5">
              {service.process.map((p, i) => (
                <li key={p.step} className="relative">
                  {/* connector */}
                  {i < service.process.length - 1 && (
                    <span
                      aria-hidden
                      className="absolute left-12 top-5 hidden h-px w-[calc(100%-2rem)] bg-gradient-to-r from-white/25 to-transparent lg:block"
                    />
                  )}
                  <div className="relative flex h-10 w-10 items-center justify-center rounded-xl border border-white/15 bg-white/10 font-display text-sm font-bold text-white backdrop-blur">
                    {p.step}
                  </div>
                  <h3 className="mt-5 font-display text-base font-bold">{p.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-300">{p.desc}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* ------------------------------------------------------ Packages */}
        <section
          id="packages"
          className="scroll-mt-40 bg-gradient-to-b from-white via-slate-50/60 to-white py-20 sm:py-28"
        >
          <div className="container-x">
            <div className="mx-auto max-w-2xl text-center">
              <span className="eyebrow">Engagement options</span>
              <h2 className="section-title mt-5">
                Pick the entry point that <span className="text-gradient">fits your stage</span>
              </h2>
              <p className="mt-4 text-lg text-slate-600">
                Start small and prove it, or go straight to the build. Fixed scope, clear
                deliverables, no open-ended hourly drift.
              </p>
            </div>

            <div className="mt-14 grid gap-6 lg:grid-cols-3">
              {service.packages.map((pkg) => (
                <article
                  key={pkg.name}
                  className={
                    pkg.featured
                      ? "relative flex flex-col overflow-hidden rounded-3xl bg-navy-gradient p-8 text-white shadow-glow ring-1 ring-white/10 lg:-my-2"
                      : "relative flex flex-col overflow-hidden rounded-3xl border border-slate-100 bg-white p-8 shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:shadow-soft"
                  }
                >
                  {pkg.featured ? (
                    <>
                      <div className="bg-grid absolute inset-0 opacity-[0.07]" />
                      <div className="absolute -right-16 -top-16 h-52 w-52 rounded-full bg-accent-500/25 blur-3xl" />
                      <span className="absolute right-6 top-6 rounded-full bg-accent-500 px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-ink">
                        Most chosen
                      </span>
                    </>
                  ) : (
                    <span aria-hidden className={`absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r ${a.bar}`} />
                  )}

                  <div className="relative">
                    <h3 className={`font-display text-xl font-bold ${pkg.featured ? "" : "text-ink"}`}>
                      {pkg.name}
                    </h3>
                    <div className="mt-3 flex flex-wrap items-center gap-2">
                      <span
                        className={`rounded-full px-2.5 py-1 text-[11px] font-bold uppercase tracking-wide ${
                          pkg.featured ? "bg-white/15 text-white" : a.chip
                        }`}
                      >
                        {pkg.price}
                      </span>
                      <span
                        className={`inline-flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wide ${
                          pkg.featured ? "text-slate-300" : "text-slate-400"
                        }`}
                      >
                        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <circle cx="12" cy="12" r="9" />
                          <path d="M12 7v5l3 2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        {pkg.timeline}
                      </span>
                    </div>

                    <p
                      className={`mt-4 text-sm leading-relaxed ${
                        pkg.featured ? "text-slate-300" : "text-slate-500"
                      }`}
                    >
                      {pkg.desc}
                    </p>
                  </div>

                  <ul
                    className={`relative mt-6 flex-1 space-y-3 border-t pt-6 ${
                      pkg.featured ? "border-white/10" : "border-slate-100"
                    }`}
                  >
                    {pkg.includes.map((inc) => (
                      <li
                        key={inc}
                        className={`flex items-start gap-2.5 text-sm ${
                          pkg.featured ? "text-slate-200" : "text-slate-600"
                        }`}
                      >
                        <svg
                          width="18"
                          height="18"
                          viewBox="0 0 24 24"
                          fill="none"
                          className={`mt-0.5 shrink-0 ${pkg.featured ? "text-accent-400" : "text-accent-500"}`}
                        >
                          <path d="M20 6 9 17l-5-5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        {inc}
                      </li>
                    ))}
                  </ul>

                  <a
                    href="/book"
                    className={`relative mt-7 inline-flex w-full items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition ${
                      pkg.featured
                        ? "bg-accent-500 text-ink hover:bg-accent-400"
                        : "bg-ink text-white hover:bg-ink-800"
                    }`}
                  >
                    Book a call about this
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                      <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ---------------------------------------------------------- Tech */}
        <section className="border-y border-slate-100 bg-white py-16">
          <div className="container-x flex flex-col items-start gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-sm">
              <span className="eyebrow">Our stack</span>
              <h2 className="mt-4 font-display text-2xl font-bold text-ink">
                Proven tools, chosen for your case
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-slate-500">
                We pick boring, well-supported technology you can hire for later — not
                whatever trended last month.
              </p>
            </div>
            <div className="flex flex-wrap gap-2.5">
              {service.tech.map((t) => (
                <span
                  key={t}
                  className="rounded-xl border border-slate-100 bg-slate-50 px-4 py-2.5 text-sm font-semibold text-slate-600 transition hover:border-brand-200 hover:bg-brand-50 hover:text-brand-700"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* ----------------------------------------------------------- FAQ */}
        <section className="bg-slate-50/70 py-20 sm:py-28">
          <div className="container-x grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <span className="eyebrow">Questions</span>
              <h2 className="section-title mt-5">
                The things buyers <span className="text-gradient">actually ask</span>
              </h2>
              <p className="mt-4 text-lg text-slate-600">
                Straight answers. If yours isn&apos;t here, ask it on the call — we&apos;d
                rather over-explain than over-promise.
              </p>
            </div>

            <div className="space-y-3">
              {service.faqs.map((f) => (
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
          </div>
        </section>

        {/* ------------------------------------------------------- Related */}
        <section className="bg-white py-20 sm:py-24">
          <div className="container-x">
            <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
              <div>
                <span className="eyebrow">Related lanes</span>
                <h2 className="mt-4 font-display text-2xl font-bold text-ink sm:text-3xl">
                  Often combined with this
                </h2>
              </div>
              <Link
                href="/services"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-600 transition hover:gap-2.5 hover:text-brand-700"
              >
                View all services
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                  <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
            </div>

            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {related.map((r) => {
                const ra = ACCENTS[r.accent];
                return (
                  <Link
                    key={r.slug}
                    href={`/services/${r.slug}`}
                    className="group rounded-2xl border border-slate-100 bg-white p-6 shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:shadow-soft"
                  >
                    <div
                      className={`flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${ra.grad} text-white`}
                    >
                      <ServiceIcon name={r.icon} />
                    </div>
                    <h3 className="mt-5 font-display text-base font-bold text-ink">{r.name}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-500">{r.summary}</p>
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

        <CTA />
      </main>
      <Footer />
    </>
  );
}
