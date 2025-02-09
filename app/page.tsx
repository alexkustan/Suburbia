import { Hero } from "@/components/hero";
import { ParalaxSections } from "@/components/paralax-section";
import ProductGrid from "@/components/product-grid";
import { TheTeam } from "@/components/the-team";
import { VideoSection } from "@/components/video-section";

export default function Home() {
  return (
    <main>
      <Hero />
      <ProductGrid />
      {/* <ParalaxSections /> */}
      <VideoSection />
      <TheTeam />
    </main>
  );
}
