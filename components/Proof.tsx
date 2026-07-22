const CASES = [
  {
    tag: "Fintech · Crypto",
    title: "Bitcoin / crypto application",
    problem: "High-security wallet & transaction workflows with real-time data.",
    highlights: ["Secure backend", "Real-time data", "Complex API integration"],
    accent: "from-brand-500 to-violet-600",
  },
  {
    tag: "Design · Canvas",
    title: "Canvas / design-focused app",
    problem: "Interactive, performance-heavy canvas experience in the browser.",
    highlights: ["Rich UX", "Performance tuning", "Cross-device"],
    accent: "from-violet-500 to-accent-500",
  },
  {
    tag: "Web / App",
    title: "Critical web & app projects",
    problem: "Mission-critical systems requiring reliability and clean handover.",
    highlights: ["Scalable architecture", "QA & DevOps", "Documented delivery"],
    accent: "from-accent-500 to-brand-500",
  },
];

export function Proof() {
  return (
    <section id="proof" className="scroll-mt-24 bg-white py-20 sm:py-28">
      <div className="container-x">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div className="max-w-2xl">
            <span className="eyebrow">Proof of work</span>
            <h2 className="section-title mt-5">
              Shipped work behind the referrals
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              Nexalinx has delivered crypto, design-heavy and mission-critical products.
              Full, metric-backed case studies are being published — here&apos;s a snapshot.
            </p>
          </div>
          <span className="rounded-full border border-slate-200 px-4 py-2 text-xs font-medium text-slate-500">
            Detailed case studies in progress
          </span>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {CASES.map((c) => (
            <article
              key={c.title}
              className="group overflow-hidden rounded-2xl border border-slate-100 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-soft"
            >
              <div className={`relative h-40 bg-gradient-to-br ${c.accent} p-6`}>
                <span className="rounded-full bg-white/20 px-3 py-1 text-xs font-semibold text-white backdrop-blur">
                  {c.tag}
                </span>
                <div className="bg-grid absolute inset-0 opacity-20" />
              </div>
              <div className="p-6">
                <h3 className="font-display text-xl font-bold text-ink">{c.title}</h3>
                <p className="mt-2 text-sm text-slate-500">{c.problem}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {c.highlights.map((h) => (
                    <span
                      key={h}
                      className="rounded-full bg-brand-50 px-3 py-1 text-xs font-medium text-brand-700"
                    >
                      {h}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a href="/success-stories" className="btn-ghost">
            View all success stories
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
              <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
