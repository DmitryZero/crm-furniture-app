import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary": "#060606",
        "secondary": "#FF5A00"
      },
      fontFamily: {
        'titillium-web': ['Titillium', 'sans-serif'],
        'test': ['Delicious Handrawn', 'cursive']
      }
    },
  },
  plugins: [],
} satisfies Config;
