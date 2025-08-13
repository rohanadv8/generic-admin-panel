import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx,scss}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx,scss}",
    "./src/sections/**/*.{js,ts,jsx,tsx,mdx,scss}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx,scss,css}",
  ],
  theme: {
    extend: {
      width: {
        custom: "calc(100% - 170px)", // Reusable width
        "custom-sm": "calc(100% - 435px)", // Reusable width
      },
      darkMode: "class",
      fontSize: {
        tiny: "0.6rem",
        xxxs: "8px",
        xxs: "10px",
      },
      // screens: {
      //   // 'xs': '480px',       // Example: Extra small devices
      //   '3xl': '1600px',     // Example: Very large screens
      // },
      backgroundImage: {
        "hero-pattern": "url('/images/pattern.jpg')",
      },

      colors: {
        primary: {
          900: "var(--primary-900)",
          600: "var(--primary-600)",
          400: "var(--primary-400)",
          100: "var(--primary-100)",
          200: "var(--primary-200)",
          300: "var(--primary-300)",
        },
        secondary: {
          900: "var(--secondary-900)",
          800: "var(--secondary-800)",
          200: "#A8AFBA",
        },

        surface: {
          800: "#19191F",
        },
        text: {
          100: "#8C929C",
        },
        headerBackground: "#101828",
      },
    },
  },
  plugins: [],
} satisfies Config;
