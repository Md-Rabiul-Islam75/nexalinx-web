import { HeroVideo } from "./HeroVideo";
import { Reviews } from "./Reviews";

export function Hero() {
  return (
    <section
      id="top"
      className="relative -mt-20 flex min-h-[88vh] flex-col overflow-hidden bg-ink text-white"
    >
      {/* Full-bleed background video — branding clip with a sound toggle */}
      <HeroVideo />

      {/* Scrims for legibility — strong on the left, clear on the right so the video reads */}
      <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/60 to-transparent" />
      {/* Protect the navbar (top) and the trusted-by row (bottom); keep the middle-right clear */}
      <div className="absolute inset-0 bg-gradient-to-b from-ink/55 via-transparent to-ink/55" />

      {/* Content */}
      <div className="container-x relative z-10 flex flex-1 flex-col pt-28 pb-12 sm:pt-32">
        <div className="flex flex-1 flex-col justify-center">
          <div className="max-w-xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.06] px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-brand-100 backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-accent-500" />
              AI-first product engineering · USA &amp; Europe
            </span>

            <h1 className="mt-6 font-display text-5xl font-extrabold leading-[1.02] tracking-tight sm:text-6xl lg:text-[4.75rem]">
              <span className="bg-gradient-to-r from-brand-300 via-brand-400 to-violet-400 bg-clip-text text-transparent">
                AI-first
              </span>
              <br />
              product engineering
            </h1>

            <p className="mt-6 max-w-lg text-lg leading-relaxed text-slate-200">
              We build AI-driven web &amp; mobile products, MVPs and scalable platforms for
              founders, SMEs and agencies — senior-led, and production-ready.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a href="/book" className="btn-primary text-base">
                Book a Discovery Call
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                  <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
              <a
                href="#offers"
                className="btn text-base border border-white/25 bg-white/5 text-white backdrop-blur hover:bg-white/10"
              >
                Explore our offers
              </a>
            </div>
          </div>
        </div>

        {/* Trusted by */}
        <div className="mt-10">
          <p className="text-xs font-semibold uppercase tracking-wider text-slate-300">Trusted by</p>
          <div className="mt-4">
            <Reviews variant="dark" compact />
          </div>
        </div>
      </div>
    </section>
  );
}
