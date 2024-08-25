type ColorType = `#${Lowercase<string>}`
type SizeType = `${number}rem`

type MediaScreenStartType =
  `@media only screen and (${'min' | 'max'}-width: ${number}rem)`

type MediaScreenStartAndEndType =
  `@media only screen and (min-width: ${number}rem) and (max-width: ${number}rem)`

export type BorderProps = {
  width: {
    thin: SizeType
    medium: SizeType
    thick: SizeType
  }
}

export type MediaScreenProps = {
  extraSmall: MediaScreenStartType | MediaScreenStartAndEndType
  small: MediaScreenStartType | MediaScreenStartAndEndType
  medium: MediaScreenStartType | MediaScreenStartAndEndType
  large: MediaScreenStartType | MediaScreenStartAndEndType
}

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

export type SizingProps = {
  xxSmall: SizeType
  xSmall: SizeType
  small: SizeType
  regular: SizeType
  large: SizeType
  xLarge: SizeType
  xxLarge: SizeType
}

export type SpacingProps = {
  small: SizeType
  regular: SizeType
  large: SizeType
}

export type WeightProps = {
  thin: number
  light: number
  regular: number
  bold: number
  bolder: number
}

export type BaseProps = {
  border: BorderProps
  mediaScreen: MediaScreenProps
  sizing: SizingProps
  spacing: SpacingProps
  weight: WeightProps
}

export type ThemeProps = BaseProps & {
  palette: PaletteProps
  test: string
}
