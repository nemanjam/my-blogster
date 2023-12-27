module.exports = {
  root: true,
  // extends: ['eslint-config/main.js'],
  // This ensures that ESLint can find the config file regardless of the working directory.
  extends: [require.resolve('eslint-config/main.js')],
};
