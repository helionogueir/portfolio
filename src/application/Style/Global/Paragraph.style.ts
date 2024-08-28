import { css } from 'styled-components'

const ParagraphStyles = css`
  p,
  span {
    font-size: ${({ theme }) => theme.sizing.xSmall};
    line-height: calc(${({ theme }) => theme.sizing.xSmall} + 0.4rem);
    font-weight: ${({ theme }) => theme.weight.regular};

    ${({ theme }) => theme.mediaScreen.small} {
      font-size: ${({ theme }) => theme.sizing.regular};
      line-height: calc(${({ theme }) => theme.sizing.regular} + 0.4rem);
    }
  }
`

export default ParagraphStyles
