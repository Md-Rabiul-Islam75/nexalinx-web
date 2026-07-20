export function Logo({
  className = "",
  variant = "dark",
}: {
  className?: string;
  variant?: "dark" | "light";
}) {
  const wordColor = variant === "light" ? "#FFFFFF" : "#0B1E45";
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <svg
        width="38"
        height="38"
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        className="shrink-0"
      >
        <defs>
          <linearGradient id="nx-grad" x1="4" y1="6" x2="44" y2="42" gradientUnits="userSpaceOnUse">
            <stop stopColor="#2E6BF0" />
            <stop offset="1" stopColor="#6D28D9" />
          </linearGradient>
        </defs>
        <rect x="1.5" y="1.5" width="45" height="45" rx="12" fill="url(#nx-grad)" />
        {/* Stylised N */}
        <path
          d="M14 34V16.5c0-.7.86-1.05 1.35-.55L30 30.5V15"
          stroke="#fff"
          strokeWidth="3.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* pixel dots echoing the logo */}
        <rect x="30.5" y="13" width="3.2" height="3.2" rx="0.8" fill="#fff" opacity="0.95" />
        <rect x="34.6" y="13" width="3.2" height="3.2" rx="0.8" fill="#fff" opacity="0.7" />
        <rect x="34.6" y="17.1" width="3.2" height="3.2" rx="0.8" fill="#fff" opacity="0.45" />
      </svg>
      <span
        className="font-display text-xl font-bold tracking-tight"
        style={{ color: wordColor }}
      >
        Nexalinx
      </span>
    </span>
  );
}
