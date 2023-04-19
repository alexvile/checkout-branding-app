import { CustomColorPicker } from "./CustomColorPicker";
export function ColorInput({
  label,
  disabled = false,
  size = "small",
  name,
  onChange,
  value,
}) {
  const labelClasses = `${size === "small" ? "w-[70px]" : "w-[94px]"} ${
    disabled ? "text-disabledMagnifyingStyles" : "text-titleBlack"
  }`;

  return (
    <label className="flex items-center gap-x-4 w-fit">
      <span className={`popup-desc inline-block ${labelClasses}`}>{label}</span>

      <CustomColorPicker
        onChange={onChange}
        value={value || "#000000"}
        name={name}
        disabled={disabled}
      />
    </label>
  );
}
