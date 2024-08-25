import GlobalStyles from '../src/configs/style/Global'
import { LightMode } from '../src/configs/style/Theme'
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
      themes: { light: LightMode },
      defaultTheme: 'light',
    }),
  ],
}

export default preview
