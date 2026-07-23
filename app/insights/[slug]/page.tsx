import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CTA } from "@/components/CTA";
import { ARTICLES, CATEGORY_META, getArticle, formatDate } from "@/lib/insights";
import type { Block } from "@/lib/insights";
import { ACCENTS } from "@/lib/serviceTheme";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return ARTICLES.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) return { title: "Insights — Nexalinx" };
  return { title: `${article.title} — Nexalinx`, description: article.excerpt };
}

export default async function ArticlePage({ params }: Params) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) notFound();

  const meta = CATEGORY_META[article.category];
  const acc = ACCENTS[meta.accent];
  const more = ARTICLES.filter((a) => a.slug !== article.slug).slice(0, 3);

  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="relative -mt-20 overflow-hidden bg-navy-gradient pt-36 pb-16 text-white sm:pt-40">
          <div className="bg-grid absolute inset-0 opacity-[0.06]" />
          <div className={`absolute -left-40 top-0 h-[30rem] w-[30rem] rounded-full ${acc.orb} blur-3xl`} />
          <div className="absolute -right-32 top-24 h-96 w-96 rounded-full bg-violet-500/20 blur-3xl" />

          <div className="container-x relative">
            <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm text-slate-400">
              <Link href="/" className="transition hover:text-white">Home</Link>
              <span aria-hidden>/</span>
              <Link href="/insights" className="transition hover:text-white">Insights</Link>
              <span aria-hidden>/</span>
              <span className="text-slate-200">{meta.label}</span>
            </nav>

            <div className="mt-10 max-w-3xl">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.06] px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-brand-100 backdrop-blur">
                <span className="h-1.5 w-1.5 rounded-full bg-accent-500" />
                {meta.label}
              </span>

              <h1 className="mt-6 font-display text-3xl font-extrabold leading-[1.12] tracking-tight sm:text-4xl lg:text-5xl">
                {article.title}
              </h1>

              <p className="mt-6 text-lg leading-relaxed text-slate-300">{article.standfirst}</p>

              <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-white/10 pt-6 text-sm">
                <span className="font-semibold text-white">{article.author.name}</span>
                <span className="text-slate-400">{article.author.role}</span>
                <span className="text-slate-400">{formatDate(article.date)}</span>
                <span className="text-slate-400">{article.readingTime}</span>
              </div>
            </div>
          </div>
        </section>

        {/* Body */}
        <article className="bg-white py-16 sm:py-20">
          <div className="container-x">
            <div className="mx-auto max-w-[46rem]">
              {article.body.map((block, i) => (
                <BodyBlock key={i} block={block} accent={acc.soft} chip={acc.chip} />
              ))}

              {/* Inline CTA */}
              <div className="mt-14 rounded-2xl border border-slate-100 bg-slate-50/80 p-7 sm:p-8">
                <p className="font-display text-lg font-bold text-ink">
                  Want this applied to your situation?
                </p>
                <p className="mt-2 text-[15px] leading-relaxed text-slate-600">
                  A discovery call is 30–45 minutes, costs nothing, and ends with an honest
                  answer — including if that answer is that you don&apos;t need us.
                </p>
                <a href="/book" className="btn-primary mt-6">
                  Book a Discovery Call
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                    <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </article>

        {/* More reading */}
        {more.length > 0 && (
          <section className="bg-slate-50/70 py-16 sm:py-20">
            <div className="container-x">
              <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
                <h2 className="font-display text-2xl font-bold text-ink sm:text-3xl">
                  Keep reading
                </h2>
                <Link
                  href="/insights"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-600 transition hover:gap-2.5"
                >
                  All insights
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                    <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
              </div>

              <div className="mt-10 grid gap-6 md:grid-cols-3">
                {more.map((a) => {
                  const m = CATEGORY_META[a.category];
                  return (
                    <Link
                      key={a.slug}
                      href={`/insights/${a.slug}`}
                      className="group flex flex-col rounded-2xl border border-slate-100 bg-white p-6 shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:shadow-soft"
                    >
                      <span className={`w-fit rounded-lg px-2.5 py-1 text-[11px] font-bold uppercase tracking-wide ${ACCENTS[m.accent].chip}`}>
                        {m.label}
                      </span>
                      <h3 className="mt-4 font-display text-base font-bold leading-snug text-ink">
                        {a.title}
                      </h3>
                      <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-500">{a.excerpt}</p>
                      <span className="mt-4 text-xs text-slate-400">{a.readingTime}</span>
                    </Link>
                  );
                })}
              </div>
            </div>
          </section>
        )}

        <CTA />
      </main>
      <Footer />
    </>
  );
}

/** Typography for one content block. Keeps the CMS out of the styling. */
function BodyBlock({
  block,
  accent,
  chip,
}: {
  block: Block;
  accent: string;
  chip: string;
}) {
  switch (block.type) {
    case "h2":
      return (
        <h2 className="mt-12 font-display text-2xl font-bold leading-snug text-ink first:mt-0 sm:text-[1.7rem]">
          {block.text}
        </h2>
      );

    case "p":
      return (
        <p className="mt-5 text-[1.0625rem] leading-[1.75] text-slate-600 first:mt-0">
          {block.text}
        </p>
      );

    case "list":
      return (
        <ul className="mt-6 space-y-3">
          {block.items.map((item) => (
            <li key={item} className="flex items-start gap-3 text-[1.0625rem] leading-[1.7] text-slate-600">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="mt-1.5 shrink-0 text-accent-500">
                <path d="M20 6 9 17l-5-5" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              {item}
            </li>
          ))}
        </ul>
      );

    case "steps":
      return (
        <ol className="mt-7 space-y-4">
          {block.items.map((item, i) => (
            <li
              key={item.title}
              className="rounded-2xl border border-slate-100 bg-white p-6 shadow-card"
            >
              <div className="flex items-center gap-3">
                <span className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-xs font-bold ${accent}`}>
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="font-display text-base font-bold text-ink">{item.title}</h3>
              </div>
              <p className="mt-3 text-[15px] leading-relaxed text-slate-600">{item.text}</p>
            </li>
          ))}
        </ol>
      );

    case "quote":
      return (
        <blockquote className="my-10 border-l-4 border-accent-500 pl-6">
          <p className="font-display text-xl font-bold leading-snug text-ink sm:text-[1.4rem]">
            {block.text}
          </p>
        </blockquote>
      );

    case "callout":
      return (
        <aside className="my-10 overflow-hidden rounded-2xl bg-navy-gradient p-7 text-white">
          <span className={`inline-flex rounded-lg px-2.5 py-1 text-[11px] font-bold uppercase tracking-wide ${chip}`}>
            {block.title}
          </span>
          <p className="mt-4 text-[15px] leading-relaxed text-slate-200">{block.text}</p>
        </aside>
      );
  }
}
