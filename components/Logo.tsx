import Image from "next/image";

export function Logo({
  className = "",
  variant = "dark",
}: {
  className?: string;
  variant?: "dark" | "light";
}) {
  const wordColor = variant === "light" ? "#FFFFFF" : "#0B1E45";
  const tagColor = variant === "light" ? "rgba(255,255,255,0.6)" : "rgba(11,30,69,0.5)";
  return (
    <span className={`inline-flex flex-col items-center leading-none ${className}`}>
      {/* Transparent, full-colour mark — reads on both dark and light headers */}
      <Image
        src="/nexalinx-mark.png"
        alt="Nexalinx"
        width={49}
        height={66}
        priority
        className="h-8 w-auto"
      />
      <span
        className="mt-1 font-display text-lg font-bold leading-none tracking-tight"
        style={{ color: wordColor }}
      >
        Nexalinx
      </span>
      <span
        className="mt-1 hidden whitespace-nowrap text-[7px] font-medium uppercase leading-none tracking-[0.03em] sm:block"
        style={{ color: tagColor }}
      >
        transforming business with technology solution
      </span>
    </span>
  );
}
