import TopBar from "@/app/components/topBar/TopBar";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const HomePage = () => {
  return (
    <>
      <TopBar
        leftSideContent={<div>Offer</div>}
        rightSideContent={<Link href="/signin"> Signin</Link>}
      />
    </>
  );
};

export default HomePage;
