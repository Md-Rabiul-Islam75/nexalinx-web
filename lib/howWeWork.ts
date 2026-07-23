import type { Block, Faq, PageHero, Phase } from "./contentTypes";

/**
 * Content for /how-we-work. Everything an editor touches lives here — the page
 * component reads these arrays and never assumes their length.
 */

export const HOW_HERO: PageHero = {
  eyebrow: "How we work",
  headline: ["Idea to launch,", "with nothing hidden in between"],
  intro:
    "The single biggest fear in hiring an offshore team is not knowing what's happening. So we built the opposite: a fixed six-phase path, a working demo every week, and code you own from the first commit.",
  stats: [
    { value: "6", label: "phases, always the same" },
    { value: "Weekly", label: "working demo" },
    { value: "4–6 hrs", label: "US/EU overlap daily" },
    { value: "100%", label: "code & IP yours" },
  ],
  primaryCta: { label: "Book a Discovery Call", href: "/book" },
  secondaryCta: { label: "See the guarantees", href: "#guarantees" },
};

export const PHASES: Phase[] = [
  {
    step: "01",
    title: "Discovery",
    duration: "30–45 min · free",
    summary:
      "A working call, not a sales pitch. We dig into the problem, the constraints, the budget reality and who has to sign off — then tell you honestly whether we're the right team.",
    deliverables: ["Problem & goal written down", "Rough budget and timeline range", "An honest go / no-go"],
    icon: "chat",
    accent: "brand",
  },
  {
    step: "02",
    title: "Blueprint",
    duration: "1–2 weeks · paid",
    summary:
      "Before anyone writes code, we produce the plan: what gets built, in what order, on what stack, for what money. Yours to keep even if you build it elsewhere.",
    deliverables: ["PRD & feature list", "Clickable wireframes", "Tech stack, timeline & budget"],
    icon: "blog",
    accent: "violet",
  },
  {
    step: "03",
    title: "Design",
    duration: "2–3 weeks",
    summary:
      "Interface design and a component system built on the blueprint — reviewed with you screen by screen, so surprises happen in Figma where they're cheap.",
    deliverables: ["UI design for every core flow", "Reusable design system", "Prototype you can click through"],
    icon: "pen",
    accent: "accent",
  },
  {
    step: "04",
    title: "Build",
    duration: "4–12 weeks",
    summary:
      "Two-week sprints against a backlog you can reprioritise. Every Friday there's a demo of working software — not a status report about working software.",
    deliverables: ["Working software every sprint", "Weekly demo & sprint notes", "Live staging environment"],
    icon: "code",
    accent: "indigo",
  },
  {
    step: "05",
    title: "Launch",
    duration: "1–2 weeks",
    summary:
      "QA, load checks, security review, analytics and monitoring — then deployment, store submission where relevant, and a documented handover of everything.",
    deliverables: ["QA & security pass", "Production deploy & monitoring", "Docs, repo access & handover"],
    icon: "rocket",
    accent: "emerald",
  },
  {
    step: "06",
    title: "Iterate",
    duration: "Ongoing · optional",
    summary:
      "Real usage data replaces guesswork. Features, fixes, DevOps and AI improvements on a monthly retainer — or take the codebase in-house, no lock-in either way.",
    deliverables: ["Roadmap from real usage", "Monthly feature releases", "Uptime & performance watch"],
    icon: "trend",
    accent: "amber",
  },
];

/** The communication rhythm — the answer to "how will I know what's going on?" */
export const CADENCE: Block[] = [
  {
    tag: "Every day",
    title: "Overlapping hours",
    body: "Four to six hours of daily overlap with US Eastern or Central European time, so a question gets answered the same day it's asked.",
    icon: "sync",
    accent: "brand",
  },
  {
    tag: "Every week",
    title: "Live demo",
    body: "A recorded walkthrough of what shipped this week, on the real staging environment. If a week produced nothing, you find out in seven days, not seven weeks.",
    icon: "dashboard",
    accent: "violet",
  },
  {
    tag: "Every sprint",
    title: "Plan & review",
    body: "A two-week cycle you help shape: what's next, what slipped, what changed. The backlog is yours to reprioritise at any point.",
    icon: "flow",
    accent: "accent",
  },
  {
    tag: "Always on",
    title: "Shared board & repo",
    body: "Your Jira or Linear board, your GitHub, your Slack channel. You can see every ticket and every commit without asking anyone.",
    icon: "layers",
    accent: "indigo",
  },
];

