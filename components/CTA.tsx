export function CTA() {
  return (
    <section id="contact" className="scroll-mt-24 bg-white py-20 sm:py-28">
      <div className="container-x">
        <div className="relative overflow-hidden rounded-[2rem] bg-cta-gradient px-6 py-16 text-center sm:px-16 sm:py-20">
          {/* glow accents */}
          <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
          <div className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-violet-500/30 blur-3xl" />
          <div className="bg-grid absolute inset-0 opacity-[0.07]" />

          <div className="relative mx-auto max-w-2xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-brand-200">
              Let&apos;s build
            </span>
            <h2 className="mt-6 font-display text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
              Get 3 AI &amp; product ideas for your business — free.
            </h2>
            <p className="mt-4 text-lg text-slate-300">
              Book a discovery call or get an MVP blueprint. No pressure, no jargon —
              just a clear plan for your idea, workflow or product.
            </p>

            <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
              <a href="/book" className="btn-glow text-base">
                Book a Free Discovery Call
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                  <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
              <a
                href="mailto:hello@nexalinx.com?subject=MVP%20Blueprint"
                className="btn text-base border border-white/20 bg-white/5 text-white hover:bg-white/10"
              >
                Get an MVP Blueprint
              </a>
            </div>

            <p className="mt-6 text-sm text-slate-400">
              Prefer email? <a href="mailto:hello@nexalinx.com" className="font-semibold text-white underline underline-offset-4">hello@nexalinx.com</a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
