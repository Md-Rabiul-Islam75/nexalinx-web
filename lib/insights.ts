import type { IconKey, Accent } from "./services";

/**
 * Insights content — articles and founder resources.
 *
 * Article bodies are block arrays rather than raw HTML, so a CMS can supply
 * them and the renderer stays in control of typography. Add a block type only
 * when the design has a treatment for it.
 */

export type Block =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "list"; items: string[] }
  | { type: "steps"; items: { title: string; text: string }[] }
  | { type: "quote"; text: string }
  | { type: "callout"; title: string; text: string };

export type Category = "ai" | "mvp" | "delivery" | "comparison";

export const CATEGORY_META: Record<Category, { label: string; accent: Accent }> = {
  ai: { label: "AI", accent: "brand" },
  mvp: { label: "MVP & product", accent: "violet" },
  delivery: { label: "Delivery", accent: "emerald" },
  comparison: { label: "Comparison", accent: "amber" },
};

export type Article = {
  slug: string;
  title: string;
  /** Short label for footers and nav lists, where the full title is too long */
  navTitle: string;
  /** Shown in cards and meta descriptions */
  excerpt: string;
  category: Category;
  /** ISO date — rendered in the reader's locale-independent long form */
  date: string;
  readingTime: string;
  author: { name: string; role: string };
  /** Pulled out under the title on the article page */
  standfirst: string;
  body: Block[];
  featured?: boolean;
};

