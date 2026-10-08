export type IconKey =
  | "ai"
  | "web"
  | "app"
  | "mobile"
  | "shield"
  | "team"
  | "spark"
  | "chat"
  | "book"
  | "flow"
  | "doc"
  | "chart"
  | "gauge"
  | "search"
  | "pen"
  | "cart"
  | "dashboard"
  | "lock"
  | "portal"
  | "plug"
  | "bell"
  | "map"
  | "card"
  | "sync"
  | "code"
  | "cpu"
  | "bolt"
  | "users"
  | "check"
  | "layers"
  | "wrench"
  | "trend"
  | "grid"
  | "blog"
  | "folder"
  | "rocket"
  | "clock"
  | "mail"
  | "alert";

export type Accent = "brand" | "accent" | "violet" | "emerald" | "indigo" | "amber";

export type Service = {
  slug: string;
  /** Short label used in nav + cards */
  navLabel: string;
  /** Full lane name from the service portfolio */
  name: string;
  eyebrow: string;
  /** Card + meta description */
  summary: string;
  /** Detail page H1 — split so the second half can be gradient-highlighted */
  headline: [string, string];
  intro: string;
  accent: Accent;
  icon: IconKey;
  /** Card / hero background image (public path) */
  image: string;
  /** Hero proof numbers */
  stats: { value: string; label: string; icon: IconKey }[];
  /** "What we can sell" — the concrete deliverables */
  deliverables: { title: string; desc: string; icon: IconKey }[];
  /** "Best customer" — who this lane is built for */
  audience: { title: string; desc: string }[];
  /** Business outcomes, not features */
  outcomes: string[];
  /** Delivery process for this lane */
  process: { step: string; title: string; desc: string }[];
  /** Stack we typically use */
  tech: string[];
  /** Productized entry points */
  packages: {
    name: string;
    price: string;
    timeline: string;
    desc: string;
    includes: string[];
    featured?: boolean;
  }[];
  faqs: { q: string; a: string }[];
  /** "The challenge" — the pain this lane removes, in the buyer's words */
  challenge: {
    title: [string, string];
    desc: string;
    pains: { title: string; desc: string; icon: IconKey }[];
  };
  /** "How it works" diagram — what comes in, what we build, what comes out */
  flow: {
    inputs: { label: string; icon: IconKey }[];
    core: { title: string; desc: string };
    outputs: { label: string; icon: IconKey }[];
  };
  /** Case-study slug shown as this lane's success story */
  caseStudy: string;
  /** Slugs of related lanes */
  related: string[];
};

