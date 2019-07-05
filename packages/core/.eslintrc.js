const path = require('path');

module.exports = {
  extends: path.resolve(__dirname, '../../.eslintrc.js'),
  overrides: [
    {
      files: ['**/*.ts', '**/*.tsx'],
      parserOptions: {
        project: path.resolve(__dirname, './tsconfig.json'),
      },
    },
  ],
};
