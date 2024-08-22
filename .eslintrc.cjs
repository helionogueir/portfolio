module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh'],
  rules: {
    'quotes': ['error', 'single', { 'avoidEscape': true }],
    'semi': ['error', 'never', { 'beforeStatementContinuationChars': 'never'}],
    'eol-last': ['error', 'always'],
    'no-restricted-imports': ['error', '..'],
    '@typescript-eslint/consistent-type-imports': 'error',
    "indent": ["error", 2],
    'react-refresh/only-export-components': [
      'warn', { allowConstantExport: true },
    ],
    'max-len': ['error', { 
      code: 80,
      ignoreStrings: true,
      ignoreComments: true
    }],
    'sort-imports': ['error', {
      'ignoreCase': false,
      'ignoreDeclarationSort': false,
      'ignoreMemberSort': false,
      'memberSyntaxSortOrder': ['none', 'all', 'multiple', 'single'],
      'allowSeparatedGroups': false
    }]
  },
}
