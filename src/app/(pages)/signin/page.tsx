import React from "react";

import GlassForm from "@/app/components/glassForm/GlassForm";
import SigninForm from "./SigninForm";
import Link from "next/link";
import TopBar from "@/app/components/topBar/TopBar";

const Signin = () => {
  return (
    <>
      <TopBar
        leftSideContent={
          <Link href="/">
            <span className="material-symbols-outlined">arrow_back</span>
          </Link>
        }
      />

      <GlassForm>
        <SigninForm />
      </GlassForm>
    </>
  );
};

export default Signin;
