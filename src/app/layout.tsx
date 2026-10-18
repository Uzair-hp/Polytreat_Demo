import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-heading",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["500", "600"],
  variable: "--font-mono",
  display: "swap",
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
    <html lang="en" suppressHydrationWarning className={`${jakarta.variable} ${inter.variable} ${jetbrainsMono.variable}`}>
      <body suppressHydrationWarning>
        <TopBar />
        <Navbar />
        {children}
      </body>
    </html>
  );
}


