import GlobalStyles from '../src/configs/style/Global'
import type { Preview } from '@storybook/react'
import Theme from '../src/configs/style/Theme'
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
      themes: { light: Theme },
      defaultTheme: 'light',
    }),
  ],
}

export default preview
