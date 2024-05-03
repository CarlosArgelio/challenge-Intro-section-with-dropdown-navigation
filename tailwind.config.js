/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        mobile: "375px",
        desktop: "1440px",
      },
      colors: {
        "neutral-almost-white": "hsl(0, 0%, 98%)",
        "neutral-medium-gray": "hsl(0, 0%, 41%)",
        "neutral-almost-black": "hsl(0, 0%, 8%)",
      },
      fontFamily: {
        Epilogue: ["Epilogue"],
      },
    },
  },
  plugins: [],
};
