"use client";

import { useI18n } from "@/i18n/context";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";

interface Props {
  category: string;
  productId: string;
}

const categoryImages: Record<string, string> = {
  exosome: "/assets/exosome-BUYrBGuc.jpg",
  "dermal-fillers": "/assets/vials-Ck5soEMR.jpg",
  "peptide-bio-remodeling": "/assets/molecular-CIuWq-Al.jpg",
  "botulinum-toxin": "/assets/cleanroom-DZtXjF0-.jpg",
  "pdrn-pn": "/assets/molecular-CIuWq-Al.jpg",
};

export default function ProductDetailShell({ category, productId }: Props) {
  const { t } = useI18n();
  const pd = (t as any).productPart;
  const detail = (t as any).productDetail;
  const cat = pd.categories?.[category];
  const catDetail = detail.categories?.[category];
  if (!cat || !catDetail) return null;

  const productData = catDetail[productId];
  if (!productData) return null;

  let productInfo: any = null;
  let partLabel = "";
  let groupName = "";
  for (const partKey of ["partA", "partB"]) {
    const part = cat[partKey];
    if (!part?.groups) continue;
    for (const group of part.groups) {
      const found = group.products?.find((p: any) => p.num === productId);
      if (found) {
        productInfo = found;
        partLabel = partKey === "partA" ? pd.partA : pd.partB;
        groupName = group.title;
        break;
      }
    }
    if (productInfo) break;
  }
  if (!productInfo) return null;

  const categoryTitle = cat.title;
  const partSlug = partLabel === pd.partA ? "part-a" : "part-b";
  const heroImg = categoryImages[category] || "/assets/vials-Ck5soEMR.jpg";

  return (
    <main style={{ backgroundColor: "#f7fafc", color: "#17212b" }}>
      {/* Hero */}
      <section className="relative isolate overflow-hidden" style={{ backgroundColor: "#0b1f33", color: "#fff" }}>
        <img src={heroImg} alt="" className="absolute inset-0 h-full w-full object-cover" style={{ opacity: 0.25 }} />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to right, #071726, rgba(7,23,38,0.92), rgba(11,31,51,0.5))" }} />
        <div className="relative mx-auto w-full max-w-[1240px] px-6 pt-32 pb-24 md:px-10 md:pt-40 md:pb-32">
          <nav className="flex items-center gap-2 text-[0.84rem]" style={{ color: "rgba(255,255,255,0.5)" }}>
            <Link href="/" className="transition-colors hover:text-white/80">{detail.breadcrumbHome}</Link>
            <span>/</span>
            <Link href="/products" className="transition-colors hover:text-white/80">{detail.breadcrumbProducts || "Products"}</Link>
            <span>/</span>
            <Link href={`/products/${category}`} className="transition-colors hover:text-white/80">{categoryTitle}</Link>
            <span>/</span>
            <span style={{ color: "rgba(255,255,255,0.7)" }}>{productId}</span>
          </nav>
          <ScrollReveal>
            <p className="eyebrow mt-8 text-white/50">
              <span className="mr-3 inline-block h-px w-8 align-middle opacity-50" style={{ backgroundColor: "currentColor" }} />
              {categoryTitle} · {partLabel}
            </p>
            <h1 className="mt-5 text-[clamp(1.75rem,3.5vw,2.85rem)] leading-[1.1] font-semibold" style={{ color: "#fff" }}>
              {productInfo.title}
            </h1>
          </ScrollReveal>
        </div>
        <div className="absolute inset-x-0 bottom-0 h-px" style={{ background: "linear-gradient(to right, transparent, rgba(53,184,176,0.6), transparent)" }} />
      </section>

      {/* Back Link */}
      <section style={{ backgroundColor: "#fff", color: "#17212b" }}>
        <div className="mx-auto w-full max-w-[1240px] px-6 pt-8 md:px-10 md:pt-10">
          <Link href={`/products/${category}/${partSlug}`} className="inline-flex items-center gap-2 text-[0.84rem] font-semibold transition-colors" style={{ color: "#35b8b0" }}>
            ← {detail.backToPart}
          </Link>
        </div>
      </section>

      {/* Product Main */}
      <section style={{ backgroundColor: "#fff", color: "#17212b" }}>
        <div className="mx-auto w-full max-w-[1240px] px-6 py-10 md:px-10 md:py-14">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:items-start">
            {/* Left: Image */}
            <ScrollReveal>
              <div className="overflow-hidden rounded-sm" style={{ backgroundColor: "#f7fafc" }}>
                <img
                  src={encodeURI(productInfo.img)}
                  alt={productInfo.title}
                  className="aspect-square w-full object-contain"
                />
              </div>
            </ScrollReveal>

            {/* Right: Info */}
            <ScrollReveal>
              <div className="flex flex-col pt-2 lg:pt-4">
                {/* Tags */}
                <div className="flex flex-wrap gap-1.5">
                  {productInfo.tags.map((tag: string, ti: number) => (
                    <span key={ti} className="inline-block rounded-sm px-2.5 py-0.5 text-[0.62rem] font-bold tracking-[0.08em] uppercase" style={{ backgroundColor: ti === 0 ? "#0b1f33" : "#e8f4f3", color: ti === 0 ? "#fff" : "#35b8b0" }}>
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Product Number */}
                <p className="mt-4 text-[0.72rem] font-bold tracking-[0.14em] uppercase" style={{ color: "#35b8b0" }}>
                  {productInfo.num}
                </p>

                <h2 className="mt-3 text-[clamp(1.5rem,2.5vw,2rem)] leading-[1.15] font-semibold" style={{ color: "#0b1f33" }}>
                  {productInfo.title}
                </h2>

                <p className="mt-4 text-[0.95rem] leading-relaxed" style={{ color: "#5b6b7a" }}>
                  {productData.fullDesc}
                </p>

                {/* Key Specs */}
                <div className="mt-6 border-t pt-5" style={{ borderColor: "#dde5ec" }}>
                  <p className="text-[0.68rem] font-bold tracking-[0.14em] uppercase" style={{ color: "#0b1f33" }}>
                    {detail.keySpecs}
                  </p>
                  <ul className="mt-3 space-y-2">
                    {productInfo.specs.map((spec: string, si: number) => (
                      <li key={si} className="flex items-start gap-2.5 text-[0.82rem]" style={{ color: "#5b6b7a" }}>
                        <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full" style={{ backgroundColor: "#35b8b0" }} />
                        {spec}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CDA / Inquire */}
                <div className="mt-6 flex items-center gap-6">
                  <span className="text-[0.75rem] font-semibold" style={{ color: "#35b8b0" }}>
                    {detail.cdaTds}
                  </span>
                  <Link href="/contact" className="text-[0.8rem] font-semibold transition-colors" style={{ color: "#35b8b0" }}>
                    {detail.inquire} →
                  </Link>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Benefits + Applications + Packaging + Storage */}
      <section style={{ backgroundColor: "#f7fafc", color: "#17212b" }}>
        <div className="mx-auto w-full max-w-[1240px] px-6 pb-16 md:px-10 md:pb-20">
          <div className="grid gap-8 sm:grid-cols-2">
            {/* Benefits */}
            <ScrollReveal>
              <div className="rounded-sm border p-6 sm:p-8" style={{ borderColor: "#dde5ec", backgroundColor: "#fff" }}>
                <p className="text-[0.68rem] font-bold tracking-[0.14em] uppercase" style={{ color: "#35b8b0" }}>
                  {detail.keyBenefits}
                </p>
                <ul className="mt-4 space-y-2.5">
                  {productData.benefits.map((b: string, i: number) => (
                    <li key={i} className="flex items-start gap-2.5 text-[0.85rem]" style={{ color: "#5b6b7a" }}>
                      <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full" style={{ backgroundColor: "#35b8b0" }} />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>

            {/* Applications */}
            <ScrollReveal>
              <div className="rounded-sm border p-6 sm:p-8" style={{ borderColor: "#dde5ec", backgroundColor: "#fff" }}>
                <p className="text-[0.68rem] font-bold tracking-[0.14em] uppercase" style={{ color: "#35b8b0" }}>
                  {detail.applications}
                </p>
                <ul className="mt-4 space-y-2.5">
                  {productData.applications.map((a: string, i: number) => (
                    <li key={i} className="flex items-start gap-2.5 text-[0.85rem]" style={{ color: "#5b6b7a" }}>
                      <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full" style={{ backgroundColor: "#276a91" }} />
                      {a}
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>

            {/* Packaging */}
            <ScrollReveal>
              <div className="rounded-sm border p-6 sm:p-8" style={{ borderColor: "#dde5ec", backgroundColor: "#fff" }}>
                <p className="text-[0.68rem] font-bold tracking-[0.14em] uppercase" style={{ color: "#35b8b0" }}>
                  {detail.packaging}
                </p>
                <p className="mt-4 text-[0.88rem] leading-relaxed" style={{ color: "#5b6b7a" }}>
                  {productData.packaging}
                </p>
              </div>
            </ScrollReveal>

            {/* Storage */}
            <ScrollReveal>
              <div className="rounded-sm border p-6 sm:p-8" style={{ borderColor: "#dde5ec", backgroundColor: "#fff" }}>
                <p className="text-[0.68rem] font-bold tracking-[0.14em] uppercase" style={{ color: "#35b8b0" }}>
                  {detail.storage}
                </p>
                <p className="mt-4 text-[0.88rem] leading-relaxed" style={{ color: "#5b6b7a" }}>
                  {productData.storage}
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Demo Note */}
      <section style={{ backgroundColor: "#fff", color: "#17212b" }}>
        <div className="mx-auto w-full max-w-[1240px] border-t px-6 py-14 md:px-10 md:py-16" style={{ borderColor: "#dde5ec" }}>
          <p className="text-[0.84rem]" style={{ color: "#5b6b7a" }}>
            {detail.demoNote}
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-4">
            <Link href="/contact" className="inline-flex items-center gap-3 rounded-sm px-7 py-3.5 text-[0.8rem] font-semibold tracking-[0.14em] uppercase transition-all duration-300" style={{ border: "1px solid rgba(11,31,51,0.25)", color: "#0b1f33" }}>
              {detail.requestCatalogue}
            </Link>
            <Link href="/contact" className="inline-flex items-center gap-3 rounded-sm px-7 py-3.5 text-[0.8rem] font-semibold tracking-[0.14em] uppercase transition-all duration-300" style={{ border: "1px solid rgba(11,31,51,0.25)", color: "#0b1f33" }}>
              {detail.oemOdm}
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
                  {detail.ctaTitle}
                </h2>
                <p className="mt-5 max-w-xl text-[1.0625rem] leading-relaxed" style={{ color: "rgba(255,255,255,0.65)" }}>
                  {detail.ctaDesc}
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <Link href="/contact" className="inline-flex items-center justify-center gap-3 rounded-sm px-7 py-3.5 text-[0.8rem] font-semibold tracking-[0.14em] uppercase transition-all duration-300" style={{ backgroundColor: "#35b8b0", color: "#05231f" }}>
                  {detail.cta1}
                </Link>
                <Link href="/contact" className="inline-flex items-center justify-center gap-3 rounded-sm px-7 py-3.5 text-[0.8rem] font-semibold tracking-[0.14em] uppercase transition-all duration-300" style={{ border: "1px solid rgba(255,255,255,0.25)", color: "#fff" }}>
                  {detail.cta2}
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}
