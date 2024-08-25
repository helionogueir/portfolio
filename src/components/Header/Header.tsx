import {
  HeaderSubtitle,
  HeaderSubtitleWrapper,
  HeaderTitle,
  HeaderWrapper,
} from './Header.style'
import type { HeaderProps } from './Header.d'
import { TrucatesSize } from '@app/repositories/Text'
import { useDebug } from '@app/repositories/Debug/useDebug'
import { useEffect } from 'react'
import { usePageTitle } from '@app/repositories/Text/usePageTitle/usePageTitle'
import { useTruncate } from '@app/repositories/Text/useTruncate/useTruncate'

const Header = ({ title, subtitle }: HeaderProps) => {
  const debug = useDebug()
  const { changeDocumentTitle } = usePageTitle()
  const { trucateTextByLimit } = useTruncate()

  useEffect(() => {
    const currentTitle = changeDocumentTitle(title)

    return () =>
      debug.info({ message: `Unmount Header Title "${currentTitle}"` })
  }, [debug, changeDocumentTitle, title])

  return (
    <HeaderWrapper>
      <HeaderTitle role="heading-title" aria-label={title}>
        {title}
      </HeaderTitle>
      {subtitle && (
        <HeaderSubtitleWrapper>
          <HeaderSubtitle role="heading-subtitle" aria-label={subtitle}>
            {trucateTextByLimit(
              subtitle,
              TrucatesSize.TRUNCATE_TITLE_DESCRIPTION_LIMIT,
            )}
          </HeaderSubtitle>
        </HeaderSubtitleWrapper>
      )}
    </HeaderWrapper>
  )
}

export default Header
