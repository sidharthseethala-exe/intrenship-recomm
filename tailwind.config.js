/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          border: 'var(--color-border)', // gray-200
          input: 'var(--color-input)', // white
          ring: 'var(--color-ring)', // orange-500
          background: 'var(--color-background)', // gray-50
          foreground: 'var(--color-foreground)', // gray-900
          primary: {
            DEFAULT: 'var(--color-primary)', // orange-500
            foreground: 'var(--color-primary-foreground)', // white
          },
          secondary: {
            DEFAULT: 'var(--color-secondary)', // blue-gray-700
            foreground: 'var(--color-secondary-foreground)', // white
          },
          destructive: {
            DEFAULT: 'var(--color-destructive)', // red-500
            foreground: 'var(--color-destructive-foreground)', // white
          },
          muted: {
            DEFAULT: 'var(--color-muted)', // gray-50
            foreground: 'var(--color-muted-foreground)', // gray-600
          },
          accent: {
            DEFAULT: 'var(--color-accent)', // yellow-400
            foreground: 'var(--color-accent-foreground)', // gray-900
          },
          popover: {
            DEFAULT: 'var(--color-popover)', // white
            foreground: 'var(--color-popover-foreground)', // gray-900
          },
          card: {
            DEFAULT: 'var(--color-card)', // white
            foreground: 'var(--color-card-foreground)', // gray-900
          },
          success: {
            DEFAULT: 'var(--color-success)', // green-500
            foreground: 'var(--color-success-foreground)', // white
          },
          warning: {
            DEFAULT: 'var(--color-warning)', // yellow-600
            foreground: 'var(--color-warning-foreground)', // white
          },
          error: {
            DEFAULT: 'var(--color-error)', // red-500
            foreground: 'var(--color-error-foreground)', // white
          },
        },
        fontFamily: {
          sans: ['Inter', 'sans-serif'],
          mono: ['JetBrains Mono', 'monospace'],
        },
        fontSize: {
          'xs': ['0.75rem', { lineHeight: '1rem' }],
          'sm': ['0.875rem', { lineHeight: '1.25rem' }],
          'base': ['1rem', { lineHeight: '1.5rem' }],
          'lg': ['1.125rem', { lineHeight: '1.75rem' }],
          'xl': ['1.25rem', { lineHeight: '1.75rem' }],
          '2xl': ['1.5rem', { lineHeight: '2rem' }],
          '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
          '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
          '5xl': ['3rem', { lineHeight: '1' }],
          '6xl': ['3.75rem', { lineHeight: '1' }],
        },
        spacing: {
          '18': '4.5rem',
          '88': '22rem',
        },
        borderRadius: {
          lg: '8px',
          md: '6px',
          sm: '4px',
        },
        boxShadow: {
          'card': '0 1px 3px rgba(0, 0, 0, 0.1)',
          'interactive': '0 4px 6px rgba(0, 0, 0, 0.1)',
        },
        animation: {
          'scale-press': 'scale-press 150ms cubic-bezier(0.4, 0, 0.2, 1)',
        },
        keyframes: {
          'scale-press': {
            '0%': { transform: 'scale(1)' },
            '50%': { transform: 'scale(0.95)' },
            '100%': { transform: 'scale(1)' },
          },
        },
        minHeight: {
          'touch': '60px',
        },
        minWidth: {
          'touch': '60px',
        },
      },
    },
    plugins: [
      require('@tailwindcss/forms'),
      require('tailwindcss-animate'),
    ],
  }