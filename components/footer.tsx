import Image from "next/image";
import React from "react";
import { Logo } from "./logo";
import { Bounded } from "./bounded";
import Link from "next/link";
import { FooterPhysics } from "./footer-physics";

interface Props {
  className?: string;
}

export const Footer: React.FC<Props> = () => {
  const boardTextureURLs = [
    "/thank-you-complete.png",
    "/pink-drop-complete.png",
    "/onimask-complete.png",
  ];

  // Custom board size logic or manual setting
  const customBoardSize = { width: 100, height: 300 }; // Customize as needed

  return (
    <footer className="bg-texture bg-zinc-900 text-white overflow-hidden ">
      <div className="relative h-[75vh] p-10 md:aspect-auto">
        <Image
          src="/pexels-artempodrez.jpeg"
          alt="Footer Background"
          fill
          className="object-cover"
        />
        <FooterPhysics
          boardTextureURLs={boardTextureURLs}
          className="absolute inset-0 overflow-hidden"
          boardSize={customBoardSize} // Pass the custom size here
        />
        <Logo className="pointer-events-none relative h-20 mix-blend-exclusion md:h-28" />
      </div>
      <Bounded>
        <ul className="flex flex-wrap justify-center gap-8 text-lg">
          <li className="hover:underline">
            <Link href="/team">Team</Link>
          </li>
          <li className="hover:underline">
            <Link href="/customizer">Customizer</Link>
          </li>
          <li className="hover:underline">
            <Link href="/about">About</Link>
          </li>
        </ul>
      </Bounded>
    </footer>
  );
};
