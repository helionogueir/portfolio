import Header from '@app/components/Header'
import i18next from '@app/domain/locales/i18next'

const HomeHeader = () => {
  const { t } = i18next
  const title = t('common:app.title')
  const subtitle = t('common:app.subtitle')

  return (
    <Header title={title} subtitle={subtitle}/>
  )
}

export default HomeHeader
