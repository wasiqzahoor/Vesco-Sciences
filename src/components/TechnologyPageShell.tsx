"use client";

import Link from "next/link";
import { useI18n } from "@/i18n/context";

const BASE = "";

const allTechnologies = [
  { slug: "exosome", numKey: "01", titleKey: "exosomeTech" as const },
  { slug: "pdrn-pn", numKey: "02", titleKey: "pdrnTech" as const },
  { slug: "lyophilization", numKey: "03", titleKey: "lyoTech" as const },
  { slug: "formulation", numKey: "04", titleKey: "formTech" as const },
  { slug: "cold-chain", numKey: "05", titleKey: "coldTech" as const },
  { slug: "custom", numKey: "06", titleKey: "customTech" as const },
];

const images: Record<string, string> = {
  exosome: `${BASE}/assets/exosome-BUYrBGuc.jpg`,
  "pdrn-pn": `${BASE}/assets/molecular-CIuWq-Al.jpg`,
  lyophilization: `${BASE}/assets/lyophilizer-DgNX1AUL.jpg`,
  formulation: `${BASE}/assets/vials-Ck5soEMR.jpg`,
  "cold-chain": `${BASE}/assets/cleanroom-DZtXjF0-.jpg`,
  custom: `${BASE}/assets/cleanroom-DZtXjF0-.jpg`,
};

export function TechHero({ slug, title, description }: { slug: string; title: string; description: string }) {
  const { t, locale } = useI18n();
  
  const techTitles: Record<string, { en: string; ko: string }> = {
    exosome: { en: "Exosome Technology", ko: "엑소좀 기술" },
    "pdrn-pn": { en: "PDRN / PN Technology", ko: "PDRN / PN 기술" },
    lyophilization: { en: "Lyophilization Technology", ko: "동결건조 기술" },
    formulation: { en: "Formulation Technology", ko: "재생 제형 기술" },
    "cold-chain": { en: "Cold Chain Technology", ko: "콜드체인 기술" },
    custom: { en: "Custom Development", ko: "맞춤 제형 개발" },
  };
  
  const techDescriptions: Record<string, { en: string; ko: string }> = {
    exosome: { en: "Isolation, purification, concentration and characterization of extracellular vesicles for scientific research and development applications.", ko: "세포외소포의 분리, 정제, 농축 및 특성 분석 기술입니다." },
    "pdrn-pn": { en: "Polynucleotide and PDRN platform for regenerative and aesthetic applications.", ko: "재생 및 에스테틱 적용을 위한 폴리뉴클레오타이드 및 PDRN 플랫폼." },
    lyophilization: { en: "Freeze-drying process development for sensitive biologics.", ko: "민감한 바이오 소재를 보호하고 보관 안정성을 확장하는 동결건조 공정 개발." },
    formulation: { en: "Advanced formulation development combining biologics, peptides, and HA systems.", ko: "바이오 소재, 펩타이드, 히알루론산 시스템을 결합한 목적 지향형 복합 제형." },
    "cold-chain": { en: "Temperature-controlled handling, storage and transport for sensitive biologics.", ko: "온도 민감 제품을 위한 취급, 보관 및 운송 전 과정의 온도 관리 체계." },
    custom: { en: "Custom formulation and product development tailored to specific requirements.", ko: "농도, 제형, 포장, 문서 요건까지 고객 요구에 맞춘 개별 개발." },
  };
  
  const heroTitle = techTitles[slug]?.[locale as "en" | "ko"] || title;
  const heroDesc = techDescriptions[slug]?.[locale as "en" | "ko"] || description;
  
  return (
    <header className="relative isolate overflow-hidden" style={{ backgroundColor: "#071726" }}>
      <img src={images[slug]} alt="" className="absolute inset-0 h-full w-full object-cover" style={{ opacity: 0.3 }} loading="eager" />
      <div className="absolute inset-0" style={{ background: "linear-gradient(to right, #071726, rgba(7,23,38,0.9), rgba(11,31,51,0.4))" }} />
      <div className="relative mx-auto w-full max-w-[1240px] px-6 pt-36 pb-20 md:px-10 md:pt-44 md:pb-28">
        <nav aria-label="Breadcrumb" className="mb-8 text-[0.8rem]" style={{ color: "rgba(255,255,255,0.45)" }}>
          <Link href="/" className="transition-colors hover:text-[#35b8b0]">{t.technology.breadcrumbHome}</Link>
          <span className="mx-2" style={{ color: "rgba(255,255,255,0.25)" }}>/</span>
          <span style={{ color: "rgba(255,255,255,0.75)" }}>{heroTitle}</span>
        </nav>
        <p className="eyebrow" style={{ color: "#35b8b0" }}>
          <span className="mr-3 inline-block h-px w-8 align-middle opacity-50" style={{ backgroundColor: "currentColor" }} />
          {t.technology.breadcrumbTech}
        </p>
        <h1 className="mt-6 max-w-4xl text-white font-semibold leading-[1.06] text-[clamp(2.1rem,4.6vw,3.9rem)]">{heroTitle}</h1>
        <p className="mt-7 max-w-2xl text-[1.0625rem] leading-relaxed" style={{ color: "rgba(255,255,255,0.7)" }}>{heroDesc}</p>
      </div>
      <div className="absolute inset-x-0 bottom-0 h-px" style={{ background: "linear-gradient(to right, transparent, rgba(53,184,176,0.6), transparent)" }} />
    </header>
  );
}

