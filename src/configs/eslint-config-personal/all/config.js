import NO_RESTRICTED_IMPORTS_TESTING_LIBRARY_REACT from '../testing-library/react/no-restricted-imports.js'

const config = [
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    rules: {
      quotes: ['error', 'single', { avoidEscape: true }],
      semi: ['error', 'never', { beforeStatementContinuationChars: 'never' }],
      'prettier/prettier': 'error',
      'eol-last': ['error', 'always'],
      '@typescript-eslint/consistent-type-imports': 'error',
      'newline-before-return': 'error',
      'newline-after-var': ['error', 'always'],
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
