"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useI18n } from "@/i18n/context";

const BASE = "";

interface MobileNavItem {
  href: string;
  label: string;
  items?: { href: string; label: string; desc?: string }[];
}

export default function Header() {
  const { locale, setLocale, t } = useI18n();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  useEffect(() => {
    if (!mobileOpen) setMobileExpanded(null);
  }, [mobileOpen]);

  const mobileNav: MobileNavItem[] = [
    { href: "/about", label: t.nav.about, items: [
      { href: "/about", label: t.nav.about },
      { href: "/about/mission", label: t.nav.mission },
      { href: "/about/network", label: t.nav.network },
      { href: "/quality", label: t.nav.quality },
    ]},
    { href: "/technology", label: t.nav.technology, items: [
      { href: "/technology/exosome", label: t.nav.exosomeTech },
      { href: "/technology/pdrn-pn", label: t.nav.pdrnTech },
      { href: "/technology/lyophilization", label: t.nav.lyoTech },
      { href: "/technology/formulation", label: t.nav.formTech },
      { href: "/technology/cold-chain", label: t.nav.coldTech },
      { href: "/technology/custom", label: t.nav.customTech },
    ]},
    { href: "/products", label: t.nav.products, items: [
      { href: "/products/exosome", label: t.nav.exosomeProd },
      { href: "/products/dermal-fillers", label: t.nav.dermalFillersProd },
      { href: "/products/peptide-bio-remodeling", label: t.nav.peptideProd },
      { href: "/products/botulinum-toxin", label: t.nav.botulinumProd },
      { href: "/products/pdrn-pn", label: t.nav.pdrnProd },
    ]},
    { href: "/research", label: t.nav.researchAndDev },
    { href: "/quality", label: t.nav.qualityMgmt, items: [
      { href: "/quality", label: t.nav.qualityMgmt },
      { href: "/insights", label: t.nav.insights },
      { href: "/faq", label: t.nav.faq },
    ]},
  ];

  return (
    <header
      className="fixed inset-x-0 top-0 z-50 transition-all duration-300"
      style={{
        backgroundColor: "#fff",
        borderBottom: "1px solid rgba(0,0,0,0.08)",
        boxShadow: scrolled ? "0 1px 8px rgba(0,0,0,0.06)" : "none",
      }}
    >
      <div className="mx-auto flex h-[72px] w-full max-w-[1240px] items-center justify-between px-6 md:px-10">
        <Link href="/" className="group flex items-center gap-2.5 shrink-0">
          <img
            src={`${BASE}/assets/vesco_logo-KfffcaeC.png`}
            alt="Vesco Science"
            className="h-10 w-auto max-w-[180px] object-contain"
            loading="eager"
            decoding="async"
          />
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          <NavLink href="/about" label={t.nav.about} items={[
            { href: "/about", label: t.nav.about },
            { href: "/about/mission", label: t.nav.mission },
            { href: "/about/network", label: t.nav.network },
            { href: "/quality", label: t.nav.quality },
          ]} />
          <NavLink href="/technology" label={t.nav.technology} items={[
            { href: "/technology/exosome", label: t.nav.exosomeTech, desc: t.nav.exosomeDesc },
            { href: "/technology/pdrn-pn", label: t.nav.pdrnTech, desc: t.nav.pdrnDesc },
            { href: "/technology/lyophilization", label: t.nav.lyoTech, desc: t.nav.lyoDesc },
            { href: "/technology/formulation", label: t.nav.formTech, desc: t.nav.formDesc },
            { href: "/technology/cold-chain", label: t.nav.coldTech, desc: t.nav.coldDesc },
            { href: "/technology/custom", label: t.nav.customTech, desc: t.nav.customDesc },
          ]} />
          <NavLink href="/products" label={t.nav.products} items={[
            { href: "/products/exosome", label: t.nav.exosomeProd },
            { href: "/products/dermal-fillers", label: t.nav.dermalFillersProd },
            { href: "/products/peptide-bio-remodeling", label: t.nav.peptideProd },
            { href: "/products/botulinum-toxin", label: t.nav.botulinumProd },
            { href: "/products/pdrn-pn", label: t.nav.pdrnProd },
          ]} />
          <Link href="/research" className="rounded-sm px-3 py-2 text-[0.78rem] font-medium tracking-[0.06em] transition-colors" style={{ color: "rgba(11,31,51,0.7)" }}>
            {t.nav.researchAndDev}
          </Link>
          <NavLink href="/quality" label={t.nav.qualityMgmt} items={[
            { href: "/quality", label: t.nav.qualityMgmt },
            { href: "/insights", label: t.nav.insights },
            { href: "/faq", label: t.nav.faq },
          ]} />
        </nav>

        <div className="flex items-center gap-4">
          <div className="hidden sm:flex items-center rounded-sm" style={{ border: "1px solid rgba(11,31,51,0.2)" }}>
            <button onClick={() => setLocale("en")} className="px-3 py-1.5 text-[0.7rem] font-semibold tracking-[0.12em] uppercase transition-colors" style={locale === "en" ? { color: "rgba(11,31,51,0.6)" } : { backgroundColor: "#35b8b0", color: "#05231f" }}>
              EN
            </button>
            <button onClick={() => setLocale("ko")} className="px-3 py-1.5 text-[0.7rem] font-semibold tracking-[0.12em] uppercase transition-colors" style={locale === "ko" ? { color: "rgba(11,31,51,0.6)" } : { backgroundColor: "#35b8b0", color: "#05231f" }}>
              KO
            </button>
          </div>
          <Link href="/contact" className="hidden rounded-sm px-5 py-2.5 text-[0.72rem] font-semibold tracking-[0.14em] uppercase transition-colors md:inline-flex" style={{ backgroundColor: "#35b8b0", color: "#05231f" }}>
            {t.nav.contact}
          </Link>
          <button className="relative z-50 flex h-9 w-9 flex-col items-center justify-center gap-1.5 lg:hidden" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Toggle menu">
            <span className="block w-5 h-px transition-transform duration-300" style={{ backgroundColor: "#0b1f33", transform: mobileOpen ? "rotate(45deg) translateY(3px)" : "none" }} />
            <span className="block w-5 h-px transition-transform duration-300" style={{ backgroundColor: "#0b1f33", transform: mobileOpen ? "rotate(-45deg) translateY(-3px)" : "none" }} />
          </button>
        </div>
      </div>

      {/* Mobile Sidebar */}
      <div
        className="lg:hidden fixed inset-0 z-40 pt-[72px] overflow-y-auto transition-transform duration-300 ease-in-out"
        style={{
          width: "min(320px, 85vw)",
          backgroundColor: "#fff",
          transform: mobileOpen ? "translateX(0)" : "translateX(-100%)",
          borderRight: "1px solid rgba(0,0,0,0.08)",
          boxShadow: mobileOpen ? "4px 0 24px rgba(0,0,0,0.08)" : "none",
        }}
      >
        <div className="flex flex-col px-6 py-6">
          {mobileNav.map((item) => {
            const hasChildren = item.items && item.items.length > 0;
            const isExpanded = mobileExpanded === item.href;
            return (
              <div key={item.href} style={{ borderBottom: "1px solid rgba(0,0,0,0.06)" }}>
                {hasChildren ? (
                  <div className="flex items-center justify-between">
                    <Link
                      href={item.href}
                      className="flex-1 py-4 text-[0.95rem] font-medium transition-colors"
                      style={{ color: "rgba(11,31,51,0.85)" }}
                      onClick={() => setMobileOpen(false)}
                    >
                      {item.label}
                    </Link>
                    <button
                      className="flex h-8 w-8 items-center justify-center shrink-0"
                      onClick={() => setMobileExpanded(isExpanded ? null : item.href)}
                      aria-label={`Expand ${item.label}`}
                    >
                      <svg
                        className="h-4 w-4 transition-transform duration-300"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        style={{ color: "#5b6b7a", transform: isExpanded ? "rotate(180deg)" : "none" }}
                      >
                        <path d="m6 9 6 6 6-6" />
                      </svg>
                    </button>
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    className="block py-4 text-[0.95rem] font-medium transition-colors"
                    style={{ color: "rgba(11,31,51,0.85)" }}
                    onClick={() => setMobileOpen(false)}
                  >
                    {item.label}
                  </Link>
                )}
                {hasChildren && (
                  <div
                    className="overflow-hidden transition-all duration-300"
                    style={{ maxHeight: isExpanded ? `${(item.items!.length * 44) + 8}px` : "0px" }}
                  >
                    <div className="pb-3 pl-4">
                      {item.items!.map((sub) => (
                        <Link
                          key={sub.href}
                          href={sub.href}
                          className="block py-2 text-[0.88rem] transition-colors"
                          style={{ color: "rgba(11,31,51,0.6)" }}
                          onClick={() => setMobileOpen(false)}
                        >
                          {sub.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
          <Link href="/contact" className="inline-flex items-center justify-center px-6 py-3 rounded-sm text-[0.82rem] font-semibold tracking-[0.1em] uppercase mt-6" style={{ backgroundColor: "#35b8b0", color: "#05231f" }} onClick={() => setMobileOpen(false)}>
            {t.nav.contact}
          </Link>
          <div className="flex gap-2 mt-6">
            <button onClick={() => setLocale("en")} className="text-[0.75rem] font-semibold px-4 py-2 rounded-sm transition-all" style={locale === "en" ? { backgroundColor: "rgba(11,31,51,0.08)", color: "#0b1f33" } : { color: "rgba(11,31,51,0.5)" }}>EN</button>
            <button onClick={() => setLocale("ko")} className="text-[0.75rem] font-semibold px-4 py-2 rounded-sm transition-all" style={locale === "ko" ? { backgroundColor: "rgba(11,31,51,0.08)", color: "#0b1f33" } : { color: "rgba(11,31,51,0.5)" }}>KO</button>
          </div>
        </div>
      </div>

      {/* Backdrop */}
      {mobileOpen && (
        <div
          className="lg:hidden fixed inset-0 z-30 transition-opacity duration-300"
          style={{ backgroundColor: "rgba(0,0,0,0.3)" }}
          onClick={() => setMobileOpen(false)}
        />
      )}
    </header>
  );
}

function NavLink({ href, label, items }: { href: string; label: string; items: { href: string; label: string; desc?: string }[] }) {
  return (
    <div className="nav-dropdown">
      <Link href={href} className="rounded-sm px-3 py-2 text-[0.78rem] font-medium tracking-[0.06em] inline-flex items-center gap-1 transition-colors" style={{ color: "rgba(11,31,51,0.7)" }}>
        {label}
        <svg className="w-3.5 h-3.5 transition-transform duration-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ color: "rgba(11,31,51,0.4)" }}><path d="m6 9 6 6 6-6" /></svg>
      </Link>
      <div className="dropdown-menu">
        {items.map((item) => (
          <Link key={item.href} href={item.href} className="group block border-l-2 border-transparent px-4 py-2.5 transition-colors" style={{ borderColor: "transparent" }}>
            <span className="block text-[0.85rem] font-medium transition-colors" style={{ color: "rgba(11,31,51,0.85)" }}>{item.label}</span>
            {item.desc && <span className="mt-0.5 block truncate text-[0.72rem]" style={{ color: "rgba(11,31,51,0.4)" }}>{item.desc}</span>}
          </Link>
        ))}
      </div>
    </div>
  );
}
