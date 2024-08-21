import Header from '@app/components/Header'
import { useTranslation } from '@app/repositories/i18n/useTranslation'

const HomeHeader = () => {
  const { t } = useTranslation()
  const title = t('common:app.title')
  const subtitle = t('common:app.subtitle')

  return (
    <Header title={title} subtitle={subtitle}/>
  )
}

export default HomeHeader
