"use client";

import React from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useI18n } from "@/i18n/context";
import ScrollReveal from "@/components/ScrollReveal";
import SEOHead from "@/components/SEOHead";

const BASE = "";

function RelatedCard({ article }: { article: { slug: string; tag: string; title: string; desc: string } }) {
  return (
    <Link href={`/insights/${article.slug}`} className="card-flat group block p-5">
      <span className="text-[0.68rem] font-semibold tracking-[0.14em] uppercase" style={{ color: "#35b8b0" }}>{article.tag}</span>
      <h4 className="mt-2 text-[0.92rem] font-semibold leading-snug transition-colors" style={{ color: "#0b1f33" }}>{article.title}</h4>
      <p className="mt-2 text-[0.82rem] leading-relaxed line-clamp-3" style={{ color: "#5b6b7a" }}>{article.desc}</p>
      <span className="mt-3 inline-flex items-center gap-2 text-[0.72rem] font-semibold tracking-[0.12em] uppercase" style={{ color: "#276a91" }}>
        <span className="h-px w-5 transition-all duration-500 group-hover:w-8" style={{ backgroundColor: "#35b8b0" }} />
        READ MORE
      </span>
    </Link>
  );
}

export default function InsightDetailPage() {
  const { slug } = useParams();
  const { t } = useI18n();

  const article = t.insights.articles.find((a: { slug: string }) => a.slug === slug);

  if (!article) {
    return (
      <div className="mx-auto max-w-[1240px] px-6 py-40 text-center">
        <h1 className="text-2xl font-semibold" style={{ color: "#0b1f33" }}>Article not found</h1>
        <Link href="/insights" className="mt-6 inline-block text-sm font-semibold" style={{ color: "#276a91" }}>Back to Insights</Link>
      </div>
    );
  }

  const relatedArticles = (article.related || [])
    .map((slug: string) => t.insights.articles.find((a: { slug: string }) => a.slug === slug))
    .filter((a) => !!a);

  const paragraphs = article.body.split("\n\n").filter(Boolean);

  function renderInlineRefs(text: string, refs: { num: number; title: string; url: string }[]) {
    let parts: (string | React.JSX.Element)[] = [text];
    for (const ref of refs) {
      const newParts: (string | React.JSX.Element)[] = [];
      for (const part of parts) {
        if (typeof part !== "string") {
          newParts.push(part);
          continue;
        }
        const idx = part.indexOf(ref.title);
        if (idx === -1) {
          newParts.push(part);
          continue;
        }
        if (idx > 0) newParts.push(part.slice(0, idx));
        newParts.push(
          <a key={ref.num + ref.title} href={`https://${ref.url}`} target="_blank" rel="noopener noreferrer" className="font-semibold underline underline-offset-2 transition-colors hover:text-teal" style={{ color: "#276a91" }}>
            {ref.title}
          </a>
        );
        newParts.push(part.slice(idx + ref.title.length));
      }
      parts = newParts;
    }
    return parts;
  }

  return (
    <>
      <SEOHead
        title={article.title}
        description={article.desc}
        keywords={`${article.tag}, Vesco Science, regenerative biotechnology`}
        canonical={`https://www.vescoscience.com/insights/${article.slug}`}
      />
      {/* ===== HERO ===== */}
      <header className="relative isolate overflow-hidden" style={{ backgroundColor: "#071726" }}>
        {article.image ? (
          <img src={`${BASE}/assets/${article.image}`} alt="" className="absolute inset-0 h-full w-full object-cover" style={{ opacity: 0.3 }} />
        ) : (
          <img src={`${BASE}/assets/molecular-CIuWq-Al.jpg`} alt="" className="absolute inset-0 h-full w-full object-cover" style={{ opacity: 0.2 }} />
        )}
        <div className="absolute inset-0" style={{ background: "linear-gradient(to right, #071726, rgba(7,23,38,0.9), rgba(11,31,51,0.4))" }} />
        <div className="relative mx-auto w-full max-w-[1240px] px-6 pt-36 pb-20 md:px-10 md:pt-44 md:pb-28">
          <nav className="mb-8 text-[0.8rem]" style={{ color: "rgba(255,255,255,0.45)" }}>
            <Link href="/" className="transition-colors" style={{ color: "inherit" }}>{t.insights.breadcrumbHome}</Link>
            <span className="mx-2" style={{ color: "rgba(255,255,255,0.25)" }}>/</span>
            <Link href="/insights" className="transition-colors" style={{ color: "inherit" }}>{t.insights.heroEyebrow}</Link>
            <span className="mx-2" style={{ color: "rgba(255,255,255,0.25)" }}>/</span>
            <span style={{ color: "rgba(255,255,255,0.75)" }}>{article.title}</span>
          </nav>
          <p className="eyebrow" style={{ color: "#35b8b0" }}>
            <span className="mr-3 inline-block h-px w-8 align-middle opacity-50" style={{ backgroundColor: "currentColor" }} />
            {article.tag}
          </p>
          <h1 className="mt-6 max-w-4xl text-white font-semibold leading-[1.08] text-[clamp(1.8rem,4vw,3.2rem)]">
            {article.title}
          </h1>
          <p className="mt-6 max-w-3xl text-[1.0625rem] leading-relaxed" style={{ color: "rgba(255,255,255,0.7)" }}>
            {article.desc}
          </p>
        </div>
        <div className="absolute inset-x-0 bottom-0 h-px" style={{ background: "linear-gradient(to right, transparent, rgba(53,184,176,0.6), transparent)" }} />
      </header>

      {/* ===== ARTICLE CONTENT ===== */}
      <section className="relative" style={{ backgroundColor: "#f7fafc" }}>
        <div className="mx-auto w-full max-w-[1240px] px-6 py-20 md:px-10 md:py-28">
          <div className="grid gap-14 lg:grid-cols-[1fr_0.4fr]">
            {/* Main content */}
            <article>
              <div className="max-w-3xl">
                {paragraphs.map((p: string, i: number) => {
                  if (p.startsWith("1.") || p.startsWith("2.") || p.startsWith("3.") || p.startsWith("4.") || p.startsWith("5.") || p.startsWith("6.") || p.startsWith("7.") || p.startsWith("8.") || p.startsWith("9.")) {
                    const parts = p.split("\n").filter(Boolean);
                    const heading = parts[0];
                    const body = parts.slice(1).join(" ");
                    return (
                      <div key={i} className="mt-10">
                        <h3 className="text-[1.15rem] font-semibold" style={{ color: "#0b1f33" }}>{heading}</h3>
                        {body && <p className="mt-3 text-[0.95rem] leading-relaxed" style={{ color: "#5b6b7a" }}>{renderInlineRefs(body, article.references || [])}</p>}
                      </div>
                    );
                  }
                  if (p.includes("\n")) {
                    const lines = p.split("\n");
                    return (
                      <div key={i} className="mt-6">
                        {lines.map((line: string, j: number) => (
                          <p key={j} className="mt-3 text-[0.95rem] leading-relaxed" style={{ color: "#5b6b7a" }}>{renderInlineRefs(line, article.references || [])}</p>
                        ))}
                      </div>
                    );
                  }
                  return (
                    <p key={i} className="mt-6 text-[0.95rem] leading-relaxed" style={{ color: "#5b6b7a" }}>{renderInlineRefs(p, article.references || [])}</p>
                  );
                })}

                <p className="mt-8 text-[0.82rem] italic" style={{ color: "#5b6b7a" }}>
                  Editorial article prepared for this preview. Product-specific and batch-specific data are issued with formal documentation and are not attached on this page.
                </p>

                <Link href="/contact" className="mt-10 inline-flex items-center gap-3 rounded-sm px-7 py-3.5 text-[0.8rem] font-semibold tracking-[0.14em] uppercase transition-all duration-300" style={{ backgroundColor: "#35b8b0", color: "#05231f" }}>
                  {t.insights.ctaText}
                </Link>
              </div>
            </article>

            {/* Sidebar */}
            <aside className="lg:sticky lg:top-28 lg:self-start">
              {/* Category */}
              <div className="mb-8">
                <span className="text-[0.68rem] font-bold tracking-[0.18em] uppercase" style={{ color: "#276a91" }}>
                  {t.insights.categoryLabel}
                </span>
                <span className="mt-3 block rounded-sm px-4 py-2 text-[0.8rem] font-semibold" style={{ backgroundColor: "rgba(53,184,176,0.1)", color: "#35b8b0", border: "1px solid rgba(53,184,176,0.3)" }}>
                  {article.tag}
                </span>
              </div>

              {/* Related Reading */}
              {relatedArticles.length > 0 && (
                <div>
                  <span className="text-[0.68rem] font-bold tracking-[0.18em] uppercase" style={{ color: "#276a91" }}>
                    {t.insights.relatedReadingLabel}
                  </span>
                  <div className="mt-4 space-y-4">
                    {relatedArticles.map((rel: any, i: number) => (
                      <RelatedCard key={i} article={rel} />
                    ))}
                  </div>
                </div>
              )}

              <Link href="/insights" className="mt-8 inline-flex items-center gap-3 rounded-sm px-6 py-3 text-[0.8rem] font-semibold tracking-[0.12em] uppercase transition-colors" style={{ border: "1px solid #dde5ec", color: "#0b1f33" }}>
                {t.insights.backToInsights}
              </Link>
            </aside>
          </div>
        </div>
      </section>

      {/* ===== CTA BANNER ===== */}
      <section className="relative isolate overflow-hidden" style={{ backgroundColor: "#0b1f33" }}>
        <div className="absolute inset-0 navy-grid" style={{ opacity: 0.6 }} />
        <div className="absolute -top-24 -right-16 h-72 w-72 rounded-full blur-3xl" style={{ background: "radial-gradient(circle, rgba(53,184,176,0.28), transparent 70%)" }} />
        <div className="relative mx-auto w-full max-w-[1240px] px-6 py-20 md:px-10 md:py-24">
          <ScrollReveal>
            <div className="grid gap-10 lg:grid-cols-[1.6fr_1fr] lg:items-end">
              <div>
                <h2 className="max-w-2xl text-white text-[clamp(1.6rem,3vw,2.5rem)] leading-[1.14] font-semibold">
                  {t.ctaBanner.title}
                </h2>
                <p className="mt-5 max-w-xl text-[1rem] leading-relaxed" style={{ color: "rgba(255,255,255,0.65)" }}>
                  {t.ctaBanner.subtitle}
                </p>
              </div>
              <div className="flex flex-wrap gap-3 lg:justify-end">
                <Link href="/contact" className="inline-flex items-center gap-3 rounded-sm px-7 py-3.5 text-[0.8rem] font-semibold tracking-[0.14em] uppercase transition-all duration-300" style={{ backgroundColor: "#35b8b0", color: "#05231f" }}>
                  {t.ctaBanner.cta1}
                </Link>
                <Link href="/contact" className="inline-flex items-center gap-3 rounded-sm px-7 py-3.5 text-[0.8rem] font-semibold tracking-[0.14em] uppercase transition-all duration-300" style={{ border: "1px solid rgba(255,255,255,0.25)", color: "#fff" }}>
                  {t.ctaBanner.cta2}
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
