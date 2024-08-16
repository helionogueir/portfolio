import ResetStyles from './Reset.style'
import RootStyles from './Root.style'
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  ${ResetStyles}
  ${RootStyles}
`

export default GlobalStyle
