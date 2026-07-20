const ITEMS = [
  "USA setup",
  "AI / Web / Mobile capability",
  "Complex app experience",
  "Weekly demo",
  "Senior-led delivery",
];

export function TrustBar() {
  return (
    <section aria-label="Why teams trust Nexalinx" className="border-y border-slate-100 bg-slate-50/60">
      <div className="container-x py-6">
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-center">
          {ITEMS.map((item, i) => (
            <div key={item} className="flex items-center gap-8">
              <span className="flex items-center gap-2 text-sm font-semibold text-slate-600">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="text-brand-500">
                  <path
                    d="M20 6L9 17l-5-5"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                {item}
              </span>
              {i < ITEMS.length - 1 && (
                <span className="hidden h-1 w-1 rounded-full bg-slate-300 sm:block" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
