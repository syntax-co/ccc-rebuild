/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors:{
        'purple':'#E94AFF',
        'trans-purple':'#E94AFF55',
        'blue':'#4AE6FF',
        'trans-blue':'#4AE6FF55',
        'gray':'#252525',
        'glass-gray':'#00000088',
        'glass-white':'#aaaaaa33'
      }
      ,
      screens:{
        'sm':'360px'
      }
    },
  },
  plugins: [],
}
