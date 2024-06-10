/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,htm,css}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'Nunito': ['Nunito']
      },

      colors: {
        'main-red': '#d2384f'
      },      

      backgroundImage: {
        'feature-section': "url('/assets/images/section-feature-bg.jpg')",
        'cardbg': "url('/assets/images/cardbg.png')",
        'price-list': "url('/assets/images/price_list.png')",
        'blue-pattern': "url('/assets/images/deco-01.png')",
        'red-pattern': "url('/assets/images/deco-02.jpg')",
        'community': "url('/assets/images/community_bg.png')",
      },

      boxShadow: {
        'b': 'rgba(0, 0, 0, 0.2) 0px 1px 5px 0px',
        'equal': '0 0 8px #999'
      },

      animation: {
        marquee: 'marquee 25s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-100%)' },
        }
      },
    },
  },
  plugins: [],
}

