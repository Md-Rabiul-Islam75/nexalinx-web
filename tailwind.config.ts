import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Primary — sampled from the Nexalinx logo (blue → violet gradient)
        brand: {
          50: "#EEF3FF",
          100: "#D9E5FF",
          200: "#B8CEFF",
          300: "#8AAEFF",
          400: "#5B87FB",
          500: "#2E6BF0", // primary blue
          600: "#1E52D6",
          700: "#1B43AD",
          800: "#1C3B8A",
          900: "#1B3470",
        },
        violet: {
          400: "#9A6BF5",
          500: "#7C3AED", // logo violet / pixel dots
          600: "#6D28D9",
          700: "#5B21B6",
        },
        // Secondary — warm coral accent, chosen to catch the eye against the cool primary
        accent: {
          400: "#FF8A5B",
          500: "#FF6A3D", // primary accent
          600: "#F24E1E",
        },
        // Deep navy blue (Simform-style) — replaces near-black for dark surfaces & headings
        ink: {
          DEFAULT: "#0B1E45",
          800: "#12275A",
          700: "#1A3572",
        },
        navy: {
          950: "#071539",
          900: "#0B1E45",
          800: "#12275A",
          700: "#1A3572",
          600: "#22449A",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "var(--font-inter)", "sans-serif"],
      },
      backgroundImage: {
        "brand-gradient": "linear-gradient(135deg, #2E6BF0 0%, #6D28D9 100%)",
        "brand-gradient-soft":
          "linear-gradient(135deg, rgba(46,107,240,0.12) 0%, rgba(109,40,217,0.12) 100%)",
        // Deep-blue surfaces for dark sections (navy → brand blue)
        "navy-gradient": "linear-gradient(160deg, #071539 0%, #0E2A6E 55%, #1E52D6 130%)",
        "cta-gradient": "linear-gradient(120deg, #0B1E45 0%, #1E52D6 55%, #2E6BF0 100%)",
      },
      boxShadow: {
        soft: "0 10px 40px -12px rgba(28, 53, 112, 0.25)",
        glow: "0 20px 60px -15px rgba(109, 40, 217, 0.45)",
        card: "0 4px 24px -8px rgba(16, 24, 64, 0.12)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.6s ease-out both",
        float: "float 6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
