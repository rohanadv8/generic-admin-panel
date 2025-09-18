// components/ToggleField.tsx
import React from "react";

interface ToggleFieldDto {
  label?: string;
  //   value?: string;
  checked: boolean;

  onChange(e: unknown): void;
}

const ToggleField = ({ label, checked, onChange }: ToggleFieldDto) => (
  <div className="flex items-center space-x-3">
    {label && (
      <label className="cursor-pointer pl-1 text-base  text-secondary-900">
        {label}
      </label>
    )}
    <label className="relative inline-flex items-center cursor-pointer">
      <input
        type="checkbox"
        className="sr-only peer"
        checked={!!checked}
        onChange={onChange}
      />
      <div
        className="w-11 h-6 bg-secondary-900 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer 
        peer-checked:after:translate-x-full 
        rtl:peer-checked:after:-translate-x-full 
        after:content-[''] after:absolute after:top-[2px] after:start-[2px] 
        after:bg-white after:border-gray-300 after:border after:rounded-full 
        after:h-5 after:w-5 after:transition-all dark:border-gray-600 
        peer-checked:bg-blue-600"
      ></div>
    </label>
  </div>
);
export default ToggleField;
