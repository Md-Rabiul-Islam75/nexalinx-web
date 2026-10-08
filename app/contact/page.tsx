import type { Metadata } from "next";
import Link from "next/link";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ContactForm } from "@/components/ContactForm";
import { ServiceIcon } from "@/components/ServiceIcon";
import { FaqList } from "@/components/Editorial";
import type { IconKey } from "@/lib/services";
import { ACCENTS } from "@/lib/serviceTheme";

export const metadata: Metadata = {
  title: "Contact — Nexalinx",
  description:
    "Talk to Nexalinx about an AI, web or mobile product. Book a free discovery call, send a message, or reach us directly by email — we reply within one business day.",
};

const CHANNELS: {
  title: string;
  desc: string;
  action: string;
  href: string;
  icon: IconKey;
  accent: "brand" | "violet" | "emerald";
}[] = [
  {
    title: "Book a discovery call",
    desc: "30–45 minutes with an engineer, not a salesperson. Pick a slot that suits your timezone.",
    action: "Choose a time",
    href: "/book",
    icon: "chat",
    accent: "brand",
  },
  {
    title: "Email us directly",
    desc: "Prefer writing? Send the details and we'll reply within one business day.",
    action: "hello@nexalinx.com",
    href: "mailto:hello@nexalinx.com",
    icon: "doc",
    accent: "violet",
  },
  {
    title: "Agency partnerships",
    desc: "White-label delivery for USA and EU agencies, under NDA and under your brand.",
    action: "Start a partner conversation",
    href: "/services/dedicated-team-cto-support",
    icon: "team",
    accent: "emerald",
  },
];

const FACTS = [
  { label: "Response time", value: "Within 1 business day" },
  { label: "Working overlap", value: "4–6 hrs with US / EU" },
  { label: "Markets served", value: "USA, UK & Europe" },
  { label: "NDA", value: "Signed before you share" },
];

const CONTACT_FAQS = [
  {
    q: "What happens after I get in touch?",
    a: "You'll get a reply within one business day, usually with two or three questions and a link to book a call. The call itself is a working conversation about your problem — no deck, no pitch.",
  },
  {
    q: "Do I need to know exactly what I want first?",
    a: "No. Most people arrive with a problem rather than a specification, and shaping that into a scope is part of what the discovery call is for. Turning up with a rough idea is completely normal.",
  },
  {
    q: "Will you sign an NDA before we talk?",
    a: "Yes, and it costs nothing. Send yours or use ours — either way it can be signed before the first call if you'd rather speak freely about the idea.",
  },
  {
    q: "Are you a fit for small projects?",
    a: "Sometimes. If the work is a week or two of well-defined effort, a good freelancer will serve you better and we'll say so. We're the right choice when something needs to be built properly and last.",
  },
];

