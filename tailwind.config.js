/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        /* JAIN Corporate palette */
        'jain-red':   '#c61423',   /* Primary CTA red     */
        'jain-navy':  '#0b132b',   /* Deep navy headings  */
        'jain-slate': '#f1f5f9',   /* Light section bg    */
        'jain-dark':  '#080e1f',   /* Footer dark         */
        /* Keep backward-compat aliases */
        'theme-red':  '#c61423',
        'theme-gray': '#f1f5f9',
        'theme-dark': '#080e1f',
        'theme-gold': '#f5a623',
      },
      fontFamily: {
        sans: ['var(--font-jakarta)', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'card':    '0 4px 24px rgba(11,19,43,0.08)',
        'card-lg': '0 12px 48px rgba(11,19,43,0.16)',
      },
      animation: {
        'fade-up': 'fadeUp 0.7s ease forwards',
      },
      keyframes: {
        fadeUp: {
          from: { opacity: 0, transform: 'translateY(24px)' },
          to:   { opacity: 1, transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};
