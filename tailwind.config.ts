import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#e6f1ff',
          100: '#b3d4ff',
          200: '#80b8ff',
          300: '#4d9bff',
          400: '#1a7fff',
          500: '#0066e6',
          600: '#0052b3',
          700: '#003d80',
          800: '#00294d',
          900: '#001433',
        },
        secondary: {
          50: '#f3e6ff',
          100: '#d9b3ff',
          200: '#bf80ff',
          300: '#a64dff',
          400: '#8c1aff',
          500: '#7300e6',
          600: '#5900b3',
          700: '#400080',
          800: '#26004d',
          900: '#0d001a',
        },
      },
      fontFamily: {
        sans: ['var(--font-noto-sans)', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};
export default config;