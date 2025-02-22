import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "rgb(22, 14, 42)",
        foreground: "var(--foreground)",
        blue: {
          900: "#301E67",
          800: "#301E67",
        },
        green: {
          700: "#118B50",
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
