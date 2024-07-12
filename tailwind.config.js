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
        'default-100': '#404040',
        'default-200': '#71717a',
        'default-600': '#FFFFFF',
        grayPrimary: '#27272A',
        graySecondary: '#404040',
        text1: '#000000',
        text2: '#FFFFFF',
        creme: '#d6c377',
        kaki: '#555036',
        lightBlue: '#565A80',
        gradiant: 'linear-gradient(90deg, rgba(255, 255, 255, 1) 0 %, rgba(177, 200, 204, 1) 100 %)'
      },
      backgroundPosition: {
        'top-hero': 'center 1rem',
      },
      backgroundImage: {
        'radial-custom-gradient': 'radial-gradient(circle, rgba(39,39,42,1) 0%, rgba(31,29,29,1) 100%);',
      },
      dropShadow: {
        'custom': '0 35px 35px rgba(0, 0, 0, 0.25)',
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
}

