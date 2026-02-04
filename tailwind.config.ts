import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        emerald: {
          DEFAULT: "#064E3B",
          600: "#065F46",
        },
        sand: "#F5F5F4",
        gold: "#D4AF37",
      },
      fontFamily: {
        heading: ["var(--font-serif)", "serif"],
        body: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      boxShadow: {
        glass: "0 8px 32px rgba(6,78,59,0.25)",
      },
      backgroundImage: {
        'radial-emerald': "radial-gradient(1200px 600px at 50% 0%, rgba(6,78,59,0.18), transparent)",
      },
    },
  },
  plugins: [],
};

export default config;
