module.exports = {
  root: true,
  // extends: ['eslint-config/base.js'],
  // This ensures that ESLint can find the config file regardless of the working directory.
  extends: [require.resolve('@repo/eslint-config/base.js')],
};
