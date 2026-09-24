"use client";

import { useI18n } from "@/i18n/context";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";

interface Props {
  slug: string;
}

const categoryImages: Record<string, string> = {
  exosome: "/assets/exosome-BUYrBGuc.jpg",
  "dermal-fillers": "/assets/vials-Ck5soEMR.jpg",
  "peptide-bio-remodeling": "/assets/molecular-CIuWq-Al.jpg",
  "botulinum-toxin": "/assets/cleanroom-DZtXjF0-.jpg",
  "pdrn-pn": "/assets/molecular-CIuWq-Al.jpg",
};

export default function ProductCategoryShell({ slug }: Props) {
  const { t } = useI18n();
  const pd = (t as any).productCategory;
  const cat = pd.categories[slug];
  if (!cat) return null;

  const partA = pd.partACounts?.[slug] ?? 0;
  const partB = pd.partBCounts?.[slug] ?? 0;
  const total = partA + partB;
  const heroImg = categoryImages[slug] || "/assets/vials-Ck5soEMR.jpg";

  return (
    <main style={{ backgroundColor: "#f7fafc", color: "#17212b" }}>
      {/* Hero */}
      <section className="relative isolate overflow-hidden" style={{ backgroundColor: "#0b1f33", color: "#fff" }}>
        <img src={heroImg} alt="" className="absolute inset-0 h-full w-full object-cover" style={{ opacity: 0.25 }} />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to right, #071726, rgba(7,23,38,0.92), rgba(11,31,51,0.5))" }} />
        <div className="relative mx-auto w-full max-w-[1240px] px-6 pt-32 pb-24 md:px-10 md:pt-40 md:pb-32">
          <nav className="flex items-center gap-2 text-[0.84rem]" style={{ color: "rgba(255,255,255,0.5)" }}>
            <Link href="/" className="transition-colors hover:text-white/80">{pd.breadcrumbHome}</Link>
            <span>/</span>
            <span style={{ color: "rgba(255,255,255,0.7)" }}>{cat.title}</span>
          </nav>
          <ScrollReveal>
            <p className="eyebrow mt-8 text-white/50">
              <span className="mr-3 inline-block h-px w-8 align-middle opacity-50" style={{ backgroundColor: "currentColor" }} />
              {pd.heroEyebrow}
            </p>
            <h1 className="mt-5 text-[clamp(2.25rem,4.5vw,4rem)] leading-[1.08] font-semibold" style={{ color: "#fff" }}>
              {cat.title}
            </h1>
            <p className="mt-5 max-w-3xl text-[1.0625rem] leading-relaxed" style={{ color: "rgba(255,255,255,0.65)" }}>
              {cat.desc}
            </p>
          </ScrollReveal>
        </div>
        <div className="absolute inset-x-0 bottom-0 h-px" style={{ background: "linear-gradient(to right, transparent, rgba(53,184,176,0.6), transparent)" }} />
      </section>

      {/* Back Link + Image + Category Info */}
      <section style={{ backgroundColor: "#fff", color: "#17212b" }}>
        <div className="mx-auto w-full max-w-[1240px] px-6 py-10 md:px-10 md:py-16">
          <Link href="/products" className="inline-flex items-center gap-2 text-[0.84rem] font-semibold transition-colors" style={{ color: "#35b8b0" }}>
            ← {pd.backToProducts}
          </Link>

          <div className="mt-10 grid gap-10 md:grid-cols-[1fr_1fr] md:items-start">
            {/* Left: Image */}
            <ScrollReveal>
              <div className="overflow-hidden rounded-sm" style={{ backgroundColor: "#f7fafc" }}>
                <img
                  src={`/assets/${cat.img}`}
                  alt={cat.title}
                  className="aspect-square w-full object-contain"
                />
              </div>
            </ScrollReveal>

            {/* Right: Info */}
            <ScrollReveal>
              <div className="flex flex-col justify-center pt-4 md:pt-8">
                <p className="text-[0.7rem] font-bold tracking-[0.18em] uppercase" style={{ color: "#35b8b0" }}>
                  {pd.categoryLabel} {cat.num}
                </p>
                <h2 className="mt-4 text-[clamp(1.5rem,3vw,2.4rem)] leading-[1.12] font-semibold" style={{ color: "#0b1f33" }}>
                  {cat.title}
                </h2>
                <p className="mt-4 text-[0.94rem] leading-relaxed" style={{ color: "#5b6b7a" }}>
                  {cat.desc}
                </p>
                <div className="mt-6">
                  <span className="inline-block border-b-2 pb-0.5 text-[0.75rem] font-bold tracking-[0.14em] uppercase" style={{ color: "#35b8b0", borderColor: "#35b8b0" }}>
                    {pd.selectPlatform} ({total} {pd.totalProductsLabel})
                  </span>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Platform Selection */}
      <section style={{ backgroundColor: "#f7fafc", color: "#17212b" }}>
        <div className="mx-auto w-full max-w-[1240px] px-6 pb-16 md:px-10 md:pb-20">
          <p className="text-[0.75rem] font-bold tracking-[0.14em] uppercase" style={{ color: "#35b8b0" }}>
            {pd.choosePlatformLabel}
          </p>

          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {/* Part A */}
            <ScrollReveal>
              <Link href={`/products/${slug}/part-a`} className="card-flat group flex h-full flex-col p-8 transition-shadow hover:shadow-md">
                <div className="flex items-center justify-between">
                  <span className="inline-block rounded-sm px-3 py-1 text-[0.65rem] font-bold tracking-[0.12em] uppercase" style={{ backgroundColor: "#35b8b0", color: "#fff" }}>
                    {pd.partA}
                  </span>
                  <span className="text-[0.84rem] font-semibold" style={{ color: "#0b1f33" }}>
                    {partA} {pd.products}
                  </span>
                </div>
                <h4 className="mt-6 text-[1.1rem] font-semibold" style={{ color: "#0b1f33" }}>
                  {pd.platformsTitle}
                </h4>
                <p className="mt-3 flex-1 text-[0.84rem] leading-relaxed" style={{ color: "#5b6b7a" }}>
                  {pd.platformsDesc}
                </p>
                <div className="mt-6 flex items-center justify-between border-t pt-5" style={{ borderColor: "#dde5ec" }}>
                  <span className="text-[0.75rem] font-semibold tracking-[0.1em] uppercase" style={{ color: "#35b8b0" }}>
                    {pd.openPartA} ({partA})
                  </span>
                  <span className="text-lg transition-transform duration-300 group-hover:translate-x-1" style={{ color: "#35b8b0" }}>→</span>
                </div>
              </Link>
            </ScrollReveal>

            {/* Part B */}
            <ScrollReveal>
              <Link href={`/products/${slug}/part-b`} className="card-flat group flex h-full flex-col p-8 transition-shadow hover:shadow-md">
                <div className="flex items-center justify-between">
                  <span className="inline-block rounded-sm px-3 py-1 text-[0.65rem] font-bold tracking-[0.12em] uppercase" style={{ backgroundColor: "#0b1f33", color: "#fff" }}>
                    {pd.partB}
                  </span>
                  <span className="text-[0.84rem] font-semibold" style={{ color: "#0b1f33" }}>
                    {partB} {pd.products}
                  </span>
                </div>
                <h4 className="mt-6 text-[1.1rem] font-semibold" style={{ color: "#0b1f33" }}>
                  {pd.collabsTitle}
                </h4>
                <p className="mt-3 flex-1 text-[0.84rem] leading-relaxed" style={{ color: "#5b6b7a" }}>
                  {pd.collabsDesc}
                </p>
                <div className="mt-6 flex items-center justify-between border-t pt-5" style={{ borderColor: "#dde5ec" }}>
                  <span className="text-[0.75rem] font-semibold tracking-[0.1em] uppercase" style={{ color: "#35b8b0" }}>
                    {pd.openPartB} ({partB})
                  </span>
                  <span className="text-lg transition-transform duration-300 group-hover:translate-x-1" style={{ color: "#35b8b0" }}>→</span>
                </div>
              </Link>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Demo Note */}
      <section style={{ backgroundColor: "#fff", color: "#17212b" }}>
        <div className="mx-auto w-full max-w-[1240px] px-6 py-14 md:px-10 md:py-16">
          <p className="text-[0.84rem]" style={{ color: "#5b6b7a" }}>
            {pd.demoNote}
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-4">
            <Link href="/contact" className="inline-flex items-center gap-3 rounded-sm px-7 py-3.5 text-[0.8rem] font-semibold tracking-[0.14em] uppercase transition-all duration-300" style={{ backgroundColor: "#35b8b0", color: "#05231f" }}>
              {pd.requestCatalogue}
            </Link>
            <Link href="/contact" className="inline-flex items-center gap-3 rounded-sm px-7 py-3.5 text-[0.8rem] font-semibold tracking-[0.14em] uppercase transition-all duration-300" style={{ border: "1px solid rgba(11,31,51,0.25)", color: "#0b1f33" }}>
              {pd.oemOdm}
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section style={{ backgroundColor: "#0b1f33", color: "#fff" }}>
        <div className="mx-auto w-full max-w-[1240px] px-6 py-16 md:px-10 md:py-20">
          <ScrollReveal>
            <div className="grid gap-10 md:grid-cols-[1fr_auto] md:items-center">
              <div>
                <h2 className="text-[clamp(1.5rem,3vw,2.4rem)] leading-[1.12] font-semibold">
                  {pd.ctaTitle}
                </h2>
                <p className="mt-5 max-w-xl text-[1.0625rem] leading-relaxed" style={{ color: "rgba(255,255,255,0.65)" }}>
                  {pd.ctaDesc}
                </p>
              </div>
              <div className="flex flex-wrap items-center gap-4">
                <Link href="/contact" className="inline-flex items-center gap-3 rounded-sm px-7 py-3.5 text-[0.8rem] font-semibold tracking-[0.14em] uppercase transition-all duration-300" style={{ backgroundColor: "#35b8b0", color: "#05231f" }}>
                  {pd.cta1}
                </Link>
                <Link href="/contact" className="inline-flex items-center gap-3 rounded-sm px-7 py-3.5 text-[0.8rem] font-semibold tracking-[0.14em] uppercase transition-all duration-300" style={{ border: "1px solid rgba(255,255,255,0.25)", color: "#fff" }}>
                  {pd.cta2}
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}
