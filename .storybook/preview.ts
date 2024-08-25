import GlobalStyles from '../src/configs/style/Global'
import { Light } from '../src/configs/style/Theme/Mode/Light'
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
