import type { Metadata, Viewport } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import SiteFooter from "@/components/SiteFooter";

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
      <body suppressHydrationWarning>
        <Navbar />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}


