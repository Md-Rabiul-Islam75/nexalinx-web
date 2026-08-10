import type { Accent } from "./services";

export type Cat = "web" | "mobile" | "ai";

export type CaseStudy = {
  slug: string;
  title: string;
  /** Short client label shown on the card (industry · region) */
  client: string;
  category: Cat;
  image: string;
  /** Card summary */
  summary: string;
  /** Big number on the card cover + top of the detail page */
  hero: { value: string; label: string };
  /** Two small tiles on the card */
  metrics: { value: string; label: string }[];
  tech: string[];

  /* ---- CLIENT: who are they? ---- */
  client_who: string;
  client_facts: { label: string; value: string }[];

  /* ---- CHALLENGE: what was going wrong? ---- */
  challenge_intro: string;
  challenge_points: string[];

  /* ---- SOLUTION: what did Nexalinx do about it? ---- */
  solution_intro: string;
  solution_steps: { title: string; desc: string }[];

  /* ---- Results the work produced ---- */
  results: { value: string; label: string }[];

  quote?: { text: string; author: string };
};

/** Category → visual accent + label. */
export const CAT: Record<Cat, { label: string; accent: Accent }> = {
  web: { label: "Web", accent: "brand" },
  mobile: { label: "Mobile", accent: "violet" },
  ai: { label: "AI", accent: "accent" },
};

