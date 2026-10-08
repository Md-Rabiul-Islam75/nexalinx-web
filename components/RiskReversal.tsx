type IconKey = keyof typeof ICONS;

const GUARANTEES: { title: string; body: string; icon: IconKey }[] = [
  { title: "Clear scope", body: "Fixed, documented scope before we write a line of code.", icon: "scope" },
  { title: "Milestone-based delivery", body: "You pay and progress in stages — never a black box.", icon: "milestone" },
  { title: "Weekly progress demo", body: "See working software every week, not just status reports.", icon: "demo" },
  { title: "Documented handover", body: "Full code ownership, docs and architecture handed to you.", icon: "handover" },
  { title: "Maintenance option", body: "Ongoing support, DevOps and improvements after launch.", icon: "maintenance" },
];

const OFFERS = [
  { stage: "Free", name: "AI Opportunity Audit", desc: "A 30–45 min call + a 1-page map of where AI saves you time and cost.", meta: "30–45 min", color: "emerald" },
  { stage: "Entry", name: "Website / App UX Teardown", desc: "10 concrete conversion, performance and UX fixes for your product.", meta: "~3 days", color: "brand" },
  { stage: "Paid discovery", name: "MVP Blueprint Sprint", desc: "PRD, wireframes, feature list, tech stack, timeline and budget range.", meta: "1–2 weeks", color: "violet" },
  { stage: "Core build", name: "AI / Web / Mobile Build", desc: "A sprint-based build with weekly demos, QA and clean handover.", meta: "4–12 weeks", color: "accent", featured: true },
] as const;

const NODE_BG: Record<string, string> = {
  emerald: "bg-emerald-500",
  brand: "bg-brand-500",
  violet: "bg-violet-500",
  accent: "bg-accent-600",
};
const CHIP: Record<string, string> = {
  emerald: "bg-emerald-50 text-emerald-700",
  brand: "bg-brand-50 text-brand-700",
  violet: "bg-violet-100 text-violet-700",
  accent: "bg-accent-500/10 text-accent-600",
};

