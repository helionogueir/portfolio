// @TODO: Add alias @app
import GlobalStyles from '../src/application/Style/Global'
import { Light } from '../src/application/Style/Theme/Mode'
import type { Preview } from '@storybook/react'
import { ThemeProvider } from 'styled-components'
import { withThemeFromJSXProvider } from '@storybook/addon-themes'

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    withThemeFromJSXProvider({
      GlobalStyles,
      Provider: ThemeProvider,
      themes: { light: Light },
      defaultTheme: 'light',
    }),
  ],
}

export default preview
