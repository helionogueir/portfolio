const testingLibraryNoRestrictedImports = {
  group: ['@testing-library/react', '@testing-library/react/*'],
  message: 'Please use "@app/configs/test/testing-library/react" instead',
}

const domainNoRestrictedImports = {
  group: ['@app/domain', '@app/domain/*'],
  message:
    'Please create an "@app/repositories" custom hook to access the "@app/domain" hooks',
}

const repositoriesNoRestrictedImports = {
  group: ['@app/repositories', '@app/repositories/*'],
  message:
    'Sorry, but it is not allowed to use "@app/repositories" in this package',
}

export const personalRulesConfig = [
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    rules: {
      quotes: ['error', 'single', { avoidEscape: true }],
      semi: ['error', 'never', { beforeStatementContinuationChars: 'never' }],
      'prettier/prettier': 'error',
      'eol-last': ['error', 'always'],
      'no-restricted-imports': ['error', '..'],
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
          patterns: [testingLibraryNoRestrictedImports],
        },
      ],
    },
  },
]

export const restrictDomainImportsConfig = [
  {
    files: ['src/{components,configs,pages}/**/*.{js,jsx,ts,tsx}'],
    rules: {
      'no-restricted-imports': [
        'error',
        {
          patterns: [
            testingLibraryNoRestrictedImports,
            domainNoRestrictedImports,
          ],
        },
      ],
    },
  },
]

export const restrictRepositoriesImportsConfig = [
  {
    files: ['src/{domain}/**/*.{js,jsx,ts,tsx}'],
    rules: {
      'no-restricted-imports': [
        'error',
        {
          patterns: [
            testingLibraryNoRestrictedImports,
            repositoriesNoRestrictedImports,
          ],
        },
      ],
    },
  },
]
