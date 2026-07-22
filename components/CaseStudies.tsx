"use client";

import { useMemo, useState } from "react";
import type { ReactNode } from "react";

type Cat = "web" | "mobile" | "ai";

type Study = {
  title: string;
  client: string;
  category: Cat;
  summary: string;
  hero: { value: string; label: string };
  metrics: { value: string; label: string }[];
  tech: string[];
};

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

const STUDIES: Study[] = [
  {
    title: "AutoMarket — car marketplace platform",
    client: "Automotive marketplace · USA",
    category: "web",
    summary:
      "A high-performance marketplace with financing calculator, dealer tools and 120k+ live listings.",
    hero: { value: "+42%", label: "qualified leads" },
    metrics: [
      { value: "1.4s", label: "load time" },
      { value: "120k", label: "listings" },
    ],
    tech: ["Next.js", "Node.js", "PostgreSQL"],
  },
  {
    title: "Canvas — collaborative design studio",
    client: "Design SaaS · EU",
    category: "web",
    summary:
      "A real-time, multiplayer canvas editor with WebGL rendering and offline-safe sync.",
    hero: { value: "60fps", label: "canvas render" },
    metrics: [
      { value: "25k", label: "active users" },
      { value: "99.9%", label: "uptime" },
    ],
    tech: ["React", "WebGL", "WebSocket"],
  },
  {
    title: "InsightHub — B2B analytics portal",
    client: "SaaS · USA",
    category: "web",
    summary:
      "A data-heavy reporting portal with 40+ integrations and self-serve dashboards.",
    hero: { value: "-70%", label: "report time" },
    metrics: [
      { value: "40+", label: "integrations" },
      { value: "5M", label: "rows / query" },
    ],
    tech: ["Next.js", "Python", "ClickHouse"],
  },
  {
    title: "Crypto wallet & trading app",
    client: "Fintech / crypto · USA",
    category: "mobile",
    summary:
      "A secure Bitcoin/crypto wallet with real-time trading, biometric auth and hardware-grade security.",
    hero: { value: "4.8★", label: "app store rating" },
    metrics: [
      { value: "80k+", label: "downloads" },
      { value: "0", label: "security incidents" },
    ],
    tech: ["React Native", "Rust", "WebSocket"],
  },
  {
    title: "RouteOne — logistics driver app",
    client: "Logistics · EU",
    category: "mobile",
    summary:
      "An offline-first delivery & routing app with live tracking and automatic sync on reconnect.",
    hero: { value: "+30%", label: "on-time delivery" },
    metrics: [
      { value: "100%", label: "offline capable" },
      { value: "12k", label: "daily routes" },
    ],
    tech: ["Flutter", "Firebase", "Maps SDK"],
  },
  {
    title: "CareConnect — health & booking app",
    client: "Healthcare · USA",
    category: "mobile",
    summary:
      "Appointment booking plus telehealth video, reminders and a HIPAA-ready backend.",
    hero: { value: "4.7★", label: "patient rating" },
    metrics: [
      { value: "HIPAA", label: "compliant" },
      { value: "-45%", label: "no-shows" },
    ],
    tech: ["React Native", "Node.js", "WebRTC"],
  },
  {
    title: "DocuMind — AI document assistant",
    client: "Operations SaaS · EU",
    category: "ai",
    summary:
      "A RAG knowledge base over company documents that answers staff questions with citations.",
    hero: { value: "92%", label: "answer accuracy" },
    metrics: [
      { value: "-65%", label: "support time" },
      { value: "1.2M", label: "docs indexed" },
    ],
    tech: ["Python", "LangChain", "pgvector"],
  },
  {
    title: "FlowOps — AI workflow automation",
    client: "Finance operations · USA",
    category: "ai",
    summary:
      "OCR + AI pipeline that reads, classifies and routes invoices and documents automatically.",
    hero: { value: "-80%", label: "manual work" },
    metrics: [
      { value: "10k", label: "docs / day" },
      { value: "99.2%", label: "extraction rate" },
    ],
    tech: ["Python", "OCR", "LLM agents"],
  },
  {
    title: "Recommend AI — personalization engine",
    client: "E-commerce · EU",
    category: "ai",
    summary:
      "A real-time recommendation engine driving personalized product discovery at checkout.",
    hero: { value: "+28%", label: "avg. order value" },
    metrics: [
      { value: "<50ms", label: "inference" },
      { value: "+18%", label: "repeat rate" },
    ],
    tech: ["Python", "Vector DB", "Ranking ML"],
  },
];

const FILTERS: { key: Cat | "all"; label: string }[] = [
  { key: "all", label: "All work" },
  { key: "web", label: "Web" },
  { key: "mobile", label: "Mobile" },
  { key: "ai", label: "AI" },
];

export function CaseStudies() {
  const [active, setActive] = useState<Cat | "all">("all");

  const shown = useMemo(
    () => (active === "all" ? STUDIES : STUDIES.filter((s) => s.category === active)),
    [active]
  );
  const countFor = (key: Cat | "all") =>
    key === "all" ? STUDIES.length : STUDIES.filter((s) => s.category === key).length;

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

function StudyCard({ study: s }: { study: Study }) {
  const meta = CAT_META[s.category];
  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:shadow-soft">
      {/* Cover */}
      <div className={`relative h-44 bg-gradient-to-br ${meta.grad} p-5`}>
        <div className="bg-grid absolute inset-0 opacity-20" />
        <div className="relative flex items-start justify-between">
          <span className="rounded-full bg-white/20 px-3 py-1 text-xs font-semibold text-white backdrop-blur">
            {meta.label}
          </span>
          <span className="text-white/80">{meta.icon}</span>
        </div>
        <div className="absolute bottom-5 left-5">
          <p className="font-display text-4xl font-extrabold text-white">{s.hero.value}</p>
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
        <a
          href="#"
          className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-600 transition group-hover:gap-2.5 hover:text-brand-700"
        >
          Read case study
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
            <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </a>
      </div>
    </article>
  );
}
