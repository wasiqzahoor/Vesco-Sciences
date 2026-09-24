"use client";

import { TechHero, RelatedTechnologies, CTABanner } from "@/components/TechnologyPageShell";
import ScrollReveal from "@/components/ScrollReveal";
import SEOHead from "@/components/SEOHead";

export default function LyophilizationTechnologyPage() {
  return (
    <>
      <SEOHead
        title="Lyophilization Technology — Vesco Science"
        description="Freeze-drying and lyophilization technology for biologics, preserving active ingredient stability and extending shelf life."
        keywords="lyophilization, freeze drying biologics, shelf life extension, biologics preservation"
        canonical="https://www.vescoscience.com/technology/lyophilization"
      />
      <TechHero
        slug="lyophilization"
        title="Lyophilization Technology"
        description="Freeze-Drying • Stabilization • Reconstitution Engineering"
      />

      {/* ── Intro ─────────────────────────────────────────── */}
      <section className="relative" style={{ backgroundColor: "#f7fafc", color: "#17212b" }}>
        <div className="mx-auto w-full max-w-[1240px] px-6 py-20 md:px-10 md:py-28">
          <div className="max-w-3xl">
            <p className="eyebrow">
              <span
                className="mr-3 inline-block h-px w-8 align-middle opacity-50"
                style={{ backgroundColor: "currentColor" }}
              />
              Technology
            </p>
            <h2
              className="mt-5 text-[clamp(1.75rem,3.4vw,2.85rem)] leading-[1.12] font-semibold"
              style={{ color: "#0b1f33" }}
            >
              Lyophilization Technology
            </h2>
          </div>

          <div className="mt-14 grid gap-8 md:grid-cols-2">
            <ScrollReveal>
              <div className="card-flat h-full p-8">
                <p className="text-[1.0625rem] leading-relaxed" style={{ color: "#5b6b7a" }}>
                  Lyophilization, commonly known as freeze-drying, is an important stabilization
                  technology for temperature-sensitive biological materials. The process removes water
                  primarily through sublimation of ice under reduced pressure, followed by removal of
                  more strongly associated residual water during secondary drying. The resulting dry
                  matrix can provide a substantially different stability environment from the original
                  aqueous formulation.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal>
              <div className="card-flat h-full p-8">
                <p className="text-[1.0625rem] leading-relaxed" style={{ color: "#5b6b7a" }}>
                  Lyophilization is not simply &lsquo;freezing and drying.&rsquo; It is a
                  process-development problem involving formulation composition, freezing behavior,
                  heat and mass transfer, product temperature, chamber pressure and residual moisture.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── Stage 1 — Freezing ───────────────────────────── */}
      <section className="relative" style={{ backgroundColor: "#0b1f33", color: "#fff" }}>
        <div className="mx-auto w-full max-w-[1240px] px-6 py-20 md:px-10 md:py-28">
          <div className="max-w-3xl">
            <p className="eyebrow" style={{ color: "#35b8b0" }}>
              <span
                className="mr-3 inline-block h-px w-8 align-middle opacity-50"
                style={{ backgroundColor: "currentColor" }}
              />
              Process Stage 01
            </p>
            <h2
              className="mt-5 text-[clamp(1.75rem,3.4vw,2.85rem)] leading-[1.12] font-semibold"
              style={{ color: "#fff" }}
            >
              Stage 1 — Freezing
            </h2>
          </div>

          <div className="mt-14 grid gap-8 md:grid-cols-2">
            <ScrollReveal>
              <p className="text-[1.0625rem] leading-relaxed" style={{ color: "rgba(255,255,255,0.7)" }}>
                During freezing, water crystallizes into ice while solutes become concentrated in the
                unfrozen phase. The freezing process influences ice-crystal morphology and therefore
                the pore structure of the final dried cake.
              </p>
            </ScrollReveal>
            <ScrollReveal>
              <div>
                <p
                  className="text-[0.8rem] font-semibold tracking-[0.14em] uppercase mb-4"
                  style={{ color: "#35b8b0" }}
                >
                  Freezing conditions can affect
                </p>
                <ul className="space-y-3">
                  {[
                    "Product morphology",
                    "Drying resistance",
                    "Residual moisture",
                    "Reconstitution time",
                    "Product stability",
                    "Primary drying performance",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-3">
                      <span
                        className="inline-block h-1.5 w-1.5 flex-shrink-0 rounded-full"
                        style={{ backgroundColor: "#35b8b0" }}
                      />
                      <span
                        className="text-[1rem] leading-relaxed"
                        style={{ color: "rgba(255,255,255,0.8)" }}
                      >
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          </div>
        </div>
        <div
          className="absolute inset-x-0 bottom-0 h-px"
          style={{ background: "linear-gradient(to right, transparent, rgba(53,184,176,0.3), transparent)" }}
        />
      </section>

      {/* ── Stage 2 — Primary Drying ─────────────────────── */}
      <section className="relative" style={{ backgroundColor: "#f7fafc", color: "#17212b" }}>
        <div className="mx-auto w-full max-w-[1240px] px-6 py-20 md:px-10 md:py-28">
          <div className="max-w-3xl">
            <p className="eyebrow">
              <span
                className="mr-3 inline-block h-px w-8 align-middle opacity-50"
                style={{ backgroundColor: "currentColor" }}
              />
              Process Stage 02
            </p>
            <h2
              className="mt-5 text-[clamp(1.75rem,3.4vw,2.85rem)] leading-[1.12] font-semibold"
              style={{ color: "#0b1f33" }}
            >
              Stage 2 — Primary Drying
            </h2>
          </div>

          <div className="mt-14 max-w-3xl">
            <ScrollReveal>
              <p className="text-[1.0625rem] leading-relaxed" style={{ color: "#5b6b7a" }}>
                During primary drying, ice is removed through sublimation under controlled temperature
                and pressure. The product must remain within an appropriate temperature range to avoid
                undesirable structural changes such as collapse or loss of critical quality attributes.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── Stage 3 — Secondary Drying ───────────────────── */}
      <section className="relative" style={{ backgroundColor: "#0b1f33", color: "#fff" }}>
        <div className="mx-auto w-full max-w-[1240px] px-6 py-20 md:px-10 md:py-28">
          <div className="max-w-3xl">
            <p className="eyebrow" style={{ color: "#35b8b0" }}>
              <span
                className="mr-3 inline-block h-px w-8 align-middle opacity-50"
                style={{ backgroundColor: "currentColor" }}
              />
              Process Stage 03
            </p>
            <h2
              className="mt-5 text-[clamp(1.75rem,3.4vw,2.85rem)] leading-[1.12] font-semibold"
              style={{ color: "#fff" }}
            >
              Stage 3 — Secondary Drying
            </h2>
          </div>

          <div className="mt-14 max-w-3xl">
            <ScrollReveal>
              <p className="text-[1.0625rem] leading-relaxed" style={{ color: "rgba(255,255,255,0.7)" }}>
                Once most of the ice has been removed, secondary drying is used to reduce residual
                moisture through desorption. Residual moisture is not simply a parameter to minimize
                without limit. The appropriate moisture level depends on the biological material and
                formulation.
              </p>
            </ScrollReveal>
          </div>
        </div>
        <div
          className="absolute inset-x-0 bottom-0 h-px"
          style={{ background: "linear-gradient(to right, transparent, rgba(53,184,176,0.3), transparent)" }}
        />
      </section>

      {/* ── Reconstitution Engineering ────────────────────── */}
      <section className="relative" style={{ backgroundColor: "#f7fafc", color: "#17212b" }}>
        <div className="mx-auto w-full max-w-[1240px] px-6 py-20 md:px-10 md:py-28">
          <div className="max-w-3xl">
            <p className="eyebrow">
              <span
                className="mr-3 inline-block h-px w-8 align-middle opacity-50"
                style={{ backgroundColor: "currentColor" }}
              />
              Formulation Science
            </p>
            <h2
              className="mt-5 text-[clamp(1.75rem,3.4vw,2.85rem)] leading-[1.12] font-semibold"
              style={{ color: "#0b1f33" }}
            >
              Reconstitution Engineering
            </h2>
          </div>

          <div className="mt-14 max-w-3xl">
            <ScrollReveal>
              <p className="text-[1.0625rem] leading-relaxed mb-8" style={{ color: "#5b6b7a" }}>
                For a lyophilized biological product, the development process does not end when the
                powder is produced. The final product should be evaluated for:
              </p>
            </ScrollReveal>

            <ScrollReveal>
              <div className="space-y-4">
                {[
                  { label: "Cake appearance", arrow: true },
                  { label: "Reconstitution time", arrow: true },
                  { label: "Clarity / dispersion", arrow: true },
                  { label: "Particle characteristics", arrow: true },
                  { label: "Chemical / biological integrity", arrow: true },
                  { label: "Storage stability", arrow: false },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-4 rounded-sm px-6 py-4 transition-colors"
                    style={{ backgroundColor: "#fff", border: "1px solid #dde5ec" }}
                  >
                    <span
                      className="inline-block h-1.5 w-1.5 flex-shrink-0 rounded-full"
                      style={{ backgroundColor: "#35b8b0" }}
                    />
                    <span
                      className="text-[1rem] font-medium"
                      style={{ color: "#0b1f33" }}
                    >
                      {item.label}
                    </span>
                    {item.arrow && (
                      <span className="ml-auto text-[0.85rem]" style={{ color: "#35b8b0" }}>
                        →
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <RelatedTechnologies currentSlug="lyophilization" />
      <CTABanner />
    </>
  );
}
