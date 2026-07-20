const PILLARS = [
  {
    no: "01",
    title: "AI-first, not AI-hype",
    body: "Practical use cases only — internal automation, chatbots, RAG assistants, document processing and analytics that move real numbers.",
  },
  {
    no: "02",
    title: "Production-ready engineering",
    body: "Security, scalability, maintainability, QA, DevOps, code ownership and documentation baked in — not bolted on later.",
  },
  {
    no: "03",
    title: "Founder-friendly process",
    body: "A clear path from idea → blueprint → design → MVP → launch → iterate, with weekly demos so you always see progress.",
  },
  {
    no: "04",
    title: "Agency-friendly delivery",
    body: "A silent white-label team under NDA. You keep the client relationship; we handle delivery, fast communication and clean handover.",
  },
  {
    no: "05",
    title: "Cost-efficient global team",
    body: "US/EU-facing communication and timezone overlap, paired with senior engineering at a genuine cost advantage.",
  },
];

export function Pillars() {
  return (
    <section id="pillars" className="relative scroll-mt-24 overflow-hidden bg-navy-gradient py-20 text-white sm:py-28">
      <div className="bg-grid absolute inset-0 opacity-[0.06]" />
      <div className="absolute -right-32 top-10 h-96 w-96 rounded-full bg-brand-500/25 blur-3xl" />
      <div className="container-x relative">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div className="lg:sticky lg:top-28">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-brand-200">
              How we work
            </span>
            <h2 className="mt-5 font-display text-3xl font-bold leading-tight sm:text-4xl">
              Five reasons teams pick Nexalinx over the alternatives
            </h2>
            <p className="mt-4 max-w-md text-slate-300">
              More accountable than freelancers, faster than enterprise agencies, and more
              production-ready than no-code prototypes.
            </p>
            <a href="/book" className="btn-primary mt-8">
              Talk to an engineer
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {PILLARS.map((p, i) => (
              <div
                key={p.no}
                className={`rounded-2xl border border-white/10 bg-white/[0.04] p-6 transition-colors hover:bg-white/[0.07] ${
                  i === PILLARS.length - 1 ? "sm:col-span-2" : ""
                }`}
              >
                <span className="font-display text-sm font-bold text-brand-300">{p.no}</span>
                <h3 className="mt-2 font-display text-lg font-bold">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-300">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
