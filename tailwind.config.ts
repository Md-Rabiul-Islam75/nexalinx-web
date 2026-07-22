import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        // Wide enough that a fixed right-edge rail clears the max-w-7xl container
        wide: "1440px",
      },
      colors: {
        // Primary — sampled directly from the Nexalinx logo N (azure #1890F0)
        brand: {
          50: "#EAF6FE",
          100: "#D0EBFD",
          200: "#A6DAFB",
          300: "#6EC5F8",
          400: "#38ABF4",
          500: "#1890F0", // logo dominant blue
          600: "#0E74D8",
          700: "#115CAC",
          800: "#154D8A",
          900: "#163F6E",
        },
        // Indigo-violet — the deep blue / pixel dots at the bottom of the logo N (#6048D8)
        violet: {
          400: "#8168EC",
          500: "#6048D8",
          600: "#5138C0",
          700: "#4630A0",
        },
        // Secondary — bright blue accent from the logo (#47C3FC). Bright fills use DARK text.
        accent: {
          50: "#EAF7FE",
          100: "#CFEFFD",
          200: "#A5E1FC",
          300: "#73D1FB",
          400: "#5FCBFD",
          500: "#47C3FC", // logo bright blue
          600: "#1FA6ED",
          700: "#0E7EBE",
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
        // Matches the logo N: bright azure → blue → indigo-violet (its pixel dots)
        "brand-gradient": "linear-gradient(135deg, #12A2F0 0%, #1E86F0 45%, #5A45D6 100%)",
        "brand-gradient-soft":
          "linear-gradient(135deg, rgba(24,144,240,0.12) 0%, rgba(96,72,216,0.12) 100%)",
        // Deep-blue surfaces for dark sections (navy → logo azure)
        "navy-gradient": "linear-gradient(160deg, #06183F 0%, #0E2C72 55%, #1F86E8 130%)",
        "cta-gradient": "linear-gradient(120deg, #0B1E45 0%, #1466D6 52%, #1F90F0 100%)",
      },
      boxShadow: {
        soft: "0 10px 40px -12px rgba(21, 77, 138, 0.25)",
        glow: "0 20px 60px -15px rgba(24, 144, 240, 0.45)",
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
