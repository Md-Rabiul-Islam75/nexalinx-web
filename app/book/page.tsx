import type { Metadata } from "next";
import Link from "next/link";
import { Logo } from "@/components/Logo";
import { BookingWidget } from "@/components/BookingWidget";

export const metadata: Metadata = {
  title: "Book a Discovery Call — Nexalinx",
  description:
    "Book a free 30-minute AI / product discovery call with the Nexalinx team. Pick a time that works for you — we'll send a Google Meet link.",
};

export default function BookPage() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-navy-gradient text-white">
      <div className="bg-grid absolute inset-0 opacity-[0.06]" />
      <div className="absolute -left-40 top-10 h-[30rem] w-[30rem] rounded-full bg-brand-500/20 blur-3xl" />
      <div className="absolute -right-32 top-40 h-96 w-96 rounded-full bg-violet-600/20 blur-3xl" />

      {/* Slim header */}
      <header className="relative">
        <div className="container-x flex h-20 items-center justify-between">
          <Link href="/" aria-label="Nexalinx home">
            <Logo variant="light" />
          </Link>
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-white/70 transition hover:text-white"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
              <path d="M15 6l-6 6 6 6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Back to site
          </Link>
        </div>
      </header>

      <main className="relative pb-20">
        {/* Urgency banner */}
        <div className="container-x pt-6 text-center sm:pt-10">
          <p className="font-display text-xl font-bold sm:text-2xl">
            Spots are filling up — viewed{" "}
            <span className="text-accent-400">223</span> times in the past 24 hours.
          </p>
          <p className="mx-auto mt-2 max-w-xl text-sm text-slate-300">
            Free 30-minute AI / product discovery call · senior-led · no pressure, no jargon.
          </p>
        </div>

        {/* Booking widget */}
        <div className="container-x mt-8 sm:mt-10">
          <div className="mx-auto max-w-5xl">
            <BookingWidget />
          </div>
          <p className="mx-auto mt-6 max-w-5xl text-center text-xs text-slate-400">
            Prefer email? Reach us at{" "}
            <a href="mailto:hello@nexalinx.com" className="font-semibold text-white underline underline-offset-4">
              hello@nexalinx.com
            </a>
          </p>
        </div>
      </main>
    </div>
  );
}
