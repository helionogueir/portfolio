import type { ColorType } from '@app/application/Style/Theme'

export type PaletteProps = {
  primary: ColorType
  secondary: ColorType
  tertiary: ColorType
  black: ColorType
  white: ColorType
  blue: {
    light: ColorType
    regular: ColorType
    dark: ColorType
  }
  yellow: {
    light: ColorType
    regular: ColorType
    dark: ColorType
  }
  red: {
    light: ColorType
    regular: ColorType
    dark: ColorType
  }
  gray: {
    level1: ColorType
    level2: ColorType
    level3: ColorType
    level4: ColorType
    level5: ColorType
    level6: ColorType
    level7: ColorType
    level8: ColorType
    level9: ColorType
    level10: ColorType
  }
}
