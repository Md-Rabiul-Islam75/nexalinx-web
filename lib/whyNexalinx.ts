import type { Block, CompareTable, Faq, PageHero, Quote } from "./contentTypes";

/**
 * Content for /why-nexalinx. Same contract as howWeWork — every section reads
 * from an array so a CMS can rewrite the copy without touching the layout.
 */

export const WHY_HERO: PageHero = {
  eyebrow: "Why Nexalinx",
  headline: ["More accountable than freelancers.", "Faster than enterprise agencies."],
  intro:
    "Nexalinx helps USA and European founders, SMEs and agencies design, build and scale AI-powered web and mobile products — with senior-led engineering, flexible delivery and genuine cost efficiency.",
  stats: [
    { value: "USA & EU", label: "markets served" },
    { value: "Senior-led", label: "every engagement" },
    { value: "40+", label: "products shipped" },
    { value: "AI · Web · Mobile", label: "under one roof" },
  ],
  primaryCta: { label: "Book a Discovery Call", href: "/book" },
  secondaryCta: { label: "How we deliver", href: "/how-we-work" },
};

export const DIFFERENTIATION: Quote = {
  text: "More accountable than freelancers, faster than enterprise agencies, and more production-ready than no-code prototypes.",
  attribution: "The Nexalinx difference, in one line",
};

/** The five messaging pillars */
export const PILLARS: Block[] = [
  {
    tag: "01",
    title: "AI-first, not AI-hype",
    body: "Practical use cases only — internal automation, chatbots, RAG assistants, document processing and analytics that move a number you already track. If AI isn't the right answer, we'll say so.",
    icon: "ai",
    accent: "brand",
  },
  {
    tag: "02",
    title: "Production-ready engineering",
    body: "Security, scalability, maintainability, QA, DevOps, code ownership and documentation built in from the start — not bolted on once something breaks in front of a customer.",
    icon: "shield",
    accent: "emerald",
  },
  {
    tag: "03",
    title: "Founder-friendly process",
    body: "A clear path from idea to blueprint to design to MVP to launch to iterate, with a working demo every week. You never have to ask what's happening.",
    icon: "flow",
    accent: "violet",
  },
  {
    tag: "04",
    title: "Agency-friendly delivery",
    body: "A silent white-label team under NDA. You keep the client relationship and the credit; we handle delivery, fast communication and a clean handover.",
    icon: "team",
    accent: "amber",
  },
  {
    tag: "05",
    title: "Cost-efficient global team",
    body: "US and EU-facing communication with real timezone overlap, paired with senior engineering at a cost structure a domestic agency cannot match.",
    icon: "trend",
    accent: "indigo",
  },
];

/** Honest comparison against the real alternatives a buyer is weighing */
export const COMPARISON: CompareTable = {
  columns: [
    { id: "freelancer", label: "Freelancers", note: "Upwork, Fiverr" },
    { id: "enterprise", label: "Enterprise agency", note: "Large consultancies" },
    { id: "nocode", label: "AI / no-code builders", note: "Bolt, Lovable, Bubble" },
    { id: "nexalinx", label: "Nexalinx", note: "Product engineering team", highlight: true },
  ],
  rows: [
    {
      criterion: "Accountability",
      values: {
        freelancer: "Single-person dependency",
        enterprise: "Strong, but layered",
        nocode: "None — it's a tool",
        nexalinx: "Named tech lead answers for delivery",
      },
      best: "nexalinx",
    },
    {
      criterion: "Speed to first release",
      values: {
        freelancer: "Fast, then unpredictable",
        enterprise: "Months of onboarding first",
        nocode: "Days to a prototype",
        nexalinx: "8–14 weeks to a real MVP",
      },
      best: "nexalinx",
    },
    {
      criterion: "Production readiness",
      values: {
        freelancer: "Inconsistent",
        enterprise: "High",
        nocode: "Prototype-grade only",
        nexalinx: "Security, QA, DevOps, docs included",
      },
      best: "nexalinx",
    },
    {
      criterion: "Cost",
      values: {
        freelancer: "Lowest",
        enterprise: "Highest",
        nocode: "Low until it must scale",
        nexalinx: "Senior work at a global rate",
      },
      best: "nexalinx",
    },
    {
      criterion: "Continuity & cover",
      values: {
        freelancer: "Disappears without warning",
        enterprise: "Team rotation",
        nocode: "You maintain it",
        nexalinx: "PM, QA and cover behind every dev",
      },
      best: "nexalinx",
    },
    {
      criterion: "Code & IP ownership",
      values: {
        freelancer: "Usually yours",
        enterprise: "Contract-dependent",
        nocode: "Locked to the platform",
        nexalinx: "Yours from the first commit",
      },
      best: "nexalinx",
    },
  ],
};

