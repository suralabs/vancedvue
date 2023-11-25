// .eslintrc.cjs
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
  overrides: [
    {
      files: ['*.config.js'],
      env: {
        node: true,
      },
    },
  ],
};
