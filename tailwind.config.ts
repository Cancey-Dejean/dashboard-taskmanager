import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#5932EA",
        blue: "#38C3FF",
        "blue-2": "#0075FF",
        red: "#FF4329",
        success: "#3DD598",
        warning: "#FFAE06",
        critical: "#FF6A55",
      },
    },
  },
  plugins: [],
}
export default config
