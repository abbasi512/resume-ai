import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-dm-sans)", "system-ui", "sans-serif"],
        serif: ["var(--font-dm-serif)", "Georgia", "serif"],
      },
      colors: {
        brand: {
          DEFAULT: "#1a1a2e",
          50: "#f0f0f7",
          100: "#e1e1ef",
          900: "#1a1a2e",
        },
        accent: {
          gold: "#e8c56d",
          purple: "#7c6af0",
          "purple-light": "#f7f5ff",
          "purple-border": "#e0dafe",
        },
      },
      animation: {
        "dot-bounce": "dotBounce 1.2s infinite",
        "fade-in": "fadeIn 0.5s ease forwards",
        "slide-up": "slideUp 0.4s ease forwards",
      },
      keyframes: {
        dotBounce: {
          "0%, 80%, 100%": { transform: "scale(0.6)", opacity: "0.4" },
          "40%": { transform: "scale(1)", opacity: "1" },
        },
        fadeIn: {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        slideUp: {
          from: { opacity: "0", transform: "translateY(12px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
