import Base from './Base'
import Palette from './Palette'
import type { ThemeProps } from './Theme.d'

export const LightMode: ThemeProps = {
  ...Base,
  palette: { ...Palette },
  test: '1rem',
}
