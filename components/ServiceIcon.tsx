import type { IconKey } from "@/lib/services";

/**
 * One shared icon set for the service pages. Every path is drawn on a 24×24
 * grid with a 1.7 stroke so icons stay optically consistent at any size.
 */
const PATHS: Record<IconKey, React.ReactNode> = {
  ai: (
    <>
      <rect x="5" y="5" width="14" height="14" rx="3.5" />
      <rect x="9" y="9" width="6" height="6" rx="1.5" />
      <path d="M12 2v3M12 19v3M2 12h3M19 12h3" strokeLinecap="round" />
    </>
  ),
  web: (
    <>
      <rect x="3" y="4" width="18" height="16" rx="2.5" />
      <path d="M3 9h18M6.5 6.5h.01M9 6.5h.01" strokeLinecap="round" />
    </>
  ),
  app: <path d="m8 6-5 6 5 6M16 6l5 6-5 6M13.5 4l-3 16" strokeLinecap="round" strokeLinejoin="round" />,
  mobile: (
    <>
      <rect x="6.5" y="2" width="11" height="20" rx="2.8" />
      <path d="M10.5 18.5h3" strokeLinecap="round" />
    </>
  ),
  shield: (
    <>
      <path d="M12 3 4.5 5.8v5.7c0 4.4 3 7.4 7.5 8.7 4.5-1.3 7.5-4.3 7.5-8.7V5.8L12 3Z" strokeLinejoin="round" />
      <path d="m9.2 12 2 2 3.6-3.8" strokeLinecap="round" strokeLinejoin="round" />
    </>
  ),
  team: (
    <>
      <circle cx="9" cy="8" r="3.2" />
      <path d="M15.4 5.6a3.2 3.2 0 0 1 0 5.6M3.5 20a5.5 5.5 0 0 1 11 0M15 14.8A5.5 5.5 0 0 1 20.5 20" strokeLinecap="round" />
    </>
  ),
  spark: (
    <>
      <circle cx="12" cy="12" r="3.2" />
      <path d="M12 2.5v3.2M12 18.3v3.2M2.5 12h3.2M18.3 12h3.2M5.6 5.6l2.3 2.3M16.1 16.1l2.3 2.3M18.4 5.6l-2.3 2.3M7.9 16.1l-2.3 2.3" strokeLinecap="round" />
    </>
  ),
  chat: (
    <>
      <path d="M20.5 12.5c0 4-3.8 7-8.5 7a9.8 9.8 0 0 1-2.7-.4L4 21l1.4-3.6A6.7 6.7 0 0 1 3.5 12.5c0-3.9 3.8-7 8.5-7s8.5 3.1 8.5 7Z" strokeLinejoin="round" />
      <path d="M8.8 12h.01M12 12h.01M15.2 12h.01" strokeLinecap="round" strokeWidth="2.4" />
    </>
  ),
  book: (
    <>
      <path d="M4 4.5A1.5 1.5 0 0 1 5.5 3H19v15H5.5A1.5 1.5 0 0 0 4 19.5v-15Z" strokeLinejoin="round" />
      <path d="M4 19.5A1.5 1.5 0 0 1 5.5 21H19M8 7.5h7M8 11h5" strokeLinecap="round" />
    </>
  ),
  flow: (
    <>
      <circle cx="5" cy="6" r="2.2" />
      <circle cx="5" cy="18" r="2.2" />
      <circle cx="19" cy="12" r="2.2" />
      <path d="M7.2 6h5.3a4.3 4.3 0 0 1 0 8.6H7.2" strokeLinecap="round" />
    </>
  ),
  doc: (
    <>
      <path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8l-5-5Z" strokeLinejoin="round" />
      <path d="M14 3v5h5M8.5 13h7M8.5 16.5h4.5" strokeLinecap="round" />
    </>
  ),
  chart: (
    <>
      <path d="M3.5 20.5h17" strokeLinecap="round" />
      <path d="M6.5 17V11M11 17V6M15.5 17v-4M20 17V9" strokeLinecap="round" />
    </>
  ),
  gauge: (
    <>
      <path d="M4 17a8.5 8.5 0 1 1 16 0" strokeLinecap="round" />
      <path d="m12 13 4-3.5" strokeLinecap="round" />
      <circle cx="12" cy="14.2" r="1.4" />
    </>
  ),
  search: (
    <>
      <circle cx="11" cy="11" r="6.8" />
      <path d="m20 20-3.9-3.9" strokeLinecap="round" />
    </>
  ),
  pen: (
    <>
      <path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L8 18l-4.5 1.5L5 15 16.5 3.5Z" strokeLinejoin="round" />
      <path d="m14.5 5.5 3 3" strokeLinecap="round" />
    </>
  ),
  cart: (
    <>
      <path d="M3 4h2.2l2.3 11.2a1.8 1.8 0 0 0 1.8 1.4h8.2a1.8 1.8 0 0 0 1.8-1.4L21 8H6" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="9.5" cy="20" r="1.2" />
      <circle cx="17.5" cy="20" r="1.2" />
    </>
  ),
  dashboard: (
    <>
      <rect x="3" y="3.5" width="7.5" height="7" rx="1.8" />
      <rect x="13.5" y="3.5" width="7.5" height="11" rx="1.8" />
      <rect x="3" y="13.5" width="7.5" height="7" rx="1.8" />
      <rect x="13.5" y="17.5" width="7.5" height="3" rx="1.5" />
    </>
  ),
  lock: (
    <>
      <rect x="4.5" y="10" width="15" height="10.5" rx="2.5" />
      <path d="M8 10V7.5a4 4 0 0 1 8 0V10" strokeLinecap="round" />
      <path d="M12 14v2.5" strokeLinecap="round" />
    </>
  ),
  portal: (
    <>
      <rect x="3" y="4" width="18" height="16" rx="2.5" />
      <path d="M9 4v16" strokeLinecap="round" />
      <path d="M12.5 9.5h5M12.5 13h3.5" strokeLinecap="round" />
    </>
  ),
  plug: (
    <>
      <path d="M9 3v5M15 3v5" strokeLinecap="round" />
      <path d="M6.5 8h11v3.5a5.5 5.5 0 0 1-11 0V8Z" strokeLinejoin="round" />
      <path d="M12 17v4" strokeLinecap="round" />
    </>
  ),
  bell: (
    <>
      <path d="M18 15.5V11a6 6 0 1 0-12 0v4.5L4.5 18h15L18 15.5Z" strokeLinejoin="round" />
      <path d="M10 21h4" strokeLinecap="round" />
    </>
  ),
  map: (
    <>
      <path d="M9 3.5 3.5 6v14.5L9 18l6 2.5 5.5-2.5V3.5L15 6 9 3.5Z" strokeLinejoin="round" />
      <path d="M9 3.5V18M15 6v14.5" strokeLinecap="round" />
    </>
  ),
  card: (
    <>
      <rect x="2.5" y="5" width="19" height="14" rx="2.5" />
      <path d="M2.5 9.5h19M6 15h3.5" strokeLinecap="round" />
    </>
  ),
  sync: (
    <>
      <path d="M20 11a8 8 0 0 0-14.3-4.8M4 13a8 8 0 0 0 14.3 4.8" strokeLinecap="round" />
      <path d="M20 4.5V11h-6.5M4 19.5V13h6.5" strokeLinecap="round" strokeLinejoin="round" />
    </>
  ),
  code: <path d="m8.5 7-5 5 5 5M15.5 7l5 5-5 5" strokeLinecap="round" strokeLinejoin="round" />,
  cpu: (
    <>
      <rect x="6.5" y="6.5" width="11" height="11" rx="2.5" />
      <rect x="10" y="10" width="4" height="4" rx="1" />
      <path d="M9.5 3v3.5M14.5 3v3.5M9.5 17.5V21M14.5 17.5V21M3 9.5h3.5M3 14.5h3.5M17.5 9.5H21M17.5 14.5H21" strokeLinecap="round" />
    </>
  ),
  bolt: <path d="M13.5 2 4.5 13.5h6.2L10 22l9.5-11.5h-6.4L13.5 2Z" strokeLinejoin="round" />,
  users: (
    <>
      <circle cx="9" cy="8" r="3.2" />
      <path d="M3.5 20a5.5 5.5 0 0 1 11 0" strokeLinecap="round" />
      <path d="M16 5.6a3.2 3.2 0 0 1 0 5.6M15.5 15a5.5 5.5 0 0 1 5 5" strokeLinecap="round" />
    </>
  ),
  check: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="m8.2 12.2 2.6 2.6 5-5.4" strokeLinecap="round" strokeLinejoin="round" />
    </>
  ),
  layers: (
    <>
      <path d="m12 3 8.5 4.5L12 12 3.5 7.5 12 3Z" strokeLinejoin="round" />
      <path d="m3.5 12 8.5 4.5 8.5-4.5M3.5 16.5 12 21l8.5-4.5" strokeLinecap="round" strokeLinejoin="round" />
    </>
  ),
  wrench: (
    <>
      <path d="M15.2 6.2a4.2 4.2 0 0 0-5.3 5.3L3.5 17.9a1.6 1.6 0 0 0 0 2.3l.3.3a1.6 1.6 0 0 0 2.3 0l6.4-6.4a4.2 4.2 0 0 0 5.3-5.3l-2.6 2.6-2.2-.4-.4-2.2 2.6-2.6Z" strokeLinejoin="round" />
    </>
  ),
  trend: (
    <>
      <path d="M3.5 16.5 9 11l3.5 3.5L20 7" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M14.5 7H20v5.5" strokeLinecap="round" strokeLinejoin="round" />
    </>
  ),
  grid: (
    <>
      <rect x="3.5" y="3.5" width="7" height="7" rx="2" />
      <rect x="13.5" y="3.5" width="7" height="7" rx="2" />
      <rect x="3.5" y="13.5" width="7" height="7" rx="2" />
      <rect x="13.5" y="13.5" width="7" height="7" rx="2" />
    </>
  ),
  blog: (
    <>
      <rect x="3.5" y="4" width="17" height="16" rx="2.5" />
      <path d="M7.5 9h9M7.5 12.5h9M7.5 16h5" strokeLinecap="round" />
    </>
  ),
  folder: (
    <>
      <path d="M3 7.5A2 2 0 0 1 5 5.5h3.6l2 2H19a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-9Z" strokeLinejoin="round" />
    </>
  ),
  rocket: (
    <>
      <path d="M12 2.5c3 2 4.8 5.4 4.8 9.2l-1.9 3.6H9.1L7.2 11.7C7.2 7.9 9 4.5 12 2.5Z" strokeLinejoin="round" />
      <circle cx="12" cy="10" r="1.8" />
      <path d="M9.1 15.3 7 17.2v3l2.8-1.4M14.9 15.3 17 17.2v3l-2.8-1.4" strokeLinecap="round" strokeLinejoin="round" />
    </>
  ),
};

export function ServiceIcon({
  name,
  className = "h-6 w-6",
}: {
  name: IconKey;
  className?: string;
}) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      aria-hidden="true"
    >
      {PATHS[name]}
    </svg>
  );
}
