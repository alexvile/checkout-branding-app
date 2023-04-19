import React from "react";

export function CustomColorPicker({ value, disabled, onChange, name }) {
  return (
    <input
      className={`h-[32px] w-[72px] cursor-pointer border border-borderInput rounded overflow-hidden ${
        disabled ? "opacity-60 pointer-events-none" : ""
      }`}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      type="color"
      name={name}
    />
  );
}
