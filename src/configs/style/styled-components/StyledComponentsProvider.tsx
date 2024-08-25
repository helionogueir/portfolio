import GlobalStyles from '@app/configs/style/Global'
import { Light } from '@app/configs/style/Theme/Mode/Light'
import type { StyledComponentsProviderProps } from './styled-components.d'
import { ThemeProvider } from 'styled-components'

const StyledComponentsProvider = ({
  children,
}: StyledComponentsProviderProps) => (
  <ThemeProvider theme={Light}>
    <GlobalStyles />
    {children}
  </ThemeProvider>
)

export default StyledComponentsProvider
