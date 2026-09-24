"use client";

import Link from "next/link";
import { useI18n } from "@/i18n/context";

const BASE = "";

export default function Footer() {
  const { t } = useI18n();
  return (
    <footer className="relative text-white" style={{ backgroundColor: "#071726" }}>
      <div className="absolute inset-0 navy-grid" style={{ opacity: 0.5 }} />
      <div className="relative mx-auto w-full max-w-[1240px] px-6 py-20 md:px-10">
        <div className="grid gap-14 lg:grid-cols-[1.4fr_2.6fr]">
          <div>
            <Link href="/" className="inline-flex items-center gap-2.5">
              <span className="font-display text-[1.05rem] font-bold tracking-[0.18em] uppercase">VESCO</span>
              <span className="font-display text-[1.05rem] font-light tracking-[0.18em] uppercase" style={{ color: "#35b8b0" }}>SCIENCE CO., LTD.</span>
            </Link>
            <p className="mt-5 max-w-xs text-[0.9rem] leading-relaxed" style={{ color: "rgba(255,255,255,0.55)" }}>{t.footer.tagline}</p>
            <dl className="mt-8 space-y-3 text-[0.85rem]">
              <div>
                <dt className="text-[0.68rem] font-semibold tracking-[0.16em] uppercase" style={{ color: "#35b8b0" }}>{t.footer.addressLabel}</dt>
                <dd className="mt-1" style={{ color: "rgba(255,255,255,0.65)" }}>{t.footer.address}</dd>
              </div>
              <div>
                <dt className="text-[0.68rem] font-semibold tracking-[0.16em] uppercase" style={{ color: "#35b8b0" }}>{t.footer.emailLabel}</dt>
                <dd className="mt-1" style={{ color: "rgba(255,255,255,0.65)" }}>
                  <a href={`mailto:${t.footer.email}`} className="transition-colors hover:text-teal">{t.footer.email}</a>
                </dd>
              </div>
            </dl>
          </div>
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            <div>
              <h3 className="text-[0.68rem] font-semibold tracking-[0.18em] uppercase" style={{ color: "rgba(255,255,255,0.45)" }}>{t.footer.columns.company}</h3>
              <ul className="mt-5 space-y-3">
                <li><Link href="/about" className="text-[0.88rem] transition-colors hover:text-teal" style={{ color: "rgba(255,255,255,0.7)" }}>{t.footer.columns.companyLinks[0]}</Link></li>
                <li><Link href="/research" className="text-[0.88rem] transition-colors hover:text-teal" style={{ color: "rgba(255,255,255,0.7)" }}>{t.footer.columns.companyLinks[1]}</Link></li>
                <li><Link href="/facility" className="text-[0.88rem] transition-colors hover:text-teal" style={{ color: "rgba(255,255,255,0.7)" }}>{t.footer.columns.companyLinks[2]}</Link></li>
                <li><Link href="/quality" className="text-[0.88rem] transition-colors hover:text-teal" style={{ color: "rgba(255,255,255,0.7)" }}>{t.footer.columns.companyLinks[3]}</Link></li>
                <li><Link href="/about/network" className="text-[0.88rem] transition-colors hover:text-teal" style={{ color: "rgba(255,255,255,0.7)" }}>{t.footer.columns.companyLinks[4]}</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-[0.68rem] font-semibold tracking-[0.18em] uppercase" style={{ color: "rgba(255,255,255,0.45)" }}>{t.footer.columns.tech}</h3>
              <ul className="mt-5 space-y-3">
                <li><Link href="/technology/exosome" className="text-[0.88rem] transition-colors hover:text-teal" style={{ color: "rgba(255,255,255,0.7)" }}>{t.footer.columns.techLinks[0]}</Link></li>
                <li><Link href="/technology/pdrn-pn" className="text-[0.88rem] transition-colors hover:text-teal" style={{ color: "rgba(255,255,255,0.7)" }}>{t.footer.columns.techLinks[1]}</Link></li>
                <li><Link href="/technology/lyophilization" className="text-[0.88rem] transition-colors hover:text-teal" style={{ color: "rgba(255,255,255,0.7)" }}>{t.footer.columns.techLinks[2]}</Link></li>
                <li><Link href="/technology/formulation" className="text-[0.88rem] transition-colors hover:text-teal" style={{ color: "rgba(255,255,255,0.7)" }}>{t.footer.columns.techLinks[3]}</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-[0.68rem] font-semibold tracking-[0.18em] uppercase" style={{ color: "rgba(255,255,255,0.45)" }}>{t.footer.columns.services}</h3>
              <ul className="mt-5 space-y-3">
                <li><Link href="/contact" className="text-[0.88rem] transition-colors hover:text-teal" style={{ color: "rgba(255,255,255,0.7)" }}>{t.footer.columns.servicesLinks[0]}</Link></li>
                <li><Link href="/contact" className="text-[0.88rem] transition-colors hover:text-teal" style={{ color: "rgba(255,255,255,0.7)" }}>{t.footer.columns.servicesLinks[1]}</Link></li>
                <li><Link href="/contact" className="text-[0.88rem] transition-colors hover:text-teal" style={{ color: "rgba(255,255,255,0.7)" }}>{t.footer.columns.servicesLinks[2]}</Link></li>
                <li><Link href="/about/network" className="text-[0.88rem] transition-colors hover:text-teal" style={{ color: "rgba(255,255,255,0.7)" }}>{t.footer.columns.servicesLinks[3]}</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-[0.68rem] font-semibold tracking-[0.18em] uppercase" style={{ color: "rgba(255,255,255,0.45)" }}>{t.footer.columns.resources}</h3>
              <ul className="mt-5 space-y-3">
                <li><Link href="/insights" className="text-[0.88rem] transition-colors hover:text-teal" style={{ color: "rgba(255,255,255,0.7)" }}>{t.footer.columns.resourcesLinks[0]}</Link></li>
                <li><Link href="/research" className="text-[0.88rem] transition-colors hover:text-teal" style={{ color: "rgba(255,255,255,0.7)" }}>{t.footer.columns.resourcesLinks[1]}</Link></li>
                <li><Link href="/resources" className="text-[0.88rem] transition-colors hover:text-teal" style={{ color: "rgba(255,255,255,0.7)" }}>{t.footer.columns.resourcesLinks[2]}</Link></li>
                <li><Link href="/faq" className="text-[0.88rem] transition-colors hover:text-teal" style={{ color: "rgba(255,255,255,0.7)" }}>{t.footer.columns.resourcesLinks[3]}</Link></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-16 flex flex-col gap-3 pt-7 text-[0.78rem] md:flex-row md:items-center md:justify-between" style={{ borderTop: "1px solid rgba(255,255,255,0.1)", color: "rgba(255,255,255,0.4)" }}>
          <p>{t.footer.copyright}</p>
          <p><a href="https://www.newaitechsofts.com" target="_blank" rel="noopener noreferrer" className="transition-colors" style={{ color: "rgba(255,255,255,0.55)" }}>{t.footer.disclaimer}</a></p>
        </div>
      </div>
    </footer>
  );
}
