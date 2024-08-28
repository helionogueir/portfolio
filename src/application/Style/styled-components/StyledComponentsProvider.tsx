import GlobalStyles from '@app/application/Style/Global'
import { Light } from '@app/application/Style/Theme/Mode'
import type { StyledComponentsProviderProps } from '@app/application/Style/styled-components/styled-components'
import { ThemeProvider } from 'styled-components'

export const StyledComponentsProvider = ({
  children,
}: StyledComponentsProviderProps) => (
  <ThemeProvider theme={Light}>
    <GlobalStyles />
    {children}
  </ThemeProvider>
)
