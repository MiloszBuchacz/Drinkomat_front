"use client";
import React from "react";

type InputType =
  | "text"
  | "password"
  | "email"
  | "number"
  | "tel"
  | "url"
  | "search"
  | "date"
  | "time"
  | "datetime-local"
  | "checkbox"
  | "radio"
  | "range"
  | "file"
  | "color"
  | "hidden"
  | "submit"
  | "reset"
  | "button";

interface InputProps {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  defaultValue?: string;
  type: InputType;
  style?: React.CSSProperties;
  icon?: string;
  containerStyle?: React.CSSProperties;
}

/**
 * A input component with optional Material Symbols icon support and customizable styles.
 *
 * @component
 * @param {Object} props - Component props.
 * @param {string} props.placeholder - Placeholder text displayed inside the input field.
 * @param {string} props.defaultValue - The initial value of the input.
 * @param {string} props.type - The input type (e.g., "text", "password", "email").
 * @param {React.CSSProperties} [props.style] - Optional inline styles applied directly to the <input> element.
 * @param {React.CSSProperties} [props.containerStyle] - Optional inline styles applied to the container <div> that wraps the input and icon.
 * @param {(e: React.ChangeEvent<HTMLInputElement>) => void} props.onChange - Callback function fired when the input value changes.
 * @param {string} [props.icon] - Optional name of the Material Symbol icon to display next to the input.
 *
 * @returns {JSX.Element} The rendered input field wrapped in a styled container with an optional icon.
 */
const Input = ({
  defaultValue,
  placeholder,
  style,
  onChange,
  type,
  icon,
  containerStyle,
}: InputProps) => {
  return (
    <div className="w-full relative" style={containerStyle}>
      <input
        className="p-4 placeholder-white outline-none focus:border-3 border-2 rounded-4xl w-full h-15 border-white text-white"
        type={type}
        defaultValue={defaultValue}
        placeholder={placeholder}
        style={style}
        onChange={(e) => onChange(e)}
      />
      <span className="material-symbols-outlined absolute right-8 top-4 text-white ">
        {icon}
      </span>
    </div>
  );
};

export default Input;
