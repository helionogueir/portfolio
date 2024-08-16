import LanguageDetector from 'i18next-browser-languagedetector'
import en from './en'
import i18next from 'i18next'

i18next.use(LanguageDetector).init({
  debug: false,
  lowerCaseLng: true,
  fallbackLng: 'en',
  resources: { en },
  interpolation: { escapeValue: false },
  defaultNS: 'common',
  ns: [ 'common' ],
}, (err) => err
  ? console.error('i18next', err)
  : console.info(`Locale has already loaded successfully (${i18next.language})`)
)

export default i18next
