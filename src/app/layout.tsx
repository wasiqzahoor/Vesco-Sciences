import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import "./globals.css";
import { I18nProvider } from "@/i18n/context";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

const inter = Inter({ subsets: ["latin"], display: "swap", weight: ["300", "400", "500", "600"] });
const manrope = Manrope({ subsets: ["latin"], display: "swap", weight: ["400", "500", "600", "700", "800"] });

export const metadata: Metadata = {
  title: "Vesco Science — Korean Regenerative Biotechnology & Custom Manufacturing",
  description:
    "Vesco Science develops and manufactures exosome, PDRN/PN and regenerative formulations in Korea, with custom manufacturing, lyophilization and cold chain capability for global partners.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko" className={`h-full antialiased ${inter.className} ${manrope.className}`} data-scroll-behavior="smooth">
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
