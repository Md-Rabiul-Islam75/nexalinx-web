import Image from "next/image";

export function Logo({
  className = "",
  variant = "dark",
}: {
  className?: string;
  variant?: "dark" | "light";
}) {
  const wordColor = variant === "light" ? "#FFFFFF" : "#0B1E45";
  return (
    <span className={`inline-flex items-center gap-2 ${className}`}>
      <Image
        src="/nexalinx-mark.png"
        alt="Nexalinx"
        width={49}
        height={66}
        priority
        className="h-9 w-auto"
      />
      <span
        className="font-display text-xl font-bold tracking-tight"
        style={{ color: wordColor }}
      >
        Nexalinx
      </span>
    </span>
  );
}
