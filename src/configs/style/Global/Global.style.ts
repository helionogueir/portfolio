import ResetStyles from './Reset.style'
import RootStyles from './Root.style'
import TitleStyles from './Title.style'
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  ${ResetStyles}
  ${RootStyles}
  ${TitleStyles}
`

export default GlobalStyle
