import type { IconKey, Accent } from "./services";
import type { Faq } from "./contentTypes";

/**
 * Solutions are problem-led entry points: a buyer arrives describing a
 * situation, not a technology. Each one routes into the service lanes that
 * deliver it.
 *
 * Same CMS contract as the rest of the site — all copy lives in this file and
 * every section renders from an array, so counts can change without breaking
 * the layout.
 */
export type Solution = {
  slug: string;
  navLabel: string;
  name: string;
  eyebrow: string;
  /** One-line description used in nav, cards and meta */
  summary: string;
  headline: [string, string];
  intro: string;
  accent: Accent;
  icon: IconKey;
  stats: { value: string; label: string }[];
  /** "Sounds familiar?" — the symptoms a buyer recognises themselves in */
  symptoms: string[];
  /** What it's costing them to stay where they are */
  cost: { title: string; body: string; icon: IconKey }[];
  /** How we solve it, step by step */
  approach: { step: string; title: string; desc: string }[];
  /** Concrete things they receive */
  deliverables: string[];
  /** Business results */
  outcomes: string[];
  /** The productized way in */
  offer: {
    name: string;
    price: string;
    timeline: string;
    desc: string;
    includes: string[];
  };
  /** Service lane slugs that power this solution */
  services: string[];
  faqs: Faq[];
};

