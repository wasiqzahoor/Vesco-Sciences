"use client";

import Link from "next/link";
import { useI18n } from "@/i18n/context";
import ScrollReveal from "@/components/ScrollReveal";
import SEOHead from "@/components/SEOHead";

export default function HomePage() {
  const { t } = useI18n();

  return (
    <>
      <SEOHead
        title="Vesco Science — Korean Regenerative Biotechnology & Custom Manufacturing"
        description="Vesco Science develops advanced biotechnology solutions: exosome, PDRN/PN, HA, and peptide-based regenerative formulations. Custom manufacturing, lyophilization, and cold chain from Korea."
        keywords="Korean biotechnology, regenerative medicine, exosome manufacturer Korea, PDRN PN, custom manufacturing, lyophilization, hyaluronic acid filler, peptide bio remodeling, botulinum toxin Korea"
        canonical="https://www.vescoscience.com"
      />
      {/* ===== 01. HERO (UNCHANGED) ===== */}
      <section className="relative isolate flex min-h-[92vh] items-center overflow-hidden" style={{ backgroundColor: "#071726" }}>
        <video src="/bg.mp4" autoPlay muted loop playsInline className="absolute inset-0 h-full w-full object-cover" style={{ opacity: 0.45, animation: "slowZoom 26s ease-in-out infinite alternate" }} />
        <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(7,23,38,0.95) 0%, rgba(7,23,38,0.75) 40%, rgba(11,31,51,0.4) 100%)" }} />
        <div className="absolute inset-0 navy-grid" style={{ opacity: 0.3 }} />
        <div className="absolute top-20 right-[15%] h-[300px] w-[300px] rounded-full blur-[120px]" style={{ background: "radial-gradient(circle, rgba(53,184,176,0.15), transparent 70%)" }} />
        <div className="absolute bottom-20 left-[10%] h-[200px] w-[200px] rounded-full blur-[100px]" style={{ background: "radial-gradient(circle, rgba(39,106,145,0.12), transparent 70%)" }} />
        <div className="relative mx-auto w-full max-w-[1240px] px-6 pt-32 pb-24 md:px-10 md:pt-40">
          <ScrollReveal>
            <p className="eyebrow" style={{ color: "#35b8b0" }}>
              <span className="mr-3 inline-block h-px w-8 align-middle opacity-50" style={{ backgroundColor: "currentColor" }} />
              {t.hero.eyebrow}
            </p>
            <h1 className="mt-8 max-w-4xl text-white font-semibold leading-[1.03] text-[clamp(2.4rem,5.6vw,4.4rem)]" style={{ letterSpacing: "-0.025em" }}>
              {t.hero.title}
            </h1>
            <p className="mt-6 max-w-2xl text-[clamp(1.05rem,1.7vw,1.35rem)] leading-relaxed" style={{ color: "rgba(255,255,255,0.65)" }}>
              {t.hero.subtitleLine}
            </p>
            <p className="mt-4 max-w-2xl text-[1.0625rem] leading-relaxed" style={{ color: "rgba(255,255,255,0.55)" }}>
              {t.hero.subtitle}
            </p>
            <div className="mt-12 flex flex-wrap gap-4">
              <Link href="/technology" className="inline-flex items-center gap-3 rounded-sm px-8 py-4 text-[0.8rem] font-semibold tracking-[0.14em] uppercase transition-all duration-300 hover:shadow-lg" style={{ backgroundColor: "#35b8b0", color: "#05231f" }}>
                {t.hero.ctaTech}
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m9 18 6-6-6-6" /></svg>
              </Link>
              <Link href="/contact" className="inline-flex items-center gap-3 rounded-sm px-8 py-4 text-[0.8rem] font-semibold tracking-[0.14em] uppercase transition-all duration-300 hover:bg-white/10" style={{ border: "1px solid rgba(255,255,255,0.3)", color: "#fff" }}>
                {t.hero.ctaPartner}
              </Link>
            </div>
          </ScrollReveal>
        </div>
        <div className="absolute inset-x-0 bottom-0 h-px" style={{ background: "linear-gradient(to right, transparent, rgba(53,184,176,0.5), transparent)" }} />
      </section>

      {/* ===== 02. TRUST / CAPABILITY BAR — Glassmorphism strip ===== */}
      <section className="relative overflow-hidden" style={{ backgroundColor: "#0b1f33" }}>
        <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(7,23,38,0.95), rgba(11,31,51,0.9))" }} />
        <div className="absolute inset-0 navy-grid" style={{ opacity: 0.4 }} />
        <div className="relative mx-auto w-full max-w-[1240px] px-6 py-12 md:px-10">
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
            {t.stats.map((stat, i) => (
              <ScrollReveal key={i}>
                <div className="group relative rounded-xl p-5 text-center transition-all duration-300 hover:-translate-y-1" style={{ background: "linear-gradient(135deg, rgba(255,255,255,0.08), rgba(255,255,255,0.02))", border: "1px solid rgba(255,255,255,0.1)", backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)" }}>
                  <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full text-xl" style={{ background: "linear-gradient(135deg, rgba(53,184,176,0.25), rgba(53,184,176,0.08))", border: "1px solid rgba(53,184,176,0.3)" }}>{stat.icon}</div>
                  <h3 className="text-[0.72rem] font-bold uppercase tracking-[0.1em]" style={{ color: "#fff" }}>{stat.title}</h3>
                  <div className="mx-auto mt-2 h-px w-6" style={{ background: "linear-gradient(to right, transparent, #35b8b0, transparent)" }} />
                  <p className="mt-2 text-[0.7rem] leading-relaxed" style={{ color: "rgba(255,255,255,0.55)" }}>{stat.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== 03. ABOUT VESCO — Side-by-side with glass card ===== */}
      <section className="relative overflow-hidden" style={{ backgroundColor: "#f7fafc" }}>
        <div className="absolute top-0 right-0 h-[400px] w-[400px] rounded-full blur-[160px]" style={{ background: "radial-gradient(circle, rgba(53,184,176,0.08), transparent 70%)" }} />
        <div className="relative mx-auto w-full max-w-[1240px] px-6 py-24 md:px-10 md:py-32">
          <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
            <ScrollReveal>
              <div>
                <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5" style={{ background: "linear-gradient(135deg, rgba(53,184,176,0.12), rgba(53,184,176,0.04))", border: "1px solid rgba(53,184,176,0.2)" }}>
                  <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: "#35b8b0" }} />
                  <span className="text-[0.68rem] font-bold tracking-[0.14em] uppercase" style={{ color: "#35b8b0" }}>{t.about.introEyebrow}</span>
                </div>
                <h2 className="mt-6 text-[clamp(1.75rem,3.4vw,2.85rem)] leading-[1.12] font-semibold" style={{ color: "#0b1f33", letterSpacing: "-0.025em" }}>
                  {t.about.introTitle}
                </h2>
                <p className="mt-5 text-[1.0625rem] leading-relaxed" style={{ color: "#5b6b7a" }}>
                  {t.about.introDesc}
                </p>
                <p className="mt-4 text-[1.0625rem] leading-relaxed" style={{ color: "#5b6b7a" }}>
                  {t.about.introDesc2}
                </p>
                <Link href="/about" className="mt-10 inline-flex items-center gap-3 rounded-full px-7 py-3.5 text-[0.8rem] font-semibold tracking-[0.14em] uppercase transition-all duration-300 hover:shadow-lg" style={{ background: "linear-gradient(135deg, #0b1f33, #173352)", color: "#fff" }}>
                  {t.about.introCta}
                  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m9 18 6-6-6-6" /></svg>
                </Link>
              </div>
            </ScrollReveal>
            <ScrollReveal>
              <div className="relative">
                <div className="overflow-hidden rounded-2xl" style={{ boxShadow: "0 25px 60px rgba(11,31,51,0.15)" }}>
                  <img src="/assets/cleanroom-DZtXjF0-.jpg" alt="Vesco Science laboratory facility" className="aspect-[4/3] w-full object-cover" />
                </div>
                <div className="absolute -bottom-6 -left-6 hidden md:block rounded-xl p-6" style={{ background: "linear-gradient(135deg, rgba(255,255,255,0.95), rgba(255,255,255,0.85))", border: "1px solid rgba(255,255,255,0.8)", backdropFilter: "blur(20px)", WebkitBackdropFilter: "blur(20px)", boxShadow: "0 10px 40px rgba(11,31,51,0.12)" }}>
                  <p className="text-[0.68rem] font-bold tracking-[0.14em] uppercase" style={{ color: "#35b8b0" }}>{t.companyInfo.name}</p>
                  <p className="mt-2 text-[0.88rem] font-semibold" style={{ color: "#0b1f33" }}>{t.companyInfo.tagline}</p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ===== 04. CORE TECHNOLOGY — 3D Glass cards ===== */}
      <section className="relative overflow-hidden" style={{ backgroundColor: "#fff" }}>
        <div className="absolute bottom-0 left-0 h-[500px] w-[500px] rounded-full blur-[180px]" style={{ background: "radial-gradient(circle, rgba(39,106,145,0.06), transparent 70%)" }} />
        <div className="relative mx-auto w-full max-w-[1240px] px-6 py-24 md:px-10 md:py-32">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto">
              <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5" style={{ background: "linear-gradient(135deg, rgba(53,184,176,0.12), rgba(53,184,176,0.04))", border: "1px solid rgba(53,184,176,0.2)" }}>
                <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: "#35b8b0" }} />
                <span className="text-[0.68rem] font-bold tracking-[0.14em] uppercase" style={{ color: "#35b8b0" }}>{t.technology.eyebrow}</span>
              </div>
              <h2 className="mt-6 text-[clamp(1.75rem,3.4vw,2.85rem)] leading-[1.12] font-semibold" style={{ color: "#0b1f33", letterSpacing: "-0.025em" }}>{t.technology.title}</h2>
              <p className="mt-5 text-[1.0625rem] leading-relaxed" style={{ color: "#5b6b7a" }}>{t.technology.subtitle}</p>
            </div>
          </ScrollReveal>
          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {t.technology.topCards.map((card, i) => (
              <ScrollReveal key={i}>
                <Link href={card.href} className="block h-full group">
                  <div className="relative h-full rounded-2xl p-8 transition-all duration-500 hover:-translate-y-2" style={{ background: "linear-gradient(135deg, rgba(255,255,255,0.9), rgba(255,255,255,0.6))", border: "1px solid rgba(221,229,236,0.8)", backdropFilter: "blur(20px)", WebkitBackdropFilter: "blur(20px)", boxShadow: "0 8px 32px rgba(11,31,51,0.08)" }}>
                    <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl" style={{ background: "linear-gradient(135deg, rgba(53,184,176,0.15), rgba(53,184,176,0.05))", border: "1px solid rgba(53,184,176,0.2)" }}>
                      {i === 0 && <svg className="h-7 w-7" viewBox="0 0 24 24" fill="none" stroke="#35b8b0" strokeWidth="1.5"><circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="4" /><path d="M12 2v4M12 18v4M2 12h4M18 12h4" /></svg>}
                      {i === 1 && <svg className="h-7 w-7" viewBox="0 0 24 24" fill="none" stroke="#35b8b0" strokeWidth="1.5"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" /></svg>}
                      {i === 2 && <svg className="h-7 w-7" viewBox="0 0 24 24" fill="none" stroke="#35b8b0" strokeWidth="1.5"><path d="M9 12h6m-6 4h6m2 5H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5.586a1 1 0 0 1 .707.293l5.414 5.414a1 1 0 0 1 .293.707V19a2 2 0 0 1-2 2Z" /></svg>}
                      {i === 3 && <svg className="h-7 w-7" viewBox="0 0 24 24" fill="none" stroke="#35b8b0" strokeWidth="1.5"><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10" /><path d="M22 2L12 12" /><path d="M16 2h6v6" /></svg>}
                    </div>
                    <span className="text-[0.72rem] font-bold tracking-[0.18em]" style={{ color: "#35b8b0" }}>{card.num}</span>
                    <h3 className="mt-3 text-[1.15rem] font-semibold" style={{ color: "#0b1f33" }}>{card.title}</h3>
                    <p className="mt-3 text-[0.92rem] leading-relaxed" style={{ color: "#5b6b7a" }}>{card.desc}</p>
                    <div className="mt-6 flex items-center gap-2 text-[0.75rem] font-semibold tracking-[0.12em] uppercase" style={{ color: "#35b8b0" }}>
                      <span className="h-px w-0 transition-all duration-500 group-hover:w-8" style={{ backgroundColor: "#35b8b0" }} />
                      <span className="transition-all duration-500 opacity-0 group-hover:opacity-100">{t.technology.detail}</span>
                    </div>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link href="/technology" className="inline-flex items-center gap-3 rounded-full px-8 py-3.5 text-[0.8rem] font-semibold tracking-[0.14em] uppercase transition-all duration-300 hover:shadow-lg" style={{ background: "linear-gradient(135deg, rgba(11,31,51,0.08), rgba(11,31,51,0.04))", border: "1px solid rgba(11,31,51,0.15)", color: "#0b1f33" }}>
              {t.technology.cta}
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m9 18 6-6-6-6" /></svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ===== 05. EXOSOME FEATURE — Dark with process flow ===== */}
      <section className="relative isolate overflow-hidden" style={{ backgroundColor: "#0b1f33" }}>
        <img src="/assets/exosome-BUYrBGuc.jpg" alt="" className="absolute inset-0 h-full w-full object-cover" style={{ opacity: 0.12 }} />
        <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(7,23,38,0.97), rgba(11,31,51,0.88))" }} />
        <div className="absolute top-1/2 right-0 h-[400px] w-[400px] rounded-full blur-[160px]" style={{ background: "radial-gradient(circle, rgba(53,184,176,0.1), transparent 70%)" }} />
        <div className="relative mx-auto w-full max-w-[1240px] px-6 py-24 text-white md:px-10 md:py-32">
          <div className="grid gap-16 lg:grid-cols-[1fr_1.1fr] lg:items-start">
            <ScrollReveal>
              <div>
                <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5" style={{ background: "linear-gradient(135deg, rgba(53,184,176,0.2), rgba(53,184,176,0.05))", border: "1px solid rgba(53,184,176,0.3)" }}>
                  <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: "#35b8b0" }} />
                  <span className="text-[0.68rem] font-bold tracking-[0.14em] uppercase" style={{ color: "#35b8b0" }}>{t.exosome.eyebrow}</span>
                </div>
                <h2 className="mt-6 text-[clamp(1.75rem,3.4vw,2.85rem)] leading-[1.12] font-semibold text-white" style={{ letterSpacing: "-0.025em" }}>{t.exosome.title}</h2>
                <p className="mt-5 text-[1.0625rem] leading-relaxed" style={{ color: "rgba(255,255,255,0.7)" }}>{t.exosome.desc1}</p>
                <p className="mt-4 text-[1.0625rem] leading-relaxed" style={{ color: "rgba(255,255,255,0.55)" }}>{t.exosome.desc2}</p>
                <div className="mt-10 grid gap-px sm:grid-cols-3 rounded-xl overflow-hidden" style={{ border: "1px solid rgba(255,255,255,0.1)" }}>
                  {t.exosome.features.map((feat, i) => (
                    <div key={i} className="p-5" style={{ background: "linear-gradient(135deg, rgba(255,255,255,0.06), rgba(255,255,255,0.02))" }}>
                      <h4 className="text-[0.85rem] font-bold">{feat.title}</h4>
                      <p className="mt-1 text-[0.78rem]" style={{ color: "rgba(255,255,255,0.5)" }}>{feat.desc}</p>
                    </div>
                  ))}
                </div>
                <Link href="/technology/exosome" className="mt-8 inline-flex items-center gap-3 rounded-full px-7 py-3.5 text-[0.8rem] font-semibold tracking-[0.14em] uppercase transition-all duration-300" style={{ background: "linear-gradient(135deg, #35b8b0, #2a9d96)", color: "#05231f" }}>
                  {t.exosome.cta}
                </Link>
              </div>
            </ScrollReveal>
            <ScrollReveal>
              <div>
                <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-6" style={{ background: "linear-gradient(135deg, rgba(53,184,176,0.2), rgba(53,184,176,0.05))", border: "1px solid rgba(53,184,176,0.3)" }}>
                  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="#35b8b0" strokeWidth="2"><path d="M12 2v20M2 12h20" /></svg>
                  <span className="text-[0.68rem] font-bold tracking-[0.14em] uppercase" style={{ color: "#35b8b0" }}>{t.exosome.processTitle}</span>
                </div>
                <div className="rounded-2xl overflow-hidden" style={{ border: "1px solid rgba(255,255,255,0.1)", background: "linear-gradient(135deg, rgba(255,255,255,0.05), rgba(255,255,255,0.01))" }}>
                  {t.exosome.steps.map((step, i) => (
                    <div key={i} className="flex items-center gap-4 px-6 py-4 transition-all duration-300 hover:bg-white/5" style={{ borderBottom: i < t.exosome.steps.length - 1 ? "1px solid rgba(255,255,255,0.06)" : "none" }}>
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-[0.65rem] font-bold" style={{ background: "linear-gradient(135deg, #35b8b0, #2a9d96)", color: "#05231f" }}>
                        {String(i + 1).padStart(2, "0")}
                      </div>
                      <div className="flex-1">
                        <h4 className="text-[0.9rem] font-semibold">{step.title}</h4>
                        <p className="mt-0.5 text-[0.78rem]" style={{ color: "rgba(255,255,255,0.45)" }}>{step.desc}</p>
                      </div>
                      {i < t.exosome.steps.length - 1 && (
                        <svg className="h-4 w-4 shrink-0" viewBox="0 0 24 24" fill="none" stroke="rgba(53,184,176,0.4)" strokeWidth="2"><path d="M12 5v14M5 12l7 7 7-7" /></svg>
                      )}
                    </div>
                  ))}
                </div>
                <div className="mt-6 rounded-xl px-5 py-3 text-center" style={{ background: "linear-gradient(135deg, rgba(53,184,176,0.12), rgba(53,184,176,0.04))", border: "1px solid rgba(53,184,176,0.25)" }}>
                  <p className="text-[0.75rem] font-semibold tracking-[0.1em]" style={{ color: "#35b8b0" }}>{t.exosome.tagline}</p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ===== 06. MANUFACTURING — Image + Steps ===== */}
      <section className="relative overflow-hidden" style={{ backgroundColor: "#f7fafc" }}>
        <div className="absolute top-0 left-0 h-[400px] w-[400px] rounded-full blur-[160px]" style={{ background: "radial-gradient(circle, rgba(53,184,176,0.06), transparent 70%)" }} />
        <div className="relative mx-auto w-full max-w-[1240px] px-6 py-24 md:px-10 md:py-32">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto">
              <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5" style={{ background: "linear-gradient(135deg, rgba(53,184,176,0.12), rgba(53,184,176,0.04))", border: "1px solid rgba(53,184,176,0.2)" }}>
                <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: "#35b8b0" }} />
                <span className="text-[0.68rem] font-bold tracking-[0.14em] uppercase" style={{ color: "#35b8b0" }}>{t.manufacturing.eyebrow}</span>
              </div>
              <h2 className="mt-6 text-[clamp(1.75rem,3.4vw,2.85rem)] leading-[1.12] font-semibold" style={{ color: "#0b1f33", letterSpacing: "-0.025em" }}>{t.manufacturing.title}</h2>
              <p className="mt-5 text-[1.0625rem] leading-relaxed" style={{ color: "#5b6b7a" }}>{t.manufacturing.subtitle}</p>
            </div>
          </ScrollReveal>
          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {t.manufacturing.cards.map((card, i) => (
              <ScrollReveal key={i}>
                <div className="group relative overflow-hidden rounded-2xl transition-all duration-500 hover:-translate-y-2" style={{ boxShadow: "0 8px 32px rgba(11,31,51,0.08)" }}>
                  <div className="relative h-48 overflow-hidden">
                    <img src={i === 0 ? "/assets/molecular-CIuWq-Al.jpg" : i === 1 ? "/assets/korean-lab-team-DDgkd_gw.jpg" : i === 2 ? "/assets/cleanroom-DZtXjF0-.jpg" : "/assets/qc-lab-mOryit6A.jpg"} alt={card.title} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
                    <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(11,31,51,0.8), transparent 60%)" }} />
                    <div className="absolute bottom-4 left-5 flex h-10 w-10 items-center justify-center rounded-full text-sm font-bold" style={{ background: "linear-gradient(135deg, #35b8b0, #2a9d96)", color: "#05231f" }}>
                      {String(i + 1).padStart(2, "0")}
                    </div>
                  </div>
                  <div className="p-6" style={{ backgroundColor: "#fff" }}>
                    <h4 className="text-[1rem] font-semibold" style={{ color: "#0b1f33" }}>{card.title}</h4>
                    <p className="mt-2 text-[0.85rem] leading-relaxed" style={{ color: "#5b6b7a" }}>{card.desc}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link href="/facility" className="inline-flex items-center gap-3 rounded-full px-8 py-3.5 text-[0.8rem] font-semibold tracking-[0.14em] uppercase transition-all duration-300 hover:shadow-lg" style={{ background: "linear-gradient(135deg, rgba(11,31,51,0.08), rgba(11,31,51,0.04))", border: "1px solid rgba(11,31,51,0.15)", color: "#0b1f33" }}>
              {t.manufacturing.cta}
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m9 18 6-6-6-6" /></svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ===== 07. QUALITY — Glass grid with icon cards ===== */}
      <section className="relative overflow-hidden" style={{ backgroundColor: "#fff" }}>
        <div className="absolute top-1/2 right-0 h-[500px] w-[500px] rounded-full blur-[180px]" style={{ background: "radial-gradient(circle, rgba(53,184,176,0.06), transparent 70%)" }} />
        <div className="relative mx-auto w-full max-w-[1240px] px-6 py-24 md:px-10 md:py-32">
          <div className="grid gap-16 lg:grid-cols-[1fr_1.1fr] lg:items-start">
            <ScrollReveal>
              <div>
                <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5" style={{ background: "linear-gradient(135deg, rgba(39,106,145,0.12), rgba(39,106,145,0.04))", border: "1px solid rgba(39,106,145,0.2)" }}>
                  <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: "#276a91" }} />
                  <span className="text-[0.68rem] font-bold tracking-[0.14em] uppercase" style={{ color: "#276a91" }}>{t.quality.sectionEyebrow}</span>
                </div>
                <h2 className="mt-6 text-[clamp(1.75rem,3.4vw,2.85rem)] leading-[1.12] font-semibold" style={{ color: "#0b1f33", letterSpacing: "-0.025em" }}>{t.quality.sectionTitle}</h2>
                <p className="mt-5 text-[1.0625rem] leading-relaxed" style={{ color: "#5b6b7a" }}>{t.quality.heroSubtitle}</p>
                <Link href="/quality" className="mt-8 inline-flex items-center gap-3 rounded-full px-7 py-3.5 text-[0.8rem] font-semibold tracking-[0.14em] uppercase transition-all duration-300 hover:shadow-lg" style={{ background: "linear-gradient(135deg, #0b1f33, #173352)", color: "#fff" }}>
                  {t.quality.sectionTitle}
                  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m9 18 6-6-6-6" /></svg>
                </Link>
              </div>
            </ScrollReveal>
            <ScrollReveal>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {t.quality.steps.map((item: { num: string; title: string }, i: number) => (
                  <div key={i} className="group rounded-xl p-5 transition-all duration-300 hover:-translate-y-1" style={{ background: "linear-gradient(135deg, rgba(255,255,255,0.9), rgba(255,255,255,0.6))", border: "1px solid rgba(221,229,236,0.8)", backdropFilter: "blur(20px)", WebkitBackdropFilter: "blur(20px)", boxShadow: "0 4px 20px rgba(11,31,51,0.06)" }}>
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg" style={{ background: "linear-gradient(135deg, rgba(53,184,176,0.15), rgba(53,184,176,0.05))", border: "1px solid rgba(53,184,176,0.2)" }}>
                      {i === 0 && <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="#35b8b0" strokeWidth="1.5"><path d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" /></svg>}
                      {i === 1 && <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="#35b8b0" strokeWidth="1.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>}
                      {i === 2 && <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="#35b8b0" strokeWidth="1.5"><path d="M9 12h6m-6 4h6m2 5H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5.586a1 1 0 0 1 .707.293l5.414 5.414a1 1 0 0 1 .293.707V19a2 2 0 0 1-2 2Z" /></svg>}
                      {i === 3 && <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="#35b8b0" strokeWidth="1.5"><circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" /></svg>}
                      {i === 4 && <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="#35b8b0" strokeWidth="1.5"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" /></svg>}
                      {i === 5 && <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="#35b8b0" strokeWidth="1.5"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" /><path d="M3.27 6.96 12 12.01l8.73-5.05M12 22.08V12" /></svg>}
                    </div>
                    <span className="mt-3 block text-[0.68rem] font-bold tracking-[0.14em]" style={{ color: "#35b8b0" }}>{item.num}</span>
                    <h4 className="mt-1 text-[0.88rem] font-semibold" style={{ color: "#0b1f33" }}>{item.title}</h4>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ===== 08. GLOBAL PARTNERSHIP — Centered glass layout ===== */}
      <section className="relative overflow-hidden" style={{ backgroundColor: "#f7fafc" }}>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full blur-[200px]" style={{ background: "radial-gradient(circle, rgba(53,184,176,0.06), transparent 70%)" }} />
        <div className="relative mx-auto w-full max-w-[1240px] px-6 py-24 md:px-10 md:py-32">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5" style={{ background: "linear-gradient(135deg, rgba(53,184,176,0.12), rgba(53,184,176,0.04))", border: "1px solid rgba(53,184,176,0.2)" }}>
              <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: "#35b8b0" }} />
              <span className="text-[0.68rem] font-bold tracking-[0.14em] uppercase" style={{ color: "#35b8b0" }}>{t.homepage.globalPartnership}</span>
            </div>
            <h2 className="mt-6 text-[clamp(2rem,4vw,3.5rem)] leading-[1.1] font-semibold" style={{ color: "#0b1f33", letterSpacing: "-0.025em" }}>
              Vesco Science <span style={{ color: "#35b8b0" }}>×</span> EverCeutical
            </h2>
            <p className="mt-3 text-[0.72rem] font-bold tracking-[0.2em] uppercase" style={{ color: "#276a91" }}>{t.homepage.strategicPartnership}</p>
          </div>
          <div className="mt-16 grid gap-8 md:grid-cols-2">
            <ScrollReveal>
              <div className="relative rounded-2xl p-8 md:p-10 transition-all duration-300 hover:-translate-y-1" style={{ background: "linear-gradient(135deg, rgba(255,255,255,0.95), rgba(255,255,255,0.8))", border: "1px solid rgba(53,184,176,0.2)", backdropFilter: "blur(20px)", WebkitBackdropFilter: "blur(20px)", boxShadow: "0 12px 40px rgba(11,31,51,0.08)" }}>
                <div className="absolute top-0 left-0 w-full h-1 rounded-t-2xl" style={{ background: "linear-gradient(to right, #35b8b0, transparent)" }} />
                <div className="flex items-center gap-4 mb-6">
                  <img src="/assets/vesco_logo-KfffcaeC.png" alt="Vesco Science" className="h-12" />
                </div>
                <div className="space-y-3">
                  {["Research & Development", "Advanced Technology", "Controlled Manufacturing"].map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="flex h-6 w-6 items-center justify-center rounded-full" style={{ background: "linear-gradient(135deg, rgba(53,184,176,0.2), rgba(53,184,176,0.08))" }}>
                        <svg className="h-3 w-3" viewBox="0 0 24 24" fill="none" stroke="#35b8b0" strokeWidth="3"><path d="M20 6L9 17l-5-5" /></svg>
                      </div>
                      <span className="text-[0.95rem]" style={{ color: "#5b6b7a" }}>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal>
              <div className="relative rounded-2xl p-8 md:p-10 transition-all duration-300 hover:-translate-y-1" style={{ background: "linear-gradient(135deg, rgba(255,255,255,0.95), rgba(255,255,255,0.8))", border: "1px solid rgba(39,106,145,0.2)", backdropFilter: "blur(20px)", WebkitBackdropFilter: "blur(20px)", boxShadow: "0 12px 40px rgba(11,31,51,0.08)" }}>
                <div className="absolute top-0 left-0 w-full h-1 rounded-t-2xl" style={{ background: "linear-gradient(to right, #276a91, transparent)" }} />
                <div className="flex items-center gap-4 mb-6">
                  <img src="/assets/everceutical-logo.png" alt="EverCeutical" className="h-10" />
                </div>
                <div className="space-y-3">
                  {["Global Marketing", "Commercialization", "Market Expansion"].map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="flex h-6 w-6 items-center justify-center rounded-full" style={{ background: "linear-gradient(135deg, rgba(39,106,145,0.2), rgba(39,106,145,0.08))" }}>
                        <svg className="h-3 w-3" viewBox="0 0 24 24" fill="none" stroke="#276a91" strokeWidth="3"><path d="M20 6L9 17l-5-5" /></svg>
                      </div>
                      <span className="text-[0.95rem]" style={{ color: "#5b6b7a" }}>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
          <div className="mt-12 text-center">
            <a href={t.partnership.everUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 rounded-full px-8 py-3.5 text-[0.8rem] font-semibold tracking-[0.14em] uppercase transition-all duration-300 hover:shadow-lg" style={{ background: "linear-gradient(135deg, rgba(11,31,51,0.08), rgba(11,31,51,0.04))", border: "1px solid rgba(11,31,51,0.15)", color: "#0b1f33" }}>
              {t.homepage.learnEver}
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M7 17L17 7M17 7H7M17 7v10" /></svg>
            </a>
          </div>
        </div>
      </section>

      {/* ===== 09. FINAL CTA — Premium dark with orbs ===== */}
      <section className="relative isolate overflow-hidden" style={{ backgroundColor: "#0b1f33" }}>
        <div className="absolute inset-0 navy-grid" style={{ opacity: 0.5 }} />
        <div className="absolute -top-32 -right-32 h-[500px] w-[500px] rounded-full blur-[200px]" style={{ background: "radial-gradient(circle, rgba(53,184,176,0.2), transparent 70%)" }} />
        <div className="absolute -bottom-32 -left-32 h-[400px] w-[400px] rounded-full blur-[180px]" style={{ background: "radial-gradient(circle, rgba(39,106,145,0.15), transparent 70%)" }} />
        <div className="relative mx-auto w-full max-w-[1240px] px-6 py-24 text-white md:px-10 md:py-32">
          <div className="grid gap-10 lg:grid-cols-[1.6fr_1fr] lg:items-end">
            <div>
              <h2 className="text-[clamp(1.75rem,3.4vw,2.85rem)] font-semibold leading-tight" style={{ letterSpacing: "-0.025em" }}>{t.ctaBanner.title}</h2>
              <p className="mt-5 text-[1.0625rem] leading-relaxed" style={{ color: "rgba(255,255,255,0.65)" }}>{t.ctaBanner.subtitle}</p>
            </div>
            <div className="flex flex-wrap gap-4 lg:justify-end">
              <Link href="/contact" className="inline-flex items-center gap-3 rounded-full px-8 py-4 text-[0.8rem] font-semibold tracking-[0.14em] uppercase transition-all duration-300 hover:shadow-lg" style={{ background: "linear-gradient(135deg, #35b8b0, #2a9d96)", color: "#05231f" }}>
                {t.ctaBanner.cta1}
              </Link>
              <Link href="/contact" className="inline-flex items-center gap-3 rounded-full px-8 py-4 text-[0.8rem] font-semibold tracking-[0.14em] uppercase transition-all duration-300 hover:bg-white/10" style={{ border: "1px solid rgba(255,255,255,0.25)", color: "#fff" }}>
                {t.ctaBanner.cta2}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
