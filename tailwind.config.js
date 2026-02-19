/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#3b82f6",       // main blue (active menu)
        secondary: "#f3f4f6",     // light gray background
        accent: "#f97316",        // orange highlight
        sidebarBg: "#1f2937",     // dark sidebar background
        sidebarText: "#d1d5db",   // sidebar text color
        sidebarHover: "#374151",  // hover background
        sidebarActive: "#2563eb", // active menu bg
      },
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [
    // require("@tailwindcss/forms"),
    // require("@tailwindcss/typography"),
  ],
  darkMode: "class",
};
