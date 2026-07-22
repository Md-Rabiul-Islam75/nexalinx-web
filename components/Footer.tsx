import { Logo } from "./Logo";
import { SERVICES } from "@/lib/services";

type Column = { heading: string; links: { label: string; href: string }[] };

const COLUMNS: Column[] = [
  {
    heading: "Services",
    links: [
      ...SERVICES.map((s) => ({ label: s.navLabel, href: `/services/${s.slug}` })),
      { label: "All services", href: "/services" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "How we work", href: "/#pillars" },
      { label: "Success stories", href: "/success-stories" },
      { label: "Why Nexalinx", href: "/#pillars" },
      { label: "Contact", href: "/#contact" },
    ],
  },
  {
    heading: "Offers",
    links: [
      { label: "AI Opportunity Audit", href: "/#offers" },
      { label: "UX Teardown", href: "/#offers" },
      { label: "MVP Blueprint Sprint", href: "/#offers" },
      { label: "White-label Partnership", href: "/services/dedicated-team-cto-support" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-ink text-slate-300">
      <div className="container-x py-16">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <Logo variant="light" />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-slate-400">
              AI-first product engineering partner for startups, SMEs and agencies in the
              USA and Europe. Transforming business with technology solutions.
            </p>
            <a href="/book" className="btn-primary mt-6">
              Book a Discovery Call
            </a>
          </div>

          {COLUMNS.map((col) => (
            <div key={col.heading}>
              <h3 className="font-display text-sm font-bold uppercase tracking-wider text-white">
                {col.heading}
              </h3>
              <ul className="mt-4 space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="text-sm text-slate-400 transition-colors hover:text-white">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row">
          <p className="text-sm text-slate-500">
            © {new Date().getFullYear()} Nexalinx. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-sm text-slate-500">
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">Terms</a>
            <a href="mailto:hello@nexalinx.com" className="hover:text-white">hello@nexalinx.com</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
