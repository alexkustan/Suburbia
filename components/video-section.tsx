import React from "react";
import { Bounded } from "./bounded";
import { LazyYouTubePlayer } from "./lazy-you-tube-playew";
import clsx from "clsx";
import Image from "next/image";
const MASK_CLASSES =
  "[mask-image:url(/video-mask.png)] [mask-mode:alpha] [mask-position:center_center] [mask-repeat:no-repeat] [mask-size:100%_auto]";

export const VideoSection: React.FC = () => {
  return (
    <Bounded className="bg-texture bg-zinc-900">
      <h2 className="sr-only">Video Reel</h2>
      <div className="relative aspect-video">
        <div
          className={clsx(
            "bg-brand-lime absolute inset-0 ~translate-x-2/3 ~translate-y-2/3",
            MASK_CLASSES
          )}
        />
        <div
          className={clsx(
            "bg-white absolute inset-0 ~translate-x-1/3 ~translate-y-1/2",
            MASK_CLASSES
          )}
        />
        <div
          className={clsx(
            "bg-white absolute inset-0 ~translate-x-1/2 ~-translate-y-1/3",
            MASK_CLASSES
          )}
        />
        <div className={clsx(MASK_CLASSES, "relative h-full")}>
          <LazyYouTubePlayer />
          <Image
            src="/image-texture.png"
            alt=""
            fill
            className="pointer-events-none object-cover opacity-50"
          />
        </div>
      </div>
    </Bounded>
  );
};
