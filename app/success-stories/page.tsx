import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CTA } from "@/components/CTA";
import { CaseStudies } from "@/components/CaseStudies";

export const metadata: Metadata = {
  title: "Success Stories — Nexalinx",
  description:
    "Selected work by Nexalinx across web, mobile and AI — real products designed, built and shipped for founders, SMEs and agencies in the USA and Europe.",
};

const STATS = [
  { value: "40+", label: "products shipped" },
  { value: "3", label: "core domains" },
  { value: "USA & EU", label: "markets served" },
  { value: "Senior-led", label: "delivery teams" },
];

export default function SuccessStoriesPage() {
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
                Success stories
              </span>
              <h1 className="mt-6 font-display text-4xl font-extrabold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
                Products we&apos;ve{" "}
                <span className="bg-gradient-to-r from-brand-300 via-brand-400 to-violet-400 bg-clip-text text-transparent">
                  designed, built &amp; shipped
                </span>
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-300">
                Real work across web, mobile and AI — filter by the field you care about
                and see the outcomes we delivered for founders, SMEs and agencies.
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

        {/* Filterable case studies */}
        <CaseStudies />

        <CTA />
      </main>
      <Footer />
    </>
  );
}
