/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        emerald: {
          DEFAULT: '#1D4533',
          dark: '#143527',
          light: '#2A5F47',
          deep: '#0F271D',
          translucent: 'rgba(29, 69, 51, 0.75)',
        },
        cream: {
          DEFAULT: '#F7EAE0',
          light: '#FCF7F2',
          dark: '#EED9CB',
          translucent: 'rgba(247, 234, 224, 0.82)',
        },
        peach: {
          DEFAULT: '#F9D2BA',
          light: '#FDEEE4',
          soft: '#F4C0A1',
          translucent: 'rgba(249, 210, 186, 0.5)',
        },
        brown: {
          DEFAULT: '#5E3122',
          dark: '#442318',
          light: '#7A4330',
          translucent: 'rgba(94, 49, 34, 0.75)',
        },
        gold: {
          DEFAULT: '#C5A059',
          light: '#E6C875',
          dark: '#A37E36',
          translucent: 'rgba(197, 160, 89, 0.4)',
        }
      },
      fontFamily: {
        serif: ['"Cinzel Decorative"', '"Marcellus"', 'Cormorant Garamond', 'Georgia', 'serif'],
        arabic: ['"Amiri"', '"Aref Ruqaa"', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
        accent: ['"Marcellus"', 'serif']
      },
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(29, 69, 51, 0.12)',
        'glass-hover': '0 12px 40px 0 rgba(29, 69, 51, 0.18)',
        'glass-peach': '0 8px 32px 0 rgba(249, 210, 186, 0.25)',
        'glass-emerald': '0 8px 32px 0 rgba(29, 69, 51, 0.3)',
      },
      backdropBlur: {
        'xs': '2px',
      }
    },
  },
  plugins: [],
}
