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
        bg: "rgb(2, 0, 22)",
        bg2: "#100D23",
        primary: "#007089",
        background: "rgb(22, 14, 42)",
        foreground: "var(--foreground)",
        blue: {
          900: "#301E67",
          800: "#301E67",
        },
        green: {
          700: "#118B50",
        },
        success: "#3E8000",
        accent: "#007089",
        error: ""
      },
      fontFamily: {
        primary: [
          'DM Sans',
          'serif'
        ]
      },
      fontSize: {
        md: '14px'
      },
    },
  },
  plugins: [],
} satisfies Config;
