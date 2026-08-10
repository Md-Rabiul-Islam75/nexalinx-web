"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";

import { CASE_STUDIES, type CaseStudy, type Cat } from "@/lib/caseStudies";

const CAT_META: Record<
  Cat,
  { label: string; grad: string; chip: string; dot: string; icon: ReactNode }
> = {
  web: {
    label: "Web",
    grad: "from-brand-500 via-brand-600 to-violet-600",
    chip: "bg-brand-50 text-brand-700",
    dot: "bg-brand-500",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <rect x="3" y="4" width="18" height="16" rx="2" /><path d="M3 9h18" strokeLinecap="round" />
      </svg>
    ),
  },
  mobile: {
    label: "Mobile",
    grad: "from-violet-500 via-violet-600 to-indigo-600",
    chip: "bg-violet-100 text-violet-700",
    dot: "bg-violet-500",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <rect x="7" y="2" width="10" height="20" rx="2.5" /><path d="M11 18h2" strokeLinecap="round" />
      </svg>
    ),
  },
  ai: {
    label: "AI",
    grad: "from-cyan-500 via-brand-500 to-brand-600",
    chip: "bg-cyan-50 text-cyan-700",
    dot: "bg-cyan-500",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <rect x="5" y="5" width="14" height="14" rx="3" /><path d="M9 9h6v6H9zM12 2v3M12 19v3M2 12h3M19 12h3" strokeLinecap="round" />
      </svg>
    ),
  },
};

const FILTERS: { key: Cat | "all"; label: string }[] = [
  { key: "all", label: "All work" },
  { key: "web", label: "Web" },
  { key: "mobile", label: "Mobile" },
  { key: "ai", label: "AI" },
];

export function CaseStudies() {
  const [active, setActive] = useState<Cat | "all">("all");

  const shown = useMemo(
    () => (active === "all" ? CASE_STUDIES : CASE_STUDIES.filter((s) => s.category === active)),
    [active]
  );
  const countFor = (key: Cat | "all") =>
    key === "all" ? CASE_STUDIES.length : CASE_STUDIES.filter((s) => s.category === key).length;

  return (
    <section className="bg-slate-50/70 py-16 sm:py-20">
      <div className="container-x">
        {/* Filter bar */}
        <div className="flex flex-col items-start justify-between gap-5 sm:flex-row sm:items-center">
          <div className="flex flex-wrap gap-2.5">
            {FILTERS.map((f) => {
              const isActive = active === f.key;
              return (
                <button
                  key={f.key}
                  onClick={() => setActive(f.key)}
                  className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold transition ${
                    isActive
                      ? "bg-ink text-white shadow-soft"
                      : "border border-slate-200 bg-white text-slate-600 hover:border-brand-300 hover:text-brand-600"
                  }`}
                >
                  {f.label}
                  <span
                    className={`rounded-full px-1.5 text-xs ${
                      isActive ? "bg-white/20 text-white" : "bg-slate-100 text-slate-500"
                    }`}
                  >
                    {countFor(f.key)}
                  </span>
                </button>
              );
            })}
          </div>
          <p className="text-sm text-slate-500">
            Showing <span className="font-semibold text-ink">{shown.length}</span>{" "}
            {shown.length === 1 ? "project" : "projects"}
          </p>
        </div>

        {/* Grid */}
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {shown.map((s) => (
            <StudyCard key={s.title} study={s} />
          ))}
        </div>
      </div>
    </section>
  );
}

function StudyCard({ study: s }: { study: CaseStudy }) {
  const meta = CAT_META[s.category];
  return (
    <Link
      href={`/success-stories/${s.slug}`}
      className="group flex flex-col overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:shadow-soft"
    >
      {/* Cover — real project image with a dark scrim for legibility */}
      <div className="relative h-44 overflow-hidden">
        <Image
          src={s.image}
          alt={s.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950/85 via-navy-950/35 to-navy-950/10" />

        <div className="relative flex items-start justify-between p-5">
          <span className="rounded-full bg-white/15 px-3 py-1 text-xs font-semibold text-white ring-1 ring-white/20 backdrop-blur">
            {meta.label}
          </span>
          <span className="text-white/85">{meta.icon}</span>
        </div>
        <div className="absolute bottom-5 left-5">
          <p className="font-display text-3xl font-extrabold text-white">{s.hero.value}</p>
          <p className="text-xs font-medium text-white/80">{s.hero.label}</p>
        </div>
      </div>

      {/* Body */}
      <div className="flex flex-1 flex-col p-6">
        <p className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-slate-400">
          <span className={`h-1.5 w-1.5 rounded-full ${meta.dot}`} />
          {s.client}
        </p>
        <h3 className="mt-2 font-display text-lg font-bold text-ink">{s.title}</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-500">{s.summary}</p>

        {/* Metrics */}
        <div className="mt-4 grid grid-cols-2 gap-2">
          {s.metrics.map((m) => (
            <div key={m.label} className="rounded-xl bg-slate-50 px-3 py-2">
              <p className="font-display text-sm font-bold text-ink">{m.value}</p>
              <p className="text-[11px] text-slate-500">{m.label}</p>
            </div>
          ))}
        </div>

        {/* Tech + link */}
        <div className="mt-5 flex flex-wrap gap-1.5">
          {s.tech.map((t) => (
            <span key={t} className="rounded-md bg-brand-50 px-2 py-0.5 text-[11px] font-medium text-brand-700">
              {t}
            </span>
          ))}
        </div>
        <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-600 transition-all group-hover:gap-2.5">
          Read case study
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
            <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
      </div>
    </Link>
  );
}
