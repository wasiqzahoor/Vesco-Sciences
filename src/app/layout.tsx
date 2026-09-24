import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import "./globals.css";
import { I18nProvider } from "@/i18n/context";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

const inter = Inter({ subsets: ["latin"], display: "swap", weight: ["300", "400", "500", "600"] });
const manrope = Manrope({ subsets: ["latin"], display: "swap", weight: ["400", "500", "600", "700", "800"] });

const siteUrl = "https://www.vescoscience.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Vesco Science — Korean Regenerative Biotechnology & Custom Manufacturing",
    template: "%s | Vesco Science",
  },
  description:
    "Vesco Science Co., Ltd. is a South Korea-based biotechnology company specializing in exosome, PDRN/PN, hyaluronic acid, and peptide-based regenerative formulations. Custom manufacturing, lyophilization, and cold chain capability for global partners.",
  keywords: [
    "Korean biotechnology", "regenerative medicine", "exosome manufacturer Korea",
    "PDRN PN supplier", "custom manufacturing biotech", "lyophilization services",
    "hyaluronic acid filler", "peptide bio remodeling", "botulinum toxin Korea",
    "K-beauty biotech", "OEM ODM biologics", "cold chain biotech",
    "Vesco Science", "extracellular vesicles", "HUC-MSC exosomes",
  ],
  authors: [{ name: "Vesco Science Co., Ltd." }],
  creator: "Vesco Science Co., Ltd.",
  publisher: "Vesco Science Co., Ltd.",
  formatDetection: { email: false, address: false, telephone: false },
  openGraph: {
    type: "website",
    locale: "ko_KR",
    alternateLocale: "en_US",
    url: siteUrl,
    siteName: "Vesco Science",
    title: "Vesco Science — Korean Regenerative Biotechnology & Custom Manufacturing",
    description:
      "Advanced biotechnology solutions through integrated R&D, formulation, manufacturing and quality systems. Exosome, PDRN/PN, HA, and peptide-based regenerative formulations from Korea.",
    images: [
      {
        url: "/assets/vesco_logo-KfffcaeC.png",
        width: 1200,
        height: 630,
        alt: "Vesco Science — Korean Biotechnology Company",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Vesco Science — Korean Regenerative Biotechnology",
    description:
      "Advanced biotechnology solutions: exosome, PDRN/PN, HA, peptide-based regenerative formulations from Korea.",
    images: ["/assets/vesco_logo-KfffcaeC.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: siteUrl,
    languages: {
      "en": siteUrl,
      "ko": siteUrl,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "48x48" },
      { url: "/favicon-32x32.png", type: "image/png", sizes: "32x32" },
      { url: "/favicon-16x16.png", type: "image/png", sizes: "16x16" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  verification: {},
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Vesco Science Co., Ltd.",
  alternateName: "Vesco Science",
  url: siteUrl,
  logo: `${siteUrl}/assets/vesco_logo-KfffcaeC.png`,
  description:
    "South Korea-based biotechnology company specializing in regenerative medicine, exosome, PDRN/PN, and custom biologics manufacturing.",
  foundingDate: "2020",
  address: {
    "@type": "PostalAddress",
    addressCountry: "KR",
    addressRegion: "Seoul",
  },
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer service",
    email: "contact@vescoscience.com",
    availableLanguage: ["Korean", "English"],
  },
  sameAs: [],
  maker: {
    "@type": "Organization",
    name: "New AI Tech Softs",
    url: "https://www.newaitechsofts.com",
  },
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Vesco Science",
  url: siteUrl,
  description:
    "Korean biotechnology company — exosome, PDRN/PN, HA, peptide-based regenerative formulations and custom manufacturing.",
  inLanguage: ["ko", "en"],
  publisher: {
    "@type": "Organization",
    name: "Vesco Science Co., Ltd.",
  },
};

const structuredData = [organizationSchema, websiteSchema];

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko" className={`h-full antialiased ${inter.className} ${manrope.className}`} data-scroll-behavior="smooth">
      <head>
        {structuredData.map((schema, i) => (
          <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
        ))}
      </head>
      <body className="min-h-full flex flex-col">
        <I18nProvider>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
          <ScrollToTop />
        </I18nProvider>
      </body>
    </html>
  );
}
