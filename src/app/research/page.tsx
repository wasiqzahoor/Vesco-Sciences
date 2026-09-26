"use client";

import Link from "next/link";
import { useI18n } from "@/i18n/context";
import ScrollReveal from "@/components/ScrollReveal";
import SEOHead from "@/components/SEOHead";

const BASE = "";

export default function ResearchPage() {
  const { t } = useI18n();
  return (
    <>
      <SEOHead
        title="Research & Development — Vesco Science"
        description="Vesco Science R&D: biologics research, exosome science, formulation engineering, analytical development, and process optimization."
        keywords="biotech R&D, exosome research, formulation science, analytical development"
        canonical="https://www.vescoscience.com/research"
      />
      {/* ===== HERO ===== */}
      <header className="relative isolate overflow-hidden" style={{ backgroundColor: "#071726" }}>
        <img src={`${BASE}/assets/research-team-BMV1NwAO.jpg`} alt="" className="absolute inset-0 h-full w-full object-cover" style={{ opacity: 0.3 }} />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to right, #071726, rgba(7,23,38,0.9), rgba(11,31,51,0.4))" }} />
        <div className="relative mx-auto w-full max-w-[1240px] px-6 pt-36 pb-20 md:px-10 md:pt-44 md:pb-28">
          <nav className="mb-8 text-[0.8rem]" style={{ color: "rgba(255,255,255,0.45)" }}>
            <Link href="/" className="transition-colors" style={{ color: "inherit" }}>{t.rdDetail.breadcrumbHome}</Link>
            <span className="mx-2" style={{ color: "rgba(255,255,255,0.25)" }}>/</span>
            <span style={{ color: "rgba(255,255,255,0.75)" }}>{t.rdDetail.breadcrumbRd}</span>
          </nav>
          <p className="eyebrow" style={{ color: "#35b8b0" }}>
            <span className="mr-3 inline-block h-px w-8 align-middle opacity-50" style={{ backgroundColor: "currentColor" }} />
            {t.rdDetail.heroEyebrow}
          </p>
          <h1 className="mt-6 max-w-4xl text-white font-semibold leading-[1.06] text-[clamp(2.1rem,4.6vw,3.9rem)]">
            {t.rdDetail.heroTitle}
          </h1>
          <p className="mt-7 max-w-2xl text-[1.0625rem] leading-relaxed" style={{ color: "rgba(255,255,255,0.7)" }}>
            {t.rdDetail.heroSubtitle}
          </p>
        </div>
        <div className="absolute inset-x-0 bottom-0 h-px" style={{ background: "linear-gradient(to right, transparent, rgba(53,184,176,0.6), transparent)" }} />
      </header>

      {/* ===== R&D PHILOSOPHY ===== */}
      <section className="relative" style={{ backgroundColor: "#fff" }}>
        <div className="mx-auto w-full max-w-[1240px] px-6 py-20 md:px-10 md:py-28">
          <div className="grid gap-14 lg:grid-cols-[1.6fr_1fr] lg:items-center">
            <ScrollReveal>
              <div>
                <p className="eyebrow">
                  <span className="mr-3 inline-block h-px w-8 align-middle opacity-50" style={{ backgroundColor: "currentColor" }} />
                  {t.rdDetail.philosophyEyebrow}
                </p>
                <h2 className="mt-5 text-[clamp(1.75rem,3.4vw,2.85rem)] leading-[1.12] font-semibold" style={{ color: "#0b1f33" }}>
                  {t.rdDetail.philosophyTitle}
                </h2>
                <p className="mt-6 text-[1.0625rem] leading-relaxed" style={{ color: "#5b6b7a" }}>
                  {t.rdDetail.philosophyDesc}
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal>
              <div className="relative overflow-hidden rounded-sm">
                <img src={`${BASE}/assets/korean-lab-team-DDgkd_gw.jpg`} alt="" className="w-full object-cover" style={{ aspectRatio: "16/10" }} />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ===== DEVELOPMENT PROCESS ===== */}
      <section className="relative" style={{ backgroundColor: "#f7fafc" }}>
        <div className="mx-auto w-full max-w-[1240px] px-6 py-20 md:px-10 md:py-28">
          <div className="max-w-3xl">
            <p className="eyebrow">
              <span className="mr-3 inline-block h-px w-8 align-middle opacity-50" style={{ backgroundColor: "currentColor" }} />
              {t.rdDetail.processEyebrow}
            </p>
            <h2 className="mt-5 text-[clamp(1.75rem,3.4vw,2.85rem)] leading-[1.12] font-semibold" style={{ color: "#0b1f33" }}>
              {t.rdDetail.processTitle}
            </h2>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {t.rdDetail.processSteps.map((step: { img: string; num: string; title: string; desc: string }, i: number) => (
              <ScrollReveal key={i}>
                <div className="flex h-full flex-col overflow-hidden rounded-sm" style={{ border: "1px solid #dde5ec", backgroundColor: "#fff" }}>
                  <div className="h-36 overflow-hidden">
                    <img src={`${BASE}/assets/${step.img}`} alt="" className="h-full w-full object-cover" />
                  </div>
                  <div className="p-5">
                    <span className="text-[0.68rem] font-bold tracking-[0.14em]" style={{ color: "#35b8b0" }}>{step.num}</span>
                    <h3 className="mt-2 text-[0.9rem] font-semibold" style={{ color: "#0b1f33" }}>{step.title}</h3>
                    <p className="mt-1.5 text-[0.78rem] leading-relaxed" style={{ color: "#5b6b7a" }}>{step.desc}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
          <div className="mt-10 flex flex-wrap items-center gap-3 text-[0.85rem] font-semibold" style={{ color: "#0b1f33" }}>
            {t.rdDetail.processFlow.map((item: string, i: number) => (
              <span key={i} className="flex items-center gap-3">
                <span className="rounded-sm px-3 py-1.5" style={{ backgroundColor: "rgba(53,184,176,0.08)", color: "#35b8b0" }}>{item}</span>
                {i < t.rdDetail.processFlow.length - 1 && <span style={{ color: "#5b6b7a" }}>→</span>}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ===== RESEARCH AREAS ===== */}
      <section className="relative" style={{ backgroundColor: "#fff" }}>
        <div className="mx-auto w-full max-w-[1240px] px-6 py-20 md:px-10 md:py-28">
          <div className="max-w-3xl">
            <p className="eyebrow">
              <span className="mr-3 inline-block h-px w-8 align-middle opacity-50" style={{ backgroundColor: "currentColor" }} />
              {t.rdDetail.areasEyebrow}
            </p>
            <h2 className="mt-5 text-[clamp(1.75rem,3.4vw,2.85rem)] leading-[1.12] font-semibold" style={{ color: "#0b1f33" }}>
              {t.rdDetail.areasTitle}
            </h2>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {t.rdDetail.areas.map((area: { num: string; title: string }, i: number) => (
              <div key={i} className="flex items-center gap-4 rounded-sm p-5" style={{ border: "1px solid #dde5ec", backgroundColor: "#f7fafc" }}>
                <span className="text-[0.72rem] font-bold tracking-[0.14em] shrink-0" style={{ color: "#35b8b0" }}>{area.num}</span>
                <span className="text-[0.95rem] font-semibold" style={{ color: "#0b1f33" }}>{area.title}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== EXOSOME RESEARCH ===== */}
      <section className="relative isolate overflow-hidden" style={{ backgroundColor: "#0b1f33" }}>
        <div className="absolute inset-0 navy-grid" style={{ opacity: 0.6 }} />
        <div className="relative mx-auto w-full max-w-[1240px] px-6 py-20 md:px-10 md:py-28">
          <div className="max-w-3xl">
            <p className="eyebrow" style={{ color: "#35b8b0" }}>
              <span className="mr-3 inline-block h-px w-8 align-middle opacity-50" style={{ backgroundColor: "currentColor" }} />
              {t.rdDetail.exosomeEyebrow}
            </p>
            <h2 className="mt-5 text-[clamp(1.75rem,3.4vw,2.85rem)] leading-[1.12] font-semibold text-white">
              {t.rdDetail.exosomeTitle}
            </h2>
            <p className="mt-5 text-[1rem] leading-relaxed" style={{ color: "rgba(255,255,255,0.7)" }}>
              {t.rdDetail.exosomeDesc}
            </p>
          </div>
          <div className="mt-10 grid gap-6 lg:grid-cols-[1fr_1fr]">
            <ScrollReveal>
              <div className="flex flex-col gap-4">
                {t.rdDetail.exosomeCargo.map((item: { icon: string; img: string; label: string; desc: string }, i: number) => (
                  <div key={i} className="flex items-center gap-4 rounded-sm p-4" style={{ border: "1px solid rgba(255,255,255,0.1)", backgroundColor: "rgba(255,255,255,0.03)" }}>
                    <img src={`${BASE}/assets/${item.img}`} alt={item.label} className="h-10 w-10 shrink-0 rounded-lg object-cover" style={{ border: "1px solid rgba(53,184,176,0.3)" }} />
                    <div>
                      <span className="text-[0.85rem] font-semibold" style={{ color: "#fff" }}>{item.label}</span>
                      <span className="ml-2 text-[0.78rem]" style={{ color: "rgba(255,255,255,0.5)" }}>{item.desc}</span>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollReveal>
            <ScrollReveal>
              <div className="relative overflow-hidden rounded-sm">
                <img src={`${BASE}/assets/exosome-BUYrBGuc.jpg`} alt="Exosome research" className="w-full rounded-sm object-cover" />
              </div>
            </ScrollReveal>
          </div>
          <div className="mt-10 rounded-sm p-6" style={{ border: "1px solid rgba(255,255,255,0.1)", backgroundColor: "rgba(255,255,255,0.03)" }}>
            <p className="text-[0.72rem] font-bold tracking-[0.14em] uppercase mb-4" style={{ color: "#35b8b0" }}>{t.rdDetail.evProcessLabel}</p>
            <div className="flex flex-wrap items-center gap-3 text-[0.85rem]" style={{ color: "rgba(255,255,255,0.8)" }}>
              {t.rdDetail.evProcess.map((step: string, i: number) => (
                <span key={i} className="flex items-center gap-3">
                  <span className="rounded-sm px-3 py-1.5" style={{ backgroundColor: "rgba(53,184,176,0.1)", color: "#35b8b0" }}>{step}</span>
                  {i < t.rdDetail.evProcess.length - 1 && <span style={{ color: "rgba(255,255,255,0.3)" }}>→</span>}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== PURIFICATION ===== */}
      <section className="relative" style={{ backgroundColor: "#fff" }}>
        <div className="mx-auto w-full max-w-[1240px] px-6 py-20 md:px-10 md:py-28">
          <div className="grid gap-14 lg:grid-cols-[1.4fr_1fr] lg:items-center">
            <ScrollReveal>
              <div>
                <p className="eyebrow">
                  <span className="mr-3 inline-block h-px w-8 align-middle opacity-50" style={{ backgroundColor: "currentColor" }} />
                  {t.rdDetail.purificationEyebrow}
                </p>
                <h2 className="mt-5 text-[clamp(1.75rem,3.4vw,2.85rem)] leading-[1.12] font-semibold" style={{ color: "#0b1f33" }}>
                  {t.rdDetail.purificationTitle}
                </h2>
                <p className="mt-5 text-[1.0625rem] leading-relaxed" style={{ color: "#5b6b7a" }}>
                  {t.rdDetail.purificationDesc}
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal>
              <div className="relative overflow-hidden rounded-sm">
                <img src={`${BASE}/assets/cleanroom-DZtXjF0-.jpg`} alt="" className="w-full object-cover" style={{ aspectRatio: "4/3" }} />
              </div>
            </ScrollReveal>
          </div>
          <div className="mt-10 flex flex-wrap gap-2">
            {t.rdDetail.purificationMethods.map((method: string, i: number) => (
              <span key={i} className="rounded-full px-4 py-2 text-[0.78rem] font-semibold" style={{ backgroundColor: "rgba(53,184,176,0.08)", color: "#35b8b0" }}>{method}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ===== ANALYTICAL CHARACTERIZATION ===== */}
      <section className="relative" style={{ backgroundColor: "#f7fafc" }}>
        <div className="mx-auto w-full max-w-[1240px] px-6 py-20 md:px-10 md:py-28">
          <div className="grid gap-14 lg:grid-cols-[1fr_1.2fr] lg:items-center">
            <ScrollReveal>
              <div>
                <p className="eyebrow">
                  <span className="mr-3 inline-block h-px w-8 align-middle opacity-50" style={{ backgroundColor: "currentColor" }} />
                  {t.rdDetail.analysisEyebrow}
                </p>
                <h2 className="mt-5 text-[clamp(1.75rem,3.4vw,2.85rem)] leading-[1.12] font-semibold" style={{ color: "#0b1f33" }}>
                  {t.rdDetail.analysisTitle}
                </h2>
                <p className="mt-5 text-[1.0625rem] leading-relaxed" style={{ color: "#5b6b7a" }}>
                  {t.rdDetail.analysisDesc}
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal>
              <div className="relative overflow-hidden rounded-sm">
                <img src={`${BASE}/assets/qc-lab-mOryit6A.jpg`} alt="Analytical laboratory" className="w-full rounded-sm object-cover" />
              </div>
            </ScrollReveal>
          </div>
          <div className="mt-12 grid gap-px sm:grid-cols-2 lg:grid-cols-4" style={{ backgroundColor: "#dde5ec" }}>
            {t.rdDetail.analysisColumns.map((col: { title: string; items: string[] }, i: number) => (
              <ScrollReveal key={i}>
                <div className="flex h-full flex-col p-6" style={{ backgroundColor: "#fff" }}>
                  <h3 className="text-[0.88rem] font-semibold" style={{ color: "#0b1f33" }}>{col.title}</h3>
                  <ul className="mt-3 space-y-1.5">
                    {col.items.map((item: string, j: number) => (
                      <li key={j} className="flex items-start gap-2 text-[0.82rem] leading-relaxed" style={{ color: "#5b6b7a" }}>
                        <span className="mt-1.5 block h-1 w-1 shrink-0 rounded-full" style={{ backgroundColor: "#35b8b0" }} />
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

      {/* ===== FORMULATION & STABILITY ===== */}
      <section className="relative" style={{ backgroundColor: "#fff" }}>
        <div className="mx-auto w-full max-w-[1240px] px-6 py-20 md:px-10 md:py-28">
          <div className="max-w-3xl">
            <p className="eyebrow">
              <span className="mr-3 inline-block h-px w-8 align-middle opacity-50" style={{ backgroundColor: "currentColor" }} />
              {t.rdDetail.formulationEyebrow}
            </p>
            <h2 className="mt-5 text-[clamp(1.75rem,3.4vw,2.85rem)] leading-[1.12] font-semibold" style={{ color: "#0b1f33" }}>
              {t.rdDetail.formulationTitle}
            </h2>
            <p className="mt-5 text-[1.0625rem] leading-relaxed" style={{ color: "#5b6b7a" }}>
              {t.rdDetail.formulationDesc}
            </p>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {t.rdDetail.formulationItems.map((item: string, i: number) => (
              <div key={i} className="flex items-center gap-3 rounded-sm p-4" style={{ border: "1px solid #dde5ec", backgroundColor: "#f7fafc" }}>
                <span className="block h-2 w-2 shrink-0 rounded-full" style={{ backgroundColor: "#35b8b0" }} />
                <span className="text-[0.88rem] font-medium" style={{ color: "#0b1f33" }}>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== PROCESS DEVELOPMENT ===== */}
      <section className="relative" style={{ backgroundColor: "#f7fafc" }}>
        <div className="mx-auto w-full max-w-[1240px] px-6 py-20 md:px-10 md:py-28">
          <div className="max-w-3xl">
            <p className="eyebrow">
              <span className="mr-3 inline-block h-px w-8 align-middle opacity-50" style={{ backgroundColor: "currentColor" }} />
              {t.rdDetail.processDevEyebrow}
            </p>
            <h2 className="mt-5 text-[clamp(1.75rem,3.4vw,2.85rem)] leading-[1.12] font-semibold" style={{ color: "#0b1f33" }}>
              {t.rdDetail.processDevTitle}
            </h2>
            <p className="mt-5 text-[1.0625rem] leading-relaxed" style={{ color: "#5b6b7a" }}>
              {t.rdDetail.processDevDesc}
            </p>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {t.rdDetail.processDevSteps.map((step: { num: string; title: string; desc: string }, i: number) => (
              <ScrollReveal key={i}>
                <div className="flex h-full flex-col rounded-sm p-6" style={{ border: "1px solid #dde5ec", backgroundColor: "#fff" }}>
                  <span className="text-[0.68rem] font-bold tracking-[0.14em]" style={{ color: "#35b8b0" }}>{step.num}</span>
                  <h3 className="mt-3 text-[0.9rem] font-semibold" style={{ color: "#0b1f33" }}>{step.title}</h3>
                  <p className="mt-2 text-[0.78rem] leading-relaxed" style={{ color: "#5b6b7a" }}>{step.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== QUALITY BY DESIGN ===== */}
      <section className="relative isolate overflow-hidden" style={{ backgroundColor: "#0b1f33" }}>
        <div className="absolute inset-0 navy-grid" style={{ opacity: 0.6 }} />
        <div className="relative mx-auto w-full max-w-[1240px] px-6 py-20 md:px-10 md:py-28">
          <div className="max-w-3xl">
            <p className="eyebrow" style={{ color: "#35b8b0" }}>
              <span className="mr-3 inline-block h-px w-8 align-middle opacity-50" style={{ backgroundColor: "currentColor" }} />
              {t.rdDetail.qbdEyebrow}
            </p>
            <h2 className="mt-5 text-[clamp(1.75rem,3.4vw,2.85rem)] leading-[1.12] font-semibold text-white">
              {t.rdDetail.qbdTitle}
            </h2>
            <p className="mt-5 text-[1rem] leading-relaxed" style={{ color: "rgba(255,255,255,0.7)" }}>
              {t.rdDetail.qbdDesc}
            </p>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {t.rdDetail.qbdItems.map((item: { icon: string; img: string; title: string; desc: string }, i: number) => (
              <ScrollReveal key={i}>
                <div className="flex h-full flex-col rounded-sm p-6" style={{ border: "1px solid rgba(255,255,255,0.1)", backgroundColor: "rgba(255,255,255,0.03)" }}>
                  <img src={`${BASE}/assets/${item.img}`} alt={item.title} className="h-12 w-12 rounded-lg object-cover" style={{ border: "1px solid rgba(53,184,176,0.3)" }} />
                  <h3 className="mt-3 text-[0.9rem] font-semibold text-white">{item.title}</h3>
                  <p className="mt-2 text-[0.78rem] leading-relaxed" style={{ color: "rgba(255,255,255,0.6)" }}>{item.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CONTINUOUS INNOVATION ===== */}
      <section className="relative" style={{ backgroundColor: "#fff" }}>
        <div className="mx-auto w-full max-w-[1240px] px-6 py-20 md:px-10 md:py-28">
          <div className="grid gap-14 lg:grid-cols-[1fr_1.2fr] lg:items-center">
            <ScrollReveal>
              <div>
                <p className="eyebrow">
                  <span className="mr-3 inline-block h-px w-8 align-middle opacity-50" style={{ backgroundColor: "currentColor" }} />
                  {t.rdDetail.innovationEyebrow}
                </p>
                <h2 className="mt-5 text-[clamp(1.75rem,3.4vw,2.85rem)] leading-[1.12] font-semibold" style={{ color: "#0b1f33" }}>
                  {t.rdDetail.innovationTitle}
                </h2>
              </div>
            </ScrollReveal>
            <ScrollReveal>
              <div className="relative overflow-hidden rounded-sm">
                <img src={`${BASE}/assets/korean-scientist-vials-DxqjMGcR.jpg`} alt="" className="w-full object-cover" style={{ aspectRatio: "16/10" }} />
              </div>
            </ScrollReveal>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {t.rdDetail.innovationItems.map((item: { title: string; desc: string }, i: number) => (
              <div key={i} className="rounded-sm p-6" style={{ border: "1px solid #dde5ec", backgroundColor: "#f7fafc" }}>
                <h3 className="text-[0.95rem] font-semibold" style={{ color: "#0b1f33" }}>{item.title}</h3>
                <p className="mt-2 text-[0.85rem] leading-relaxed" style={{ color: "#5b6b7a" }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== GOAL ===== */}
      <section className="relative" style={{ backgroundColor: "#f7fafc" }}>
        <div className="mx-auto w-full max-w-[1240px] px-6 py-20 md:px-10 md:py-28">
          <div className="grid gap-14 lg:grid-cols-[1.2fr_1fr] lg:items-center">
            <ScrollReveal>
              <div className="relative overflow-hidden rounded-sm">
                <img src={`${BASE}/assets/vials-Ck5soEMR.jpg`} alt="" className="w-full object-cover" style={{ aspectRatio: "16/10" }} />
              </div>
            </ScrollReveal>
            <ScrollReveal>
              <div>
                <p className="eyebrow">
                  <span className="mr-3 inline-block h-px w-8 align-middle opacity-50" style={{ backgroundColor: "currentColor" }} />
                  {t.rdDetail.goalEyebrow}
                </p>
                <h2 className="mt-5 text-[clamp(1.75rem,3.4vw,2.85rem)] leading-[1.12] font-semibold" style={{ color: "#0b1f33" }}>
                  {t.rdDetail.goalTitle}
                </h2>
                <p className="mt-5 text-[1.0625rem] leading-relaxed" style={{ color: "#5b6b7a" }}>
                  {t.rdDetail.goalDesc}
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ===== EXPERTISE ===== */}
      <section className="relative" style={{ backgroundColor: "#fff" }}>
        <div className="mx-auto w-full max-w-[1240px] px-6 py-16 md:py-20">
          <p className="eyebrow">
            <span className="mr-3 inline-block h-px w-8 align-middle opacity-50" style={{ backgroundColor: "currentColor" }} />
            {t.rdDetail.expertiseEyebrow}
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            {t.rdDetail.expertise.map((exp: string, i: number) => (
              <span key={i} className="rounded-full px-4 py-2 text-[0.78rem] font-semibold" style={{ border: "1px solid #dde5ec", color: "#0b1f33" }}>{exp}</span>
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
                  {t.rdDetail.ctaTitle}
                </h2>
                <p className="mt-5 max-w-xl text-[1rem] leading-relaxed" style={{ color: "rgba(255,255,255,0.65)" }}>
                  {t.rdDetail.ctaDesc}
                </p>
              </div>
              <div className="flex flex-wrap gap-3 lg:justify-end">
                <Link href="/contact" className="inline-flex items-center gap-3 rounded-sm px-7 py-3.5 text-[0.8rem] font-semibold tracking-[0.14em] uppercase transition-all duration-300" style={{ backgroundColor: "#35b8b0", color: "#05231f" }}>
                  {t.rdDetail.cta1}
                </Link>
                <Link href="/technology" className="inline-flex items-center gap-3 rounded-sm px-7 py-3.5 text-[0.8rem] font-semibold tracking-[0.14em] uppercase transition-all duration-300" style={{ border: "1px solid rgba(255,255,255,0.25)", color: "#fff" }}>
                  {t.rdDetail.cta2}
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
