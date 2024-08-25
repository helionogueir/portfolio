import Header from '@app/components/Header'
import { useTranslation } from '@app/repositories/Locale/useTranslation'

const HomeHeader = () => {
  const { t } = useTranslation()
  const title = t('system:app.name')
  const subtitle = t('home:subtitle')

  return <Header title={title} subtitle={subtitle} />
}

export default HomeHeader
