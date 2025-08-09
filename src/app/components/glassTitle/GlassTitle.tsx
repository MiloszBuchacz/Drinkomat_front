import React from "react";

import "./glassTitle.css";

interface GlassTitleProps {
  title: string;
}
const GlassTitle = ({ title }: GlassTitleProps) => {
  return (
    <div className="mainContainer">
      {title}
      <div className="right-corner"></div>
      <div className="left-corner"></div>
    </div>
  );
};

export default GlassTitle;
