/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        bg: {
          DEFAULT: '#0A0A0A',
          darker: '#050505',
          card: '#111111',
          cardBorder: '#1F291E',
          surface: '#151515',
        },
        neon: {
          DEFAULT: '#39FF6A',
          lime: '#00FF41',
          glow: 'rgba(57, 255, 106, 0.3)',
          dim: '#22A343',
        },
        text: {
          main: '#EDEDED',
          muted: '#8E8E93',
          dim: '#555555',
        },
      },
      fontFamily: {
        heading: ['Rajdhani', 'sans-serif'],
        mono: ['"DM Mono"', 'monospace'],
        sans: ['"DM Sans"', 'sans-serif'],
      },
      animation: {
        'marquee': 'marquee 25s linear infinite',
        'marquee-reverse': 'marquee-reverse 25s linear infinite',
        'pulse-glow': 'pulse-glow 3s ease-in-out infinite',
        'glitch-skew': 'glitch-skew 1s steps(2, start) infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'marquee-reverse': {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0%)' },
        },
        'pulse-glow': {
          '0%, 100%': {
            boxShadow: '0 0 15px rgba(57, 255, 106, 0.2), inset 0 0 15px rgba(57, 255, 106, 0.1)',
          },
          '50%': {
            boxShadow: '0 0 30px rgba(57, 255, 106, 0.5), inset 0 0 25px rgba(57, 255, 106, 0.25)',
          },
        },
        'glitch-skew': {
          '0%': { transform: 'skew(0deg)' },
          '20%': { transform: 'skew(-3deg)' },
          '40%': { transform: 'skew(2deg)' },
          '60%': { transform: 'skew(-1deg)' },
          '80%': { transform: 'skew(3deg)' },
          '100%': { transform: 'skew(0deg)' },
        },
      },
    },
  },
  plugins: [],
}
