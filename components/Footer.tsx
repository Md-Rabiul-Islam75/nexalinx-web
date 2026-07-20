import { Logo } from "./Logo";

const COLUMNS = [
  {
    heading: "Services",
    links: [
      "AI Development & Automation",
      "Web Design & Conversion",
      "Web App / SaaS MVP",
      "Mobile App Development",
      "White-label Delivery",
    ],
  },
  {
    heading: "Company",
    links: ["How we work", "Proof of work", "Why Nexalinx", "Contact"],
  },
  {
    heading: "Offers",
    links: [
      "AI Opportunity Audit",
      "UX Teardown",
      "MVP Blueprint Sprint",
      "App Rescue Sprint",
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
            <a href="#contact" className="btn-primary mt-6">
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
                  <li key={link}>
                    <a href="#contact" className="text-sm text-slate-400 transition-colors hover:text-white">
                      {link}
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
