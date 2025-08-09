import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  customStyles?: React.CSSProperties;
  className?: string;
}

const Button = ({ children, customStyles, className }: ButtonProps) => {
  return (
    <>
      <button
        className={`border-0 rounded-4xl w-full h-15 bg-[#dcdcdc] ${className}`}
        style={customStyles}
      >
        {children}
      </button>
    </>
  );
};

export default Button;
