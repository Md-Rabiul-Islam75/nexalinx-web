type IconKey = keyof typeof ICONS;
type Color = "emerald" | "sky" | "violet" | "accent" | "brand" | "indigo";

type Offer = {
  stage: string;
  model: string;
  name: string;
  desc: string;
  points: string[];
  meta: string;
  color: Color;
  icon: IconKey;
  cta: string;
  featured?: boolean;
};

const OFFERS: Offer[] = [
  {
    stage: "Free · Low barrier",
    model: "Free",
    name: "AI Opportunity Audit",
    desc: "A 30–45 min call plus a 1-page opportunity map of where AI & automation save you time and cost.",
    points: ["30–45 min discovery call", "1-page AI opportunity map", "3–5 automation ideas"],
    meta: "30–45 min",
    color: "emerald",
    icon: "spark",
    cta: "Book the audit",
  },
  {
    stage: "Entry offer",
    model: "One-time",
    name: "Website / App UX Teardown",
    desc: "We review your existing website or app and hand you 10 concrete conversion, performance and UX fixes.",
    points: ["Full UX & performance review", "10 prioritized fixes", "Conversion recommendations"],
    meta: "~3 days",
    color: "sky",
    icon: "search",
    cta: "Get a teardown",
  },
  {
    stage: "Paid discovery",
    model: "One-time",
    name: "MVP Blueprint Sprint",
    desc: "In 1–2 weeks: PRD, wireframes, feature list, tech stack, timeline and budget range — before you commit to a build.",
    points: ["PRD + clickable wireframes", "Feature list & tech stack", "Timeline & budget range"],
    meta: "1–2 weeks",
    color: "violet",
    icon: "blueprint",
    cta: "Start a blueprint",
  },
  {
    stage: "Core project",
    model: "Project",
    name: "AI / Web / Mobile MVP Build",
    desc: "A 4–12 week sprint-based build with weekly demos, QA and a clean, documented handover.",
    points: ["Sprint-based delivery", "Weekly progress demos", "QA + documented handover"],
    meta: "4–12 weeks",
    color: "accent",
    icon: "build",
    cta: "Scope my build",
    featured: true,
  },
  {
    stage: "Growth offer",
    model: "Monthly",
    name: "Product Scaling & Maintenance",
    desc: "A monthly retainer for feature development, bug fixes, DevOps, analytics and continuous AI improvements.",
    points: ["Feature development & bug fixes", "DevOps & analytics", "Ongoing AI improvements"],
    meta: "Monthly retainer",
    color: "brand",
    icon: "scale",
    cta: "Discuss a retainer",
  },
  {
    stage: "B2B partner offer",
    model: "Monthly",
    name: "White-label Development Team",
    desc: "A silent technical delivery partner for USA & EU agencies — web, AI and mobile, delivered under your brand.",
    points: ["Silent delivery under NDA", "Web, AI & mobile capacity", "You keep the client"],
    meta: "Retainer · NDA",
    color: "indigo",
    icon: "team",
    cta: "Become a partner",
  },
];

const HEADER: Record<Color, string> = {
  emerald: "from-emerald-500 to-teal-600",
  sky: "from-sky-500 to-blue-600",
  violet: "from-violet-500 to-indigo-600",
  accent: "from-accent-500 to-brand-600",
  brand: "from-brand-500 to-violet-600",
  indigo: "from-indigo-500 to-violet-600",
};
const TEXT: Record<Color, string> = {
  emerald: "text-emerald-600",
  sky: "text-sky-600",
  violet: "text-violet-600",
  accent: "text-accent-600",
  brand: "text-brand-600",
  indigo: "text-indigo-600",
};
const CHIP: Record<Color, string> = {
  emerald: "bg-emerald-50 text-emerald-700",
  sky: "bg-sky-50 text-sky-700",
  violet: "bg-violet-100 text-violet-700",
  accent: "bg-accent-50 text-accent-600",
  brand: "bg-brand-50 text-brand-700",
  indigo: "bg-indigo-50 text-indigo-700",
};
const CTA_SOFT: Record<Color, string> = {
  emerald: "bg-emerald-50 text-emerald-700 hover:bg-emerald-100",
  sky: "bg-sky-50 text-sky-700 hover:bg-sky-100",
  violet: "bg-violet-100 text-violet-700 hover:bg-violet-200",
  accent: "bg-accent-50 text-accent-600 hover:bg-accent-100",
  brand: "bg-brand-50 text-brand-700 hover:bg-brand-100",
  indigo: "bg-indigo-50 text-indigo-700 hover:bg-indigo-100",
};

