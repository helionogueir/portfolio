import type { TranslationHookProps } from '@app/application/Locale/useTranslation/useTranslation.d'
import i18next from '@app/domain/Locales/i18next'

export const useTranslation: TranslationHookProps = () => {
  return { ...i18next }
}

export default i18next
