import Header from '@app/components/Header'
import { useTranslation } from '@app/application/Locale/useTranslation'

export const HomeHeader = () => {
  const { t } = useTranslation()
  const title = t('configs:app.name')
  const subtitle = t('home:subtitle')

  return <Header title={title} subtitle={subtitle} />
}
