"use client";

import { TechHero, RelatedTechnologies, CTABanner } from "@/components/TechnologyPageShell";
import ScrollReveal from "@/components/ScrollReveal";

export default function PdrnPnTechnologyPage() {
  return (
    <>
      <TechHero
        slug="pdrn-pn"
        title="PDRN / PN Technology"
        description="Polynucleotide science rooted in molecular characterization and regenerative formulation for advanced research applications."
      />

      {/* ─── Intro ─── */}
      <section className="relative" style={{ backgroundColor: "#fff", color: "#17212b" }}>
        <div className="mx-auto w-full max-w-[1240px] px-6 py-20 md:px-10 md:py-28">
          <div className="max-w-3xl">
            <p className="eyebrow">
              <span className="mr-3 inline-block h-px w-8 align-middle opacity-50" style={{ backgroundColor: "currentColor" }} />
              POLYNUCLEOTIDE SCIENCE
            </p>
            <h2 className="mt-5 text-[clamp(1.75rem,3.4vw,2.85rem)] leading-[1.12] font-semibold" style={{ color: "#0b1f33" }}>
              DNA-Derived Regenerative Materials
            </h2>
            <p className="mt-5 text-[1.0625rem] leading-relaxed" style={{ color: "#5b6b7a" }}>
              PDRN and PN are DNA-derived polynucleotide materials that have gained increasing attention in regenerative and aesthetic research. Although the terms are frequently used interchangeably in commercial environments, they describe materials with potentially different molecular-size distributions and physicochemical properties.
            </p>
          </div>
          <div className="mt-10 max-w-3xl lg:ml-auto lg:pl-10">
            <p className="text-[1.0625rem] leading-relaxed" style={{ color: "#5b6b7a" }}>
              PDRN is generally discussed as a preparation containing relatively shorter DNA fragments, whereas PN-based materials may contain longer nucleotide chains. Understanding the distinction between these two categories is important for researchers evaluating formulation behavior, biological interaction profiles and downstream application suitability.
            </p>
          </div>
        </div>
      </section>

      {/* ─── Molecular Basis ─── */}
      <section className="relative" style={{ backgroundColor: "#f7fafc", color: "#17212b" }}>
        <div className="mx-auto w-full max-w-[1240px] px-6 py-20 md:px-10 md:py-28">
          <div className="max-w-3xl">
            <p className="eyebrow">
              <span className="mr-3 inline-block h-px w-8 align-middle opacity-50" style={{ backgroundColor: "currentColor" }} />
              MECHANISMS OF ACTION
            </p>
            <h2 className="mt-5 text-[clamp(1.75rem,3.4vw,2.85rem)] leading-[1.12] font-semibold" style={{ color: "#0b1f33" }}>
              Molecular Basis
            </h2>
            <p className="mt-5 text-[1.0625rem] leading-relaxed" style={{ color: "#5b6b7a" }}>
              PDRN consists of deoxyribonucleotide chains that can undergo enzymatic degradation into smaller nucleotide components. Research has investigated two principal biological mechanisms:
            </p>
          </div>
          <div className="mt-14 grid gap-8 md:grid-cols-2">
            <ScrollReveal>
              <article className="card-flat h-full p-8">
                <span className="font-display text-[0.72rem] font-bold tracking-[0.18em]" style={{ color: "#35b8b0" }}>
                  MECHANISM 01
                </span>
                <h3 className="mt-4 text-[1.1rem] font-semibold" style={{ color: "#0b1f33" }}>Nucleotide Salvage Pathway</h3>
                <p className="mt-4 text-[0.95rem] leading-relaxed" style={{ color: "#5b6b7a" }}>
                  Breakdown products can contribute nucleotide substrates for cellular nucleic-acid synthesis, potentially reducing the metabolic requirements associated with de novo nucleotide production. This pathway allows cells to recycle nucleotide building blocks rather than synthesizing them entirely from precursors, offering a potentially more efficient route to maintaining nucleic-acid pools during periods of increased cellular activity or tissue repair.
                </p>
              </article>
            </ScrollReveal>
            <ScrollReveal>
              <article className="card-flat h-full p-8">
                <span className="font-display text-[0.72rem] font-bold tracking-[0.18em]" style={{ color: "#35b8b0" }}>
                  MECHANISM 02
                </span>
                <h3 className="mt-4 text-[1.1rem] font-semibold" style={{ color: "#0b1f33" }}>Adenosine A2A-Receptor Signaling</h3>
                <p className="mt-4 text-[0.95rem] leading-relaxed" style={{ color: "#5b6b7a" }}>
                  PDRN-related biological activity has been associated with adenosine A2A receptor signaling. Experimental literature describes downstream effects involving cellular proliferation, inflammatory modulation, tissue repair and angiogenic signaling. The A2A receptor is a G-protein-coupled receptor widely expressed in immune cells, endothelial cells and fibroblasts, making it a relevant target for modulating tissue microenvironment responses.
                </p>
              </article>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ─── PN Formulation Science ─── */}
      <section className="relative" style={{ backgroundColor: "#0b1f33" }}>
        <div className="mx-auto w-full max-w-[1240px] px-6 py-20 text-white md:px-10 md:py-28">
          <div className="max-w-3xl">
            <p className="eyebrow" style={{ color: "#35b8b0" }}>
              <span className="mr-3 inline-block h-px w-8 align-middle opacity-50" style={{ backgroundColor: "currentColor" }} />
              FORMULATION CONSIDERATIONS
            </p>
            <h2 className="mt-5 text-[clamp(1.75rem,3.4vw,2.85rem)] leading-[1.12] font-semibold text-white">
              PN Formulation Science
            </h2>
            <p className="mt-5 text-[1.0625rem] leading-relaxed" style={{ color: "rgba(255,255,255,0.7)" }}>
              Longer-chain polynucleotides can exhibit different physicochemical characteristics from lower-molecular-weight PDRN preparations. Factors such as molecular weight distribution, concentration, purity, viscosity, hydration behavior and formulation environment become important during product development.
            </p>
          </div>

          <div className="mt-14 grid gap-8 md:grid-cols-2">
            <div className="space-y-6">
              {[
                {
                  title: "Molecular-Weight Characteristics",
                  desc: "Chain length directly influences solution behavior, viscosity, interaction kinetics and degradation profile. Higher-molecular-weight PN preparations may exhibit increased viscosity and different diffusion characteristics compared to shorter-chain PDRN.",
                },
                {
                  title: "Concentration",
                  desc: "Active substance concentration affects both the biological potency and physical properties of the formulation. Concentration must be optimized to balance efficacy with processability and patient-comfort considerations.",
                },
                {
                  title: "Solution Viscosity",
                  desc: "Longer nucleotide chains increase solution viscosity, affecting injectability, processing behavior and integration with other formulation components. Viscosity profiling at multiple shear rates provides relevant data for product handling.",
                },
                {
                  title: "pH",
                  desc: "Solution pH influences DNA stability, charge state of nucleotide chains, solubility behavior and compatibility with biological tissue. Tight pH control is important throughout manufacturing and shelf life.",
                },
              ].map((item, i) => (
                <ScrollReveal key={i}>
                  <div className="border-l-2 pl-6" style={{ borderColor: "#35b8b0" }}>
                    <h3 className="text-[1rem] font-semibold text-white">{item.title}</h3>
                    <p className="mt-2 text-[0.925rem] leading-relaxed" style={{ color: "rgba(255,255,255,0.65)" }}>{item.desc}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
            <div className="space-y-6">
              {[
                {
                  title: "Osmolality",
                  desc: "Osmolality affects tonicity, cellular interaction and tissue compatibility. Formulations should be isotonic or appropriately matched to the intended administration site to minimize adverse reactions.",
                },
                {
                  title: "Buffer System",
                  desc: "Buffer selection influences pH stability, ionic strength and compatibility with active components. Phosphate, citrate and histidine buffers are among the options typically evaluated in nucleotide formulation development.",
                },
                {
                  title: "Purity",
                  desc: "Purity assessment should account for residual proteins, endotoxins, nucleic-acid contaminants and process-related impurities. Higher purity levels are generally associated with reduced risk of unintended biological activity.",
                },
                {
                  title: "Stability",
                  desc: "Long-chain DNA preparations are susceptible to thermal, oxidative and enzymatic degradation. Stability studies must evaluate degradation pathways, molecular-weight changes and biological-activity retention over the intended shelf life.",
                },
              ].map((item, i) => (
                <ScrollReveal key={i}>
                  <div className="border-l-2 pl-6" style={{ borderColor: "#35b8b0" }}>
                    <h3 className="text-[1rem] font-semibold text-white">{item.title}</h3>
                    <p className="mt-2 text-[0.925rem] leading-relaxed" style={{ color: "rgba(255,255,255,0.65)" }}>{item.desc}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>

          <div className="mt-14">
            <p className="mb-6 text-[1.0625rem] leading-relaxed font-medium" style={{ color: "rgba(255,255,255,0.85)" }}>
              Additional formulation factors under consideration:
            </p>
            <div className="grid gap-px sm:grid-cols-2 lg:grid-cols-4" style={{ backgroundColor: "rgba(255,255,255,0.1)" }}>
              {[
                "Compatibility with other formulation components",
                "Intended dosage form",
                "Sterilization method compatibility",
                "Packaging interaction assessment",
              ].map((item, i) => (
                <ScrollReveal key={i}>
                  <div className="p-6" style={{ backgroundColor: "rgba(255,255,255,0.04)" }}>
                    <span className="font-display text-[0.72rem] font-bold tracking-[0.18em]" style={{ color: "#35b8b0" }}>
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <p className="mt-3 text-[0.95rem] leading-snug font-medium" style={{ color: "rgba(255,255,255,0.85)" }}>
                      {item}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <RelatedTechnologies currentSlug="pdrn-pn" />
      <CTABanner />
    </>
  );
}
