"use client";

import Link from "next/link";
import { useI18n } from "@/i18n/context";
import ScrollReveal from "@/components/ScrollReveal";

const BASE = "";

export default function NetworkPage() {
  const { t } = useI18n();
  return (
    <>
      {/* ===== HERO ===== */}
      <header className="relative isolate overflow-hidden" style={{ backgroundColor: "#071726" }}>
        <img src={`${BASE}/assets/cleanroom-DZtXjF0-.jpg`} alt="" className="absolute inset-0 h-full w-full object-cover" style={{ opacity: 0.3 }} />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to right, #071726, rgba(7,23,38,0.9), rgba(11,31,51,0.4))" }} />
        <div className="relative mx-auto w-full max-w-[1240px] px-6 pt-36 pb-20 md:px-10 md:pt-44 md:pb-28">
          <nav className="mb-8 text-[0.8rem]" style={{ color: "rgba(255,255,255,0.45)" }}>
            <Link href="/" className="transition-colors" style={{ color: "inherit" }}>{t.network.breadcrumbHome}</Link>
            <span className="mx-2" style={{ color: "rgba(255,255,255,0.25)" }}>/</span>
            <Link href="/about" className="transition-colors" style={{ color: "inherit" }}>{t.network.breadcrumbAbout}</Link>
            <span className="mx-2" style={{ color: "rgba(255,255,255,0.25)" }}>/</span>
            <span style={{ color: "rgba(255,255,255,0.75)" }}>{t.network.breadcrumbNetwork}</span>
          </nav>
          <p className="eyebrow" style={{ color: "#35b8b0" }}>
            <span className="mr-3 inline-block h-px w-8 align-middle opacity-50" style={{ backgroundColor: "currentColor" }} />
            {t.network.heroEyebrow}
          </p>
          <h1 className="mt-6 max-w-4xl text-white font-semibold leading-[1.06] text-[clamp(2.1rem,4.6vw,3.9rem)]">
            {t.network.heroTitle}
          </h1>
          <p className="mt-7 max-w-2xl text-[1.0625rem] leading-relaxed" style={{ color: "rgba(255,255,255,0.7)" }}>
            {t.network.heroSubtitle}
          </p>
        </div>
        <div className="absolute inset-x-0 bottom-0 h-px" style={{ background: "linear-gradient(to right, transparent, rgba(53,184,176,0.6), transparent)" }} />
      </header>

      {/* ===== KOREA ORIGIN ===== */}
      <section className="relative" style={{ backgroundColor: "#fff" }}>
        <div className="mx-auto w-full max-w-[1240px] px-6 py-20 md:px-10 md:py-28">
          <div className="grid gap-14 lg:grid-cols-[1fr_1fr] lg:items-center">
            <ScrollReveal>
              <div className="relative overflow-hidden rounded-sm">
                <img src={`${BASE}/assets/seoul-biotech-campus-D3ksiCpk.jpg`} alt="" className="w-full object-cover" style={{ aspectRatio: "16/10" }} />
              </div>
            </ScrollReveal>
            <ScrollReveal>
              <div>
                <p className="eyebrow">
                  <span className="mr-3 inline-block h-px w-8 align-middle opacity-50" style={{ backgroundColor: "currentColor" }} />
                  {t.network.koreaEyebrow}
                </p>
                <h2 className="mt-5 text-[clamp(1.75rem,3.4vw,2.85rem)] leading-[1.12] font-semibold" style={{ color: "#0b1f33" }}>
                  {t.network.koreaTitle}
                </h2>
                <p className="mt-5 text-[1.0625rem] leading-relaxed" style={{ color: "#5b6b7a" }}>
                  {t.network.koreaDesc}
                </p>
                <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {t.network.koreaStats.map((stat: { label: string; value: string }, i: number) => (
                    <div key={i} className="rounded-sm p-4" style={{ border: "1px solid #dde5ec", backgroundColor: "#f7fafc" }}>
                      <span className="text-[0.72rem] font-semibold tracking-[0.12em] uppercase" style={{ color: "#276a91" }}>{stat.label}</span>
                      <p className="mt-1 text-[0.88rem] font-semibold" style={{ color: "#0b1f33" }}>{stat.value}</p>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ===== INTEGRATED OPERATIONS ===== */}
      <section className="relative" style={{ backgroundColor: "#f7fafc" }}>
        <div className="mx-auto w-full max-w-[1240px] px-6 py-20 md:px-10 md:py-28">
          <div className="max-w-3xl">
            <p className="eyebrow">
              <span className="mr-3 inline-block h-px w-8 align-middle opacity-50" style={{ backgroundColor: "currentColor" }} />
              {t.network.operationsEyebrow}
            </p>
            <h2 className="mt-5 text-[clamp(1.75rem,3.4vw,2.85rem)] leading-[1.12] font-semibold" style={{ color: "#0b1f33" }}>
              {t.network.operationsTitle}
            </h2>
            <p className="mt-5 text-[1.0625rem] leading-relaxed" style={{ color: "#5b6b7a" }}>
              {t.network.operationsDesc}
            </p>
          </div>
          <div className="mt-12 grid gap-px sm:grid-cols-2 lg:grid-cols-3" style={{ backgroundColor: "#dde5ec" }}>
            {t.network.operationsItems.map((item: { num: string; title: string; desc: string }, i: number) => (
              <ScrollReveal key={i}>
                <div className="flex h-full flex-col p-8" style={{ backgroundColor: "#fff" }}>
                  <span className="text-[0.72rem] font-bold tracking-[0.14em]" style={{ color: "#35b8b0" }}>{item.num}</span>
                  <h3 className="mt-4 text-[1rem] font-semibold" style={{ color: "#0b1f33" }}>{item.title}</h3>
                  <p className="mt-2 text-[0.85rem] leading-relaxed" style={{ color: "#5b6b7a" }}>{item.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== GLOBAL PARTNERSHIP ===== */}
      <section className="relative isolate overflow-hidden" style={{ backgroundColor: "#0b1f33" }}>
        <div className="absolute inset-0 navy-grid" style={{ opacity: 0.6 }} />
        <div className="relative mx-auto w-full max-w-[1240px] px-6 py-20 md:px-10 md:py-28">
          <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
            <ScrollReveal>
              <div>
                <p className="eyebrow" style={{ color: "#35b8b0" }}>
                  <span className="mr-3 inline-block h-px w-8 align-middle opacity-50" style={{ backgroundColor: "currentColor" }} />
                  {t.network.globalEyebrow}
                </p>
                <h2 className="mt-5 text-[clamp(1.75rem,3.4vw,2.85rem)] leading-[1.12] font-semibold text-white">
                  {t.network.globalTitle}
                </h2>
                <p className="mt-5 text-[1rem] leading-relaxed" style={{ color: "rgba(255,255,255,0.7)" }}>
                  {t.network.globalDesc}
                </p>
                <div className="mt-8 space-y-4">
                  {t.network.globalRoles.map((role: { label: string; value: string }, i: number) => (
                    <div key={i} className="flex items-center gap-4">
                      <span className="text-[0.78rem] font-semibold tracking-[0.1em] uppercase" style={{ color: "#35b8b0" }}>{role.label}</span>
                      <span className="text-[0.88rem]" style={{ color: "rgba(255,255,255,0.7)" }}>{role.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal>
              <div className="rounded-sm p-10" style={{ border: "1px solid rgba(255,255,255,0.1)", backgroundColor: "rgba(255,255,255,0.03)" }}>
                <span className="text-[0.68rem] font-bold tracking-[0.18em] uppercase" style={{ color: "#35b8b0" }}>{t.network.globalTag}</span>
                <div className="mt-8 flex items-center gap-6">
                  <img src="/assets/everceutical-logo.png" alt="EverCeutical" className="h-10" />
                </div>
                <div className="mt-6 flex flex-wrap gap-2">
                  {t.network.globalPlatforms.map((p: string, i: number) => (
                    <span key={i} className="rounded-full px-3 py-1 text-[0.72rem] font-semibold" style={{ backgroundColor: "rgba(53,184,176,0.1)", color: "#35b8b0" }}>{p}</span>
                  ))}
                </div>
                <a href={t.network.globalUrl} target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex items-center gap-2 text-[0.85rem] font-semibold" style={{ color: "#35b8b0" }}>
                  {t.network.globalCta}
                  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M7 17 17 7M7 7h10v10" /></svg>
                </a>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ===== REGIONAL PRESENCE ===== */}
      <section className="relative" style={{ backgroundColor: "#fff" }}>
        <div className="mx-auto w-full max-w-[1240px] px-6 py-20 md:px-10 md:py-28">
          <div className="max-w-3xl">
            <p className="eyebrow">
              <span className="mr-3 inline-block h-px w-8 align-middle opacity-50" style={{ backgroundColor: "currentColor" }} />
              {t.network.regionalEyebrow}
            </p>
            <h2 className="mt-5 text-[clamp(1.75rem,3.4vw,2.85rem)] leading-[1.12] font-semibold" style={{ color: "#0b1f33" }}>
              {t.network.regionalTitle}
            </h2>
            <p className="mt-5 text-[1.0625rem] leading-relaxed" style={{ color: "#5b6b7a" }}>
              {t.network.regionalDesc}
            </p>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {t.network.regionalCards.map((card: { flag: string; region: string; title: string; desc: string }, i: number) => (
              <ScrollReveal key={i}>
                <div className="flex h-full flex-col rounded-sm p-8" style={{ border: "1px solid #dde5ec", backgroundColor: "#fff" }}>
                  <span className="text-2xl">{card.flag}</span>
                  <span className="mt-3 text-[0.72rem] font-bold tracking-[0.14em] uppercase" style={{ color: "#276a91" }}>{card.region}</span>
                  <h3 className="mt-2 text-[1rem] font-semibold" style={{ color: "#0b1f33" }}>{card.title}</h3>
                  <p className="mt-2 text-[0.85rem] leading-relaxed" style={{ color: "#5b6b7a" }}>{card.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FOCUS AREAS ===== */}
      <section className="relative" style={{ backgroundColor: "#f7fafc" }}>
        <div className="mx-auto w-full max-w-[1240px] px-6 py-20 md:px-10 md:py-28">
          <div className="max-w-3xl">
            <p className="eyebrow">
              <span className="mr-3 inline-block h-px w-8 align-middle opacity-50" style={{ backgroundColor: "currentColor" }} />
              {t.network.focusEyebrow}
            </p>
            <h2 className="mt-5 text-[clamp(1.75rem,3.4vw,2.85rem)] leading-[1.12] font-semibold" style={{ color: "#0b1f33" }}>
              {t.network.focusTitle}
            </h2>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {t.network.focusAreas.map((area: string, i: number) => (
              <div key={i} className="rounded-sm p-5 text-center" style={{ border: "1px solid #dde5ec", backgroundColor: "#fff" }}>
                <span className="text-[0.88rem] font-semibold" style={{ color: "#0b1f33" }}>{area}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== PARTNER TYPES ===== */}
      <section className="relative" style={{ backgroundColor: "#fff" }}>
        <div className="mx-auto w-full max-w-[1240px] px-6 py-20 md:px-10 md:py-28">
          <div className="max-w-3xl">
            <p className="eyebrow">
              <span className="mr-3 inline-block h-px w-8 align-middle opacity-50" style={{ backgroundColor: "currentColor" }} />
              {t.network.partnerEyebrow}
            </p>
            <h2 className="mt-5 text-[clamp(1.75rem,3.4vw,2.85rem)] leading-[1.12] font-semibold" style={{ color: "#0b1f33" }}>
              {t.network.partnerTitle}
            </h2>
            <p className="mt-5 text-[1.0625rem] leading-relaxed" style={{ color: "#5b6b7a" }}>
              {t.network.partnerDesc}
            </p>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {t.network.partnerTypes.map((type: string, i: number) => (
              <div key={i} className="flex items-center gap-3 rounded-sm p-5" style={{ border: "1px solid #dde5ec", backgroundColor: "#f7fafc" }}>
                <span className="block h-2 w-2 shrink-0 rounded-full" style={{ backgroundColor: "#35b8b0" }} />
                <span className="text-[0.95rem] font-medium" style={{ color: "#0b1f33" }}>{type}</span>
              </div>
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
                  {t.network.ctaTitle}
                </h2>
                <p className="mt-5 max-w-xl text-[1rem] leading-relaxed" style={{ color: "rgba(255,255,255,0.65)" }}>
                  {t.network.ctaDesc}
                </p>
              </div>
              <div className="flex flex-wrap gap-3 lg:justify-end">
                <Link href="/contact" className="inline-flex items-center gap-3 rounded-sm px-7 py-3.5 text-[0.8rem] font-semibold tracking-[0.14em] uppercase transition-all duration-300" style={{ backgroundColor: "#35b8b0", color: "#05231f" }}>
                  {t.network.cta1}
                </Link>
                <Link href="/contact" className="inline-flex items-center gap-3 rounded-sm px-7 py-3.5 text-[0.8rem] font-semibold tracking-[0.14em] uppercase transition-all duration-300" style={{ border: "1px solid rgba(255,255,255,0.25)", color: "#fff" }}>
                  {t.network.cta2}
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
