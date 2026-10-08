"use client";

import { useEffect, useRef, useState } from "react";

import { Logo } from "./Logo";
import { ServiceIcon } from "./ServiceIcon";
import type { IconKey, Accent } from "@/lib/services";
import { ACCENTS } from "@/lib/serviceTheme";
import { ARTICLES, CATEGORY_META } from "@/lib/insights";

type SubItem = {
  label: string;
  desc?: string;
  href: string;
  icon: IconKey;
  accent?: Accent;
};

type NavItem = {
  label: string;
  href?: string;
  menu?: SubItem[];
  /** Panel width — sized per group so labels never wrap awkwardly */
  width?: string;
  /** Optional promoted row pinned to the bottom of the panel */
  footer?: { label: string; href: string; icon: IconKey };
};

const NAV: NavItem[] = [
  {
    label: "Solutions",
    href: "/solutions",
    width: "w-[23rem]",
    footer: { label: "See all four solutions", href: "/solutions", icon: "grid" },
    menu: [
      {
        label: "Starting from an idea",
        desc: "Turn a concept into a working MVP",
        href: "/solutions/starting-from-an-idea",
        icon: "rocket",
        accent: "violet",
      },
      {
        label: "Recovering a bad build",
        desc: "Rescue a slow, buggy or stalled app",
        href: "/solutions/recovering-a-bad-build",
        icon: "wrench",
        accent: "emerald",
      },
      {
        label: "Scaling what you've built",
        desc: "Add features, speed & reliability",
        href: "/solutions/scaling-what-you-built",
        icon: "trend",
        accent: "amber",
      },
      {
        label: "Prototype to production",
        desc: "Make no-code / AI prototypes production-ready",
        href: "/solutions/prototype-to-production",
        icon: "bolt",
        accent: "brand",
      },
    ],
  },
  {
    label: "Why Nexalinx",
    href: "/why-nexalinx",
    width: "w-[22rem]",
    menu: [
      {
        label: "How we work",
        desc: "Idea → blueprint → build → launch",
        href: "/how-we-work",
        icon: "flow",
        accent: "brand",
      },
      {
        label: "Our difference",
        desc: "Accountable, fast, production-ready",
        href: "/why-nexalinx",
        icon: "shield",
        accent: "emerald",
      },
      {
        label: "Risk reversal",
        desc: "Scope, milestones, demos & handover",
        href: "/how-we-work#guarantees",
        icon: "check",
        accent: "violet",
      },
    ],
  },
  { label: "Success Stories", href: "/success-stories" },
  {
    label: "Services",
    href: "/services",
    width: "w-[24rem]",
    footer: { label: "Compare all six services", href: "/services", icon: "grid" },
    menu: [
      {
        label: "AI Development & Automation",
        desc: "Chatbots, RAG, agents & workflow automation",
        href: "/services/ai-development-automation",
        icon: "ai",
        accent: "brand",
      },
      {
        label: "Web Design & Conversion",
        desc: "Sites that generate leads, not compliments",
        href: "/services/web-design-conversion",
        icon: "web",
        accent: "accent",
      },
      {
        label: "Web App / SaaS MVP",
        desc: "MVPs, portals, dashboards & subscription SaaS",
        href: "/services/web-app-saas-mvp",
        icon: "app",
        accent: "violet",
      },
      {
        label: "Mobile App Development",
        desc: "iOS & Android from one codebase",
        href: "/services/mobile-app-development",
        icon: "mobile",
        accent: "indigo",
      },
      {
        label: "Critical Product Engineering",
        desc: "Fintech, crypto & high-performance systems",
        href: "/services/critical-product-engineering",
        icon: "shield",
        accent: "emerald",
      },
      {
        label: "Dedicated Team / CTO Support",
        desc: "A senior squad, white-label if you need it",
        href: "/services/dedicated-team-cto-support",
        icon: "team",
        accent: "amber",
      },
    ],
  },
  {
    label: "Insights",
    href: "/insights",
    width: "w-[22rem]",
    menu: [
      {
        label: "Blog",
        desc: "AI, MVP & product engineering notes",
        href: "/insights",
        icon: "blog",
        accent: "brand",
      },
      {
        label: "Founder Resources",
        desc: "Guides, checklists & templates",
        href: "/insights/resources",
        icon: "folder",
        accent: "violet",
      },
      // Lead articles, so the menu offers a destination and not just a section
      ...ARTICLES.slice(0, 2).map((a): SubItem => {
        const meta = CATEGORY_META[a.category];
        return {
          label: a.navTitle,
          desc: `${meta.label} · ${a.readingTime}`,
          href: `/insights/${a.slug}`,
          icon: "doc",
          accent: meta.accent,
        };
      }),
    ],
  },
  { label: "Contact", href: "/contact" },
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
        <a href="/" aria-label="Nexalinx home">
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
                {/* The label is a real link to the group's landing page; hover/focus opens the menu */}
                <a
                  href={item.href}
                  onFocus={() => openWith(item.label)}
                  onClick={() => setOpenMenu(null)}
                  className={`flex items-center gap-1 rounded-full px-3.5 py-2 text-sm font-medium transition-colors ${
                    dark ? "text-white/85 hover:text-white" : "text-slate-600 hover:text-brand-600"
                  }`}
                  aria-haspopup="true"
                  aria-expanded={openMenu === item.label}
                >
                  {item.label}
                  <svg
                    width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"
                    className={`transition-transform ${openMenu === item.label ? "rotate-180" : ""}`}
                  >
                    <path d="m6 9 6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>

                {openMenu === item.label && (
                  <div
                    className="absolute left-0 top-full pt-3"
                    onMouseEnter={() => openWith(item.label)}
                    onMouseLeave={scheduleClose}
                  >
                    <div
                      className={`${item.width ?? "w-[22rem]"} animate-fade-up overflow-hidden rounded-2xl border border-slate-100 bg-white p-2 shadow-soft`}
                    >
                      {item.menu.map((sub) => (
                        <MenuRow key={sub.label} sub={sub} onNavigate={() => setOpenMenu(null)} />
                      ))}

                      {item.footer && (
                        <a
                          href={item.footer.href}
                          onClick={() => setOpenMenu(null)}
                          className="mt-1 flex items-center justify-between gap-3 rounded-xl border-t border-slate-100 px-3 py-3 text-sm font-semibold text-brand-600 transition-colors hover:bg-brand-50"
                        >
                          <span className="flex items-center gap-2.5">
                            <ServiceIcon name={item.footer.icon} className="h-4 w-4" />
                            {item.footer.label}
                          </span>
                          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                            <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </a>
                      )}
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
          <a href="/book" className="btn-primary">
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
            <a href="/book" onClick={() => setMobileOpen(false)} className="btn-primary mt-3 w-full">
              Book a Discovery Call
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

/**
 * A single dropdown row. The icon tile sits on a soft tint and fades into the
 * lane's full gradient on hover, so the menu reads as six distinct services
 * rather than six identical blue squares.
 */
function MenuRow({ sub, onNavigate }: { sub: SubItem; onNavigate: () => void }) {
  const a = ACCENTS[sub.accent ?? "brand"];
  return (
    <a
      href={sub.href}
      onClick={onNavigate}
      className="group flex items-center gap-3.5 rounded-xl p-2.5 transition-colors hover:bg-slate-50"
    >
      <span className="relative flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-xl">
        <span className={`absolute inset-0 ${a.soft}`} />
        <span
          className={`absolute inset-0 bg-gradient-to-br ${a.grad} opacity-0 transition-opacity duration-200 group-hover:opacity-100`}
        />
        <span className={`relative ${a.text} transition-colors duration-200 group-hover:text-white`}>
          <ServiceIcon name={sub.icon} className="h-[1.15rem] w-[1.15rem]" />
        </span>
      </span>

      <span className="min-w-0 flex-1">
        <span className="block text-[13.5px] font-semibold leading-snug text-ink">{sub.label}</span>
        {sub.desc && (
          <span className="mt-0.5 block text-[11.5px] leading-snug text-slate-500">{sub.desc}</span>
        )}
      </span>

      <svg
        width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"
        className="shrink-0 -translate-x-1 text-slate-300 opacity-0 transition-all duration-200 group-hover:translate-x-0 group-hover:text-brand-500 group-hover:opacity-100"
      >
        <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </a>
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
      {/* Label goes to the landing page; the chevron alone expands the submenu */}
      <div className="flex items-center rounded-lg hover:bg-slate-50">
        <a
          href={item.href}
          onClick={onNavigate}
          className="flex-1 px-3 py-2.5 text-sm font-semibold text-ink"
        >
          {item.label}
        </a>
        <button
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label={`${open ? "Collapse" : "Expand"} ${item.label} menu`}
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg text-ink hover:bg-slate-100"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"
            className={`transition-transform ${open ? "rotate-180" : ""}`}>
            <path d="m6 9 6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>
      {open && (
        <div className="ml-2 space-y-0.5 border-l border-slate-100 pl-2">
          {item.menu.map((sub) => {
            const a = ACCENTS[sub.accent ?? "brand"];
            return (
              <a
                key={sub.label}
                href={sub.href}
                onClick={onNavigate}
                className="flex items-center gap-3 rounded-lg px-2 py-2 hover:bg-slate-50"
              >
                <span className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg ${a.soft}`}>
                  <ServiceIcon name={sub.icon} className="h-4 w-4" />
                </span>
                <span className="text-sm font-medium text-slate-600">{sub.label}</span>
              </a>
            );
          })}
          {item.footer && (
            <a
              href={item.footer.href}
              onClick={onNavigate}
              className="flex items-center gap-3 rounded-lg px-2 py-2 text-sm font-semibold text-brand-600 hover:bg-brand-50"
            >
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-brand-50">
                <ServiceIcon name={item.footer.icon} className="h-4 w-4" />
              </span>
              {item.footer.label}
            </a>
          )}
        </div>
      )}
    </div>
  );
}
