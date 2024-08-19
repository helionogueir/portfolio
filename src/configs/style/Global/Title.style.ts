import { css } from 'styled-components'

const TitleStyles = css`
  h1 {
    font-size: ${({ theme }) => theme.sizing.xxLarge};
    font-weight: ${({ theme }) => theme.weight.bold};
  }
  h2 {
    font-size: ${({ theme }) => theme.sizing.xLarge};
    font-weight: ${({ theme }) => theme.weight.bold};
  }
  h3 {
    font-size: ${({ theme }) => theme.sizing.large};
    font-weight: ${({ theme }) => theme.weight.light};
  }
  h4 {
    font-size: ${({ theme }) => theme.sizing.regular};
    font-weight: ${({ theme }) => theme.weight.light};
  }
  h5 {
    font-size: ${({ theme }) => theme.sizing.small};
    font-weight: ${({ theme }) => theme.weight.thin};
  }
  h6 {
    font-size: ${({ theme }) => theme.sizing.xSmall};
    font-weight: ${({ theme }) => theme.weight.thin};
  }
`

export default TitleStyles
