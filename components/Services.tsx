import Image from "next/image";
import Link from "next/link";

import { ServiceIcon } from "./ServiceIcon";
import { SERVICES } from "@/lib/services";
import { ACCENTS } from "@/lib/serviceTheme";

/** Three headline capabilities shown on each home-page card. */
const PREVIEW_COUNT = 3;

export function Services() {
  return (
    <section id="services" className="scroll-mt-24 py-16 sm:py-20">
      <div className="container-x">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">What we build</span>
          <h2 className="section-title mt-5">
            One partner for AI, web &amp; mobile —{" "}
            <span className="text-gradient">from idea to scale</span>
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            International buyers don&apos;t buy a service list — they buy a business outcome.
            Every engagement is shaped around yours.
          </p>
        </div>

        <div className="mt-14 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s) => {
            const a = ACCENTS[s.accent];
            return (
              <Link
                key={s.slug}
                href={`/services/${s.slug}`}
                className="group flex flex-col overflow-hidden rounded-[1.4rem] border border-slate-100 bg-white shadow-card transition-all duration-300 hover:-translate-y-2 hover:shadow-soft"
              >
                {/* Image header */}
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={s.image}
                    alt={s.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover"
                  />
                  {/* Tint so the photo sits on-brand + blends into the white body */}
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950/50 via-navy-950/5 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-white to-transparent" />
                </div>

                {/* Floating icon badge on the seam */}
                <div className="relative px-6">
                  <div
                    className={`absolute -top-7 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${a.grad} text-white shadow-lg ring-4 ring-white transition-transform duration-300 group-hover:scale-110`}
                  >
                    <ServiceIcon name={s.icon} />
                  </div>
                </div>

                {/* Body */}
                <div className="flex flex-1 flex-col px-6 pb-6 pt-9">
                  <h3 className="font-display text-lg font-bold text-ink">{s.name}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-500">{s.summary}</p>

                  <ul className="mt-4 flex-1 space-y-2">
                    {s.deliverables.slice(0, PREVIEW_COUNT).map((d) => (
                      <li key={d.title} className="flex items-start gap-2 text-sm text-slate-600">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="mt-0.5 shrink-0 text-accent-500">
                          <path d="M20 6 9 17l-5-5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        {d.title}
                      </li>
                    ))}
                  </ul>

                  <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-600 transition-all group-hover:gap-2.5">
                    Explore service
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                      <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                </div>
              </Link>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <Link href="/services" className="btn-ghost">
            Compare all six service lanes
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
              <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
