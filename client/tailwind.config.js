/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "white-5": "rgba(255, 255, 255, 0.05)",
        "blue-027aff": "#027AFF",
      },
    },
  },
  plugins: [],
};
