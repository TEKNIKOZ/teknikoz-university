/** @type {import('tailwindcss').Config} */
module.exports = {
   darkMode: 'class',
   content: [
      './app/components/**/*.{js,vue,ts}',
      './app/layouts/**/*.vue',
      './app/pages/**/*.vue',
      './app/plugins/**/**/*.{js,ts}',
      './app/app.vue',
   ],
   theme: {
      extend: {
         colors: {
            brand: {
               DEFAULT: "#15A0E7",
            },
         },
         fontFamily: {
            sans: ['Inter', 'sans-serif'],
            heading: ['Poppins', 'sans-serif'],
         },
      },
   },
   plugins: [],
}