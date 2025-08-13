"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";

type ThemeToggleProps = {
  isRightMenu: boolean;
};
export default function ThemeToggle({ isRightMenu }: ThemeToggleProps) {
  const [theme, setTheme] = useState("dark"); // Default to dark theme

  useEffect(() => {
    // Load theme from localStorage or fallback to dark
    const savedTheme = localStorage.getItem("theme") || "dark";
    setTheme(savedTheme);
    document.body.classList.add(savedTheme);
  }, []);

  const handleThemeToggle = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);

    // Update body class
    document.body.classList.remove(theme);
    document.body.classList.add(newTheme);

    // Save theme in localStorage
    localStorage.setItem("theme", newTheme);
  };

  return (
    <>
      {isRightMenu ? (
        <button
          onClick={handleThemeToggle}
          className={`block relative border border-openBetbg bg-black w-full h-full peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-900 ${
            theme === "dark"
              ? "peer-checked:bg-blue-600"
              : "peer-checked:bg-gray-700"
          }`}
        >
          {/* Dark Mode Icon */}
          <Image
            src="/icons/moon.svg"
            alt="Dark Mode"
            width={20}
            height={20}
            className={`${
              theme === "dark" ? "opacity-100" : "opacity-20"
            } transition-opacity absolute right-3 top-1/2 transform -translate-y-1/2`}
          />

          {/* Light Mode Icon */}
          <Image
            src="/icons/sun.svg"
            alt="Light Mode"
            width={20}
            height={20}
            className={`${
              theme !== "dark" ? "opacity-100" : "opacity-20"
            } transition-opacity absolute left-3 top-1/2 transform -translate-y-1/2`}
          />
        </button>
      ) : (
        <button
          onClick={handleThemeToggle}
          className="border rounded px-1.5 py-1 mr-2"
        >
          <Image
            src={theme === "dark" ? "/icons/sun.svg" : "/icons/moon.svg"}
            alt={theme === "dark" ? "Sun icon" : "Moon icon"}
            width={20}
            height={20}
          />
        </button>
      )}
    </>
  );
}
