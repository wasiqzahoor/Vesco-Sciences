"use client";

import Link from "next/link";
import { useI18n } from "@/i18n/context";
import ScrollReveal from "@/components/ScrollReveal";
import SEOHead from "@/components/SEOHead";
import { Box, Factory, FlaskConical, ClipboardCheck, Send, ChevronRight, ArrowRight } from "lucide-react";

const BASE = "";

const flowIcons = [Box, Factory, FlaskConical, ClipboardCheck, Send];

export default function QualityPage() {
  const { t } = useI18n();
  return (
    <>
      <SEOHead
        title="Quality Management — Vesco Science"
        description="Vesco Science quality management system: GMP standards, analytical testing, batch release, and regulatory compliance for biologics."
        keywords="quality management, GMP biologics, batch release, regulatory compliance"
        canonical="https://www.vescoscience.com/quality"
      />
      {/* ===== HERO ===== */}
      <header className="relative isolate overflow-hidden" style={{ backgroundColor: "#071726" }}>
        <img src={`${BASE}/assets/qc-lab-mOryit6A.jpg`} alt="" className="absolute inset-0 h-full w-full object-cover" style={{ opacity: 0.3 }} />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to right, #071726, rgba(7,23,38,0.9), rgba(11,31,51,0.4))" }} />
        <div className="relative mx-auto w-full max-w-[1240px] px-6 pt-36 pb-20 md:px-10 md:pt-44 md:pb-28">
          <nav className="mb-8 text-[0.8rem]" style={{ color: "rgba(255,255,255,0.45)" }}>
            <Link href="/" className="transition-colors" style={{ color: "inherit" }}>{t.quality.breadcrumbHome}</Link>
            <span className="mx-2" style={{ color: "rgba(255,255,255,0.25)" }}>/</span>
            <span style={{ color: "rgba(255,255,255,0.75)" }}>{t.quality.heroEyebrow}</span>
          </nav>
          <p className="eyebrow" style={{ color: "#35b8b0" }}>
            <span className="mr-3 inline-block h-px w-8 align-middle opacity-50" style={{ backgroundColor: "currentColor" }} />
            {t.quality.heroEyebrow}
          </p>
          <h1 className="mt-6 max-w-4xl text-white font-semibold leading-[1.06] text-[clamp(2.1rem,4.6vw,3.9rem)]">
            {t.quality.heroTitle}
          </h1>
          <p className="mt-7 max-w-2xl text-[1.0625rem] leading-relaxed" style={{ color: "rgba(255,255,255,0.7)" }}>
            {t.quality.heroSubtitle}
          </p>
        </div>
        <div className="absolute inset-x-0 bottom-0 h-px" style={{ background: "linear-gradient(to right, transparent, rgba(53,184,176,0.6), transparent)" }} />
      </header>

      {/* ===== QUALITY FROM SOURCE TO SHIPMENT — Light modern (reference design) ===== */}
      <section className="relative overflow-hidden" style={{ backgroundColor: "#eef4fa" }}>
        <div className="absolute -top-24 right-1/4 h-[360px] w-[360px] rounded-full blur-[140px]" style={{ background: "radial-gradient(circle, rgba(43,108,176,0.12), transparent 70%)" }} />
        <div className="relative mx-auto w-full max-w-[1240px] px-6 py-20 md:px-10 md:py-28">
          <div className="grid gap-10 lg:grid-cols-[1fr_400px] lg:items-center">
            <ScrollReveal>
              <div>
                <p className="text-[0.8rem] font-bold tracking-[0.18em] uppercase" style={{ color: "#2b6cb0" }}>{t.quality.sectionEyebrow}</p>
                <span className="mt-2 block h-[3px] w-12 rounded-full" style={{ backgroundColor: "#2b6cb0" }} />
                <h2 className="mt-5 max-w-xl text-[clamp(2.1rem,3.8vw,3.2rem)] leading-[1.08] font-extrabold" style={{ color: "#0b1f33", letterSpacing: "-0.02em" }}>
                  {t.quality.sectionTitle}
                </h2>
                <p className="mt-5 max-w-xl text-[1.02rem] leading-relaxed" style={{ color: "#5b6b7a" }}>
                  {t.quality.sectionDesc}
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal className="hidden lg:block">
              <div className="overflow-hidden rounded-[1.75rem]" style={{ boxShadow: "0 25px 60px rgba(11,31,51,0.15)" }}>
                <img src={`${BASE}/assets/qc-lab-side2.jpg`} alt="Quality laboratory" className="aspect-[5/5] w-full object-cover" />
              </div>
            </ScrollReveal>
          </div>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-6">
            {t.quality.stageCards.map((card: { num: string; title: string; desc: string; img: string }, i: number) => (
              <ScrollReveal key={i} className="h-full">
                <div className="flex h-full flex-col rounded-xl p-5 text-center transition-all duration-300 hover:-translate-y-1" style={{ backgroundColor: "#fff", border: "1px solid rgba(221,229,236,0.9)", boxShadow: "0 10px 30px rgba(11,31,51,0.07)" }}>
                  <p className="text-left text-[0.8rem] font-extrabold" style={{ color: "#2b6cb0" }}>{card.num}</p>
                  <img src={`${BASE}/assets/${card.img}`} alt={card.title} className="mx-auto mt-2 h-20 w-20 rounded-full object-cover" style={{ border: "2px solid rgba(43,108,176,0.15)" }} />
                  <h3 className="mt-3 text-[0.92rem] leading-snug font-bold" style={{ color: "#0b1f33" }}>{card.title}</h3>
                  <p className="mt-1.5 flex-1 text-[0.75rem] leading-relaxed" style={{ color: "#5b6b7a" }}>{card.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
          <ScrollReveal>
            <div className="mt-8 flex flex-col items-stretch gap-6 rounded-2xl p-5 sm:p-6 lg:flex-row lg:items-center" style={{ backgroundColor: "rgba(255,255,255,0.75)", border: "1px solid rgba(221,229,236,0.9)" }}>
              <div className="flex flex-1 flex-wrap items-center gap-x-2 gap-y-4">
                {t.quality.flowLabels.map((label: string, i: number) => {
                  const FIcon = flowIcons[i % flowIcons.length];
                  return (
                    <span key={i} className="flex items-center gap-2">
                      <span className="flex items-center gap-2.5">
                        <span className="flex h-11 w-11 items-center justify-center" style={{ backgroundColor: "rgba(43,108,176,0.08)", border: "1px solid rgba(43,108,176,0.2)", clipPath: "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)" }}>
                          <FIcon className="h-5 w-5" style={{ color: "#2b6cb0" }} strokeWidth={1.5} />
                        </span>
                        <span className="text-[0.78rem] font-semibold" style={{ color: "#0b1f33" }}>{label}</span>
                      </span>
                      {i < t.quality.flowLabels.length - 1 && (
                        <ChevronRight className="mx-1 h-4 w-4 shrink-0" style={{ color: "rgba(43,108,176,0.5)" }} />
                      )}
                    </span>
                  );
                })}
              </div>
              <Link href="#quality-systems" className="inline-flex shrink-0 items-center justify-center gap-2 rounded-lg px-7 py-3.5 text-[0.85rem] font-bold transition-all duration-300 hover:shadow-lg" style={{ backgroundColor: "#2563eb", color: "#fff" }}>
                {t.quality.flowCta}
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ===== QUALITY SYSTEMS ===== */}
      <section id="quality-systems" className="relative isolate overflow-hidden" style={{ backgroundColor: "#0b1f33" }}>
        <div className="absolute inset-0 navy-grid" style={{ opacity: 0.6 }} />
        <div className="relative mx-auto w-full max-w-[1240px] px-6 py-20 md:px-10 md:py-28">
          <div className="max-w-3xl">
            <p className="eyebrow" style={{ color: "#35b8b0" }}>
              <span className="mr-3 inline-block h-px w-8 align-middle opacity-50" style={{ backgroundColor: "currentColor" }} />
              {t.quality.systemsEyebrow}
            </p>
            <h2 className="mt-5 text-[clamp(1.75rem,3.4vw,2.85rem)] leading-[1.12] font-semibold text-white">
              {t.quality.systemsTitle}
            </h2>
          </div>
          <div className="mt-12 grid gap-px sm:grid-cols-2 lg:grid-cols-4" style={{ backgroundColor: "rgba(255,255,255,0.1)" }}>
            {t.quality.systems.map((sys: { num: string; title: string }, i: number) => (
              <ScrollReveal key={i}>
                <div className="flex h-full flex-col p-8" style={{ backgroundColor: "#0b1f33" }}>
                  <span className="text-[0.72rem] font-bold tracking-[0.14em]" style={{ color: "#35b8b0" }}>{sys.num}</span>
                  <h3 className="mt-4 text-[1rem] font-semibold text-white">{sys.title}</h3>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== EXOSOME CHARACTERIZATION ===== */}
      <section className="relative" style={{ backgroundColor: "#f7fafc" }}>
        <div className="mx-auto w-full max-w-[1240px] px-6 py-20 md:px-10 md:py-28">
          <div className="max-w-3xl">
            <p className="eyebrow">
              <span className="mr-3 inline-block h-px w-8 align-middle opacity-50" style={{ backgroundColor: "currentColor" }} />
              {t.quality.charEyebrow}
            </p>
            <h2 className="mt-5 text-[clamp(1.75rem,3.4vw,2.85rem)] leading-[1.12] font-semibold" style={{ color: "#0b1f33" }}>
              {t.quality.charTitle}
            </h2>
            <p className="mt-5 max-w-2xl text-[1.0625rem] leading-relaxed" style={{ color: "#5b6b7a" }}>
              {t.quality.charDesc}
            </p>
          </div>
          <div className="mt-12 grid gap-px sm:grid-cols-2 lg:grid-cols-4" style={{ backgroundColor: "#dde5ec" }}>
            {t.quality.charCards.map((card: { title: string; items: string[] }, i: number) => (
              <ScrollReveal key={i}>
                <div className="flex h-full flex-col p-8" style={{ backgroundColor: "#fff" }}>
                  <h3 className="text-[1rem] font-semibold" style={{ color: "#0b1f33" }}>{card.title}</h3>
                  <ul className="mt-4 space-y-2">
                    {card.items.map((item: string, j: number) => (
                      <li key={j} className="flex items-start gap-2 text-[0.88rem] leading-relaxed" style={{ color: "#5b6b7a" }}>
                        <span className="mt-2 block h-1.5 w-1.5 shrink-0 rounded-full" style={{ backgroundColor: "#35b8b0" }} />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>
            ))}
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
