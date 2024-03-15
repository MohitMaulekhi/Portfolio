/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        'Dark-Bg': '#0c0c1d',
        'ProjectBg': '#6140ef',
      },
  },
  plugins: [],
}
}
