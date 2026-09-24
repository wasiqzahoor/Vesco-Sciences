"use client";

import Link from "next/link";
import { useI18n } from "@/i18n/context";
import ScrollReveal from "@/components/ScrollReveal";
import SEOHead from "@/components/SEOHead";

const BASE = "";

export default function NetworkPage() {
  const { t } = useI18n();
  return (
    <>
      <SEOHead
        title="Global Network & Partnership — Vesco Science"
        description="Vesco Science global network: Korean biotechnology partnerships, international distribution, and collaboration with EverCeutical for worldwide reach."
        keywords="Vesco Science network, global biotech partnership, Korean biotech distribution"
        canonical="https://www.vescoscience.com/about/network"
      />
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
      <section className="relative isolate overflow-hidden" style={{ backgroundColor: "#071726" }}>
        <div className="absolute inset-0 navy-grid" style={{ opacity: 0.4 }} />
        <div className="absolute top-0 right-0 h-[500px] w-[500px] rounded-full blur-[200px]" style={{ background: "radial-gradient(circle, rgba(53,184,176,0.12), transparent 70%)" }} />
        <div className="absolute bottom-0 left-0 h-[400px] w-[400px] rounded-full blur-[160px]" style={{ background: "radial-gradient(circle, rgba(39,106,145,0.1), transparent 70%)" }} />
        <div className="relative mx-auto w-full max-w-[1240px] px-6 py-24 md:px-10 md:py-32">
          {/* Top Eyebrow */}
          <ScrollReveal>
            <div className="text-center">
              <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5" style={{ background: "linear-gradient(135deg, rgba(53,184,176,0.15), rgba(53,184,176,0.05))", border: "1px solid rgba(53,184,176,0.25)" }}>
                <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: "#35b8b0" }} />
                <span className="text-[0.68rem] font-bold tracking-[0.18em] uppercase" style={{ color: "#35b8b0" }}>{t.network.globalEyebrow}</span>
              </div>
            </div>
          </ScrollReveal>

          {/* Main Title */}
          <ScrollReveal>
            <div className="mt-10 text-center">
              <h2 className="text-white text-[clamp(2rem,4.5vw,3.8rem)] leading-[1.08] font-semibold" style={{ letterSpacing: "-0.025em" }}>
                Vesco Science <span className="inline-block mx-2 text-[clamp(1.5rem,3vw,2.5rem)]" style={{ color: "#35b8b0" }}>×</span> EverCeutical
              </h2>
              <p className="mt-5 max-w-2xl mx-auto text-[1.0625rem] leading-relaxed" style={{ color: "rgba(255,255,255,0.65)" }}>
                {t.network.globalDesc}
              </p>
            </div>
          </ScrollReveal>

          {/* Partnership Cards */}
          <div className="mt-16 grid gap-6 lg:grid-cols-2 lg:gap-8">
            {/* Vesco Science Card */}
            <ScrollReveal>
              <div className="relative rounded-2xl p-8 md:p-10 transition-all duration-300 hover:-translate-y-1" style={{ background: "linear-gradient(135deg, rgba(255,255,255,0.95), rgba(255,255,255,0.85))", border: "1px solid rgba(221,229,236,0.8)", backdropFilter: "blur(20px)", WebkitBackdropFilter: "blur(20px)", boxShadow: "0 8px 32px rgba(11,31,51,0.08)" }}>
                <div className="absolute top-0 left-0 w-full h-1 rounded-t-2xl" style={{ background: "linear-gradient(to right, #35b8b0, transparent)" }} />
                <div className="flex items-center gap-4 mb-6">
                  <img src="/assets/vesco_logo-KfffcaeC.png" alt="Vesco Science" className="h-10 sm:h-12" />
                </div>
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-[0.72rem] font-bold tracking-[0.14em] uppercase" style={{ color: "#35b8b0" }}>Vesco Science</span>
                  <span className="h-px flex-1" style={{ background: "linear-gradient(to right, rgba(53,184,176,0.4), transparent)" }} />
                </div>
                <div className="space-y-3">
                  {["Research & Development", "Advanced Technology Platforms", "Controlled Manufacturing"].map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="flex h-7 w-7 items-center justify-center rounded-full" style={{ background: "linear-gradient(135deg, rgba(53,184,176,0.2), rgba(53,184,176,0.08))" }}>
                        <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="#35b8b0" strokeWidth="3"><path d="M20 6L9 17l-5-5" /></svg>
                      </div>
                      <span className="text-[0.95rem]" style={{ color: "#0b1f33" }}>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            {/* EverCeutical Card */}
            <ScrollReveal>
              <div className="relative rounded-2xl p-8 md:p-10 transition-all duration-300 hover:-translate-y-1" style={{ background: "linear-gradient(135deg, rgba(255,255,255,0.95), rgba(255,255,255,0.85))", border: "1px solid rgba(221,229,236,0.8)", backdropFilter: "blur(20px)", WebkitBackdropFilter: "blur(20px)", boxShadow: "0 8px 32px rgba(11,31,51,0.08)" }}>
                <div className="absolute top-0 left-0 w-full h-1 rounded-t-2xl" style={{ background: "linear-gradient(to right, #276a91, transparent)" }} />
                <div className="flex items-center gap-4 mb-6">
                  <img src="/assets/everceutical-logo.png" alt="EverCeutical" className="h-8 sm:h-10" />
                </div>
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-[0.72rem] font-bold tracking-[0.14em] uppercase" style={{ color: "#276a91" }}>EverCeutical</span>
                  <span className="h-px flex-1" style={{ background: "linear-gradient(to right, rgba(39,106,145,0.4), transparent)" }} />
                </div>
                <div className="space-y-3">
                  {["Global Marketing & Distribution", "Commercialization Strategy", "Market Expansion Worldwide"].map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="flex h-7 w-7 items-center justify-center rounded-full" style={{ background: "linear-gradient(135deg, rgba(39,106,145,0.2), rgba(39,106,145,0.08))" }}>
                        <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="#276a91" strokeWidth="3"><path d="M20 6L9 17l-5-5" /></svg>
                      </div>
                      <span className="text-[0.95rem]" style={{ color: "#0b1f33" }}>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Selected Platforms */}
          <ScrollReveal>
            <div className="mt-12 rounded-2xl p-8 md:p-10" style={{ background: "linear-gradient(135deg, rgba(255,255,255,0.06), rgba(255,255,255,0.02))", border: "1px solid rgba(255,255,255,0.08)" }}>
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                <div>
                  <span className="text-[0.68rem] font-bold tracking-[0.18em] uppercase" style={{ color: "#35b8b0" }}>{t.network.globalTag}</span>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {t.network.globalPlatforms.map((p: string, i: number) => (
                      <span key={i} className="rounded-full px-4 py-1.5 text-[0.75rem] font-semibold" style={{ background: "linear-gradient(135deg, rgba(53,184,176,0.15), rgba(53,184,176,0.05))", border: "1px solid rgba(53,184,176,0.25)", color: "#35b8b0" }}>{p}</span>
                    ))}
                  </div>
                </div>
                <a href={t.network.globalUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 rounded-full px-7 py-3.5 text-[0.8rem] font-semibold tracking-[0.14em] uppercase transition-all duration-300 hover:shadow-lg shrink-0" style={{ background: "linear-gradient(135deg, #35b8b0, #2a9d96)", color: "#05231f" }}>
                  {t.network.globalCta}
                  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M7 17 17 7M7 7h10v10" /></svg>
                </a>
              </div>
            </div>
          </ScrollReveal>
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
