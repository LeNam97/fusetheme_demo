module.exports = {
  mode: 'jit',
  purge: ["./src/app/**/*.{ts,html}"],
  content: ["./src/**/*.{html,js}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      spacing: {
        text: '120px',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
