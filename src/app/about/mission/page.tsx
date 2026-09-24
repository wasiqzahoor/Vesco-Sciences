"use client";

import Link from "next/link";
import { useI18n } from "@/i18n/context";
import ScrollReveal from "@/components/ScrollReveal";
import SEOHead from "@/components/SEOHead";

const BASE = "";

export default function MissionPage() {
  const { t } = useI18n();
  return (
    <>
      <SEOHead
        title="Mission & Vision — Vesco Science"
        description="Vesco Science mission: advancing regenerative biotechnology through science-driven manufacturing, quality systems, and global partnerships."
        keywords="Vesco Science mission, biotechnology vision, regenerative medicine mission"
        canonical="https://www.vescoscience.com/about/mission"
      />
      {/* ===== HERO ===== */}
      <header className="relative isolate overflow-hidden" style={{ backgroundColor: "#071726" }}>
        <img src={`${BASE}/assets/cleanroom-DZtXjF0-.jpg`} alt="" className="absolute inset-0 h-full w-full object-cover" style={{ opacity: 0.3 }} />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to right, #071726, rgba(7,23,38,0.9), rgba(11,31,51,0.4))" }} />
        <div className="relative mx-auto w-full max-w-[1240px] px-6 pt-36 pb-20 md:px-10 md:pt-44 md:pb-28">
          <nav className="mb-8 text-[0.8rem]" style={{ color: "rgba(255,255,255,0.45)" }}>
            <Link href="/" className="transition-colors" style={{ color: "inherit" }}>{t.mission.breadcrumbHome}</Link>
            <span className="mx-2" style={{ color: "rgba(255,255,255,0.25)" }}>/</span>
            <Link href="/about" className="transition-colors" style={{ color: "inherit" }}>{t.mission.breadcrumbAbout}</Link>
            <span className="mx-2" style={{ color: "rgba(255,255,255,0.25)" }}>/</span>
            <span style={{ color: "rgba(255,255,255,0.75)" }}>{t.mission.breadcrumbMission}</span>
          </nav>
          <p className="eyebrow" style={{ color: "#35b8b0" }}>
            <span className="mr-3 inline-block h-px w-8 align-middle opacity-50" style={{ backgroundColor: "currentColor" }} />
            {t.mission.heroEyebrow}
          </p>
          <h1 className="mt-6 max-w-4xl text-white font-semibold leading-[1.06] text-[clamp(2.1rem,4.6vw,3.9rem)]">
            {t.mission.heroTitle}
          </h1>
          <p className="mt-7 max-w-2xl text-[1.0625rem] leading-relaxed" style={{ color: "rgba(255,255,255,0.7)" }}>
            {t.mission.heroSubtitle}
          </p>
        </div>
        <div className="absolute inset-x-0 bottom-0 h-px" style={{ background: "linear-gradient(to right, transparent, rgba(53,184,176,0.6), transparent)" }} />
      </header>

      {/* ===== WHO WE ARE ===== */}
      <section className="relative" style={{ backgroundColor: "#fff" }}>
        <div className="mx-auto w-full max-w-[1240px] px-6 py-20 md:px-10 md:py-28">
          <div className="grid gap-14 lg:grid-cols-[1.6fr_1fr] lg:items-start">
            <ScrollReveal>
              <div>
                <p className="eyebrow">
                  <span className="mr-3 inline-block h-px w-8 align-middle opacity-50" style={{ backgroundColor: "currentColor" }} />
                  {t.mission.whoEyebrow}
                </p>
                <h2 className="mt-5 text-[clamp(1.75rem,3.4vw,2.85rem)] leading-[1.12] font-semibold" style={{ color: "#0b1f33" }}>
                  {t.mission.whoTitle}
                </h2>
                <p className="mt-6 text-[1.0625rem] leading-relaxed" style={{ color: "#5b6b7a" }}>{t.mission.whoDesc}</p>
              </div>
            </ScrollReveal>
            <ScrollReveal>
              <div className="rounded-sm p-8" style={{ border: "1px solid #dde5ec", backgroundColor: "#fff" }}>
                {t.mission.whoCapabilities.map((cap: { num: string; title: string; desc: string }, i: number) => (
                  <div key={i} className="py-4" style={i < t.mission.whoCapabilities.length - 1 ? { borderBottom: "1px solid #dde5ec" } : {}}>
                    <span className="text-[0.72rem] font-bold tracking-[0.14em]" style={{ color: "#35b8b0" }}>{cap.num}</span>
                    <h3 className="mt-2 text-[1rem] font-semibold" style={{ color: "#0b1f33" }}>{cap.title}</h3>
                    <p className="mt-1 text-[0.85rem] leading-relaxed" style={{ color: "#5b6b7a" }}>{cap.desc}</p>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
          <div className="mt-10 flex flex-wrap gap-3">
            {t.mission.whoTags.map((tag: string, i: number) => (
              <span key={i} className="rounded-full px-4 py-2 text-[0.78rem] font-semibold" style={{ backgroundColor: "rgba(53,184,176,0.08)", color: "#35b8b0" }}>{tag}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SCIENTIFIC APPROACH ===== */}
      <section className="relative" style={{ backgroundColor: "#f7fafc" }}>
        <div className="mx-auto w-full max-w-[1240px] px-6 py-20 md:px-10 md:py-28">
          <div className="max-w-3xl">
            <p className="eyebrow">
              <span className="mr-3 inline-block h-px w-8 align-middle opacity-50" style={{ backgroundColor: "currentColor" }} />
              {t.mission.approachEyebrow}
            </p>
            <h2 className="mt-5 text-[clamp(1.75rem,3.4vw,2.85rem)] leading-[1.12] font-semibold" style={{ color: "#0b1f33" }}>
              {t.mission.approachTitle}
            </h2>
            <p className="mt-5 text-[1.0625rem] leading-relaxed" style={{ color: "#5b6b7a" }}>
              {t.mission.approachDesc}
            </p>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {t.mission.approachSteps.map((step: { img: string; num: string; title: string; desc: string }, i: number) => (
              <ScrollReveal key={i}>
                <div className="flex h-full flex-col overflow-hidden rounded-sm" style={{ border: "1px solid #dde5ec", backgroundColor: "#fff" }}>
                  <div className="h-44 overflow-hidden">
                    <img src={`${BASE}/assets/${step.img}`} alt="" className="h-full w-full object-cover" />
                  </div>
                  <div className="p-6">
                    <span className="text-[0.72rem] font-bold tracking-[0.14em]" style={{ color: "#35b8b0" }}>{step.num}</span>
                    <h3 className="mt-3 text-[1rem] font-semibold" style={{ color: "#0b1f33" }}>{step.title}</h3>
                    <p className="mt-2 text-[0.85rem] leading-relaxed" style={{ color: "#5b6b7a" }}>{step.desc}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== MANUFACTURING ===== */}
      <section className="relative" style={{ backgroundColor: "#fff" }}>
        <div className="mx-auto w-full max-w-[1240px] px-6 py-20 md:px-10 md:py-28">
          <div className="max-w-3xl">
            <p className="eyebrow">
              <span className="mr-3 inline-block h-px w-8 align-middle opacity-50" style={{ backgroundColor: "currentColor" }} />
              {t.mission.manufacturingEyebrow}
            </p>
            <h2 className="mt-5 text-[clamp(1.75rem,3.4vw,2.85rem)] leading-[1.12] font-semibold" style={{ color: "#0b1f33" }}>
              {t.mission.manufacturingTitle}
            </h2>
            <p className="mt-5 text-[1.0625rem] leading-relaxed" style={{ color: "#5b6b7a" }}>
              {t.mission.manufacturingDesc}
            </p>
          </div>
          <div className="mt-8 flex flex-wrap items-center gap-3 text-[0.85rem] font-semibold" style={{ color: "#0b1f33" }}>
            {t.mission.manufacturingFlow.map((item: string, i: number) => (
              <span key={i} className="flex items-center gap-3">
                <span className="rounded-sm px-3 py-1.5" style={{ backgroundColor: "rgba(53,184,176,0.08)", color: "#35b8b0" }}>{item}</span>
                {i < t.mission.manufacturingFlow.length - 1 && <span style={{ color: "#5b6b7a" }}>→</span>}
              </span>
            ))}
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {t.mission.manufacturingCards.map((card: { img: string; title: string; desc: string }, i: number) => (
              <ScrollReveal key={i}>
                <div className="flex h-full flex-col overflow-hidden rounded-sm" style={{ border: "1px solid #dde5ec", backgroundColor: "#f7fafc" }}>
                  <div className="h-40 overflow-hidden">
                    <img src={`${BASE}/assets/${card.img}`} alt="" className="h-full w-full object-cover" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-[1rem] font-semibold" style={{ color: "#0b1f33" }}>{card.title}</h3>
                    <p className="mt-2 text-[0.85rem] leading-relaxed" style={{ color: "#5b6b7a" }}>{card.desc}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
          <Link href="/facility" className="mt-8 inline-flex items-center gap-2 text-[0.85rem] font-semibold" style={{ color: "#276a91" }}>
            {t.mission.manufacturingCta}
            <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m9 18 6-6-6-6" /></svg>
          </Link>
        </div>
      </section>

      {/* ===== QUALITY ===== */}
      <section className="relative isolate overflow-hidden" style={{ backgroundColor: "#0b1f33" }}>
        <div className="absolute inset-0 navy-grid" style={{ opacity: 0.6 }} />
        <div className="relative mx-auto w-full max-w-[1240px] px-6 py-20 md:px-10 md:py-28">
          <div className="max-w-3xl">
            <p className="eyebrow" style={{ color: "#35b8b0" }}>
              <span className="mr-3 inline-block h-px w-8 align-middle opacity-50" style={{ backgroundColor: "currentColor" }} />
              {t.mission.qualityEyebrow}
            </p>
            <h2 className="mt-5 text-[clamp(1.75rem,3.4vw,2.85rem)] leading-[1.12] font-semibold text-white">
              {t.mission.qualityTitle}
            </h2>
            <p className="mt-5 text-[1rem] leading-relaxed" style={{ color: "rgba(255,255,255,0.7)" }}>
              {t.mission.qualityDesc}
            </p>
          </div>
          <div className="mt-12 grid gap-px sm:grid-cols-2 lg:grid-cols-3" style={{ backgroundColor: "rgba(255,255,255,0.1)" }}>
            {t.mission.qualityItems.map((item: { num: string; title: string; desc: string }, i: number) => (
              <ScrollReveal key={i}>
                <div className="flex h-full flex-col p-8" style={{ backgroundColor: "#0b1f33" }}>
                  <span className="text-[0.72rem] font-bold tracking-[0.14em]" style={{ color: "#35b8b0" }}>{item.num}</span>
                  <h3 className="mt-4 text-[1rem] font-semibold text-white">{item.title}</h3>
                  <p className="mt-2 text-[0.85rem] leading-relaxed" style={{ color: "rgba(255,255,255,0.7)" }}>{item.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
          <Link href="/quality" className="mt-8 inline-flex items-center gap-2 text-[0.85rem] font-semibold" style={{ color: "#35b8b0" }}>
            {t.mission.qualityCta}
            <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m9 18 6-6-6-6" /></svg>
          </Link>
        </div>
      </section>

      {/* ===== GLOBAL PARTNERSHIP ===== */}
      <section className="relative" style={{ backgroundColor: "#f7fafc" }}>
        <div className="mx-auto w-full max-w-[1240px] px-6 py-20 md:px-10 md:py-28">
          <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
            <ScrollReveal>
              <div>
                <p className="eyebrow">
                  <span className="mr-3 inline-block h-px w-8 align-middle opacity-50" style={{ backgroundColor: "currentColor" }} />
                  {t.mission.partnershipEyebrow}
                </p>
                <h2 className="mt-5 text-[clamp(1.75rem,3.4vw,2.85rem)] leading-[1.12] font-semibold" style={{ color: "#0b1f33" }}>
                  {t.mission.partnershipTitle}
                </h2>
                <p className="mt-5 text-[1.0625rem] leading-relaxed" style={{ color: "#5b6b7a" }}>
                  {t.mission.partnershipDesc}
                </p>
                <div className="mt-8 space-y-4">
                  {t.mission.partnershipRoles.map((role: { label: string; value: string }, i: number) => (
                    <div key={i} className="flex items-center gap-4">
                      <span className="text-[0.78rem] font-semibold tracking-[0.1em] uppercase" style={{ color: "#276a91" }}>{role.label}</span>
                      <span className="text-[0.88rem]" style={{ color: "#5b6b7a" }}>{role.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal>
              <div className="rounded-sm p-10" style={{ border: "1px solid #dde5ec", backgroundColor: "#fff" }}>
                <span className="text-[0.68rem] font-bold tracking-[0.18em] uppercase" style={{ color: "#276a91" }}>{t.mission.partnershipTag}</span>
                <div className="mt-8 flex items-center justify-center gap-4">
                  <img src={`${BASE}/assets/vesco_logo-KfffcaeC.png`} alt="Vesco Science" className="h-10 w-auto" />
                  <span className="text-[1.5rem] font-bold" style={{ color: "#0b1f33" }}>+</span>
                  <img src="/assets/everceutical-logo.png" alt="EverCeutical" className="h-10 w-auto" />
                </div>
                <div className="mt-6 flex flex-wrap gap-2 justify-center">
                  {t.mission.partnershipPlatforms.map((p: string, i: number) => (
                    <span key={i} className="rounded-full px-3 py-1 text-[0.72rem] font-semibold" style={{ backgroundColor: "rgba(39,106,145,0.08)", color: "#276a91" }}>{p}</span>
                  ))}
                </div>
                <a href={t.mission.partnershipUrl} target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex items-center gap-2 text-[0.85rem] font-semibold" style={{ color: "#276a91" }}>
                  {t.mission.partnershipCta}
                  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M7 17 17 7M7 7h10v10" /></svg>
                </a>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ===== VISION ===== */}
      <section className="relative" style={{ backgroundColor: "#fff" }}>
        <div className="mx-auto w-full max-w-[1240px] px-6 py-20 md:px-10 md:py-28">
          <div className="max-w-3xl">
            <p className="eyebrow">
              <span className="mr-3 inline-block h-px w-8 align-middle opacity-50" style={{ backgroundColor: "currentColor" }} />
              {t.mission.visionEyebrow}
            </p>
            <h2 className="mt-5 text-[clamp(1.75rem,3.4vw,2.85rem)] leading-[1.12] font-semibold" style={{ color: "#0b1f33" }}>
              {t.mission.visionTitle}
            </h2>
            <p className="mt-5 text-[1.0625rem] leading-relaxed" style={{ color: "#5b6b7a" }}>
              {t.mission.visionDesc}
            </p>
          </div>
        </div>
      </section>

      {/* ===== MISSION ===== */}
      <section className="relative" style={{ backgroundColor: "#f7fafc" }}>
        <div className="mx-auto w-full max-w-[1240px] px-6 py-20 md:px-10 md:py-28">
          <div className="max-w-3xl">
            <p className="eyebrow">
              <span className="mr-3 inline-block h-px w-8 align-middle opacity-50" style={{ backgroundColor: "currentColor" }} />
              {t.mission.missionEyebrow}
            </p>
            <h2 className="mt-5 text-[clamp(1.75rem,3.4vw,2.85rem)] leading-[1.12] font-semibold" style={{ color: "#0b1f33" }}>
              {t.mission.missionTitle}
            </h2>
            <p className="mt-5 text-[1.0625rem] leading-relaxed" style={{ color: "#5b6b7a" }}>
              {t.mission.missionConnectText}
            </p>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {t.mission.missionItems.map((item: { num: string; title: string }, i: number) => (
              <ScrollReveal key={i}>
                <div className="flex items-center gap-4 rounded-sm p-5" style={{ border: "1px solid #dde5ec", backgroundColor: "#fff" }}>
                  <span className="text-[0.72rem] font-bold tracking-[0.14em]" style={{ color: "#35b8b0" }}>{item.num}</span>
                  <span className="text-[0.95rem] font-semibold" style={{ color: "#0b1f33" }}>{item.title}</span>
                </div>
              </ScrollReveal>
            ))}
          </div>
          <p className="mt-8 text-[1.0625rem] leading-relaxed" style={{ color: "#5b6b7a" }}>
            {t.mission.missionEndText}
          </p>
        </div>
      </section>

      {/* ===== SEOUL HQ ===== */}
      <section className="relative isolate overflow-hidden" style={{ backgroundColor: "#0b1f33" }}>
        <div className="absolute inset-0 navy-grid" style={{ opacity: 0.6 }} />
        <div className="relative mx-auto w-full max-w-[1240px] px-6 py-20 md:px-10 md:py-28">
          <div className="grid gap-14 lg:grid-cols-[1.2fr_1fr] lg:items-center">
            <ScrollReveal>
              <div className="relative overflow-hidden rounded-sm">
                <img src={`${BASE}/assets/seoul-biotech-campus-D3ksiCpk.jpg`} alt="" className="w-full object-cover" style={{ aspectRatio: "16/10" }} />
              </div>
            </ScrollReveal>
            <ScrollReveal>
              <div>
                <p className="eyebrow" style={{ color: "#35b8b0" }}>
                  <span className="mr-3 inline-block h-px w-8 align-middle opacity-50" style={{ backgroundColor: "currentColor" }} />
                  {t.mission.seoulEyebrow}
                </p>
                <h2 className="mt-5 text-[clamp(1.75rem,3.4vw,2.85rem)] leading-[1.12] font-semibold text-white">
                  {t.mission.seoulTitle}
                </h2>
                <p className="mt-5 text-[1rem] leading-relaxed" style={{ color: "rgba(255,255,255,0.7)" }}>
                  {t.mission.seoulDesc}
                </p>
                <ul className="mt-6 space-y-3">
                  {t.mission.seoulFeatures.map((f: string, i: number) => (
                    <li key={i} className="flex items-center gap-3 text-[0.95rem]" style={{ color: "rgba(255,255,255,0.8)" }}>
                      <span className="block h-1.5 w-1.5 shrink-0 rounded-full" style={{ backgroundColor: "#35b8b0" }} />
                      {f}
                    </li>
                  ))}
                </ul>
                <Link href="/facility" className="mt-8 inline-flex items-center gap-2 text-[0.85rem] font-semibold" style={{ color: "#35b8b0" }}>
                  {t.mission.seoulCta}
                  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m9 18 6-6-6-6" /></svg>
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ===== SCIENTISTS ===== */}
      <section className="relative" style={{ backgroundColor: "#fff" }}>
        <div className="mx-auto w-full max-w-[1240px] px-6 py-20 md:px-10 md:py-28">
          <div className="grid gap-14 lg:grid-cols-[1fr_1.2fr] lg:items-center">
            <ScrollReveal>
              <div>
                <p className="eyebrow">
                  <span className="mr-3 inline-block h-px w-8 align-middle opacity-50" style={{ backgroundColor: "currentColor" }} />
                  {t.mission.scientistsEyebrow}
                </p>
                <h2 className="mt-5 text-[clamp(1.75rem,3.4vw,2.85rem)] leading-[1.12] font-semibold" style={{ color: "#0b1f33" }}>
                  {t.mission.scientistsTitle}
                </h2>
                <p className="mt-5 text-[1.0625rem] leading-relaxed" style={{ color: "#5b6b7a" }}>
                  {t.mission.scientistsDesc}
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal>
              <div className="relative overflow-hidden rounded-sm">
                <img src={`${BASE}/assets/korean-scientist-vials-DxqjMGcR.jpg`} alt="" className="w-full object-cover" style={{ aspectRatio: "16/10" }} />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ===== R&D ===== */}
      <section className="relative" style={{ backgroundColor: "#f7fafc" }}>
        <div className="mx-auto w-full max-w-[1240px] px-6 py-20 md:px-10 md:py-28">
          <div className="max-w-3xl">
            <p className="eyebrow">
              <span className="mr-3 inline-block h-px w-8 align-middle opacity-50" style={{ backgroundColor: "currentColor" }} />
              {t.mission.rdEyebrow}
            </p>
            <h2 className="mt-5 text-[clamp(1.75rem,3.4vw,2.85rem)] leading-[1.12] font-semibold" style={{ color: "#0b1f33" }}>
              {t.mission.rdTitle}
            </h2>
            <p className="mt-5 text-[1.0625rem] leading-relaxed" style={{ color: "#5b6b7a" }}>
              {t.mission.rdDesc}
            </p>
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/research" className="inline-flex items-center gap-2 rounded-sm px-5 py-2.5 text-[0.8rem] font-semibold tracking-[0.12em] uppercase transition-all" style={{ backgroundColor: "#35b8b0", color: "#05231f" }}>
              {t.mission.rdCta1}
            </Link>
            <Link href="/about/mission" className="inline-flex items-center gap-2 rounded-sm px-5 py-2.5 text-[0.8rem] font-semibold tracking-[0.12em] uppercase transition-all" style={{ border: "1px solid #dde5ec", color: "#0b1f33" }}>
              {t.mission.rdCta2}
            </Link>
            <Link href="/facility" className="inline-flex items-center gap-2 rounded-sm px-5 py-2.5 text-[0.8rem] font-semibold tracking-[0.12em] uppercase transition-all" style={{ border: "1px solid #dde5ec", color: "#0b1f33" }}>
              {t.mission.rdCta3}
            </Link>
            <Link href="/about/network" className="inline-flex items-center gap-2 rounded-sm px-5 py-2.5 text-[0.8rem] font-semibold tracking-[0.12em] uppercase transition-all" style={{ border: "1px solid #dde5ec", color: "#0b1f33" }}>
              {t.mission.rdCta4}
            </Link>
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
                  {t.mission.ctaTitle}
                </h2>
                <p className="mt-5 max-w-xl text-[1rem] leading-relaxed" style={{ color: "rgba(255,255,255,0.65)" }}>
                  {t.mission.ctaDesc}
                </p>
              </div>
              <div className="flex flex-wrap gap-3 lg:justify-end">
                <Link href="/contact" className="inline-flex items-center gap-3 rounded-sm px-7 py-3.5 text-[0.8rem] font-semibold tracking-[0.14em] uppercase transition-all duration-300" style={{ backgroundColor: "#35b8b0", color: "#05231f" }}>
                  {t.mission.cta1}
                </Link>
                <Link href="/contact" className="inline-flex items-center gap-3 rounded-sm px-7 py-3.5 text-[0.8rem] font-semibold tracking-[0.14em] uppercase transition-all duration-300" style={{ border: "1px solid rgba(255,255,255,0.25)", color: "#fff" }}>
                  {t.mission.cta2}
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
