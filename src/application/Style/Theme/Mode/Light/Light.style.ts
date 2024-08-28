import Base from '@app/application/Style/Theme/Base'
import Palette from '@app/application/Style/Theme/Palette'
import type { ThemeProps } from '@app/application/Style/Theme'

export const Light: ThemeProps = { ...Base, palette: { ...Palette } }
