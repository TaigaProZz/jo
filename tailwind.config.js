const { nextui } = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",

    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      height: {
        'hero': '716px',
      },
      colors: {
        creme: '#d6c377',
        kaki: '#555036',
      },
      backgroundPosition: {
        'top-hero': 'center 1rem',
      },
      dropShadow: {
        'custom': '0 35px 35px rgba(0, 0, 0, 0.25)',
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
}

