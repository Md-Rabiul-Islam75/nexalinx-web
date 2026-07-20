import { Reviews } from "./Reviews";

export function Hero() {
  return (
    <section
      id="top"
      className="relative -mt-20 overflow-hidden bg-navy-gradient pt-36 text-white sm:pt-40"
    >
      {/* Decorative scene */}
      <div className="bg-grid absolute inset-0 opacity-[0.06]" />
      <div className="absolute -left-40 top-10 h-[32rem] w-[32rem] rounded-full bg-brand-500/25 blur-3xl" />
      <div className="absolute -right-32 top-24 h-96 w-96 rounded-full bg-violet-600/25 blur-3xl" />
      <div className="absolute left-1/2 top-1/3 h-72 w-72 -translate-x-1/2 rounded-full bg-accent-500/10 blur-3xl" />
      <Skyline />

      <div className="container-x relative">
        {/* Banner */}
        <div className="mx-auto max-w-4xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.06] px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-brand-100 backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-accent-500" />
            AI-first product engineering · USA &amp; Europe
          </span>

          <h1 className="mt-7 font-display text-4xl font-extrabold leading-[1.06] tracking-tight sm:text-5xl lg:text-[4rem]">
            Build AI-powered web &amp; mobile products{" "}
            <span className="bg-gradient-to-r from-accent-400 to-accent-500 bg-clip-text text-transparent">
              without the risk.
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-300">
            Nexalinx helps USA &amp; European founders, SMEs and agencies turn ideas,
            prototypes and manual workflows into reliable software —{" "}
            <span className="font-semibold text-white">
              with clear scope, weekly demos and milestone-based delivery
            </span>
            , so you never bet on the wrong team.
          </p>

          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
            <a href="#contact" className="btn-primary text-base">
              Book a Free AI / Product Discovery Call
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
            <a
              href="#contact"
              className="btn text-base border border-white/25 bg-white/5 text-white hover:bg-white/10"
            >
              Get an MVP Blueprint
            </a>
          </div>

          <p className="mt-6 text-sm text-slate-400">
            More accountable than freelancers · faster than enterprise agencies · more production-ready than no-code
          </p>
        </div>

        {/* Trust / reviews */}
        <div className="relative mx-auto mt-16 max-w-4xl border-t border-white/10 pt-10 pb-16">
          <p className="text-center text-sm font-semibold text-slate-300">
            Trusted by founders &amp; teams to turn ideas into{" "}
            <span className="text-accent-400">products people actually pay for.</span>
          </p>
          <div className="mt-7">
            <Reviews variant="dark" />
          </div>
        </div>
      </div>
    </section>
  );
}

function Skyline() {
  return (
    <div className="pointer-events-none absolute inset-x-0 bottom-0 -z-0 opacity-40">
      <svg viewBox="0 0 1440 220" preserveAspectRatio="none" className="h-40 w-full sm:h-52" aria-hidden="true">
        {/* back range */}
        <path
          d="M0 220V150l120-40 90 30 110-55 130 45 120-35 140 40 110-45 130 40 120-30 140 45V220Z"
          fill="#0E2A6E"
          opacity="0.5"
        />
        {/* front skyline */}
        <path
          d="M0 220v-60h60v-30h50v40h40v-55h55v55h45v-25h60v25h50v-45h55v45h45v-30h60v30h50v-50h55v50h45v-20h60v20h50v-40h55v40h45v-30h60v30h50v-55h55v55h45v-25h60v25h50v40H0Z"
          fill="#0A2058"
          opacity="0.7"
        />
      </svg>
    </div>
  );
}
