module.exports = {
  root: true,
  env: {
    jest: true,
  },
  overrides: [
    {
      files: ['**/*.ts'],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        tsconfigRootDir: __dirname,
        project: ['./tsconfig.json', './tsconfig.spec.json'],
      },
      plugins: [
        '@typescript-eslint',
      ],
      extends: [
        'eslint:recommended',
        'airbnb-base',
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
      ],
      rules: {
        'import/extensions': 'off',
        'import/no-unresolved': 'off',
      },
    },
    {
      files: ['**/*.js'],
      extends: [
        'eslint:recommended',
        'airbnb-base',
      ],
    },
  ],
};
