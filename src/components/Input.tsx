"use client";
// MODULES //
import React, { useState } from "react";
// ICON //
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEyeSlash, faEye } from "@fortawesome/free-solid-svg-icons";
// import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { InputProps } from "@/client/dto/component.dto";

export default function Input({
  label,
  inputPlace,
  placeholder,
  type,
  value,
  name,
  error,
  isMandatory,
  onChange,
}: InputProps) {
  const [showPassword, setShowPassword] = useState(false);
  const inputClasses = {
    passwordClass: "rounded-t-lg",
    basicClasses: "",
  }[inputPlace!];
  return (
    <div className="relative block">
      {label && (
        <label className="block pl-1 mb-1 text-secondary-900 text-sm">
          {label}
          {isMandatory && <span className="pl-1 text-red-500">*</span>}
        </label>
      )}
      {/* Input with optional icon */}
      <div className="relative">
        {/* {placeholder?.toLowerCase().includes("search") && (
          <div className="absolute inset-y-0 left-0 pl-2 flex items-center text-primary-200 pointer-events-none">
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </div>
        )} */}
        <input
          className={`${inputClasses} input-no-arrows bg-primary-300 text-secondary-900 w-full py-2.5 px-2.5 h-10 border border-secondary-800 rounded text-sm placeholder:text-secondary-900  
       
          `}
          placeholder={placeholder}
          type={showPassword && type === "password" ? "text" : type}
          value={value}
          name={name}
          onChange={onChange}
        />

        {/* Show/hide password */}
        {(name === "password" || name === "confirmPassword") && (
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-0 mr-5 text-gray-100 hover:text-gray-300 mt-[7px]"
          >
            <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
          </button>
        )}
      </div>

      {/* Error message */}
      <div className="mt-1">
        {error && <span className="text-red-500 text-sm">{error}</span>}
      </div>
    </div>
  );
}
