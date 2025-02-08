import { Bounded } from "./bounded";
import { Heading } from "./heading";
import { SkateboardProduct } from "./skateboard-product";
import { SlideIn } from "./slide-in";

const products = [
  {
    id: "1",
    name: "Oni Mask",
    imageUrl: "/onimask-complete.png",
    customizerLink: "/customize/1",
    price: 5999,
  },
  {
    id: "2",
    name: "Pink Drop",
    imageUrl: "/pink-drop-complete.png",
    customizerLink: "/customize/2",
    price: 8999,
  },
  {
    id: "3",
    name: "Thank You",
    imageUrl: "/thank-you-complete.png",
    customizerLink: "/customize/3",
    price: 6999,
  },
  {
    id: "4",
    name: "Yellow & Black",
    imageUrl: "/black-complete.png",
    customizerLink: "/customize/4",
    price: 7999,
  },
];

const ProductGrid: React.FC = () => {
  return (
    <Bounded className="bg-texture bg-brand-gray">
      <SlideIn>
        <Heading className="text-center mb-6" as="h2">
          Latest Drop
        </Heading>
      </SlideIn>
      <SlideIn>
        <div className="text-center mb-10">
          <p>Grab our freshest designs before they sell out!</p>
        </div>
      </SlideIn>
      <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
        {products.map((product) => (
          <SkateboardProduct key={product.id} {...product} />
        ))}
      </div>
    </Bounded>
  );
};

export default ProductGrid;
