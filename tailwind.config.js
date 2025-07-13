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
            sans: ['Karla', 'sans-serif'],
            heading: ['Poppins', 'sans-serif'],
         },
         animation: {
            'fade-in-up': 'fadeInUp 0.7s ease-out forwards',
            'fade-in': 'fadeIn 0.7s ease-out forwards',
            'slide-in-right': 'slideInRight 0.7s ease-out forwards',
            'slide-in-left': 'slideInLeft 0.7s ease-out forwards',
            'scale-in': 'scaleIn 0.5s ease-out forwards',
            'bounce-in': 'bounceIn 0.8s cubic-bezier(0.215, 0.610, 0.355, 1.000) forwards',
            'rotate-in': 'rotateIn 0.6s ease-out forwards',
         },
         keyframes: {
            fadeInUp: {
               '0%': { opacity: '0', transform: 'translateY(20px)' },
               '100%': { opacity: '1', transform: 'translateY(0)' },
            },
            fadeIn: {
               '0%': { opacity: '0' },
               '100%': { opacity: '1' },
            },
            slideInRight: {
               '0%': { opacity: '0', transform: 'translateX(-20px)' },
               '100%': { opacity: '1', transform: 'translateX(0)' },
            },
            slideInLeft: {
               '0%': { opacity: '0', transform: 'translateX(20px)' },
               '100%': { opacity: '1', transform: 'translateX(0)' },
            },
            scaleIn: {
               '0%': { opacity: '0', transform: 'scale(0.95)' },
               '100%': { opacity: '1', transform: 'scale(1)' },
            },
            bounceIn: {
               '0%': { opacity: '0', transform: 'scale3d(0.3, 0.3, 0.3)' },
               '20%': { transform: 'scale3d(1.1, 1.1, 1.1)' },
               '40%': { transform: 'scale3d(0.9, 0.9, 0.9)' },
               '60%': { opacity: '1', transform: 'scale3d(1.03, 1.03, 1.03)' },
               '80%': { transform: 'scale3d(0.97, 0.97, 0.97)' },
               '100%': { opacity: '1', transform: 'scale3d(1, 1, 1)' },
            },
            rotateIn: {
               '0%': { opacity: '0', transform: 'rotate(-15deg)' },
               '100%': { opacity: '1', transform: 'rotate(0)' },
            },
         },
      },
   },
   plugins: [
      function ({ addUtilities, theme, variants }) {
         const animationDelays = {
            '.animation-delay-100': {
               'animation-delay': '0.1s',
            },
            '.animation-delay-200': {
               'animation-delay': '0.2s',
            },
            '.animation-delay-300': {
               'animation-delay': '0.3s',
            },
            '.animation-delay-400': {
               'animation-delay': '0.4s',
            },
            '.animation-delay-500': {
               'animation-delay': '0.5s',
            },
            '.animation-delay-600': {
               'animation-delay': '0.6s',
            },
            '.animation-delay-700': {
               'animation-delay': '0.7s',
            },
            '.animation-delay-800': {
               'animation-delay': '0.8s',
            },
            '.animation-delay-900': {
               'animation-delay': '0.9s',
            },
            '.animation-delay-1000': {
               'animation-delay': '1s',
            },
            '.animation-delay-1500': {
               'animation-delay': '1.5s',
            },
            '.animation-delay-2000': {
               'animation-delay': '2s',
            },
         };

         addUtilities(animationDelays, ['responsive']);

         const animationFillModes = {
            '.animation-fill-none': {
               'animation-fill-mode': 'none',
            },
            '.animation-fill-forwards': {
               'animation-fill-mode': 'forwards',
            },
            '.animation-fill-backwards': {
               'animation-fill-mode': 'backwards',
            },
            '.animation-fill-both': {
               'animation-fill-mode': 'both',
            },
         };

         addUtilities(animationFillModes, ['responsive']);

         const animationStates = {
            '.animation-paused': {
               'animation-play-state': 'paused',
            },
            '.animation-running': {
               'animation-play-state': 'running',
            },
         };

         addUtilities(animationStates, ['responsive']);

         const animationDirections = {
            '.animation-normal': {
               'animation-direction': 'normal',
            },
            '.animation-reverse': {
               'animation-direction': 'reverse',
            },
            '.animation-alternate': {
               'animation-direction': 'alternate',
            },
            '.animation-alternate-reverse': {
               'animation-direction': 'alternate-reverse',
            },
         };

         addUtilities(animationDirections, ['responsive']);

         const initialAnimationState = {
            '.animate-initial-opacity-0': {
               'opacity': '0',
            },
         };

         addUtilities(initialAnimationState, ['responsive']);
      },
   ],
}