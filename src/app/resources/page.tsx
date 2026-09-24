"use client";

import Link from "next/link";
import { useI18n } from "@/i18n/context";
import ScrollReveal from "@/components/ScrollReveal";
import SEOHead from "@/components/SEOHead";

const BASE = "";

export default function ResourcesPage() {
  const { t } = useI18n();
  return (
    <>
      <SEOHead
        title="Resources & Downloads — Vesco Science"
        description="Technical documents, product datasheets, and regulatory resources from Vesco Science."
        keywords="biotech resources, product datasheets, technical documents"
        canonical="https://www.vescoscience.com/resources"
      />
      {/* ===== HERO ===== */}
      <header className="relative isolate overflow-hidden" style={{ backgroundColor: "#071726" }}>
        <img src={`${BASE}/assets/documents-C3E9fEEy.jpg`} alt="" className="absolute inset-0 h-full w-full object-cover" style={{ opacity: 0.3 }} />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to right, #071726, rgba(7,23,38,0.9), rgba(11,31,51,0.4))" }} />
        <div className="relative mx-auto w-full max-w-[1240px] px-6 pt-36 pb-20 md:px-10 md:pt-44 md:pb-28">
          <nav className="mb-8 text-[0.8rem]" style={{ color: "rgba(255,255,255,0.45)" }}>
            <Link href="/" className="transition-colors" style={{ color: "inherit" }}>{t.resources.breadcrumbHome}</Link>
            <span className="mx-2" style={{ color: "rgba(255,255,255,0.25)" }}>/</span>
            <span style={{ color: "rgba(255,255,255,0.75)" }}>{t.resources.heroEyebrow}</span>
          </nav>
          <p className="eyebrow" style={{ color: "#35b8b0" }}>
            <span className="mr-3 inline-block h-px w-8 align-middle opacity-50" style={{ backgroundColor: "currentColor" }} />
            {t.resources.heroEyebrow}
          </p>
          <h1 className="mt-6 max-w-4xl text-white font-semibold leading-[1.06] text-[clamp(2.1rem,4.6vw,3.9rem)]">
            {t.resources.heroTitle}
          </h1>
          <p className="mt-7 max-w-2xl text-[1.0625rem] leading-relaxed" style={{ color: "rgba(255,255,255,0.7)" }}>
            {t.resources.heroSubtitle}
          </p>
        </div>
        <div className="absolute inset-x-0 bottom-0 h-px" style={{ background: "linear-gradient(to right, transparent, rgba(53,184,176,0.6), transparent)" }} />
      </header>

      {/* ===== DOWNLOAD CENTER ===== */}
      <section className="relative" style={{ backgroundColor: "#f7fafc" }}>
        <div className="mx-auto w-full max-w-[1240px] px-6 py-20 md:px-10 md:py-28">
          <div className="max-w-3xl">
            <p className="eyebrow">
              <span className="mr-3 inline-block h-px w-8 align-middle opacity-50" style={{ backgroundColor: "currentColor" }} />
              {t.resources.sectionEyebrow}
            </p>
            <h2 className="mt-5 text-[clamp(1.75rem,3.4vw,2.85rem)] leading-[1.12] font-semibold" style={{ color: "#0b1f33" }}>
              {t.resources.sectionTitle}
            </h2>
          </div>
          <div className="mt-12 grid gap-px sm:grid-cols-2" style={{ backgroundColor: "#dde5ec" }}>
            {t.resources.docs.map((doc: { badge: string; title: string; meta: string; action: string }, i: number) => (
              <ScrollReveal key={i}>
                <div className="flex h-full flex-col p-8" style={{ backgroundColor: "#fff" }}>
                  <span className="inline-flex w-fit rounded-sm px-3 py-1 text-[0.65rem] font-semibold tracking-[0.14em] uppercase" style={doc.badge === "OPEN ACCESS" ? { backgroundColor: "rgba(53,184,176,0.15)", color: "#276a91" } : { backgroundColor: "rgba(11,31,51,0.1)", color: "#0b1f33" }}>
                    {doc.badge}
                  </span>
                  <h3 className="mt-6 text-[1.15rem] font-semibold" style={{ color: "#0b1f33" }}>{doc.title}</h3>
                  <p className="mt-2 text-[0.85rem]" style={{ color: "#5b6b7a" }}>{doc.meta}</p>
                  <button className="mt-8 inline-flex w-fit items-center gap-3 rounded-sm px-6 py-3 text-[0.78rem] font-semibold tracking-[0.12em] uppercase transition-colors" style={{ border: "1px solid rgba(11,31,51,0.2)", color: "#0b1f33" }}>
                    {doc.action}
                  </button>
                </div>
              </ScrollReveal>
            ))}
          </div>
          <p className="mt-10 text-[0.85rem]" style={{ color: "#5b6b7a" }}>
            {t.resources.disclaimer}
          </p>
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
