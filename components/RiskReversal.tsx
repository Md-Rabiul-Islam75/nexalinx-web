const GUARANTEES = [
  { title: "Clear scope", body: "Fixed, documented scope before we write a line of code." },
  { title: "Milestone-based delivery", body: "You pay and progress in stages — never a black box." },
  { title: "Weekly progress demo", body: "See working software every week, not just status reports." },
  { title: "Documented handover", body: "Full code ownership, docs and architecture handed to you." },
  { title: "Maintenance option", body: "Ongoing support, DevOps and improvements after launch." },
];

const OFFERS = [
  { stage: "Free", name: "AI Opportunity Audit", desc: "A 30–45 min call + a 1-page map of where AI saves you time and cost." },
  { stage: "Entry", name: "Website / App UX Teardown", desc: "10 concrete conversion, performance and UX fixes for your product." },
  { stage: "Paid discovery", name: "MVP Blueprint Sprint", desc: "PRD, wireframes, feature list, tech stack, timeline and budget range." },
  { stage: "Core", name: "AI / Web / Mobile Build", desc: "A 4–12 week sprint-based build with weekly demos." },
];

export function RiskReversal() {
  return (
    <section id="risk" className="scroll-mt-24 bg-slate-50/70 py-20 sm:py-28">
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

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {GUARANTEES.map((g) => (
            <div key={g.title} className="rounded-2xl border border-slate-100 bg-white p-6 shadow-card">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-gradient text-white">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <path d="M20 6 9 17l-5-5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h3 className="mt-4 font-display text-base font-bold text-ink">{g.title}</h3>
              <p className="mt-1.5 text-sm text-slate-500">{g.body}</p>
            </div>
          ))}
        </div>

        {/* Offer ladder */}
        <div className="mt-16 rounded-3xl border border-slate-100 bg-white p-8 shadow-card sm:p-10">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <h3 className="font-display text-2xl font-bold text-ink">
              Start small, scale with confidence
            </h3>
            <p className="text-sm text-slate-500">Pick the entry point that fits where you are today.</p>
          </div>
          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {OFFERS.map((o, i) => (
              <div key={o.name} className="relative rounded-2xl bg-slate-50 p-5">
                <span className="text-xs font-semibold uppercase tracking-wider text-accent-600">
                  {o.stage}
                </span>
                <h4 className="mt-2 font-display text-lg font-bold text-ink">{o.name}</h4>
                <p className="mt-2 text-sm text-slate-500">{o.desc}</p>
                {i < OFFERS.length - 1 && (
                  <svg
                    className="absolute -right-3 top-1/2 hidden -translate-y-1/2 text-slate-300 lg:block"
                    width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                  >
                    <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
