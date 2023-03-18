/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // primary: "#C778DD", // purple
        primary: "#3178c6", // typescript color
        background: "#282C33",
        customGray: "#ABB2BF",
      },
    },
  },
  darkMode: "class",
  plugins: [],
};
