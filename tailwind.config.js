module.exports = {
  purge: {
    content: ['_site/**/*.html'],
    options: {
      safelist: [],
    },
  },
  darkMode: false,
  theme: {
    debugScreens: {
      position: ['top', 'left'],
    },
    extend: {
      fontFamily: {
        mono: '"JetBrains Mono", monospace',
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: '100%',
          },
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
    ...process.env.NODE_ENV === 'development'
      ? [require('tailwindcss-debug-screens')]
      : [],
  ],
}
