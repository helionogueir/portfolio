module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'plugin:prettier/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh', 'prettier'],
  rules: {
    quotes: ['error', 'single', { avoidEscape: true }],
    semi: ['error', 'never', { beforeStatementContinuationChars: 'never' }],
    'prettier/prettier': 'error',
    'eol-last': ['error', 'always'],
    'no-restricted-imports': ['error', '..'],
    '@typescript-eslint/consistent-type-imports': 'error',
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    'sort-imports': [
      'error',
      {
        ignoreCase: false,
        ignoreDeclarationSort: false,
        ignoreMemberSort: false,
        memberSyntaxSortOrder: ['none', 'all', 'multiple', 'single'],
        allowSeparatedGroups: false,
      },
    ],
  },
}
