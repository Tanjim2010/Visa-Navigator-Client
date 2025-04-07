/** @type {import('tailwindcss').Config} */
import daisyui from 'daisyui';
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-color': '#FF7729'
      }
    },
  },
  plugins: [daisyui]
  ,
  daisyui: {
    themes: ["light", "dark"], // Add more themes if needed
  },
}

// tailwind.config.js
