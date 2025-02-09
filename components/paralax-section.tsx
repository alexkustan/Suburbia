import React from "react";
import clsx from "clsx";

import bgTexture from "@/public/paint-background.png";
import gui1 from "@/public/guy-1.png";
import gui2 from "@/public/guy-2.png";
import gui3 from "@/public/guy-3.png";
import gui4 from "@/public/guy-4.png";
import { Bounded } from "./bounded";
import { ParalaxImage } from "./paralax-image";
import { SlideIn } from "./slide-in";
import { Heading } from "./heading";
import { ButtonLink } from "./ButtonLink";

declare module "react" {
  interface CSSProperties {
    "--index"?: number;
  }
}

// Section Data
const sectionsData = [
  {
    heading: "Crafted for the Kickflip",
    description:
      "Built for big tricks and hard landings, our boards are designed to handle every flip, grind, and bail. Perfect balance, every time.",
    theme: "Blue",
    foregroundImage: gui1,
    backgroundImage: bgTexture,
  },
  {
    heading: "Not Just a Deck, It's Your Canvas",
    description:
      "Each board is a canvas for expression, crafted for those who treat the backstreets as their own art gallery.",
    theme: "Orange",
    foregroundImage: gui2,
    backgroundImage: bgTexture,
  },
  {
    heading: "Built for Hard Landings",
    description:
      "Skateboarding isn’t always smooth. Our boards are built tough to survive the scuffs, scratches, and slams that come with real skating.",
    theme: "Navy",
    foregroundImage: gui3,
    backgroundImage: bgTexture,
  },
  {
    heading: "Fueling the Next Generation",
    description:
      "We’re committed to supporting young skaters and DIY projects, giving back to the communities that keep skateboarding alive and evolving.",
    theme: "Lime",
    foregroundImage: gui4,
    backgroundImage: bgTexture,
  },
];

export const ParalaxSections: React.FC = () => {
  return (
    <>
      {sectionsData.map((section, index) => {
        const isMirrored = index % 2 !== 0; // Check if section should be mirrored
        const isLast = index === sectionsData.length - 1; // Check if it's the last section

        return (
          <Bounded
            key={index}
            className={clsx(
              !isLast && "sticky top-[calc(var(--index)*2rem)]", // Sticky unless last section
              "bg-texture",
              section.theme === "Blue" && "bg-brand-blue text-white",
              section.theme === "Orange" && "bg-brand-orange text-white",
              section.theme === "Navy" && "bg-brand-navy text-white",
              section.theme === "Lime" && "bg-brand-lime",
              isLast && "relative z-10" // Ensures last section is above the others
            )}
            style={
              {
                "--index": index,
                ...(isLast && { zIndex: 10 }),
              } as React.CSSProperties
            }
          >
            <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2 md:gap-24">
              {/* Conditionally reorders the image and text */}
              <div className={clsx(isMirrored && "md:order-2")}>
                <ParalaxImage img={section.foregroundImage} />
              </div>

              <div
                className={clsx(
                  "flex flex-col items-center gap-8 text-center md:items-start md:text-left"
                )}
              >
                <SlideIn>
                  <Heading size="lg" as="h2">
                    {section.heading}
                  </Heading>
                </SlideIn>
                <SlideIn>
                  <p className="max-w-md text-lg leading-relaxed">
                    {section.description}
                  </p>
                </SlideIn>
                <SlideIn>
                  <ButtonLink
                    href="/"
                    color={section.theme === "Lime" ? "orange" : "lime"}
                  >
                    Shop Boards
                  </ButtonLink>
                </SlideIn>
              </div>
            </div>
          </Bounded>
        );
      })}
    </>
  );
};
