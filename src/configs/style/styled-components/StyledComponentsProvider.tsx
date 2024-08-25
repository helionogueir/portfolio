import GlobalStyles from '@app/configs/style/Global'
import { LightMode } from '@app/configs/style/Theme'
import type { StyledComponentsProviderProps } from './styled-components.d'
import { ThemeProvider } from 'styled-components'

const StyledComponentsProvider = ({
  children,
}: StyledComponentsProviderProps) => (
  <ThemeProvider theme={LightMode}>
    <GlobalStyles />
    {children}
  </ThemeProvider>
)

export default StyledComponentsProvider
