import React from "react";
import { Bounded } from "./bounded";
import { Heading } from "./heading";
import { Skater } from "./skater";

const skaters = [
  {
    id: 0,
    foregroundImage: "/sophie-front.png",
    backgroundImage: "/sophie-back.png",
    firstName: "Sophie",
    lastName: "Castilo",
    customizerLink: "/build",
  },
  {
    id: 1,
    foregroundImage: "/dylan-front.png",
    backgroundImage: "/dylan-back.png",
    firstName: "Dylan",
    lastName: "Foster",
    customizerLink: "/build",
  },
  {
    id: 2,
    foregroundImage: "/carter-front.png",
    backgroundImage: "/carter-back.png",
    firstName: "Carter",
    lastName: "Bell",
    customizerLink: "/build",
  },
  {
    id: 3,
    foregroundImage: "/jordan-front.png",
    backgroundImage: "/jordan-back.png",
    firstName: "Jordan",
    lastName: "Lee",
    customizerLink: "/build",
  },
];

export const TheTeam: React.FC = () => {
  return (
    <Bounded className="bg-brand-navy bg-texture">
      <Heading className="text-white mb-8 text-center" size="lg">
        the team
      </Heading>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
        {skaters.map((skater, index) => (
          <React.Fragment key={index}>
            {skater.firstName && (
              <Skater
                foregroundImage={skater.foregroundImage}
                backgroundImage={skater.backgroundImage}
                firstName={skater.firstName}
                lastName={skater.lastName}
                customizerLink={skater.customizerLink}
                index={skater.id}
              />
            )}
          </React.Fragment>
        ))}
      </div>
    </Bounded>
  );
};
