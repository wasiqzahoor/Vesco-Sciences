"use client";

import { TechHero, RelatedTechnologies, CTABanner } from "@/components/TechnologyPageShell";
import SEOHead from "@/components/SEOHead";

const developmentParameters = [
  { area: "Active concentration", example: "Target concentration and loading" },
  { area: "Molecular composition", example: "EV, PN/PDRN, peptide or HA components" },
  { area: "pH", example: "Buffer-system optimization" },
  { area: "Osmolality", example: "Physiological compatibility considerations" },
  { area: "Viscosity", example: "Injection/application characteristics" },
  { area: "Physical state", example: "Liquid, frozen or lyophilized" },
  { area: "Stabilization", example: "Excipient and process optimization" },
  { area: "Reconstitution", example: "Time, clarity and dispersion" },
  { area: "Packaging", example: "Vial, syringe and container compatibility" },
  { area: "Storage", example: "Temperature and stability requirements" },
];

const developmentCycle = [
  { step: "Target Definition", desc: "Establish the desired product characteristics" },
  { step: "Raw Material Evaluation", desc: "Assess identity, quality and compatibility" },
  { step: "Formulation Screening", desc: "Evaluate different concentrations, buffers and stabilizing systems" },
  { step: "Process Optimization", desc: "Establish suitable mixing, filtration, concentration, freezing or lyophilization conditions" },
  { step: "Analytical Characterization", desc: "Measure relevant physical, chemical and biological attributes" },
  { step: "Stability Assessment", desc: "Evaluate product behavior under defined storage conditions" },
  { step: "Scale-Up Considerations", desc: "Assess whether laboratory conditions can be translated into controlled larger-scale process" },
];

export default function CustomTechnologyPage() {
  return (
    <>
      <SEOHead
        title="Custom Development — Vesco Science"
        description="Custom formulation and product development services tailored to specific concentration, packaging, and regulatory requirements."
        keywords="custom biotech development, bespoke formulation, private label biotech"
        canonical="https://www.vescoscience.com/technology/custom"
      />
      <TechHero
        slug="custom"
        title="Custom Formulation Technology"
        description="From Scientific Concept to Application-Specific Product"
      />

      <section className="relative" style={{ backgroundColor: "#f7fafc", color: "#17212b" }}>
        <div className="mx-auto w-full max-w-[1240px] px-6 py-20 md:px-10 md:py-28">
          <div className="max-w-3xl">
            <p className="eyebrow">
              <span className="mr-3 inline-block h-px w-8 align-middle opacity-50" style={{ backgroundColor: "currentColor" }} />
              Technology
            </p>
            <h2 className="mt-5 text-[clamp(1.75rem,3.4vw,2.85rem)] leading-[1.12] font-semibold" style={{ color: "#0b1f33" }}>
              Custom Formulation Development
            </h2>
            <p className="mt-5 text-[1.0625rem] leading-relaxed" style={{ color: "#5b6b7a" }}>
              Different biological materials require different formulation strategies. Vesco Science supports custom
              formulation development in which the formulation architecture and processing conditions are established
              according to defined technical requirements. Custom development can begin with a target product profile
              and progress through laboratory formulation screening, optimization, process development and stability
              evaluation.
            </p>
          </div>
        </div>
      </section>

      <section className="relative" style={{ backgroundColor: "#fff", color: "#17212b" }}>
        <div className="mx-auto w-full max-w-[1240px] px-6 py-20 md:px-10 md:py-28">
          <div className="max-w-3xl">
            <p className="eyebrow">
              <span className="mr-3 inline-block h-px w-8 align-middle opacity-50" style={{ backgroundColor: "currentColor" }} />
              Parameters
            </p>
            <h2 className="mt-5 text-[clamp(1.75rem,3.4vw,2.85rem)] leading-[1.12] font-semibold" style={{ color: "#0b1f33" }}>
              Custom Development Parameters
            </h2>
          </div>
          <div className="mt-12 overflow-hidden rounded-sm" style={{ border: "1px solid #dde5ec" }}>
            <div className="grid grid-cols-[1fr_1.6fr] text-[0.8rem] font-semibold tracking-[0.12em] uppercase" style={{ backgroundColor: "#0b1f33", color: "#fff" }}>
              <div className="px-7 py-4">Development Area</div>
              <div className="px-7 py-4">Examples</div>
            </div>
            {developmentParameters.map((param, i) => (
              <div
                key={i}
                className="grid grid-cols-[1fr_1.6fr] text-[0.95rem]"
                style={{
                  backgroundColor: i % 2 === 0 ? "#f7fafc" : "#fff",
                  borderBottom: i < developmentParameters.length - 1 ? "1px solid #dde5ec" : "none",
                }}
              >
                <div className="px-7 py-4 font-medium" style={{ color: "#0b1f33" }}>{param.area}</div>
                <div className="px-7 py-4" style={{ color: "#5b6b7a" }}>{param.example}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative" style={{ backgroundColor: "#f7fafc", color: "#17212b" }}>
        <div className="mx-auto w-full max-w-[1240px] px-6 py-20 md:px-10 md:py-28">
          <div className="max-w-3xl">
            <p className="eyebrow">
              <span className="mr-3 inline-block h-px w-8 align-middle opacity-50" style={{ backgroundColor: "currentColor" }} />
              Process
            </p>
            <h2 className="mt-5 text-[clamp(1.75rem,3.4vw,2.85rem)] leading-[1.12] font-semibold" style={{ color: "#0b1f33" }}>
              Development Cycle
            </h2>
          </div>
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {developmentCycle.map((item, i) => (
              <div key={i} className="card-flat h-full p-8">
                <span
                  className="font-display text-[0.72rem] font-bold tracking-[0.18em]"
                  style={{ color: "#35b8b0" }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-4 text-[1.1rem] font-semibold" style={{ color: "#0b1f33" }}>{item.step}</h3>
                <p className="mt-4 text-[0.95rem] leading-relaxed" style={{ color: "#5b6b7a" }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <RelatedTechnologies currentSlug="custom" />
      <CTABanner />
    </>
  );
}