export function RelatedTechnologies({ currentSlug }: { currentSlug: string }) {
  const { t } = useI18n();
  const related = allTechnologies.filter((tech) => tech.slug !== currentSlug);
  return (
    <section className="relative" style={{ backgroundColor: "#f7fafc", color: "#17212b" }}>
      <div className="mx-auto w-full max-w-[1240px] px-6 py-20 md:px-10 md:py-28">
        <div className="max-w-3xl">
          <p className="eyebrow">
            <span className="mr-3 inline-block h-px w-8 align-middle opacity-50" style={{ backgroundColor: "currentColor" }} />
            {t.technology.breadcrumbTech}
          </p>
          <h2 className="mt-5 text-[clamp(1.75rem,3.4vw,2.85rem)] leading-[1.12] font-semibold" style={{ color: "#0b1f33" }}>{t.technology.relatedTitle}</h2>
        </div>
        <div className="mt-10 grid gap-px sm:grid-cols-2 lg:grid-cols-3" style={{ backgroundColor: "#dde5ec" }}>
          {related.map((tech) => (
            <Link key={tech.slug} href={`/technology/${tech.slug}`} className="group p-7 transition-colors" style={{ backgroundColor: "#fff" }}>
              <span className="font-display text-[0.72rem] font-bold tracking-[0.18em]" style={{ color: "#35b8b0" }}>{tech.numKey}</span>
              <h3 className="mt-4 text-[1.02rem] font-semibold transition-colors" style={{ color: "#0b1f33" }}>{t.nav[tech.titleKey]}</h3>
            </Link>
          ))}
        </div>
        <div className="mt-10">
          <Link href="/products" className="inline-flex items-center gap-3 rounded-sm px-7 py-3.5 text-[0.8rem] font-semibold tracking-[0.14em] uppercase transition-all duration-300" style={{ backgroundColor: "#35b8b0", color: "#05231f" }}>
            {t.products.eyebrow}
          </Link>
        </div>
      </div>
    </section>
  );
}

export function CTABanner() {
  const { t } = useI18n();
  return (
    <section className="relative isolate overflow-hidden" style={{ backgroundColor: "#0b1f33" }}>
      <div className="absolute inset-0 navy-grid" style={{ opacity: 0.6 }} />
      <div className="absolute -top-24 -right-16 h-72 w-72 rounded-full blur-3xl" style={{ background: "radial-gradient(circle, rgba(53,184,176,0.28), transparent 70%)" }} />
      <div className="relative mx-auto w-full max-w-[1240px] px-6 py-20 text-white md:px-10 md:py-24">
        <div className="grid gap-10 lg:grid-cols-[1.6fr_1fr] lg:items-end">
          <div>
            <h2 className="max-w-2xl text-[clamp(1.6rem,3vw,2.5rem)] leading-[1.14] font-semibold text-white">{t.ctaBanner.title}</h2>
            <p className="mt-5 max-w-xl text-[1rem] leading-relaxed" style={{ color: "rgba(255,255,255,0.65)" }}>{t.ctaBanner.subtitle}</p>
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
      </div>
    </section>
  );
}
