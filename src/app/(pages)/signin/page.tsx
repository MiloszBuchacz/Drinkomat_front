import React from "react";

import GlassForm from "@/app/components/glassForm/GlassForm";
import SigninForm from "./SigninForm";

const Signin = () => {
  console.log("What im doing here?");
  return (
    <GlassForm>
      <SigninForm />
    </GlassForm>
  );
};

export default Signin;
