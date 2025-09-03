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
          50: '#e6fffe',
          100: '#b3fffc',
          200: '#80fff9',
          300: '#4dfff7',
          400: '#1afff4',
          500: '#00d4ca',
          600: '#00a89f',
          700: '#007c75',
          800: '#00504a',
          900: '#002420',
        },
        secondary: {
          50: '#fff4e6',
          100: '#ffe2b3',
          200: '#ffcf80',
          300: '#ffbd4d',
          400: '#ffaa1a',
          500: '#ff9800',
          600: '#e68900',
          700: '#b36b00',
          800: '#804d00',
          900: '#4d2e00',
        },
        accent: {
          purple: '#8b5cf6',
          blue: '#3b82f6',
          pink: '#ec4899',
          yellow: '#fbbf24',
        },
        dark: {
          900: '#0f172a',
          800: '#1e293b',
          700: '#334155',
        },
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        'gradient-secondary': 'linear-gradient(135deg, #00d4ca 0%, #007c75 100%)',
        'gradient-hero': 'linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)',
        'gradient-card': 'linear-gradient(135deg, #f3f4f6 0%, #e5e7eb 100%)',
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