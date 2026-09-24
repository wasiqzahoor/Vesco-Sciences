"use client";

import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";

export default function NotFound() {
  return (
    <>
      {/* Hero */}
      <header className="relative isolate overflow-hidden" style={{ backgroundColor: "#071726" }}>
        <img src="/assets/molecular-CIuWq-Al.jpg" alt="" className="absolute inset-0 h-full w-full object-cover" style={{ opacity: 0.15 }} />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to right, #071726, rgba(7,23,38,0.92), rgba(11,31,51,0.5))" }} />
        <div className="relative mx-auto w-full max-w-[1240px] px-6 pt-36 pb-20 md:px-10 md:pt-44 md:pb-28">
          <nav className="mb-8 text-[0.8rem]" style={{ color: "rgba(255,255,255,0.45)" }}>
            <Link href="/" className="transition-colors" style={{ color: "inherit" }}>Home</Link>
            <span className="mx-2" style={{ color: "rgba(255,255,255,0.25)" }}>/</span>
            <span style={{ color: "rgba(255,255,255,0.75)" }}>404</span>
          </nav>
          <p className="eyebrow" style={{ color: "#35b8b0" }}>
            <span className="mr-3 inline-block h-px w-8 align-middle opacity-50" style={{ backgroundColor: "currentColor" }} />
            PAGE NOT FOUND
          </p>
          <h1 className="mt-6 text-white font-semibold leading-[1.06] text-[clamp(2.1rem,4.6vw,3.9rem)]">
            404
          </h1>
          <p className="mt-4 max-w-2xl text-[1.1rem] leading-relaxed" style={{ color: "rgba(255,255,255,0.7)" }}>
            The page you are looking for does not exist or has been moved.
          </p>
        </div>
        <div className="absolute inset-x-0 bottom-0 h-px" style={{ background: "linear-gradient(to right, transparent, rgba(53,184,176,0.6), transparent)" }} />
      </header>

      {/* 404 Content */}
      <section style={{ backgroundColor: "#f7fafc", color: "#17212b" }}>
        <div className="mx-auto w-full max-w-[1240px] px-6 py-20 md:px-10 md:py-28">
          <ScrollReveal>
            <div className="max-w-2xl">
              <h2 className="text-[clamp(1.5rem,3vw,2.4rem)] leading-[1.12] font-semibold" style={{ color: "#0b1f33" }}>
                Page Not Found
              </h2>
              <p className="mt-5 text-[1rem] leading-relaxed" style={{ color: "#5b6b7a" }}>
                The page you requested could not be found. It may have been removed, renamed, or is temporarily unavailable.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link href="/" className="inline-flex items-center gap-3 rounded-sm px-7 py-3.5 text-[0.8rem] font-semibold tracking-[0.14em] uppercase transition-all duration-300" style={{ backgroundColor: "#35b8b0", color: "#05231f" }}>
                  Back to Homepage
                </Link>
                <Link href="/contact" className="inline-flex items-center gap-3 rounded-sm px-7 py-3.5 text-[0.8rem] font-semibold tracking-[0.14em] uppercase transition-all duration-300" style={{ border: "1px solid rgba(11,31,51,0.25)", color: "#0b1f33" }}>
                  Contact Us
                </Link>
              </div>
            </div>
          </ScrollReveal>

          {/* Quick Links */}
          <ScrollReveal>
            <div className="mt-16">
              <h3 className="text-[0.75rem] font-bold tracking-[0.14em] uppercase" style={{ color: "#35b8b0" }}>
                Quick Links
              </h3>
              <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {[
                  { href: "/about", label: "About Us" },
                  { href: "/technology", label: "Technology" },
                  { href: "/products", label: "Products" },
                  { href: "/research", label: "Research & Development" },
                  { href: "/quality", label: "Quality Management" },
                  { href: "/insights", label: "Science & Insights" },
                ].map((link) => (
                  <Link key={link.href} href={link.href} className="card-flat group flex items-center gap-3 p-5 transition-shadow hover:shadow-md">
                    <span className="text-[0.9rem] font-medium transition-colors" style={{ color: "#0b1f33" }}>{link.label}</span>
                    <span className="ml-auto transition-transform duration-300 group-hover:translate-x-1" style={{ color: "#35b8b0" }}>→</span>
                  </Link>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA */}
      <section style={{ backgroundColor: "#0b1f33", color: "#fff" }}>
        <div className="mx-auto w-full max-w-[1240px] px-6 py-16 md:px-10 md:py-20">
          <ScrollReveal>
            <div className="grid gap-10 md:grid-cols-[1fr_auto] md:items-center">
              <div>
                <h2 className="text-[clamp(1.5rem,3vw,2.4rem)] leading-[1.12] font-semibold">
                  Need Help Finding What You Need?
                </h2>
                <p className="mt-5 max-w-xl text-[1.0625rem] leading-relaxed" style={{ color: "rgba(255,255,255,0.65)" }}>
                  Contact our team for assistance with products, technology, or partnership inquiries.
                </p>
              </div>
              <div className="flex flex-wrap items-center gap-4">
                <Link href="/contact" className="inline-flex items-center gap-3 rounded-sm px-7 py-3.5 text-[0.8rem] font-semibold tracking-[0.14em] uppercase transition-all duration-300" style={{ backgroundColor: "#35b8b0", color: "#05231f" }}>
                  Contact Us
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
