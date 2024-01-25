/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#2f27ce",
        secondary: "#dddbff",
        accent: "#443dff",
        background: "#fbfbfe",
        text: "#040316",
      },
    },
  },
  plugins: [],
};
