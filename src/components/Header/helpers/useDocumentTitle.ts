import type {
  ChangeDocumentTitleProps,
  DocumentTitleHookProps,
} from './useDocumentTitle.d'
import { isEmpty } from 'lodash'
import { useTranslation } from '@app/repositories/i18n/useTranslation'

export const useDocumentTitle: DocumentTitleHookProps = () => {
  const { t } = useTranslation()

  const changeDocumentTitle: ChangeDocumentTitleProps = (title) => {
    const appTitle = t('common:app.title')

    if (isEmpty(title)) return appTitle
    const currentTitle = title === appTitle ? title : `${appTitle} | ${title}`

    document.title = currentTitle

    return currentTitle
  }

  return { changeDocumentTitle }
}
