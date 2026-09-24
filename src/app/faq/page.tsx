"use client";

import { useState } from "react";
import Link from "next/link";
import { useI18n } from "@/i18n/context";
import ScrollReveal from "@/components/ScrollReveal";
import SEOHead from "@/components/SEOHead";

const BASE = "";

function FAQItem({ question, answer, isOpen, onToggle }: { question: string; answer: string; isOpen: boolean; onToggle: () => void }) {
  return (
    <div className="border-b" style={{ borderColor: "#dde5ec" }}>
      <button
        onClick={onToggle}
        className="flex w-full items-start justify-between gap-6 py-5 text-left"
      >
        <span className="text-[1rem] font-semibold" style={{ color: "#0b1f33" }}>{question}</span>
        <svg
          className="mt-1 h-4 w-4 shrink-0 transition-transform duration-300"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          style={{ color: "#276a91", transform: isOpen ? "rotate(180deg)" : "none" }}
        >
          <path d="m6 9 6 6 6-6" />
        </svg>
      </button>
      <div
        className="overflow-hidden transition-all duration-400"
        style={{ maxHeight: isOpen ? "300px" : "0", opacity: isOpen ? 1 : 0 }}
      >
        <p className="pb-6 pr-6 md:pr-10 text-[0.95rem] leading-relaxed" style={{ color: "#5b6b7a" }}>
          {answer}
        </p>
      </div>
    </div>
  );
}

export default function FAQPage() {
  const { t } = useI18n();
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({});

  const toggleItem = (key: string) => {
    setOpenItems(prev => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <>
      <SEOHead
        title="Frequently Asked Questions — Vesco Science"
        description="Common questions about Vesco Science products, technology, manufacturing capabilities, and partnership opportunities."
        keywords="biotech FAQ, exosome FAQ, manufacturing questions, partnership FAQ"
        canonical="https://www.vescoscience.com/faq"
      />
      {/* ===== HERO ===== */}
      <header className="relative isolate overflow-hidden" style={{ backgroundColor: "#071726" }}>
        <img src={`${BASE}/assets/qc-lab-mOryit6A.jpg`} alt="" className="absolute inset-0 h-full w-full object-cover" style={{ opacity: 0.3 }} />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to right, #071726, rgba(7,23,38,0.9), rgba(11,31,51,0.4))" }} />
        <div className="relative mx-auto w-full max-w-[1240px] px-6 pt-36 pb-20 md:px-10 md:pt-44 md:pb-28">
          <nav className="mb-8 text-[0.8rem]" style={{ color: "rgba(255,255,255,0.45)" }}>
            <Link href="/" className="transition-colors" style={{ color: "inherit" }}>{t.faq.breadcrumbHome}</Link>
            <span className="mx-2" style={{ color: "rgba(255,255,255,0.25)" }}>/</span>
            <span style={{ color: "rgba(255,255,255,0.75)" }}>{t.faq.heroEyebrow}</span>
          </nav>
          <p className="eyebrow" style={{ color: "#35b8b0" }}>
            <span className="mr-3 inline-block h-px w-8 align-middle opacity-50" style={{ backgroundColor: "currentColor" }} />
            {t.faq.heroEyebrow}
          </p>
          <h1 className="mt-6 max-w-4xl text-white font-semibold leading-[1.06] text-[clamp(2.1rem,4.6vw,3.9rem)]">
            {t.faq.heroTitle}
          </h1>
          <p className="mt-7 max-w-2xl text-[1.0625rem] leading-relaxed" style={{ color: "rgba(255,255,255,0.7)" }}>
            {t.faq.heroSubtitle}
          </p>
        </div>
        <div className="absolute inset-x-0 bottom-0 h-px" style={{ background: "linear-gradient(to right, transparent, rgba(53,184,176,0.6), transparent)" }} />
      </header>

      {/* ===== FAQ CONTENT ===== */}
      <section className="relative" style={{ backgroundColor: "#f7fafc" }}>
        <div className="mx-auto w-full max-w-[1240px] px-6 py-20 md:px-10 md:py-28">
          <div className="grid gap-14 lg:grid-cols-[0.8fr_2.2fr]">
            <div className="max-w-3xl">
              <p className="eyebrow">
                <span className="mr-3 inline-block h-px w-8 align-middle opacity-50" style={{ backgroundColor: "currentColor" }} />
                {t.faq.sectionEyebrow}
              </p>
              <h2 className="mt-5 text-[clamp(1.75rem,3.4vw,2.85rem)] leading-[1.12] font-semibold" style={{ color: "#0b1f33" }}>
                {t.faq.sectionTitle}
              </h2>
            </div>
            <div className="space-y-12">
              {t.faq.sections.map((section: { category: string; items: { q: string; a: string }[] }, sIdx: number) => (
                <div key={sIdx}>
                  <h3 className="text-[0.72rem] font-bold tracking-[0.2em] uppercase" style={{ color: "#276a91" }}>
                    {section.category}
                  </h3>
                  <div className="mt-5 border-t" style={{ borderColor: "#dde5ec" }}>
                    {section.items.map((item: { q: string; a: string }, iIdx: number) => {
                      const key = `${sIdx}-${iIdx}`;
                      return (
                        <FAQItem
                          key={iIdx}
                          question={item.q}
                          answer={item.a}
                          isOpen={!!openItems[key]}
                          onToggle={() => toggleItem(key)}
                        />
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
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
