"use client";

import { TechHero, RelatedTechnologies, CTABanner } from "@/components/TechnologyPageShell";
import ScrollReveal from "@/components/ScrollReveal";
import SEOHead from "@/components/SEOHead";

export default function ExosomeTechnologyPage() {
  return (
    <>
      <SEOHead
        title="Exosome Technology — Vesco Science"
        description="Advanced exosome isolation, purification, and characterization technology at Vesco Science for regenerative medicine applications."
        keywords="exosome technology, extracellular vesicles, HUC-MSC exosomes, exosome purification"
        canonical="https://www.vescoscience.com/technology/exosome"
      />
      <TechHero
        slug="exosome"
        title="Exosome & Extracellular Vesicle Technology"
        description="Isolation, purification, concentration and characterization of extracellular vesicles for scientific research and development applications."
      />

      {/* ─── Intro ─── */}
      <section className="relative" style={{ backgroundColor: "#fff", color: "#17212b" }}>
        <div className="mx-auto w-full max-w-[1240px] px-6 py-20 md:px-10 md:py-28">
          <div className="max-w-3xl">
            <p className="eyebrow">
              <span className="mr-3 inline-block h-px w-8 align-middle opacity-50" style={{ backgroundColor: "currentColor" }} />
              EXOSOME SCIENCE
            </p>
            <h2 className="mt-5 text-[clamp(1.75rem,3.4vw,2.85rem)] leading-[1.12] font-semibold" style={{ color: "#0b1f33" }}>
              Extracellular Vesicle Technology
            </h2>
            <p className="mt-5 text-[1.0625rem] leading-relaxed" style={{ color: "#5b6b7a" }}>
              Extracellular vesicles (EVs) are nanoscale, membrane-bound particles released by cells that can contain proteins, lipids and nucleic acids. The term &ldquo;exosome&rdquo; specifically refers to EVs originating from the endosomal pathway; modern EV research increasingly emphasizes experimentally supported characterization rather than assuming that every small vesicle preparation is composed exclusively of exosomes. The International Society for Extracellular Vesicles (ISEV) recommends reporting appropriate physical, biochemical and biological characteristics when studying EV preparations.
            </p>
          </div>
          <div className="mt-10 max-w-3xl lg:ml-auto lg:pl-10">
            <p className="text-[1.0625rem] leading-relaxed" style={{ color: "#5b6b7a" }}>
              At Vesco Science, exosome technology is approached as a multi-stage downstream processing system. The objective is to separate vesicular material from cells, cellular debris, soluble proteins and other unwanted components while maintaining the physicochemical integrity of the vesicle population.
            </p>
          </div>
        </div>
      </section>

      {/* ─── Biological Source & Upstream Control ─── */}
      <section className="relative" style={{ backgroundColor: "#f7fafc", color: "#17212b" }}>
        <div className="mx-auto w-full max-w-[1240px] px-6 py-20 md:px-10 md:py-28">
          <div className="max-w-3xl">
            <p className="eyebrow">
              <span className="mr-3 inline-block h-px w-8 align-middle opacity-50" style={{ backgroundColor: "currentColor" }} />
              UPSTREAM CONTROL
            </p>
            <h2 className="mt-5 text-[clamp(1.75rem,3.4vw,2.85rem)] leading-[1.12] font-semibold" style={{ color: "#0b1f33" }}>
              Biological Source & Upstream Control
            </h2>
            <p className="mt-5 text-[1.0625rem] leading-relaxed" style={{ color: "#5b6b7a" }}>
              The quality of an EV preparation begins before isolation. Parameters associated with the producing cell system can influence the resulting vesicle population and its molecular composition. Source-cell characteristics, culture conditions, harvesting strategy and upstream process control are important considerations in EV development.
            </p>
          </div>
          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {[
              {
                title: "Source-Cell Characteristics",
                desc: "Cell type, passage number, viability and phenotypic state can all influence the molecular composition and physical properties of released extracellular vesicles.",
              },
              {
                title: "Culture Conditions",
                desc: "Media composition, supplements, pH, temperature, dissolved oxygen and growth phase can modulate EV release rates and cargo profiles.",
              },
              {
                title: "Harvesting Strategy",
                desc: "Collection timing, method and handling conditions affect the concentration and quality of vesicles recovered from the culture system.",
              },
            ].map((card, i) => (
              <ScrollReveal key={i}>
                <article className="card-flat h-full p-8">
                  <h3 className="text-[1.1rem] font-semibold" style={{ color: "#0b1f33" }}>{card.title}</h3>
                  <p className="mt-4 text-[0.95rem] leading-relaxed" style={{ color: "#5b6b7a" }}>{card.desc}</p>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Isolation & Purification ─── */}
      <section className="relative" style={{ backgroundColor: "#0b1f33" }}>
        <div className="mx-auto w-full max-w-[1240px] px-6 py-20 text-white md:px-10 md:py-28">
          <div className="max-w-3xl">
            <p className="eyebrow" style={{ color: "#35b8b0" }}>
              <span className="mr-3 inline-block h-px w-8 align-middle opacity-50" style={{ backgroundColor: "currentColor" }} />
              DOWNSTREAM PROCESSING
            </p>
            <h2 className="mt-5 text-[clamp(1.75rem,3.4vw,2.85rem)] leading-[1.12] font-semibold text-white">
              Isolation & Purification
            </h2>
            <p className="mt-5 text-[1.0625rem] leading-relaxed" style={{ color: "rgba(255,255,255,0.7)" }}>
              Depending on the starting material and development objective, EV processing can incorporate complementary separation technologies such as:
            </p>
          </div>
          <div className="mt-12 grid gap-px sm:grid-cols-2 lg:grid-cols-3" style={{ backgroundColor: "rgba(255,255,255,0.1)" }}>
            {[
              "Differential centrifugation",
              "Membrane ultrafiltration",
              "Tangential flow filtration (TFF)",
              "Size-exclusion chromatography (SEC)",
              "Density-based separation",
              "Other orthogonal purification approaches",
            ].map((method, i) => (
              <ScrollReveal key={i}>
                <div className="p-6" style={{ backgroundColor: "rgba(255,255,255,0.04)" }}>
                  <span className="font-display text-[0.72rem] font-bold tracking-[0.18em]" style={{ color: "#35b8b0" }}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="mt-3 text-[0.95rem] leading-snug font-medium" style={{ color: "rgba(255,255,255,0.85)" }}>
                    {method}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
          <p className="mt-10 max-w-3xl text-[1.0625rem] leading-relaxed" style={{ color: "rgba(255,255,255,0.6)" }}>
            These technologies operate according to different physical principles. No single purification technology is universally optimal; process selection depends on source material, desired purity, recovery, scale and downstream application.
          </p>
        </div>
      </section>

      {/* ─── Tangential Flow Filtration ─── */}
      <section className="relative" style={{ backgroundColor: "#fff", color: "#17212b" }}>
        <div className="mx-auto w-full max-w-[1240px] px-6 py-20 md:px-10 md:py-28">
          <div className="grid gap-12 lg:grid-cols-2">
            <div className="max-w-3xl">
              <p className="eyebrow">
                <span className="mr-3 inline-block h-px w-8 align-middle opacity-50" style={{ backgroundColor: "currentColor" }} />
                TFF DEEP DIVE
              </p>
              <h2 className="mt-5 text-[clamp(1.75rem,3.4vw,2.85rem)] leading-[1.12] font-semibold" style={{ color: "#0b1f33" }}>
                Tangential Flow Filtration
              </h2>
              <p className="mt-5 text-[1.0625rem] leading-relaxed" style={{ color: "#5b6b7a" }}>
                TFF is particularly relevant when scalability and controlled concentration are important. Unlike conventional dead-end filtration, the feed flows tangentially across the membrane surface, reducing direct accumulation of retained material on the membrane and allowing continuous processing. Membrane characteristics and operating conditions must be controlled because excessive membrane interaction, pressure or shear can influence recovery and particle integrity.
              </p>
            </div>
            <div className="lg:pt-24">
              <div className="space-y-6">
                {[
                  { label: "Flow Mode", detail: "Tangential rather than perpendicular to the membrane surface, enabling continuous operation and reduced fouling." },
                  { label: "Scalability", detail: "Well-suited for larger processing volumes while maintaining consistent membrane-area-to-feed ratios." },
                  { label: "Membrane Selection", detail: "Pore size and membrane chemistry must be matched to the target vesicle size range and buffer conditions." },
                  { label: "Process Control", detail: "Pressure, flow rate, temperature and transmembrane pressure require careful monitoring to preserve vesicle integrity." },
                ].map((item, i) => (
                  <ScrollReveal key={i}>
                    <div className="border-l-2 pl-6" style={{ borderColor: "#35b8b0" }}>
                      <h3 className="text-[1rem] font-semibold" style={{ color: "#0b1f33" }}>{item.label}</h3>
                      <p className="mt-2 text-[0.925rem] leading-relaxed" style={{ color: "#5b6b7a" }}>{item.detail}</p>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Size-Exclusion Chromatography ─── */}
      <section className="relative" style={{ backgroundColor: "#f7fafc", color: "#17212b" }}>
        <div className="mx-auto w-full max-w-[1240px] px-6 py-20 md:px-10 md:py-28">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr]">
            <div className="max-w-3xl">
              <p className="eyebrow">
                <span className="mr-3 inline-block h-px w-8 align-middle opacity-50" style={{ backgroundColor: "currentColor" }} />
                SEC DEEP DIVE
              </p>
              <h2 className="mt-5 text-[clamp(1.75rem,3.4vw,2.85rem)] leading-[1.12] font-semibold" style={{ color: "#0b1f33" }}>
                Size-Exclusion Chromatography
              </h2>
              <p className="mt-5 text-[1.0625rem] leading-relaxed" style={{ color: "#5b6b7a" }}>
                SEC separates particles according to their hydrodynamic size. Larger EVs generally pass around the pores of the stationary phase and elute earlier, whereas smaller soluble molecules penetrate the porous matrix and elute later. This makes SEC useful for separating EV-enriched fractions from many soluble proteins and low-molecular-weight components.
              </p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2">
              {[
                {
                  title: "Separation Principle",
                  desc: "Based on hydrodynamic radius rather than surface charge or density, providing a complementary mechanism to other purification methods.",
                },
                {
                  title: "EV-Enriched Fractions",
                  desc: "Larger vesicles elute in early fractions while soluble proteins and smaller molecules are retarded by the porous matrix.",
                },
                {
                  title: "Gentle Processing",
                  desc: "Low shear and minimal mechanical stress make SEC suitable for maintaining the structural integrity of delicate vesicle populations.",
                },
                {
                  title: "Fraction Collection",
                  desc: "Elution profiles allow selective collection of fractions enriched in target vesicles with reduced soluble protein contamination.",
                },
              ].map((card, i) => (
                <ScrollReveal key={i}>
                  <article className="card-flat h-full p-7">
                    <h3 className="text-[1.05rem] font-semibold" style={{ color: "#0b1f33" }}>{card.title}</h3>
                    <p className="mt-3 text-[0.925rem] leading-relaxed" style={{ color: "#5b6b7a" }}>{card.desc}</p>
                  </article>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── Characterization ─── */}
      <section className="relative" style={{ backgroundColor: "#fff", color: "#17212b" }}>
        <div className="mx-auto w-full max-w-[1240px] px-6 py-20 md:px-10 md:py-28">
          <div className="max-w-3xl">
            <p className="eyebrow">
              <span className="mr-3 inline-block h-px w-8 align-middle opacity-50" style={{ backgroundColor: "currentColor" }} />
              ANALYTICAL FRAMEWORK
            </p>
            <h2 className="mt-5 text-[clamp(1.75rem,3.4vw,2.85rem)] leading-[1.12] font-semibold" style={{ color: "#0b1f33" }}>
              Characterization
            </h2>
            <p className="mt-5 text-[1.0625rem] leading-relaxed" style={{ color: "#5b6b7a" }}>
              A scientifically meaningful EV product cannot be defined simply by a particle count. Characterization should examine multiple attributes.
            </p>
          </div>

          <div className="mt-12 overflow-hidden rounded-sm" style={{ border: "1px solid #dde5ec" }}>
            <table className="w-full text-left text-[0.95rem]">
              <thead>
                <tr style={{ backgroundColor: "#0b1f33" }}>
                  <th className="px-7 py-4 text-[0.8rem] font-semibold tracking-[0.12em] uppercase text-white">Characteristic</th>
                  <th className="px-7 py-4 text-[0.8rem] font-semibold tracking-[0.12em] uppercase text-white">Scientific Purpose</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { characteristic: "Particle concentration", purpose: "Determines particle abundance" },
                  { characteristic: "Particle-size distribution", purpose: "Evaluates the physical distribution of vesicles" },
                  { characteristic: "Morphology", purpose: "Assesses vesicular structure" },
                  { characteristic: "EV-associated proteins", purpose: "Supports biochemical identity" },
                  { characteristic: "Protein contaminants", purpose: "Provides information regarding preparation purity" },
                  { characteristic: "Source-cell information", purpose: "Establishes biological origin" },
                  { characteristic: "Functional assays", purpose: "Investigates biological activity where applicable" },
                ].map((row, i) => (
                  <tr key={i} style={{ backgroundColor: i % 2 === 0 ? "#fff" : "#f7fafc" }}>
                    <td className="px-7 py-4 font-medium" style={{ color: "#0b1f33" }}>{row.characteristic}</td>
                    <td className="px-7 py-4" style={{ color: "#5b6b7a" }}>{row.purpose}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-2">
            <ScrollReveal>
              <article className="card-flat h-full p-8">
                <h3 className="text-[1.1rem] font-semibold" style={{ color: "#0b1f33" }}>Nanoparticle Tracking Analysis</h3>
                <p className="mt-4 text-[0.95rem] leading-relaxed" style={{ color: "#5b6b7a" }}>
                  NTA can provide information about particle concentration and size distribution, tracking individual particles in Brownian motion to derive hydrodynamic diameter estimates. Particle concentration should not automatically be interpreted as biological potency.
                </p>
              </article>
            </ScrollReveal>
            <ScrollReveal>
              <article className="card-flat h-full p-8">
                <h3 className="text-[1.1rem] font-semibold" style={{ color: "#0b1f33" }}>Electron Microscopy</h3>
                <p className="mt-4 text-[0.95rem] leading-relaxed" style={{ color: "#5b6b7a" }}>
                  While electron microscopy can provide morphological information, sample preparation processes such as fixation and dehydration may alter vesicle appearance. Transmission and cryo-electron microscopy offer complementary insights into vesicle ultrastructure and bilayer organization.
                </p>
              </article>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <RelatedTechnologies currentSlug="exosome" />
      <CTABanner />
    </>
  );
}
