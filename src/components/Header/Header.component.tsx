import {
  HeaderSubtitle,
  HeaderSubtitleWrapper,
  HeaderTitle,
  HeaderWrapper,
} from '@app/components/Header/Header.style'
import type { HeaderProps } from '@app/components/Header'
import { TrucatesSize } from '@app/application/Text'
import { usePageTitle } from '@app/application/Text/usePageTitle'
import { useTruncate } from '@app/application/Text/useTruncate'

// @TODO: Add npm @radix
export const Header = ({ title, subtitle }: HeaderProps) => {
  const { changeDocumentTitle } = usePageTitle()
  const { trucateTextByLimit } = useTruncate()
  const currentTitle = changeDocumentTitle(title)

  return (
    <HeaderWrapper>
      <HeaderTitle>{currentTitle}</HeaderTitle>
      {subtitle && (
        <HeaderSubtitleWrapper>
          <HeaderSubtitle>
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
