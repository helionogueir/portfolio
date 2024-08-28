import NO_RESTRICTED_IMPORTS_APP from './no-restricted-imports.js'
import NO_RESTRICTED_IMPORTS_APP_COMPONENTS from './components/no-restricted-imports.js'
import NO_RESTRICTED_IMPORTS_APP_DOMAIN from './domain/no-restricted-imports.js'
import NO_RESTRICTED_IMPORTS_TESTING_LIBRARY_REACT from '../testing-library/react/no-restricted-imports.js'

export const config = [
  {
    files: ['src/*.{js,jsx,ts,tsx}'],
    rules: {
      'no-restricted-imports': [
        'error',
        {
          patterns: [
            NO_RESTRICTED_IMPORTS_APP,
            NO_RESTRICTED_IMPORTS_TESTING_LIBRARY_REACT,
            NO_RESTRICTED_IMPORTS_APP_COMPONENTS,
            NO_RESTRICTED_IMPORTS_APP_DOMAIN,
          ],
        },
      ],
    },
  },
]

export default config
