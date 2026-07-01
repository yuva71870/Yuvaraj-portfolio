/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        display: ['"Bebas Neue"', 'sans-serif'],
        body: ['Poppins', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace']
      },
      colors: {
        neon: {
          red: '#ff2a6d',
          blue: '#05d9e8',
          purple: '#d300c5',
          gold: '#ffc857'
        },
        ink: {
          900: '#05030d',
          800: '#0a0717',
          700: '#0f0b22'
        }
      },
      animation: {
        'aurora': 'aurora 14s linear infinite',
        'float': 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 3s ease-in-out infinite',
        'lightning': 'lightning 5s linear infinite',
        'rain': 'rain 1s linear infinite',
        'comic-pop': 'comicPop 0.4s ease-out'
      },
      keyframes: {
        aurora: {
          '0%, 100%': { transform: 'translate(0,0) rotate(0deg)' },
          '50%': { transform: 'translate(20px,-30px) rotate(180deg)' }
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-14px)' }
        },
        pulseGlow: {
          '0%,100%': { boxShadow: '0 0 20px rgba(5,217,232,.4), 0 0 40px rgba(255,42,109,.3)' },
          '50%':     { boxShadow: '0 0 40px rgba(5,217,232,.7), 0 0 80px rgba(211,0,197,.5)' }
        },
        lightning: {
          '0%, 92%, 100%': { opacity: 0 },
          '93%, 95%': { opacity: .9 }
        },
        rain: {
          '0%': { transform: 'translateY(-10vh)' },
          '100%': { transform: 'translateY(110vh)' }
        },
        comicPop: {
          '0%': { transform: 'scale(.6) rotate(-4deg)', opacity: 0 },
          '60%': { transform: 'scale(1.05) rotate(2deg)', opacity: 1 },
          '100%': { transform: 'scale(1) rotate(0)' }
        }
      }
    }
  },
  plugins: []
}
