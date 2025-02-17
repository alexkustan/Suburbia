import type { Metadata } from "next";
import { Bowlby_One_SC, DM_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";
import { SVGFilters } from "@/components/SVG-filters";
import { Footer } from "@/components/footer";
import { VideoSection } from "@/components/video-section";
import { TheTeam } from "@/components/the-team";

const bowly = Bowlby_One_SC({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-bowlby-sc",
  weight: "400",
});

const dmMono = DM_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-dm-mono",
  weight: "500",
});

export const metadata: Metadata = {
  title: "Suburbia Skateboards",
  description: "The best skatebords",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${bowly.variable} ${dmMono.variable} antialiased font-mono font-medium text-zinc-800`}
      >
        <main>
          <Header />
          {children}
          <VideoSection />
          <TheTeam />
          <Footer />
        </main>
        <SVGFilters />
      </body>
    </html>
  );
}
