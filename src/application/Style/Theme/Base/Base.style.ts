import type { BaseProps } from '@app/application/Style/Theme/Base'
import Border from '@app/application/Style/Theme/Border'
import MediaScreen from '@app/application/Style/Theme/MediaScreen'
import Sizing from '@app/application/Style/Theme/Sizing'
import Spacing from '@app/application/Style/Theme/Spacing'
import Weight from '@app/application/Style/Theme/Weight'

const Base: BaseProps = {
  border: Border,
  mediaScreen: { ...MediaScreen },
  sizing: { ...Sizing },
  spacing: { ...Spacing },
  weight: { ...Weight },
}

export default Base
