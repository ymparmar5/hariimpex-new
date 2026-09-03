import type { Metadata, Viewport } from "next";
  import { Inter, Space_Grotesk, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-heading",
  subsets: ["latin"],
});

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const viewport: Viewport = {
  themeColor: "#0f172a", // ink
};

export const metadata: Metadata = {
  title: "Hari Impex | Digital Display & Precision Cooling Manufacturing",
  description: "Surat's leading B2B manufacturer of high-impact LED video walls, digital standees, and industrial-grade precision cooling components like water blocks and radiators.",
  keywords: ["LED Video Wall", "Digital Standee", "Water Block", "Industrial Radiator", "Custom Cooling Solutions", "B2B Manufacturer Surat"],
  openGraph: {
    title: "Hari Impex",
    description: "Digital Display & Precision Cooling Manufacturing",
    url: "https://hariimpex.in",
    siteName: "Hari Impex",
    locale: "en_IN",
    type: "website",
  },
};

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Toaster } from "@/components/ui/sonner";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable} ${ibmPlexMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
