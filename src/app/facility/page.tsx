"use client";

import Link from "next/link";
import { useI18n } from "@/i18n/context";
import ScrollReveal from "@/components/ScrollReveal";
import SEOHead from "@/components/SEOHead";

const BASE = "";

export default function FacilityPage() {
  const { t } = useI18n();
  return (
    <>
      <SEOHead
        title="Manufacturing Facility — Vesco Science"
        description="Vesco Science state-of-the-art biologics manufacturing facility in Korea with cleanroom, lyophilization, and quality control labs."
        keywords="biotech manufacturing facility, cleanroom Korea, biologics production"
        canonical="https://www.vescoscience.com/facility"
      />
      {/* ===== HERO ===== */}
      <header className="relative isolate overflow-hidden" style={{ backgroundColor: "#071726" }}>
        <img src={`${BASE}/assets/vials-Ck5soEMR.jpg`} alt="" className="absolute inset-0 h-full w-full object-cover" style={{ opacity: 0.3 }} />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to right, #071726, rgba(7,23,38,0.9), rgba(11,31,51,0.4))" }} />
        <div className="relative mx-auto w-full max-w-[1240px] px-6 pt-36 pb-20 md:px-10 md:pt-44 md:pb-28">
          <nav className="mb-8 text-[0.8rem]" style={{ color: "rgba(255,255,255,0.45)" }}>
            <Link href="/" className="transition-colors" style={{ color: "inherit" }}>{t.facility.breadcrumbHome}</Link>
            <span className="mx-2" style={{ color: "rgba(255,255,255,0.25)" }}>/</span>
            <span style={{ color: "rgba(255,255,255,0.75)" }}>{t.facility.breadcrumbFacility}</span>
          </nav>
          <p className="eyebrow" style={{ color: "#35b8b0" }}>
            <span className="mr-3 inline-block h-px w-8 align-middle opacity-50" style={{ backgroundColor: "currentColor" }} />
            {t.facility.heroEyebrow}
          </p>
          <h1 className="mt-6 max-w-4xl text-white font-semibold leading-[1.06] text-[clamp(2.1rem,4.6vw,3.9rem)]">
            {t.facility.heroTitle}
          </h1>
          <p className="mt-7 max-w-2xl text-[1.0625rem] leading-relaxed" style={{ color: "rgba(255,255,255,0.7)" }}>
            {t.facility.heroSubtitle}
          </p>
        </div>
        <div className="absolute inset-x-0 bottom-0 h-px" style={{ background: "linear-gradient(to right, transparent, rgba(53,184,176,0.6), transparent)" }} />
      </header>

      {/* ===== FACILITY OVERVIEW ===== */}
      <section className="relative" style={{ backgroundColor: "#fff" }}>
        <div className="mx-auto w-full max-w-[1240px] px-6 py-20 md:px-10 md:py-28">
          <div className="grid gap-14 lg:grid-cols-[1.6fr_1fr] lg:items-start">
            <ScrollReveal>
              <div>
                <p className="eyebrow">
                  <span className="mr-3 inline-block h-px w-8 align-middle opacity-50" style={{ backgroundColor: "currentColor" }} />
                  {t.facility.overviewEyebrow}
                </p>
                <h2 className="mt-5 text-[clamp(1.75rem,3.4vw,2.85rem)] leading-[1.12] font-semibold" style={{ color: "#0b1f33" }}>
                  {t.facility.overviewTitle}
                </h2>
                <p className="mt-6 text-[1.0625rem] leading-relaxed" style={{ color: "#5b6b7a" }}>{t.facility.overviewDesc}</p>
              </div>
            </ScrollReveal>
            <ScrollReveal>
              <div className="relative overflow-hidden rounded-sm">
                <img src={`${BASE}/assets/cleanroom-DZtXjF0-.jpg`} alt="" className="w-full object-cover" style={{ aspectRatio: "4/3" }} />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ===== FACILITY AREAS ===== */}
      <section className="relative" style={{ backgroundColor: "#f7fafc" }}>
        <div className="mx-auto w-full max-w-[1240px] px-6 py-20 md:px-10 md:py-28">
          <div className="max-w-3xl">
            <p className="eyebrow">
              <span className="mr-3 inline-block h-px w-8 align-middle opacity-50" style={{ backgroundColor: "currentColor" }} />
              {t.facility.areasEyebrow}
            </p>
            <h2 className="mt-5 text-[clamp(1.75rem,3.4vw,2.85rem)] leading-[1.12] font-semibold" style={{ color: "#0b1f33" }}>
              {t.facility.areasTitle}
            </h2>
          </div>
          <div className="mt-12 grid gap-px sm:grid-cols-2 lg:grid-cols-4" style={{ backgroundColor: "#dde5ec" }}>
            {t.facility.areas.map((area: { num: string; title: string; desc: string }, i: number) => (
              <ScrollReveal key={i}>
                <div className="flex h-full flex-col p-8" style={{ backgroundColor: "#fff" }}>
                  <span className="text-[0.72rem] font-bold tracking-[0.14em]" style={{ color: "#35b8b0" }}>{area.num}</span>
                  <h3 className="mt-4 text-[1rem] font-semibold" style={{ color: "#0b1f33" }}>{area.title}</h3>
                  <p className="mt-2 text-[0.85rem] leading-relaxed" style={{ color: "#5b6b7a" }}>{area.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== QUALITY FLOW ===== */}
      <section className="relative isolate overflow-hidden" style={{ backgroundColor: "#0b1f33" }}>
        <div className="absolute inset-0 navy-grid" style={{ opacity: 0.6 }} />
        <div className="relative mx-auto w-full max-w-[1240px] px-6 py-20 md:px-10 md:py-28">
          <div className="max-w-3xl">
            <p className="eyebrow" style={{ color: "#35b8b0" }}>
              <span className="mr-3 inline-block h-px w-8 align-middle opacity-50" style={{ backgroundColor: "currentColor" }} />
              {t.facility.qualityEyebrow}
            </p>
            <h2 className="mt-5 text-[clamp(1.75rem,3.4vw,2.85rem)] leading-[1.12] font-semibold text-white">
              {t.facility.qualityTitle}
            </h2>
            <p className="mt-5 text-[1rem] leading-relaxed" style={{ color: "rgba(255,255,255,0.7)" }}>
              {t.facility.qualityDesc}
            </p>
          </div>
          <div className="mt-12 overflow-hidden rounded-sm" style={{ border: "1px solid rgba(255,255,255,0.1)" }}>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-px" style={{ backgroundColor: "rgba(255,255,255,0.1)" }}>
              {t.facility.qualitySteps.map((step: { num: string; title: string }, i: number) => (
                <div key={i} className="px-3 py-4 text-center sm:px-4 sm:py-5" style={{ backgroundColor: "#0b1f33" }}>
                  <span className="text-[0.68rem] font-bold tracking-[0.14em]" style={{ color: "#35b8b0" }}>{step.num}</span>
                  <p className="mt-2 text-[0.78rem] font-semibold leading-snug sm:text-[0.82rem]" style={{ color: "#fff" }}>{step.title}</p>
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
                  {t.facility.ctaTitle}
                </h2>
                <p className="mt-5 max-w-xl text-[1rem] leading-relaxed" style={{ color: "rgba(255,255,255,0.65)" }}>
                  {t.facility.ctaDesc}
                </p>
              </div>
              <div className="flex flex-wrap gap-3 lg:justify-end">
                <Link href="/contact" className="inline-flex items-center gap-3 rounded-sm px-7 py-3.5 text-[0.8rem] font-semibold tracking-[0.14em] uppercase transition-all duration-300" style={{ backgroundColor: "#35b8b0", color: "#05231f" }}>
                  {t.facility.cta1}
                </Link>
                <Link href="/contact" className="inline-flex items-center gap-3 rounded-sm px-7 py-3.5 text-[0.8rem] font-semibold tracking-[0.14em] uppercase transition-all duration-300" style={{ border: "1px solid rgba(255,255,255,0.25)", color: "#fff" }}>
                  {t.facility.cta2}
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
