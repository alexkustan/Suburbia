import React from "react";
import { Bounded } from "./bounded";
import { Heading } from "./heading";
import { ButtonLink } from "./ButtonLink";
import { WideLogo } from "./wide-logo";
import { TallLogo } from "./tall-logo";

export const Hero: React.FC = () => {
  return (
    <Bounded className="bg-brand-pink relative h-dvh text-zinc-800 bg-texture">
      <div className="absolute inset-0 flex items-center pt-20">
        <WideLogo className="w-full text-brand-purple hidden opacity-20 mix-blend-multiply lg:block" />
        <TallLogo className="w-full text-brand-purple opacity-20 mix-blend-multiply lg:hidden" />
      </div>
      <div className="absolute inset-0 mx-auto mt-24 grid max-w-6xl grid-rows-[1fr,auto] place-items-end px-6 ~py-10/16">
        <Heading size="lg" className="relative max-w-2xl place-self-start">
          <h1>Escape the Cul-de-sac</h1>
        </Heading>
        <div className="flex relative w-full flex-col items-center justify-between ~gap-2/4 lg:flex-row">
          <p className="max-w-[45ch] font-semibold ~text-lg/xl">
            Not just a board, your board. Design a board that&apos;s as real as
            the places you take it.
          </p>
          <ButtonLink
            href="/build"
            icon="skateboard"
            size="lg"
            className="z-20 mt-2 block"
          >
            Build Your Board
          </ButtonLink>
        </div>
      </div>
    </Bounded>
  );
};
