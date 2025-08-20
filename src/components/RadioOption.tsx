// components/RadioOption.tsx
import React from "react";

interface RadioOptionProps {
  name: string;
  value: string;
  label: string;
  checked: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const RadioOption: React.FC<RadioOptionProps> = ({
  name,
  value,
  label,
  checked,
  onChange,
}) => {
  return (
    <label className="cursor-pointer inline-block text-sm pr-3">
      <input
        className="mr-1 mt-[-3px]"
        type="radio"
        name={name}
        value={value}
        checked={checked}
        onChange={onChange}
      />
      {label}
    </label>
  );
};

export default RadioOption;
