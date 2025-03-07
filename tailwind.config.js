module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FF6B00',
        secondary: '#333333',
        accent: '#4CAF50',
        background: '#F9FAFB',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        card: '0 4px 6px rgba(0, 0, 0, 0.1)',
      },
      borderRadius: {
        lg: '12px',
      },
    },
  },
  plugins: [{
    "@tailwindcss/postcss": {},
  },
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
};

export default config;