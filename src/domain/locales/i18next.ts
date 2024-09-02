import LanguageDetector from 'i18next-browser-languagedetector'
import debug from '@app/domain/Console/useConsole'
import en from '@app/domain/Locales/en'
import i18next from 'i18next'

i18next.use(LanguageDetector).init(
  {
    debug: false,
    lowerCaseLng: true,
    fallbackLng: 'en',
    resources: { en },
    interpolation: { escapeValue: false },
    defaultNS: 'system',
    ns: ['common', 'configs', 'documentation', 'home'],
  },
  (err) =>
    err
      ? debug.error(err)
      : debug.info({
          message: `Locale has already loaded successfully (${i18next.language})`,
        }),
)

export default i18next
