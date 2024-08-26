import NO_RESTRICTED_IMPORTS_APP_COMPONENTS from '../components/no-restricted-imports.js'
import NO_RESTRICTED_IMPORTS_APP_PAGES from '../pages/no-restricted-imports.js'
import NO_RESTRICTED_IMPORTS_APP_REPOSITORIES from '../repositories/no-restricted-imports.js'
import NO_RESTRICTED_IMPORTS_TESTING_LIBRARY_REACT from '../../testing-library/react/no-restricted-imports.js'

export const config = [
  {
    files: ['src/domain/**/*.{js,jsx,ts,tsx}'],
    rules: {
      'no-restricted-imports': [
        'error',
        {
          patterns: [
            NO_RESTRICTED_IMPORTS_TESTING_LIBRARY_REACT,
            NO_RESTRICTED_IMPORTS_APP_COMPONENTS,
            NO_RESTRICTED_IMPORTS_APP_PAGES,
            NO_RESTRICTED_IMPORTS_APP_REPOSITORIES,
          ],
        },
      ],
    },
  },
]

export default config
