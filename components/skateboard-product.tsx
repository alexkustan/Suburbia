import Image from "next/image";
import { FaStar } from "react-icons/fa6";
import clsx from "clsx";
import { ButtonLink } from "@/components/ButtonLink";
import { HorizontalLine, VerticalLine } from "./line";
import { Scribble } from "./scribble";

type SkateboardProductProps = {
  id: string;
  name: string;
  price: number;
  imageUrl: string;
  customizerLink: string;
};

const VERTICAL_LINE_CLASSES =
  "absolute top-0 h-full stroke-2 text-stone-300 transition-colors group-hover:text-stone-400";

const HORIZONTAL_LINE_CLASSES =
  "-mx-8 stroke-2 text-stone-300 transition-colors group-hover:text-stone-400";

export const SkateboardProduct: React.FC<SkateboardProductProps> = async ({
  id,
  name,
  price,
  imageUrl,
  customizerLink,
}) => {
  const formattedPrice = price ? `$${(price / 100).toFixed(2)}` : "N/A";
  return (
    <div className="group relative mx-auto w-full max-w-72 px-8 pt-4">
      <VerticalLine className={clsx(VERTICAL_LINE_CLASSES, "left-4")} />
      <VerticalLine className={clsx(VERTICAL_LINE_CLASSES, "right-4")} />
      <HorizontalLine className={HORIZONTAL_LINE_CLASSES} />

      <div className="flex items-center justify-between text-sm">
        <span>{formattedPrice}</span>
        <span className="inline-flex items-center gap-1">
          <FaStar className="text-yellow-400" /> 37
        </span>
      </div>

      <div className="-mb-1 overflow-hidden py-4">
        <Scribble className="absolute inset-0 h-full w-full" />
        <Image
          src={imageUrl}
          alt={name}
          width={150}
          height={150}
          className="mx-auto w-[58%] origin-top transform-gpu transition-transform duration-500 ease-in-out group-hover:scale-150"
        />
      </div>

      <HorizontalLine className={HORIZONTAL_LINE_CLASSES} />

      <h3 className="my-2 text-center font-sans leading-tight text-lg">
        {name}
      </h3>

      <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-200 group-hover:opacity-100">
        <ButtonLink href={customizerLink}>Customize</ButtonLink>
      </div>
    </div>
  );
};
