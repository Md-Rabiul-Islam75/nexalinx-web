function Stars() {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} width="15" height="15" viewBox="0 0 24 24" fill="#1FA6ED" aria-hidden="true">
          <path d="M12 2l2.9 6.3 6.8.8-5 4.6 1.3 6.7L12 17.9 5.9 20.4l1.3-6.7-5-4.6 6.8-.8z" />
        </svg>
      ))}
    </div>
  );
}

const PLATFORMS = [
  {
    name: "G2 Reviews",
    badge: (
      <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#FF492C] text-[13px] font-extrabold text-white">
        G2
      </span>
    ),
  },
  {
    name: "Google Reviews",
    badge: (
      <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-card">
        <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true">
          <path fill="#4285F4" d="M23 12.3c0-.8-.1-1.6-.2-2.3H12v4.5h6.2c-.3 1.5-1.1 2.7-2.4 3.5v2.9h3.9c2.3-2.1 3.6-5.2 3.6-8.6z" />
          <path fill="#34A853" d="M12 24c3.2 0 6-1.1 8-2.9l-3.9-2.9c-1.1.7-2.5 1.2-4.1 1.2-3.1 0-5.8-2.1-6.7-5H1.3v3C3.3 21.3 7.3 24 12 24z" />
          <path fill="#FBBC05" d="M5.3 14.3c-.2-.7-.4-1.5-.4-2.3s.1-1.6.4-2.3v-3H1.3C.5 8.3 0 10.1 0 12s.5 3.7 1.3 5.3l4-3z" />
          <path fill="#EA4335" d="M12 4.8c1.8 0 3.3.6 4.6 1.8l3.4-3.4C18 1.2 15.2 0 12 0 7.3 0 3.3 2.7 1.3 6.7l4 3c.9-2.9 3.6-5 6.7-5z" />
        </svg>
      </span>
    ),
  },
  {
    name: "Clutch Reviews",
    badge: (
      <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#17313B] text-[10px] font-bold text-white">
        <span className="flex items-center gap-0.5">
          Clutch
        </span>
      </span>
    ),
  },
];

export function Reviews({
  variant = "dark",
  compact = false,
}: {
  variant?: "dark" | "light";
  compact?: boolean;
}) {
  const name = variant === "dark" ? "text-white" : "text-ink";
  return (
    <div
      className={`flex flex-wrap items-center gap-y-4 ${
        compact ? "justify-start gap-x-6" : "justify-center gap-x-10"
      }`}
    >
      {PLATFORMS.map((p) => (
        <div key={p.name} className="flex items-center gap-2.5">
          {p.badge}
          <div className="text-left">
            <Stars />
            <p className={`mt-0.5 text-[11px] font-semibold ${name}`}>{p.name}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
