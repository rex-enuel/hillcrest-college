/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0A3D3C',
          50: '#E8F0F0',
          100: '#D1E1E0',
          200: '#A8C9C8',
          300: '#7AB8B6',
          400: '#4D9A97',
          500: '#2E7D7B',
          600: '#1A5E5D',
          700: '#145452',
          800: '#0A3D3C',
          900: '#062928',
        },
        accent: {
          DEFAULT: '#F45B5B',
          50: '#FEF0F0',
          100: '#FDE2E2',
          200: '#FAC5C5',
          300: '#F79999',
          400: '#F57070',
          500: '#F45B5B',
          600: '#E04848',
          700: '#C43636',
          800: '#9B2A2A',
          900: '#7A2222',
        },
        neutral: {
          50: '#F9FAFB',
          100: '#F3F4F6',
          200: '#E5E7EB',
          300: '#D1D5DB',
          400: '#9CA3AF',
          500: '#6B7280',
          600: '#4B5563',
          700: '#374151',
          800: '#1F2937',
          900: '#111827',
        }
      },
      fontFamily: {
        display: ['Lobster', 'cursive'],
        sans: ['Outfit', 'system-ui', 'sans-serif'],
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
      },
      spacing: {
        '1': '0.25rem',
        '2': '0.5rem',
        '3': '0.75rem',
        '4': '1rem',
        '5': '1.25rem',
        '6': '1.5rem',
        '8': '2rem',
        '10': '2.5rem',
        '12': '3rem',
        '16': '4rem',
      },
      borderRadius: {
        sm: '0.25rem',
        md: '0.5rem',
        lg: '0.75rem',
        xl: '1rem',
        full: '9999px',
      },
      transitionDuration: {
        fast: '150ms',
        normal: '250ms',
        slow: '400ms',
      },
      transitionTimingFunction: {
        'ease-out': 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        'ease-in-out': 'cubic-bezier(0.42, 0, 0.58, 1)',
        'ease-spring': 'cubic-bezier(0.34, 1.56, 0.64, 1)',
      },
      boxShadow: {
        'focus-ring': '0 0 0 3px rgba(168, 201, 200, 0.6)',
        'focus-ring-dark': '0 0 0 3px rgba(10, 61, 60, 0.4)',
        'btn-primary': '0 4px 12px rgba(10, 61, 60, 0.3)',
        'btn-accent': '0 4px 12px rgba(244, 91, 91, 0.4)',
      },
      keyframes: {
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'slide-down': {
          '0%': { opacity: '0', transform: 'translateY(-10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'scale-in': {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
      },
      animation: {
        'fade-in-up': 'fade-in-up 400ms cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards',
        'fade-in': 'fade-in 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards',
        'slide-down': 'slide-down 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards',
        'scale-in': 'scale-in 250ms cubic-bezier(0.34, 1.56, 0.64, 1) forwards',
      },
    },
  },
  plugins: [],
}