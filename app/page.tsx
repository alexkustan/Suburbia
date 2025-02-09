import { Hero } from "@/components/hero";
import { ParalaxSections } from "@/components/paralax-section";
import ProductGrid from "@/components/product-grid";
import { VideoSection } from "@/components/video-section";

export default function Home() {
  return (
    <main>
      <Hero />
      <ProductGrid />
      {/* <ParalaxSections /> */}
      <VideoSection />
    </main>
  );
}
