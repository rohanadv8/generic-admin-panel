// MODULES //
import { ButtonPropsDto } from "@/client/dto/component.dto";
import React from "react";
// COMPONENTS //

export default function Button({ color, text, icon, onClick }: ButtonPropsDto) {
  const colorClasses = {
    red: "bg-customLoss focus:border-red-600 focus:ring-red-600",
    black:
      "bg-primary-600 text-secondary-900 hover:bg-secondary-900 hover:text-primary-600 text-sm  border-[0.5px] border-secondary-900 transition duration-500 ease-in-out ",
    blackSmall:
      "bg-primary-600 text-secondary-900 hover:bg-secondary-900 hover:text-primary-600 text-xs  border-[0.5px] border-secondary-900 transition duration-500 ease-in-out ",
    blackLogin:
      " w-full bg-primary-600 text-secondary-900 hover:bg-secondary-900 hover:text-primary-600 text-sm  border-[0.5px] border-secondary-900 transition duration-500 ease-in-out ",
  }[color];

  return (
    <button
      className={`${colorClasses} flex items-center justify-center   shadow-lg  focus:outline-none focus:ring-1 h-9 rounded-lg py-2 px-2 `}
      onClick={onClick}
    >
      {icon && <span className="mx-1">{icon}</span>}
      {text && <span>{text}</span>}
    </button>
  );
}
