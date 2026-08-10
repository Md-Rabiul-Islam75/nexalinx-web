import Image from "next/image";
import Link from "next/link";

const CASES = [
  {
    tag: "Fintech · Crypto",
    title: "Bitcoin / crypto application",
    problem: "High-security wallet & transaction workflows with real-time data.",
    highlights: ["Secure backend", "Real-time data", "Complex API integration"],
    image: "/proof/crypto.webp",
    href: "/success-stories/crypto-wallet-trading-app",
  },
  {
    tag: "AI · CRM",
    title: "Outreaq — AI support for CRM",
    problem: "An AI assistant wired into the CRM that drafts replies, surfaces the right record and answers staff questions with citations.",
    highlights: ["RAG knowledge base", "Drafts & suggestions", "Cited answers"],
    image: "/work/crm-outreaq.avif",
    href: "/success-stories/outreaq-ai-support-crm",
  },
  {
    tag: "Healthcare · Web & App",
    title: "HealthFix — Web & App",
    problem: "A patient-facing web portal and companion app for appointments, records and reminders on a privacy-first backend.",
    highlights: ["Patient portal + app", "Automated reminders", "HIPAA-conscious"],
    image: "/work/healthfix.avif",
    href: "/success-stories/healthfix-web-and-app",
  },
];

export function Proof() {
  return (
    <section id="proof" className="scroll-mt-24 py-16 sm:py-20">
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

        <div className="mt-14 grid gap-7 lg:grid-cols-3">
          {CASES.map((c) => (
            <Link
              key={c.title}
              href={c.href}
              className="group flex flex-col overflow-hidden rounded-[1.4rem] border border-slate-100 bg-white shadow-card transition-all duration-300 hover:-translate-y-2 hover:shadow-soft"
            >
              {/* Image header with tag chip */}
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={c.image}
                  alt={c.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/70 via-navy-950/15 to-transparent" />
                <span className="absolute left-5 top-5 rounded-full bg-white/15 px-3 py-1 text-xs font-semibold text-white backdrop-blur-md ring-1 ring-white/20">
                  {c.tag}
                </span>
                <h3 className="absolute inset-x-5 bottom-4 font-display text-xl font-bold leading-snug text-white">
                  {c.title}
                </h3>
              </div>

              {/* Body */}
              <div className="flex flex-1 flex-col p-6">
                <p className="text-sm leading-relaxed text-slate-500">{c.problem}</p>
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

                <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-600 transition-all group-hover:gap-2.5">
                  Read case study
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                    <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </div>
            </Link>
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
