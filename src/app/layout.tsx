import type { Metadata, Viewport } from "next";
import { Manrope, Inter } from "next/font/google";
import "./globals.css";
import "@/styles/tokens.css";
import Navbar from "@/components/Navbar";
import SiteFooter from "@/components/SiteFooter";

const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-manrope",
  weight: ["400", "500", "700", "800"],
});

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "PolyTreat Chemicals | Industrial Water Treatment & Specialty Chemistry",
  description:
    "Explore PolyTreat's industrial water treatment, construction chemistry, and V-Klin facility-care product areas. Contact the team to discuss an application or request current product information.",
  keywords:
    "PolyTreat Chemicals, industrial water treatment, boiler water treatment, cooling water, construction chemicals, V-Klin cleaning products",
};

export const viewport: Viewport = {
  themeColor: "#0B192C",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning className={`${manrope.variable} ${inter.variable}`}>
        <Navbar />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}


