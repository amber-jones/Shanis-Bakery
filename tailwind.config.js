/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: ['var(--font-caslon)'],
        body: ['var(--font-poppins)'],
      },

      colors: {
        pink: '#F4ADB3',
        green: '#508367',
        brown: '#826651',
        orange: '#F58059',
      },
    },
  },
  plugins: [],
};
