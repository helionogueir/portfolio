import styled from 'styled-components'

export const HeaderWrapper = styled.header`
  display: flex;
  justify-content: center;
  flex-direction: column;
  border-bottom: ${({ theme }) =>
    `${theme.test} solid ${theme.palette.gray.level2}`};
  padding: ${({ theme }) => theme.spacing.regular};
  width: calc(100vw - (${({ theme }) => theme.spacing.regular} * 2));
  max-height: 16rem;
`

export const HeaderTitle = styled.h1`
  color: ${({ theme }) => theme.palette.primary};
  padding-bottom: ${({ theme }) => theme.spacing.small};
`

export const HeaderSubtitleWrapper = styled.section`
  display: flex;
  justify-content: center;
  width: 100%;
`

export const HeaderSubtitle = styled.p`
  text-align: center;
  width: 100%;

  ${({ theme }) => theme.mediaScreen.small} {
    width: 50%;
  }
`
