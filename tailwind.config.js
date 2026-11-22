/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#0B1F3A',
          50: '#EAF0F7',
          100: '#C9D8E8',
          200: '#9AB5D1',
          300: '#6B92BA',
          400: '#3C6FA3',
          500: '#234E80',
          600: '#0E3360',
          700: '#0B1F3A',
          800: '#081729',
          900: '#050F1C',
        },
        primary: {
          DEFAULT: '#17469E',
          hover: '#003E90',
          soft: '#EAF4FC',
        },
        accent: {
          DEFAULT: '#8FD3F4',
          light: '#BFE9FA',
          soft: '#EAF4FC',
        },
        // Keep existing page utilities compatible with the refreshed palette.
        gold: {
          DEFAULT: '#8FD3F4',
          light: '#BFE9FA',
          dark: '#17469E',
          soft: '#EAF4FC',
        },
        brand: {
          gold: '#C9A227',
        },
        border: '#D8E3EF',
        cream: '#F8FAFC',
        ink: '#0B1F3A',
        stone: {
          DEFAULT: '#6B7280',
          light: '#D1D5DB',
          dark: '#4B5563',
        },
      },
      fontFamily: {
        grotesk: ['"Space Grotesk"', 'sans-serif'],
        inter: ['"Inter"', 'sans-serif'],
        mono: ['"Space Mono"', 'monospace'],
        display: ['"Playfair Display"', 'serif'],
      },
      animation: {
        'spin-slow': 'spin 20s linear infinite',
        'marquee': 'marquee 30s linear infinite',
        'fade-up': 'fadeUp 0.6s ease-out forwards',
        'fade-in': 'fadeIn 0.5s ease-out forwards',
        'pulse-ring': 'pulseRing 2s ease-out infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        pulseRing: {
          '0%': { transform: 'scale(0.8)', opacity: '1' },
          '100%': { transform: 'scale(1.4)', opacity: '0' },
        },
      },
    },
  },
  plugins: [],
};