export const SOLUTIONS: Solution[] = [
  /* ------------------------------------------------------------------ */
  {
    slug: "starting-from-an-idea",
    navLabel: "Starting from an idea",
    name: "Starting from an idea",
    eyebrow: "Idea → MVP",
    summary:
      "Turn a concept into a working MVP — scoped, costed and built by a senior team before your runway or your patience runs out.",
    headline: ["You have the idea.", "You need it built properly."],
    intro:
      "The riskiest moment in a product's life is the gap between the idea and the first working version. Most of that risk isn't technical — it's building the wrong thing, with the wrong team, at a cost nobody agreed upfront. We close all three.",
    accent: "violet",
    icon: "rocket",
    stats: [
      { value: "1–2 wks", label: "idea to costed plan" },
      { value: "8–14 wks", label: "plan to live MVP" },
      { value: "Fixed", label: "scope and price" },
      { value: "100%", label: "code & IP yours" },
    ],
    symptoms: [
      "You've been quoted wildly different numbers by different developers",
      "You're not technical, and you can't tell a good proposal from a bad one",
      "The idea keeps growing every time you describe it",
      "You need something real to show investors, partners or first customers",
      "A previous team started, then quietly went quiet",
    ],
    cost: [
      {
        title: "Building the wrong thing",
        body: "Most failed MVPs weren't built badly — they were built completely, for a market that hadn't been tested. Scope discipline is the cheapest insurance you can buy.",
        icon: "search",
      },
      {
        title: "Losing months to the wrong team",
        body: "A vendor that stalls at week six doesn't just cost the fee. It costs the quarter, the momentum and often the raise.",
        icon: "gauge",
      },
      {
        title: "A codebase v2 can't build on",
        body: "Cheap now, rewritten later, is the most expensive way to build software. We build the MVP as the foundation, not the throwaway.",
        icon: "layers",
      },
    ],
    approach: [
      {
        step: "01",
        title: "Discovery call",
        desc: "Free, 30–45 minutes. What the product is, who it's for, what budget is real — and an honest answer on whether we're right for it.",
      },
      {
        step: "02",
        title: "Blueprint sprint",
        desc: "One to two weeks producing the PRD, clickable wireframes, tech stack, timeline and budget. Yours to keep, even if you build elsewhere.",
      },
      {
        step: "03",
        title: "Cut to the core",
        desc: "We argue for the smallest version that proves someone will pay. Everything else goes on a v2 list rather than into the budget.",
      },
      {
        step: "04",
        title: "Build in sprints",
        desc: "Two-week cycles, a working demo every Friday, and a backlog you can reprioritise as you learn from early users.",
      },
      {
        step: "05",
        title: "Launch & learn",
        desc: "QA, security pass, analytics and deploy — then a roadmap driven by what real users actually did, not what we assumed.",
      },
    ],
    deliverables: [
      "PRD, feature list and clickable wireframes",
      "UI design and a reusable component system",
      "A working, deployed MVP on your infrastructure",
      "Admin panel to run the product day to day",
      "Documentation, repo access and full handover",
      "30 days of post-launch support",
    ],
    outcomes: [
      "Something real in front of users inside a quarter",
      "Evidence for your raise — usage, retention and a live demo",
      "A fixed number you can plan around instead of an open meter",
      "A codebase your future in-house team will thank you for",
    ],
    offer: {
      name: "MVP Blueprint Sprint",
      price: "One-time",
      timeline: "1–2 weeks",
      desc: "Start with the plan, not the build. You leave with everything needed to make a confident decision — including whether to work with us at all.",
      includes: [
        "PRD & clickable wireframes",
        "Feature list & tech stack",
        "Timeline & budget range",
        "Yours to keep, unconditionally",
      ],
    },
    services: ["web-app-saas-mvp", "mobile-app-development", "ai-development-automation"],
    faqs: [
      {
        q: "I don't have a technical co-founder. Is that a problem?",
        a: "It's the situation we're built for. The tech lead effectively plays that role during the build — architecture decisions, trade-offs and vendor choices get explained in business terms, and you approve them.",
      },
      {
        q: "How do I know the budget won't triple?",
        a: "Because the scope is fixed in writing before the build starts, and changes are priced and approved individually. The Blueprint exists precisely so the number is grounded in a real plan rather than a guess.",
      },
      {
        q: "What if I only have part of the budget?",
        a: "Then build less, not worse. We'll cut scope to the core loop that proves the idea and stage the rest. A half-funded full product is the one outcome we'd talk you out of.",
      },
      {
        q: "Do I have to sign for the whole build after the Blueprint?",
        a: "No. The Blueprint is a standalone, paid engagement. Roughly a third of clients take the plan and build it with another team or in-house, and that's a legitimate outcome.",
      },
    ],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: "recovering-a-bad-build",
    navLabel: "Recovering a bad build",
    name: "Recovering a bad build",
    eyebrow: "App rescue",
    summary:
      "Rescue a slow, buggy or stalled product — an honest audit of what's salvageable, then a senior team to stabilise and finish it.",
    headline: ["Your app is stuck.", "Let's find out how bad it really is."],
    intro:
      "A previous vendor went quiet. The app crashes under load. Nobody left on the team understands the codebase. Before anyone proposes a rewrite, you deserve an independent, evidence-based read of what's actually wrong and what it costs to fix.",
    accent: "emerald",
    icon: "wrench",
    stats: [
      { value: "1–2 wks", label: "to a full diagnosis" },
      { value: "Evidence", label: "before any rewrite call" },
      { value: "Fixed", label: "price on the audit" },
      { value: "2–4 wks", label: "typical stabilisation" },
    ],
    symptoms: [
      "Your vendor has gone quiet, slow or defensive",
      "The app is live but slow, crashing or losing data",
      "Nobody currently on the team understands the codebase",
      "Every new feature seems to break two old ones",
      "You've been told the only option is a full rewrite",
      "You don't have the repository, the credentials or the documentation",
    ],
    cost: [
      {
        title: "Customers leaving quietly",
        body: "Most users don't file a bug report — they uninstall. Crash rates and slow pages are churn you never get to argue with.",
        icon: "trend",
      },
      {
        title: "Paying twice for the same work",
        body: "Every month spent patching a system nobody understands is money spent twice: once now, and again in the eventual fix.",
        icon: "card",
      },
      {
        title: "A rewrite you may not need",
        body: "Rewrites are the default recommendation of whoever wants the next contract. Often the real problem is a handful of queries and a missing cache layer.",
        icon: "search",
      },
    ],
    approach: [
      {
        step: "01",
        title: "Triage call",
        desc: "Free, 30–45 minutes. What's broken, what's urgent, what access exists — and whether this is a stabilisation job or something larger.",
      },
      {
        step: "02",
        title: "Code & architecture audit",
        desc: "One to two weeks inside the codebase: quality, security, performance, dependencies, test coverage and the actual state of the infrastructure.",
      },
      {
        step: "03",
        title: "The honest verdict",
        desc: "What's salvageable, what should be rewritten, what it costs either way — written down, with evidence, including the option to walk away from us.",
      },
      {
        step: "04",
        title: "Stabilise first",
        desc: "Stop the bleeding before adding anything: critical bugs, security holes, the worst performance offenders, monitoring so failures surface early.",
      },
      {
        step: "05",
        title: "Rebuild or continue",
        desc: "With the product stable, we either resume the roadmap or replace components incrementally — never a big-bang rewrite with the lights off.",
      },
    ],
    deliverables: [
      "Written audit of code, architecture and security",
      "Prioritized issue list ranked by risk and effort",
      "Salvage-vs-rewrite recommendation, with costs",
      "Stabilisation pass on critical bugs and bottlenecks",
      "Monitoring, error tracking and alerting set up",
      "Recovered access: repos, cloud accounts, credentials",
    ],
    outcomes: [
      "An independent second opinion you can act on",
      "A product that stops getting worse while you decide",
      "Measured performance improvement, before and after",
      "Control of your own infrastructure and code again",
    ],
    offer: {
      name: "App Rescue Audit",
      price: "Fixed price",
      timeline: "1–2 weeks",
      desc: "An independent diagnosis with no rewrite agenda attached. If the honest answer is that your current team should finish it, that's what the report will say.",
      includes: [
        "Full code & architecture review",
        "Security and performance findings",
        "Prioritized remediation plan",
        "Salvage vs. rewrite verdict with costs",
      ],
    },
    services: ["critical-product-engineering", "web-app-saas-mvp", "dedicated-team-cto-support"],
    faqs: [
      {
        q: "Will you just tell us to rebuild it from scratch?",
        a: "Only if the evidence says so, and the report will show you that evidence. A rewrite is occasionally right, but it's recommended far more often than it's warranted — usually by whoever would be paid to do it.",
      },
      {
        q: "We don't have access to the code. Can you still help?",
        a: "Often, yes. Recovering repository, cloud and domain access is a normal first step in a rescue, and we can work from a deployed build to assess the situation while that's in progress.",
      },
      {
        q: "Our previous developer is still involved. Is this awkward?",
        a: "It doesn't need to be. Many audits end with a plan the existing team executes — the value is an independent read, not a change of vendor. We can also run it confidentially if you'd prefer.",
      },
      {
        q: "How fast can you start?",
        a: "Usually within a week for an audit, and immediately for a genuine production emergency. Tell us on the triage call if something is actively down.",
      },
    ],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: "scaling-what-you-built",
    navLabel: "Scaling what you've built",
    name: "Scaling what you've built",
    eyebrow: "Growth engineering",
    summary:
      "Add features, speed and reliability to a product that's working — with senior capacity you don't have to spend six months hiring.",
    headline: ["It's working.", "Now it has to hold."],
    intro:
      "Growth breaks things that were fine at a smaller size — the roadmap outruns the team, the database starts groaning, and the founder becomes the bottleneck. This is capacity and engineering leadership, added without a twelve-month hiring plan.",
    accent: "amber",
    icon: "trend",
    stats: [
      { value: "2 wks", label: "to a working team" },
      { value: "4–6 hrs", label: "daily overlap" },
      { value: "Monthly", label: "rolling — no lock-in" },
      { value: "99.9%", label: "uptime targets" },
    ],
    symptoms: [
      "The roadmap is growing faster than the team can ship",
      "Hiring senior engineers is taking months you don't have",
      "Performance is degrading as usage climbs",
      "Technical debt is now slowing every new feature",
      "There's no CTO, and architecture decisions keep getting deferred",
      "Enterprise prospects are asking security questions you can't answer",
    ],
    cost: [
      {
        title: "A roadmap that keeps slipping",
        body: "Features promised to customers and investors that arrive two quarters late cost credibility long before they cost revenue.",
        icon: "gauge",
      },
      {
        title: "Debt compounding quietly",
        body: "Every quarter deferred makes the next feature more expensive. Debt doesn't stay still — it charges interest in engineering time.",
        icon: "layers",
      },
      {
        title: "Deals lost on infrastructure",
        body: "Uptime, security posture and compliance answers decide enterprise deals. Those are engineering problems that show up in the sales pipeline.",
        icon: "shield",
      },
    ],
    approach: [
      {
        step: "01",
        title: "Capacity & health review",
        desc: "Where the roadmap is blocked, where the system strains, and which of those is actually costing you money today.",
      },
      {
        step: "02",
        title: "Team assembly",
        desc: "Named engineers with profiles and interviews, sized to the gap. You approve every person before they start.",
      },
      {
        step: "03",
        title: "Two-week onboarding",
        desc: "Access, context, codebase walkthrough and a first shipped ticket inside the first fortnight — running in your process, not ours.",
      },
      {
        step: "04",
        title: "Ship and stabilise in parallel",
        desc: "Feature work on one track, performance, reliability and debt reduction on the other, so growth doesn't come at the cost of stability.",
      },
      {
        step: "05",
        title: "Review & scale",
        desc: "Monthly delivery review with velocity and quality reporting, and headcount adjusted up or down as the roadmap changes.",
      },
    ],
    deliverables: [
      "A named, approved squad embedded in your process",
      "Tech lead or fractional CTO accountability",
      "Feature releases on your existing roadmap",
      "Performance profiling and measured optimisation",
      "CI/CD, monitoring and infrastructure-as-code",
      "Architecture documentation as the system grows",
    ],
    outcomes: [
      "Roadmap velocity restored without a hiring cycle",
      "Latency and cost reduced with before-and-after numbers",
      "Incidents caught by monitoring rather than by customers",
      "Predictable monthly cost, no recruitment fees or severance risk",
    ],
    offer: {
      name: "Dedicated Squad",
      price: "Monthly",
      timeline: "Rolling",
      desc: "A cross-functional team working as your engineering department — scale it up or down each month as the roadmap moves.",
      includes: [
        "Named, approved engineers",
        "Tech lead accountability",
        "QA and DevOps behind every dev",
        "One month's notice, no annual lock-in",
      ],
    },
    services: ["dedicated-team-cto-support", "critical-product-engineering", "web-app-saas-mvp"],
    faqs: [
      {
        q: "How is this different from hiring contractors?",
        a: "A contractor is one person with no backup and nobody accountable above them. You get a named team with a tech lead responsible for delivery, QA and DevOps support behind them, and cover when someone is ill or away.",
      },
      {
        q: "Can your team work inside our existing process?",
        a: "That's the default. Your board, your standups, your definition of done, your repository. We adapt to you — imposing our process on a team that already has one is how these engagements fail.",
      },
      {
        q: "What if we need to scale back down?",
        a: "One month's notice on a rolling agreement. Scaling down is a normal part of the arrangement, not a renegotiation, and we'd rather earn the renewal each month than hold you to a year.",
      },
      {
        q: "Do we get a CTO or just developers?",
        a: "Either. Some clients take a fractional CTO alone for architecture, hiring and roadmap ownership; others take a full squad with a tech lead inside it. We'll recommend which fits after the review.",
      },
    ],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: "prototype-to-production",
    navLabel: "Prototype to production",
    name: "From prototype to production",
    eyebrow: "AI & no-code → real software",
    summary:
      "Make a no-code or AI-generated prototype production-ready — real security, real scale, real ownership, built on what you've already proven.",
    headline: ["AI can build a prototype.", "We make it production-ready."],
    intro:
      "You built something in Bolt, Lovable, v0, Replit or Bubble, and it works well enough that people want to use it. That's a genuine achievement — and also the exact point where prototype tooling stops being an asset and starts being a liability.",
    accent: "brand",
    icon: "bolt",
    stats: [
      { value: "Your prototype", label: "is the best brief" },
      { value: "6–12 wks", label: "typical hardening" },
      { value: "Zero", label: "platform lock-in after" },
      { value: "100%", label: "code & IP yours" },
    ],
    symptoms: [
      "The prototype works, but you can't put real customer data in it",
      "Costs climb steeply as usage grows",
      "You can't pass a security review or a customer questionnaire",
      "It breaks in ways nobody can debug or explain",
      "You're locked into a platform you can't export from",
      "Every new feature is now a workaround on a workaround",
    ],
    cost: [
      {
        title: "A ceiling you'll hit anyway",
        body: "Prototype platforms are excellent at proving an idea and poor at carrying it. The migration isn't avoidable — only delayable, at increasing cost.",
        icon: "gauge",
      },
      {
        title: "Security you can't evidence",
        body: "Auth, access control, data isolation and audit logging are where prototypes are thinnest, and exactly where your first serious customer will look.",
        icon: "lock",
      },
      {
        title: "Ownership you don't have",
        body: "If the platform disappears, changes pricing or throttles you, a product you can't export is a business you don't fully control.",
        icon: "shield",
      },
    ],
    approach: [
      {
        step: "01",
        title: "Prototype review",
        desc: "We go through what you've built — flows, data model, integrations — and identify what to carry over and what was a platform workaround.",
      },
      {
        step: "02",
        title: "Migration plan",
        desc: "A phased path off the platform: what gets rebuilt first, what runs in parallel, and how users move across without an outage.",
      },
      {
        step: "03",
        title: "Rebuild the foundation",
        desc: "Real database, real auth, real API, proper access control — with your proven flows and UI preserved rather than reimagined.",
      },
      {
        step: "04",
        title: "Harden it",
        desc: "Security review, load testing, error tracking, automated tests on critical paths, and CI/CD so releases stop being events.",
      },
      {
        step: "05",
        title: "Cut over & extend",
        desc: "A staged switch with rollback, then the features the prototype could never support — on a codebase that can carry them.",
      },
    ],
    deliverables: [
      "Assessment of the prototype: keep, rebuild, discard",
      "Phased migration plan with no big-bang cutover",
      "Production codebase in your repository",
      "Proper auth, roles, data isolation and audit logging",
      "Automated tests, CI/CD and monitoring",
      "Data migration with verification and rollback",
    ],
    outcomes: [
      "A product that survives real users, real data and real scale",
      "Security answers you can put in front of an enterprise buyer",
      "Predictable infrastructure cost instead of per-seat platform pricing",
      "Complete ownership — no platform can switch you off",
    ],
    offer: {
      name: "Production-Readiness Review",
      price: "Fixed price",
      timeline: "1 week",
      desc: "A structured read of your prototype against what production actually demands, with a phased plan and a costed route off the platform.",
      includes: [
        "Prototype & data model review",
        "Security and scale gap analysis",
        "Phased migration plan",
        "Costed timeline to production",
      ],
    },
    services: ["web-app-saas-mvp", "ai-development-automation", "critical-product-engineering"],
    faqs: [
      {
        q: "Was building the prototype a waste of money?",
        a: "The opposite — it's the most valuable brief a client can arrive with. It shows exactly what you want, has usually been tested on real people, and removes most of the ambiguity that makes early scoping expensive.",
      },
      {
        q: "Can you keep the design we already have?",
        a: "Usually yes, and we'd encourage it if users respond well to it. We rebuild the foundation underneath and preserve the interface, tightening it rather than restarting.",
      },
      {
        q: "Do we have to migrate everything at once?",
        a: "No, and we'd advise against it. The normal path runs the prototype and the new system in parallel, moving one area at a time with rollback available at each step.",
      },
      {
        q: "Do you use AI tools yourselves?",
        a: "Heavily — internally, to move faster. The difference is what happens after generation: architecture review, tests, security and someone accountable for the result. The tool isn't the problem; shipping its raw output is.",
      },
    ],
  },
];

export function getSolution(slug: string): Solution | undefined {
  return SOLUTIONS.find((s) => s.slug === slug);
}
