import ParagraphStyles from './Paragraph.style'
import ResetStyles from './Reset.style'
import RootStyles from './Root.style'
import TitleStyles from './Title.style'
import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  ${ResetStyles}
  ${RootStyles}
  ${TitleStyles}
  ${ParagraphStyles}
`

export default GlobalStyles
