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
  title: "PolyTreat Chemicals | Advanced Water Treatment & Industrial Chemical Solutions",
  description: "ISO 9001:2015 certified manufacturer of advanced water treatment, biocides, cooling tower & boiler chemicals, and eco-hygiene solutions in India.",
  keywords: "water treatment chemicals, RO antiscalant, boiler chemicals, cooling tower chemicals, biocides, BKC 50, PolyTreat Chemicals, Altra Care",
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
    <html lang="en" className={`${jakarta.variable} ${inter.variable} ${jetbrainsMono.variable}`}>
      <body>
        <TopBar />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
