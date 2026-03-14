import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        teal: {
          DEFAULT: "#1a8a7d",
          light: "#2cb5a0",
          pale: "#e8f5f2",
          dark: "#14695f",
        },
        warm: {
          DEFAULT: "#f7f4ef",
          alt: "#f0ebe3",
        },
        cream: "#fdfbf7",
        clay: "#c4886b",
        brand: {
          text: "#1e2a2a",
          muted: "#5a6b6b",
          light: "#8a9b9b",
          dark: "#1a2626",
        },
      },
      fontFamily: {
        display: ["Playfair Display", "serif"],
        body: ["Nunito Sans", "sans-serif"],
      },
      animation: {
        "hero-zoom": "heroZoom 20s ease-in-out infinite alternate",
        "float": "float 8s ease-in-out infinite",
        "float-slow": "float 10s ease-in-out infinite reverse",
        "scroll-dot": "scrollDot 2s ease-in-out infinite",
        "fade-in": "fadeIn 0.3s ease",
        "slide-up": "slideUp 0.4s cubic-bezier(0.16,1,0.3,1)",
        "scale-in": "scaleIn 0.5s cubic-bezier(0.16,1,0.3,1)",
        "spin": "spin 0.8s linear infinite",
      },
      keyframes: {
        heroZoom: {
          "0%": { transform: "scale(1.05)" },
          "100%": { transform: "scale(1.12)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0) rotate(0deg)" },
          "50%": { transform: "translateY(-20px) rotate(3deg)" },
        },
        scrollDot: {
          "0%": { transform: "translateY(0)", opacity: "1" },
          "50%": { transform: "translateY(12px)", opacity: "0.3" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        fadeIn: {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        slideUp: {
          from: { opacity: "0", transform: "translateY(40px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        scaleIn: {
          from: { transform: "scale(0.5)", opacity: "0" },
          to: { transform: "scale(1)", opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
