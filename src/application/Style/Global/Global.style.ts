import ParagraphStyles from '@app/application/Style/Global/Paragraph.style'
import ResetStyles from '@app/application/Style/Global/Reset.style'
import RootStyles from '@app/application/Style/Global/Root.style'
import TitleStyles from '@app/application/Style/Global/Title.style'
import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  ${ResetStyles}
  ${RootStyles}
  ${TitleStyles}
  ${ParagraphStyles}
`

export default GlobalStyles