export function RiskReversal() {
  return (
    <section id="risk" className="scroll-mt-24 bg-slate-50/70 py-16 sm:py-20">
      <div className="container-x">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">Risk reversal</span>
          <h2 className="section-title mt-5">
            Offshore delivery, <span className="text-gradient">without the offshore risk</span>
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Every engagement is structured to remove the fear of hiring the wrong team.
          </p>
        </div>

        {/* Guarantee panel */}
        <div className="mt-14 overflow-hidden rounded-[1.75rem] border border-slate-100 bg-white shadow-soft">
          <div className="grid xl:grid-cols-[0.85fr_1.4fr]">
            {/* Left — statement */}
            <div className="relative overflow-hidden bg-navy-gradient p-8 text-white sm:p-10">
              <div className="bg-grid absolute inset-0 opacity-[0.07]" />
              <div className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-brand-500/30 blur-3xl" />
              <div className="relative">
                <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-brand-100">
                  Our promise
                </span>
                <h3 className="mt-5 font-display text-2xl font-bold leading-snug sm:text-3xl">
                  Your build is protected at every step.
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-slate-300">
                  No lock-in, no black boxes. You always own the code, see progress
                  weekly, and pay only as milestones ship.
                </p>
                <div className="mt-6 inline-flex items-center gap-2 rounded-full bg-accent-500/15 px-4 py-2 text-sm font-semibold text-accent-400">
                  <span className="h-2 w-2 rounded-full bg-accent-500" />
                  Milestone-based · cancel-safe
                </div>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                  <a href="/book" className="btn-primary whitespace-nowrap">
                    Book a Discovery Call
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                      <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </a>
                  <a
                    href="/how-we-work#guarantees"
                    className="btn whitespace-nowrap border border-white/20 bg-white/5 text-white hover:bg-white/10"
                  >
                    See the full process
                  </a>
                </div>
              </div>
            </div>

            {/* Right — guarantees */}
            <div className="grid gap-px bg-slate-100 sm:grid-cols-2">
              {GUARANTEES.map((g) => (
                <div
                  key={g.title}
                  className="group flex gap-4 bg-white p-6 transition-colors hover:bg-brand-50/50 sm:p-7"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-gradient text-white shadow-glow">
                    {ICONS[g.icon]}
                  </span>
                  <div>
                    <h4 className="font-display text-base font-bold text-ink">{g.title}</h4>
                    <p className="mt-1 text-sm leading-relaxed text-slate-500">{g.body}</p>
                  </div>
                </div>
              ))}
              {/* filler cell to balance the 2x3 grid */}
              <div className="hidden items-center gap-3 bg-white p-6 sm:flex sm:p-7">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M20 6 9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                <p className="text-sm font-semibold text-ink">
                  All five, on <span className="text-brand-600">every</span> project.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Offer ladder — stepper */}
        <div className="mt-20">
          <div className="mx-auto max-w-2xl text-center">
            <h3 className="font-display text-2xl font-bold text-ink sm:text-3xl">
              Start small, scale with confidence
            </h3>
            <p className="mt-3 text-slate-600">
              A clear ladder from first conversation to full build — step on wherever you are today.
            </p>
          </div>

          {/* connected node row (desktop) */}
          <div className="relative mx-auto mt-12 hidden max-w-6xl lg:block">
            <div className="absolute inset-x-[12%] top-1/2 h-0.5 -translate-y-1/2 rounded-full bg-gradient-to-r from-emerald-300 via-violet-300 to-accent-400" />
            <div className="relative grid grid-cols-4">
              {OFFERS.map((o, i) => (
                <div key={o.name} className="flex justify-center">
                  <span
                    className={`flex h-11 w-11 items-center justify-center rounded-full text-sm font-bold text-white shadow-lg ring-4 ring-slate-50 ${NODE_BG[o.color]}`}
                  >
                    {i + 1}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-6 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {OFFERS.map((o, i) => (
              <div
                key={o.name}
                className={`relative flex flex-col rounded-2xl border bg-white p-6 shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:shadow-soft ${
                  "featured" in o && o.featured
                    ? "border-accent-500/40 ring-1 ring-accent-500/30"
                    : "border-slate-100"
                }`}
              >
                {"featured" in o && o.featured && (
                  <span className="absolute -top-3 right-5 rounded-full bg-accent-500 px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-ink shadow-glow">
                    Most chosen
                  </span>
                )}
                <div className="flex items-center gap-2">
                  <span className={`flex h-6 w-6 items-center justify-center rounded-full text-[11px] font-bold text-white lg:hidden ${NODE_BG[o.color]}`}>
                    {i + 1}
                  </span>
                  <span className={`rounded-full px-2.5 py-1 text-[11px] font-bold uppercase tracking-wide ${CHIP[o.color]}`}>
                    {o.stage}
                  </span>
                </div>
                <h4 className="mt-3 font-display text-lg font-bold text-ink">{o.name}</h4>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-500">{o.desc}</p>
                <div className="mt-5 flex items-center gap-2 border-t border-slate-100 pt-4 text-xs font-semibold text-slate-500">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-brand-500">
                    <circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  {o.meta}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-col items-center justify-center gap-3 rounded-2xl bg-white p-6 text-center shadow-card sm:flex-row sm:text-left">
            <p className="text-sm font-medium text-slate-600">
              Not sure which step fits? We&apos;ll help you decide on a free call.
            </p>
            <a href="/book" className="btn-primary shrink-0">
              Talk to an engineer
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

const ICONS = {
  scope: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M8 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2h-2" />
      <rect x="8" y="2" width="8" height="4" rx="1" /><path d="M8 11h8M8 15h5" strokeLinecap="round" />
    </svg>
  ),
  milestone: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M5 3v18M5 5h11l-2 3 2 3H5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  demo: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <rect x="3" y="4" width="18" height="13" rx="2" /><path d="M10 8.5l4 2.5-4 2.5V8.5ZM8 21h8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  handover: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M3 7l9-4 9 4-9 4-9-4Z" strokeLinejoin="round" /><path d="M3 7v10l9 4 9-4V7" strokeLinejoin="round" /><path d="M12 11v10" />
    </svg>
  ),
  maintenance: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M14.7 6.3a4 4 0 0 0-5 5L3 18l3 3 6.7-6.7a4 4 0 0 0 5-5l-2.5 2.5-2.5-.5-.5-2.5 2.5-2.5Z" strokeLinejoin="round" />
    </svg>
  ),
};