export const ARTICLES: Article[] = [
  {
    slug: "ai-prototype-vs-production-software",
    title: "AI prototype vs production software: what founders must know",
    navTitle: "AI prototype vs production",
    excerpt:
      "An AI tool can build something that works in a demo. The gap between that and something you can put a paying customer inside is wider than it looks — and entirely predictable.",
    category: "ai",
    date: "2026-06-18",
    readingTime: "7 min read",
    author: { name: "Nexalinx Engineering", role: "Product engineering team" },
    standfirst:
      "AI builders are genuinely good at proving an idea. They are not good at carrying one. Here is exactly where the line sits, so you can plan for it instead of discovering it.",
    featured: true,
    body: [
      {
        type: "p",
        text: "In the last two years a founder with no engineering background can describe a product in a paragraph and have something clickable within an afternoon. That is a real change, and dismissing it is a mistake. A prototype built in Bolt, Lovable, v0 or Bubble removes more early ambiguity than any specification document ever did.",
      },
      {
        type: "p",
        text: "What it does not do is make the software production-ready. That phrase gets used loosely, so it's worth being concrete about what it actually means — because every item on the list below is a place where prototypes reliably fall short.",
      },
      { type: "h2", text: "The five gaps that appear every time" },
      {
        type: "steps",
        items: [
          {
            title: "Authentication and access control",
            text: "Prototypes usually have login. They rarely have roles, permissions, tenant isolation or an audit trail. The moment two customers share the system, the question stops being 'can this user log in' and becomes 'can this user see something they shouldn't'.",
          },
          {
            title: "The data model",
            text: "Generated schemas optimise for the screen in front of them. Six months in, the reporting query you need is impossible without a migration, because nothing was modelled for questions nobody had yet asked.",
          },
          {
            title: "Cost curve",
            text: "Platform pricing is generous at prototype scale and punishing at product scale. The bill grows with usage rather than with revenue, and the two are not the same shape.",
          },
          {
            title: "Failure behaviour",
            text: "Production software is mostly a set of decisions about what happens when something goes wrong. Prototypes typically have one path — the happy one — and no answer for a failed payment, a timed-out API or a half-written record.",
          },
          {
            title: "Evidence",
            text: "Your first serious customer will send a security questionnaire. Answering it needs logs, backups, access policies and an architecture you can describe. None of that is generated.",
          },
        ],
      },
      {
        type: "callout",
        title: "The useful reframe",
        text: "A prototype is not a cheap version of your product. It is a research instrument. Judge it on what it taught you about demand, not on how close it looks to finished.",
      },
      { type: "h2", text: "When to migrate" },
      {
        type: "p",
        text: "The signal is rarely technical. It's commercial. You should be planning the move when any of these become true:",
      },
      {
        type: "list",
        items: [
          "A customer is about to put real personal or financial data into it",
          "You are quoting a price that implies an uptime expectation",
          "Platform costs have started scaling faster than revenue",
          "You are working around the tool more often than you are using it",
          "A deal is waiting on a security or compliance answer",
        ],
      },
      {
        type: "p",
        text: "Notice that none of those are 'the prototype broke'. By the time it breaks, you are migrating under pressure, with customers watching. The cheapest migration is the one planned a month before it was strictly necessary.",
      },
      { type: "h2", text: "What migration actually involves" },
      {
        type: "p",
        text: "The good news is that the expensive part of software — knowing what to build — is already done. Your prototype is a working specification that has been tested on real people. In our experience the interface and the core flows usually survive almost intact; it's the foundation underneath that gets rebuilt.",
      },
      {
        type: "p",
        text: "A sensible migration runs in parallel rather than as a cutover. The new system takes one area at a time, data moves with verification and a rollback path, and users move across in stages. Nobody should be asked to hold their breath on a Friday night deploy.",
      },
      {
        type: "quote",
        text: "AI can create a prototype. Making it production-ready is a different discipline — and it's the one that decides whether the idea becomes a business.",
      },
      { type: "h2", text: "The honest summary" },
      {
        type: "p",
        text: "Use AI builders. They are the fastest way to find out whether anyone wants what you're planning, and that is the question that kills most products. Just budget for the rebuild from the start, treat the prototype as the brief rather than the product, and start the conversation about production before a customer forces it.",
      },
    ],
  },

  {
    slug: "estimate-an-mvp-budget-without-overbuilding",
    title: "How to estimate an MVP budget without overbuilding",
    navTitle: "Estimating an MVP budget",
    excerpt:
      "Most MVPs cost too much for one reason: nobody ever cut anything. A practical method for arriving at a number you can defend — and a scope that earns it.",
    category: "mvp",
    date: "2026-05-27",
    readingTime: "6 min read",
    author: { name: "Nexalinx Engineering", role: "Product engineering team" },
    standfirst:
      "If three vendors quoted you three wildly different numbers, the problem isn't the vendors. It's that nobody has agreed what the product actually is yet.",
    body: [
      {
        type: "p",
        text: "Ask five agencies to quote the same MVP and you'll get a range wide enough to buy a house with. Founders read that as dishonesty. It usually isn't — it's that each vendor imagined a different product, because the brief left room to.",
      },
      { type: "h2", text: "Start from the loop, not the feature list" },
      {
        type: "p",
        text: "Every product has one core loop: the sequence a user repeats that creates the value. For a marketplace it's list, find, transact. For a SaaS tool it's import, act, report. Write yours in a single sentence. Anything that isn't part of that sentence is not MVP scope, however obviously useful it seems.",
      },
      {
        type: "callout",
        title: "The test",
        text: "If a feature were missing on launch day, would a user still get the value they came for? If yes, it goes on the v2 list. This one question removes more budget than any negotiation.",
      },
      { type: "h2", text: "Price the four cost centres separately" },
      {
        type: "steps",
        items: [
          {
            title: "Core loop",
            text: "The screens and logic that deliver the value. This should be the largest line and the one you protect.",
          },
          {
            title: "Account & admin",
            text: "Signup, roles, billing, and the internal panel your team runs the product from. Consistently underestimated, and consistently needed on day one.",
          },
          {
            title: "Integrations",
            text: "Payments, email, maps, third-party APIs. Each one is small alone and significant collectively — count them honestly.",
          },
          {
            title: "Production readiness",
            text: "QA, security, monitoring, deployment. Roughly a fifth of a serious build. Vendors who omit it are quoting a demo.",
          },
        ],
      },
      { type: "h2", text: "The three questions that expose a bad quote" },
      {
        type: "list",
        items: [
          "What is explicitly out of scope? A quote with no exclusions hasn't been thought through.",
          "What happens if we change our mind in week six? The answer should be a process, not a shrug or a threat.",
          "What do we own at the end? If the answer isn't 'everything, documented', keep looking.",
        ],
      },
      { type: "h2", text: "Buy the plan before you buy the build" },
      {
        type: "p",
        text: "The single highest-return spend in early product work is a paid discovery sprint: one to two weeks producing a requirements document, clickable wireframes, a stack decision, a timeline and a costed plan. It typically costs a small fraction of the build, and it converts a range into a number.",
      },
      {
        type: "p",
        text: "It also gives you leverage. With a real specification in hand you can take the same document to three vendors and get three comparable quotes — which is the only way a quote comparison has ever meant anything.",
      },
      {
        type: "quote",
        text: "A fixed price is only honest when the scope behind it is fixed too. Everything else is a guess wearing a suit.",
      },
      { type: "h2", text: "A reasonable shape to expect" },
      {
        type: "p",
        text: "For a focused MVP with one user type, one core loop and a handful of integrations, eight to fourteen weeks of a small senior team is a realistic frame. Shorter usually means the production-readiness work has quietly been dropped. Much longer usually means nobody cut anything — and that is a scope conversation, not a budget one.",
      },
    ],
  },

  {
    slug: "how-nexalinx-manages-remote-delivery",
    title: "How we manage remote delivery: weekly demos, PM, QA and documentation",
    navTitle: "How we manage remote delivery",
    excerpt:
      "The real fear in hiring an offshore team isn't cost or skill — it's silence. Here's the operating system we use so you always know exactly what's happening.",
    category: "delivery",
    date: "2026-05-06",
    readingTime: "5 min read",
    author: { name: "Nexalinx Engineering", role: "Product engineering team" },
    standfirst:
      "Distance is only a problem when it comes with silence. Every part of our process exists to make progress something you can watch rather than something you're told about.",
    body: [
      {
        type: "p",
        text: "Ask anyone who has had a bad offshore experience what went wrong and you'll rarely hear 'the code was poor'. You'll hear that updates got vaguer, deadlines moved by a week at a time, and by the time it was obviously in trouble, a quarter had gone.",
      },
      {
        type: "p",
        text: "That failure mode is preventable, and it isn't prevented by trust or good intentions. It's prevented by structure.",
      },
      { type: "h2", text: "Four mechanisms, not four promises" },
      {
        type: "steps",
        items: [
          {
            title: "A working demo every week",
            text: "Not a status report — running software on a live staging environment. A slide can describe progress that doesn't exist; a demo cannot. If a week produced nothing, you know within seven days.",
          },
          {
            title: "A named project manager",
            text: "One person owns the sprint, the backlog and the reporting. You manage a roadmap rather than managing developers, and questions have a single address.",
          },
          {
            title: "QA as a role, not an afterthought",
            text: "A dedicated QA engineer with a test strategy and automated coverage on critical paths. Quality stops depending on whether the developer who wrote it remembered to check.",
          },
          {
            title: "Documentation written as we go",
            text: "Architecture decisions, environment setup and API contracts recorded during the build. This is what makes a team resilient to someone leaving — and what makes handover a document rather than a crisis.",
          },
        ],
      },
      { type: "h2", text: "Access is the real guarantee" },
      {
        type: "p",
        text: "From day one you have a seat on the board and the repository. You can read every ticket and every commit without asking anyone. That single arrangement makes it structurally difficult to hide a problem, which is worth more than any assurance in a proposal.",
      },
      {
        type: "callout",
        title: "Timezone, honestly",
        text: "We commit to four to six hours of daily overlap with US Eastern or Central European hours. That's enough for standups, pairing and same-day decisions. Anyone promising full overlap from another continent is either exaggerating or planning to burn out a team.",
      },
      { type: "h2", text: "What happens when something slips" },
      {
        type: "p",
        text: "Things slip. Estimates are estimates, and a difficult integration can eat a week. The difference is when you find out. In a weekly-demo cadence, a slipped item is a five-minute conversation about priority. In a monthly-report cadence, the same slip is a crisis meeting about trust.",
      },
      {
        type: "quote",
        text: "You should never have to ask what's happening. If you do, the process has already failed.",
      },
    ],
  },

  {
    slug: "freelancer-vs-agency-vs-ai-builder",
    title: "Freelancer vs agency vs AI builder vs product engineering team",
    navTitle: "Freelancer vs agency vs AI",
    excerpt:
      "Four genuinely different ways to get software built, each right in different circumstances. An honest comparison, including where we're the wrong answer.",
    category: "comparison",
    date: "2026-04-14",
    readingTime: "6 min read",
    author: { name: "Nexalinx Engineering", role: "Product engineering team" },
    standfirst:
      "Most comparison articles are written to make one option look inevitable. This one names the situations where each of the other three beats us.",
    body: [
      {
        type: "p",
        text: "There are four realistic ways to get a product built today, and the honest answer to 'which is best' is that it depends on the size of the thing, the stage you're at and how much of the risk you can personally absorb.",
      },
      { type: "h2", text: "Freelancers" },
      {
        type: "p",
        text: "Cheapest per hour, fastest to start, and genuinely excellent for well-defined work: a landing page, an integration, a specific fix. If you can write the spec yourself and judge the output, a good freelancer is the most efficient option available.",
      },
      {
        type: "p",
        text: "The risk is structural rather than personal. One person has no backup, no QA behind them and nobody accountable above them. Over a two-week task that rarely matters. Over a six-month build, illness, a better contract or simple burnout become likely events rather than unlucky ones.",
      },
      { type: "h2", text: "Enterprise agencies" },
      {
        type: "p",
        text: "Deep expertise, real process, and the ability to absorb enormous scope. If you are a large organisation with a procurement department and a multi-year programme, this is the correct choice and the rest of this article is not for you.",
      },
      {
        type: "p",
        text: "For a startup the friction is cost and pace. You are paying for a sales organisation, an office and a bench, and the onboarding alone can consume a quarter. Startups also tend to receive the most junior team in the building, which is a poor trade at that price.",
      },
      { type: "h2", text: "AI and no-code builders" },
      {
        type: "p",
        text: "Unbeatable for finding out whether anyone wants the thing. Days to a clickable product, near-zero cost, and no vendor conversation at all. Every founder should use one before commissioning software.",
      },
      {
        type: "p",
        text: "The ceiling arrives at production: security you can't evidence, costs that scale with usage rather than revenue, and a codebase you can't fully export. That isn't a flaw — it's what a prototyping tool is for.",
      },
      { type: "h2", text: "Product engineering teams" },
      {
        type: "p",
        text: "A team with a tech lead, PM, QA and DevOps, working as an outsourced product department. More accountable than a freelancer, faster and cheaper than an enterprise agency, and building the thing a prototype can't become.",
      },
      {
        type: "p",
        text: "The trade-off is real: it costs more than a freelancer and moves slower than a no-code builder, and both of those are correct reasons to choose differently.",
      },
      {
        type: "callout",
        title: "When we're the wrong answer",
        text: "If the scope is a week of work, hire a freelancer. If you haven't validated demand yet, build a prototype first. If you need a five-year enterprise transformation programme, hire a firm with a legal department. We're the right answer for a product that has to be real, has to last, and has to ship this year.",
      },
      { type: "h2", text: "The question that actually decides it" },
      {
        type: "p",
        text: "Not 'which is best' but 'what happens if this goes wrong?' If a two-week delay is survivable, optimise for cost. If a failure would cost customers, funding or the company, buy accountability — and make sure you can name the person who carries it.",
      },
    ],
  },
];

