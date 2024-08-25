import type { BaseProps } from './Base.d'
import Border from '../Border'
import MediaScreen from '../MediaScreen'
import Sizing from '../Sizing'
import Spacing from '../Spacing'
import Weight from '../Weight'

const Base: BaseProps = {
  border: Border,
  mediaScreen: { ...MediaScreen },
  sizing: { ...Sizing },
  spacing: { ...Spacing },
  weight: { ...Weight },
}

export default Base
