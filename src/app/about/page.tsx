"use client";

import Link from "next/link";
import { useI18n } from "@/i18n/context";
import ScrollReveal from "@/components/ScrollReveal";
import SEOHead from "@/components/SEOHead";

export default function AboutPage() {
  const { t } = useI18n();
  return (
    <>
      <SEOHead
        title="About Us — Vesco Science Korean Biotechnology Company"
        description="Learn about Vesco Science, a South Korea-based biotechnology company focused on regenerative medicine, exosome research, and advanced manufacturing for global partners."
        keywords="Vesco Science about, Korean biotech company, regenerative medicine Korea, biotechnology manufacturer"
        canonical="https://www.vescoscience.com/about"
      />
      {/* ===== HERO ===== */}
      <header className="relative isolate overflow-hidden" style={{ backgroundColor: "#071726" }}>
        <img src="/assets/seoul-biotech-campus-D3ksiCpk.jpg" alt="" className="absolute inset-0 h-full w-full object-cover" style={{ opacity: 0.25 }} />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to right, #071726 30%, rgba(11,31,51,0.5) 100%)" }} />
        <div className="relative mx-auto w-full max-w-[1240px] px-6 pt-36 pb-24 md:px-10 md:pt-44 md:pb-32">
          <nav className="mb-8 text-[0.8rem]" style={{ color: "rgba(255,255,255,0.4)" }}>
            <Link href="/" className="transition-colors hover:text-white/70" style={{ color: "inherit" }}>{t.about.breadcrumbHome}</Link>
            <span className="mx-2">/</span>
            <span style={{ color: "rgba(255,255,255,0.75)" }}>{t.about.heroEyebrow}</span>
          </nav>
          <p className="eyebrow" style={{ color: "#35b8b0" }}>
            <span className="mr-3 inline-block h-px w-8 align-middle opacity-50" style={{ backgroundColor: "currentColor" }} />
            {t.about.heroEyebrow}
          </p>
          <h1 className="mt-6 max-w-3xl text-white font-semibold leading-[1.06] text-[clamp(2.1rem,4.6vw,3.9rem)]" style={{ letterSpacing: "-0.025em" }}>
            {t.about.heroTitle}
          </h1>
          <p className="mt-7 max-w-2xl text-[1.0625rem] leading-relaxed" style={{ color: "rgba(255,255,255,0.7)" }}>
            {t.about.heroSubtitle}
          </p>
        </div>
        <div className="absolute inset-x-0 bottom-0 h-px" style={{ background: "linear-gradient(to right, transparent, rgba(53,184,176,0.5), transparent)" }} />
      </header>

      {/* ===== ABOUT INTRO ===== */}
      <section style={{ backgroundColor: "#f7fafc" }}>
        <div className="mx-auto w-full max-w-[1240px] px-6 py-20 md:px-10 md:py-28">
          <div className="grid gap-16 lg:grid-cols-[1.5fr_1fr] lg:items-start">
            <ScrollReveal>
              <div>
                <p className="eyebrow">
                  <span className="mr-3 inline-block h-px w-8 align-middle opacity-50" style={{ backgroundColor: "currentColor" }} />
                  {t.about.introEyebrow}
                </p>
                <h2 className="mt-5 text-[clamp(1.75rem,3.4vw,2.85rem)] leading-[1.12] font-semibold" style={{ color: "#0b1f33", letterSpacing: "-0.025em" }}>
                  {t.about.introTitle}
                </h2>
                <p className="mt-6 text-[1.0625rem] leading-relaxed" style={{ color: "#5b6b7a" }}>{t.about.introDesc}</p>
                <p className="mt-4 text-[1.0625rem] leading-relaxed" style={{ color: "#5b6b7a" }}>{t.about.introDesc2}</p>
              </div>
            </ScrollReveal>
            <ScrollReveal>
              <div className="rounded-sm p-8" style={{ border: "1px solid #dde5ec", backgroundColor: "#fff" }}>
                {t.about.introStats.map((stat: { label: string; value: string }, i: number) => (
                  <div key={i} className="py-4" style={i < t.about.introStats.length - 1 ? { borderBottom: "1px solid #dde5ec" } : {}}>
                    <span className="text-[0.72rem] font-semibold tracking-[0.12em] uppercase" style={{ color: "#5b6b7a" }}>{stat.label}</span>
                    <p className="mt-1 text-[0.95rem] font-semibold" style={{ color: "#0b1f33" }}>{stat.value}</p>
                  </div>
                ))}
                <Link href="/research" className="mt-6 inline-flex items-center gap-2 text-[0.85rem] font-semibold" style={{ color: "#276a91" }}>
                  {t.about.introCta}
                  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m9 18 6-6-6-6" /></svg>
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ===== WHO WE ARE ===== */}
      <section style={{ backgroundColor: "#fff" }}>
        <div className="mx-auto w-full max-w-[1240px] px-6 py-20 md:px-10 md:py-28">
          <div className="max-w-3xl">
            <p className="eyebrow">
              <span className="mr-3 inline-block h-px w-8 align-middle opacity-50" style={{ backgroundColor: "currentColor" }} />
              {t.about.capabilitiesEyebrow}
            </p>
            <h2 className="mt-5 text-[clamp(1.75rem,3.4vw,2.85rem)] leading-[1.12] font-semibold" style={{ color: "#0b1f33", letterSpacing: "-0.025em" }}>
              {t.about.capabilitiesTitle}
            </h2>
            <p className="mt-5 text-[1.0625rem] leading-relaxed" style={{ color: "#5b6b7a" }}>
              {t.about.capabilitiesDesc}
            </p>
          </div>
          <div className="mt-12 grid gap-px sm:grid-cols-2 lg:grid-cols-5" style={{ backgroundColor: "#dde5ec" }}>
            {t.about.capabilities.map((cap: { num: string; title: string; desc: string }, i: number) => (
              <ScrollReveal key={i}>
                <div className="flex h-full flex-col p-8" style={{ backgroundColor: "#fff" }}>
                  <span className="text-[0.72rem] font-bold tracking-[0.14em]" style={{ color: "#35b8b0" }}>{cap.num}</span>
                  <h3 className="mt-4 text-[1rem] font-semibold" style={{ color: "#0b1f33" }}>{cap.title}</h3>
                  <p className="mt-2 text-[0.85rem] leading-relaxed" style={{ color: "#5b6b7a" }}>{cap.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CORRIDOR ===== */}
      <section className="relative isolate overflow-hidden" style={{ backgroundColor: "#0b1f33" }}>
        <div className="absolute inset-0 navy-grid" style={{ opacity: 0.6 }} />
        <div className="relative mx-auto w-full max-w-[1240px] px-6 py-20 md:px-10 md:py-28">
          <div className="grid gap-14 lg:grid-cols-[1fr_1.4fr] lg:items-center">
            <ScrollReveal>
              <div className="relative overflow-hidden rounded-sm">
                <img src="/assets/cleanroom-DZtXjF0-.jpg" alt="" className="w-full object-cover" style={{ aspectRatio: "4/3" }} />
              </div>
            </ScrollReveal>
            <ScrollReveal>
              <div>
                <p className="eyebrow" style={{ color: "#35b8b0" }}>
                  <span className="mr-3 inline-block h-px w-8 align-middle opacity-50" style={{ backgroundColor: "currentColor" }} />
                  {t.about.corridorEyebrow}
                </p>
                <h2 className="mt-6 max-w-2xl text-white text-[clamp(1.6rem,3vw,2.5rem)] leading-[1.14] font-semibold" style={{ letterSpacing: "-0.025em" }}>
                  {t.about.corridorTitle}
                </h2>
                {t.about.corridorDesc.split("\n\n").map((p: string, i: number) => (
                  <p key={i} className="mt-5 text-[1rem] leading-relaxed" style={{ color: "rgba(255,255,255,0.7)" }}>{p}</p>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ===== PRINCIPLES ===== */}
      <section style={{ backgroundColor: "#f7fafc" }}>
        <div className="mx-auto w-full max-w-[1240px] px-6 py-20 md:px-10 md:py-28">
          <div className="max-w-3xl">
            <p className="eyebrow">
              <span className="mr-3 inline-block h-px w-8 align-middle opacity-50" style={{ backgroundColor: "currentColor" }} />
              {t.about.principlesEyebrow}
            </p>
            <h2 className="mt-5 text-[clamp(1.75rem,3.4vw,2.85rem)] leading-[1.12] font-semibold" style={{ color: "#0b1f33", letterSpacing: "-0.025em" }}>
              {t.about.principlesTitle}
            </h2>
          </div>
          <div className="mt-12 grid gap-px sm:grid-cols-2 lg:grid-cols-4" style={{ backgroundColor: "#dde5ec" }}>
            {t.about.principles.map((p: { num: string; title: string; desc: string }, i: number) => (
              <ScrollReveal key={i}>
                <div className="flex h-full flex-col p-8" style={{ backgroundColor: "#fff" }}>
                  <span className="text-[0.72rem] font-bold tracking-[0.14em]" style={{ color: "#35b8b0" }}>{p.num}</span>
                  <h3 className="mt-4 text-[1rem] font-semibold" style={{ color: "#0b1f33" }}>{p.title}</h3>
                  <p className="mt-2 text-[0.85rem] leading-relaxed" style={{ color: "#5b6b7a" }}>{p.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SUPPLY CHAIN ===== */}
      <section className="relative isolate overflow-hidden" style={{ backgroundColor: "#0b1f33" }}>
        <div className="absolute inset-0 navy-grid" style={{ opacity: 0.6 }} />
        <div className="relative mx-auto w-full max-w-[1240px] px-6 py-20 md:px-10 md:py-28">
          <div className="max-w-3xl">
            <p className="eyebrow" style={{ color: "#35b8b0" }}>
              <span className="mr-3 inline-block h-px w-8 align-middle opacity-50" style={{ backgroundColor: "currentColor" }} />
              {t.about.supplyEyebrow}
            </p>
            <h2 className="mt-5 text-[clamp(1.75rem,3.4vw,2.85rem)] leading-[1.12] font-semibold text-white" style={{ letterSpacing: "-0.025em" }}>
              {t.about.supplyTitle}
            </h2>
          </div>
          <div className="mt-12 overflow-hidden rounded-sm" style={{ border: "1px solid rgba(255,255,255,0.1)" }}>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px" style={{ backgroundColor: "rgba(255,255,255,0.1)" }}>
              {t.about.supplyHeaders.map((h: string, i: number) => (
                <div key={i} className="px-6 py-4 text-[0.72rem] font-bold tracking-[0.14em] uppercase" style={{ backgroundColor: "#071726", color: "#35b8b0" }}>{h}</div>
              ))}
            </div>
            {t.about.supplyRows.map((row: string[], rIdx: number) => (
              <div key={rIdx} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px" style={{ backgroundColor: "rgba(255,255,255,0.1)" }}>
                {row.map((cell: string, cIdx: number) => (
                  <div key={cIdx} className="px-6 py-5 text-[0.88rem] leading-relaxed" style={{ backgroundColor: "#0b1f33", color: cIdx === 0 ? "#fff" : "rgba(255,255,255,0.7)" }}>
                    {cell}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FROM BIO TO PRODUCT ===== */}
      <section style={{ backgroundColor: "#f7fafc" }}>
        <div className="mx-auto w-full max-w-[1240px] px-6 py-20 md:px-10 md:py-28">
          <div className="max-w-3xl">
            <p className="eyebrow">
              <span className="mr-3 inline-block h-px w-8 align-middle opacity-50" style={{ backgroundColor: "currentColor" }} />
              {t.about.devEyebrow}
            </p>
            <h2 className="mt-5 text-[clamp(1.75rem,3.4vw,2.85rem)] leading-[1.12] font-semibold" style={{ color: "#0b1f33", letterSpacing: "-0.025em" }}>
              {t.about.devTitle}
            </h2>
            <p className="mt-5 text-[1.0625rem] leading-relaxed" style={{ color: "#5b6b7a" }}>
              {t.about.devDesc}
            </p>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {t.about.devSteps.map((step: { title: string; desc: string }, i: number) => (
              <ScrollReveal key={i}>
                <div className="flex h-full flex-col p-8 rounded-sm" style={{ border: "1px solid #dde5ec", backgroundColor: "#fff" }}>
                  <div className="flex h-12 w-12 items-center justify-center rounded-full" style={{ backgroundColor: "rgba(53,184,176,0.1)" }}>
                    <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="#35b8b0" strokeWidth="2"><path d="M12 2v20M2 12h20" /></svg>
                  </div>
                  <h3 className="mt-5 text-[1rem] font-semibold" style={{ color: "#0b1f33" }}>{step.title}</h3>
                  <p className="mt-2 text-[0.85rem] leading-relaxed" style={{ color: "#5b6b7a" }}>{step.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== DEV TO PRODUCTION ===== */}
      <section style={{ backgroundColor: "#fff" }}>
        <div className="mx-auto w-full max-w-[1240px] px-6 py-20 md:px-10 md:py-28">
          <div className="max-w-3xl">
            <p className="eyebrow">
              <span className="mr-3 inline-block h-px w-8 align-middle opacity-50" style={{ backgroundColor: "currentColor" }} />
              {t.about.prodEyebrow}
            </p>
            <h2 className="mt-5 text-[clamp(1.75rem,3.4vw,2.85rem)] leading-[1.12] font-semibold" style={{ color: "#0b1f33", letterSpacing: "-0.025em" }}>
              {t.about.prodTitle}
            </h2>
            <p className="mt-5 text-[1.0625rem] leading-relaxed" style={{ color: "#5b6b7a" }}>
              {t.about.prodDesc}
            </p>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {t.about.prodSteps.map((step: { num: string; title: string; desc: string }, i: number) => (
              <ScrollReveal key={i}>
                <div className="flex h-full flex-col p-8 rounded-sm" style={{ border: "1px solid #dde5ec", backgroundColor: "#f7fafc" }}>
                  <span className="text-[0.72rem] font-bold tracking-[0.14em]" style={{ color: "#35b8b0" }}>{step.num}</span>
                  <h3 className="mt-4 text-[1rem] font-semibold" style={{ color: "#0b1f33" }}>{step.title}</h3>
                  <p className="mt-2 text-[0.85rem] leading-relaxed" style={{ color: "#5b6b7a" }}>{step.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== QUALITY BUILT IN ===== */}
      <section className="relative isolate overflow-hidden" style={{ backgroundColor: "#0b1f33" }}>
        <div className="absolute inset-0 navy-grid" style={{ opacity: 0.6 }} />
        <div className="relative mx-auto w-full max-w-[1240px] px-6 py-20 md:px-10 md:py-28">
          <div className="max-w-3xl">
            <p className="eyebrow" style={{ color: "#35b8b0" }}>
              <span className="mr-3 inline-block h-px w-8 align-middle opacity-50" style={{ backgroundColor: "currentColor" }} />
              {t.about.qualityEyebrow}
            </p>
            <h2 className="mt-5 text-[clamp(1.75rem,3.4vw,2.85rem)] leading-[1.12] font-semibold text-white" style={{ letterSpacing: "-0.025em" }}>
              {t.about.qualityTitle}
            </h2>
            <p className="mt-5 text-[1rem] leading-relaxed" style={{ color: "rgba(255,255,255,0.7)" }}>
              {t.about.qualityDesc}
            </p>
          </div>
          <div className="mt-12 grid gap-px sm:grid-cols-2 lg:grid-cols-3" style={{ backgroundColor: "rgba(255,255,255,0.1)" }}>
            {t.about.qualityItems.map((item: { num: string; title: string; items: string[] }, i: number) => (
              <ScrollReveal key={i}>
                <div className="flex h-full flex-col p-8" style={{ backgroundColor: "#0b1f33" }}>
                  <span className="text-[0.72rem] font-bold tracking-[0.14em]" style={{ color: "#35b8b0" }}>{item.num}</span>
                  <h3 className="mt-4 text-[1rem] font-semibold text-white">{item.title}</h3>
                  <ul className="mt-4 space-y-2">
                    {item.items.map((li: string, j: number) => (
                      <li key={j} className="flex items-start gap-2 text-[0.85rem] leading-relaxed" style={{ color: "rgba(255,255,255,0.7)" }}>
                        <span className="mt-2 block h-1.5 w-1.5 shrink-0 rounded-full" style={{ backgroundColor: "#35b8b0" }} />
                        {li}
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== PARTNERSHIP ===== */}
      <section style={{ backgroundColor: "#f7fafc" }}>
        <div className="relative mx-auto w-full max-w-[1240px] px-6 py-24 md:px-10 md:py-32">
          {/* Eyebrow */}
          <div className="text-center">
            <p className="eyebrow" style={{ color: "#35b8b0" }}>
              <span className="mr-3 inline-block h-px w-8 align-middle opacity-50" style={{ backgroundColor: "currentColor" }} />
              {t.about.partnershipEyebrow}
              <span className="ml-3 inline-block h-px w-8 align-middle opacity-50" style={{ backgroundColor: "currentColor" }} />
            </p>
          </div>

          {/* Main title with × */}
          <div className="mt-10 text-center">
            <ScrollReveal>
              <h2 className="text-[clamp(2rem,4vw,3.5rem)] leading-[1.1] font-semibold" style={{ color: "#0b1f33", letterSpacing: "-0.025em" }}>
                {t.about.partnershipTitle}
              </h2>
            </ScrollReveal>
          </div>

          {/* Description */}
          <div className="mt-8 max-w-3xl mx-auto text-center">
            <ScrollReveal>
              <p className="text-[1.0625rem] leading-relaxed" style={{ color: "#5b6b7a" }}>
                {t.about.partnershipDesc}
              </p>
            </ScrollReveal>
          </div>

          {/* Partner cards */}
          <div className="mt-16 grid gap-8 md:grid-cols-2">
            {/* Vesco Science */}
            <ScrollReveal>
              <div className="relative rounded-sm p-8 md:p-10" style={{ border: "1px solid #dde5ec", backgroundColor: "#fff" }}>
                <div className="absolute top-0 left-0 w-full h-0.5 rounded-t-sm" style={{ background: "linear-gradient(to right, #35b8b0, transparent)" }} />
                <div className="flex items-center gap-4 mb-6">
                  <img src="/assets/vesco_logo-KfffcaeC.png" alt="Vesco Science" className="h-12" />
                </div>
                <div className="space-y-3">
                  {["Research & Development", "Advanced Technology", "Controlled Manufacturing"].map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <span className="h-1.5 w-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: "#35b8b0" }} />
                      <span className="text-[0.95rem]" style={{ color: "#5b6b7a" }}>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            {/* EverCeutical */}
            <ScrollReveal>
              <div className="relative rounded-sm p-8 md:p-10" style={{ border: "1px solid #dde5ec", backgroundColor: "#fff" }}>
                <div className="absolute top-0 left-0 w-full h-0.5 rounded-t-sm" style={{ background: "linear-gradient(to right, #276a91, transparent)" }} />
                <div className="flex items-center gap-4 mb-6">
                  <img src="/assets/everceutical-logo.png" alt="EverCeutical" className="h-10" />
                </div>
                <div className="space-y-3">
                  {["Global Marketing", "Commercialization", "Market Expansion"].map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <span className="h-1.5 w-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: "#276a91" }} />
                      <span className="text-[0.95rem]" style={{ color: "#5b6b7a" }}>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Selected platforms */}
          <div className="mt-12 text-center">
            <ScrollReveal>
              <p className="text-[0.72rem] font-bold tracking-[0.18em] uppercase" style={{ color: "#0b1f33" }}>
                {t.about.partnershipTag}
              </p>
              <div className="mt-4 flex flex-wrap items-center justify-center gap-6 text-[0.88rem]" style={{ color: "#5b6b7a" }}>
                <span>Exosomes</span>
                <span className="h-1 w-1 rounded-full" style={{ backgroundColor: "#dde5ec" }} />
                <span>HA & Fillers</span>
                <span className="h-1 w-1 rounded-full" style={{ backgroundColor: "#dde5ec" }} />
                <span>Peptides</span>
                <span className="h-1 w-1 rounded-full" style={{ backgroundColor: "#dde5ec" }} />
                <span>PDRN / PN</span>
                <span className="h-1 w-1 rounded-full" style={{ backgroundColor: "#dde5ec" }} />
                <span>Regenerative Solutions</span>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ===== VISION & MISSION ===== */}
      <section className="relative isolate overflow-hidden" style={{ backgroundColor: "#071726" }}>
        <div className="absolute inset-0 navy-grid" style={{ opacity: 0.4 }} />
        <div className="absolute top-0 right-0 h-[600px] w-[600px] rounded-full blur-[180px]" style={{ background: "radial-gradient(circle, rgba(53,184,176,0.12), transparent 70%)" }} />
        <div className="absolute bottom-0 left-0 h-[400px] w-[400px] rounded-full blur-[140px]" style={{ background: "radial-gradient(circle, rgba(39,106,145,0.1), transparent 70%)" }} />
        <div className="relative mx-auto w-full max-w-[1240px] px-6 py-24 md:px-10 md:py-32">
          {/* Top bar */}
          <div className="flex items-center gap-4 mb-16">
            <div className="h-px flex-1" style={{ background: "linear-gradient(to right, rgba(53,184,176,0.5), transparent)" }} />
            <p className="eyebrow" style={{ color: "#35b8b0" }}>
              <span className="mr-3 inline-block h-px w-8 align-middle opacity-50" style={{ backgroundColor: "currentColor" }} />
              {t.about.futureEyebrow}
            </p>
            <div className="h-px flex-1" style={{ background: "linear-gradient(to left, rgba(53,184,176,0.5), transparent)" }} />
          </div>

          {/* Two large blocks */}
          <div className="grid gap-16 lg:grid-cols-2">
            {/* Vision */}
            <ScrollReveal>
              <div className="relative rounded-sm p-10 md:p-12" style={{ border: "1px solid rgba(53,184,176,0.2)", background: "linear-gradient(135deg, rgba(53,184,176,0.05), transparent 60%)" }}>
                <div className="absolute top-0 left-0 h-full w-1 rounded-l-sm" style={{ background: "linear-gradient(to bottom, #35b8b0, transparent)" }} />
                <p className="text-[0.72rem] font-bold tracking-[0.18em] uppercase" style={{ color: "#35b8b0" }}>OUR VISION</p>
                <h2 className="mt-6 text-white text-[clamp(1.75rem,3.4vw,2.85rem)] leading-[1.12] font-semibold" style={{ letterSpacing: "-0.025em" }}>
                  {t.about.futureColumn1.title}
                </h2>
                <p className="mt-6 text-[1.0625rem] leading-relaxed" style={{ color: "rgba(255,255,255,0.7)" }}>
                  {t.about.futureColumn1.desc}
                </p>
              </div>
            </ScrollReveal>

            {/* Mission */}
            <ScrollReveal>
              <div className="relative rounded-sm p-10 md:p-12" style={{ border: "1px solid rgba(53,184,176,0.2)", background: "linear-gradient(135deg, rgba(39,106,145,0.08), transparent 60%)" }}>
                <div className="absolute top-0 left-0 h-full w-1 rounded-l-sm" style={{ background: "linear-gradient(to bottom, #276a91, transparent)" }} />
                <p className="text-[0.72rem] font-bold tracking-[0.18em] uppercase" style={{ color: "#276a91" }}>OUR MISSION</p>
                <h2 className="mt-6 text-white text-[clamp(1.75rem,3.4vw,2.85rem)] leading-[1.12] font-semibold" style={{ letterSpacing: "-0.025em" }}>
                  {t.about.futureColumn2.title}
                </h2>
                <p className="mt-6 text-[1.0625rem] leading-relaxed" style={{ color: "rgba(255,255,255,0.7)" }}>
                  {t.about.futureColumn2.desc}
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ===== R&D ===== */}
      <section style={{ backgroundColor: "#f7fafc" }}>
        <div className="mx-auto w-full max-w-[1240px] px-6 py-20 md:px-10 md:py-28">
          <div className="max-w-3xl">
            <p className="eyebrow">
              <span className="mr-3 inline-block h-px w-8 align-middle opacity-50" style={{ backgroundColor: "currentColor" }} />
              {t.about.rdEyebrow}
            </p>
            <h2 className="mt-5 text-[clamp(1.75rem,3.4vw,2.85rem)] leading-[1.12] font-semibold" style={{ color: "#0b1f33", letterSpacing: "-0.025em" }}>
              {t.about.rdTitle}
            </h2>
            <p className="mt-5 text-[1.0625rem] leading-relaxed" style={{ color: "#5b6b7a" }}>
              {t.about.rdDesc}
            </p>
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
                <h2 className="max-w-2xl text-white text-[clamp(1.6rem,3vw,2.5rem)] leading-[1.14] font-semibold" style={{ letterSpacing: "-0.025em" }}>
                  {t.about.ctaTitle}
                </h2>
                <p className="mt-5 max-w-xl text-[1rem] leading-relaxed" style={{ color: "rgba(255,255,255,0.65)" }}>
                  {t.about.ctaDesc}
                </p>
              </div>
              <div className="flex flex-wrap gap-3 lg:justify-end">
                <Link href="/contact" className="inline-flex items-center gap-3 rounded-sm px-7 py-3.5 text-[0.8rem] font-semibold tracking-[0.14em] uppercase transition-all duration-300" style={{ backgroundColor: "#35b8b0", color: "#05231f" }}>
                  {t.about.cta1}
                </Link>
                <Link href="/contact" className="inline-flex items-center gap-3 rounded-sm px-7 py-3.5 text-[0.8rem] font-semibold tracking-[0.14em] uppercase transition-all duration-300" style={{ border: "1px solid rgba(255,255,255,0.25)", color: "#fff" }}>
                  {t.about.cta2}
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
