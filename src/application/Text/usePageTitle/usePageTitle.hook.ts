import type {
  ChangeDocumentTitleProps,
  PageTitleHookProps,
} from '@app/application/Text/usePageTitle'
import { isEmpty } from 'lodash'
import { useTranslation } from '@app/application/Locale/useTranslation'

export const usePageTitle: PageTitleHookProps = () => {
  const { t } = useTranslation()

  const changeDocumentTitle: ChangeDocumentTitleProps = (title) => {
    const appTitle = t('config:app.name')

    if (isEmpty(title)) return appTitle
    const currentTitle = title === appTitle ? title : `${appTitle} | ${title}`

    document.title = currentTitle

    return currentTitle
  }

  return { changeDocumentTitle }
}
