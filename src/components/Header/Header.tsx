import { HeaderSubtitle, HeaderTitle, HeaderWrapper } from './Header.style'
import type { HeaderProps } from './Header.d'
import i18next from 'i18next'
import { useEffect } from 'react'

const Header = ({ title, subtitle }: HeaderProps) => {
  useEffect(() => {
    const appTitle = i18next.t('common:app.title')
    const currentTitle = title === appTitle ? title : `${appTitle} | ${title}`
    document.title = currentTitle
    return () => console.info(`Unmount Header Title "${currentTitle}"`)
  },[title])

  return (
    <HeaderWrapper>
      <HeaderTitle>{title}</HeaderTitle>
      <HeaderSubtitle>{subtitle}</HeaderSubtitle>
    </HeaderWrapper>
  )
}

export default Header