/** What we bring — the strengths a buyer can verify */
export const STRENGTHS: Block[] = [
  {
    title: "USA setup, international orientation",
    body: "A USA presence, contracts and communication built for US and EU buyers — not an offshore shop learning the market on your project.",
    icon: "map",
    accent: "brand",
  },
  {
    title: "AI, web and mobile in one team",
    body: "One partner across all three, so an AI feature, its web app and its mobile client don't need three vendors and a translator between them.",
    icon: "layers",
    accent: "violet",
  },
  {
    title: "Complex product experience",
    body: "Crypto wallets, real-time collaboration canvases, offline-first logistics apps — systems where the hard part isn't the UI.",
    icon: "cpu",
    accent: "emerald",
  },
  {
    title: "Founder-led technical judgement",
    body: "Leadership that understands both the engineering and the business case, so scope conversations are about outcomes rather than hours.",
    icon: "spark",
    accent: "amber",
  },
  {
    title: "Referral-grade trust",
    body: "Most of our work has come from clients recommending us. That standard is the one we're protecting on your project too.",
    icon: "users",
    accent: "indigo",
  },
  {
    title: "Genuine cost advantage",
    body: "Senior engineers at a rate that lets a bootstrapped founder ship a real product — without paying for a downtown office.",
    icon: "chart",
    accent: "accent",
  },
];

/** Objection handling — the offshore risks buyers actually worry about */
export const TRUST: Block[] = [
  {
    title: "Quality",
    body: "Senior-only engineers, code review on every merge, automated tests on critical paths and a QA engineer on the team — with a weekly demo you can judge for yourself.",
    icon: "check",
  },
  {
    title: "Communication",
    body: "Four to six hours of daily overlap with your working day, a named PM, a shared Slack channel and a response SLA written into the agreement.",
    icon: "chat",
  },
  {
    title: "Security",
    body: "NDA as standard, least-privilege access, secrets managed properly, work inside your cloud accounts on request, and GDPR-ready data handling for EU clients.",
    icon: "lock",
  },
  {
    title: "Timeline",
    body: "Milestone-based delivery with a fixed scope. Slippage shows up in a weekly demo rather than in a difficult conversation three months later.",
    icon: "gauge",
  },
  {
    title: "Ownership",
    body: "You own the code, the IP and the accounts from day one. Documented handover is part of every build, not an upsell.",
    icon: "book",
  },
  {
    title: "Exit",
    body: "Rolling monthly terms on retainers and no lock-in on projects. We'd rather earn the next month than trap you in a contract.",
    icon: "sync",
  },
];

export const WHY_FAQS: Faq[] = [
  {
    q: "Why not just hire a freelancer?",
    a: "For a small, well-defined task, you probably should. The difference shows up when the project is long enough for someone to get ill, take another contract or simply stop replying — a team has a lead, a PM, documentation and cover; a freelancer has none of those.",
  },
  {
    q: "You're cheaper than a US agency. What's the catch?",
    a: "Geography, and that's genuinely it. Our engineers are senior and our process is the one on this page; what you're not paying for is a domestic cost base. If the work were weaker we'd have to compete on price forever, which is a bad business to be in.",
  },
  {
    q: "We already built a prototype with an AI tool. Is it wasted?",
    a: "Not at all — it's the best possible brief. It shows us exactly what you want, and we can often reuse the data model and flows. What it can't usually survive is real users, real security requirements and real scale, which is the part we build.",
  },
  {
    q: "How do you handle GDPR and EU data requirements?",
    a: "EU hosting regions, data processing agreements, documented retention and deletion, and no personal data flowing into third-party AI providers without an explicit, agreed basis. For regulated clients we work inside your own cloud accounts.",
  },
  {
    q: "Can you sign an NDA before we discuss the idea?",
    a: "Yes, and it costs nothing. Send yours or use ours — either way it's signed before the discovery call if you'd prefer to talk freely.",
  },
];
