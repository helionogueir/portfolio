import { HeaderSubtitle, HeaderTitle, HeaderWrapper } from './Header.style'
import type { HeaderProps } from './Header.d'
import { useDebug} from '@app/repositories/debug/useDebug'
import { useDocumentTitle } from './helpers/useDocumentTitle'
import { useEffect } from 'react'

const Header = ({ title, subtitle }: HeaderProps) => {
  const debug = useDebug()
  const { changeDocumentTitle } = useDocumentTitle()

  useEffect(() => {
    const currentTitle = changeDocumentTitle(title)
    return () =>
        debug.info({ message: `Unmount Header Title "${currentTitle}"` })
  },[debug, changeDocumentTitle, title])

  return (
    <HeaderWrapper>
      <HeaderTitle>{title}</HeaderTitle>
      <HeaderSubtitle>{subtitle}</HeaderSubtitle>
    </HeaderWrapper>
  )
}

export default Header
