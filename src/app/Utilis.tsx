"use client";

import Image, { StaticImageData } from "next/image";
import { useState } from "react";

type LazyImageProps = {
  image: StaticImageData;
  smallImage: StaticImageData;
};

export const LazyImage = ({ image, smallImage }: LazyImageProps) => {
  const [isLoad, setIsLoad] = useState(false);
  return (
    <>
      <Image
        src={image}
        alt="Drinkomat background"
        fill
        loading="lazy"
        className="object-cover transition-opacity duration-200 ease-in-out z-0"
        onLoad={() => setIsLoad(true)}
      />

      {!isLoad && (
        <Image
          src={smallImage}
          alt="Drinkomat placeholder"
          fill
          priority
          className="object-cover absolute top-0 left-0 z-0"
        />
      )}
    </>
  );
};
