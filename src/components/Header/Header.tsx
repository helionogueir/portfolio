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
      <h1>Header 1</h1>
      <h2>Header 2</h2>
      <h3>Header 3</h3>
      <h4>Header 4</h4>
      <h5>Header 5</h5>
      <h6>Header 6</h6>
    </HeaderWrapper>
  )
}

export default Header
