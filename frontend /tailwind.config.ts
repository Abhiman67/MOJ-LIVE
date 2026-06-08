import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          red: '#C50000',
          'red-light': '#FF5252',
          'red-dark': '#A00000'
        },
        luxury: {
          white: '#FFFFFF',
          'gray-light': '#F8F9FA',
          gray: '#E9ECEF',
          'gray-dark': '#6C757D',
          navy: '#0F1C3F'
        },
        success: {
          green: '#00C853'
        },
        brand: {
          red: '#C50000',
          'red-light': '#FF5252',
          'red-dark': '#A00000',
          navy: '#0F1C3F',
          white: '#FFFFFF',
          'gray-light': '#F8F9FA',
          gray: '#E9ECEF',
          'gray-dark': '#6C757D'
        }
      },
      boxShadow: {
        soft: '0 20px 40px rgba(0, 0, 0, 0.08)'
      },
      maxWidth: {
        '8xl': '90rem'
      },
      borderRadius: {
        '2xl': '1.25rem'
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-out'
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        }
      }
    }
  },
  plugins: []
}

export default config
