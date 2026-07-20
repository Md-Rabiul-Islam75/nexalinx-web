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

const BAR: Record<Color, string> = {
  emerald: "from-emerald-400 to-emerald-500",
  sky: "from-sky-400 to-sky-500",
  violet: "from-violet-400 to-violet-500",
  accent: "from-accent-400 to-accent-500",
  brand: "from-brand-400 to-brand-500",
  indigo: "from-indigo-400 to-indigo-500",
};
const ICON_SOFT: Record<Color, string> = {
  emerald: "bg-emerald-50 text-emerald-600",
  sky: "bg-sky-50 text-sky-600",
  violet: "bg-violet-100 text-violet-600",
  accent: "bg-accent-50 text-accent-600",
  brand: "bg-brand-50 text-brand-600",
  indigo: "bg-indigo-50 text-indigo-600",
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
      className="relative scroll-mt-24 overflow-hidden bg-gradient-to-b from-slate-50 via-white to-brand-50/50 py-20 sm:py-28"
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

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {OFFERS.map((o) => (
            <OfferCard key={o.name} offer={o} />
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

function OfferCard({ offer: o }: { offer: Offer }) {
  if (o.featured) return <FeaturedCard offer={o} />;
  return (
    <article className="group relative flex flex-col overflow-hidden rounded-3xl border border-slate-100 bg-white p-7 shadow-card transition-all duration-300 hover:-translate-y-2 hover:shadow-soft sm:p-8">
      <span aria-hidden className={`absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r ${BAR[o.color]}`} />

      <div className="flex items-center justify-between">
        <span className={`rounded-full px-2.5 py-1 text-[11px] font-bold uppercase tracking-wide ${CHIP[o.color]}`}>
          {o.stage}
        </span>
        <span className="text-[11px] font-semibold uppercase tracking-wide text-slate-400">{o.model}</span>
      </div>

      <div className={`mt-6 flex h-14 w-14 items-center justify-center rounded-2xl ${ICON_SOFT[o.color]}`}>
        {ICONS[o.icon]}
      </div>

      <h3 className="mt-5 font-display text-xl font-bold text-ink">{o.name}</h3>
      <p className="mt-2 text-sm leading-relaxed text-slate-500">{o.desc}</p>

      <ul className="mt-6 flex-1 space-y-3 border-t border-slate-100 pt-6">
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
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-brand-500">
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
    </article>
  );
}

function FeaturedCard({ offer: o }: { offer: Offer }) {
  return (
    <article className="group relative flex flex-col overflow-hidden rounded-3xl bg-navy-gradient p-7 text-white shadow-glow ring-1 ring-white/10 transition-all duration-300 hover:-translate-y-2 sm:p-8 lg:-my-2">
      <div className="bg-grid absolute inset-0 opacity-[0.07]" />
      <div className="absolute -right-16 -top-16 h-52 w-52 rounded-full bg-accent-500/25 blur-3xl" />
      <span className="absolute right-6 top-6 rounded-full bg-accent-500 px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-ink shadow-glow">
        Most popular
      </span>

      <div className="relative flex items-center justify-between pr-24">
        <span className="rounded-full bg-white/15 px-2.5 py-1 text-[11px] font-bold uppercase tracking-wide text-white">
          {o.stage}
        </span>
      </div>

      <div className="relative mt-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/15 text-white">
        {ICONS[o.icon]}
      </div>

      <h3 className="relative mt-5 font-display text-xl font-bold">{o.name}</h3>
      <p className="relative mt-2 text-sm leading-relaxed text-slate-300">{o.desc}</p>

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
