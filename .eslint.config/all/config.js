import NO_RESTRICTED_IMPORTS_TESTING_LIBRARY_REACT from '../testing-library/react/no-restricted-imports.js'

const config = [
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    rules: {
      quotes: ['error', 'single', { avoidEscape: true }],
      semi: ['error', 'never', { beforeStatementContinuationChars: 'never' }],
      complexity: [2, { max: 10 }],
      'max-depth': [2, 2],
      'max-lines': [2, { max: 200, skipBlankLines: true }],
      'no-param-reassign': 'error',
      'prettier/prettier': 'error',
      'eol-last': ['error', 'always'],
      '@typescript-eslint/consistent-type-imports': 'error',
      'newline-before-return': 'error',
      'newline-after-var': ['error', 'always'],
      '@typescript-eslint/array-type': 'error',
      '@typescript-eslint/no-duplicate-enum-values': 'error',
      '@typescript-eslint/no-explicit-any': 'error',
      '@typescript-eslint/no-for-in-array': 'error',
      'no-unneeded-ternary': 2,
      '@typescript-eslint/naming-convention': [
        'error',
        {
          selector: 'variable',
          format: ['camelCase', 'UPPER_CASE', 'PascalCase'],
          leadingUnderscore: 'allow',
        },
      ],
      'padding-line-between-statements': [
        2,
        {
          blankLine: 'always',
          prev: '*',
          next: ['multiline-const', 'multiline-let'],
        },
        {
          blankLine: 'always',
          prev: ['multiline-const', 'multiline-let'],
          next: '*',
        },
        {
          blankLine: 'always',
          prev: 'multiline-expression',
          next: '*',
        },
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
      'no-restricted-imports': [
        'error',
        {
          patterns: [NO_RESTRICTED_IMPORTS_TESTING_LIBRARY_REACT],
        },
      ],
    },
  },
]

export default config
