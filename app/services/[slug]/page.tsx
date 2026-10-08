import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CTA } from "@/components/CTA";
import { ServiceIcon } from "@/components/ServiceIcon";
import { SERVICES, getService, type IconKey } from "@/lib/services";
import { getCaseStudy } from "@/lib/caseStudies";
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

const Arrow = ({ size = 16 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden>
    <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const Check = ({ className = "" }: { className?: string }) => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className={`shrink-0 ${className}`} aria-hidden>
    <path d="M20 6 9 17l-5-5" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

/** Small pill label above each section heading */
function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex w-fit rounded-full bg-brand-50 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-brand-600">
      {children}
    </span>
  );
}

export default async function ServicePage({ params }: Params) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const a = ACCENTS[service.accent];
  const story = getCaseStudy(service.caseStudy);

  return (
    <>
      <Header light />
      <main>
        {/* ---------------------------------------------------------- Hero */}
        <section className="relative -mt-20 overflow-hidden bg-gradient-to-b from-brand-50 via-white to-white pb-16 pt-32 sm:pt-36 lg:pb-24">
          <div className="bg-grid absolute inset-0 [mask-image:linear-gradient(to_bottom,black,transparent_75%)]" />
          <div className={`absolute -right-40 -top-24 h-[30rem] w-[30rem] rounded-full ${a.orb} blur-3xl`} />

          <div className="container-x relative grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
            <div>
              <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-2 text-sm text-slate-500">
                <Link href="/" className="transition hover:text-brand-600">Home</Link>
                <span aria-hidden>/</span>
                <Link href="/services" className="transition hover:text-brand-600">Services</Link>
                <span aria-hidden>/</span>
                <span className="font-medium text-ink">{service.navLabel}</span>
              </nav>

              <span
                className={`mt-8 inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider ${a.chip}`}
              >
                <ServiceIcon name={service.icon} className="h-4 w-4" />
                {service.navLabel}
              </span>

              <h1 className="mt-5 font-display text-4xl font-extrabold leading-[1.1] tracking-tight text-ink sm:text-5xl">
                {service.headline[0]} <span className="text-gradient">{service.headline[1]}</span>
              </h1>

              <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-600">{service.intro}</p>

              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <a href="/book" className="btn-primary text-base">
                  Book a Discovery Call
                  <Arrow size={18} />
                </a>
                <a href="#how-it-works" className="btn-ghost text-base">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="text-brand-500" aria-hidden>
                    <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm-1.5 6.2 5.4 3.5a.4.4 0 0 1 0 .6l-5.4 3.5a.4.4 0 0 1-.6-.3V8.5a.4.4 0 0 1 .6-.3Z" />
                  </svg>
                  See how it works
                </a>
              </div>
            </div>

            {/* Image with two floating proof cards */}
            <div className="relative mx-auto w-full max-w-xl lg:max-w-none">
              <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-white bg-slate-100 shadow-soft">
                <Image
                  src={service.image}
                  alt={service.name}
                  fill
                  sizes="(max-width: 1024px) 100vw, 45vw"
                  priority
                  className="object-cover"
                />
              </div>

              <div className="absolute -left-4 top-6 hidden w-60 rounded-2xl border border-slate-100 bg-white/95 p-4 shadow-soft backdrop-blur sm:block lg:-left-10">
                <p className="text-xs font-bold uppercase tracking-wider text-slate-400">What we build</p>
                <ul className="mt-3 space-y-2">
                  {service.deliverables.slice(0, 3).map((d) => (
                    <li key={d.title} className="flex items-start gap-2 text-[13px] font-medium leading-snug text-ink">
                      <Check className="mt-0.5 text-emerald-500" />
                      {d.title}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="absolute -bottom-6 right-4 flex animate-float items-center gap-3 rounded-2xl border border-slate-100 bg-white px-5 py-4 shadow-soft xl:-right-6">
                <span className={`flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br ${a.grad} text-white`}>
                  <ServiceIcon name={service.stats[0].icon} className="h-5 w-5" />
                </span>
                <span>
                  <span className="block font-display text-2xl font-bold leading-none text-ink">
                    {service.stats[0].value}
                  </span>
                  <span className="mt-1 block text-xs text-slate-500">{service.stats[0].label}</span>
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* --------------------------------------------------------- Stats */}
        <section className="border-y border-slate-100 bg-white">
          <dl className="container-x grid grid-cols-2 gap-y-8 py-10 lg:grid-cols-4 lg:divide-x lg:divide-slate-100">
            {service.stats.map((s) => (
              <div key={s.label} className="flex items-center gap-4 lg:justify-center">
                <span className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${a.soft}`}>
                  <ServiceIcon name={s.icon} className="h-5 w-5" />
                </span>
                <div>
                  <dt className="whitespace-nowrap font-display text-xl font-bold text-ink sm:text-2xl">{s.value}</dt>
                  <dd className="text-xs text-slate-500">{s.label}</dd>
                </div>
              </div>
            ))}
          </dl>
        </section>

        {/* ----------------------------------------------------- Challenge */}
        <section className="bg-slate-50/70 py-20 sm:py-24">
          <div className="container-x grid items-center gap-12 xl:grid-cols-[0.85fr_1.15fr]">
            <div>
              <Eyebrow>The challenge</Eyebrow>
              <h2 className="section-title mt-4">
                {service.challenge.title[0]}
                <span className="text-gradient block">{service.challenge.title[1]}</span>
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-slate-600">{service.challenge.desc}</p>
              <a href="/book" className="btn-ghost mt-8">
                Talk to our experts
                <Arrow />
              </a>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              {service.challenge.pains.map((p) => (
                <div key={p.title} className="rounded-2xl border border-slate-100 bg-white p-6 shadow-card">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-rose-50 text-rose-500">
                    <ServiceIcon name={p.icon} className="h-5 w-5" />
                  </span>
                  <h3 className="mt-5 font-display text-[15px] font-bold text-ink">{p.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-500">{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* -------------------------------------------------- Capabilities */}
        <section className="bg-white py-20 sm:py-24">
          <div className="container-x">
            <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-end">
              <div className="max-w-2xl">
                <Eyebrow>Our solution</Eyebrow>
                <h2 className="section-title mt-4">
                  What we <span className="text-gradient">build for you</span>
                </h2>
                <p className="mt-4 text-lg text-slate-600">{service.summary}</p>
              </div>
              <a href="#packages" className="btn-secondary shrink-0">
                See engagement options
                <Arrow />
              </a>
            </div>

            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {service.deliverables.map((d) => (
                <article
                  key={d.title}
                  className={`group rounded-2xl border border-slate-100 bg-white p-6 shadow-card transition duration-300 hover:-translate-y-1 hover:shadow-soft ${a.ring}`}
                >
                  <span className={`flex h-11 w-11 items-center justify-center rounded-xl ${a.soft}`}>
                    <ServiceIcon name={d.icon} className="h-5 w-5" />
                  </span>
                  <h3 className="mt-5 font-display text-[15px] font-bold leading-snug text-ink">{d.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-500">{d.desc}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* -------------------------------------------------- How it works */}
        <section id="how-it-works" className="scroll-mt-24 bg-gradient-to-b from-brand-50/70 to-white py-20 sm:py-24">
          <div className="container-x grid items-center gap-12 xl:grid-cols-[0.8fr_1.2fr]">
            <div>
              <Eyebrow>How it works</Eyebrow>
              <h2 className="section-title mt-4">
                From input to <span className="text-gradient">result</span>
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-slate-600">
                What comes in on the left, what goes out on the right — and what we
                build in the middle, connected to the tools your team already uses.
              </p>
              <a href="/book" className="btn-primary mt-8">
                Map your workflow with us
                <Arrow />
              </a>
            </div>

            <div className="grid items-center gap-4 md:grid-cols-[1fr_auto_1fr] md:gap-5">
              <FlowColumn items={service.flow.inputs} />

              <div className="mx-auto flex items-center gap-3">
                <FlowArrow />
                <div className={`flex w-48 flex-col items-center rounded-3xl bg-gradient-to-br ${a.grad} px-5 py-8 text-center text-white shadow-glow`}>
                  <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/15 ring-1 ring-white/25">
                    <ServiceIcon name={service.icon} className="h-7 w-7" />
                  </span>
                  <p className="mt-4 font-display text-lg font-bold">{service.flow.core.title}</p>
                  <p className="mt-1 text-xs leading-snug text-white/80">{service.flow.core.desc}</p>
                </div>
                <FlowArrow />
              </div>

              <FlowColumn items={service.flow.outputs} />
            </div>
          </div>
        </section>

        {/* ------------------------------------------------------- Process */}
        <section className="bg-white py-20 sm:py-24">
          <div className="container-x">
            <div className="mx-auto max-w-2xl text-center">
              <Eyebrow>Our process</Eyebrow>
              <h2 className="section-title mt-4">
                A simple <span className="text-gradient">{service.process.length}-step process</span>
              </h2>
              <p className="mt-4 text-lg text-slate-600">
                From first call to production — you see progress every week and know what
                comes next.
              </p>
            </div>

            <ol className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-5 lg:gap-6">
              {service.process.map((p, i) => (
                <li key={p.step} className="relative">
                  {i < service.process.length - 1 && (
                    <span aria-hidden className="absolute left-14 right-2 top-5 hidden border-t-2 border-dashed border-brand-100 lg:block" />
                  )}
                  <span className={`relative flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br ${a.grad} font-display text-sm font-bold text-white shadow-glow`}>
                    {i + 1}
                  </span>
                  <h3 className="mt-5 font-display text-base font-bold text-ink">{p.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-500">{p.desc}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* ------------------------------------------------------ Audience */}
        <section className="bg-slate-50/70 py-20 sm:py-24">
          <div className="container-x grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <Eyebrow>Who it&apos;s for</Eyebrow>
              <h2 className="section-title mt-4">
                Real solutions for <span className="text-gradient">real business needs</span>
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-slate-600">
                If you recognise yourself here, the first call will be a short one — we
                already know the questions to ask.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {service.audience.map((au) => (
                <div key={au.title} className="flex gap-4 rounded-2xl border border-slate-100 bg-white p-6 shadow-card">
                  <span className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full ${a.soft}`}>
                    <Check />
                  </span>
                  <div>
                    <h3 className="font-display text-[15px] font-bold text-ink">{au.title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-slate-500">{au.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ------------------------------------------------- Success story */}
        {story && (
          <section className="bg-white py-20 sm:py-24">
            <div className="container-x">
              <div className="grid overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-card lg:grid-cols-2">
                <div className="flex flex-col justify-center p-8 sm:p-12">
                  <Eyebrow>Success story</Eyebrow>
                  <h2 className="mt-4 font-display text-3xl font-bold leading-tight text-ink">
                    {story.title}
                  </h2>
                  <p className="mt-2 text-sm font-medium text-slate-400">{story.client}</p>
                  <p className="mt-4 leading-relaxed text-slate-600">{story.summary}</p>

                  <dl className="mt-8 grid gap-4 rounded-2xl bg-slate-50 p-5 sm:grid-cols-3">
                    {story.results.map((r) => (
                      <div key={r.label}>
                        <dt className="font-display text-xl font-bold text-brand-600 sm:text-2xl">{r.value}</dt>
                        <dd className="mt-1 text-xs leading-snug text-slate-500">{r.label}</dd>
                      </div>
                    ))}
                  </dl>

                  <Link href={`/success-stories/${story.slug}`} className="btn-ghost mt-8 self-start">
                    Read the full case study
                    <Arrow />
                  </Link>
                </div>

                <div className="relative min-h-[18rem] bg-slate-100">
                  <Image
                    src={story.image}
                    alt={story.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </section>
        )}

        {/* ------------------------------------------------------ Packages */}
        <section id="packages" className="scroll-mt-24 bg-slate-50/70 py-20 sm:py-24">
          <div className="container-x">
            <div className="mx-auto max-w-2xl text-center">
              <Eyebrow>Engagement options</Eyebrow>
              <h2 className="section-title mt-4">
                Pick the entry point that <span className="text-gradient">fits your stage</span>
              </h2>
              <p className="mt-4 text-lg text-slate-600">
                Start small and prove it, or go straight to the build. Fixed scope, clear
                deliverables.
              </p>
            </div>

            <div className="mt-12 grid gap-6 lg:grid-cols-3">
              {service.packages.map((pkg) => (
                <article
                  key={pkg.name}
                  className={`relative flex flex-col rounded-3xl bg-white p-8 shadow-card ${
                    pkg.featured ? "ring-2 ring-brand-500" : "border border-slate-100"
                  }`}
                >
                  {pkg.featured && (
                    <span className="absolute -top-3 left-8 rounded-full bg-brand-500 px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-white">
                      Most chosen
                    </span>
                  )}
                  <h3 className="font-display text-xl font-bold text-ink">{pkg.name}</h3>
                  <p className="mt-2 text-sm text-slate-500">
                    <span className="font-semibold text-ink">{pkg.price}</span> · {pkg.timeline}
                  </p>
                  <p className="mt-4 text-sm leading-relaxed text-slate-600">{pkg.desc}</p>

                  <ul className="mt-6 flex-1 space-y-3 border-t border-slate-100 pt-6">
                    {pkg.includes.map((inc) => (
                      <li key={inc} className="flex items-start gap-2.5 text-sm text-slate-600">
                        <Check className="mt-0.5 text-emerald-500" />
                        {inc}
                      </li>
                    ))}
                  </ul>

                  <a href="/book" className={`mt-8 w-full ${pkg.featured ? "btn-primary" : "btn-ghost"}`}>
                    Book a call about this
                    <Arrow />
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ---------------------------------------------------------- Tech */}
        <section className="bg-white py-16">
          <div className="container-x text-center">
            <Eyebrow>Technologies</Eyebrow>
            <h2 className="mt-4 font-display text-2xl font-bold text-ink sm:text-3xl">
              Built on proven, well-supported tools
            </h2>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              {service.tech.map((t) => (
                <span
                  key={t}
                  className="rounded-xl border border-slate-100 bg-white px-5 py-2.5 text-sm font-semibold text-slate-600 shadow-card"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* ----------------------------------------------------------- FAQ */}
        <section className="bg-slate-50/70 py-20 sm:py-24">
          <div className="container-x grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <Eyebrow>FAQ</Eyebrow>
              <h2 className="section-title mt-4">
                Common <span className="text-gradient">questions</span>
              </h2>
              <p className="mt-4 text-lg text-slate-600">
                Quick answers about {service.navLabel}. Don&apos;t see yours? Ask us
                directly.
              </p>
              <a href="/contact" className="btn-ghost mt-8">
                Ask a question
                <Arrow />
              </a>
            </div>

            <div className="space-y-3">
              {service.faqs.map((f) => (
                <details
                  key={f.q}
                  className="group rounded-2xl border border-slate-100 bg-white px-6 py-5 shadow-card"
                >
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-display text-[15px] font-bold text-ink [&::-webkit-details-marker]:hidden">
                    {f.q}
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-brand-50 text-brand-600 transition group-open:rotate-45">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" aria-hidden>
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

        <CTA />
      </main>
      <Footer />
    </>
  );
}

/** Connector between the diagram columns — sideways on wide screens, hidden when stacked */
function FlowArrow() {
  return (
    <span aria-hidden className="hidden h-9 w-9 shrink-0 items-center justify-center rounded-full border border-brand-100 bg-white text-brand-500 shadow-card md:flex">
      <Arrow />
    </span>
  );
}

/** One side of the "How it works" diagram — a stack of small labelled chips */
function FlowColumn({ items }: { items: { label: string; icon: IconKey }[] }) {
  return (
    <ul className="grid grid-cols-2 gap-3 md:grid-cols-1">
      {items.map((it) => (
        <li
          key={it.label}
          className="flex items-center gap-3 rounded-xl border border-slate-100 bg-white px-4 py-3 text-[13px] font-semibold text-ink shadow-card"
        >
          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-brand-50 text-brand-600">
            <ServiceIcon name={it.icon} className="h-4 w-4" />
          </span>
          {it.label}
        </li>
      ))}
    </ul>
  );
}
