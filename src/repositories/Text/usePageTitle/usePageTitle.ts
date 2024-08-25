import type {
  ChangeDocumentTitleProps,
  PageTitleHookProps,
} from './usePageTitle.d'
import { isEmpty } from 'lodash'
import { useTranslation } from '@app/repositories/Locale/useTranslation'

export const usePageTitle: PageTitleHookProps = () => {
  const { t } = useTranslation()

  const changeDocumentTitle: ChangeDocumentTitleProps = (title) => {
    const appTitle = t('system:app.name')

    if (isEmpty(title)) return appTitle
    const currentTitle = title === appTitle ? title : `${appTitle} | ${title}`

    document.title = currentTitle

    return currentTitle
  }

  return { changeDocumentTitle }
}
