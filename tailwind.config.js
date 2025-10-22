/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: '#223c94',
          dark: '#231b1c',
        },
      },
      fontFamily: {
        logo: ['Pacifico', 'serif'],
      },
      boxShadow: {
        '3xl': '0 35px 60px -12px rgba(0, 0, 0, 0.25)',
      },
      backgroundImage: {
        'blue-gradient': 'linear-gradient(135deg, #223c94 0%, #0003c4 100%)',
      },
    },
  },
  plugins: [],
}