"use client";

import { useEffect, useRef, useState } from "react";
import { Logo } from "./Logo";

type SubItem = { label: string; desc?: string; href: string; icon: keyof typeof ICONS };
type NavItem = { label: string; href?: string; menu?: SubItem[] };

const NAV: NavItem[] = [
  {
    label: "Solutions",
    menu: [
      { label: "Starting from an idea", desc: "Turn a concept into a working MVP", href: "#services", icon: "spark" },
      { label: "Recovering a bad build", desc: "Rescue a slow, buggy or stalled app", href: "#risk", icon: "wrench" },
      { label: "Scaling what you've built", desc: "Add features, speed & reliability", href: "#services", icon: "trend" },
      { label: "From prototype to production", desc: "Make no-code / AI prototypes production-ready", href: "#services", icon: "bolt" },
    ],
  },
  {
    label: "Why Nexalinx",
    menu: [
      { label: "How we work", desc: "Idea → blueprint → build → launch", href: "#pillars", icon: "flow" },
      { label: "Our difference", desc: "Accountable, fast, production-ready", href: "#pillars", icon: "shield" },
    ],
  },
  { label: "Success Stories", href: "#proof" },
  {
    label: "Services",
    menu: [
      { label: "AI Development & Automation", href: "#services", icon: "ai" },
      { label: "Web Design & Conversion", href: "#services", icon: "web" },
      { label: "Web App / SaaS MVP", href: "#services", icon: "app" },
      { label: "Mobile App Development", href: "#services", icon: "mobile" },
      { label: "White-label / Dedicated Team", href: "#services", icon: "team" },
    ],
  },
  {
    label: "Insights",
    menu: [
      { label: "Blog", desc: "AI, MVP & product engineering notes", href: "#", icon: "blog" },
      { label: "Founder Resources", desc: "Guides, checklists & templates", href: "#", icon: "folder" },
    ],
  },
  { label: "Contact", href: "#contact" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const dark = !scrolled && !mobileOpen; // white text over the dark hero
  const openWith = (label: string) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpenMenu(label);
  };
  const scheduleClose = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setOpenMenu(null), 120);
  };

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled || mobileOpen
          ? "border-b border-slate-100 bg-white/90 backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="container-x flex h-20 items-center justify-between">
        <a href="#top" aria-label="Nexalinx home">
          <Logo variant={dark ? "light" : "dark"} />
        </a>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 lg:flex">
          {NAV.map((item) =>
            item.menu ? (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => openWith(item.label)}
                onMouseLeave={scheduleClose}
              >
                <button
                  className={`flex items-center gap-1 rounded-full px-3.5 py-2 text-sm font-medium transition-colors ${
                    dark ? "text-white/85 hover:text-white" : "text-slate-600 hover:text-brand-600"
                  }`}
                  aria-expanded={openMenu === item.label}
                >
                  {item.label}
                  <svg
                    width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"
                    className={`transition-transform ${openMenu === item.label ? "rotate-180" : ""}`}
                  >
                    <path d="m6 9 6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>

                {openMenu === item.label && (
                  <div
                    className="absolute left-0 top-full pt-3"
                    onMouseEnter={() => openWith(item.label)}
                    onMouseLeave={scheduleClose}
                  >
                    <div className="w-72 rounded-2xl border border-slate-100 bg-white p-2 shadow-soft">
                      {item.menu.map((sub) => (
                        <a
                          key={sub.label}
                          href={sub.href}
                          onClick={() => setOpenMenu(null)}
                          className="group flex items-start gap-3 rounded-xl p-2.5 transition-colors hover:bg-brand-50"
                        >
                          <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-brand-gradient text-white">
                            {ICONS[sub.icon]}
                          </span>
                          <span>
                            <span className="block text-sm font-semibold text-ink">{sub.label}</span>
                            {sub.desc && (
                              <span className="block text-xs text-slate-500">{sub.desc}</span>
                            )}
                          </span>
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <a
                key={item.label}
                href={item.href}
                className={`rounded-full px-3.5 py-2 text-sm font-medium transition-colors ${
                  dark ? "text-white/85 hover:text-white" : "text-slate-600 hover:text-brand-600"
                }`}
              >
                {item.label}
              </a>
            )
          )}
        </nav>

        <div className="hidden lg:block">
          <a href="#contact" className="btn-primary">
            Book a Discovery Call
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className={`inline-flex h-10 w-10 items-center justify-center rounded-lg border lg:hidden ${
            dark ? "border-white/30 text-white" : "border-slate-200 text-ink"
          }`}
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {mobileOpen ? (
              <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="max-h-[calc(100vh-5rem)] overflow-y-auto border-t border-slate-100 bg-white lg:hidden">
          <div className="container-x flex flex-col gap-1 py-4">
            {NAV.map((item) => (
              <MobileGroup key={item.label} item={item} onNavigate={() => setMobileOpen(false)} />
            ))}
            <a href="#contact" onClick={() => setMobileOpen(false)} className="btn-primary mt-3 w-full">
              Book a Discovery Call
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

function MobileGroup({ item, onNavigate }: { item: NavItem; onNavigate: () => void }) {
  const [open, setOpen] = useState(false);
  if (!item.menu) {
    return (
      <a
        href={item.href}
        onClick={onNavigate}
        className="rounded-lg px-3 py-2.5 text-sm font-semibold text-ink hover:bg-slate-50"
      >
        {item.label}
      </a>
    );
  }
  return (
    <div>
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between rounded-lg px-3 py-2.5 text-sm font-semibold text-ink hover:bg-slate-50"
      >
        {item.label}
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"
          className={`transition-transform ${open ? "rotate-180" : ""}`}>
          <path d="m6 9 6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
      {open && (
        <div className="ml-3 border-l border-slate-100 pl-3">
          {item.menu.map((sub) => (
            <a
              key={sub.label}
              href={sub.href}
              onClick={onNavigate}
              className="block rounded-lg px-3 py-2 text-sm text-slate-600 hover:bg-brand-50 hover:text-brand-700"
            >
              {sub.label}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}

const ICONS = {
  spark: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M12 3v4M12 17v4M3 12h4M17 12h4" strokeLinecap="round" /><circle cx="12" cy="12" r="3" />
    </svg>
  ),
  wrench: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M14.7 6.3a4 4 0 0 0-5 5L3 18l3 3 6.7-6.7a4 4 0 0 0 5-5l-2.5 2.5-2.5-.5-.5-2.5 2.5-2.5Z" strokeLinejoin="round" />
    </svg>
  ),
  trend: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M3 17l6-6 4 4 7-7M14 5h6v6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  bolt: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M13 2 4 14h7l-1 8 9-12h-7l1-8Z" strokeLinejoin="round" />
    </svg>
  ),
  flow: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <circle cx="5" cy="6" r="2" /><circle cx="5" cy="18" r="2" /><circle cx="19" cy="12" r="2" />
      <path d="M7 6h6a4 4 0 0 1 0 8H7" strokeLinecap="round" />
    </svg>
  ),
  shield: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M12 3 5 6v5c0 4 3 6.5 7 8 4-1.5 7-4 7-8V6l-7-3Z" strokeLinejoin="round" />
    </svg>
  ),
  ai: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <rect x="5" y="5" width="14" height="14" rx="3" /><path d="M9 9h6v6H9z" />
    </svg>
  ),
  web: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <rect x="3" y="4" width="18" height="16" rx="2" /><path d="M3 9h18" />
    </svg>
  ),
  app: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="m8 6-5 6 5 6M16 6l5 6-5 6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  mobile: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <rect x="7" y="2" width="10" height="20" rx="2.5" /><path d="M11 18h2" strokeLinecap="round" />
    </svg>
  ),
  team: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <circle cx="9" cy="8" r="3" /><path d="M4 20a5 5 0 0 1 10 0M15 6a3 3 0 0 1 0 6" strokeLinecap="round" />
    </svg>
  ),
  blog: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <rect x="4" y="4" width="16" height="16" rx="2" /><path d="M8 9h8M8 13h5" strokeLinecap="round" />
    </svg>
  ),
  folder: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z" strokeLinejoin="round" />
    </svg>
  ),
};