/* ------------------------------------------------------- Founder resources */

export type Resource = {
  slug: string;
  title: string;
  desc: string;
  format: string;
  /** Who it's for */
  audience: string;
  contents: string[];
  icon: IconKey;
  accent: Accent;
  cta: string;
};

export const RESOURCES: Resource[] = [
  {
    slug: "ai-audit-checklist",
    title: "AI Opportunity Audit Checklist",
    desc: "The questions we work through on an audit call — run them over your own operation and find the three workflows worth automating first.",
    format: "PDF checklist",
    audience: "SMB owners & operations leads",
    contents: [
      "Workflow inventory template",
      "Impact vs. effort scoring grid",
      "Data-readiness questions",
      "Cost-per-request estimation worksheet",
    ],
    icon: "ai",
    accent: "brand",
    cta: "Get the checklist",
  },
  {
    slug: "mvp-blueprint-template",
    title: "MVP Blueprint Template",
    desc: "The structure we use for paid discovery sprints — a requirements document that a developer could actually quote from.",
    format: "Notion & PDF template",
    audience: "Founders scoping a first build",
    contents: [
      "Core loop definition worksheet",
      "Feature list with MVP / v2 split",
      "Tech stack decision matrix",
      "Timeline and budget framework",
    ],
    icon: "blog",
    accent: "violet",
    cta: "Get the template",
  },
  {
    slug: "app-rescue-checklist",
    title: "App Rescue Checklist",
    desc: "A diagnostic pass over a product that's slow, buggy or stalled — the same order we work in during a paid audit.",
    format: "PDF checklist",
    audience: "Owners of a struggling product",
    contents: [
      "Access and ownership recovery list",
      "Code and dependency health checks",
      "Performance bottleneck triage",
      "Salvage vs. rewrite decision tree",
    ],
    icon: "wrench",
    accent: "emerald",
    cta: "Get the checklist",
  },
  {
    slug: "offshore-vendor-questions",
    title: "20 Questions to Ask an Offshore Vendor",
    desc: "The questions that separate a team that will finish from one that will go quiet. Use them on us too.",
    format: "PDF guide",
    audience: "Anyone comparing vendors",
    contents: [
      "Scope and change-control questions",
      "Ownership, IP and exit terms",
      "Security, NDA and data handling",
      "Continuity, cover and escalation",
    ],
    icon: "check",
    accent: "amber",
    cta: "Get the guide",
  },
];

export function getArticle(slug: string): Article | undefined {
  return ARTICLES.find((a) => a.slug === slug);
}

/** Long-form date that renders identically on server and client. */
export function formatDate(iso: string): string {
  const MONTHS = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December",
  ];
  const [y, m, d] = iso.split("-").map(Number);
  return `${MONTHS[m - 1]} ${d}, ${y}`;
}
