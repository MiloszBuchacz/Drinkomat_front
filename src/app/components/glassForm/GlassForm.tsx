import React from "react";
import GlassTitle from "../glassTitle/GlassTitle";

interface GlassFormProps {
  children: React.ReactNode;
}

const GlassForm = ({ children }: GlassFormProps) => {
  return (
    <div className="w-screen h-screen relative bg-transparent  justify-center flex items-center p-5 z-1">
      <div className="content-center items-center justify-start rounded-2xl border-1 border-[#dcdcdc] backdrop-blur-lg h-[70%] w-[30rem] z-10 flex  flex-wrap flex-col top-0.5 ">
        <GlassTitle title="Login" />
        <div className="w-full h-full m-20">{children}</div>
      </div>
    </div>
  );
};

export default GlassForm;
