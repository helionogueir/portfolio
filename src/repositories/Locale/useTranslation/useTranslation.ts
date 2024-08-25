import type { TranslationHookProps } from './useTranslation.d'
import i18next from '@app/domain/locales/i18next'

export const useTranslation: TranslationHookProps = () => {
  return { ...i18next }
}

export default i18next
