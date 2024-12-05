/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        foreground: "#171717",
      },
      backgroundImage: {
        primary: "linear-gradient(to right, #ff512f, #dd2476)",
      },
    },
  },
  plugins: [],
};
