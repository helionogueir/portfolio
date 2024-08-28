import { css } from 'styled-components'

const TitleStyles = css`
  h1 {
    font-size: ${({ theme }) => theme.sizing.large};
    font-weight: ${({ theme }) => theme.weight.bold};

    ${({ theme }) => theme.mediaScreen.small} {
      font-size: ${({ theme }) => theme.sizing.xxLarge};
    }
  }
  h2 {
    font-size: ${({ theme }) => theme.sizing.large};
    font-weight: ${({ theme }) => theme.weight.bold};

    ${({ theme }) => theme.mediaScreen.small} {
      font-size: ${({ theme }) => theme.sizing.xLarge};
    }
  }
  h3 {
    font-size: ${({ theme }) => theme.sizing.regular};
    font-weight: ${({ theme }) => theme.weight.regular};

    ${({ theme }) => theme.mediaScreen.small} {
      font-size: ${({ theme }) => theme.sizing.large};
    }
  }
  h4 {
    font-size: ${({ theme }) => theme.sizing.small};
    font-weight: ${({ theme }) => theme.weight.regular};

    ${({ theme }) => theme.mediaScreen.small} {
      font-size: ${({ theme }) => theme.sizing.regular};
    }
  }
  h5 {
    font-size: ${({ theme }) => theme.sizing.xSmall};
    font-weight: ${({ theme }) => theme.weight.light};

    ${({ theme }) => theme.mediaScreen.small} {
      font-size: ${({ theme }) => theme.sizing.small};
    }
  }
  h6 {
    font-size: ${({ theme }) => theme.sizing.xxSmall};
    font-weight: ${({ theme }) => theme.weight.light};

    ${({ theme }) => theme.mediaScreen.small} {
      font-size: ${({ theme }) => theme.sizing.xSmall};
    }
  }
`

export default TitleStyles
