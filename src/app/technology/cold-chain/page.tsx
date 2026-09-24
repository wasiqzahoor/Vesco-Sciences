"use client";

import { TechHero, RelatedTechnologies, CTABanner } from "@/components/TechnologyPageShell";
import ScrollReveal from "@/components/ScrollReveal";
import SEOHead from "@/components/SEOHead";

export default function ColdChainTechnologyPage() {
  return (
    <>
      <SEOHead
        title="Cold Chain Technology — Vesco Science"
        description="Temperature-controlled handling, storage, and transport systems for sensitive biologics and regenerative products."
        keywords="cold chain biotech, temperature controlled transport, biologics logistics"
        canonical="https://www.vescoscience.com/technology/cold-chain"
      />
      <TechHero
        slug="cold-chain"
        title="Cold Chain Technology"
        description="Controlled Temperature From Production to Application"
      />

      {/* ─── Intro ─── */}
      <section className="relative" style={{ backgroundColor: "#fff", color: "#17212b" }}>
        <div className="mx-auto w-full max-w-[1240px] px-6 py-20 md:px-10 md:py-28">
          <div className="max-w-3xl">
            <p className="eyebrow">
              <span className="mr-3 inline-block h-px w-8 align-middle opacity-50" style={{ backgroundColor: "currentColor" }} />
              TEMPERATURE CONTROL
            </p>
            <h2 className="mt-5 text-[clamp(1.75rem,3.4vw,2.85rem)] leading-[1.12] font-semibold" style={{ color: "#0b1f33" }}>
              Why Cold Chain Matters
            </h2>
            <p className="mt-5 text-[1.0625rem] leading-relaxed" style={{ color: "#5b6b7a" }}>
              Temperature is a critical environmental variable for many biological products. Changes in temperature can influence molecular structure, aggregation, membrane integrity, chemical degradation and other quality attributes. Cold-chain technology represents more than refrigerated storage. It is a controlled temperature-management system extending across handling, storage and transportation.
            </p>
          </div>
        </div>
      </section>

      {/* ─── Temperature-Controlled Product Lifecycle ─── */}
      <section className="relative" style={{ backgroundColor: "#f7fafc", color: "#17212b" }}>
        <div className="mx-auto w-full max-w-[1240px] px-6 py-20 md:px-10 md:py-28">
          <div className="max-w-3xl">
            <p className="eyebrow">
              <span className="mr-3 inline-block h-px w-8 align-middle opacity-50" style={{ backgroundColor: "currentColor" }} />
              PRODUCT LIFECYCLE
            </p>
            <h2 className="mt-5 text-[clamp(1.75rem,3.4vw,2.85rem)] leading-[1.12] font-semibold" style={{ color: "#0b1f33" }}>
              Temperature-Controlled Product Lifecycle
            </h2>
            <p className="mt-5 text-[1.0625rem] leading-relaxed" style={{ color: "#5b6b7a" }}>
              At each stage, the product should remain within its defined temperature conditions.
            </p>
          </div>

          <div className="mt-12 grid gap-px sm:grid-cols-2 lg:grid-cols-4" style={{ backgroundColor: "#dde5ec" }}>
            {[
              { stage: "01", title: "Manufacturing", desc: "Production under controlled temperature conditions from the earliest processing steps." },
              { stage: "02", title: "Temporary Storage", desc: "Short-term holding within specified temperature ranges before further processing." },
              { stage: "03", title: "Packaging", desc: "Enclosure in temperature-appropriate packaging with validated thermal protection." },
              { stage: "04", title: "Transportation", desc: "Movement under continuous temperature control with monitoring throughout transit." },
            ].map((card, i) => (
              <ScrollReveal key={i}>
                <article className="h-full p-7" style={{ backgroundColor: "#fff" }}>
                  <span className="font-display text-[0.72rem] font-bold tracking-[0.18em]" style={{ color: "#35b8b0" }}>
                    {card.stage}
                  </span>
                  <h3 className="mt-4 text-[1.05rem] font-semibold" style={{ color: "#0b1f33" }}>{card.title}</h3>
                  <p className="mt-3 text-[0.925rem] leading-relaxed" style={{ color: "#5b6b7a" }}>{card.desc}</p>
                </article>
              </ScrollReveal>
            ))}
          </div>

          <div className="mt-px grid gap-px sm:grid-cols-2 lg:grid-cols-3" style={{ backgroundColor: "#dde5ec" }}>
            {[
              { stage: "05", title: "Receiving", desc: "Verification of temperature conditions upon arrival at the destination facility." },
              { stage: "06", title: "Final Storage", desc: "Long-term storage under validated conditions with continuous temperature monitoring." },
              { stage: "07", title: "Professional Handling", desc: "Controlled manipulation by trained personnel following established temperature protocols." },
            ].map((card, i) => (
              <ScrollReveal key={i}>
                <article className="h-full p-7" style={{ backgroundColor: "#fff" }}>
                  <span className="font-display text-[0.72rem] font-bold tracking-[0.18em]" style={{ color: "#35b8b0" }}>
                    {card.stage}
                  </span>
                  <h3 className="mt-4 text-[1.05rem] font-semibold" style={{ color: "#0b1f33" }}>{card.title}</h3>
                  <p className="mt-3 text-[0.925rem] leading-relaxed" style={{ color: "#5b6b7a" }}>{card.desc}</p>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Cold-Chain Control Includes ─── */}
      <section className="relative" style={{ backgroundColor: "#0b1f33" }}>
        <div className="mx-auto w-full max-w-[1240px] px-6 py-20 text-white md:px-10 md:py-28">
          <div className="max-w-3xl">
            <p className="eyebrow" style={{ color: "#35b8b0" }}>
              <span className="mr-3 inline-block h-px w-8 align-middle opacity-50" style={{ backgroundColor: "currentColor" }} />
              CONTROL FRAMEWORK
            </p>
            <h2 className="mt-5 text-[clamp(1.75rem,3.4vw,2.85rem)] leading-[1.12] font-semibold text-white">
              Cold-Chain Control Includes
            </h2>
          </div>

          <div className="mt-12 grid gap-px sm:grid-cols-2 lg:grid-cols-4" style={{ backgroundColor: "rgba(255,255,255,0.1)" }}>
            {[
              "Defined storage temperature",
              "Controlled transportation conditions",
              "Temperature monitoring",
              "Handling procedures",
              "Packaging compatibility",
              "Excursion assessment",
              "Storage-condition documentation",
              "Product-specific stability evaluation",
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
      </section>

      <RelatedTechnologies currentSlug="cold-chain" />
      <CTABanner />
    </>
  );
}
