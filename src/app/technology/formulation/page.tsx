"use client";

import { TechHero, RelatedTechnologies, CTABanner } from "@/components/TechnologyPageShell";
import ScrollReveal from "@/components/ScrollReveal";
import SEOHead from "@/components/SEOHead";

export default function FormulationTechnologyPage() {
  return (
    <>
      <SEOHead
        title="Formulation Technology — Vesco Science"
        description="Advanced formulation development combining peptides, hyaluronic acid, and biologics for regenerative and aesthetic applications."
        keywords="formulation development, peptide formulation, HA formulation, regenerative formulations"
        canonical="https://www.vescoscience.com/technology/formulation"
      />
      <TechHero
        slug="formulation"
        title="Regenerative Formulation Technology"
        description="Rational Combination of Bioactive Components"
      />

      {/* ─── Intro ─── */}
      <section className="relative" style={{ backgroundColor: "#f7fafc", color: "#17212b" }}>
        <div className="mx-auto w-full max-w-[1240px] px-6 py-20 md:px-10 md:py-28">
          <div className="max-w-3xl">
            <p className="eyebrow">
              <span className="mr-3 inline-block h-px w-8 align-middle opacity-50" style={{ backgroundColor: "currentColor" }} />
              FORMULATION SCIENCE
            </p>
            <h2 className="mt-5 text-[clamp(1.75rem,3.4vw,2.85rem)] leading-[1.12] font-semibold" style={{ color: "#0b1f33" }}>
              Beyond Ingredient Combination
            </h2>
            <p className="mt-5 text-[1.0625rem] leading-relaxed" style={{ color: "#5b6b7a" }}>
              Regenerative formulation is more complex than simply combining several active ingredients. When biologically active components are combined, each component can influence the pH, ionic strength, viscosity, osmotic environment, interfacial behavior and stability of the overall formulation.
            </p>
          </div>
        </div>
      </section>

      {/* ─── Formulation Architecture ─── */}
      <section className="relative" style={{ backgroundColor: "#fff", color: "#17212b" }}>
        <div className="mx-auto w-full max-w-[1240px] px-6 py-20 md:px-10 md:py-28">
          <div className="max-w-3xl">
            <p className="eyebrow">
              <span className="mr-3 inline-block h-px w-8 align-middle opacity-50" style={{ backgroundColor: "currentColor" }} />
              ARCHITECTURE
            </p>
            <h2 className="mt-5 text-[clamp(1.75rem,3.4vw,2.85rem)] leading-[1.12] font-semibold" style={{ color: "#0b1f33" }}>
              Formulation Architecture
            </h2>
            <p className="mt-5 text-[1.0625rem] leading-relaxed" style={{ color: "#5b6b7a" }}>
              A regenerative formulation may involve combinations of:
            </p>
          </div>
          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { title: "Extracellular Vesicle Preparations", desc: "Nanoparticulate carriers that mediate intercellular communication and deliver bioactive cargo to target sites." },
              { title: "Polynucleotides / PDRN", desc: "DNA-derived fragments that activate adenosine A2A receptors and support tissue repair signaling pathways." },
              { title: "Peptides", desc: "Short amino acid sequences that act as signaling molecules to modulate cellular behavior and regeneration." },
              { title: "Hyaluronic Acid", desc: "A glycosaminoglycan that provides structural support, hydration, and modulates the inflammatory response." },
              { title: "Buffers", desc: "Systems that maintain the formulation pH within a target range to preserve molecular integrity and bioactivity." },
              { title: "Stabilizing Excipients", desc: "Sugars, amino acids, and surfactants that protect active components from degradation and aggregation." },
              { title: "Tonicity Modifiers", desc: "Agents that adjust osmolality to match physiological conditions and prevent cellular stress upon administration." },
              { title: "Other Supporting Components", desc: "Additional formulation agents selected to achieve specific delivery, stability, or performance objectives." },
            ].map((item, i) => (
              <ScrollReveal key={i}>
                <article className="card-flat h-full p-7">
                  <h3 className="text-[1.05rem] font-semibold" style={{ color: "#0b1f33" }}>{item.title}</h3>
                  <p className="mt-3 text-[0.925rem] leading-relaxed" style={{ color: "#5b6b7a" }}>{item.desc}</p>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Critical Formulation Parameters ─── */}
      <section className="relative" style={{ backgroundColor: "#f7fafc", color: "#17212b" }}>
        <div className="mx-auto w-full max-w-[1240px] px-6 py-20 md:px-10 md:py-28">
          <div className="max-w-3xl">
            <p className="eyebrow">
              <span className="mr-3 inline-block h-px w-8 align-middle opacity-50" style={{ backgroundColor: "currentColor" }} />
              PARAMETERS
            </p>
            <h2 className="mt-5 text-[clamp(1.75rem,3.4vw,2.85rem)] leading-[1.12] font-semibold" style={{ color: "#0b1f33" }}>
              Critical Formulation Parameters
            </h2>
          </div>
          <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "pH",
                desc: "Can influence molecular charge, solubility, degradation pathways and aggregation behavior.",
              },
              {
                title: "Ionic Strength",
                desc: "Can alter intermolecular interactions and colloidal stability of the formulation system.",
              },
              {
                title: "Concentration",
                desc: "Increasing concentration can improve active material delivered per unit volume but may increase viscosity or aggregation risk.",
              },
              {
                title: "Excipients",
                desc: "Sugars, amino acids, surfactants can improve stability by protecting active components from environmental stress.",
              },
              {
                title: "Temperature",
                desc: "Can accelerate chemical degradation, aggregation and other physical changes throughout the product lifecycle.",
              },
            ].map((param, i) => (
              <ScrollReveal key={i}>
                <article className="card-flat h-full p-8">
                  <h3 className="text-[1.1rem] font-semibold" style={{ color: "#0b1f33" }}>{param.title}</h3>
                  <p className="mt-4 text-[0.95rem] leading-relaxed" style={{ color: "#5b6b7a" }}>{param.desc}</p>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Compatibility Before Combination ─── */}
      <section className="relative" style={{ backgroundColor: "#0b1f33", color: "#fff" }}>
        <div className="mx-auto w-full max-w-[1240px] px-6 py-20 md:px-10 md:py-28">
          <div className="max-w-3xl">
            <p className="eyebrow" style={{ color: "#35b8b0" }}>
              <span className="mr-3 inline-block h-px w-8 align-middle opacity-50" style={{ backgroundColor: "currentColor" }} />
              COMPATIBILITY
            </p>
            <h2 className="mt-5 text-[clamp(1.75rem,3.4vw,2.85rem)] leading-[1.12] font-semibold text-white">
              Compatibility Before Combination
            </h2>
            <blockquote className="mt-8 border-l-2 pl-6 text-[clamp(1.1rem,2.2vw,1.5rem)] leading-snug font-medium italic" style={{ borderColor: "#35b8b0", color: "rgba(255,255,255,0.9)" }}>
              &ldquo;Two components that are individually stable are not necessarily stable when combined.&rdquo;
            </blockquote>
            <p className="mt-8 text-[1.0625rem] leading-relaxed" style={{ color: "rgba(255,255,255,0.7)" }}>
              Compatibility assessment involves examining changes in appearance, pH, viscosity, particle characteristics, aggregation, precipitation and other relevant quality attributes. A critical principle in advanced formulation development is that each binary combination within a multi-component system must be individually validated before proceeding to the full formulation.
            </p>
          </div>
        </div>
      </section>

      <RelatedTechnologies currentSlug="formulation" />
      <CTABanner />
    </>
  );
}
