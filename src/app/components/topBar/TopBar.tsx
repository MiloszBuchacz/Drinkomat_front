import Image from "next/image";
import React, { ReactElement } from "react";

import drinkomat_logo from "../../../../public/drinkomat/Drinkomat.png";

interface TopBarProps {
  leftSideContent: ReactElement;
  rightSideContent?: ReactElement;
}

const TopBar = ({ leftSideContent, rightSideContent }: TopBarProps) => {
  return (
    <div className="w-screen h-[6rem] z-2 fixed backdrop-blur-lg text-black shadow-md shadow-gray-5000/50 flex justify-between pr-[1rem] pl-[1rem] pt-1 items-center">
      <div>{leftSideContent}</div>
      <div>{rightSideContent}</div>
    </div>
  );
};

export default TopBar;
