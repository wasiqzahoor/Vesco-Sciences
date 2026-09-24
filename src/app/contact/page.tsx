"use client";

import { useI18n } from "@/i18n/context";
import ScrollReveal from "@/components/ScrollReveal";
import SEOHead from "@/components/SEOHead";

export default function ContactPage() {
  const { t } = useI18n();
  return (
    <>
      <SEOHead
        title="Contact Us — Vesco Science"
        description="Contact Vesco Science for product inquiries, custom manufacturing, partnership opportunities, and technical support."
        keywords="contact Vesco Science, biotech inquiry, custom manufacturing contact"
        canonical="https://www.vescoscience.com/contact"
      />
      <section style={{ backgroundColor: "var(--navy-deep)" }} className="pt-24 sm:pt-28 md:pt-32 pb-12 md:pb-20 text-white">
        <div className="w-full max-w-[1240px] mx-auto px-4 sm:px-6 md:px-8 lg:px-10">
          <ScrollReveal>
            <span className="inline-block text-[0.72rem] font-bold tracking-[0.14em] uppercase mb-3" style={{ color: "var(--teal)" }}>{t.contact.eyebrow}</span>
            <h1 className="font-display font-extrabold text-white leading-[1.03] mb-4 md:mb-5 text-[clamp(1.75rem,4vw,3.5rem)]">{t.contact.title}</h1>
            <p className="text-base md:text-lg max-w-[600px] leading-relaxed" style={{ color: "rgba(255,255,255,0.65)" }}>{t.contact.subtitle}</p>
          </ScrollReveal>
        </div>
      </section>
      <section className="bg-white py-12 md:py-20 lg:py-28">
        <div className="w-full max-w-[1240px] mx-auto px-4 sm:px-6 md:px-8 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
            <ScrollReveal>
              <form className="space-y-4 md:space-y-6">
                {[
                  { label: t.contact.name, type: "text" },
                  { label: t.contact.email, type: "email" },
                  { label: t.contact.company, type: "text" },
                  { label: t.contact.subject, type: "text" },
                ].map((field, i) => (
                  <div key={i}>
                    <label className="block text-[0.78rem] md:text-[0.82rem] font-semibold mb-1.5 md:mb-2">{field.label}</label>
                    <input type={field.type} className="w-full px-3 md:px-4 py-2.5 md:py-3 border rounded-lg text-[0.85rem] md:text-[0.9rem] focus:outline-none transition-colors" style={{ borderColor: "var(--hairline)" }} />
                  </div>
                ))}
                <div>
                  <label className="block text-[0.78rem] md:text-[0.82rem] font-semibold mb-1.5 md:mb-2">{t.contact.message}</label>
                  <textarea rows={5} className="w-full px-3 md:px-4 py-2.5 md:py-3 border rounded-lg text-[0.85rem] md:text-[0.9rem] focus:outline-none transition-colors resize-none" style={{ borderColor: "var(--hairline)" }} />
                </div>
                <button type="submit" className="text-white px-6 md:px-8 py-3 md:py-3.5 rounded-lg md:rounded-[10px] text-sm md:text-[0.9rem] font-semibold transition-all" style={{ backgroundColor: "var(--teal)" }}>{t.contact.submit}</button>
              </form>
            </ScrollReveal>
            <ScrollReveal>
              <div className="border rounded-xl md:rounded-[14px] p-6 md:p-8" style={{ backgroundColor: "var(--card-bg)", borderColor: "var(--hairline)" }}>
                <h3 className="font-display font-bold text-base md:text-lg mb-5 md:mb-6">{t.contact.info.title}</h3>
                <div className="space-y-3 md:space-y-4">
                  <div>
                    <p className="text-[0.65rem] md:text-[0.72rem] mb-0.5" style={{ color: "var(--muted)" }}>{t.contact.info.locationLabel}</p>
                    <p className="text-[0.85rem] md:text-[0.9rem] font-medium">📍 {t.contact.info.address}</p>
                  </div>
                  <div>
                    <p className="text-[0.65rem] md:text-[0.72rem] mb-0.5" style={{ color: "var(--muted)" }}>{t.contact.info.emailLabel}</p>
                    <p className="text-[0.85rem] md:text-[0.9rem] font-medium">✉️ {t.contact.info.email}</p>
                  </div>
                </div>
                <div className="mt-6 md:mt-8 p-4 md:p-6 bg-white rounded-lg md:rounded-xl border" style={{ borderColor: "var(--hairline)" }}>
                  <p className="text-[0.78rem] md:text-[0.82rem] leading-relaxed" style={{ color: "var(--muted)" }}>{t.contact.info.infoText}</p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  );
}
