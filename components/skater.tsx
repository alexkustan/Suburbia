import Image from "next/image";
import React from "react";
import { ButtonLink } from "./ButtonLink";
import { SkaterScribble } from "./skater-scribble";
import clsx from "clsx";

interface Props {
  index: number;
  foregroundImage: string;
  backgroundImage: string;
  firstName: string;
  lastName: string;
  customizerLink: string;
}

export const Skater: React.FC<Props> = ({
  index,
  foregroundImage,
  firstName,
  backgroundImage,
  lastName,
  customizerLink,
}) => {
  const colors = [
    "text-brand-blue",
    "text-brand-lime",
    "text-brand-orange",
    "text-brand-pink",
    "text-brand-purple",
  ];
  const scribleColor = colors[index];
  return (
    <div className="skater group relative flex flex-col items-center gap-4">
      <div className="stack-layout overflow-hidden">
        <Image
          src={backgroundImage}
          alt=""
          width={500}
          quality={20}
          height={500}
          className="scale-110 transform transition-all duration-1000 ease-in-out group-hover:scale-100 group-hover:brightness-75 group-hover:saturate-[.8]"
        />
        <SkaterScribble className={clsx("relative", scribleColor)} />
        <Image
          src={foregroundImage}
          alt=""
          width={500}
          height={500}
          className=" transform transition-transform duration-1000 ease-in-out group-hover:scale-110"
        />
        <div className="relative h-48 w-full place-self-end bg-gradient-to-t from-black via-transparent to-transparent"></div>
        <h3 className="relative grid place-self-end justify-self-start p-2 font-sans text-brand-gray ~text-2xl/3xl">
          <span className="mb-[-.3em] block">{firstName}</span>
          <span className="block">{lastName}</span>
        </h3>
      </div>
      <ButtonLink href={customizerLink} size="sm">
        Build their board
      </ButtonLink>
    </div>
  );
};