/** Who is actually on the engagement */
export const TEAM_ROLES: Block[] = [
  {
    title: "Tech lead",
    body: "One senior engineer accountable for architecture and delivery. Not a rotating pool — a named person who answers for the outcome.",
    icon: "cpu",
    accent: "brand",
  },
  {
    title: "Product manager",
    body: "Runs the sprint, the backlog and the reporting, so you're managing a roadmap rather than managing developers.",
    icon: "flow",
    accent: "violet",
  },
  {
    title: "Engineers",
    body: "Senior full-stack, mobile and AI engineers sized to the scope — you approve every person before they start.",
    icon: "users",
    accent: "indigo",
  },
  {
    title: "QA engineer",
    body: "Test strategy, automation and release verification, so quality is a process rather than a hope.",
    icon: "check",
    accent: "emerald",
  },
  {
    title: "DevOps",
    body: "CI/CD, environments, monitoring and cloud cost control — set up early, not bolted on at launch.",
    icon: "gauge",
    accent: "accent",
  },
  {
    title: "Designer",
    body: "UI and design-system work through the build, not just at the start, so later screens match the first ones.",
    icon: "pen",
    accent: "amber",
  },
];

/** Risk reversal — the promises attached to every engagement */
export const GUARANTEES: Block[] = [
  {
    title: "Clear scope",
    body: "A fixed, documented scope agreed before a line of code is written. Changes are priced and agreed, never assumed.",
    icon: "doc",
  },
  {
    title: "Milestone-based delivery",
    body: "You pay as stages ship. If we stop delivering, you stop paying — the incentive stays pointed the right way.",
    icon: "layers",
  },
  {
    title: "Weekly progress demo",
    body: "Working software every week on a live environment, so progress is something you watch rather than something you're told.",
    icon: "dashboard",
  },
  {
    title: "Documented handover",
    body: "Code, architecture docs, environment access and credentials handed over in full. You own the IP from the first commit.",
    icon: "book",
  },
  {
    title: "Maintenance option",
    body: "Ongoing support and improvement if you want it — and a clean exit if you'd rather take it in-house.",
    icon: "wrench",
  },
  {
    title: "NDA & data security",
    body: "NDA as standard, least-privilege access, work inside your cloud accounts where policy requires, and GDPR-ready handling.",
    icon: "shield",
  },
];

/** The tools you'll be given access to */
export const TOOLS: string[] = [
  "Jira / Linear",
  "GitHub",
  "Figma",
  "Slack",
  "Notion",
  "Google Meet",
  "Sentry",
  "Vercel / AWS",
];

export const HOW_FAQS: Faq[] = [
  {
    q: "What if we need to change scope mid-build?",
    a: "You reprioritise the backlog at any sprint boundary at no cost. If the change adds work rather than swapping it, we price it and you approve before it starts — the number never arrives as a surprise on an invoice.",
  },
  {
    q: "How do we know work is actually happening?",
    a: "You have the board and the repository from day one, and a demo of running software every week. Those three together are much harder to fake than a status report, which is exactly the point.",
  },
  {
    q: "What happens if a developer leaves mid-project?",
    a: "The tech lead and PM carry the context, everything is documented as we go, and we cover the replacement at our cost. That is the concrete difference between a team and a freelancer.",
  },
  {
    q: "Can we start with just the Blueprint?",
    a: "Yes, and many clients should. It's a paid, standalone engagement — you leave with the PRD, wireframes, stack and costed plan, and you're free to build it with anyone, including your own team.",
  },
  {
    q: "Do you work in our process or yours?",
    a: "Yours, if you have one. We adapt to your board, your standups and your definition of done. If you don't have a process yet, we bring the one described on this page.",
  },
];
