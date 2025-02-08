import { Hero } from "@/components/hero";
import { ParalaxSections } from "@/components/paralax-section";
import ProductGrid from "@/components/product-grid";

export default function Home() {
  return (
    <main>
      <Hero />
      <ProductGrid />
      <ParalaxSections />
    </main>
  );
}