export function Offers() {
  return (
    <section
      id="offers"
      className="relative scroll-mt-24 overflow-hidden bg-gradient-to-b from-white via-slate-50/70 to-white py-16 sm:py-20"
    >
      <div className="absolute -left-40 top-24 -z-0 h-96 w-96 rounded-full bg-brand-gradient-soft blur-3xl" />
      <div className="absolute -right-40 bottom-24 -z-0 h-96 w-96 rounded-full bg-accent-500/5 blur-3xl" />

      <div className="container-x relative">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">Productized offers</span>
          <h2 className="section-title mt-5">
            Ways to <span className="text-gradient">work with Nexalinx</span>
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            From a free audit to a full build or a monthly team — pick the engagement that
            fits where you are today. Fixed scope, clear outcomes, no surprises.
          </p>
        </div>

        <div className="mt-16 grid gap-7 md:grid-cols-2 lg:grid-cols-3">
          {OFFERS.map((o, i) => (
            <OfferCard key={o.name} offer={o} index={i} />
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-center gap-3 text-center sm:flex-row">
          <p className="text-sm text-slate-500">Not sure which fits your stage?</p>
          <a href="/book" className="btn-primary">
            Book a free discovery call
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
              <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}

function OfferCard({ offer: o, index }: { offer: Offer; index: number }) {
  if (o.featured) return <FeaturedCard offer={o} index={index} />;
  return (
    <article className="group flex flex-col overflow-hidden rounded-[1.4rem] border border-slate-100 bg-white shadow-card transition-all duration-300 hover:-translate-y-2 hover:shadow-soft">
      {/* Gradient header band */}
      <div className={`relative h-24 overflow-hidden bg-gradient-to-br ${HEADER[o.color]}`}>
        <div className="bg-grid absolute inset-0 opacity-20" />
        <div className="absolute -right-6 -top-8 h-24 w-24 rounded-full bg-white/15 blur-2xl" />
        <span className="absolute left-5 top-4 rounded-full bg-white/20 px-2.5 py-1 text-[11px] font-bold uppercase tracking-wide text-white backdrop-blur">
          {o.stage}
        </span>
        <span className="absolute right-5 top-4 font-display text-3xl font-extrabold text-white/25">
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>

      {/* Floating icon badge on the seam */}
      <div className="relative px-7">
        <div
          className={`absolute -top-7 flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-slate-700 shadow-lg ring-1 ring-slate-100 transition-transform duration-300 group-hover:scale-110 ${TEXT[o.color]}`}
        >
          {ICONS[o.icon]}
        </div>
      </div>

      {/* Body */}
      <div className="flex flex-1 flex-col px-7 pb-7 pt-9">
        <div className="flex items-center justify-between">
          <h3 className="font-display text-xl font-bold text-ink">{o.name}</h3>
        </div>
        <p className="mt-2 text-sm leading-relaxed text-slate-500">{o.desc}</p>

        <ul className="mt-5 flex-1 space-y-3 border-t border-slate-100 pt-5">
          {o.points.map((p) => (
            <li key={p} className="flex items-start gap-2.5 text-sm text-slate-600">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="mt-0.5 shrink-0 text-accent-500">
                <path d="M20 6 9 17l-5-5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              {p}
            </li>
          ))}
        </ul>

        <div className="mt-6 flex items-center gap-1.5 text-xs font-semibold text-slate-500">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={TEXT[o.color]}>
            <circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          {o.meta}
        </div>

        <a
          href="/book"
          className={`mt-4 inline-flex w-full items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition ${CTA_SOFT[o.color]}`}
        >
          {o.cta}
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
            <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </a>
      </div>
    </article>
  );
}

function FeaturedCard({ offer: o, index }: { offer: Offer; index: number }) {
  return (
    <article className="group relative flex flex-col overflow-hidden rounded-[1.4rem] shadow-glow ring-1 ring-white/10 transition-all duration-300 hover:-translate-y-2 lg:-my-2">
      {/* Full navy body */}
      <div className="relative flex flex-1 flex-col bg-navy-gradient p-7 text-white sm:p-8">
        <div className="bg-grid absolute inset-0 opacity-[0.08]" />
        <div className="absolute -right-16 -top-16 h-52 w-52 rounded-full bg-accent-500/30 blur-3xl" />
        <span className="absolute right-6 top-6 font-display text-4xl font-extrabold text-white/10">
          {String(index + 1).padStart(2, "0")}
        </span>

        <div className="relative">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-accent-500 px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-ink shadow-glow">
            <span className="h-1.5 w-1.5 rounded-full bg-ink" />
            Most popular
          </span>

          <div className="mt-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/15 text-white ring-1 ring-white/20 transition-transform duration-300 group-hover:scale-110">
            {ICONS[o.icon]}
          </div>

          <h3 className="mt-5 font-display text-xl font-bold">{o.name}</h3>
          <p className="mt-2 text-sm leading-relaxed text-slate-300">{o.desc}</p>
        </div>

        <ul className="relative mt-6 flex-1 space-y-3 border-t border-white/10 pt-6">
          {o.points.map((p) => (
            <li key={p} className="flex items-start gap-2.5 text-sm text-slate-200">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="mt-0.5 shrink-0 text-accent-400">
                <path d="M20 6 9 17l-5-5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              {p}
            </li>
          ))}
        </ul>

        <div className="relative mt-6 flex items-center gap-1.5 text-xs font-semibold text-slate-300">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-accent-400">
            <circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          {o.meta}
        </div>

        <a
          href="/book"
          className="relative mt-4 inline-flex w-full items-center justify-center gap-2 rounded-full bg-accent-500 px-5 py-3 text-sm font-semibold text-ink transition hover:bg-accent-400"
        >
          {o.cta}
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
            <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </a>
      </div>
    </article>
  );
}

const ICONS = {
  spark: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M12 3v3M12 18v3M3 12h3M18 12h3" strokeLinecap="round" /><circle cx="12" cy="12" r="3.2" />
    </svg>
  ),
  search: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <circle cx="11" cy="11" r="7" /><path d="m20 20-3.5-3.5" strokeLinecap="round" />
    </svg>
  ),
  blueprint: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <rect x="3" y="4" width="18" height="16" rx="2" /><path d="M3 9h18M8 9v11M8 13h5" strokeLinecap="round" />
    </svg>
  ),
  build: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="m8 6-5 6 5 6M16 6l5 6-5 6M13 4l-2 16" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  scale: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M3 17l6-6 4 4 7-7M14 5h6v6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  team: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <circle cx="9" cy="8" r="3" /><path d="M4 20a5 5 0 0 1 10 0M15 6a3 3 0 0 1 0 6" strokeLinecap="round" />
    </svg>
  ),
};
