import type { Metadata } from "next";
import { LazyImage } from "./Utilis";
import "./globals.css";

import signinBackgroundPhoto from "../../public/backgroundPhotos/Drinkomat_main_background.png";
import signinBackgroundPhoto_small from "../../public/backgroundPhotos/Drinkomat_main_background_small.png";

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
        {children}
        <LazyImage
          image={signinBackgroundPhoto}
          smallImage={signinBackgroundPhoto_small}
        />
      </body>
    </html>
  );
}
