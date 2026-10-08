"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Hero background video.
 *
 * Browsers block autoplay on any video that starts with audio, so the clip
 * starts muted (which always plays) and we try to unmute on the visitor's first
 * interaction with the page. The toggle in the corner lets them take it back.
 */
export function HeroVideo() {
  const ref = useRef<HTMLVideoElement>(null);
  const [muted, setMuted] = useState(true);

  // First real interaction anywhere on the page unmutes the clip.
  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const enableSound = () => {
      el.muted = false;
      el.volume = 0.55;
      void el.play().catch(() => {
        /* still blocked — the toggle stays available */
      });
      setMuted(el.muted);
    };

    const events: (keyof WindowEventMap)[] = ["pointerdown", "keydown", "touchstart"];
    events.forEach((e) => window.addEventListener(e, enableSound, { once: true, passive: true }));
    return () => events.forEach((e) => window.removeEventListener(e, enableSound));
  }, []);

  const toggle = () => {
    const el = ref.current;
    if (!el) return;
    el.muted = !el.muted;
    if (!el.muted) el.volume = 0.55;
    void el.play().catch(() => {});
    setMuted(el.muted);
  };

  return (
    <>
      <video
        ref={ref}
        className="absolute inset-0 h-full w-full object-cover"
        style={{ filter: "brightness(1.45) contrast(1.06) saturate(1.1)" }}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
      >
        <source src="/brand-video-final_20261008160553.mp4" type="video/mp4" />
      </video>

      <button
        type="button"
        onClick={toggle}
        aria-pressed={!muted}
        aria-label={muted ? "Unmute background video" : "Mute background video"}
        className="absolute bottom-6 right-6 z-20 flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-md transition hover:scale-105 hover:bg-white/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-500 sm:bottom-8 sm:right-8"
      >
        {muted ? (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9">
            <path d="M11 5 6.5 9H3v6h3.5L11 19V5Z" strokeLinejoin="round" />
            <path d="m16 9.5 5 5M21 9.5l-5 5" strokeLinecap="round" />
          </svg>
        ) : (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9">
            <path d="M11 5 6.5 9H3v6h3.5L11 19V5Z" strokeLinejoin="round" />
            <path d="M15.5 9a4 4 0 0 1 0 6M18.5 6.5a8 8 0 0 1 0 11" strokeLinecap="round" />
          </svg>
        )}
      </button>
    </>
  );
}