export default function ContactPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="relative -mt-20 overflow-hidden bg-navy-gradient pt-36 pb-16 text-white sm:pt-40">
          <div className="bg-grid absolute inset-0 opacity-[0.06]" />
          <div className="absolute -left-40 top-10 h-[30rem] w-[30rem] rounded-full bg-brand-500/20 blur-3xl" />
          <div className="absolute -right-32 top-24 h-96 w-96 rounded-full bg-violet-500/25 blur-3xl" />

          <div className="container-x relative">
            <div className="max-w-3xl">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.06] px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-brand-100 backdrop-blur">
                <span className="h-1.5 w-1.5 rounded-full bg-accent-500" />
                Contact
              </span>
              <h1 className="mt-6 font-display text-4xl font-extrabold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
                Tell us the problem.{" "}
                <span className="bg-gradient-to-r from-brand-300 via-brand-400 to-violet-400 bg-clip-text text-transparent">
                  We&apos;ll tell you honestly if we can solve it.
                </span>
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-300">
                No qualification gauntlet and no pitch deck. Describe the situation and
                you&apos;ll get a straight answer — including when the honest answer is that
                you need someone other than us.
              </p>
            </div>

            <dl className="mt-12 grid max-w-3xl grid-cols-2 gap-6 border-t border-white/10 pt-8 sm:grid-cols-4">
              {FACTS.map((f) => (
                <div key={f.label}>
                  <dt className="text-xs text-slate-400">{f.label}</dt>
                  <dd className="mt-1 font-display text-sm font-bold text-white">{f.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        {/* Channels */}
        <section className="bg-white py-16 sm:py-20">
          <div className="container-x grid gap-5 lg:grid-cols-3">
            {CHANNELS.map((c) => {
              const a = ACCENTS[c.accent];
              const external = c.href.startsWith("mailto:");
              const inner = (
                <>
                  <span className={`flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${a.grad} text-white transition-transform duration-300 group-hover:scale-110`}>
                    <ServiceIcon name={c.icon} />
                  </span>
                  <h2 className="mt-5 font-display text-lg font-bold text-ink">{c.title}</h2>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-500">{c.desc}</p>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-600 transition-all group-hover:gap-2.5">
                    {c.action}
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                      <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                </>
              );
              const cls =
                "group flex flex-col rounded-2xl border border-slate-100 bg-white p-7 shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:shadow-soft";

              return external ? (
                <a key={c.title} href={c.href} className={cls}>
                  {inner}
                </a>
              ) : (
                <Link key={c.title} href={c.href} className={cls}>
                  {inner}
                </Link>
              );
            })}
          </div>
        </section>

        {/* Form + sidebar */}
        <section className="bg-slate-50/70 py-16 sm:py-24">
          <div className="container-x grid items-start gap-8 lg:grid-cols-[1.25fr_0.75fr]">
            <ContactForm />

            <div className="space-y-6">
              {/* What to expect */}
              <div className="relative overflow-hidden rounded-3xl bg-navy-gradient p-7 text-white shadow-soft sm:p-8">
                <div className="bg-grid absolute inset-0 opacity-[0.07]" />
                <div className="absolute -right-16 -top-16 h-52 w-52 rounded-full bg-brand-500/25 blur-3xl" />
                <div className="relative">
                  <h2 className="font-display text-lg font-bold">What happens next</h2>
                  <ol className="mt-5 space-y-5">
                    {[
                      { t: "We read it properly", d: "A person, not an autoresponder. Usually the same day." },
                      { t: "A short reply with questions", d: "Enough to work out whether a call is worth your time." },
                      { t: "A 30–45 minute call", d: "With an engineer who'd work on it, not an account manager." },
                      { t: "A written next step", d: "Scope, options and a number — or an honest referral elsewhere." },
                    ].map((s, i) => (
                      <li key={s.t} className="flex gap-3.5">
                        <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-white/10 font-display text-xs font-bold text-brand-200">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <div>
                          <p className="text-sm font-semibold">{s.t}</p>
                          <p className="mt-1 text-sm leading-relaxed text-slate-300">{s.d}</p>
                        </div>
                      </li>
                    ))}
                  </ol>
                </div>
              </div>

              {/* Direct details */}
              <div className="rounded-3xl border border-slate-100 bg-white p-7 shadow-card sm:p-8">
                <h2 className="font-display text-lg font-bold text-ink">Reach us directly</h2>
                <dl className="mt-5 space-y-4 text-sm">
                  <div>
                    <dt className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                      General & new business
                    </dt>
                    <dd className="mt-1">
                      <a href="mailto:hello@nexalinx.com" className="font-semibold text-brand-600 hover:text-brand-700">
                        hello@nexalinx.com
                      </a>
                    </dd>
                  </div>
                  <div>
                    <dt className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                      Markets
                    </dt>
                    <dd className="mt-1 text-slate-600">USA, United Kingdom & Europe</dd>
                  </div>
                  <div>
                    <dt className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                      Working overlap
                    </dt>
                    <dd className="mt-1 text-slate-600">
                      4–6 hours daily with US Eastern and Central European time
                    </dd>
                  </div>
                </dl>

                <a href="/book" className="btn-primary mt-7 w-full">
                  Book a Discovery Call
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="bg-white py-20 sm:py-24">
          <div className="container-x grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <span className="eyebrow">Before you write</span>
              <h2 className="section-title mt-5">
                Common <span className="text-gradient">first questions</span>
              </h2>
              <p className="mt-4 text-lg text-slate-600">
                A few answers that might save you a message.
              </p>
              <Link
                href="/how-we-work"
                className="mt-8 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-600 transition hover:gap-2.5"
              >
                See how we work
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                  <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
            </div>
            <FaqList faqs={CONTACT_FAQS} />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
