"use client";

import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import SEOHead from "@/components/SEOHead";

export default function TechnologyPage() {
  return (
    <>
      <SEOHead
        title="Technology Platforms — Vesco Science"
        description="Six core technology platforms at Vesco Science: exosome, PDRN/PN, lyophilization, formulation, cold chain, and custom development for regenerative biologics."
        keywords="biotechnology platforms, exosome technology, PDRN PN technology, lyophilization, formulation development"
        canonical="https://www.vescoscience.com/technology"
      />
      {/* ===== HERO ===== */}
      <header className="relative isolate overflow-hidden" style={{ backgroundColor: "#071726" }}>
        <img src="/assets/molecular-CIuWq-Al.jpg" alt="" className="absolute inset-0 h-full w-full object-cover" style={{ opacity: 0.3 }} />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to right, #071726, rgba(7,23,38,0.9), rgba(11,31,51,0.4))" }} />
        <div className="relative mx-auto w-full max-w-[1240px] px-6 pt-36 pb-20 md:px-10 md:pt-44 md:pb-28">
          <nav aria-label="Breadcrumb" className="mb-8 text-[0.8rem]" style={{ color: "rgba(255,255,255,0.45)" }}>
            <Link href="/" className="transition-colors hover:text-[#35b8b0]">Home</Link>
            <span className="mx-2" style={{ color: "rgba(255,255,255,0.25)" }}>/</span>
            <span style={{ color: "rgba(255,255,255,0.75)" }}>Technology</span>
          </nav>
          <p className="eyebrow" style={{ color: "#35b8b0" }}>
            <span className="mr-3 inline-block h-px w-8 align-middle opacity-50" style={{ backgroundColor: "currentColor" }} />
            TECHNOLOGY PLATFORM
          </p>
          <h1 className="mt-6 max-w-4xl text-white font-semibold leading-[1.06] text-[clamp(2.1rem,4.6vw,3.9rem)]">Vesco Science Technology Platform</h1>
          <p className="mt-7 max-w-2xl text-[1.0625rem] leading-relaxed" style={{ color: "rgba(255,255,255,0.7)" }}>Advanced Technologies for Exosome, Polynucleotide and Regenerative Product Development</p>
        </div>
        <div className="absolute inset-x-0 bottom-0 h-px" style={{ background: "linear-gradient(to right, transparent, rgba(53,184,176,0.6), transparent)" }} />
      </header>

      {/* ===== PLATFORM OVERVIEW ===== */}
      <section style={{ backgroundColor: "#fff", color: "#17212b" }}>
        <div className="mx-auto w-full max-w-[1240px] px-6 py-20 md:px-10 md:py-28">
          <div className="max-w-3xl">
            <p className="eyebrow">
              <span className="mr-3 inline-block h-px w-8 align-middle opacity-50" style={{ backgroundColor: "currentColor" }} />
              PLATFORM OVERVIEW
            </p>
            <h2 className="mt-5 text-[clamp(1.75rem,3.4vw,2.85rem)] leading-[1.12] font-semibold" style={{ color: "#0b1f33" }}>Integrated Biotechnology Platform</h2>
            <p className="mt-5 text-[1.0625rem] leading-relaxed" style={{ color: "#5b6b7a" }}>Vesco Science combines extracellular vesicle technology, nucleic-acid-based regenerative materials, lyophilization, formulation science, temperature-controlled processing, and custom product development into an integrated biotechnology platform.</p>
            <p className="mt-4 text-[1.0625rem] leading-relaxed" style={{ color: "#5b6b7a" }}>Our approach is not limited to the preparation of a final formulation. It encompasses the scientific stages that determine product quality from biological source and raw-material control through isolation, purification, concentration, characterization, stabilization, formulation, packaging compatibility, and storage.</p>
            <p className="mt-4 text-[1.0625rem] leading-relaxed" style={{ color: "#5b6b7a" }}>The objective is to establish controlled and reproducible processes in which the critical characteristics of a biological material are considered at every stage of development.</p>
          </div>
        </div>
      </section>

      {/* ===== 6 TECHNOLOGY CARDS ===== */}
      <section style={{ backgroundColor: "#f7fafc", color: "#17212b" }}>
        <div className="mx-auto w-full max-w-[1240px] px-6 py-20 md:px-10 md:py-28">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              { num: "01", title: "Exosome & Extracellular Vesicle Technology", desc: "Isolation • Purification • Concentration • Characterization", href: "/technology/exosome" },
              { num: "02", title: "PDRN / PN Technology", desc: "Polynucleotide Science • Molecular Characterization • Regenerative Formulation", href: "/technology/pdrn-pn" },
              { num: "03", title: "Lyophilization Technology", desc: "Freeze-Drying • Stabilization • Reconstitution Engineering", href: "/technology/lyophilization" },
              { num: "04", title: "Regenerative Formulation Technology", desc: "Rational Combination of Bioactive Components", href: "/technology/formulation" },
              { num: "05", title: "Cold Chain Technology", desc: "Controlled Temperature From Production to Application", href: "/technology/cold-chain" },
              { num: "06", title: "Custom Formulation Technology", desc: "From Scientific Concept to Application-Specific Product", href: "/technology/custom" },
            ].map((card) => (
              <ScrollReveal key={card.num}>
                <Link href={card.href} className="block h-full">
                  <div className="card-flat group flex h-full flex-col p-8">
                    <span className="font-display text-[0.8rem] font-bold tracking-[0.18em]" style={{ color: "#35b8b0" }}>{card.num}</span>
                    <h3 className="mt-6 text-[1.2rem] font-semibold" style={{ color: "#0b1f33" }}>{card.title}</h3>
                    <p className="mt-3 flex-1 text-[0.95rem] leading-relaxed" style={{ color: "#5b6b7a" }}>{card.desc}</p>
                    <span className="mt-7 inline-flex items-center gap-2 text-[0.8rem] font-semibold tracking-[0.12em] uppercase" style={{ color: "#276a91" }}>
                      <span className="h-px w-6 transition-all duration-500 group-hover:w-10" style={{ backgroundColor: "#35b8b0" }} />
                      EXPLORE
                    </span>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== INTEGRATED WORKFLOW ===== */}
      <section style={{ backgroundColor: "#0b1f33" }}>
        <div className="mx-auto w-full max-w-[1240px] px-6 py-20 text-white md:px-10 md:py-28">
          <div className="max-w-3xl">
            <p className="eyebrow" style={{ color: "#35b8b0" }}>
              <span className="mr-3 inline-block h-px w-8 align-middle opacity-50" style={{ backgroundColor: "currentColor" }} />
              INTEGRATED APPROACH
            </p>
            <h2 className="mt-5 text-[clamp(1.75rem,3.4vw,2.85rem)] leading-[1.12] font-semibold text-white">Quality-by-Design Approach</h2>
            <p className="mt-5 text-[1.0625rem] leading-relaxed" style={{ color: "rgba(255,255,255,0.7)" }}>The six technology platforms are interconnected rather than independent. A biological product may require multiple stages working together.</p>
          </div>
          <div className="mt-12">
            <ol className="grid gap-px sm:grid-cols-2 lg:grid-cols-4" style={{ backgroundColor: "rgba(255,255,255,0.1)" }}>
              {["Exosome Isolation & Purification", "Characterization & Analysis", "Formulation Optimization", "Lyophilization / Frozen Stabilization", "Packaging Compatibility", "Temperature-Controlled Storage", "Quality Assessment", "Final Release"].map((step, i) => (
                <li key={i} className="relative p-6" style={{ backgroundColor: "rgba(255,255,255,0.04)", outline: "1px solid rgba(255,255,255,0.1)" }}>
                  <span className="font-display text-[0.72rem] font-bold tracking-[0.18em]" style={{ color: "#35b8b0" }}>{String(i + 1).padStart(2, "0")}</span>
                  <p className="mt-3 text-[0.9rem] leading-snug font-medium" style={{ color: "rgba(255,255,255,0.85)" }}>{step}</p>
                </li>
              ))}
            </ol>
          </div>
          <p className="mt-8 text-[1rem] leading-relaxed" style={{ color: "rgba(255,255,255,0.6)" }}>This integrated approach reflects an important principle in biologics development: quality must be built into the process rather than evaluated only at the end.</p>
        </div>
      </section>

      {/* ===== ANALYTICAL PHILOSOPHY ===== */}
      <section style={{ backgroundColor: "#fff", color: "#17212b" }}>
        <div className="mx-auto w-full max-w-[1240px] px-6 py-20 md:px-10 md:py-28">
          <div className="max-w-3xl">
            <p className="eyebrow">
              <span className="mr-3 inline-block h-px w-8 align-middle opacity-50" style={{ backgroundColor: "currentColor" }} />
              ANALYTICAL PHILOSOPHY
            </p>
            <h2 className="mt-5 text-[clamp(1.75rem,3.4vw,2.85rem)] leading-[1.12] font-semibold" style={{ color: "#0b1f33" }}>Orthogonal Characterization</h2>
            <p className="mt-5 text-[1.0625rem] leading-relaxed" style={{ color: "#5b6b7a" }}>Vesco Science&apos;s technology platform emphasizes orthogonal characterization — using complementary analytical approaches rather than relying on a single measurement.</p>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            <ScrollReveal>
              <div className="card-flat p-8">
                <h3 className="text-[1.1rem] font-semibold" style={{ color: "#0b1f33" }}>EV Preparation Analysis</h3>
                <p className="mt-3 text-[0.95rem] leading-relaxed" style={{ color: "#5b6b7a" }}>An extracellular-vesicle preparation may be evaluated through a combination of:</p>
                <ul className="mt-4 space-y-2">
                  {["Particle Analysis", "Morphological Analysis", "Protein Marker Analysis", "Purity Assessment", "Functional Characterization"].map((item, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-[0.9rem]" style={{ color: "#5b6b7a" }}>
                      <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full" style={{ backgroundColor: "#35b8b0" }} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
            <ScrollReveal>
              <div className="card-flat p-8">
                <h3 className="text-[1.1rem] font-semibold" style={{ color: "#0b1f33" }}>Formulation Development</h3>
                <p className="mt-3 text-[0.95rem] leading-relaxed" style={{ color: "#5b6b7a" }}>A formulation-development program may combine:</p>
                <ul className="mt-4 space-y-2">
                  {["Appearance + pH", "Osmolality + Viscosity", "Particle Characteristics", "Chemical Stability", "Reconstitution + Storage Stability"].map((item, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-[0.9rem]" style={{ color: "#5b6b7a" }}>
                      <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full" style={{ backgroundColor: "#35b8b0" }} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          </div>
          <p className="mt-8 text-[1rem] leading-relaxed" style={{ color: "#5b6b7a" }}>This multi-dimensional approach helps distinguish between identity, purity, stability and functional attributes, which are scientifically different concepts.</p>
        </div>
      </section>

      {/* ===== SCIENCE BEHIND ===== */}
      <section style={{ backgroundColor: "#f7fafc", color: "#17212b" }}>
        <div className="mx-auto w-full max-w-[1240px] px-6 py-20 md:px-10 md:py-28">
          <div className="max-w-3xl">
            <p className="eyebrow">
              <span className="mr-3 inline-block h-px w-8 align-middle opacity-50" style={{ backgroundColor: "currentColor" }} />
              OUR PRINCIPLE
            </p>
            <h2 className="mt-5 text-[clamp(1.75rem,3.4vw,2.85rem)] leading-[1.12] font-semibold" style={{ color: "#0b1f33" }}>Science Behind Every Formulation</h2>
            <p className="mt-5 text-[1.0625rem] leading-relaxed" style={{ color: "#5b6b7a" }}>Vesco Science&apos;s technology platform is built around a simple scientific principle:</p>
          </div>
          <div className="mt-10 flex flex-wrap items-center gap-3">
            {["Source", "Process", "Characterize", "Stabilize", "Formulate", "Control"].map((step, i) => (
              <span key={i} className="inline-flex items-center gap-3">
                <span className="rounded-sm px-5 py-3 text-[0.85rem] font-semibold" style={{ backgroundColor: "#0b1f33", color: "#fff" }}>{step}</span>
                {i < 5 && <span className="text-[1.2rem]" style={{ color: "#35b8b0" }}>→</span>}
              </span>
            ))}
          </div>
          <p className="mt-8 max-w-3xl text-[1rem] leading-relaxed" style={{ color: "#5b6b7a" }}>Each stage can influence the next. A well-characterized biological material requires an appropriate purification strategy. A purified material requires a compatible formulation environment. A stable formulation requires appropriate processing and storage conditions. Through the integration of extracellular vesicle science, PDRN/PN technology, lyophilization engineering, regenerative formulation, cold-chain management and custom development, Vesco Science builds a technology framework for the controlled development of next-generation biological products.</p>
        </div>
      </section>

      {/* ===== CTA BANNER ===== */}
      <section className="relative isolate overflow-hidden" style={{ backgroundColor: "#0b1f33" }}>
        <div className="absolute inset-0 navy-grid" style={{ opacity: 0.6 }} />
        <div className="absolute -top-24 -right-16 h-72 w-72 rounded-full blur-3xl" style={{ background: "radial-gradient(circle, rgba(53,184,176,0.28), transparent 70%)" }} />
        <div className="relative mx-auto w-full max-w-[1240px] px-6 py-20 text-white md:px-10 md:py-24">
          <div className="grid gap-10 lg:grid-cols-[1.6fr_1fr] lg:items-end">
            <div>
              <h2 className="max-w-2xl text-[clamp(1.6rem,3vw,2.5rem)] leading-[1.14] font-semibold text-white">Ready to Discuss Your Project?</h2>
              <p className="mt-5 max-w-xl text-[1rem] leading-relaxed" style={{ color: "rgba(255,255,255,0.65)" }}>Contact Vesco Science to learn how our technology platform can support your product development requirements.</p>
            </div>
            <div className="flex flex-wrap gap-3 lg:justify-end">
              <Link href="/contact" className="inline-flex items-center gap-3 rounded-sm px-7 py-3.5 text-[0.8rem] font-semibold tracking-[0.14em] uppercase transition-all duration-300" style={{ backgroundColor: "#35b8b0", color: "#05231f" }}>
                REQUEST A CONSULTATION
              </Link>
              <Link href="/contact" className="inline-flex items-center gap-3 rounded-sm px-7 py-3.5 text-[0.8rem] font-semibold tracking-[0.14em] uppercase transition-all duration-300" style={{ border: "1px solid rgba(255,255,255,0.25)", color: "#fff" }}>
                CONTACT US
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