export const SERVICES: Service[] = [
  /* ------------------------------------------------------------------ */
  {
    slug: "ai-development-automation",
    navLabel: "AI Development & Automation",
    name: "AI Development & Automation",
    eyebrow: "AI engineering",
    summary:
      "Practical AI that removes manual work — chatbots, RAG knowledge bases, agents and document automation wired into the systems you already run.",
    headline: ["AI that cuts manual work —", "not an AI demo"],
    intro:
      "Most AI projects stall at the prototype. We build production AI: grounded in your own data, connected to your existing tools, measured against a business number you actually care about.",
    accent: "brand",
    icon: "ai",
    image: "/services/ai-development-automation.webp",
    stats: [
      { value: "−65%", label: "manual handling time", icon: "trend" },
      { value: "92%", label: "answer accuracy on RAG", icon: "check" },
      { value: "4–10 wks", label: "typical first release", icon: "clock" },
      { value: "100%", label: "your data stays yours", icon: "lock" },
    ],
    deliverables: [
      {
        title: "AI chatbot & support assistant",
        desc: "Customer- or staff-facing assistants that answer from your content, hand off to humans and log every conversation.",
        icon: "chat",
      },
      {
        title: "RAG knowledge base",
        desc: "Your documents, policies and product data made searchable — answers with citations instead of hallucinations.",
        icon: "book",
      },
      {
        title: "AI agents & copilots",
        desc: "Task-running agents with tool access, approvals and guardrails — booking, drafting, triaging, updating records.",
        icon: "spark",
      },
      {
        title: "Internal workflow automation",
        desc: "The repetitive path between your CRM, inbox, sheets and back office — automated end to end, with audit trails.",
        icon: "flow",
      },
      {
        title: "OCR & document AI",
        desc: "Invoices, contracts, forms and scans read, classified, validated and routed automatically at volume.",
        icon: "doc",
      },
      {
        title: "Recommendation & prediction",
        desc: "Ranking, personalization, forecasting and scoring models served behind a fast, monitored API.",
        icon: "chart",
      },
      {
        title: "AI-assisted dashboards",
        desc: "Ask-your-data reporting layers where a question in plain English returns a chart and a source.",
        icon: "dashboard",
      },
      {
        title: "Evaluation & guardrails",
        desc: "Test sets, accuracy scoring, cost controls, PII handling and fallbacks — so quality holds after launch.",
        icon: "shield",
      },
    ],
    audience: [
      {
        title: "SMB owners",
        desc: "Teams drowning in repetitive email, data entry and document handling that AI can absorb.",
      },
      {
        title: "SaaS founders",
        desc: "Products that need an AI feature shipped credibly — not bolted on and embarrassing in a demo.",
      },
      {
        title: "Operations-heavy businesses",
        desc: "Logistics, finance, healthcare and legal ops where documents and approvals are the bottleneck.",
      },
      {
        title: "Agencies",
        desc: "Partners who sold an AI scope and need a senior team to deliver it quietly under their brand.",
      },
    ],
    outcomes: [
      "Hours of manual work per week removed, measured before and after",
      "Faster response times on support and internal requests",
      "Fewer errors in document handling and data entry",
      "A defensible AI feature your competitors can't copy in a weekend",
      "Clear unit economics — cost per request tracked from day one",
    ],
    process: [
      {
        step: "01",
        title: "AI opportunity audit",
        desc: "We map your workflows, score each one on impact vs. effort and pick the two that pay for the project.",
      },
      {
        step: "02",
        title: "Data & guardrail design",
        desc: "Where your data lives, how it's cleaned and chunked, what the model may and may not do or see.",
      },
      {
        step: "03",
        title: "Prototype with an eval set",
        desc: "A working slice in 2–3 weeks, scored against real questions so quality is a number, not an opinion.",
      },
      {
        step: "04",
        title: "Production build",
        desc: "Integrations, auth, logging, cost caps, human-in-the-loop review and a proper admin surface.",
      },
      {
        step: "05",
        title: "Measure & improve",
        desc: "Accuracy, deflection rate and time saved tracked monthly — with a tuning loop on top.",
      },
    ],
    tech: [
      "AI / LLM",
      "RAG",
      "Node.js",
      "Next.js",
      "React",
      "Spring Boot",
      "Java",
      "PostgreSQL",
    ],
    packages: [
      {
        name: "AI Opportunity Audit",
        price: "Free",
        timeline: "30–45 min",
        desc: "A working session plus a one-page map of where AI and automation actually pay off for you.",
        includes: ["Workflow teardown", "3–5 automation ideas", "Effort vs. impact scoring"],
      },
      {
        name: "AI Pilot Build",
        price: "Fixed price",
        timeline: "3–5 weeks",
        desc: "One high-value use case built properly — evaluated, integrated and live with real users.",
        includes: ["One production use case", "Eval set & accuracy report", "Integration with your stack"],
        featured: true,
      },
      {
        name: "AI Platform & Retainer",
        price: "Monthly",
        timeline: "Ongoing",
        desc: "Roll AI across more workflows with continuous tuning, monitoring and cost optimisation.",
        includes: ["New use cases per quarter", "Accuracy & cost monitoring", "Model upgrade path"],
      },
    ],
    faqs: [
      {
        q: "Will our data be used to train someone else's model?",
        a: "No. We build on enterprise API tiers with training disabled, and can deploy inside your own cloud account or VPC when policy requires it. Your data stays your data.",
      },
      {
        q: "How do you stop the AI from making things up?",
        a: "Answers are grounded in your own content with retrieval, every response carries citations, and we ship an evaluation set that scores accuracy on real questions before and after each change.",
      },
      {
        q: "What does it cost to run each month?",
        a: "We model cost per request during the pilot and design caching, routing and smaller-model fallbacks around it. You get a projected monthly bill before we go to production, not after.",
      },
      {
        q: "Can you work with our existing systems?",
        a: "Yes — CRM, ERP, helpdesk, data warehouse, internal APIs and legacy databases. Integration is the majority of most AI projects, and it's where senior engineering pays for itself.",
      },
    ],
    challenge: {
      title: ["Too much time lost", "on repetitive work?"],
      desc: "Manual data entry, slow replies and tools that don't talk to each other hold your team back and quietly raise your operating costs.",
      pains: [
        {
          title: "Scattered information",
          desc: "Important data is spread across email, documents and different systems.",
          icon: "folder",
        },
        {
          title: "Manual, repetitive tasks",
          desc: "Your team spends hours on copy-paste work that could run on its own.",
          icon: "clock",
        },
        {
          title: "Slow response times",
          desc: "Customers and staff wait for answers that already exist somewhere.",
          icon: "chat",
        },
      ],
    },
    flow: {
      inputs: [
        { label: "Website inquiry", icon: "web" },
        { label: "Email request", icon: "mail" },
        { label: "Chat message", icon: "chat" },
        { label: "Document upload", icon: "doc" },
      ],
      core: { title: "AI Agent", desc: "Understands, searches and acts" },
      outputs: [
        { label: "Sends a response", icon: "bolt" },
        { label: "Creates a ticket", icon: "layers" },
        { label: "Updates your CRM", icon: "sync" },
        { label: "Notifies your team", icon: "bell" },
      ],
    },
    caseStudy: "outreaq-ai-support-crm",
    related: ["web-app-saas-mvp", "critical-product-engineering", "dedicated-team-cto-support"],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: "web-design-conversion",
    navLabel: "Web Design & Conversion",
    name: "Web Design & Conversion Website",
    eyebrow: "Design & conversion",
    summary:
      "Corporate sites, SaaS sites and landing pages engineered to generate qualified leads — fast, accessible and built on a real SEO foundation.",
    headline: ["Websites that generate leads,", "not just compliments"],
    intro:
      "A beautiful site that doesn't convert is an expensive brochure. We design around the buyer's decision path, write the copy that carries it, and build it fast enough to rank.",
    accent: "accent",
    icon: "web",
    image: "/services/web-design-conversion.avif",
    stats: [
      { value: "+42%", label: "qualified leads", icon: "trend" },
      { value: "95+", label: "Lighthouse score", icon: "gauge" },
      { value: "1.4s", label: "typical load time", icon: "bolt" },
      { value: "3–6 wks", label: "design to launch", icon: "clock" },
    ],
    deliverables: [
      {
        title: "Corporate website",
        desc: "A credible, fast marketing site with a scalable design system and a CMS your team can actually run.",
        icon: "web",
      },
      {
        title: "SaaS marketing site",
        desc: "Product storytelling, pricing pages, feature deep-dives and trial funnels built for signup conversion.",
        icon: "layers",
      },
      {
        title: "High-intent landing pages",
        desc: "Campaign pages for ads and outbound, wired to analytics and built to be tested, not admired.",
        icon: "bolt",
      },
      {
        title: "Conversion copywriting",
        desc: "Positioning, offer framing and page copy written for international buyers who skim before they read.",
        icon: "pen",
      },
      {
        title: "Redesign & migration",
        desc: "A rebuild of a dated or slow site with URL, ranking and content equity carried over intact.",
        icon: "sync",
      },
      {
        title: "Performance & SEO foundation",
        desc: "Core Web Vitals, structured data, semantic markup, sitemaps and technical SEO handled at build time.",
        icon: "gauge",
      },
      {
        title: "Analytics & CRO setup",
        desc: "Event tracking, funnels, heatmaps and A/B testing so the next change is driven by data.",
        icon: "chart",
      },
      {
        title: "Accessibility & multi-region",
        desc: "WCAG-conscious builds, multi-language routing and GDPR-ready consent for USA and EU audiences.",
        icon: "check",
      },
    ],
    audience: [
      {
        title: "Service businesses",
        desc: "Firms whose pipeline depends on inbound enquiries and credibility at first glance.",
      },
      {
        title: "Consultants & experts",
        desc: "Independent practices that need authority, clarity and a booking path that doesn't leak.",
      },
      {
        title: "Startups",
        desc: "Teams launching or repositioning who need a site that matches the ambition of the product.",
      },
      {
        title: "Agencies",
        desc: "Studios that need overflow design or front-end capacity delivered white-label, on schedule.",
      },
    ],
    outcomes: [
      "More qualified enquiries from the same traffic",
      "Lower bounce and higher time-on-page from a genuinely fast site",
      "Rankings that survive the redesign instead of collapsing after it",
      "A design system your team can extend without calling an agency",
      "Clear attribution — you know which page produced which lead",
    ],
    process: [
      {
        step: "01",
        title: "Positioning & audit",
        desc: "Who you sell to, what they compare you against, and what the current site is losing on today.",
      },
      {
        step: "02",
        title: "Structure & copy",
        desc: "Sitemap, page-by-page narrative and conversion copy signed off before a single pixel is drawn.",
      },
      {
        step: "03",
        title: "Design system",
        desc: "Brand-true UI in Figma — components, states and responsive behaviour, not just pretty screens.",
      },
      {
        step: "04",
        title: "Build & optimise",
        desc: "Next.js build, CMS wiring, Core Web Vitals tuning, technical SEO and analytics instrumentation.",
      },
      {
        step: "05",
        title: "Launch & iterate",
        desc: "Go live, watch real behaviour, then run a testing cycle on the pages that carry the pipeline.",
      },
    ],
    tech: [
      "Next.js",
      "React",
      "Laravel",
      "PHP",
      "Node.js",
      "Spring Boot",
      "Java",
      "PostgreSQL",
    ],
    packages: [
      {
        name: "UX & Conversion Teardown",
        price: "One-time",
        timeline: "~3 days",
        desc: "A review of your current site with ten prioritized fixes ranked by revenue impact.",
        includes: ["Full UX & speed audit", "10 prioritized fixes", "Competitor comparison"],
      },
      {
        name: "Conversion Website",
        price: "Fixed price",
        timeline: "3–6 weeks",
        desc: "Strategy, copy, design and build of a marketing site engineered around your pipeline.",
        includes: ["Copy + design + build", "CMS & analytics setup", "SEO & performance pass"],
        featured: true,
      },
      {
        name: "Growth Retainer",
        price: "Monthly",
        timeline: "Ongoing",
        desc: "Continuous landing pages, experiments and content operations on top of the live site.",
        includes: ["New pages each month", "A/B testing programme", "Performance monitoring"],
      },
    ],
    faqs: [
      {
        q: "Do you write the copy or do we?",
        a: "We write it. Conversion copy and layout are the same decision — we draft from your positioning and customer interviews, then you review. If you have a strong in-house writer, we'll structure the pages and brief them instead.",
      },
      {
        q: "Will our SEO rankings survive a redesign?",
        a: "Yes, when it's planned. We inventory existing URLs and rankings, map redirects one to one, preserve content depth and monitor Search Console for weeks after launch to catch anything that slips.",
      },
      {
        q: "Can our team edit pages without a developer?",
        a: "That's the default. We ship a component-based CMS so marketing can build and edit pages from approved blocks — flexible enough to be useful, constrained enough to stay on-brand.",
      },
      {
        q: "What if we already have a design or brand?",
        a: "We'll build on it. If you have Figma files or a brand system we implement it faithfully and extend it where pages need components the system doesn't cover yet.",
      },
    ],
    challenge: {
      title: ["A website that looks fine", "but doesn't sell?"],
      desc: "Plenty of visitors, too few enquiries. Slow pages, unclear messaging and weak SEO turn paid and organic traffic into bounces.",
      pains: [
        {
          title: "Slow, heavy pages",
          desc: "Every extra second of load time loses visitors before they read a word.",
          icon: "gauge",
        },
        {
          title: "An unclear message",
          desc: "Visitors can't tell what you do, who it's for, or what to do next.",
          icon: "pen",
        },
        {
          title: "Invisible in search",
          desc: "Weak technical SEO hands competitors the clicks you should be getting.",
          icon: "search",
        },
      ],
    },
    flow: {
      inputs: [
        { label: "Google search", icon: "search" },
        { label: "Paid ads", icon: "trend" },
        { label: "Social & referrals", icon: "users" },
        { label: "Email campaigns", icon: "mail" },
      ],
      core: { title: "Conversion website", desc: "Fast, clear and built to convert" },
      outputs: [
        { label: "Qualified leads", icon: "check" },
        { label: "Booked calls", icon: "chat" },
        { label: "CRM entries", icon: "sync" },
        { label: "Analytics insight", icon: "chart" },
      ],
    },
    caseStudy: "ecommerce-web-platform",
    related: ["web-app-saas-mvp", "ai-development-automation", "dedicated-team-cto-support"],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: "web-app-saas-mvp",
    navLabel: "Web App / SaaS MVP",
    name: "Web Application / SaaS MVP",
    eyebrow: "Product engineering",
    summary:
      "Turn an idea into a testable, scalable product — MVPs, admin dashboards, customer portals, subscription SaaS and marketplaces.",
    headline: ["From idea to a product", "you can actually sell"],
    intro:
      "An MVP isn't a cheap version of your product — it's the smallest thing that proves someone will pay. We scope hard, build senior-led, and leave you with a codebase that survives version two.",
    accent: "violet",
    icon: "app",
    image: "/services/web-app-saas-mvp.avif",
    stats: [
      { value: "8–14 wks", label: "idea to live MVP", icon: "clock" },
      { value: "Weekly", label: "demos, no black box", icon: "users" },
      { value: "100%", label: "code & IP yours", icon: "lock" },
      { value: "40+", label: "products shipped", icon: "rocket" },
    ],
    deliverables: [
      {
        title: "MVP build",
        desc: "The core loop of your product, built properly in weeks — enough to demo, sell and raise on.",
        icon: "bolt",
      },
      {
        title: "Admin dashboard",
        desc: "The internal control panel: users, roles, content, moderation, config and operational metrics.",
        icon: "dashboard",
      },
      {
        title: "Customer portal",
        desc: "Secure client-facing areas for accounts, documents, requests, billing and self-service.",
        icon: "portal",
      },
      {
        title: "Subscription SaaS",
        desc: "Multi-tenant architecture with plans, trials, metering, upgrades, dunning and invoicing.",
        icon: "card",
      },
      {
        title: "CRM-style internal apps",
        desc: "Pipelines, records, permissions and reporting that replace the spreadsheet holding your business together.",
        icon: "layers",
      },
      {
        title: "Marketplace platforms",
        desc: "Two-sided products with listings, search, matching, payments, escrow and reviews.",
        icon: "cart",
      },
      {
        title: "API & integrations",
        desc: "Public APIs, webhooks and connections to Stripe, HubSpot, QuickBooks, ERPs and internal systems.",
        icon: "plug",
      },
      {
        title: "Auth, billing & roles",
        desc: "SSO, MFA, granular permissions and payment infrastructure done right the first time.",
        icon: "lock",
      },
    ],
    audience: [
      {
        title: "Non-technical founders",
        desc: "You have the market and the idea; you need a team that can be your engineering department.",
      },
      {
        title: "Funded startups",
        desc: "Runway is the constraint — you need velocity without the six-month cost of hiring in-house.",
      },
      {
        title: "Bootstrapped teams",
        desc: "Every euro is yours, so scope discipline and a fixed price matter more than a big team.",
      },
      {
        title: "SMEs digitising",
        desc: "Established businesses replacing spreadsheets and manual process with a real internal product.",
      },
    ],
    outcomes: [
      "A working product in front of real users inside a quarter",
      "Evidence for your next raise — usage, retention and a live demo",
      "A codebase a future in-house team will thank you for",
      "Fixed scope and fixed price, so the budget conversation stays boring",
      "Documented architecture and handover — no lock-in to us",
    ],
    process: [
      {
        step: "01",
        title: "Blueprint sprint",
        desc: "PRD, user flows, clickable wireframes, tech stack, timeline and budget — before you commit to a build.",
      },
      {
        step: "02",
        title: "Architecture & design",
        desc: "Data model, API contracts, environments and UI design set up so week eight isn't a rewrite.",
      },
      {
        step: "03",
        title: "Two-week sprints",
        desc: "Working software every fortnight, a live demo each Friday and a backlog you can reprioritise.",
      },
      {
        step: "04",
        title: "QA & hardening",
        desc: "Automated tests, load checks, security review, error tracking and analytics before launch.",
      },
      {
        step: "05",
        title: "Launch & scale",
        desc: "Deploy, monitor, gather usage data and plan v2 from evidence rather than assumption.",
      },
    ],
    tech: [
      "Next.js",
      "React",
      "Node.js",
      "Prisma",
      "Spring Boot",
      "PostgreSQL",
    ],
    packages: [
      {
        name: "MVP Blueprint Sprint",
        price: "One-time",
        timeline: "1–2 weeks",
        desc: "The full plan — PRD, wireframes, stack, timeline and budget range — yours to keep either way.",
        includes: ["PRD & clickable wireframes", "Feature list & tech stack", "Timeline & budget range"],
      },
      {
        name: "MVP Build",
        price: "Fixed price",
        timeline: "8–14 weeks",
        desc: "Design and engineering of the full MVP, delivered in sprints with weekly demos.",
        includes: ["Sprint-based delivery", "QA + documented handover", "30 days post-launch support"],
        featured: true,
      },
      {
        name: "Scale & Maintain",
        price: "Monthly",
        timeline: "Ongoing",
        desc: "Your product team after launch — features, fixes, DevOps and analytics on a retainer.",
        includes: ["Feature development", "DevOps & monitoring", "Roadmap & analytics"],
      },
    ],
    faqs: [
      {
        q: "How much does an MVP cost?",
        a: "Most land between a focused single-workflow build and a full multi-role platform, and the range is wide enough that quoting blind would be dishonest. The Blueprint Sprint exists to replace the guess with a scoped number in two weeks.",
      },
      {
        q: "Who owns the code and the IP?",
        a: "You do, completely, from the first commit. We work in your repository or transfer ownership at handover, with documentation and environment access included.",
      },
      {
        q: "What happens after launch?",
        a: "Every build includes 30 days of post-launch support. After that most clients move to a monthly retainer for features and maintenance, and some take the codebase in-house — both are fine, and neither requires renegotiating access.",
      },
      {
        q: "Can you take over a half-finished project?",
        a: "Often, yes. We start with a paid code and architecture review that tells you honestly what's salvageable, what should be rewritten and what it will cost either way.",
      },
    ],
    challenge: {
      title: ["A great idea, stuck", "before launch?"],
      desc: "Good ideas stall on unclear scope, the wrong technical choices, or a build that never quite reaches real users.",
      pains: [
        {
          title: "Unclear scope",
          desc: "Too many features and no clear first version to put in front of users.",
          icon: "layers",
        },
        {
          title: "Slow, costly builds",
          desc: "Months of work and budget spent before anyone can try the product.",
          icon: "clock",
        },
        {
          title: "Can't scale later",
          desc: "A rushed prototype that has to be rewritten the moment it grows.",
          icon: "trend",
        },
      ],
    },
    flow: {
      inputs: [
        { label: "Your idea", icon: "spark" },
        { label: "User research", icon: "users" },
        { label: "Designs & wireframes", icon: "pen" },
        { label: "Existing data", icon: "folder" },
      ],
      core: { title: "Product build", desc: "Scoped, designed and engineered" },
      outputs: [
        { label: "Live MVP", icon: "rocket" },
        { label: "Admin dashboard", icon: "dashboard" },
        { label: "Payments & billing", icon: "card" },
        { label: "Usage analytics", icon: "chart" },
      ],
    },
    caseStudy: "gateoria-event-platform",
    related: ["ai-development-automation", "mobile-app-development", "critical-product-engineering"],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: "mobile-app-development",
    navLabel: "Mobile App Development",
    name: "Mobile App Development",
    eyebrow: "iOS & Android",
    summary:
      "Cross-platform iOS and Android apps with payments, maps, notifications and offline sync — plus the admin panel behind them.",
    headline: ["Mobile apps users", "actually keep installed"],
    intro:
      "Shipping to the stores is the easy part. We build apps that survive real conditions — patchy networks, app review, device fragmentation and users who delete anything that feels slow.",
    accent: "indigo",
    icon: "mobile",
    image: "/services/mobile-app-development.avif",
    stats: [
      { value: "4.8★", label: "typical store rating", icon: "check" },
      { value: "2", label: "platforms, one codebase", icon: "mobile" },
      { value: "10–16 wks", label: "concept to store", icon: "clock" },
      { value: "100%", label: "offline-capable builds", icon: "sync" },
    ],
    deliverables: [
      {
        title: "iOS & Android apps",
        desc: "One React Native or Flutter codebase, native-feeling on both platforms, released to both stores.",
        icon: "mobile",
      },
      {
        title: "Native modules where needed",
        desc: "Swift and Kotlin work for camera, Bluetooth, background tasks and anything cross-platform can't reach.",
        icon: "code",
      },
      {
        title: "User app + admin panel",
        desc: "The app your customers use plus the web back office your team runs it from — designed together.",
        icon: "dashboard",
      },
      {
        title: "Payments & subscriptions",
        desc: "Stripe, Apple Pay, Google Pay and in-app purchases with receipts, refunds and renewal handling.",
        icon: "card",
      },
      {
        title: "Maps, tracking & geofencing",
        desc: "Live location, routing, ETAs and background tracking tuned so it doesn't eat the battery.",
        icon: "map",
      },
      {
        title: "Push & in-app messaging",
        desc: "Segmented notifications, deep links and lifecycle campaigns that bring users back without annoying them.",
        icon: "bell",
      },
      {
        title: "Offline-first sync",
        desc: "Local storage with conflict resolution so the app keeps working in a basement, a truck or a plane.",
        icon: "sync",
      },
      {
        title: "Store launch & compliance",
        desc: "App Store and Play submissions, review handling, privacy manifests, and OTA update pipelines.",
        icon: "check",
      },
    ],
    audience: [
      {
        title: "Startups",
        desc: "Consumer or B2B apps that need to reach both stores fast without a two-team budget.",
      },
      {
        title: "Healthcare",
        desc: "Booking, telehealth and patient apps with HIPAA/GDPR-conscious architecture from day one.",
      },
      {
        title: "Logistics & field teams",
        desc: "Driver, technician and warehouse apps where offline capability isn't optional.",
      },
      {
        title: "Marketplaces & commerce",
        desc: "Two-sided and retail apps where payments, search and notifications drive the numbers.",
      },
    ],
    outcomes: [
      "Both platforms live from one codebase — roughly half the ongoing cost",
      "Ratings that hold up because performance and crash rates are engineered, not hoped for",
      "Retention driven by notifications and speed, tracked in analytics",
      "Store approval handled by a team that has been through review many times",
      "An admin panel that lets your team operate without asking developers",
    ],
    process: [
      {
        step: "01",
        title: "Product & platform scoping",
        desc: "Feature set, platform strategy, store requirements and the constraints your users actually operate under.",
      },
      {
        step: "02",
        title: "UX & prototype",
        desc: "Navigation, key flows and a clickable prototype tested on a real device before engineering starts.",
      },
      {
        step: "03",
        title: "Build in sprints",
        desc: "Fortnightly TestFlight and Play internal builds so you're using the app while it's being made.",
      },
      {
        step: "04",
        title: "Device QA & hardening",
        desc: "Real-device matrix testing, crash reporting, performance profiling and battery checks.",
      },
      {
        step: "05",
        title: "Store launch & iterate",
        desc: "Submission, review support, staged rollout, then updates driven by analytics and reviews.",
      },
    ],
    tech: [
      "React Native",
      "Flutter",
      "Dart",
      "React",
      "Node.js",
      "Spring Boot",
      "Java",
      "PostgreSQL",
    ],
    packages: [
      {
        name: "App Concept Sprint",
        price: "One-time",
        timeline: "1–2 weeks",
        desc: "Flows, prototype, platform plan and a costed store-launch roadmap before you commit.",
        includes: ["Clickable prototype", "Platform & store plan", "Timeline & budget range"],
      },
      {
        name: "App Build & Launch",
        price: "Fixed price",
        timeline: "10–16 weeks",
        desc: "Design, build, QA and store launch of the app plus its admin panel, on both platforms.",
        includes: ["iOS + Android release", "Admin panel included", "Store submission handled"],
        featured: true,
      },
      {
        name: "App Care Retainer",
        price: "Monthly",
        timeline: "Ongoing",
        desc: "OS updates, store compliance, new features and crash monitoring after launch.",
        includes: ["OS & SDK upgrades", "Feature releases", "Crash & performance watch"],
      },
    ],
    faqs: [
      {
        q: "React Native or Flutter — which do you recommend?",
        a: "React Native when you already have a React web team or need heavy JS library reuse; Flutter when the UI is highly custom and animation-dense. We recommend one in scoping and explain the trade-off rather than defaulting to a house favourite.",
      },
      {
        q: "Do we need a separate backend?",
        a: "Most apps need one, and we build it as part of the project — API, database, admin panel and push infrastructure. If you already have a backend we integrate with it instead.",
      },
      {
        q: "Who handles the App Store and Play accounts?",
        a: "You own the developer accounts; we do the submission work under them. That keeps your listings, reviews and revenue in your name permanently.",
      },
      {
        q: "What if the app gets rejected in review?",
        a: "It happens, and it's included. We handle the response, the fix and the resubmission — and we design around the common rejection reasons in advance, so it's rare.",
      },
    ],
    challenge: {
      title: ["Users install your app,", "then forget it?"],
      desc: "Crashes, slow screens and missing basics like offline mode or notifications push users to uninstall within days.",
      pains: [
        {
          title: "Crashes & bugs",
          desc: "Unstable releases earn one-star reviews that are hard to recover from.",
          icon: "alert",
        },
        {
          title: "Two separate codebases",
          desc: "Building iOS and Android apart doubles the cost of every change.",
          icon: "code",
        },
        {
          title: "No way back in",
          desc: "Without useful notifications, users drift away after the first week.",
          icon: "bell",
        },
      ],
    },
    flow: {
      inputs: [
        { label: "App users", icon: "users" },
        { label: "Payments", icon: "card" },
        { label: "Location & maps", icon: "map" },
        { label: "Your backend", icon: "plug" },
      ],
      core: { title: "Mobile app", desc: "One codebase, iOS & Android" },
      outputs: [
        { label: "App Store & Play release", icon: "rocket" },
        { label: "Push notifications", icon: "bell" },
        { label: "Offline sync", icon: "sync" },
        { label: "Admin panel", icon: "dashboard" },
      ],
    },
    caseStudy: "careconnect-health-booking-app",
    related: ["web-app-saas-mvp", "ai-development-automation", "critical-product-engineering"],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: "critical-product-engineering",
    navLabel: "Critical Product Engineering",
    name: "Critical Product Engineering",
    eyebrow: "High-stakes systems",
    summary:
      "High-security, high-performance systems — crypto and fintech workflows, complex APIs, hardened backends and deep performance work.",
    headline: ["Systems where a bug", "costs real money"],
    intro:
      "Some products can't be learned on. Payments, custody, trading, health records and anything handling other people's money need engineers who have shipped it before — and who design for the failure case first.",
    accent: "emerald",
    icon: "shield",
    image: "/services/critical-product-engineering.avif",
    stats: [
      { value: "0", label: "security incidents to date", icon: "shield" },
      { value: "99.9%", label: "uptime targets met", icon: "check" },
      { value: "<50ms", label: "typical API response", icon: "bolt" },
      { value: "Senior-only", label: "engineers on these builds", icon: "users" },
    ],
    deliverables: [
      {
        title: "Crypto & Bitcoin applications",
        desc: "Wallets, custody flows, on-chain integrations and exchange connectivity with key handling done correctly.",
        icon: "lock",
      },
      {
        title: "Fintech workflows",
        desc: "Payments, ledgers, reconciliation, KYC/AML flows and reporting built to survive an audit.",
        icon: "card",
      },
      {
        title: "High-security backends",
        desc: "Threat-modelled architecture, encryption at rest and in transit, secrets management and least-privilege access.",
        icon: "shield",
      },
      {
        title: "Complex API platforms",
        desc: "Versioned public APIs, webhooks, rate limiting, idempotency and documentation partners can build against.",
        icon: "plug",
      },
      {
        title: "Performance optimisation",
        desc: "Profiling, query tuning, caching layers and architecture changes that turn seconds into milliseconds.",
        icon: "gauge",
      },
      {
        title: "Real-time systems",
        desc: "Streaming data, websockets, order flow and event pipelines that hold up under bursty load.",
        icon: "bolt",
      },
      {
        title: "Scale & reliability engineering",
        desc: "Load testing, autoscaling, failover, observability and incident runbooks before you need them.",
        icon: "cpu",
      },
      {
        title: "Security & code audits",
        desc: "Independent review of an existing system with a prioritized remediation plan and fix support.",
        icon: "search",
      },
    ],
    audience: [
      {
        title: "Fintech & crypto founders",
        desc: "Products holding funds or moving money, where security is the product, not a feature.",
      },
      {
        title: "Tech-led startups",
        desc: "Teams whose differentiation is engineering depth — latency, scale or algorithmic quality.",
      },
      {
        title: "Existing product owners",
        desc: "Live systems that are slow, fragile or failing under growth and need senior intervention.",
      },
      {
        title: "Regulated industries",
        desc: "Health, legal and finance operations with compliance and auditability requirements.",
      },
    ],
    outcomes: [
      "A system that holds up under audit, load and adversarial attention",
      "Latency and cost reduced measurably, with before-and-after numbers",
      "Incidents that get caught by monitoring instead of by customers",
      "Architecture documented well enough to onboard a new engineer in days",
      "Confidence to take on enterprise clients and their security questionnaires",
    ],
    process: [
      {
        step: "01",
        title: "Threat & load modelling",
        desc: "What can go wrong, what it costs, and what traffic and failure modes the system must absorb.",
      },
      {
        step: "02",
        title: "Architecture review",
        desc: "Data flows, trust boundaries, key management and the blast radius of every component.",
      },
      {
        step: "03",
        title: "Build with tests first",
        desc: "Critical paths covered by automated tests and property checks before features stack on top.",
      },
      {
        step: "04",
        title: "Hardening & verification",
        desc: "Penetration-style review, dependency scanning, load testing and a remediation pass.",
      },
      {
        step: "05",
        title: "Observability & runbooks",
        desc: "Metrics, alerts, tracing and documented incident response handed to your team at launch.",
      },
    ],
    tech: [
      "Java",
      "Spring Boot",
      "Node.js",
      "Laravel",
      "PHP",
      "PostgreSQL",
    ],
    packages: [
      {
        name: "Architecture & Security Review",
        price: "One-time",
        timeline: "1–2 weeks",
        desc: "An independent read of your system with risks ranked by likelihood and blast radius.",
        includes: ["Threat model & findings", "Prioritized remediation plan", "Effort & cost estimates"],
      },
      {
        name: "Critical Build",
        price: "Project",
        timeline: "12+ weeks",
        desc: "Senior-only engineering of the high-stakes core, with testing and hardening built into the price.",
        includes: ["Senior-only team", "Test & load coverage", "Observability & runbooks"],
        featured: true,
      },
      {
        name: "Performance Rescue",
        price: "Fixed price",
        timeline: "2–4 weeks",
        desc: "A focused intervention on a slow or unstable production system, with measured results.",
        includes: ["Profiling & bottleneck map", "Implemented fixes", "Before/after benchmarks"],
      },
    ],
    faqs: [
      {
        q: "Can you sign an NDA and work under our security policy?",
        a: "Yes. NDAs, background-checked engineers, VPN or VDI access, dedicated devices and working inside your cloud accounts are all normal for these engagements.",
      },
      {
        q: "Do you replace a formal third-party security audit?",
        a: "No, and we'd distrust anyone who said otherwise. We build to pass one and remediate findings, but the independent audit should stay independent. We'll recommend firms we've worked alongside.",
      },
      {
        q: "Our system is already live and struggling. Can you help without a rewrite?",
        a: "Usually. Most performance problems are a handful of queries, a missing cache layer or a bad hot path — not the architecture. The Performance Rescue package finds out in two weeks, and a rewrite recommendation comes with evidence.",
      },
      {
        q: "How do you handle key material and secrets?",
        a: "HSMs or managed KMS for key material, no secrets in code or CI logs, least-privilege IAM, and rotation policies documented at handover. For custody work, multi-sig and threshold schemes are designed in from the start.",
      },
    ],
    challenge: {
      title: ["Systems you can't afford", "to get wrong?"],
      desc: "In fintech, crypto and high-traffic products, a slow endpoint or a security gap means lost funds, lost trust and lost customers.",
      pains: [
        {
          title: "Security gaps",
          desc: "Weak auth, exposed keys or unaudited code waiting to be found.",
          icon: "lock",
        },
        {
          title: "Slow under load",
          desc: "Systems that slow down or fail exactly when traffic peaks.",
          icon: "gauge",
        },
        {
          title: "Fragile integrations",
          desc: "Payment, exchange and partner APIs that break in silent, costly ways.",
          icon: "plug",
        },
      ],
    },
    flow: {
      inputs: [
        { label: "User transactions", icon: "card" },
        { label: "Partner APIs", icon: "plug" },
        { label: "Market data", icon: "chart" },
        { label: "Admin actions", icon: "users" },
      ],
      core: { title: "Hardened backend", desc: "Secure, fast and audited" },
      outputs: [
        { label: "Settled payments", icon: "check" },
        { label: "Full audit trail", icon: "doc" },
        { label: "Real-time alerts", icon: "bell" },
        { label: "Live monitoring", icon: "dashboard" },
      ],
    },
    caseStudy: "crypto-wallet-trading-app",
    related: ["web-app-saas-mvp", "ai-development-automation", "dedicated-team-cto-support"],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: "dedicated-team-cto-support",
    navLabel: "Dedicated Team / CTO Support",
    name: "Dedicated Remote Team / CTO Support",
    eyebrow: "Team augmentation",
    summary:
      "A senior-led remote team — developers, tech lead, PM, QA and DevOps — working as your engineering department, white-label if you need it.",
    headline: ["Your engineering department,", "without the hiring cycle"],
    intro:
      "Hiring senior engineers takes months and a recruiter's fee. We give you a vetted team with overlapping US and EU hours, a tech lead who is accountable for delivery, and the option to run entirely under your brand.",
    accent: "amber",
    icon: "team",
    image: "/services/dedicated-team-cto-support.avif",
    stats: [
      { value: "2 wks", label: "to a working team", icon: "rocket" },
      { value: "4–6 hrs", label: "US/EU overlap daily", icon: "clock" },
      { value: "White-label", label: "delivery available", icon: "layers" },
      { value: "Monthly", label: "rolling — no lock-in", icon: "sync" },
    ],
    deliverables: [
      {
        title: "Dedicated developers",
        desc: "Full-time engineers on your board, in your standups, working only on your product.",
        icon: "users",
      },
      {
        title: "Tech lead / fractional CTO",
        desc: "A senior owner for architecture, technical hiring, vendor decisions and roadmap feasibility.",
        icon: "cpu",
      },
      {
        title: "Project management",
        desc: "Sprint planning, reporting and stakeholder communication so you get outcomes, not a to-do list.",
        icon: "flow",
      },
      {
        title: "QA engineering",
        desc: "Test strategy, automation suites and release verification so quality doesn't depend on luck.",
        icon: "check",
      },
      {
        title: "DevOps & platform",
        desc: "CI/CD, infrastructure as code, environments, monitoring and cloud cost control.",
        icon: "layers",
      },
      {
        title: "Architecture review",
        desc: "An independent assessment of your system, team structure and technical roadmap.",
        icon: "search",
      },
      {
        title: "White-label delivery",
        desc: "We work under your brand, under NDA, in your tools. Your client never meets us — you keep the relationship.",
        icon: "shield",
      },
      {
        title: "Backlog burn-down",
        desc: "Extra capacity aimed at the debt and small features your core team never gets to.",
        icon: "bolt",
      },
    ],
    audience: [
      {
        title: "Agencies",
        desc: "Studios who sold more than they can staff and need silent, reliable delivery capacity.",
      },
      {
        title: "Startups with a backlog",
        desc: "Teams where the roadmap is outrunning headcount and hiring won't land in time.",
      },
      {
        title: "SMEs without a tech team",
        desc: "Businesses that need engineering leadership before they need a full-time CTO.",
      },
      {
        title: "Funded scale-ups",
        desc: "Companies that need to add a whole squad this quarter without a twelve-month hiring plan.",
      },
    ],
    outcomes: [
      "A productive team in two weeks instead of a two-month hiring cycle",
      "Senior accountability — one lead answerable for delivery, not a pool of contractors",
      "Predictable monthly cost with no recruitment fees or severance risk",
      "Capacity you can scale up or down as the roadmap changes",
      "Your brand in front of your clients, always",
    ],
    process: [
      {
        step: "01",
        title: "Capability mapping",
        desc: "What you need, at what seniority, in which time zone — and what the team should own outright.",
      },
      {
        step: "02",
        title: "Team assembly",
        desc: "Named engineers with profiles and interviews. You approve every person before they start.",
      },
      {
        step: "03",
        title: "Two-week onboarding",
        desc: "Access, context, codebase walkthrough and a first shipped ticket inside the first fortnight.",
      },
      {
        step: "04",
        title: "Run in your process",
        desc: "Your board, your standups, your definition of done. We adapt to you, not the other way round.",
      },
      {
        step: "05",
        title: "Review & scale",
        desc: "Monthly delivery reviews with velocity and quality reporting, and headcount adjusted as needed.",
      },
    ],
    tech: [
      "React",
      "Next.js",
      "Node.js",
      "Java",
      "Spring Boot",
      "Laravel",
      "PHP",
      "React Native",
      "Flutter",
      "Dart",
      "Prisma",
      "PostgreSQL",
    ],
    packages: [
      {
        name: "Fractional CTO",
        price: "Monthly",
        timeline: "Ongoing",
        desc: "Senior technical leadership part-time — architecture, hiring and roadmap ownership.",
        includes: ["Architecture ownership", "Technical hiring support", "Vendor & roadmap calls"],
      },
      {
        name: "Dedicated Squad",
        price: "Monthly",
        timeline: "Rolling",
        desc: "A cross-functional team — devs, lead, QA and DevOps — working as your engineering department.",
        includes: ["Named, approved engineers", "Tech lead accountability", "Scale up or down monthly"],
        featured: true,
      },
      {
        name: "White-label Partner",
        price: "Monthly",
        timeline: "Rolling · NDA",
        desc: "Silent delivery for agencies across web, mobile and AI — under your brand, on your process.",
        includes: ["Silent delivery under NDA", "Web, mobile & AI capacity", "You keep the client"],
      },
    ],
    faqs: [
      {
        q: "How is this different from hiring freelancers?",
        a: "A freelancer is one person with no backup and no accountability above them. You get a named team with a tech lead responsible for delivery, QA and DevOps support behind them, and cover when someone is ill or on holiday.",
      },
      {
        q: "Do we choose the engineers?",
        a: "Yes. You see profiles, interview candidates and approve every person before they join. If someone isn't the right fit, we replace them at our cost.",
      },
      {
        q: "What are the working hours?",
        a: "We guarantee four to six hours of daily overlap with US Eastern or Central European time — enough for standups, pairing and same-day decisions rather than 24-hour email cycles.",
      },
      {
        q: "Is there a minimum commitment?",
        a: "One month's notice on a rolling monthly agreement. No annual lock-in — we'd rather earn the renewal each month than trap you in a contract.",
      },
    ],
    challenge: {
      title: ["Need engineers, but can't", "hire fast enough?"],
      desc: "Hiring takes months, freelancers come and go, and your roadmap slips while the team is still being built.",
      pains: [
        {
          title: "Slow hiring",
          desc: "Months of recruiting before a single feature ships.",
          icon: "clock",
        },
        {
          title: "No technical leadership",
          desc: "Nobody owning architecture, code quality or delivery decisions.",
          icon: "cpu",
        },
        {
          title: "Unpredictable delivery",
          desc: "Missed deadlines and surprises because nobody sees the full picture.",
          icon: "alert",
        },
      ],
    },
    flow: {
      inputs: [
        { label: "Your roadmap", icon: "map" },
        { label: "Product backlog", icon: "layers" },
        { label: "Existing codebase", icon: "code" },
        { label: "Business goals", icon: "trend" },
      ],
      core: { title: "Dedicated team", desc: "Devs, tech lead, QA & DevOps" },
      outputs: [
        { label: "Weekly releases", icon: "rocket" },
        { label: "Sprint demos", icon: "users" },
        { label: "Code reviews", icon: "check" },
        { label: "Progress reports", icon: "chart" },
      ],
    },
    caseStudy: "healthfix-web-and-app",
    related: ["web-app-saas-mvp", "ai-development-automation", "mobile-app-development"],
  },
];

export function getService(slug: string): Service | undefined {
  return SERVICES.find((s) => s.slug === slug);
}

export function getRelated(service: Service): Service[] {
  return service.related
    .map((slug) => SERVICES.find((s) => s.slug === slug))
    .filter((s): s is Service => Boolean(s));
}
