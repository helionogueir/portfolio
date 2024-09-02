import affectAllPackages from './.eslint.config/all/config.js'
import affectAppPackage from './.eslint.config/app/config.js'
import affectApplicationPackage from './.eslint.config/app/application/config.js'
import affectComponentsPackage from './.eslint.config/app/components/config.js'
import affectDomainPackage from './.eslint.config/app/domain/config.js'
import affectPagesPackage from './.eslint.config/app/pages/config.js'
import eslintPluginPrettier from 'eslint-plugin-prettier'
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended'
import eslintPluginStorybook from 'eslint-plugin-storybook'
import globals from 'globals'
import js from '@eslint/js'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'
import unusedImports from 'eslint-plugin-unused-imports'

// @TODO: force components and application sorce packages have a *.test.tsx, a component package has a *.component.tsx, page package has a *.page.tsx ...
const defautConfig = tseslint.config(
  { ignores: ['coverage', 'dist', 'node_modules'] },
  {
    extends: [
      js.configs.recommended,
      ...tseslint.configs.recommended,
      eslintPluginPrettierRecommended,
    ],
    files: ['**/*.{js,jsx,ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      'unused-imports': unusedImports,
      storybook: eslintPluginStorybook,
      prettier: eslintPluginPrettier,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
    },
  },
)

export default [
  ...defautConfig,
  ...affectAllPackages,
  ...affectAppPackage,
  ...affectApplicationPackage,
  ...affectComponentsPackage,
  ...affectDomainPackage,
  ...affectPagesPackage,
]
