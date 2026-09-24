"use client";

import Link from "next/link";
import { useI18n } from "@/i18n/context";
import ScrollReveal from "@/components/ScrollReveal";

const BASE = "";

export default function ProductsPage() {
  const { t } = useI18n();
  return (
    <>
      {/* ===== HERO ===== */}
      <header className="relative isolate overflow-hidden" style={{ backgroundColor: "#071726" }}>
        <img src={`${BASE}/assets/vials-Ck5soEMR.jpg`} alt="" className="absolute inset-0 h-full w-full object-cover" style={{ opacity: 0.3 }} />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to right, #071726, rgba(7,23,38,0.9), rgba(11,31,51,0.4))" }} />
        <div className="relative mx-auto w-full max-w-[1240px] px-6 pt-36 pb-20 md:px-10 md:pt-44 md:pb-28">
          <nav className="mb-8 text-[0.8rem]" style={{ color: "rgba(255,255,255,0.45)" }}>
            <Link href="/" className="transition-colors" style={{ color: "inherit" }}>{t.products.breadcrumbHome}</Link>
            <span className="mx-2" style={{ color: "rgba(255,255,255,0.25)" }}>/</span>
            <span style={{ color: "rgba(255,255,255,0.75)" }}>{t.products.breadcrumbProducts}</span>
          </nav>
          <p className="eyebrow" style={{ color: "#35b8b0" }}>
            <span className="mr-3 inline-block h-px w-8 align-middle opacity-50" style={{ backgroundColor: "currentColor" }} />
            {t.products.heroEyebrow}
          </p>
          <h1 className="mt-6 max-w-4xl text-white font-semibold leading-[1.06] text-[clamp(2.1rem,4.6vw,3.9rem)]">
            {t.products.heroTitle}
          </h1>
          <p className="mt-7 max-w-2xl text-[1.0625rem] leading-relaxed" style={{ color: "rgba(255,255,255,0.7)" }}>
            {t.products.heroSubtitle}
          </p>
        </div>
        <div className="absolute inset-x-0 bottom-0 h-px" style={{ background: "linear-gradient(to right, transparent, rgba(53,184,176,0.6), transparent)" }} />
      </header>

      {/* ===== ABOUT THIS CATALOGUE ===== */}
      <section className="relative" style={{ backgroundColor: "#fff" }}>
        <div className="mx-auto w-full max-w-[1240px] px-6 py-16 md:px-10 md:py-20">
          <ScrollReveal>
            <div className="rounded-sm p-8 md:p-10" style={{ border: "1px solid #dde5ec", backgroundColor: "#f7fafc" }}>
              <p className="eyebrow">
                <span className="mr-3 inline-block h-px w-8 align-middle opacity-50" style={{ backgroundColor: "currentColor" }} />
                {t.products.aboutCatalogueEyebrow}
              </p>
              <p className="mt-5 text-[1rem] leading-relaxed max-w-4xl" style={{ color: "#5b6b7a" }}>
                {t.products.aboutCatalogueDesc}
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link href="/contact" className="inline-flex items-center gap-2 rounded-sm px-6 py-3 text-[0.8rem] font-semibold tracking-[0.12em] uppercase transition-all" style={{ backgroundColor: "#35b8b0", color: "#05231f" }}>
                  {t.products.ctaInfo}
                </Link>
                <Link href="/contact" className="inline-flex items-center gap-2 rounded-sm px-6 py-3 text-[0.8rem] font-semibold tracking-[0.12em] uppercase transition-all" style={{ border: "1px solid #dde5ec", color: "#0b1f33" }}>
                  {t.products.ctaOem}
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ===== PRODUCT CARDS ===== */}
      <section className="relative" style={{ backgroundColor: "#fff" }}>
        <div className="mx-auto w-full max-w-[1240px] px-6 pb-20 md:px-10 md:pb-28">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {t.products.categories.map((cat: { num: string; count: string; title: string; tagA: string; tagB: string; desc: string; img: string; href: string }, i: number) => (
              <ScrollReveal key={i}>
                <Link href={cat.href} className="group flex h-full flex-col overflow-hidden rounded-sm transition-all hover:shadow-lg hover:-translate-y-0.5" style={{ border: "1px solid #dde5ec", backgroundColor: "#fff" }}>
                  <div className="overflow-hidden" style={{ backgroundColor: "#f7fafc" }}>
                    <img src={`${BASE}/assets/${cat.img}`} alt="" className="aspect-square w-full object-contain transition-transform duration-500 group-hover:scale-105" />
                  </div>
                  <div className="flex flex-col flex-1 p-6">
                    <div className="flex items-center justify-between">
                      <span className="text-[0.72rem] font-bold tracking-[0.14em]" style={{ color: "#35b8b0" }}>{cat.num}</span>
                      <span className="text-[0.72rem] font-semibold" style={{ color: "#5b6b7a" }}>{cat.count}</span>
                    </div>
                    <h3 className="mt-3 text-[1.1rem] font-semibold" style={{ color: "#0b1f33" }}>{cat.title}</h3>
                    <div className="mt-3 flex flex-wrap gap-2">
                      <span className="rounded-sm px-2 py-0.5 text-[0.65rem] font-semibold" style={{ backgroundColor: "rgba(53,184,176,0.08)", color: "#35b8b0" }}>{cat.tagA}</span>
                      <span className="rounded-sm px-2 py-0.5 text-[0.65rem] font-semibold" style={{ backgroundColor: "rgba(39,106,145,0.08)", color: "#276a91" }}>{cat.tagB}</span>
                    </div>
                    <p className="mt-4 text-[0.85rem] leading-relaxed flex-1" style={{ color: "#5b6b7a" }}>{cat.desc}</p>
                    <span className="mt-5 inline-flex items-center gap-2 text-[0.8rem] font-semibold" style={{ color: "#276a91" }}>
                      {t.products.exploreCta}
                      <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m9 18 6-6-6-6" /></svg>
                    </span>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== DEMO NOTE ===== */}
      <section className="relative" style={{ backgroundColor: "#f7fafc" }}>
        <div className="mx-auto w-full max-w-[1240px] px-6 py-12 md:px-10 md:py-16">
          <p className="text-[0.88rem] leading-relaxed" style={{ color: "#5b6b7a" }}>
            {t.products.demoNote}
          </p>
          <Link href="/contact" className="mt-6 inline-flex items-center gap-2 rounded-sm px-6 py-3 text-[0.8rem] font-semibold tracking-[0.12em] uppercase transition-all" style={{ border: "1px solid #dde5ec", color: "#0b1f33" }}>
            {t.products.ctaCatalogue}
          </Link>
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
                  {t.products.ctaTitle}
                </h2>
                <p className="mt-5 max-w-xl text-[1rem] leading-relaxed" style={{ color: "rgba(255,255,255,0.65)" }}>
                  {t.products.ctaDesc}
                </p>
              </div>
              <div className="flex flex-wrap gap-3 lg:justify-end">
                <Link href="/contact" className="inline-flex items-center gap-3 rounded-sm px-7 py-3.5 text-[0.8rem] font-semibold tracking-[0.14em] uppercase transition-all duration-300" style={{ backgroundColor: "#35b8b0", color: "#05231f" }}>
                  {t.products.cta1}
                </Link>
                <Link href="/contact" className="inline-flex items-center gap-3 rounded-sm px-7 py-3.5 text-[0.8rem] font-semibold tracking-[0.14em] uppercase transition-all duration-300" style={{ border: "1px solid rgba(255,255,255,0.25)", color: "#fff" }}>
                  {t.products.cta2}
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
