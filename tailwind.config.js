/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
    colors: {
      primary: '#f13a01',
      back:'rgb(209 213 219)',
      wh:"#FFFFFF",
      bl:"#000000",
      grb:"#9E9E9E",
      gray700:"#616161",
      gray300:" #E0E0E0",
      gray100:" #F5F5F5",
      red400:"#EF5350"
    },
  },
  plugins: [],
}