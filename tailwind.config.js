/** @type {import('tailwindcss').Config} */
const withAnimations = require('animated-tailwindcss');

module.exports = withAnimations({
  content: ['./src/**/*.{html,js}'],
  theme: {
    fontFamily: {
      Oswald: ['Oswald', 'sans-seif'],
      Pretendard: ['Pretendard', 'sans-serif'],
    },
    fontSize: {
      xs: ['12px', '1.4'],
      sm: ['16px', '1.4'],
      tiny: ['20px', '1.5'],
      base: ['24px', '1.5'],
      md: ['32px', '1.4'],
      md2: ['36px', '1.4'],
      md3: ['40px', '1.25'],
      lg: ['48px', '1.4'],
      xl: ['64px', '1.4'],
      '2xl': ['72px', '1.2'],
      '3xl': ['80px', '1.2'],
      '4xl': ['96px', '1.2'],
      '5xl': ['128px', '1.2'],
    },
    colors: {
      transparent: 'transparent',
      primary: '#003af1',
      secondary: '#00ff81',
      black: '#000000',
      white: '#ffffff',
      neutral: {
        200: '#fafafa',
        300: '#f5f5f5',
        400: '#e0e0e0',
        500: '#b0b0b0',
        600: '#5e6e7e',
        800: '#4E5A67',
      },
      bgcolor: {
        100: '#f6f7fb',
        300: '#111829',
        600: '#0E1423',
        900: '#0c111d',
      },
    },
    extend: {
      backgroundImage: {
        bg01: "url('/public/img/bg01.png')",
        bg03: "url('/public/img/bg03.jpg')",
      },
      spacing: {
        '5%': '5%',
        '10%': '10%',
        '15%': '15%',
        '20%': '20%',
        '25%': '25%',
        '30%': '30%',
        '35%': '35%',
        '40%': '40%',
        '45%': '45%',
        '50%': '50%',
        '55%': '55%',
        '60%': '60%',
        '65%': '65%',
        '70%': '70%',
        '75%': '75%',
        '80%': '80%',
        '85%': '85%',
        '90%': '90%',
        '95%': '95%',
        '100%': '100%',
        4: '4px',
        8: '8px',
        12: '12px',
        14: '14px',
        16: '16px',
        20: '20px',
        24: '24px',
        32: '32px',
        36: '36px',
        40: '40px',
        48: '48px',
        56: '56px',
        64: '64px',
        96: '96px',
        120: '120px',
        128: '128px',
        160: '160px',
        240: '240px',
        256: '256px',
        300: '300px',
        320: '320px',
        360: '360px',

        400: '400px',
        480: '480px',
        560: '560px',
        640: '640px',
        768: '768px',
        960: '960px',
        1024: '1024px',
        1280: '1280px',
      },
      borderRadius: {
        8: '8px',
        12: '12px',
        16: '16px',
        20: '20px',
        24: '24px',
        32: '32px',
        48: '48px',
        full: '9999px',
      },
    },
  },
  plugins: [],
});
