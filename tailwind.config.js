module.exports = {
  mode: "jit",
  purge: ["./src/**/*.tsx"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ["ui-sans-serif", "system-ui"],
      serif: ["ui-serif", "Georgia", "ui-sans-serif"],
      mono: ["ui-monospace", "SFMono-Regular", "ui-sans-serif"],
      nato: ["Noto Serif", "ui-sans-serif"],
      hina: ["Hina Mincho", "ui-sans-serif"],
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
