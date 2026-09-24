"use client";

import { useI18n } from "@/i18n/context";
import Link from "next/link";
import { useRouter } from "next/navigation";
import ScrollReveal from "@/components/ScrollReveal";

interface Product {
  num: string;
  title: string;
  desc: string;
  img: string;
  specs: string[];
  tags: string[];
}

interface ProductGroup {
  title: string;
  count: number;
  products: Product[];
}

interface Props {
  slug: string;
  part: "a" | "b";
}

const categoryImages: Record<string, string> = {
  exosome: "/assets/exosome-BUYrBGuc.jpg",
  "dermal-fillers": "/assets/vials-Ck5soEMR.jpg",
  "peptide-bio-remodeling": "/assets/molecular-CIuWq-Al.jpg",
  "botulinum-toxin": "/assets/cleanroom-DZtXjF0-.jpg",
  "pdrn-pn": "/assets/molecular-CIuWq-Al.jpg",
};

export default function ProductPartShell({ slug, part }: Props) {
  const { t } = useI18n();
  const router = useRouter();
  const pd = (t as any).productPart;
  const cat = pd.categories?.[slug];
  if (!cat) return null;

  const isA = part === "a";
  const partData = isA ? cat.partA : cat.partB;
  if (!partData) return null;

  const totalFormats = partData.groups.reduce((sum: number, g: ProductGroup) => sum + g.count, 0);
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
            <span style={{ color: "rgba(255,255,255,0.7)" }}>{cat.title} ({isA ? pd.partA : pd.partB})</span>
          </nav>
          <ScrollReveal>
            <p className="eyebrow mt-8 text-white/50">
              <span className="mr-3 inline-block h-px w-8 align-middle opacity-50" style={{ backgroundColor: "currentColor" }} />
              {isA ? pd.partA : pd.partB} · {partData.platformTitle}
            </p>
            <h1 className="mt-5 text-[clamp(2rem,4vw,3.25rem)] leading-[1.1] font-semibold" style={{ color: "#fff" }}>
              {cat.title} — {isA ? pd.partA : pd.partB}: {partData.platformTitle}
            </h1>
            <p className="mt-5 max-w-3xl text-[1.0625rem] leading-relaxed" style={{ color: "rgba(255,255,255,0.65)" }}>
              {cat.desc}
            </p>
          </ScrollReveal>
        </div>
        <div className="absolute inset-x-0 bottom-0 h-px" style={{ background: "linear-gradient(to right, transparent, rgba(53,184,176,0.6), transparent)" }} />
      </section>

      {/* Back Link */}
      <section style={{ backgroundColor: "#fff", color: "#17212b" }}>
        <div className="mx-auto w-full max-w-[1240px] px-6 pt-10 md:px-10 md:pt-14">
          <Link href={`/products/${slug}`} className="inline-flex items-center gap-2 text-[0.84rem] font-semibold transition-colors" style={{ color: "#35b8b0" }}>
            ← {pd.backToPlatform}
          </Link>
        </div>
      </section>

      {/* Platform Info Bar */}
      <section style={{ backgroundColor: "#fff", color: "#17212b" }}>
        <div className="mx-auto w-full max-w-[1240px] px-6 py-6 md:px-10">
          <ScrollReveal>
            <div className="flex flex-col gap-5 rounded-sm border p-6 sm:p-7 md:flex-row md:items-center md:justify-between" style={{ borderColor: "#dde5ec", backgroundColor: "#fff" }}>
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full" style={{ backgroundColor: "#35b8b0" }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-[1rem] font-semibold" style={{ color: "#0b1f33" }}>
                    {partData.platformTitle} — {cat.title}
                  </h3>
                  <p className="mt-1 text-[0.84rem] leading-relaxed" style={{ color: "#5b6b7a" }}>
                    {partData.platformDesc}
                  </p>
                </div>
              </div>
              <div className="flex-shrink-0">
                <span className="inline-block rounded-sm px-4 py-2 text-[0.7rem] font-bold tracking-[0.12em] uppercase" style={{ backgroundColor: "#f0faf9", color: "#35b8b0", border: "1px solid #35b8b0" }}>
                  {totalFormats} {pd.dedicatedFormats}
                </span>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Product Groups */}
      <section style={{ backgroundColor: "#fff", color: "#17212b" }}>
        <div className="mx-auto w-full max-w-[1240px] px-6 pb-16 md:px-10 md:pb-20">
          {partData.groups.map((group: ProductGroup, gi: number) => (
            <div key={gi} className={gi > 0 ? "mt-14" : "mt-8"}>
              <ScrollReveal>
                <div className="flex items-center gap-3 border-b pb-4" style={{ borderColor: "#dde5ec" }}>
                  <h3 className="text-[1.15rem] font-semibold" style={{ color: "#0b1f33" }}>
                    {group.title}
                  </h3>
                  <span className="inline-block rounded-sm px-2.5 py-0.5 text-[0.65rem] font-bold tracking-[0.1em] uppercase" style={{ backgroundColor: "#e8f4f3", color: "#35b8b0" }}>
                    {group.count} {pd.formats}
                  </span>
                </div>
              </ScrollReveal>

              <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {group.products.map((product: Product, pi: number) => (
                  <ScrollReveal key={pi}>
                    <Link href={`/products/${slug}/${product.num}`} className="card-flat group flex h-full flex-col transition-shadow hover:shadow-md cursor-pointer">
                      {/* Image with product number overlay */}
                      <div className="relative aspect-square w-full overflow-hidden" style={{ backgroundColor: "#f7fafc" }}>
                        <img
                          src={encodeURI(product.img)}
                          alt={product.title}
                          className="absolute inset-0 h-full w-full object-contain transition-transform duration-500 group-hover:scale-105"
                        />
                        <span className="absolute left-3 top-3 rounded-sm px-2 py-0.5 text-[0.6rem] font-bold tracking-[0.08em] uppercase" style={{ backgroundColor: "rgba(0,0,0,0.6)", color: "#fff" }}>
                          {product.num}
                        </span>
                      </div>

                      {/* Content */}
                      <div className="flex flex-1 flex-col p-5">
                        {/* Tags */}
                        <div className="flex flex-wrap gap-1.5">
                          {product.tags.map((tag: string, ti: number) => (
                            <span key={ti} className="inline-block rounded-sm px-2 py-0.5 text-[0.58rem] font-bold tracking-[0.08em] uppercase" style={{ backgroundColor: ti === 0 ? "#0b1f33" : "#e8f4f3", color: ti === 0 ? "#fff" : "#35b8b0" }}>
                              {tag}
                            </span>
                          ))}
                        </div>

                        <h4 className="mt-3 text-[0.94rem] font-semibold leading-snug" style={{ color: "#0b1f33" }}>
                          {product.title}
                        </h4>
                        <p className="mt-2 flex-1 text-[0.8rem] leading-relaxed" style={{ color: "#5b6b7a" }}>
                          {product.desc}
                        </p>

                        {/* Specs */}
                        <div className="mt-4 border-t pt-4" style={{ borderColor: "#dde5ec" }}>
                          <p className="text-[0.65rem] font-bold tracking-[0.12em] uppercase" style={{ color: "#0b1f33" }}>
                            {pd.keySpecs}
                          </p>
                          <ul className="mt-2 space-y-1">
                            {product.specs.map((spec: string, si: number) => (
                              <li key={si} className="flex items-start gap-2 text-[0.75rem]" style={{ color: "#5b6b7a" }}>
                                <span className="mt-0.5 h-1 w-1 flex-shrink-0 rounded-full" style={{ backgroundColor: "#35b8b0" }} />
                                {spec}
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Footer */}
                        <div className="mt-4 flex items-center justify-between border-t pt-4" style={{ borderColor: "#dde5ec" }}>
                          <span className="text-[0.7rem] font-semibold" style={{ color: "#35b8b0" }}>
                            {pd.cdaTds}
                          </span>
                          <span className="text-[0.75rem] font-semibold transition-colors" style={{ color: "#35b8b0" }}>
                            {pd.inquire} →
                          </span>
                        </div>
                      </div>
                    </Link>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Demo Note */}
      <section style={{ backgroundColor: "#fff", color: "#17212b" }}>
        <div className="mx-auto w-full max-w-[1240px] border-t px-6 py-14 md:px-10 md:py-16" style={{ borderColor: "#dde5ec" }}>
          <p className="text-[0.84rem]" style={{ color: "#5b6b7a" }}>
            {pd.demoNote}
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-4">
            <Link href="/contact" className="inline-flex items-center gap-3 rounded-sm px-7 py-3.5 text-[0.8rem] font-semibold tracking-[0.14em] uppercase transition-all duration-300" style={{ border: "1px solid rgba(11,31,51,0.25)", color: "#0b1f33" }}>
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
              <div className="flex flex-col gap-4">
                <Link href="/contact" className="inline-flex items-center justify-center gap-3 rounded-sm px-7 py-3.5 text-[0.8rem] font-semibold tracking-[0.14em] uppercase transition-all duration-300" style={{ backgroundColor: "#35b8b0", color: "#05231f" }}>
                  {pd.cta1}
                </Link>
                <Link href="/contact" className="inline-flex items-center justify-center gap-3 rounded-sm px-7 py-3.5 text-[0.8rem] font-semibold tracking-[0.14em] uppercase transition-all duration-300" style={{ border: "1px solid rgba(255,255,255,0.25)", color: "#fff" }}>
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
