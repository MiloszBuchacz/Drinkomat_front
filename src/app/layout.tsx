import type { Metadata } from "next";
import { LazyImage } from "./Utilis";

import Image from "next/image";

import signinBackgroundPhoto from "../../public/backgroundPhotos/Drinkomat_main_background2.png";
import signinBackgroundPhoto_small from "../../public/backgroundPhotos/Drinkomat_main_background_small2.jpg";
import drinkomat_logo from "../../public/drinkomat/Drinkomat.png";

import "./globals.css";

export const metadata: Metadata = {
  title: "Drinkomat",
  description: "Drinkomat app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* google icons/fonts */}
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined"
          rel="stylesheet"
        />
      </head>
      <body>
        <div className="absolute z-1 left-1/2 -translate-x-1/2 -translate-y-1/2 top-12">
          <Image
            className="w-[12rem]"
            alt="drinkomatLogo"
            src={drinkomat_logo}
          />
        </div>
        <div className="fixed inset-0">
          <LazyImage
            image={signinBackgroundPhoto}
            smallImage={signinBackgroundPhoto_small}
          />
          {children}
        </div>
      </body>
    </html>
  );
}