export const CASE_STUDIES: CaseStudy[] = [
  {
    slug: "ecommerce-web-platform",
    title: "E-commerce Web Platform",
    client: "Retail · commerce",
    category: "web",
    image: "/work/ecommerce.webp",
    summary:
      "A responsive storefront and catalogue that renders fast across every device, with a clean product-management back office.",
    hero: { value: "+38%", label: "conversion" },
    metrics: [
      { value: "1.6s", label: "load time" },
      { value: "3", label: "device layouts" },
    ],
    tech: ["Next.js", "Node.js", "PostgreSQL"],
    client_who:
      "A growing online retailer selling homeware across several categories, running on an off-the-shelf template store that had stopped keeping up with the business.",
    client_facts: [
      { label: "Industry", value: "Retail / e-commerce" },
      { label: "Market", value: "Direct-to-consumer" },
      { label: "Stage", value: "Scaling store" },
    ],
    challenge_intro:
      "The storefront looked acceptable but was quietly leaking revenue. Pages were slow, the mobile experience was an afterthought, and every catalogue update was a chore.",
    challenge_points: [
      "Slow page loads pushing shoppers away before they reached checkout",
      "A mobile layout that fought the majority of the traffic instead of serving it",
      "Product management so clunky the team dreaded updating the catalogue",
    ],
    solution_intro:
      "We rebuilt the storefront from the ground up on a fast, modern stack — designed around the shopper's path to checkout, not just the homepage.",
    solution_steps: [
      {
        title: "A performance-first rebuild",
        desc: "A Next.js storefront with image optimisation and Core Web Vitals tuned, cutting load time to under two seconds.",
      },
      {
        title: "Truly responsive design",
        desc: "Three deliberate layouts for desktop, tablet and mobile — so the largest audience gets the best experience, not the leftover one.",
      },
      {
        title: "Frictionless checkout & admin",
        desc: "Stripe checkout wired for speed, plus a product-management back office the team can run without a developer.",
      },
    ],
    results: [
      { value: "+38%", label: "conversion rate" },
      { value: "1.6s", label: "average load time" },
      { value: "3", label: "device layouts" },
    ],
  },

  {
    slug: "gateoria-event-platform",
    title: "Gateoria — Event Planning Platform",
    client: "Events · SaaS",
    category: "web",
    image: "/work/event-gateoria.avif",
    summary:
      "An end-to-end event planning web app with scheduling, vendor coordination, ticketing and a real-time attendee dashboard.",
    hero: { value: "12k", label: "events run" },
    metrics: [
      { value: "99.9%", label: "uptime" },
      { value: "-40%", label: "planning time" },
    ],
    tech: ["Next.js", "Prisma", "PostgreSQL"],
    client_who:
      "An events startup building Gateoria — a SaaS to give organisers a single place to plan and run events end to end.",
    client_facts: [
      { label: "Industry", value: "Events / SaaS" },
      { label: "Product", value: "Multi-tenant platform" },
      { label: "Stage", value: "Funded startup" },
    ],
    challenge_intro:
      "Organisers were stitching events together across spreadsheets, email threads and a handful of disconnected tools. Nothing talked to anything, and mistakes fell through the gaps.",
    challenge_points: [
      "Scheduling, vendors and ticketing scattered across separate tools",
      "No central source of truth for an event's status or attendees",
      "Manual, repetitive coordination eating the organiser's week",
    ],
    solution_intro:
      "We built the platform the founders envisioned — one system that carries an event from first plan to final headcount.",
    solution_steps: [
      {
        title: "Unified planning workspace",
        desc: "Scheduling, tasks and vendor coordination in one place, so an event's whole picture lives on a single screen.",
      },
      {
        title: "Ticketing & payments",
        desc: "Built-in ticketing with Stripe payments and payouts, removing the third-party tool and its fees.",
      },
      {
        title: "Real-time attendee dashboard",
        desc: "Live registration and check-in data on a multi-tenant, 99.9%-uptime backend that holds up on event day.",
      },
    ],
    results: [
      { value: "12k", label: "events run on the platform" },
      { value: "99.9%", label: "uptime" },
      { value: "-40%", label: "organiser planning time" },
    ],
  },

  {
    slug: "crm-platform",
    title: "CRM Platform",
    client: "B2B · sales ops",
    category: "web",
    image: "/work/crm.webp",
    summary:
      "A pipeline-first CRM with contacts, deals, tasks and permissions — replacing a tangle of spreadsheets for a growing sales team.",
    hero: { value: "+27%", label: "close rate" },
    metrics: [
      { value: "50k", label: "records" },
      { value: "Role-based", label: "access" },
    ],
    tech: ["React", "Spring Boot", "PostgreSQL"],
    client_who:
      "A B2B company whose sales team had outgrown the spreadsheets holding its pipeline together.",
    client_facts: [
      { label: "Industry", value: "B2B services" },
      { label: "Team", value: "Growing sales org" },
      { label: "Stage", value: "SME digitising" },
    ],
    challenge_intro:
      "Leads and deals lived in a sprawl of spreadsheets that only one person fully understood. Nobody could see the pipeline, and nothing stopped two reps working the same account.",
    challenge_points: [
      "Pipeline scattered across spreadsheets with no single view",
      "No permissions — everyone could see and break everything",
      "Reporting was manual, late and never quite trusted",
    ],
    solution_intro:
      "We built a pipeline-first CRM shaped around how the team actually sells, and migrated the spreadsheet history into it cleanly.",
    solution_steps: [
      {
        title: "Pipeline & records",
        desc: "Contacts, deals and tasks in a fast interface, with the pipeline visible to everyone who needs it.",
      },
      {
        title: "Role-based access",
        desc: "Granular permissions so reps, managers and admins each see exactly what they should.",
      },
      {
        title: "Clean data migration",
        desc: "Fifty thousand records moved out of spreadsheets and into a structured database with no loss.",
      },
    ],
    results: [
      { value: "+27%", label: "deal close rate" },
      { value: "50k", label: "records migrated" },
      { value: "Role-based", label: "access control" },
    ],
  },

  {
    slug: "crm-sales-dashboard",
    title: "CRM — Sales Dashboard",
    client: "B2B · analytics",
    category: "web",
    image: "/work/crm2.webp",
    summary:
      "A reporting layer over the CRM: live sales dashboards, forecasting and self-serve charts the team can build without a developer.",
    hero: { value: "-65%", label: "report time" },
    metrics: [
      { value: "Real-time", label: "dashboards" },
      { value: "20+", label: "chart types" },
    ],
    tech: ["React", "Node.js", "PostgreSQL"],
    client_who:
      "The same sales organisation, now sitting on rich CRM data but unable to turn it into decisions quickly.",
    client_facts: [
      { label: "Industry", value: "B2B services" },
      { label: "Need", value: "Sales analytics" },
      { label: "Stage", value: "Scaling ops" },
    ],
    challenge_intro:
      "The data was finally in one place, but answering a simple question still meant a manager exporting a CSV and building a chart by hand — a job that took days and was stale by the time it landed.",
    challenge_points: [
      "Every report was a manual, multi-day export-and-chart exercise",
      "No live view of pipeline health or forecast",
      "Analysts, not the team, held the keys to the numbers",
    ],
    solution_intro:
      "We layered a real-time reporting engine on top of the CRM, and put chart-building in the hands of the people who need the answers.",
    solution_steps: [
      {
        title: "Live dashboards",
        desc: "Real-time sales and pipeline dashboards on a ClickHouse analytics layer built for fast queries.",
      },
      {
        title: "Self-serve charts",
        desc: "Over twenty chart types the team can assemble themselves — no developer, no analyst queue.",
      },
      {
        title: "Forecasting",
        desc: "Pipeline forecasting so leadership plans from a live picture instead of last month's spreadsheet.",
      },
    ],
    results: [
      { value: "-65%", label: "time to a report" },
      { value: "Real-time", label: "dashboards" },
      { value: "20+", label: "self-serve chart types" },
    ],
  },

  {
    slug: "healthfix-web-and-app",
    title: "HealthFix — Web & App",
    client: "Healthcare · USA",
    category: "web",
    image: "/work/healthfix.avif",
    summary:
      "A patient-facing web portal and companion app for appointments, records and reminders on a privacy-first backend.",
    hero: { value: "4.7★", label: "patient rating" },
    metrics: [
      { value: "HIPAA", label: "conscious" },
      { value: "-45%", label: "no-shows" },
    ],
    tech: ["Next.js", "Laravel", "PostgreSQL"],
    client_who:
      "A US healthcare provider that wanted a proper digital front door for its patients, across both web and mobile.",
    client_facts: [
      { label: "Industry", value: "Healthcare" },
      { label: "Market", value: "USA" },
      { label: "Compliance", value: "HIPAA-conscious" },
    ],
    challenge_intro:
      "Everything ran through the phone line. Patients couldn't book, see records or get reminders on their own, and missed appointments were a constant, costly drain.",
    challenge_points: [
      "Booking and records locked behind phone calls in office hours",
      "High no-show rate with no automated reminders",
      "Patient data that had to be handled to a strict compliance bar",
    ],
    solution_intro:
      "We built a web portal and a companion app on a shared, privacy-first backend, so patients can self-serve wherever they are.",
    solution_steps: [
      {
        title: "Portal + companion app",
        desc: "A Next.js patient portal and a React Native app sharing one backend, for appointments and records on any device.",
      },
      {
        title: "Automated reminders",
        desc: "Appointment reminders that cut no-shows by nearly half without a single extra phone call.",
      },
      {
        title: "Privacy-first backend",
        desc: "A HIPAA-conscious architecture with least-privilege access and encrypted patient data throughout.",
      },
    ],
    results: [
      { value: "4.7★", label: "patient rating" },
      { value: "-45%", label: "no-shows" },
      { value: "HIPAA", label: "conscious build" },
    ],
  },

  {
    slug: "crypto-wallet-trading-app",
    title: "Crypto Wallet & Trading App",
    client: "Fintech / crypto · USA",
    category: "mobile",
    image: "/work/crypto-wallet.avif",
    summary:
      "A secure Bitcoin/crypto wallet with real-time trading, biometric auth and hardware-grade key handling.",
    hero: { value: "4.8★", label: "app store rating" },
    metrics: [
      { value: "80k+", label: "downloads" },
      { value: "0", label: "security incidents" },
    ],
    tech: ["React Native", "Spring Boot", "PostgreSQL"],
    client_who:
      "A fintech founder building a consumer crypto wallet where a single security mistake would end the business.",
    client_facts: [
      { label: "Industry", value: "Fintech / crypto" },
      { label: "Market", value: "USA" },
      { label: "Stakes", value: "Custody of funds" },
    ],
    challenge_intro:
      "This was a product where the hard part wasn't the screens — it was holding other people's money safely while still feeling fast and simple to use.",
    challenge_points: [
      "Hardware-grade security required for keys and funds",
      "Real-time trading data with no tolerance for lag or error",
      "Consumer-grade ease of use over genuinely complex machinery",
    ],
    solution_intro:
      "We put senior-only engineers on it and designed for the failure case first — then made the safe path feel effortless.",
    solution_steps: [
      {
        title: "Hardened key handling",
        desc: "A Rust core for key material and signing, with biometric auth and threat-modelled storage.",
      },
      {
        title: "Real-time trading",
        desc: "WebSocket market data and order flow tuned for low latency under bursty load.",
      },
      {
        title: "Simple on the surface",
        desc: "A React Native app that hides the complexity behind a clean, consumer-friendly experience.",
      },
    ],
    results: [
      { value: "4.8★", label: "app store rating" },
      { value: "80k+", label: "downloads" },
      { value: "0", label: "security incidents" },
    ],
  },

  {
    slug: "careconnect-health-booking-app",
    title: "CareConnect — Health & Booking App",
    client: "Healthcare · USA",
    category: "mobile",
    image: "/work/careconnect.webp",
    summary:
      "Appointment booking plus telehealth video, reminders and a HIPAA-ready backend in one patient app.",
    hero: { value: "4.7★", label: "patient rating" },
    metrics: [
      { value: "HIPAA", label: "compliant" },
      { value: "-45%", label: "no-shows" },
    ],
    tech: ["React Native", "Node.js", "PostgreSQL"],
    client_who:
      "A US clinic network that wanted to meet patients on their phones — for booking and for care itself.",
    client_facts: [
      { label: "Industry", value: "Healthcare" },
      { label: "Market", value: "USA" },
      { label: "Compliance", value: "HIPAA-ready" },
    ],
    challenge_intro:
      "Patients had to call to book, couldn't be seen without travelling in, and forgot appointments they'd made weeks earlier.",
    challenge_points: [
      "No self-service booking outside office hours",
      "No remote option for consultations that didn't need a visit",
      "No-shows driven by a lack of timely reminders",
    ],
    solution_intro:
      "We built a single patient app that handles booking, reminders and the appointment itself over secure video.",
    solution_steps: [
      {
        title: "Self-service booking",
        desc: "Appointment booking in the patient's pocket, any time, backed by reminders that cut no-shows.",
      },
      {
        title: "Telehealth video",
        desc: "In-app WebRTC video consultations for appointments that don't need a trip to the clinic.",
      },
      {
        title: "HIPAA-ready backend",
        desc: "A compliant backend handling patient data and video with the required privacy safeguards.",
      },
    ],
    results: [
      { value: "4.7★", label: "patient rating" },
      { value: "-45%", label: "no-shows" },
      { value: "HIPAA", label: "compliant" },
    ],
  },

  {
    slug: "outreaq-ai-support-crm",
    title: "Outreaq — AI Support for CRM",
    client: "Operations SaaS",
    category: "ai",
    image: "/work/crm-outreaq.avif",
    summary:
      "An AI support assistant wired into the CRM that drafts replies, surfaces the right record and answers staff questions with citations.",
    hero: { value: "-65%", label: "support time" },
    metrics: [
      { value: "92%", label: "answer accuracy" },
      { value: "24/7", label: "coverage" },
    ],
    tech: ["AI / LLM", "Node.js", "PostgreSQL"],
    client_who:
      "An operations SaaS whose support team was drowning in repetitive questions and slow lookups.",
    client_facts: [
      { label: "Industry", value: "Operations SaaS" },
      { label: "Team", value: "Customer support" },
      { label: "Goal", value: "Deflect & speed up" },
    ],
    challenge_intro:
      "Agents spent their days answering the same questions and hunting through the CRM for the right record. Response times crept up and the backlog never cleared.",
    challenge_points: [
      "The same questions answered by hand, over and over",
      "Agents digging through the CRM to find the right context",
      "Response times slipping as volume grew",
    ],
    solution_intro:
      "We built Outreaq — an AI assistant grounded in the company's own content and wired directly into the CRM, with a human always in the loop.",
    solution_steps: [
      {
        title: "RAG knowledge base",
        desc: "A retrieval layer over the company's docs and records so answers are grounded, not guessed — every one carrying a citation.",
      },
      {
        title: "Drafts & record surfacing",
        desc: "The assistant drafts replies and pulls up the right CRM record automatically, so agents review rather than research.",
      },
      {
        title: "Measured, human-in-the-loop",
        desc: "An evaluation set scoring accuracy at 92%, with agents approving before anything reaches a customer.",
      },
    ],
    results: [
      { value: "-65%", label: "time spent on support" },
      { value: "92%", label: "answer accuracy" },
      { value: "24/7", label: "first-response coverage" },
    ],
  },

  {
    slug: "visa-agent-platform",
    title: "Visa Agent Platform",
    client: "Travel · immigration",
    category: "ai",
    image: "/work/visa-agent.avif",
    summary:
      "An AI agent that reads documents, checks eligibility and guides applicants through visa workflows with human-in-the-loop review.",
    hero: { value: "-70%", label: "processing time" },
    metrics: [
      { value: "OCR", label: "+ document AI" },
      { value: "Human", label: "in the loop" },
    ],
    tech: ["AI / LLM", "Laravel", "PostgreSQL"],
    client_who:
      "An immigration service processing visa applications by hand, document by document.",
    client_facts: [
      { label: "Industry", value: "Travel / immigration" },
      { label: "Process", value: "Document-heavy" },
      { label: "Goal", value: "Faster, accurate review" },
    ],
    challenge_intro:
      "Every application meant a person reading a stack of documents, checking eligibility rules by hand and shepherding the applicant through — slow, repetitive and easy to get wrong.",
    challenge_points: [
      "Manual document review that didn't scale with volume",
      "Eligibility checks that were slow and error-prone by hand",
      "Applicants left guessing at each step of the workflow",
    ],
    solution_intro:
      "We built an AI agent that does the reading and the checking, and guides the applicant — while a human signs off on every decision.",
    solution_steps: [
      {
        title: "Document AI",
        desc: "OCR and document understanding that reads, classifies and extracts from application paperwork automatically.",
      },
      {
        title: "Eligibility & guidance",
        desc: "An agent that checks eligibility against the rules and walks applicants through each step of the workflow.",
      },
      {
        title: "Human in the loop",
        desc: "Every determination is surfaced for human review and approval before it counts — speed without removing accountability.",
      },
    ],
    results: [
      { value: "-70%", label: "processing time" },
      { value: "OCR", label: "+ document AI" },
      { value: "Human", label: "in the loop" },
    ],
  },
];

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return CASE_STUDIES.find((c) => c.slug === slug);
}
