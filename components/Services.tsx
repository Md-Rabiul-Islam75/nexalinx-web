type Service = {
  title: string;
  desc: string;
  points: string[];
  icon: React.ReactNode;
  featured?: boolean;
};

const ICON = "w-6 h-6";

const SERVICES: Service[] = [
  {
    title: "AI Development & Automation",
    desc: "Practical AI that cuts manual work — not hype.",
    points: ["AI chatbots & agents", "RAG knowledge bases", "Workflow & document automation"],
    featured: true,
    icon: (
      <svg className={ICON} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M12 3v2M12 19v2M5 12H3M21 12h-2M6.3 6.3 4.9 4.9M19.1 19.1l-1.4-1.4M17.7 6.3l1.4-1.4M4.9 19.1l1.4-1.4" strokeLinecap="round" />
        <circle cx="12" cy="12" r="4" />
      </svg>
    ),
  },
  {
    title: "Web Design & Conversion Sites",
    desc: "Websites that generate leads, not just look good.",
    points: ["Corporate & SaaS sites", "Landing pages & redesign", "Performance & SEO foundation"],
    icon: (
      <svg className={ICON} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <rect x="3" y="4" width="18" height="16" rx="2" />
        <path d="M3 9h18M7 6.5h.01M9.5 6.5h.01" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Web Application / SaaS MVP",
    desc: "Turn your idea into a testable, scalable MVP.",
    points: ["MVP & admin dashboards", "Subscription SaaS", "Customer portals & APIs"],
    icon: (
      <svg className={ICON} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="m8 6-5 6 5 6M16 6l5 6-5 6M13 4l-2 16" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Mobile App Development",
    desc: "iOS & Android apps users actually keep.",
    points: ["React Native / Flutter", "Payments, maps, notifications", "User app + admin panel"],
    icon: (
      <svg className={ICON} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <rect x="7" y="2" width="10" height="20" rx="2.5" />
        <path d="M11 18h2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Critical Product Engineering",
    desc: "High-security, high-performance systems.",
    points: ["Crypto / fintech workflows", "Complex APIs & backends", "Performance optimization"],
    icon: (
      <svg className={ICON} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M12 3 4 6v6c0 4.5 3.2 7.5 8 9 4.8-1.5 8-4.5 8-9V6l-8-3Z" strokeLinejoin="round" />
        <path d="m9 12 2 2 4-4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Dedicated Team / CTO Support",
    desc: "A senior-led offshore team with US/EU discipline.",
    points: ["Developers, PM, QA, DevOps", "Tech lead & architecture", "White-label delivery"],
    icon: (
      <svg className={ICON} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <circle cx="9" cy="8" r="3" />
        <path d="M15.5 6.5a3 3 0 0 1 0 5.5M4 20a5 5 0 0 1 10 0M14.5 15.5A5 5 0 0 1 20 20" strokeLinecap="round" />
      </svg>
    ),
  },
];

export function Services() {
  return (
    <section id="services" className="scroll-mt-24 bg-white py-20 sm:py-28">
      <div className="container-x">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">What we build</span>
          <h2 className="section-title mt-5">
            One partner for AI, web &amp; mobile —{" "}
            <span className="text-gradient">from idea to scale</span>
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            International buyers don&apos;t buy a service list — they buy a business outcome.
            Every engagement is shaped around yours.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s) => (
            <article
              key={s.title}
              className={`card group ${
                s.featured ? "ring-1 ring-brand-100" : ""
              }`}
            >
              <div
                className={`flex h-12 w-12 items-center justify-center rounded-xl ${
                  s.featured
                    ? "bg-brand-gradient text-white"
                    : "bg-brand-50 text-brand-600"
                }`}
              >
                {s.icon}
              </div>
              <h3 className="mt-5 font-display text-lg font-bold text-ink">{s.title}</h3>
              <p className="mt-2 text-sm text-slate-500">{s.desc}</p>
              <ul className="mt-4 space-y-2">
                {s.points.map((p) => (
                  <li key={p} className="flex items-start gap-2 text-sm text-slate-600">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="mt-0.5 shrink-0 text-accent-500">
                      <path d="M20 6 9 17l-5-5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    {p}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
