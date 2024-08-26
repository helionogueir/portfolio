import NO_RESTRICTED_IMPORTS_APP_CONFIGS from '../configs/no-restricted-imports.js'
import NO_RESTRICTED_IMPORTS_APP_DOMAIN from '../domain/no-restricted-imports.js'
import NO_RESTRICTED_IMPORTS_TESTING_LIBRARY_REACT from '../../testing-library/react/no-restricted-imports.js'

export const config = [
  {
    files: ['src/pages/**/*.{js,jsx,ts,tsx}'],
    rules: {
      'no-restricted-imports': [
        'error',
        {
          patterns: [
            NO_RESTRICTED_IMPORTS_TESTING_LIBRARY_REACT,
            NO_RESTRICTED_IMPORTS_APP_CONFIGS,
            NO_RESTRICTED_IMPORTS_APP_DOMAIN,
          ],
        },
      ],
    },
  },
]

export default config
